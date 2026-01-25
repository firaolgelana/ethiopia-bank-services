"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  CheckCircle2, 
  XCircle, 
  Globe, 
  Briefcase, 
  Building2, 
  CreditCard, 
  FileText,
  AlertTriangle,
  MapPin,
  ChevronRight
} from "lucide-react";
import Navbar from "@/components/nav_bar";

// --- DATA: Requirements for Ethiopian Banking Services ---
const CRITERIA = [
  {
    id: "diaspora",
    title: "Diaspora Account",
    description: "For Non-Resident Ethiopians & Foreign Nationals of Ethiopian Origin.",
    icon: Globe,
    requirements: [
      { text: "Valid Passport (Current Country)", mandatory: true },
      { text: "Ethiopian Origin ID (Yellow Card) OR Valid Visa", mandatory: true },
      { text: "Proof of Income (Tax return / Pay slip from abroad)", mandatory: false },
      { text: "2 Recent Passport-size Photos", mandatory: true },
      { text: "Initial Deposit (Min $50 - $100 depending on bank)", mandatory: true },
    ],
    tips: "If you don't have a Yellow Card, you must prove Ethiopian origin via parents' ID or court letter."
  },
  {
    id: "personal-loan",
    title: "Personal / Salary Loan",
    description: "Loans for employed individuals (Gov't or Private employees).",
    icon: Building2,
    requirements: [
      { text: "Employment Letter (Stating salary & position)", mandatory: true },
      { text: "Renewed Kebele ID or Passport", mandatory: true },
      { text: "6 Months Bank Statement (if salary is at another bank)", mandatory: true },
      { text: "Marriage Certificate (if married)", mandatory: true },
      { text: "Collateral or Guarantor (depending on amount)", mandatory: true },
    ],
    tips: "Most banks require your salary to be transferred to them for at least 3-6 consecutive months before applying."
  },
  {
    id: "sme-loan",
    title: "SME / Business Loan",
    description: "Working capital or expansion finance for businesses.",
    icon: Briefcase,
    requirements: [
      { text: "Valid Trade License (Renewed)", mandatory: true },
      { text: "TIN Registration Certificate", mandatory: true },
      { text: "Tax Clearance Certificate", mandatory: true },
      { text: "Audited Financial Statement (1-3 Years)", mandatory: true },
      { text: "Business Plan / Feasibility Study", mandatory: false },
    ],
    tips: "Banks like CBE and Awash often require a 30% equity contribution (you pay 30%, they lend 70%)."
  },
  {
    id: "credit-card",
    title: "International Card (Visa/Mastercard)",
    description: "Prepaid or Debit cards for travel and online payments.",
    icon: CreditCard,
    requirements: [
      { text: "Existing Account at the Bank", mandatory: true },
      { text: "Travel Permit / Flight Ticket (for Forex allocation)", mandatory: true },
      { text: "Tin Number", mandatory: true },
      { text: "Application Fee (approx. 500 - 1000 ETB)", mandatory: true },
    ],
    tips: "Currently, forex allocation for travel cards is strictly regulated by NBE. Expect a waiting list."
  }
];

export default function EligibilityPage() {
  const [activeTab, setActiveTab] = useState(CRITERIA[0].id);
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  const activeData = CRITERIA.find(c => c.id === activeTab) || CRITERIA[0];

  // Helper to toggle checkboxes
  const toggleCheck = (text: string) => {
    setCheckedItems(prev => ({
      ...prev,
      [text]: !prev[text]
    }));
  };

  // Calculate Progress
  const totalReqs = activeData.requirements.length;
  const checkedCount = activeData.requirements.filter(r => checkedItems[r.text]).length;
  const progress = Math.round((checkedCount / totalReqs) * 100);
  const isReady = progress === 100;

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-black pt-24 px-6 pb-20">
      <Navbar/>
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Service Eligibility Check</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Don't waste a trip to the branch. Select a service below to see exactly what documents and requirements you need to bring.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* LEFT COLUMN: Service Selector */}
          <div className="lg:col-span-4 space-y-4 bg-card-background">
            <h3 className="font-semibold text-muted-foreground px-2 uppercase tracking-wider text-xs">Select Service</h3>
            {CRITERIA.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                   setActiveTab(item.id); 
                   setCheckedItems({}); // Reset checks on switch
                }}
                className={`w-full flex items-center gap-4 p-4 rounded-xl border transition-all text-left group
                  ${activeTab === item.id 
                    ? "bg-white dark:bg-zinc-900 border-primary ring-1 ring-primary shadow-lg" 
                    : "bg-white/50 dark:bg-zinc-900/50 border-transparent hover:bg-white hover:border-gray-200"
                  }
                `}
              >
                <div className={`p-3 rounded-full ${activeTab === item.id ? 'bg-primary text-white' : 'bg-gray-100 dark:bg-zinc-800 text-gray-500 group-hover:bg-primary/10 group-hover:text-primary'}`}>
                  <item.icon size={20} />
                </div>
                <div>
                  <h4 className={`font-bold ${activeTab === item.id ? 'text-foreground' : 'text-gray-600 dark:text-gray-400'}`}>
                    {item.title}
                  </h4>
                  <p className="text-xs text-muted-foreground line-clamp-1 mt-0.5">
                    {item.description}
                  </p>
                </div>
                {activeTab === item.id && <ChevronRight className="ml-auto text-primary" size={16} />}
              </button>
            ))}
          </div>

          {/* RIGHT COLUMN: Checklist */}
          <div className="lg:col-span-8">
            <div className="bg-card-background border border-gray-200 dark:border-zinc-800 rounded-2xl p-6 md:p-8 shadow-sm h-full flex flex-col">
              
              {/* Card Header */}
              <div className="mb-6 border-b border-gray-100 dark:border-zinc-800 pb-6">
                 <div className="flex items-center gap-3 mb-2">
                    <activeData.icon className="text-primary h-6 w-6" />
                    <h2 className="text-2xl font-bold">{activeData.title}</h2>
                 </div>
                 <p className="text-muted-foreground">{activeData.description}</p>
              </div>

              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between text-sm font-medium mb-2">
                  <span>Readiness Score</span>
                  <span className={isReady ? "text-green-600" : "text-primary"}>{progress}%</span>
                </div>
                <div className="h-2 w-full bg-gray-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                  <div 
                    className={`h-full transition-all duration-500 ${isReady ? "bg-green-500" : "bg-primary"}`} 
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              {/* The Checklist */}
              <div className="space-y-4 grow">
                {activeData.requirements.map((req, index) => (
                  <label 
                    key={index}
                    className={`flex items-start gap-3 p-4 rounded-xl border cursor-pointer transition-all select-none
                      ${checkedItems[req.text] 
                        ? "bg-primary/5 border-primary/30" 
                        : "bg-gray-50 dark:bg-zinc-900/50 border-transparent hover:bg-gray-100"
                      }
                    `}
                  >
                    <div className={`mt-0.5 shrink-0 w-5 h-5 rounded border flex items-center justify-center transition-colors
                       ${checkedItems[req.text] ? "bg-primary border-primary text-white" : "border-gray-300 bg-white"}
                    `}>
                      <input 
                        type="checkbox" 
                        className="hidden"
                        checked={!!checkedItems[req.text]}
                        onChange={() => toggleCheck(req.text)}
                      />
                      {checkedItems[req.text] && <CheckCircle2 size={14} />}
                    </div>
                    
                    <div className="grow">
                       <span className={`text-sm md:text-base ${checkedItems[req.text] ? "text-foreground font-medium" : "text-gray-600"}`}>
                         {req.text}
                       </span>
                    </div>

                    {req.mandatory ? (
                      <span className="text-[10px] font-bold uppercase bg-red-100 text-red-600 px-2 py-0.5 rounded-full tracking-wide">
                        Required
                      </span>
                    ) : (
                      <span className="text-[10px] font-bold uppercase bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full tracking-wide">
                        Optional
                      </span>
                    )}
                  </label>
                ))}
              </div>

              {/* Pro Tip Box */}
              <div className="mt-8 bg-orange-50 dark:bg-orange-900/10 border border-orange-100 dark:border-orange-900/20 p-4 rounded-lg flex gap-3">
                <AlertTriangle className="text-orange-500 shrink-0" size={20} />
                <div className="text-sm text-orange-800 dark:text-orange-200">
                  <span className="font-bold block mb-1">Pro Tip:</span>
                  {activeData.tips}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-6 border-t border-gray-100 dark:border-zinc-800 flex flex-col sm:flex-row gap-4">
                 <Link href="locations" className="flex-1">
                    <button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition-all">
                       <MapPin size={18} /> Find Nearest Branch
                    </button>
                 </Link>
                 
                 <button 
                   onClick={() => window.print()} 
                   className="flex-1 bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 hover:bg-gray-50 text-foreground font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition-all"
                 >
                    <FileText size={18} /> Print Checklist
                 </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </main>
  );
}