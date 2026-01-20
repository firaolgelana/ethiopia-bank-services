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
  Zap, // Energy/Youth
  Award, // "First/One"
  HeartHandshake, 
  Target
} from "lucide-react";

// --- Data: Real Ahadu Bank Services ---
const AHADU_SERVICES = [
  // FLAGSHIP 
  {
    id: "ahadu-mobile",
    title: "Ahadu Mobile",
    category: "Digital",
    description: "Experience the new way of banking. Fast, intuitive, and secure mobile banking services via *822#.",
    icon: Smartphone,
    action: "Download",
    link: "https://ahadubank.com/",
    highlight: true // Special Red styling
  },

  // YOUTH/INNOVATION
  {
    id: "youth-account",
    title: "Ahadu Youth",
    category: "Personal",
    description: "Accounts designed for the next generation. Low minimum balance and access to youth financing schemes.",
    icon: Zap,
    action: "Start Now",
    link: "#"
  },

  // INTEREST FREE (AMAN)
  {
    id: "aman-savings",
    title: "Aman Savings",
    category: "Interest-Free",
    description: "Sharia-compliant savings (Wadiah). 'Aman' means peace/security, ensuring your funds are safe and interest-free.",
    icon: Moon,
    action: "Details",
    link: "#"
  },
  {
    id: "aman-financing",
    title: "Aman Financing",
    category: "Interest-Free",
    description: "Halal financing for businesses and personal needs based on Murabaha principles.",
    icon: Moon,
    action: "Check Rates",
    link: "#"
  },

  // BUSINESS
  {
    id: "sme-loan",
    title: "SME Growth Loan",
    category: "Business",
    description: "We back your vision. Flexible credit lines for Small and Medium enterprises to expand.",
    icon: Target,
    action: "Calculate",
    link: "/calculator"
  },
  
  // PERSONAL
  {
    id: "ahadu-card",
    title: "Ahadu Card",
    category: "Personal",
    description: "Contactless debit cards for seamless payments at POS and ATMs nationwide.",
    icon: CreditCard,
    action: "Apply",
    link: "#"
  },
  {
    id: "diaspora",
    title: "Diaspora Banking",
    category: "Diaspora",
    description: "Invest in your country's future. Foreign currency accounts with dedicated support for the Diaspora.",
    icon: Globe,
    action: "Open Account",
    link: "/eligibility"
  }
];

const CATEGORIES = ["All", "Digital", "Interest-Free", "Personal", "Business", "Diaspora"];

export default function AhaduPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredServices = AHADU_SERVICES.filter((service) => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "All" || service.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-gray-100">
      
      {/* --- HERO SECTION (Ahadu Red) --- */}
      <section className="relative w-full bg-linear-to-r from-[#da291c] to-[#b31f15] text-white py-20 px-6 overflow-hidden">
        {/* Pattern: Energy/Sparks */}
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: 'radial-gradient(circle, #ffcc00 1px, transparent 1px)', backgroundSize: '20px 20px' }} 
        />
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#ffcc00] opacity-10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="relative mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="space-y-6 max-w-2xl">
            <div className="flex items-center gap-4">
               <div className="bg-white p-2 rounded-xl h-20 w-20 flex items-center justify-center shadow-lg border-b-4 border-[#ffcc00]">
                 <Award size={40} className="text-[#da291c]" />
               </div>
               <div>
                 <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Ahadu Bank</h1>
                 <p className="text-[#ffcc00] font-bold tracking-wide uppercase text-sm mt-1">Uniquely Yours</p>
               </div>
            </div>
            
            <p className="text-xl text-red-50 max-w-xl leading-relaxed">
              Leading the way with innovation. Ahadu (One) is not just our name, it's our promise to be your number one financial partner.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="flex items-center gap-2 bg-[#ffcc00] hover:bg-[#e6b800] text-[#da291c] font-bold py-3 px-8 rounded-lg transition-all shadow-lg transform hover:-translate-y-0.5">
                <Smartphone size={20} />
                Get App
              </button>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 py-3 px-6 rounded-lg font-medium">
                <Phone size={20} />
                <span>Call Center: <strong>822</strong></span>
              </div>
            </div>
          </div>

          {/* Quick Info */}
          <div className="hidden lg:block bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 w-80 shadow-2xl">
             <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-[#ffcc00]">
               <Zap size={18} /> Digital First
             </h3>
             <p className="text-sm text-gray-200 mb-4">
               Our systems are built for speed and reliability, ensuring you are always connected.
             </p>
             <div className="bg-[#b31f15]/50 p-3 rounded-lg flex justify-between items-center text-sm border border-white/10">
                <span>USSD Code</span>
                <span className="font-mono font-bold text-[#ffcc00]">*822#</span>
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
              placeholder="Search Ahadu services (e.g. 'Aman', 'Youth')..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 focus:ring-2 focus:ring-[#da291c] outline-none transition-all"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-[#da291c] text-white shadow-md"
                    : "bg-white dark:bg-zinc-800 text-gray-600 dark:text-gray-300 border border-gray-200 hover:border-[#da291c] hover:text-[#da291c]"
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
                    ? "border-[#da291c] ring-1 ring-[#da291c]/20 shadow-red-50 dark:shadow-none" 
                    : "border-gray-200 dark:border-zinc-800 hover:border-[#da291c]/50"
                  }`}
              >
                {/* Highlight Badge */}
                {service.highlight && (
                   <span className="absolute top-4 right-4 bg-[#da291c] text-white text-[10px] font-bold px-2 py-1 rounded">
                     POPULAR
                   </span>
                )}
                
                <div className={`mb-4 h-12 w-12 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110 
                  ${service.highlight ? "bg-[#da291c] text-white" : "bg-[#da291c]/10 text-[#da291c]"}`}>
                  <service.icon size={24} />
                </div>
                <div className="grow">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{service.title}</h3>
                    {service.category === "Interest-Free" && (
                      <span className="text-[10px] uppercase font-bold bg-green-100 text-green-700 px-2 py-1 rounded-full border border-green-200">Aman</span>
                    )}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{service.description}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-100 dark:border-zinc-800">
                  <Link href={service.link}>
                    <button className={`flex items-center text-sm font-bold transition-colors gap-2 
                      ${service.highlight ? "text-[#da291c] hover:text-[#b31f15]" : "text-gray-600 hover:text-[#da291c]"}`}>
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