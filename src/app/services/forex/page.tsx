import React from "react";
import { 
  ArrowRightLeft, 
  TrendingUp, 
  Banknote, 
  Calendar, 
  AlertCircle 
} from "lucide-react";
import https from "https"; // Needed for SSL bypass if on Node environment

// --- 1. Types & Interfaces ---
interface CbeCurrency {
  CurrencyCode: string;
  CurrencyName: string;
}

interface CbeRate {
  currency: CbeCurrency;
  cashBuying: number;
  cashSelling: number;
  transactionalBuying: number;
  transactionalSelling: number;
}

interface CbeApiResponse {
  Date: string;
  ExchangeRate: CbeRate[];
}

// --- 2. Flag Helper ---
const getFlag = (code: string) => {
  const flags: Record<string, string> = {
    USD: "🇺🇸", EUR: "🇪🇺", GBP: "🇬🇧", AED: "🇦🇪",
    SAR: "🇸🇦", CAD: "🇨🇦", CNY: "🇨🇳", CHF: "🇨🇭",
    SEK: "🇸🇪", NOK: "🇳🇴", DKK: "🇩🇰", DJF: "🇩🇯",
    JPY: "🇯🇵", INR: "🇮🇳", KES: "🇰🇪", AUD: "🇦🇺",
    ZAR: "🇿🇦", KWD: "🇰🇼"
  };
  return flags[code] || "🏳️";
};

// --- 3. Date Helpers ---
function getDateString(minusDays = 0): string {
  const date = new Date();
  date.setDate(date.getDate() - minusDays);
  return date.toLocaleDateString("en-CA", { timeZone: "Africa/Addis_Ababa" }); // YYYY-MM-DD
}

// --- 4. The Fetch Function (User Provided + SSL Fix) ---
async function fetchFromCbe(date: string, retries = 2): Promise<CbeRate[] | null> {
  const endpoint = `https://combanketh.et/cbeapi/daily-exchange-rates/?_limit=1&Date=${date}`;

  // SSL Agent to bypass legacy certificate issues
  const agent = new https.Agent({
    rejectUnauthorized: false,
    minVersion: "TLSv1",
    ciphers: "DEFAULT@SECLEVEL=0" 
  });

  for (let i = 0; i <= retries; i++) {
    try {
      const res = await fetch(endpoint, {
        // @ts-ignore
        agent: agent, 
        next: { revalidate: 3600 },
        headers: {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36",
          "Accept": "application/json, text/plain, */*",
          "Cache-Control": "no-cache",
          "Connection": "keep-alive"
        },
      });

      if (!res.ok) {
        if (res.status === 404 || res.status === 500) return null;
        throw new Error(`Status ${res.status}`);
      }

      const rawData: CbeApiResponse[] = await res.json();
      if (!rawData || rawData.length === 0 || !rawData[0].ExchangeRate) {
        return null;
      }

      return rawData[0].ExchangeRate;

    } catch (error) {
      if (i === retries) {
        console.error(`CBE API Error for date ${date}:`, error instanceof Error ? error.message : error);
        return null;
      }
      await new Promise(r => setTimeout(r, 500 * (i + 1)));
    }
  }
  return null;
}

// --- 5. Main Page Component ---
export default async function ForexPage() {
  // Logic: Try Today. If null, try Yesterday.
  const todayStr = getDateString(0);
  const yesterdayStr = getDateString(1);
  
  let rates = await fetchFromCbe(todayStr);
  let displayDate = todayStr;
  let isOutdated = false;

  if (!rates) {
    console.log("Today's rates not found, fetching yesterday...");
    rates = await fetchFromCbe(yesterdayStr);
    displayDate = yesterdayStr;
    isOutdated = true;
  }

  if (!rates) {
    return (
      <div className="min-h-screen pt-24 flex flex-col items-center justify-center text-center px-4">
        <AlertCircle size={48} className="text-red-500 mb-4" />
        <h1 className="text-2xl font-bold">Exchange Rates Unavailable</h1>
        <p className="text-muted-foreground mt-2">Could not connect to CBE Official API. Please try again later.</p>
      </div>
    );
  }

  // Filter Highlighted Currencies
  const highlights = rates.filter(r => ["USD", "EUR", "GBP"].includes(r.currency.CurrencyCode));
  const others = rates.filter(r => !["USD", "EUR", "GBP"].includes(r.currency.CurrencyCode));

  return (
    <main className="min-h-screen bg-background pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header Section */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
            <Banknote size={16} /> Official CBE Rates
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Daily Exchange Rates
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real-time currency exchange rates sourced directly from the Commercial Bank of Ethiopia.
          </p>
          
          <div className="flex items-center justify-center gap-2 text-sm font-medium mt-4">
            <Calendar size={16} className="text-muted-foreground" />
            <span className={isOutdated ? "text-orange-500" : "text-green-600"}>
              {new Date(displayDate).toDateString()} 
              {isOutdated && " (Yesterday's Closing)"}
            </span>
          </div>
        </div>

        {/* Highlights Grid (Big Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((rate) => (
            <div key={rate.currency.CurrencyCode} className="bg-card border border-border rounded-xl p-6 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110" />
              
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-3">
                  <span className="text-4xl shadow-sm rounded-full bg-background p-1">{getFlag(rate.currency.CurrencyCode)}</span>
                  <div>
                    <h3 className="text-xl font-bold">{rate.currency.CurrencyCode}</h3>
                    <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">{rate.currency.CurrencyName}</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-muted/30 p-3 rounded-lg">
                  <p className="text-xs text-muted-foreground mb-1">Cash Buying</p>
                  <p className="text-lg font-mono font-bold text-green-600">{rate.cashBuying.toFixed(4)}</p>
                </div>
                <div className="bg-muted/30 p-3 rounded-lg">
                  <p className="text-xs text-muted-foreground mb-1">Cash Selling</p>
                  <p className="text-lg font-mono font-bold text-red-500">{rate.cashSelling.toFixed(4)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Table Section */}
        <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
          <div className="p-6 border-b border-border flex items-center justify-between">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <ArrowRightLeft size={18} /> Full Currency List
            </h3>
            <span className="text-xs text-muted-foreground">Values in ETB</span>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-muted-foreground uppercase bg-muted/50">
                <tr>
                  <th className="px-6 py-4 font-semibold">Currency</th>
                  <th className="px-6 py-4 font-semibold text-right">Cash Buying</th>
                  <th className="px-6 py-4 font-semibold text-right">Cash Selling</th>
                  <th className="px-6 py-4 font-semibold text-right hidden sm:table-cell">Trans. Buying</th>
                  <th className="px-6 py-4 font-semibold text-right hidden sm:table-cell">Trans. Selling</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[...highlights, ...others].map((rate) => (
                  <tr key={rate.currency.CurrencyCode} className="hover:bg-muted/30 transition-colors">
                    <td className="px-6 py-4 font-medium flex items-center gap-3">
                      <span className="text-xl">{getFlag(rate.currency.CurrencyCode)}</span>
                      <div className="flex flex-col">
                        <span>{rate.currency.CurrencyCode}</span>
                        <span className="text-[10px] text-muted-foreground hidden sm:inline">{rate.currency.CurrencyName}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right font-mono text-green-600 font-medium">
                      {rate.cashBuying > 0 ? rate.cashBuying.toFixed(4) : "-"}
                    </td>
                    <td className="px-6 py-4 text-right font-mono text-red-500 font-medium">
                      {rate.cashSelling > 0 ? rate.cashSelling.toFixed(4) : "-"}
                    </td>
                    <td className="px-6 py-4 text-right font-mono text-muted-foreground hidden sm:table-cell">
                      {rate.transactionalBuying.toFixed(4)}
                    </td>
                    <td className="px-6 py-4 text-right font-mono text-muted-foreground hidden sm:table-cell">
                      {rate.transactionalSelling.toFixed(4)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-lg p-4 flex gap-4 items-start">
           <AlertCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
           <div className="text-sm text-blue-800 dark:text-blue-300">
             <p className="font-semibold mb-1">Important Note</p>
             <p>
               Rates are subject to change throughout the day. "Cash" rates apply to physical notes at branches. 
               "Transactional" rates apply to wire transfers, drafts, and digital payments. 
               Data sourced officially from Commercial Bank of Ethiopia.
             </p>
           </div>
        </div>

      </div>
    </main>
  );
}