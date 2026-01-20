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
  Heart, // Symbolizing "Enat" (Mother/Care)
  Baby, // For Children's accounts
  Users,
  Flower2
} from "lucide-react";

// --- Data: Real Enat Bank Services ---
const ENAT_SERVICES = [
  // FLAGSHIP (Women Empowerment)
  {
    id: "women-collateral-free",
    title: "Women's Special Loan",
    category: "Personal",
    description: "Unique financing scheme offering loans to women entrepreneurs with little to no collateral requirements.",
    icon: Heart,
    action: "Check Eligibility",
    link: "/eligibility",
    highlight: true // Special Purple styling
  },
  
  // DIGITAL
  {
    id: "enat-mobile",
    title: "Enat Mobile",
    category: "Digital",
    description: "Manage your finances with care. Transfer funds, pay bills, and top-up airtime via the app or *998#.",
    icon: Smartphone,
    action: "Download",
    link: "https://www.enatbanksc.com/"
  },

  // CHILDREN
  {
    id: "lij-saving",
    title: "Lij (Child) Savings",
    category: "Personal",
    description: "Secure your child's future. A high-interest savings account managed by parents until the child turns 18.",
    icon: Baby,
    action: "Start Saving",
    link: "#"
  },

  // INTEREST FREE (HIMBA)
  {
    id: "himba-savings",
    title: "Himba Savings",
    category: "Interest-Free",
    description: "Sharia-compliant Wadiah savings. 'Himba' ensures your money is kept safe without interest.",
    icon: Moon,
    action: "Details",
    link: "#"
  },
  {
    id: "himba-financing",
    title: "Himba Financing",
    category: "Interest-Free",
    description: "Halal investment and financing options tailored for business growth.",
    icon: Moon,
    action: "Check Rates",
    link: "#"
  },

  // BUSINESS
  {
    id: "sme-loan",
    title: "SME Financing",
    category: "Business",
    description: "Supporting small and medium enterprises with flexible credit lines and advisory services.",
    icon: Briefcase,
    action: "Calculate",
    link: "/calculator"
  },

  // DIASPORA
  {
    id: "diaspora-account",
    title: "Diaspora Accounts",
    category: "Diaspora",
    description: "Foreign currency accounts (USD, GBP, EUR) for Ethiopians abroad to invest back home.",
    icon: Globe,
    action: "Open Account",
    link: "/eligibility"
  }
];

const CATEGORIES = ["All", "Personal", "Digital", "Interest-Free", "Business", "Diaspora"];

export default function EnatPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredServices = ENAT_SERVICES.filter((service) => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "All" || service.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-gray-100">
      
      {/* --- HERO SECTION (Enat Purple & Yellow) --- */}
      <section className="relative w-full bg-linear-to-br from-[#662d91] to-[#4b216b] text-white py-20 px-6 overflow-hidden">
        {/* Pattern: Floral/Soft shapes */}
        <div className="absolute top-0 right-0 w-150 h-150 bg-[#f7941d] opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="relative mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="space-y-6 max-w-2xl">
            <div className="flex items-center gap-4">
               <div className="bg-white p-2 rounded-full h-20 w-20 flex items-center justify-center shadow-lg border-2 border-[#f7941d]">
                 <Flower2 size={40} className="text-[#662d91]" />
               </div>
               <div>
                 <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Enat Bank</h1>
                 <p className="text-[#f7941d] font-bold tracking-wide uppercase text-sm mt-1">Caring for Your Future</p>
               </div>
            </div>
            
            <p className="text-xl text-purple-100 max-w-xl leading-relaxed">
              The bank that cares like a mother. We are pioneers in women's economic empowerment and inclusive banking for all.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="flex items-center gap-2 bg-[#f7941d] hover:bg-[#d47f19] text-white font-bold py-3 px-8 rounded-full transition-all shadow-lg transform hover:-translate-y-0.5">
                <Smartphone size={20} />
                Get App
              </button>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 py-3 px-6 rounded-full font-medium">
                <Phone size={20} />
                <span>Call Center: <strong>816</strong></span>
              </div>
            </div>
          </div>

          {/* Quick Info */}
          <div className="hidden lg:block bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 w-80 shadow-2xl">
             <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-[#f7941d]">
               <Heart size={18} fill="currentColor" /> Women Focus
             </h3>
             <p className="text-sm text-gray-200 mb-4">
               We offer special deposit interest rates and lower loan requirements for women entrepreneurs.
             </p>
             <div className="bg-[#4b216b]/50 p-3 rounded-lg flex justify-between items-center text-sm border border-white/10">
                <span>USSD Code</span>
                <span className="font-mono font-bold text-[#f7941d]">*998#</span>
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
              placeholder="Search Enat services (e.g. 'Women Loan', 'Lij')..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 focus:ring-2 focus:ring-[#662d91] outline-none transition-all"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-[#662d91] text-white shadow-md"
                    : "bg-white dark:bg-zinc-800 text-gray-600 dark:text-gray-300 border border-gray-200 hover:border-[#662d91] hover:text-[#662d91]"
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
                    : "border-gray-200 dark:border-zinc-800 hover:border-[#662d91]/50"
                  }`}
              >
                {/* Highlight Badge */}
                {service.highlight && (
                   <span className="absolute top-4 right-4 bg-[#f7941d] text-white text-[10px] font-bold px-2 py-1 rounded">
                     FOR HER
                   </span>
                )}

                <div className={`mb-4 h-12 w-12 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110 
                  ${service.highlight ? "bg-[#662d91] text-white" : "bg-[#662d91]/10 text-[#662d91]"}`}>
                  <service.icon size={24} />
                </div>
                <div className="grow">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{service.title}</h3>
                    {service.category === "Interest-Free" && (
                      <span className="text-[10px] uppercase font-bold bg-green-100 text-green-700 px-2 py-1 rounded-full border border-green-200">Himba</span>
                    )}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{service.description}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-100 dark:border-zinc-800">
                  <Link href={service.link}>
                    <button className={`flex items-center text-sm font-bold transition-colors gap-2 
                      ${service.highlight ? "text-[#f7941d] hover:text-[#d47f19]" : "text-[#662d91] hover:text-[#4b216b]"}`}>
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