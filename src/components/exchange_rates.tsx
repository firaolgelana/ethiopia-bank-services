import { ArrowUp, ArrowDown, RefreshCcw } from "lucide-react";

const RATES = [
  { currency: "USD", buy: "122.50", sell: "126.10", trend: "up" },
  { currency: "EUR", buy: "131.20", sell: "135.40", trend: "up" },
  { currency: "GBP", buy: "155.80", sell: "160.00", trend: "down" },
  { currency: "AED", buy: "33.30", sell: "34.50", trend: "stable" },
];

export default function ExchangeRates() {
  return (
    <section className="w-full border-y border-border bg-card/50 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-4 md:flex-row">
        
        {/* Header / Date */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
            <RefreshCcw size={20} />
          </div>
          <div>
            <h3 className="text-sm font-bold text-foreground">Daily Exchange Rates</h3>
            <p className="text-xs text-muted-foreground">Updated: Jan 17, 2026</p>
          </div>
        </div>

        {/* Rates Scroller/Grid */}
        <div className="flex flex-1 flex-wrap items-center justify-center gap-2 md:justify-end md:gap-6">
          {RATES.map((rate) => (
            <div 
              key={rate.currency} 
              className="flex min-w-35 items-center gap-3 rounded-lg border border-border bg-background px-4 py-2 shadow-sm"
            >
              {/* Flag/Symbol Placeholder */}
              <span className="font-bold text-foreground">{rate.currency}</span>
              
              <div className="flex flex-col text-right">
                <span className="text-xs text-muted-foreground">Buying</span>
                <span className="font-mono text-sm font-medium text-foreground">
                  {rate.buy}
                </span>
              </div>

              {/* Trend Indicator */}
              <div className={`flex items-center text-xs ${
                rate.trend === 'up' ? 'text-green-500' : 
                rate.trend === 'down' ? 'text-red-500' : 'text-gray-400'
              }`}>
                {rate.trend === 'up' && <ArrowUp size={14} />}
                {rate.trend === 'down' && <ArrowDown size={14} />}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <button className="hidden rounded-full bg-foreground px-4 py-2 text-xs font-semibold text-background hover:opacity-90 md:block">
          View All Currencies
        </button>
      </div>
    </section>
  );
}