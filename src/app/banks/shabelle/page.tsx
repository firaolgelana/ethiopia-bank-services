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
  Waves, // Symbolizing Shabelle River
  Tent, // Pastoralist / Nomadic
  Milk, // Livestock/Dairy focus
  Truck
} from "lucide-react";
import Navbar from "@/components/nav_bar";

// --- Data: Real Shabelle Bank Services ---
const SHABELLE_SERVICES = [
  // FLAGSHIP (Pastoralist Focus)
  {
    id: "livestock-finance",
    title: "Livestock Financing",
    category: "Business",
    description: "Tailored financing for camel, cattle, and goat trading. We understand the pastoralist way of life.",
    icon: Milk,
    action: "Requirements",
    link: "#",
    highlight: true // Special styling
  },

  // DIGITAL
  {
    id: "shabelle-mobile",
    title: "Shabelle Mobile",
    category: "Digital",
    description: "Banking across borders. Manage your trade and transfers instantly via our app or USSD *8966#.",
    icon: Smartphone,
    action: "Download",
    link: "https://shabellebank.com/"
  },
  
  // INTEREST FREE (SAHAL)
  {
    id: "sahal-saving",
    title: "Sahal Savings",
    category: "Interest-Free",
    description: "Sharia-compliant Wadiah savings. 'Sahal' means easy, making ethical banking accessible to everyone.",
    icon: Moon,
    action: "Open Account",
    link: "#"
  },
  {
    id: "sahal-trade",
    title: "Sahal Trade Murabaha",
    category: "Interest-Free",
    description: "Import/Export financing based on Islamic principles. Perfect for cross-border traders.",
    icon: Moon,
    action: "Check Rates",
    link: "#"
  },

  // BUSINESS
  {
    id: "sme-loan",
    title: "SME Trade Loan",
    category: "Business",
    description: "Working capital for small shops and local traders to expand their inventory.",
    icon: Briefcase,
    action: "Apply",
    link: "#"
  },
  {
    id: "transport-finance",
    title: "Transport Finance",
    category: "Business",
    description: "Loans for trucks and transport vehicles to facilitate regional logistics.",
    icon: Truck,
    action: "Calculate",
    link: "/calculator"
  },

  // DIASPORA
  {
    id: "diaspora",
    title: "Diaspora Accounts",
    category: "Diaspora",
    description: "Secure foreign currency accounts for the Somali regional diaspora community.",
    icon: Globe,
    action: "Eligibility",
    link: "/eligibility"
  }
];

const CATEGORIES = ["All", "Business", "Interest-Free", "Digital", "Diaspora"];

export default function ShabellePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredServices = SHABELLE_SERVICES.filter((service) => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "All" || service.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-gray-100">
      <Navbar/>
      {/* --- HERO SECTION (Blue & Green) --- */}
      <section className="relative w-full bg-linear-to-br from-[#0072bc] to-[#005a9e] text-white py-20 px-6 overflow-hidden">
        {/* Pattern: River flow */}
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: 'repeating-linear-gradient(45deg, #4caf50 0, #4caf50 2px, transparent 0, transparent 50%)', backgroundSize: '30px 30px' }} 
        />
        
        <div className="relative mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="space-y-6 max-w-2xl">
            <div className="flex items-center gap-4">
               <div className="bg-white p-2 rounded-xl h-20 w-20 flex items-center justify-center shadow-lg border-b-4 border-[#4caf50]">
                 <Waves size={40} className="text-[#0072bc]" />
               </div>
               <div>
                 <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Shabelle Bank</h1>
                 <p className="text-[#4caf50] font-bold tracking-wide uppercase text-sm mt-1">Flowing Prosperity</p>
               </div>
            </div>
            
            <p className="text-xl text-blue-50 max-w-xl leading-relaxed">
              The heartbeat of the region. From <strong>Livestock Financing</strong> to modern digital banking, we are dedicated to the pastoralist and trading communities.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="flex items-center gap-2 bg-[#4caf50] hover:bg-[#3d8b40] text-white font-bold py-3 px-8 rounded-lg transition-all shadow-lg transform hover:-translate-y-0.5">
                <Smartphone size={20} />
                Get App
              </button>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 py-3 px-6 rounded-lg font-medium">
                <Phone size={20} />
                <span>Call Center: <strong>8966</strong></span>
              </div>
            </div>
          </div>

          {/* Quick Info */}
          <div className="hidden lg:block bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 w-80 shadow-2xl">
             <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-[#4caf50]">
               <Tent size={18} /> Community Focus
             </h3>
             <p className="text-sm text-gray-200 mb-4">
               Specialized services for pastoralists and cross-border traders.
             </p>
             <div className="bg-[#005a9e]/50 p-3 rounded-lg flex justify-between items-center text-sm border border-white/10">
                <span>USSD Code</span>
                <span className="font-mono font-bold text-[#4caf50]">*8966#</span>
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
              placeholder="Search Shabelle services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 focus:ring-2 focus:ring-[#0072bc] outline-none transition-all"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-[#0072bc] text-white shadow-md"
                    : "bg-white dark:bg-zinc-800 text-gray-600 dark:text-gray-300 border border-gray-200 hover:border-[#0072bc] hover:text-[#0072bc]"
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
                    ? "border-[#4caf50] ring-1 ring-[#4caf50]/20 shadow-green-50 dark:shadow-none" 
                    : "border-gray-200 dark:border-zinc-800 hover:border-[#0072bc]/50"
                  }`}
              >
                {/* Highlight Badge */}
                {service.highlight && (
                   <span className="absolute top-4 right-4 bg-[#4caf50] text-white text-[10px] font-bold px-2 py-1 rounded">
                     CORE SECTOR
                   </span>
                )}
                
                <div className={`mb-4 h-12 w-12 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110 
                  ${service.highlight ? "bg-[#0072bc] text-white" : "bg-[#0072bc]/10 text-[#0072bc]"}`}>
                  <service.icon size={24} />
                </div>
                <div className="grow">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{service.title}</h3>
                    {service.category === "Interest-Free" && (
                      <span className="text-[10px] uppercase font-bold bg-green-100 text-green-700 px-2 py-1 rounded-full border border-green-200">Sahal</span>
                    )}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{service.description}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-100 dark:border-zinc-800">
                  <Link href={service.link}>
                    <button className={`flex items-center text-sm font-bold transition-colors gap-2 
                      ${service.highlight ? "text-[#4caf50] hover:text-[#3d8b40]" : "text-[#0072bc] hover:text-[#005a9e]"}`}>
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