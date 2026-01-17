"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/nav_bar"; // Adjust path to your Navbar
import Footer from "@/components/footer";   // Adjust path to your Footer
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip as RechartsTooltip, Legend } from "recharts";
import { Calculator, Calendar, DollarSign, Percent, Table } from "lucide-react";

// --- Utility Components (Simulating Shadcn UI for clean look) ---
const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`text-card-foreground rounded-xl border bg-white dark:bg-zinc-900 shadow-sm ${className}`}>
    {children}
  </div>
);

const Label = ({ children }: { children: React.ReactNode }) => (
  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mb-2 block text-gray-700 dark:text-gray-300">
    {children}
  </label>
);

const Input = ({ ...props }) => (
  <input
    {...props}
    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-700 dark:bg-zinc-800"
  />
);

export default function LoanCalculator() {
  // --- State ---
  const [amount, setAmount] = useState<number>(500000); // Default 500,000 ETB
  const [interest, setInterest] = useState<number>(14.5); // Default 14.5% (Avg Ethiopian Bank Rate)
  const [years, setYears] = useState<number>(5);
  
  const [monthlyPayment, setMonthlyPayment] = useState<number>(0);
  const [totalPayment, setTotalPayment] = useState<number>(0);
  const [totalInterest, setTotalInterest] = useState<number>(0);
  const [schedule, setSchedule] = useState<any[]>([]);
  const [showSchedule, setShowSchedule] = useState(false);

  // --- Calculation Logic ---
  useEffect(() => {
    const userAmount = Number(amount);
    const userInterest = Number(interest);
    const userYears = Number(years);

    if (userAmount > 0 && userInterest > 0 && userYears > 0) {
      const principal = userAmount;
      const calculatedInterest = userInterest / 100 / 12;
      const calculatedPayments = userYears * 12;

      // Amortization Formula: M = P [ i(1 + i)^n ] / [ (1 + i)^n – 1 ]
      const x = Math.pow(1 + calculatedInterest, calculatedPayments);
      const monthly = (principal * x * calculatedInterest) / (x - 1);

      if (isFinite(monthly)) {
        const total = monthly * calculatedPayments;
        const totalInt = total - principal;

        setMonthlyPayment(monthly);
        setTotalPayment(total);
        setTotalInterest(totalInt);

        // Generate Schedule
        let balance = principal;
        const newSchedule = [];
        for (let i = 1; i <= calculatedPayments; i++) {
          const interestPayment = balance * calculatedInterest;
          const principalPayment = monthly - interestPayment;
          balance -= principalPayment;
          
          if (i <= 12 || i % 12 === 0) { // Optimize: Show first year + yearly summary to save memory in simple view
             newSchedule.push({
                month: i,
                payment: monthly,
                interest: interestPayment,
                principal: principalPayment,
                balance: balance > 0 ? balance : 0
             });
          }
        }
        setSchedule(newSchedule);
      }
    }
  }, [amount, interest, years]);

  // --- Formatting ---
  const formatETB = (val: number) => 
    new Intl.NumberFormat('en-ET', { style: 'currency', currency: 'ETB' }).format(val);

  // --- Chart Data ---
  const chartData = [
    { name: "Principal", value: amount },
    { name: "Total Interest", value: totalInterest },
  ];
  const COLORS = ["#16a34a", "#dc2626"]; // Green (Principal), Red (Interest)

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-gray-100 flex flex-col">
      <Navbar />

      <div className="grow pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-4xl font-extrabold tracking-tight mb-2">Loan Calculator</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Estimate your monthly payments for CBE, Awash, Dashen, and other Ethiopian banks.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* LEFT COLUMN: Inputs */}
            <div className="lg:col-span-4 space-y-6">
              <Card className="p-6 shadow-lg border-t-4 border-t-primary">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-primary" />
                  Loan Details
                </h3>

                {/* Amount Input */}
                <div className="mb-4">
                  <Label>Loan Amount (ETB)</Label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-2.5 h-4 w-4 text-gray-500" />
                    <Input 
                      type="number" 
                      value={amount} 
                      onChange={(e: any) => setAmount(Number(e.target.value))}
                      className="pl-9"
                    />
                  </div>
                  <input 
                    type="range" min="10000" max="10000000" step="5000"
                    value={amount} onChange={(e) => setAmount(Number(e.target.value))}
                    className="w-full mt-2 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 accent-primary"
                  />
                </div>

                {/* Interest Rate Input */}
                <div className="mb-4">
                  <Label>Interest Rate (%)</Label>
                  <div className="relative">
                    <Percent className="absolute left-3 top-2.5 h-4 w-4 text-gray-500" />
                    <Input 
                      type="number" 
                      value={interest} 
                      step="0.1"
                      onChange={(e: any) => setInterest(Number(e.target.value))}
                      className="pl-9"
                    />
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    * Avg: CBE (14.5%), Awash (15%), Dashen (16%)
                  </p>
                </div>

                {/* Term Input */}
                <div className="mb-4">
                  <Label>Loan Term (Years)</Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-2.5 h-4 w-4 text-gray-500" />
                    <Input 
                      type="number" 
                      value={years} 
                      onChange={(e: any) => setYears(Number(e.target.value))}
                      className="pl-9"
                    />
                  </div>
                  <input 
                    type="range" min="1" max="30" step="1"
                    value={years} onChange={(e) => setYears(Number(e.target.value))}
                    className="w-full mt-2 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 accent-primary"
                  />
                </div>
              </Card>

               {/* Bank Ads / Comparison Link */}
               <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border border-blue-100 dark:border-blue-800">
                  <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Need a better rate?</h4>
                  <p className="text-sm text-blue-600 dark:text-blue-400 mb-3">
                    Compare current loan interest rates across all 30+ Ethiopian banks.
                  </p>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition text-sm">
                    View Bank Comparisons
                  </button>
               </div>
            </div>

            {/* RIGHT COLUMN: Results */}
            <div className="lg:col-span-8 space-y-6">
              
              {/* Summary Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Card className="p-6 bg-primary text-primary-foreground border-none">
                  <p className="text-sm opacity-90">Monthly Payment</p>
                  <p className="text-2xl sm:text-3xl font-bold mt-1">{formatETB(monthlyPayment)}</p>
                </Card>
                <Card className="p-6">
                  <p className="text-sm text-muted-foreground">Total Interest</p>
                  <p className="text-2xl font-bold text-red-600 mt-1">{formatETB(totalInterest)}</p>
                </Card>
                <Card className="p-6">
                  <p className="text-sm text-muted-foreground">Total Payable</p>
                  <p className="text-2xl font-bold text-gray-800 dark:text-white mt-1">{formatETB(totalPayment)}</p>
                </Card>
              </div>

              {/* Chart & Breakdown */}
              <Card className="p-6">
                <div className="flex flex-col md:flex-row items-center justify-between">
                  <div className="w-full md:w-1/2 h-64">
                    <h3 className="text-lg font-semibold mb-4 text-center">Payment Breakdown</h3>
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={chartData}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={80}
                          paddingAngle={5}
                          dataKey="value"
                        >
                          {chartData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <RechartsTooltip formatter={(value: any) => formatETB(Number(value))} />                        <Legend verticalAlign="bottom" height={36}/>
                      </PieChart>
                    </ResponsiveContainer>
                  </div>

                  <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-8 space-y-4">
                    <div className="flex justify-between items-center border-b pb-2 dark:border-zinc-700">
                      <span className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-green-600"></div> Principal
                      </span>
                      <span className="font-semibold">{formatETB(amount)}</span>
                    </div>
                    <div className="flex justify-between items-center border-b pb-2 dark:border-zinc-700">
                      <span className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-600"></div> Interest
                      </span>
                      <span className="font-semibold">{formatETB(totalInterest)}</span>
                    </div>
                    <div className="pt-2 text-sm text-muted-foreground">
                      Note: This calculation assumes a fixed interest rate. Ethiopian banks may charge additional processing fees (usually 1-3%) and insurance.
                    </div>
                  </div>
                </div>
              </Card>

              {/* Amortization Schedule Toggle */}
              <div className="pt-4">
                <button 
                  onClick={() => setShowSchedule(!showSchedule)}
                  className="flex items-center gap-2 text-primary font-bold hover:underline"
                >
                  <Table className="w-4 h-4" />
                  {showSchedule ? "Hide Amortization Schedule" : "Show Amortization Schedule"}
                </button>

                {showSchedule && (
                  <Card className="mt-4 overflow-hidden overflow-x-auto">
                    <table className="w-full text-sm text-left">
                      <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-zinc-800 dark:text-gray-400">
                        <tr>
                          <th className="px-6 py-3">Month</th>
                          <th className="px-6 py-3">Payment</th>
                          <th className="px-6 py-3">Principal</th>
                          <th className="px-6 py-3">Interest</th>
                          <th className="px-6 py-3">Balance</th>
                        </tr>
                      </thead>
                      <tbody>
                        {schedule.map((row) => (
                          <tr key={row.month} className="bg-white border-b dark:bg-zinc-900 dark:border-zinc-700 hover:bg-gray-50 dark:hover:bg-zinc-800">
                            <td className="px-6 py-4 font-medium">{row.month}</td>
                            <td className="px-6 py-4">{formatETB(row.payment)}</td>
                            <td className="px-6 py-4 text-green-600">{formatETB(row.principal)}</td>
                            <td className="px-6 py-4 text-red-600">{formatETB(row.interest)}</td>
                            <td className="px-6 py-4">{formatETB(row.balance)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </Card>
                )}
              </div>

            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}