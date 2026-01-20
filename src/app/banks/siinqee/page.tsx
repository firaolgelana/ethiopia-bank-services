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
  Feather, // Representing the "Siinqee" Stick/Culture
  Heart, // Women's Empowerment
  Users,
  Store // Agent Banking
} from "lucide-react";

// --- Data: Real Siinqee Bank Services ---
const SIINQEE_SERVICES = [
  // FLAGSHIP (Women)
  {
    id: "women-empowerment",
    title: "Siinqee Women's Loan",
    category: "Personal",
    description: "Honoring our name. Specialized loans for women entrepreneurs with simplified collateral requirements.",
    icon: Heart,
    action: "Check Eligibility",
    link: "/eligibility",
    highlight: true // Special Orange styling
  },

  // DIGITAL
  {
    id: "siinqee-mobile",
    title: "Siinqee Mobile",
    category: "Digital",
    description: "Empowerment in your hand. Fast and secure mobile banking services via *606#.",
    icon: Smartphone,
    action: "Download",
    link: "https://siinqeebank.com.et/"
  },
  
  // AGENT BANKING
  {
    id: "agent-banking",
    title: "Agent Banking",
    category: "Digital",
    description: "Banking in your neighborhood. Deposit and withdraw cash at thousands of Siinqee agents across the region.",
    icon: Store,
    action: "Find Agent",
    link: "/locations"
  },

  // INTEREST FREE (GADAA)
  {
    id: "gadaa-savings",
    title: "Gadaa Savings",
    category: "Interest-Free",
    description: "Sharia-compliant saving (Wadiah). 'Gadaa' symbolizes our indigenous democratic system of fairness.",
    icon: Moon,
    action: "Details",
    link: "#"
  },
  {
    id: "gadaa-financing",
    title: "Gadaa Financing",
    category: "Interest-Free",
    description: "Ethical financing solutions for businesses and personal assets without interest.",
    icon: Moon,
    action: "Check Rates",
    link: "#"
  },

  // BUSINESS
  {
    id: "micro-credit",
    title: "Micro-Credit",
    category: "Business",
    description: "Small loans for petty traders and startups. Continuing our legacy of grassroots support.",
    icon: Briefcase,
    action: "Apply",
    link: "#"
  },

  // DIASPORA
  {
    id: "diaspora-banking",
    title: "Diaspora Accounts",
    category: "Diaspora",
    description: "Foreign currency accounts designed for the Diaspora to invest in their homeland.",
    icon: Globe,
    action: "Open Account",
    link: "/eligibility"
  }
];

const CATEGORIES = ["All", "Personal", "Digital", "Interest-Free", "Business", "Diaspora"];

export default function SiinqeePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredServices = SIINQEE_SERVICES.filter((service) => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "All" || service.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-gray-100">
      
      {/* --- HERO SECTION (Siinqee Orange) --- */}
      <section className="relative w-full bg-linear-to-r from-[#e64a19] to-[#bf360c] text-white py-20 px-6 overflow-hidden">
        {/* Pattern: Cultural shapes */}
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: 'linear-gradient(45deg, #000000 25%, transparent 25%, transparent 75%, #000000 75%, #000000), linear-gradient(45deg, #000000 25%, transparent 25%, transparent 75%, #000000 75%, #000000)', backgroundSize: '20px 20px', backgroundPosition: '0 0, 10px 10px' }} 
        />
        
        <div className="relative mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="space-y-6 max-w-2xl">
            <div className="flex items-center gap-4">
               <div className="bg-white p-2 rounded-xl h-20 w-20 flex items-center justify-center shadow-lg border-b-4 border-black">
                 <Feather size={40} className="text-[#e64a19]" />
               </div>
               <div>
                 <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Siinqee Bank</h1>
                 <p className="text-black font-bold tracking-wide uppercase text-sm mt-1">Empowering You</p>
               </div>
            </div>
            
            <p className="text-xl text-orange-50 max-w-xl leading-relaxed">
              Rooted in culture, powered by technology. We are dedicated to women's empowerment and inclusive financial growth for all.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="flex items-center gap-2 bg-black hover:bg-gray-900 text-white font-bold py-3 px-8 rounded-lg transition-all shadow-lg transform hover:-translate-y-0.5">
                <Smartphone size={20} />
                Get App
              </button>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 py-3 px-6 rounded-lg font-medium">
                <Phone size={20} />
                <span>Call Center: <strong>606</strong></span>
              </div>
            </div>
          </div>

          {/* Quick Info */}
          <div className="hidden lg:block bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 w-80 shadow-2xl">
             <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-black">
               <Users size={18} /> Massive Reach
             </h3>
             <p className="text-sm text-gray-200 mb-4">
               With millions of customers from our micro-finance roots, we are everywhere you are.
             </p>
             <div className="bg-[#bf360c]/50 p-3 rounded-lg flex justify-between items-center text-sm border border-white/10">
                <span>USSD Code</span>
                <span className="font-mono font-bold text-white">*606#</span>
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
              placeholder="Search Siinqee services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 focus:ring-2 focus:ring-[#e64a19] outline-none transition-all"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-[#e64a19] text-white shadow-md"
                    : "bg-white dark:bg-zinc-800 text-gray-600 dark:text-gray-300 border border-gray-200 hover:border-[#e64a19] hover:text-[#e64a19]"
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
                    ? "border-[#e64a19] ring-1 ring-[#e64a19]/20 shadow-orange-50 dark:shadow-none" 
                    : "border-gray-200 dark:border-zinc-800 hover:border-[#e64a19]/50"
                  }`}
              >
                {/* Highlight Badge */}
                {service.highlight && (
                   <span className="absolute top-4 right-4 bg-[#e64a19] text-white text-[10px] font-bold px-2 py-1 rounded">
                     FOR WOMEN
                   </span>
                )}
                
                <div className={`mb-4 h-12 w-12 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110 
                  ${service.highlight ? "bg-[#e64a19] text-white" : "bg-[#e64a19]/10 text-[#e64a19]"}`}>
                  <service.icon size={24} />
                </div>
                <div className="grow">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{service.title}</h3>
                    {service.category === "Interest-Free" && (
                      <span className="text-[10px] uppercase font-bold bg-green-100 text-green-700 px-2 py-1 rounded-full border border-green-200">Gadaa</span>
                    )}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{service.description}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-100 dark:border-zinc-800">
                  <Link href={service.link}>
                    <button className={`flex items-center text-sm font-bold transition-colors gap-2 
                      ${service.highlight ? "text-[#e64a19] hover:text-[#bf360c]" : "text-gray-600 hover:text-[#e64a19]"}`}>
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