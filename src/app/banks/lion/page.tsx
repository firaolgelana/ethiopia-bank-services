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
  Shield, // Symbolizing Strength/Lion
  Users, // Agent Banking
  Crown,
  Banknote
} from "lucide-react";
import Navbar from "@/components/nav_bar";

// --- Data: Real Lion Bank Services ---
const LION_SERVICES = [
  // FLAGSHIP (Agent Banking)
  {
    id: "hellocash",
    title: "HelloCash (Agent)",
    category: "Digital",
    description: "Ethiopia's leading agent banking service. Deposit, withdraw, and transfer money at thousands of agents shops nationwide.",
    icon: Users,
    action: "Find Agent",
    link: "/locations",
    highlight: true // Special Gold styling
  },
  
  // MOBILE
  {
    id: "mobile-banking",
    title: "Lion Mobile",
    category: "Digital",
    description: "Secure banking on your phone. Access via App or *811#. Manage beneficiaries and pay merchants.",
    icon: Smartphone,
    action: "Download",
    link: "https://anbessabank.com/"
  },

  // INTEREST FREE (AN-NUR)
  {
    id: "annur-savings",
    title: "An-Nur Savings",
    category: "Interest-Free",
    description: "Sharia-compliant savings (Wadiah). 'An-Nur' brings light to your finances with ethical banking.",
    icon: Moon,
    action: "Learn More",
    link: "#"
  },
  {
    id: "annur-financing",
    title: "An-Nur Financing",
    category: "Interest-Free",
    description: "Halal financing options for businesses (Murabaha) and investment partnerships (Mudarabah).",
    icon: Moon,
    action: "Check Rates",
    link: "#"
  },

  // BUSINESS
  {
    id: "export-credit",
    title: "Export Credit",
    category: "Business",
    description: "Pre and Post shipment credit facilities to support the country's export sector.",
    icon: Briefcase,
    action: "Requirements",
    link: "#"
  },
  
  // PERSONAL
  {
    id: "lion-card",
    title: "Lion Card",
    category: "Personal",
    description: "Debit card services for easy cash access at ATMs. Linked directly to your saving or current account.",
    icon: CreditCard,
    action: "Apply",
    link: "#"
  },
  {
    id: "diaspora",
    title: "Diaspora Banking",
    category: "Diaspora",
    description: "Foreign currency accounts for Ethiopians abroad. Invest in real estate or business back home.",
    icon: Globe,
    action: "Open Account",
    link: "/eligibility"
  }
];

const CATEGORIES = ["All", "Digital", "Interest-Free", "Business", "Personal", "Diaspora"];

export default function LionPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredServices = LION_SERVICES.filter((service) => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "All" || service.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-gray-100">
      <Navbar/>
      {/* --- HERO SECTION (Green & Gold) --- */}
      <section className="relative w-full bg-linear-to-r from-[#006b3f] to-[#004d2d] text-white py-20 px-6 overflow-hidden">
        {/* Pattern: Shields/Crests */}
        <div className="absolute top-0 right-0 w-125 h-125 bg-[#f58220] opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="relative mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="space-y-6 max-w-2xl">
            <div className="flex items-center gap-4">
               <div className="bg-white p-2 rounded-xl h-20 w-20 flex items-center justify-center shadow-lg border-4 border-[#f58220]">
                 <Shield size={40} className="text-[#006b3f] fill-current" />
               </div>
               <div>
                 <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Lion Int. Bank</h1>
                 <p className="text-[#f58220] font-bold tracking-wide uppercase text-sm mt-1">Symbol of Success</p>
               </div>
            </div>
            
            <p className="text-xl text-green-50 max-w-xl leading-relaxed">
              Roaring for your success. We pioneered agent banking with <strong>HelloCash</strong> and offer ethical <strong>An-Nur</strong> interest-free services.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="flex items-center gap-2 bg-[#f58220] hover:bg-[#d9721a] text-white font-bold py-3 px-8 rounded-lg transition-all shadow-lg transform hover:-translate-y-0.5">
                <Users size={20} />
                Find Agent
              </button>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 py-3 px-6 rounded-lg font-medium">
                <Phone size={20} />
                <span>Support: <strong>811</strong></span>
              </div>
            </div>
          </div>

          {/* Quick Info */}
          <div className="hidden lg:block bg-[#004d2d] p-6 rounded-2xl border-l-4 border-[#f58220] w-80 shadow-2xl">
             <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-[#f58220]">
               <Crown size={18} /> Premium Service
             </h3>
             <p className="text-sm text-gray-200 mb-4">
               Our HelloCash service allows you to bank without visiting a branch.
             </p>
             <div className="bg-black/20 p-3 rounded-lg flex justify-between items-center text-sm border border-white/10">
                <span>USSD Code</span>
                <span className="font-mono font-bold text-[#f58220]">*811#</span>
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
              placeholder="Search Lion services (e.g. 'HelloCash', 'An-Nur')..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 focus:ring-2 focus:ring-[#006b3f] outline-none transition-all"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-[#006b3f] text-white shadow-md"
                    : "bg-white dark:bg-zinc-800 text-gray-600 dark:text-gray-300 border border-gray-200 hover:border-[#006b3f] hover:text-[#006b3f]"
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
                    ? "border-[#f58220] ring-1 ring-[#f58220]/20 shadow-orange-50 dark:shadow-none" 
                    : "border-gray-200 dark:border-zinc-800 hover:border-[#006b3f]/50"
                  }`}
              >
                {/* Highlight Badge */}
                {service.highlight && (
                   <span className="absolute top-4 right-4 bg-[#f58220] text-white text-[10px] font-bold px-2 py-1 rounded">
                     AGENT BANKING
                   </span>
                )}
                
                <div className={`mb-4 h-12 w-12 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110 
                  ${service.highlight ? "bg-[#f58220] text-white" : "bg-[#006b3f]/10 text-[#006b3f]"}`}>
                  <service.icon size={24} />
                </div>
                <div className="grow">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{service.title}</h3>
                    {service.category === "Interest-Free" && (
                      <span className="text-[10px] uppercase font-bold bg-green-100 text-green-700 px-2 py-1 rounded-full border border-green-200">An-Nur</span>
                    )}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{service.description}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-100 dark:border-zinc-800">
                  <Link href={service.link}>
                    <button className={`flex items-center text-sm font-bold transition-colors gap-2 
                      ${service.highlight ? "text-[#f58220] hover:text-[#d9721a]" : "text-[#006b3f] hover:text-[#004d2d]"}`}>
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