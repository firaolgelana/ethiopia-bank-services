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
  Handshake, // Cooperatives
  Sun, // "Maleda" (Morning/New Day)
  Users,
  Building // City/Urban
} from "lucide-react";
import Navbar from "@/components/nav_bar";

// --- Data: Real Addis Bank Services ---
const ADDIS_SERVICES = [
  // FLAGSHIP (Cooperatives)
  {
    id: "cooperative-loan",
    title: "Cooperative Financing",
    category: "Business",
    description: "Specialized financial solutions for Cooperatives, Edirs, and Equbs to grow their capital.",
    icon: Handshake,
    action: "Requirements",
    link: "/eligibility",
    highlight: true // Special Yellow styling
  },

  // DIGITAL
  {
    id: "addis-mobile",
    title: "Addis Mobile",
    category: "Digital",
    description: "Banking made simple. Manage your account, transfer funds, and pay utility bills anytime via *903#.",
    icon: Smartphone,
    action: "Download",
    link: "https://addisbanksc.com/"
  },

  // SAVINGS (MALEDA)
  {
    id: "addis-maleda",
    title: "Addis Maleda Saving",
    category: "Personal",
    description: "Start your day right. A high-yield savings account designed to help you achieve your financial goals.",
    icon: Sun,
    action: "View Rates",
    link: "#"
  },

  // INTEREST FREE (MUHSIN)
  {
    id: "muhsin-savings",
    title: "Muhsin Savings",
    category: "Interest-Free",
    description: "Sharia-compliant Wadiah savings. 'Muhsin' ensures your wealth is managed ethically and interest-free.",
    icon: Moon,
    action: "Details",
    link: "#"
  },
  {
    id: "muhsin-financing",
    title: "Muhsin Financing",
    category: "Interest-Free",
    description: "Halal financing solutions (Murabaha) for businesses and personal asset acquisition.",
    icon: Moon,
    action: "Check Rates",
    link: "#"
  },

  // CARD
  {
    id: "addis-card",
    title: "Addis Card",
    category: "Personal",
    description: "Convenient cash access at all Addis International Bank ATMs and partner networks.",
    icon: CreditCard,
    action: "Apply",
    link: "#"
  },

  // DIASPORA
  {
    id: "diaspora-banking",
    title: "Diaspora Accounts",
    category: "Diaspora",
    description: "Exclusive accounts for Ethiopians abroad. Invest in the future of the city and country.",
    icon: Globe,
    action: "Open Account",
    link: "/eligibility"
  }
];

const CATEGORIES = ["All", "Business", "Personal", "Digital", "Interest-Free", "Diaspora"];

export default function AddisPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredServices = ADDIS_SERVICES.filter((service) => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "All" || service.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-gray-100">
      <Navbar/>
      {/* --- HERO SECTION (Addis Blue) --- */}
      <section className="relative w-full bg-linear-to-r from-[#0054a6] to-[#003d7a] text-white py-20 px-6 overflow-hidden">
        {/* Pattern: Cityscape/Urban lines */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-white opacity-5" style={{ clipPath: "polygon(0 100%, 20% 80%, 40% 100%, 60% 70%, 80% 90%, 100% 60%, 100% 100%)" }}></div>
        
        <div className="relative mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="space-y-6 max-w-2xl">
            <div className="flex items-center gap-4">
               <div className="bg-white p-2 rounded-xl h-20 w-20 flex items-center justify-center shadow-lg border-b-4 border-[#ffcc00]">
                 <Building size={40} className="text-[#0054a6]" />
               </div>
               <div>
                 <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Addis Int. Bank</h1>
                 <p className="text-[#ffcc00] font-bold tracking-wide uppercase text-sm mt-1">Your Partner for Success</p>
               </div>
            </div>
            
            <p className="text-xl text-blue-50 max-w-xl leading-relaxed">
              Rooted in the capital, connected to the world. We specialize in financing Cooperatives and empowering SMEs with <strong>Addis Maleda</strong>.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="flex items-center gap-2 bg-[#ffcc00] hover:bg-[#e6b800] text-[#0054a6] font-bold py-3 px-8 rounded-lg transition-all shadow-lg transform hover:-translate-y-0.5">
                <Smartphone size={20} />
                Get App
              </button>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 py-3 px-6 rounded-lg font-medium">
                <Phone size={20} />
                <span>Call Center: <strong>903</strong></span>
              </div>
            </div>
          </div>

          {/* Quick Info */}
          <div className="hidden lg:block bg-[#003d7a]/80 backdrop-blur-md p-6 rounded-2xl border border-[#ffcc00]/50 w-80 shadow-2xl">
             <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-[#ffcc00]">
               <Users size={18} /> Community Focus
             </h3>
             <p className="text-sm text-gray-200 mb-4">
               We provide dedicated support for Edirs, Equbs, and Housing Cooperatives.
             </p>
             <div className="bg-black/20 p-3 rounded-lg flex justify-between items-center text-sm border border-white/10">
                <span>USSD Code</span>
                <span className="font-mono font-bold text-[#ffcc00]">*903#</span>
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
              placeholder="Search Addis Bank services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 focus:ring-2 focus:ring-[#0054a6] outline-none transition-all"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-[#0054a6] text-white shadow-md"
                    : "bg-white dark:bg-zinc-800 text-gray-600 dark:text-gray-300 border border-gray-200 hover:border-[#0054a6] hover:text-[#0054a6]"
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
                    ? "border-[#ffcc00] ring-1 ring-[#ffcc00]/30 shadow-yellow-50 dark:shadow-none" 
                    : "border-gray-200 dark:border-zinc-800 hover:border-[#0054a6]/50"
                  }`}
              >
                {/* Highlight Badge */}
                {service.highlight && (
                   <span className="absolute top-4 right-4 bg-[#ffcc00] text-[#0054a6] text-[10px] font-bold px-2 py-1 rounded">
                     FEATURED
                   </span>
                )}

                <div className={`mb-4 h-12 w-12 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110 
                  ${service.highlight ? "bg-[#0054a6] text-white" : "bg-[#0054a6]/10 text-[#0054a6]"}`}>
                  <service.icon size={24} />
                </div>
                <div className="grow">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{service.title}</h3>
                    {service.category === "Interest-Free" && (
                      <span className="text-[10px] uppercase font-bold bg-green-100 text-green-700 px-2 py-1 rounded-full border border-green-200">Muhsin</span>
                    )}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{service.description}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-100 dark:border-zinc-800">
                  <Link href={service.link}>
                    <button className={`flex items-center text-sm font-bold transition-colors gap-2 
                      ${service.highlight ? "text-[#e6b800] hover:text-[#003d7a]" : "text-[#0054a6] hover:text-[#ffcc00]"}`}>
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