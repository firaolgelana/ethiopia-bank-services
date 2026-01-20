"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Search, 
  Smartphone, 
  Building2, 
  Globe, 
  Moon, 
  CreditCard, 
  Briefcase, 
  ArrowRight,
  Phone,
  Sun, // Tsehay = Sun
  Zap,
  Lightbulb,
  Truck
} from "lucide-react";

// --- Data: Real Tsehay Bank Services ---
const TSEHAY_SERVICES = [
  // FLAGSHIP 
  {
    id: "tsehay-mobile",
    title: "Tsehay Mobile",
    category: "Digital",
    description: "Banking that shines. Instant transfers, bill payments, and airtime top-up via the app or *906#.",
    icon: Smartphone,
    action: "Download",
    link: "https://tsehaybank.com.et/",
    highlight: true // Special Sun styling
  },

  // INTEREST FREE (TAYIB)
  {
    id: "tayib-savings",
    title: "Tayib Savings",
    category: "Interest-Free",
    description: "Sharia-compliant savings (Wadiah). 'Tayib' means pure/good, ensuring your wealth grows ethically.",
    icon: Moon,
    action: "Details",
    link: "#"
  },
  {
    id: "tayib-financing",
    title: "Tayib Financing",
    category: "Interest-Free",
    description: "Halal financing solutions for vehicles, home ownership, and business machinery.",
    icon: Moon,
    action: "Check Rates",
    link: "#"
  },

  // BUSINESS
  {
    id: "sme-power",
    title: "SME Power Loan",
    category: "Business",
    description: "Fueling your business growth. Fast-track loans for small and medium enterprises.",
    icon: Lightbulb,
    action: "Apply",
    link: "#"
  },
  {
    id: "transport-loan",
    title: "Transport Loan",
    category: "Business",
    description: "Financing for commercial vehicles and public transport operators.",
    icon: Truck,
    action: "Calculate",
    link: "/calculator"
  },

  // PERSONAL
  {
    id: "tsehay-card",
    title: "Tsehay Card",
    category: "Personal",
    description: "Secure debit cards for 24/7 cash access at all ATMs nationwide.",
    icon: CreditCard,
    action: "Apply",
    link: "#"
  },
  {
    id: "diaspora",
    title: "Diaspora Banking",
    category: "Diaspora",
    description: "Brighten your future back home. Foreign currency accounts for the global Ethiopian community.",
    icon: Globe,
    action: "Open Account",
    link: "/eligibility"
  }
];

const CATEGORIES = ["All", "Digital", "Interest-Free", "Business", "Personal", "Diaspora"];

export default function TsehayPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredServices = TSEHAY_SERVICES.filter((service) => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "All" || service.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-gray-100">
      
      {/* --- HERO SECTION (Sun Orange & Yellow) --- */}
      <section className="relative w-full bg-linear-to-br from-[#f7931e] to-[#d87c0e] text-white py-20 px-6 overflow-hidden">
        {/* Pattern: Sun Rays */}
        <div className="absolute top-0 left-1/2 w-200 h-200 bg-[#ffde17] opacity-20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="relative mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="space-y-6 max-w-2xl">
            <div className="flex items-center gap-4">
               <div className="bg-white p-2 rounded-xl h-20 w-20 flex items-center justify-center shadow-lg border-4 border-[#ffde17]">
                 <Sun size={40} className="text-[#f7931e]" />
               </div>
               <div>
                 <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Tsehay Bank</h1>
                 <p className="text-[#ffde17] font-bold tracking-wide uppercase text-sm mt-1">For All!</p>
               </div>
            </div>
            
            <p className="text-xl text-orange-50 max-w-xl leading-relaxed">
              Rising to meet your financial needs. We offer a bright future with our <strong>Tayib</strong> Interest-Free banking and modern digital tools.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="flex items-center gap-2 bg-[#ffde17] hover:bg-[#e6c700] text-[#d87c0e] font-bold py-3 px-8 rounded-lg transition-all shadow-lg transform hover:-translate-y-0.5">
                <Smartphone size={20} />
                Get App
              </button>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 py-3 px-6 rounded-lg font-medium">
                <Phone size={20} />
                <span>Call Center: <strong>906</strong></span>
              </div>
            </div>
          </div>

          {/* Quick Info */}
          <div className="hidden lg:block bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 w-80 shadow-2xl">
             <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-[#ffde17]">
               <Zap size={18} /> Rising Power
             </h3>
             <p className="text-sm text-gray-100 mb-4">
               One of the fastest-growing new banks in Ethiopia, focusing on SME and Trade.
             </p>
             <div className="bg-[#d87c0e]/50 p-3 rounded-lg flex justify-between items-center text-sm border border-white/10">
                <span>USSD Code</span>
                <span className="font-mono font-bold text-[#ffde17]">*906#</span>
             </div>
          </div>
        </div>
      </section>

      {/* --- SEARCH BAR --- */}
      <section className="py-10 px-6 sticky top-16 z-30 bg-gray-50/95 dark:bg-black/95 backdrop-blur-sm border-b border-gray-200 dark:border-zinc-800">
        <div className="mx-auto max-w-7xl space-y-6">
          <div className="relative max-w-lg mx-auto md:mx-0">
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input 
              type="text"
              placeholder="Search Tsehay services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 focus:ring-2 focus:ring-[#f7931e] outline-none transition-all"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-[#f7931e] text-white shadow-md"
                    : "bg-white dark:bg-zinc-800 text-gray-600 dark:text-gray-300 border border-gray-200 hover:border-[#f7931e] hover:text-[#f7931e]"
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
            {filteredServices.map((service) => (
              <div 
                key={service.id} 
                className={`group relative bg-white dark:bg-zinc-900 border rounded-2xl p-6 hover:shadow-xl transition-all duration-300 flex flex-col h-full 
                  ${service.highlight 
                    ? "border-[#ffde17] ring-1 ring-[#ffde17]/30 shadow-yellow-50 dark:shadow-none" 
                    : "border-gray-200 dark:border-zinc-800 hover:border-[#f7931e]/50"
                  }`}
              >
                {/* Highlight Badge */}
                {service.highlight && (
                   <span className="absolute top-4 right-4 bg-[#ffde17] text-[#d87c0e] text-[10px] font-bold px-2 py-1 rounded">
                     RISING STAR
                   </span>
                )}
                
                <div className={`mb-4 h-12 w-12 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110 
                  ${service.highlight ? "bg-[#f7931e] text-white" : "bg-[#f7931e]/10 text-[#f7931e]"}`}>
                  <service.icon size={24} />
                </div>
                <div className="grow">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{service.title}</h3>
                    {service.category === "Interest-Free" && (
                      <span className="text-[10px] uppercase font-bold bg-green-100 text-green-700 px-2 py-1 rounded-full border border-green-200">Tayib</span>
                    )}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{service.description}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-100 dark:border-zinc-800">
                  <Link href={service.link}>
                    <button className={`flex items-center text-sm font-bold transition-colors gap-2 
                      ${service.highlight ? "text-[#f7931e] hover:text-[#d87c0e]" : "text-gray-600 hover:text-[#f7931e]"}`}>
                      {service.action} <ArrowRight size={16} />
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}