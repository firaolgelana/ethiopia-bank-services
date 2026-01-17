import { ArrowUp, ArrowDown, Banknote } from "lucide-react";

// 1. Define the Shape of the API Response
interface ExchangeData {
    usdCurrentBlackPrice: number;
    dailyPercentage: number;
    allLastprice: Record<string, number>; // Dynamic object: "USD": 189.0, "EUR": 219.0
}

// 2. Select which currencies you want to display
const TARGET_CURRENCIES = [
    { code: "USD", name: "US Dollar", flag: "🇺🇸" },
    { code: "EUR", name: "Euro", flag: "🇪🇺" },
    { code: "GBP", name: "Pound Sterling", flag: "🇬🇧" },
    { code: "AED", name: "UAE Dirham", flag: "🇦🇪" },
    { code: "SAR", name: "Saudi Riyal", flag: "🇸🇦" },
    { code: "CAD", name: "Canadian Dollar", flag: "🇨🇦" },
    { code: "CNY", name: "Chinese Yuan", flag: "🇨🇳" },
];

// Fallback Mock Data in case API fails
const MOCK_DATA: ExchangeData = {
    usdCurrentBlackPrice: 124.50,
    dailyPercentage: 0.85,
    allLastprice: {
        USD: 124.50,
        EUR: 135.20,
        GBP: 158.40,
        AED: 33.90,
        SAR: 33.15,
        CAD: 92.30,
        CNY: 17.10
    }
};

async function getExchangeRates(): Promise<ExchangeData | null> {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 100000); // 3-second timeout

    try {
        const res = await fetch("https://ethioblackmarket.com/api/latest-prices?period=daily", {
            signal: controller.signal,
            next: { revalidate: 300 }, // Cache for 5 minutes
            headers: {
                // 🚨 IMPORTANT: Many APIs block requests without this header
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
            }
        });

        clearTimeout(timeoutId);

        if (!res.ok) {
            console.warn(`Exchange API Status: ${res.status}. Using fallback data.`);
            return MOCK_DATA;
        }

        return await res.json();
    } catch (error) {
        console.warn("Exchange API failed or timed out. Using fallback data.", error);
        return MOCK_DATA;
    }
}

export default async function ExchangeTicker() {
    const data = await getExchangeRates();

    if (!data || !data.allLastprice) {
        return null; // Don't render anything if API fails
    }

    return (
        <div className="w-full border-y border-border bg-card/50 backdrop-blur-sm overflow-hidden py-3 relative z-40">

            {/* Label Badge (Absolute positioned on left) */}
            <div className="absolute left-0 top-0 bottom-0 z-10 flex items-center bg-primary px-4 shadow-lg shadow-primary/20">
                <Banknote className="mr-2 h-4 w-4 text-primary-foreground" />
                <span className="text-xs font-bold text-primary-foreground uppercase tracking-wider">
                    Black Market
                </span>
            </div>

            {/* 
         The Marquee Container 
         We create two sets of the same data to make the loop seamless 
      */}
            <div className="flex w-full overflow-hidden mask-fade-sides pl-32">
                <div className="flex min-w-full animate-marquee items-center gap-8 pr-8">
                    {/* Render List Once */}
                    <CurrencyList data={data} />
                    {/* Render List Again (for seamless looping) */}
                    <CurrencyList data={data} />
                </div>
            </div>
        </div>
    );
}

// Helper Sub-component to render the items
function CurrencyList({ data }: { data: ExchangeData }) {
    return (
        <>
            {TARGET_CURRENCIES.map((curr) => {
                const price = data.allLastprice[curr.code];

                // If USD, we can show the specific daily percentage from the API root
                const isUSD = curr.code === "USD";
                const trend = isUSD ? data.dailyPercentage : 0;

                return (
                    <div key={curr.code} className="flex items-center gap-2 shrink-0">
                        <span className="text-lg">{curr.flag}</span>
                        <div className="flex flex-col">
                            <span className="text-[10px] font-bold text-muted-foreground leading-none">
                                {curr.code}
                            </span>
                            <div className="flex items-center gap-1.5">
                                <span className="text-sm font-bold font-mono text-foreground">
                                    {price.toFixed(2)}
                                </span>

                                {/* Show trend indicator only for USD (since API gives specific data) */}
                                {isUSD && (
                                    <span className={`flex items-center text-[10px] font-medium ${trend >= 0 ? "text-green-500" : "text-red-500"}`}>
                                        {trend >= 0 ? <ArrowUp size={10} /> : <ArrowDown size={10} />}
                                        {Math.abs(trend).toFixed(2)}%
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                );
            })}
        </>
    );
}