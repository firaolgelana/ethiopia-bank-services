"use client";

import { useState, useMemo } from "react";
import { 
  Calculator, 
  ArrowRight, 
  Trophy, 
  AlertCircle, 
  Banknote,
  TrendingUp,
  Filter
} from "lucide-react";
import Image from "next/image";

// 1. MOCK DATA: Realistic Ethiopian Bank Rates (Annual %)
// In a real app, this would come from your Database/API
const BANK_RATES = [
  { id: "cbe", name: "Commercial Bank of Ethiopia", savingsRate: 10.0, fixedRate: 8.5, color: "#6F2C91", minFixed: 10000 },
  { id: "awash", name: "Awash Bank", savingsRate: 8.0, fixedRate: 10.5, color: "#F7941D", minFixed: 50000 },
  { id: "dashen", name: "Dashen Bank", savingsRate: 7.5, fixedRate: 10.0, color: "#00539C", minFixed: 25000 },
  { id: "abyssinia", name: "Bank of Abyssinia", savingsRate: 8.0, fixedRate: 11.0, color: "#FDC300", minFixed: 50000 },
  { id: "hibret", name: "Hibret Bank", savingsRate: 7.5, fixedRate: 10.2, color: "#000000", minFixed: 25000 },
  { id: "amhara", name: "Amhara Bank", savingsRate: 9.5, fixedRate: 13.5, color: "#00A651", minFixed: 10000 }, // Newer banks often have higher rates
  { id: "coop", name: "Coop Bank of Oromia", savingsRate: 8.0, fixedRate: 10.0, color: "#00A550", minFixed: 10000 },
  { id: "zemen", name: "Zemen Bank", savingsRate: 7.0, fixedRate: 11.5, color: "#CD2027", minFixed: 100000 },
  { id: "goh", name: "Goh Betoch Bank", savingsRate: 9.0, fixedRate: 12.5, color: "#F37021", minFixed: 10000 },
  { id: "global", name: "Global Bank", savingsRate: 8.5, fixedRate: 12.0, color: "#00AEEF", minFixed: 20000 },
];

export default function CompareRates() {
  // --- STATE ---
  const [amount, setAmount] = useState<number>(100000); // Default 100,000 ETB
  const [duration, setDuration] = useState<number>(12); // Default 1 year (months)
  const [type, setType] = useState<"savings" | "fixed">("savings");

  // --- LOGIC ---
  const results = useMemo(() => {
    return BANK_RATES.map((bank) => {
      // 1. Get the correct rate based on type
      const rate = type === "savings" ? bank.savingsRate : bank.fixedRate;
      
      // 2. Check minimum requirement for fixed deposits
      const isEligible = type === "fixed" ? amount >= bank.minFixed : true;

      // 3. Simple Interest Calculation: P * R * T
      // (Note: Savings is usually Compound, but we use Simple for estimation clarity)
      const grossInterest = amount * (rate / 100) * (duration / 12);
      
      // 4. Tax (Approx 10% on interest in Ethiopia)
      const tax = grossInterest * 0.10;
      const netProfit = grossInterest - tax;

      return {
        ...bank,
        activeRate: rate,
        grossInterest,
        netProfit,
        totalReturn: amount + netProfit,
        isEligible
      };
    })
    // Filter out banks where user doesn't meet minimum deposit (optional, or just gray them out)
    .sort((a, b) => b.netProfit - a.netProfit); // Sort highest profit first
  }, [amount, duration, type]);

  // Format currency
  const formatEth = (val: number) => 
    new Intl.NumberFormat('en-ET', { style: 'currency', currency: 'ETB', maximumFractionDigits: 0 }).format(val);

  return (
    <main className="min-h-screen bg-muted/30 pt-24 pb-20 px-4 md:px-8">
      <div className="mx-auto max-w-6xl">
        
        {/* HEADER */}
        <div className="mb-8 text-center md:text-left">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl flex items-center justify-center md:justify-start gap-3">
            <Calculator className="text-primary" /> Compare Interest Rates
          </h1>
          <p className="mt-2 text-muted-foreground">
            Calculate your potential earnings across Ethiopia's top banks.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* LEFT: CONTROLS (Sticky on Desktop) */}
          <div className="lg:col-span-4 h-fit space-y-6">
            <div className="rounded-xl border border-border bg-card-background p-6 shadow-sm sticky top-24">
              <h2 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <Filter size={18} /> Configuration
              </h2>
              
              {/* Input: Amount */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Deposit Amount (ETB)</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground font-bold">Br</span>
                  <input 
                    type="number" 
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    className="w-full rounded-md border border-input bg-background pl-10 pr-4 py-2 text-lg font-bold focus:ring-2 focus:ring-primary focus:outline-none"
                  />
                </div>
              </div>

              {/* Input: Duration */}
              <div className="space-y-2 pt-4">
                <label className="text-sm font-medium">Duration: <span className="text-primary font-bold">{duration} Months</span></label>
                <input 
                  type="range" 
                  min="3" 
                  max="60" 
                  step="1"
                  value={duration}
                  onChange={(e) => setDuration(Number(e.target.value))}
                  className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>3 Mos</span>
                  <span>1 Year</span>
                  <span>5 Years</span>
                </div>
              </div>

              {/* Input: Type Switch */}
              <div className="space-y-2 pt-4">
                <label className="text-sm font-medium">Account Type</label>
                <div className="grid grid-cols-2 gap-2 rounded-lg bg-muted p-1">
                  <button 
                    onClick={() => setType("savings")}
                    className={`rounded-md py-2 text-sm font-medium transition-all ${type === "savings" ? "bg-background shadow-sm text-foreground" : "text-muted-foreground hover:text-foreground"}`}
                  >
                    Savings
                  </button>
                  <button 
                    onClick={() => setType("fixed")}
                    className={`rounded-md py-2 text-sm font-medium transition-all ${type === "fixed" ? "bg-background shadow-sm text-foreground" : "text-muted-foreground hover:text-foreground"}`}
                  >
                    Fixed Time
                  </button>
                </div>
              </div>

              {/* Summary Box */}
              <div className="mt-6 rounded-lg bg-primary/10 p-4">
                <div className="text-sm text-muted-foreground">Estimated Tax (10%)</div>
                <div className="font-medium text-foreground">Automatically deducted</div>
              </div>
            </div>
          </div>

          {/* RIGHT: RESULTS LIST */}
          <div className="lg:col-span-8 space-y-4">
            <h2 className="font-semibold text-muted-foreground mb-2">
              Results (Sorted by Highest Return)
            </h2>

            {results.map((bank, index) => (
              <div 
                key={bank.id} 
                className={`relative overflow-hidden rounded-xl border bg-card-background p-4 sm:p-6 transition-all hover:shadow-md ${index === 0 ? "border-primary ring-1 ring-primary shadow-lg scale-[1.01]" : "border-border"}`}
              >
                {/* Winner Badge for #1 */}
                {index === 0 && (
                  <div className="absolute top-0 right-0 rounded-bl-xl bg-primary px-3 py-1 text-xs font-bold text-primary-foreground flex items-center gap-1">
                    <Trophy size={12} /> Best Deal
                  </div>
                )}

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                  
                  {/* Logo Placeholder */}
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-muted text-xl font-bold text-muted-foreground">
                     {/* Replace with <Image> when you have files */}
                     {/* <Image src={`/banks/${bank.id}.png`} width={40} height={40} alt={bank.name} /> */}
                     {bank.name.substring(0, 2).toUpperCase()}
                  </div>

                  {/* Bank Info */}
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground">{bank.name}</h3>
                    
                    {!bank.isEligible ? (
                       <div className="mt-1 flex items-center text-sm text-destructive font-medium">
                         <AlertCircle size={14} className="mr-1" />
                         Min deposit required: {formatEth(bank.minFixed)}
                       </div>
                    ) : (
                      <div className="mt-1 flex items-center gap-3 text-sm">
                        <span className="flex items-center text-muted-foreground">
                          <TrendingUp size={14} className="mr-1" /> 
                          Rate: <span className="ml-1 font-bold text-foreground">{bank.activeRate}%</span>
                        </span>
                        <span className="hidden sm:inline text-border">|</span>
                        <span className="text-muted-foreground">
                          Duration: {duration} months
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Financial Result */}
                  <div className={`text-right ${!bank.isEligible ? "opacity-50 blur-[1px]" : ""}`}>
                    <div className="text-xs text-muted-foreground">Net Profit</div>
                    <div className="text-xl sm:text-2xl font-bold text-green-600 dark:text-green-400">
                      +{formatEth(bank.netProfit)}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      Total: {formatEth(bank.totalReturn)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </main>
  );
}