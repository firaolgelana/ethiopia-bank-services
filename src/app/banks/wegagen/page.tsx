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
  Home, 
  Briefcase, 
  ArrowRight,
  Phone,
  Sun, // Symbolizing "Wegagen" (Dawn)
  Anchor, // Trade
  Receipt
} from "lucide-react";

// --- Data: Real Wegagen Bank Services ---
const WEGAGEN_SERVICES = [
  // FLAGSHIP 
  {
    id: "mobile-banking",
    title: "Wegagen Mobile",
    category: "Digital",
    description: "Manage finances on the go. Transfer funds, pay bills, and manage beneficiaries via App or *866#.",
    icon: Smartphone,
    action: "Download",
    link: "https://www.wegagen.com/",
    highlight: true // Special Orange styling
  },

  // INTEREST FREE (AGAR)
  {
    id: "agar-savings",
    title: "Agar Saving (Amanah)",
    category: "Interest-Free",
    description: "Sharia-compliant savings account. 'Agar' ensures strict adherence to Islamic banking principles.",
    icon: Moon,
    action: "Details",
    link: "#"
  },
  {
    id: "agar-financing",
    title: "Agar Financing",
    category: "Interest-Free",
    description: "Murabaha and Ijara financing schemes for businesses and personal assets.",
    icon: Moon,
    action: "Check Rates",
    link: "#"
  },

  // TRADE / BUSINESS
  {
    id: "trade-finance",
    title: "Import/Export Trade",
    category: "Business",
    description: "Comprehensive Letter of Credit (LC) and CAD services. We are a preferred partner for international trade.",
    icon: Anchor,
    action: "Requirements",
    link: "#"
  },
  {
    id: "sme-loan",
    title: "SME Loan",
    category: "Business",
    description: "Dedicated credit lines for small and medium enterprises to expand operations.",
    icon: Briefcase,
    action: "Calculate",
    link: "/calculator"
  },

  // PERSONAL
  {
    id: "card-banking",
    title: "Wegagen Card",
    category: "Personal",
    description: "ATM and POS services nationwide. Access your cash 24/7.",
    icon: CreditCard,
    action: "Apply",
    link: "#"
  },
  {
    id: "diaspora-account",
    title: "Diaspora Banking",
    category: "Diaspora",
    description: "Secure foreign currency accounts for Ethiopians living abroad.",
    icon: Globe,
    action: "Open Account",
    link: "/eligibility"
  }
];

const CATEGORIES = ["All", "Digital", "Interest-Free", "Business", "Personal", "Diaspora"];

export default function WegagenPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredServices = WEGAGEN_SERVICES.filter((service) => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "All" || service.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-gray-100">
      
      {/* --- HERO SECTION (Wegagen Orange) --- */}
      <section className="relative w-full bg-linear-to-r from-[#e65300] to-[#b34000] text-white py-20 px-6 overflow-hidden">
        {/* Pattern: Sun Rays (Dawn) */}
        <div className="absolute bottom-0 left-1/2 w-200 h-200 bg-white opacity-5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
        
        <div className="relative mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="space-y-6 max-w-2xl">
            <div className="flex items-center gap-4">
               <div className="bg-white p-2 rounded-full h-20 w-20 flex items-center justify-center shadow-lg border-4 border-[#ffcc00]">
                 <Sun size={40} className="text-[#e65300]" />
               </div>
               <div>
                 <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Wegagen Bank</h1>
                 <p className="text-[#ffcc00] font-bold tracking-wide uppercase text-sm mt-1">Partnering for Growth</p>
               </div>
            </div>
            
            <p className="text-xl text-orange-50 max-w-xl leading-relaxed">
              Illuminating your financial future with robust trade services and the ethical <strong>Agar</strong> Interest-Free banking.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="flex items-center gap-2 bg-[#ffcc00] hover:bg-[#e6b800] text-[#e65300] font-bold py-3 px-8 rounded-full transition-all shadow-lg hover:shadow-orange-900/20 transform hover:-translate-y-0.5">
                <Smartphone size={20} />
                Get App
              </button>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 py-3 px-6 rounded-full font-medium">
                <Phone size={20} />
                <span>Call Center: <strong>866</strong></span>
              </div>
            </div>
          </div>

          {/* Quick Info Box */}
          <div className="hidden lg:block bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 w-80 shadow-2xl">
            <h3 className="text-lg font-bold mb-4 text-[#ffcc00] flex items-center gap-2">
               <Anchor size={18} /> Trade Focus
            </h3>
            <p className="text-sm text-gray-100 mb-4">
                We are a top choice for exporters and importers due to our strong international correspondence.
            </p>
            <div className="border-t border-white/10 pt-4 mt-4">
                <div className="flex justify-between items-center text-sm">
                    <span>USSD Banking</span>
                    <span className="font-mono font-bold text-[#ffcc00]">*866#</span>
                </div>
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
              placeholder="Search Wegagen services (e.g. 'Agar', 'Trade')..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-full border border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 focus:ring-2 focus:ring-[#e65300] outline-none transition-all"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-[#e65300] text-white shadow-md"
                    : "bg-white dark:bg-zinc-800 text-gray-600 dark:text-gray-300 border border-gray-200 hover:border-[#e65300] hover:text-[#e65300]"
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
                    ? "border-[#e65300] ring-1 ring-[#e65300]/20 shadow-orange-100 dark:shadow-none" 
                    : "border-gray-200 dark:border-zinc-800 hover:border-[#e65300]/50"
                  }`}
              >
                {service.highlight && (
                   <span className="absolute top-4 right-4 bg-[#e65300] text-white text-[10px] font-bold px-2 py-1 rounded">
                     TOP SERVICE
                   </span>
                )}
                <div className={`mb-4 h-12 w-12 rounded-full flex items-center justify-center transition-transform group-hover:scale-110 
                  ${service.highlight ? "bg-[#e65300] text-white" : "bg-[#e65300]/10 text-[#e65300]"}`}>
                  <service.icon size={24} />
                </div>
                <div className="grow">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{service.title}</h3>
                    {service.category === "Interest-Free" && (
                      <span className="text-[10px] uppercase font-bold bg-green-100 text-green-700 px-2 py-1 rounded-full border border-green-200">Agar</span>
                    )}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{service.description}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-100 dark:border-zinc-800">
                  <Link href={service.link}>
                    <button className={`flex items-center text-sm font-bold transition-colors gap-2 
                      ${service.highlight ? "text-[#e65300] hover:text-[#b34000]" : "text-gray-600 hover:text-[#e65300]"}`}>
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