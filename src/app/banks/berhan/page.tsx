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
  Sun, // Symbolizing "Berhan" (Light)
  Lightbulb,
  Wallet,
  Car
} from "lucide-react";
import Navbar from "@/components/nav_bar";

// --- Data: Real Berhan Bank Services ---
const BERHAN_SERVICES = [
  // FLAGSHIP 
  {
    id: "berhan-mobile",
    title: "Berhan Mobile",
    category: "Digital",
    description: "Banking made bright. Transfer funds, pay bills, and manage your account instantly via *881#.",
    icon: Smartphone,
    action: "Download",
    link: "https://berhanbanksc.com/",
    highlight: true // Special Yellow styling
  },

  // LOANS
  {
    id: "salary-loan",
    title: "Guaranteed Salary Loan",
    category: "Personal",
    description: "Quick loans for employees of partner organizations. Minimal paperwork for your urgent financial needs.",
    icon: Wallet,
    action: "Calculate",
    link: "/calculator"
  },
  {
    id: "transport-loan",
    title: "Vehicle Financing",
    category: "Business",
    description: "Financing solutions for public transport taxis and commercial vehicles.",
    icon: Car,
    action: "Requirements",
    link: "/eligibility"
  },

  // INTEREST FREE (AL-AMINE)
  {
    id: "alamine-saving",
    title: "Al-Amine Savings",
    category: "Interest-Free",
    description: "Sharia-compliant Wadiah savings. 'Al-Amine' (Trustworthy) guarantees ethical fund management.",
    icon: Moon,
    action: "Details",
    link: "#"
  },
  {
    id: "alamine-finance",
    title: "Al-Amine Financing",
    category: "Interest-Free",
    description: "Interest-free financing for businesses and individuals based on Murabaha and Ijara.",
    icon: Moon,
    action: "Check Rates",
    link: "#"
  },

  // BUSINESS
  {
    id: "domestic-trade",
    title: "Domestic Trade Loan",
    category: "Business",
    description: "Revolving overdraft facilities for wholesalers and retailers to manage inventory.",
    icon: Briefcase,
    action: "Apply",
    link: "#"
  },

  // PERSONAL
  {
    id: "berhan-card",
    title: "Berhan Card",
    category: "Personal",
    description: "Access your funds at Berhan ATMs and PSS network machines across the country.",
    icon: CreditCard,
    action: "Request Card",
    link: "#"
  },
  {
    id: "diaspora",
    title: "Diaspora Accounts",
    category: "Diaspora",
    description: "Brighten your future at home. Foreign currency accounts for Ethiopians abroad.",
    icon: Globe,
    action: "Open Account",
    link: "/eligibility"
  }
];

const CATEGORIES = ["All", "Digital", "Interest-Free", "Personal", "Business", "Diaspora"];

export default function BerhanPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredServices = BERHAN_SERVICES.filter((service) => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "All" || service.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-gray-100">
      <Navbar/>
      {/* --- HERO SECTION (Yellow & Blue) --- */}
      <section className="relative w-full bg-linear-to-br from-[#fdb913] to-[#e0a00b] text-white py-20 px-6 overflow-hidden">
        {/* Pattern: Rays of Light */}
        <div className="absolute top-0 left-1/2 w-250 h-250 bg-white opacity-20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="relative mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="space-y-6 max-w-2xl">
            <div className="flex items-center gap-4">
               <div className="bg-white p-2 rounded-xl h-20 w-20 flex items-center justify-center shadow-lg border-4 border-[#005596]">
                 <Lightbulb size={40} className="text-[#fdb913] fill-[#fdb913]" />
               </div>
               <div>
                 <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-[#005596]">Berhan Bank</h1>
                 <p className="text-[#005596] font-bold tracking-wide uppercase text-sm mt-1">Lighting the Way</p>
               </div>
            </div>
            
            <p className="text-xl text-[#00447a] max-w-xl leading-relaxed font-medium">
              We bring light to your financial journey. Experience accessible loans and modern banking with <strong>Berhan Mobile</strong>.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="flex items-center gap-2 bg-[#005596] hover:bg-[#00447a] text-white font-bold py-3 px-8 rounded-lg transition-all shadow-lg transform hover:-translate-y-0.5">
                <Smartphone size={20} />
                Get App
              </button>
              <div className="flex items-center gap-2 bg-white/30 backdrop-blur-md border border-white/40 py-3 px-6 rounded-lg font-medium text-[#005596]">
                <Phone size={20} />
                <span>Call Center: <strong>881</strong></span>
              </div>
            </div>
          </div>

          {/* Quick Info */}
          <div className="hidden lg:block bg-white/20 backdrop-blur-md p-6 rounded-2xl border border-white/30 w-80 shadow-2xl">
             <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-[#005596]">
               <Sun size={18} /> Brighter Future
             </h3>
             <p className="text-sm text-[#00447a] mb-4 font-medium">
               Known for supporting salary earners and small businesses with accessible credit.
             </p>
             <div className="bg-[#005596] p-3 rounded-lg flex justify-between items-center text-sm border border-white/10">
                <span className="text-white/80">USSD Code</span>
                <span className="font-mono font-bold text-[#fdb913]">*881#</span>
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
              placeholder="Search Berhan services (e.g. 'Salary Loan', 'Alamine')..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 focus:ring-2 focus:ring-[#fdb913] outline-none transition-all"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-[#fdb913] text-[#005596] shadow-md font-bold"
                    : "bg-white dark:bg-zinc-800 text-gray-600 dark:text-gray-300 border border-gray-200 hover:border-[#fdb913] hover:text-[#fdb913]"
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
                    ? "border-[#fdb913] ring-1 ring-[#fdb913]/30 shadow-yellow-50 dark:shadow-none" 
                    : "border-gray-200 dark:border-zinc-800 hover:border-[#fdb913]/50"
                  }`}
              >
                {/* Highlight Badge */}
                {service.highlight && (
                   <span className="absolute top-4 right-4 bg-[#fdb913] text-[#005596] text-[10px] font-bold px-2 py-1 rounded">
                     EASY ACCESS
                   </span>
                )}
                
                <div className={`mb-4 h-12 w-12 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110 
                  ${service.highlight ? "bg-[#fdb913] text-white" : "bg-[#fdb913]/20 text-[#e0a00b]"}`}>
                  <service.icon size={24} />
                </div>
                <div className="grow">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{service.title}</h3>
                    {service.category === "Interest-Free" && (
                      <span className="text-[10px] uppercase font-bold bg-green-100 text-green-700 px-2 py-1 rounded-full border border-green-200">Al-Amine</span>
                    )}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{service.description}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-100 dark:border-zinc-800">
                  <Link href={service.link}>
                    <button className={`flex items-center text-sm font-bold transition-colors gap-2 
                      ${service.highlight ? "text-[#e0a00b] hover:text-[#005596]" : "text-[#005596] hover:text-[#fdb913]"}`}>
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