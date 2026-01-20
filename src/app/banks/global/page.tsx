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
  Plane, // Symbolizing "Global" connection
  Wifi,
  Radio,
  Network
} from "lucide-react";

// --- Data: Real Global Bank Services ---
const GLOBAL_SERVICES = [
  // FLAGSHIP (Diaspora/International)
  {
    id: "global-diaspora",
    title: "Global Diaspora",
    category: "Diaspora",
    description: "Your bridge to home. We offer premium forex accounts and mortgage loans specifically for the Ethiopian Diaspora community.",
    icon: Globe,
    action: "Open Account",
    link: "/eligibility",
    highlight: true // Special Blue styling
  },

  // DIGITAL
  {
    id: "global-mobile",
    title: "Global Mobile",
    category: "Digital",
    description: "Banking without borders. Access your funds, transfer money, and pay bills anytime via our app or USSD.",
    icon: Smartphone,
    action: "Download",
    link: "https://globalbankethiopia.com/"
  },
  {
    id: "internet-banking",
    title: "Internet Banking",
    category: "Digital",
    description: "Secure corporate and personal web banking for managing bulk transfers and payroll.",
    icon: Wifi,
    action: "Login",
    link: "#"
  },

  // INTEREST FREE (HALAL)
  {
    id: "global-halal",
    title: "Global Halal Savings",
    category: "Interest-Free",
    description: "Sharia-compliant savings account (Wadiah). Your wealth is managed with strict ethical standards.",
    icon: Moon,
    action: "Details",
    link: "#"
  },
  {
    id: "halal-financing",
    title: "Halal Financing",
    category: "Interest-Free",
    description: "Interest-free financing solutions for vehicles, machinery, and business expansion.",
    icon: Moon,
    action: "Check Rates",
    link: "#"
  },

  // BUSINESS
  {
    id: "import-export",
    title: "Trade Finance",
    category: "Business",
    description: "Expert handling of Letters of Credit (LC) and CAD to facilitate your international business.",
    icon: Briefcase,
    action: "Requirements",
    link: "#"
  },

  // PERSONAL
  {
    id: "global-card",
    title: "Global Debit Card",
    category: "Personal",
    description: "Withdraw cash from any ATM across Ethiopia. Safe, secure, and convenient.",
    icon: CreditCard,
    action: "Apply",
    link: "#"
  },
  {
    id: "personal-loan",
    title: "Personal Loan",
    category: "Personal",
    description: "Flexible loans for salary earners to help you achieve your personal goals.",
    icon: Building2,
    action: "Calculate",
    link: "/calculator"
  }
];

const CATEGORIES = ["All", "Diaspora", "Digital", "Interest-Free", "Business", "Personal"];

export default function GlobalPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredServices = GLOBAL_SERVICES.filter((service) => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "All" || service.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-gray-100">
      
      {/* --- HERO SECTION (Global Blue & Cyan) --- */}
      <section className="relative w-full bg-linear-to-r from-[#009fe3] to-[#0077aa] text-white py-20 px-6 overflow-hidden">
        {/* Pattern: Network/Globe lines */}
        <div className="absolute inset-0 opacity-20" 
             style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.2) 2px, transparent 2px)', backgroundSize: '30px 30px' }} 
        />
        <div className="absolute top-0 right-0 w-150 h-150 bg-white opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

        <div className="relative mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="space-y-6 max-w-2xl">
            <div className="flex items-center gap-4">
               <div className="bg-white p-2 rounded-xl h-20 w-20 flex items-center justify-center shadow-lg border-b-4 border-[#f58220]">
                 <Network size={40} className="text-[#009fe3]" />
               </div>
               <div>
                 <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Global Bank</h1>
                 <p className="text-[#f58220] font-bold tracking-wide uppercase text-sm mt-1">Your Global Partner</p>
               </div>
            </div>
            
            <p className="text-xl text-blue-50 max-w-xl leading-relaxed">
              Connecting you to the world. We specialize in modern digital solutions and supporting the global Ethiopian community.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="flex items-center gap-2 bg-[#f58220] hover:bg-[#d9721a] text-white font-bold py-3 px-8 rounded-lg transition-all shadow-lg transform hover:-translate-y-0.5">
                <Smartphone size={20} />
                Get App
              </button>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 py-3 px-6 rounded-lg font-medium">
                <Phone size={20} />
                <span>Call Center: <strong>898</strong></span>
              </div>
            </div>
          </div>

          {/* Quick Info */}
          <div className="hidden lg:block bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 w-80 shadow-2xl">
             <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-[#f58220]">
               <Plane size={18} /> Global Reach
             </h3>
             <p className="text-sm text-gray-200 mb-4">
               We offer competitive exchange rates and specialized loans for the Diaspora.
             </p>
             <div className="bg-[#0077aa]/50 p-3 rounded-lg flex justify-between items-center text-sm border border-white/10">
                <span>USSD Code</span>
                <span className="font-mono font-bold text-[#f58220]">*898#</span>
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
              placeholder="Search Global Bank services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 focus:ring-2 focus:ring-[#009fe3] outline-none transition-all"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-[#009fe3] text-white shadow-md"
                    : "bg-white dark:bg-zinc-800 text-gray-600 dark:text-gray-300 border border-gray-200 hover:border-[#009fe3] hover:text-[#009fe3]"
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
                    ? "border-[#009fe3] ring-1 ring-[#009fe3]/20 shadow-blue-50 dark:shadow-none" 
                    : "border-gray-200 dark:border-zinc-800 hover:border-[#009fe3]/50"
                  }`}
              >
                {service.highlight && (
                   <span className="absolute top-4 right-4 bg-[#009fe3] text-white text-[10px] font-bold px-2 py-1 rounded">
                     FEATURED
                   </span>
                )}
                
                <div className={`mb-4 h-12 w-12 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110 
                  ${service.highlight ? "bg-[#009fe3] text-white" : "bg-[#009fe3]/10 text-[#009fe3]"}`}>
                  <service.icon size={24} />
                </div>
                <div className="grow">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{service.title}</h3>
                    {service.category === "Interest-Free" && (
                      <span className="text-[10px] uppercase font-bold bg-green-100 text-green-700 px-2 py-1 rounded-full border border-green-200">Halal</span>
                    )}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{service.description}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-100 dark:border-zinc-800">
                  <Link href={service.link}>
                    <button className={`flex items-center text-sm font-bold transition-colors gap-2 
                      ${service.highlight ? "text-[#009fe3] hover:text-[#0077aa]" : "text-gray-600 hover:text-[#009fe3]"}`}>
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