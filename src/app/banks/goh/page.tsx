"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Search, 
  Smartphone, 
  Home, 
  Globe, 
  Moon, 
  Briefcase, 
  ArrowRight,
  Phone,
  Hammer, // Construction
  PiggyBank, // Saving for home
  Key, // House Key
  Landmark
} from "lucide-react";

// --- Data: Real Goh Bank Services ---
const GOH_SERVICES = [
  // FLAGSHIP (Mortgage)
  {
    id: "mortgage-loan",
    title: "Home Purchase Loan",
    category: "Mortgage",
    description: "Our core product. Long-term financing (up to 30 years) to help you buy your dream home or condominium.",
    icon: Home,
    action: "Calculate Loan",
    link: "/calculator",
    highlight: true // Special styling
  },
  
  // CONSTRUCTION
  {
    id: "construction-loan",
    title: "Construction Loan",
    category: "Mortgage",
    description: "Financing to build your house from the ground up. Funds released in stages as construction progresses.",
    icon: Hammer,
    action: "Requirements",
    link: "/eligibility"
  },
  {
    id: "renovation-loan",
    title: "Home Renovation",
    category: "Mortgage",
    description: "Upgrade your living space. Loans specifically for repairing, expanding, or modernizing your existing home.",
    icon: Key,
    action: "Apply",
    link: "#"
  },

  // SAVINGS FOR HOME
  {
    id: "pre-purchase-saving",
    title: "Goh Home Saving",
    category: "Personal",
    description: "Save 20-30% of your home value with us, and we guarantee the remaining 70-80% as a loan.",
    icon: PiggyBank,
    action: "Start Saving",
    link: "#"
  },

  // DIGITAL
  {
    id: "goh-mobile",
    title: "Goh Mobile",
    category: "Digital",
    description: "Manage your mortgage and savings on the go via *905#. Check loan balance and pay installments.",
    icon: Smartphone,
    action: "Download",
    link: "https://gohbetochbank.com/"
  },

  // INTEREST FREE
  {
    id: "ifb-mortgage",
    title: "Halal Mortgage",
    category: "Interest-Free",
    description: "Sharia-compliant home financing based on Diminishing Musharaka principles.",
    icon: Moon,
    action: "Check Rates",
    link: "#"
  },

  // DIASPORA
  {
    id: "diaspora-mortgage",
    title: "Diaspora Home Loan",
    category: "Diaspora",
    description: "Exclusive mortgage packages for Ethiopians abroad to build or buy property back home.",
    icon: Globe,
    action: "Eligibility",
    link: "/eligibility"
  }
];

const CATEGORIES = ["All", "Mortgage", "Personal", "Digital", "Interest-Free", "Diaspora"];

export default function GohPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredServices = GOH_SERVICES.filter((service) => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "All" || service.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-gray-100">
      
      {/* --- HERO SECTION (Blue & Orange) --- */}
      <section className="relative w-full bg-linear-to-br from-[#0054a6] to-[#003d7a] text-white py-20 px-6 overflow-hidden">
        {/* Pattern: Bricks/Building */}
        <div className="absolute inset-0 opacity-5" 
             style={{ backgroundImage: 'linear-gradient(30deg, #ffffff 12%, transparent 12.5%, transparent 87%, #ffffff 87.5%, #ffffff), linear-gradient(150deg, #ffffff 12%, transparent 12.5%, transparent 87%, #ffffff 87.5%, #ffffff), linear-gradient(30deg, #ffffff 12%, transparent 12.5%, transparent 87%, #ffffff 87.5%, #ffffff), linear-gradient(150deg, #ffffff 12%, transparent 12.5%, transparent 87%, #ffffff 87.5%, #ffffff), linear-gradient(60deg, #ffffff77 25%, transparent 25.5%, transparent 75%, #ffffff77 75%, #ffffff77), linear-gradient(60deg, #ffffff77 25%, transparent 25.5%, transparent 75%, #ffffff77 75%, #ffffff77)', backgroundSize: '40px 70px' }} 
        />
        
        <div className="relative mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="space-y-6 max-w-2xl">
            <div className="flex items-center gap-4">
               <div className="bg-white p-2 rounded-xl h-20 w-20 flex items-center justify-center shadow-lg border-b-4 border-[#f7941d]">
                 <Home size={40} className="text-[#0054a6]" />
               </div>
               <div>
                 <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Goh Betoch Bank</h1>
                 <p className="text-[#f7941d] font-bold tracking-wide uppercase text-sm mt-1">The Key to Your Home</p>
               </div>
            </div>
            
            <p className="text-xl text-blue-100 max-w-xl leading-relaxed">
              Ethiopia's first specialized mortgage bank. We exist to make home ownership a reality for everyone through long-term <strong>Mortgage Financing</strong>.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/calculator">
                <button className="flex items-center gap-2 bg-[#f7941d] hover:bg-[#d97d12] text-white font-bold py-3 px-8 rounded-lg transition-all shadow-lg transform hover:-translate-y-0.5">
                  <Key size={20} />
                  Mortgage Calculator
                </button>
              </Link>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 py-3 px-6 rounded-lg font-medium">
                <Phone size={20} />
                <span>Call Center: <strong>905</strong></span>
              </div>
            </div>
          </div>

          {/* Quick Info */}
          <div className="hidden lg:block bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 w-80 shadow-2xl">
             <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-[#f7941d]">
               <Landmark size={18} /> Specialized Bank
             </h3>
             <p className="text-sm text-gray-200 mb-4">
               Unlike other banks, our primary focus is Housing. We offer loans up to 30 years.
             </p>
             <div className="bg-[#003d7a]/50 p-3 rounded-lg flex justify-between items-center text-sm border border-white/10">
                <span>USSD Code</span>
                <span className="font-mono font-bold text-[#f7941d]">*905#</span>
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
              placeholder="Search Goh services (e.g. 'Mortgage', 'Construction')..."
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
                    ? "border-[#f7941d] ring-1 ring-[#f7941d]/20 shadow-orange-50 dark:shadow-none" 
                    : "border-gray-200 dark:border-zinc-800 hover:border-[#0054a6]/50"
                  }`}
              >
                {/* Highlight Badge */}
                {service.highlight && (
                   <span className="absolute top-4 right-4 bg-[#f7941d] text-white text-[10px] font-bold px-2 py-1 rounded">
                     MORTGAGE SPECIALIST
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
                      <span className="text-[10px] uppercase font-bold bg-green-100 text-green-700 px-2 py-1 rounded-full border border-green-200">Halal</span>
                    )}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{service.description}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-100 dark:border-zinc-800">
                  <Link href={service.link}>
                    <button className={`flex items-center text-sm font-bold transition-colors gap-2 
                      ${service.highlight ? "text-[#f7941d] hover:text-[#d97d12]" : "text-[#0054a6] hover:text-[#003d7a]"}`}>
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