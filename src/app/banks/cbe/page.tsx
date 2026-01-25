"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Search, 
  Smartphone, 
  Building2, 
  Globe, 
  Moon, 
  CreditCard, 
  Home, 
  Briefcase, 
  ArrowRight,
  Phone,
  Download,
  Wallet
} from "lucide-react";
import Navbar from "@/components/nav_bar";

// --- Data: Real CBE Services ---
const CB_SERVICES = [
  // DIGITAL BANKING
  {
    id: "cbe-birr",
    title: "CBE Birr",
    category: "Digital",
    description: "Mobile money wallet. Send cash, pay merchants, utilities (EthioTel, DSTV), and buy airtime via *847# or the app.",
    icon: Wallet,
    action: "Download App",
    link: "https://play.google.com/store/apps/details?id=prod.cbe.birr"
  },
  {
    id: "mobile-banking",
    title: "Mobile Banking",
    category: "Digital",
    description: "Full banking on your phone. Transfer to other banks, manage accounts, and check balances securely.",
    icon: Smartphone,
    action: "Learn More",
    link: "#"
  },
  {
    id: "ethio-direct",
    title: "EthioDirect",
    category: "Digital",
    description: "International remittance app. Send money from abroad directly to CBE accounts or mobile wallets instantly.",
    icon: Download,
    action: "Visit Site",
    link: "https://www.ethiodirect.com/"
  },

  // PERSONAL BANKING
  {
    id: "mortgage",
    title: "Housing / Mortgage",
    category: "Personal",
    description: "Long-term loans for buying or building homes. Interest rates typically ~14-16% with long repayment periods.",
    icon: Home,
    action: "Calculate Loan",
    link: "/calculator" // Internal Link to your calculator
  },
  {
    id: "vehicle-loan",
    title: "Vehicle Loan",
    category: "Personal",
    description: "Financing for personal automobiles. Requires partial deposit (equity) and collateral.",
    icon: Building2,
    action: "Calculate Loan",
    link: "/calculator"
  },
  {
    id: "women-account",
    title: "Women's Account",
    category: "Personal",
    description: "Special savings account with higher interest rates designed to financially empower women.",
    icon: Building2,
    action: "Details",
    link: "#"
  },

  // CBE NOOR (Interest Free)
  {
    id: "cbe-noor-wadiah",
    title: "CBE Noor Wadiah",
    category: "Interest-Free",
    description: "Safe-keeping savings account compliant with Sharia law. Your money is safe without generating interest.",
    icon: Moon,
    action: "View Rates",
    link: "#"
  },
  {
    id: "cbe-noor-finance",
    title: "Noor Financing",
    category: "Interest-Free",
    description: "Murabaha (Cost-plus) financing for vehicles, machinery, and business needs without Riba.",
    icon: Moon,
    action: "Contact Agent",
    link: "#"
  },

  // DIASPORA
  {
    id: "diaspora-fcy",
    title: "Diaspora FCY Account",
    category: "Diaspora",
    description: "Save in USD, GBP, or Euro. Protect your savings from inflation and access forex for authorized payments.",
    icon: Globe,
    action: "Eligibility",
    link: "/eligibility"
  },
  {
    id: "diaspora-mortgage",
    title: "Diaspora Mortgage",
    category: "Diaspora",
    description: "Buy a home in Ethiopia while living abroad. Pay in foreign currency for better loan terms.",
    icon: Home,
    action: "Calculate",
    link: "/calculator"
  },

  // BUSINESS
  {
    id: "trade-services",
    title: "Trade Services (L/C)",
    category: "Business",
    description: "Letters of Credit, CAD, and import/export permits for international businesses.",
    icon: Briefcase,
    action: "Requirements",
    link: "#"
  },
  {
    id: "pos-merchant",
    title: "POS Merchant",
    category: "Business",
    description: "Accept digital payments at your shop using CBE POS machines or QR codes.",
    icon: CreditCard,
    action: "Apply",
    link: "#"
  }
];

// Categories for filter tabs
const CATEGORIES = ["All", "Digital", "Personal", "Interest-Free", "Diaspora", "Business"];

export default function CbePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter Logic
  const filteredServices = CB_SERVICES.filter((service) => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "All" || service.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-gray-100">
      <Navbar/>
      
      {/* --- HERO SECTION --- */}
      <section className="relative w-full bg-[#5d2b90] text-white py-20 px-6">
        <div className="absolute inset-0 bg-black/20" /> {/* Pattern overlay */}
        <div className="relative mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-10">
          
          <div className="space-y-6 max-w-2xl">
            <div className="flex items-center gap-4">
               {/* Ensure you have this logo in /public/banks/cbe.png */}
               <div className="bg-white p-2 rounded-full h-20 w-20 flex items-center justify-center">
                 <span className="text-2xl font-bold text-[#5d2b90]">CBE</span>
               </div>
               <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Commercial Bank of Ethiopia</h1>
            </div>
            
            <p className="text-xl text-gray-100 max-w-xl">
              The largest financial institution in Ethiopia. Trusted by millions for digital, personal, and business banking.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <button className="flex items-center gap-2 bg-[#dba617] hover:bg-[#c99615] text-black font-bold py-3 px-6 rounded-lg transition-all">
                <Download size={20} />
                Download CBE Birr
              </button>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 py-3 px-6 rounded-lg">
                <Phone size={20} />
                <span>Support: <strong>951</strong></span>
              </div>
            </div>
          </div>

          {/* Quick Stats or USSD Card */}
          <div className="hidden lg:block bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20 w-80">
            <h3 className="text-lg font-semibold mb-4 border-b border-white/20 pb-2">Quick Codes</h3>
            <ul className="space-y-3 font-mono text-lg">
              <li className="flex justify-between"><span>Mobile Banking</span> <span className="text-[#dba617]">*889#</span></li>
              <li className="flex justify-between"><span>CBE Birr</span> <span className="text-[#dba617]">*847#</span></li>
              <li className="flex justify-between"><span>EthioDirect</span> <span className="text-[#dba617]">App</span></li>
            </ul>
          </div>

        </div>
      </section>

      {/* --- SEARCH & FILTER SECTION --- */}
      <section className="py-10 px-6 sticky top-16 z-30 bg-gray-50/95 dark:bg-black/95 backdrop-blur-sm border-b border-gray-200 dark:border-zinc-800">
        <div className="mx-auto max-w-7xl space-y-6">
          
          {/* Search Bar */}
          <div className="relative max-w-lg mx-auto md:mx-0">
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input 
              type="text"
              placeholder="Search services (e.g. 'Loan', 'Birr', 'Diaspora')..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 focus:ring-2 focus:ring-[#5d2b90] outline-none transition-all"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-[#5d2b90] text-white shadow-md"
                    : "bg-white dark:bg-zinc-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* --- SERVICES GRID --- */}
      <section className="py-12 px-6">
        <div className="mx-auto max-w-7xl">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.length > 0 ? (
              filteredServices.map((service) => (
                <div 
                  key={service.id} 
                  className="group bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-2xl p-6 hover:shadow-xl hover:border-[#5d2b90]/30 transition-all duration-300 flex flex-col h-full"
                >
                  {/* Icon */}
                  <div className="mb-4 h-12 w-12 rounded-lg bg-[#5d2b90]/10 text-[#5d2b90] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <service.icon size={24} />
                  </div>

                  {/* Content */}
                  <div className="grow">
                    <div className="flex justify-between items-start">
                      <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                      {service.category === "Interest-Free" && (
                        <span className="text-[10px] uppercase font-bold bg-green-100 text-green-700 px-2 py-1 rounded-full">Halal</span>
                      )}
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Footer / Action */}
                  <div className="mt-6 pt-4 border-t border-gray-100 dark:border-zinc-800">
                    <Link href={service.link}>
                      <button className="flex items-center text-sm font-semibold text-[#5d2b90] hover:text-[#dba617] transition-colors gap-2">
                        {service.action} <ArrowRight size={16} />
                      </button>
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              // Empty State
              <div className="col-span-full text-center py-20">
                <p className="text-gray-500 text-lg">No services found matching "{searchTerm}".</p>
                <button 
                  onClick={() => {setSearchTerm(""); setActiveCategory("All");}}
                  className="mt-4 text-[#5d2b90] font-medium hover:underline"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>

        </div>
      </section>

    </main>
  );
}