import { Banknote } from "lucide-react";

// 1. Define Types
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

const TARGET_CURRENCIES = [
  { code: "USD", flag: "🇺🇸" },
  { code: "EUR", flag: "🇪🇺" },
  { code: "GBP", flag: "🇬🇧" },
  { code: "AED", flag: "🇦🇪" },
  { code: "SAR", flag: "🇸🇦" },
  { code: "CAD", flag: "🇨🇦" },
  { code: "CNY", flag: "🇨🇳" },
];

function getEthiopianDate(offsetDays = 0): string {
  const date = new Date();
  date.setDate(date.getDate() - offsetDays);
  return date.toLocaleDateString("en-CA", {
    timeZone: "Africa/Addis_Ababa",
  });
}

async function fetchFromCbe(date: string, retries = 2): Promise<CbeRate[] | null> {
  const endpoint = `https://combanketh.et/cbeapi/daily-exchange-rates/?_limit=1&Date=${date}`;

  for (let i = 0; i <= retries; i++) {
    try {
      const res = await fetch(endpoint, {
        next: { revalidate: 3600 },
        headers: {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36",
          "Accept": "application/json, text/plain, */*",
          "Accept-Language": "en-US,en;q=0.9",
          "Cache-Control": "no-cache",
          "Connection": "keep-alive"
        },
      });

      if (!res.ok) {
        if (res.status === 404 || res.status === 500) return null; // Likely no data or server error
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
      // Wait a bit before retrying
      await new Promise(r => setTimeout(r, 500 * (i + 1)));
    }
  }
  return null;
}

async function getExchangeRates(): Promise<CbeRate[] | null> {
  // Try today, then yesterday, then the day before
  // CBE sometimes doesn't update on weekends/holidays
  for (let offset = 0; offset <= 3; offset++) {
    const date = getEthiopianDate(offset);
    const rates = await fetchFromCbe(date);
    if (rates && rates.length > 0) {
      if (offset > 0) {
        console.log(`Using CBE rates from ${date} (fallback)`);
      }
      return rates;
    }
  }

  return null;
}

export default async function ExchangeTicker() {
  const rates = await getExchangeRates();

  if (!rates) return null;

  const ratesMap = new Map(rates.map((item) => [item.currency.CurrencyCode, item]));

  return (
    <div className="w-full border-y border-border bg-card/50 backdrop-blur-sm overflow-hidden py-3 relative z-40 px-6 sm:px-12">
      <div className="absolute left-6 sm:left-12 top-0 bottom-0 z-10 flex items-center bg-[#5d2b90] px-4 shadow-lg shadow-purple-900/20">
        <Banknote className="mr-2 h-4 w-4 text-white" />
        <span className="text-xs font-bold text-white uppercase tracking-wider">
          Daily Exchange Rate <br />
          CBE Official
        </span>
      </div>

      <div className="flex w-full overflow-hidden mask-fade-sides pl-40">
        <div className="flex min-w-full animate-marquee items-center gap-8 pr-8">
          <CurrencyList ratesMap={ratesMap} />
          <CurrencyList ratesMap={ratesMap} />
        </div>
      </div>
    </div>
  );
}

function CurrencyList({ ratesMap }: { ratesMap: Map<string, CbeRate> }) {
  return (
    <>
      {TARGET_CURRENCIES.map((curr) => {
        const rateData = ratesMap.get(curr.code);
        if (!rateData) return null;

        return (
          <div key={curr.code} className="flex items-center gap-2 shrink-0">
            <span className="text-xl">{curr.flag}</span>
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-muted-foreground leading-none">
                {curr.code}
              </span>
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold font-mono text-foreground">
                  {rateData.cashBuying.toFixed(2)}
                </span>
                <span className="text-[9px] text-muted-foreground uppercase">Birr</span>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}