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
  Coffee, // PERFECT ICON for Bunna!
  Clock, // For Evening Banking
  Sun,
  LayoutGrid,
  Home
} from "lucide-react";

// --- Data: Real Bunna Bank Services ---
const BUNNA_SERVICES = [
  // UNIQUE FEATURE (Evening Banking)
  {
    id: "evening-banking",
    title: "Evening & Holiday Banking",
    category: "Personal",
    description: "We work when others sleep. Selected branches open until 7:00 PM and on Sundays/Holidays.",
    icon: Clock,
    action: "Find Branches",
    link: "/locations",
    highlight: true // Special Coffee styling
  },

  // DIGITAL
  {
    id: "mobile-banking",
    title: "Bunna Mobile",
    category: "Digital",
    description: "Your bank on the go. Transfer funds, pay merchants, and manage accounts via *890#.",
    icon: Smartphone,
    action: "Download",
    link: "https://bunnabanksc.com/"
  },
  {
    id: "internet-banking",
    title: "Internet Banking",
    category: "Digital",
    description: "Secure web portal for personal and corporate bulk transfers.",
    icon: LayoutGrid,
    action: "Login",
    link: "#"
  },

  // LOANS
  {
    id: "bunna-loan",
    title: "Bunna Personal Loan",
    category: "Personal",
    description: "Flexible financing for automobiles, housing, and personal needs with competitive rates.",
    icon: Building2,
    action: "Calculate",
    link: "/calculator"
  },

  // INTEREST FREE
  {
    id: "ifb-service",
    title: "Interest Free Banking",
    category: "Interest-Free",
    description: "Dedicated Sharia-compliant window for Wadiah savings and Halal financing.",
    icon: Moon,
    action: "Learn More",
    link: "#"
  },

  // DIASPORA
  {
    id: "diaspora-mortgage",
    title: "Diaspora Home Loan",
    category: "Diaspora",
    description: "Own a home in Ethiopia. Pay 20% equity in forex and get 80% financing from Bunna.",
    icon: Home, 
    action: "Check Eligibility",
    link: "/eligibility"
  },
  
  // CARD
  {
    id: "bunna-card",
    title: "Bunna Card",
    category: "Personal",
    description: "Enjoy hassle-free cash withdrawal at all Bunna ATMs and PSS network machines.",
    icon: CreditCard,
    action: "Apply",
    link: "#"
  }
];

const CATEGORIES = ["All", "Personal", "Digital", "Interest-Free", "Business", "Diaspora"];

export default function BunnaPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredServices = BUNNA_SERVICES.filter((service) => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "All" || service.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-gray-100">
      
      {/* --- HERO SECTION (Coffee Brown & Orange) --- */}
      <section className="relative w-full bg-linear-to-br from-[#5e2c04] to-[#3d1a00] text-white py-20 px-6 overflow-hidden">
        {/* Pattern: Steam / Warmth */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-orange-500/20 to-transparent"></div>
        
        <div className="relative mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="space-y-6 max-w-2xl">
            <div className="flex items-center gap-4">
               <div className="bg-white p-2 rounded-full h-20 w-20 flex items-center justify-center shadow-lg border-4 border-orange-500">
                 <Coffee size={36} className="text-[#5e2c04]" />
               </div>
               <div>
                 <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Bunna Bank</h1>
                 <p className="text-orange-400 font-bold tracking-wide uppercase text-sm mt-1">Bank of the Visionaries</p>
               </div>
            </div>
            
            <p className="text-xl text-orange-50 max-w-xl leading-relaxed">
              We brew success for our customers. Famous for our **Evening Banking** services and commitment to SME growth.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full transition-all shadow-lg transform hover:-translate-y-0.5">
                <Smartphone size={20} />
                Get App
              </button>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 py-3 px-6 rounded-full font-medium">
                <Phone size={20} />
                <span>Call Center: <strong>890</strong></span>
              </div>
            </div>
          </div>

          {/* Quick Info */}
          <div className="hidden lg:block bg-[#3d1a00]/80 backdrop-blur-md p-6 rounded-2xl border border-orange-500/30 w-80 shadow-2xl">
             <h3 className="text-lg font-bold mb-4 text-orange-400 flex items-center gap-2">
               <Sun size={18} /> Unique Services
             </h3>
             <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-2">
                    <Clock size={14} className="text-orange-500" /> Evening Banking (till 7PM)
                </li>
                <li className="flex items-center gap-2">
                    <Clock size={14} className="text-orange-500" /> Sunday Banking
                </li>
             </ul>
             <div className="mt-4 pt-4 border-t border-white/10 flex justify-between items-center text-sm">
                <span>USSD Code</span>
                <span className="font-mono font-bold text-orange-400">*890#</span>
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
              placeholder="Search Bunna services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-full border border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 focus:ring-2 focus:ring-[#5e2c04] outline-none transition-all"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-[#5e2c04] text-white shadow-md"
                    : "bg-white dark:bg-zinc-800 text-gray-600 dark:text-gray-300 border border-gray-200 hover:border-orange-500 hover:text-[#5e2c04]"
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
                    ? "border-orange-500 ring-1 ring-orange-500/20 shadow-orange-50 dark:shadow-none" 
                    : "border-gray-200 dark:border-zinc-800 hover:border-[#5e2c04]/50"
                  }`}
              >
                {service.highlight && (
                   <span className="absolute top-4 right-4 bg-orange-100 text-orange-800 text-[10px] font-bold px-2 py-1 rounded">
                     OPEN LATE
                   </span>
                )}
                <div className={`mb-4 h-12 w-12 rounded-full flex items-center justify-center transition-transform group-hover:rotate-12 
                  ${service.highlight ? "bg-[#5e2c04] text-white" : "bg-[#5e2c04]/10 text-[#5e2c04]"}`}>
                  <service.icon size={24} />
                </div>
                <div className="grow">
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{service.description}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-100 dark:border-zinc-800">
                  <Link href={service.link}>
                    <button className={`flex items-center text-sm font-bold transition-colors gap-2 
                      ${service.highlight ? "text-orange-600 hover:text-orange-700" : "text-[#5e2c04] hover:text-orange-600"}`}>
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