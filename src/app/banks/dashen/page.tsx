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
  Wallet,
  Gem,
  ShoppingBag,
  Heart
} from "lucide-react";

// --- Data: Real Dashen Bank Services ---
const DASHEN_SERVICES = [
  // FLAGSHIP DIGITAL PRODUCT
  {
    id: "amole",
    title: "Amole Digital Wallet",
    category: "Digital",
    description: "More than just a wallet. Pay merchants, buy concert tickets, order food, and transfer money without a bank account via *996#.",
    icon: Wallet,
    action: "Get Amole",
    link: "https://www.dashenbanksc.com/amole/",
    highlight: true // Special Gold styling
  },

  // PERSONAL BANKING
  {
    id: "an-nissa",
    title: "An-Nissa (Women's Account)",
    category: "Personal",
    description: "Exclusive account for women offering higher interest rates, business training, and collateral-free loans for MSMEs.",
    icon: Heart,
    action: "Learn More",
    link: "#"
  },
  {
    id: "salary-loan",
    title: "Consumer / Salary Loan",
    description: "Quick loans for employees of reputable organizations. Finance your personal needs with flexible repayment periods.",
    icon: Building2,
    action: "Calculate",
    link: "/calculator"
  },
  {
    id: "dashen-pay",
    title: "Dashen Pay (Tap to Pay)",
    category: "Digital",
    description: "Contactless payment solution. Use your phone or card to tap and pay at thousands of merchant locations.",
    icon: Smartphone,
    action: "Setup Guide",
    link: "#"
  },

  // SHARIK (Interest Free)
  {
    id: "sharik-wadiah",
    title: "Sharik Wadiah Savings",
    category: "Interest-Free",
    description: "Sharia-compliant safekeeping account. Your funds are secure and strictly separated from interest-based funds.",
    icon: Moon,
    action: "View Details",
    link: "#"
  },
  {
    id: "sharik-labbaik",
    title: "Labbaik Hajj Saving",
    category: "Interest-Free",
    description: "Dedicated savings plan designed to help you save for your Hajj and Umrah pilgrimage expenses.",
    icon: Moon,
    action: "Plan Hajj",
    link: "#"
  },

  // DIASPORA & BUSINESS
  {
    id: "diaspora-mortgage",
    title: "Diaspora Home Loan",
    category: "Diaspora",
    description: "Purchase or finish your dream home in Ethiopia. Pay in foreign currency (USD/EUR) for preferential interest rates.",
    icon: Home,
    action: "Calculate",
    link: "/calculator"
  },
  {
    id: "d-plug",
    title: "D-Plug (Open API)",
    category: "Business",
    description: "API integration for businesses. Connect your ERP or Fintech app directly to Dashen's core banking system.",
    icon: Briefcase,
    action: "Developer Portal",
    link: "#"
  },
  {
    id: "american-express",
    title: "American Express (AMEX)",
    category: "Business",
    description: "Dashen is the exclusive issuer of AMEX Gold and Green cards in Ethiopia for premium travel and lifestyle perks.",
    icon: CreditCard,
    action: "Apply",
    link: "#"
  }
];

const CATEGORIES = ["All", "Digital", "Personal", "Interest-Free", "Diaspora", "Business"];

export default function DashenPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter Logic
  const filteredServices = DASHEN_SERVICES.filter((service) => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "All" || service.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-gray-100">
      
      {/* --- HERO SECTION (Dashen Navy & Gold) --- */}
      <section className="relative w-full bg-[#0f1e5a] text-white py-20 px-6 overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#cfa039] opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400 opacity-5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/4"></div>

        <div className="relative mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-10">
          
          <div className="space-y-6 max-w-2xl">
            <div className="flex items-center gap-4">
               {/* Logo Placeholder */}
               <div className="bg-white p-2 rounded-xl h-20 w-20 flex items-center justify-center shadow-lg">
                 <span className="text-3xl font-extrabold text-[#0f1e5a]">DB</span>
               </div>
               <div>
                 <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Dashen Bank</h1>
                 <p className="text-[#cfa039] font-medium tracking-widest uppercase text-sm mt-1">Always One Step Ahead</p>
               </div>
            </div>
            
            <p className="text-xl text-gray-200 max-w-xl leading-relaxed">
              Pioneering digital banking in Ethiopia. From the Amole lifestyle app to exclusive American Express partnerships.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="flex items-center gap-2 bg-[#cfa039] hover:bg-[#b88d2f] text-[#0f1e5a] font-bold py-3 px-8 rounded-lg transition-all shadow-lg hover:shadow-[#cfa039]/20 transform hover:-translate-y-0.5">
                <Wallet size={20} />
                Get Amole
              </button>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 py-3 px-6 rounded-lg font-medium">
                <Phone size={20} />
                <span>Call Center: <strong>6333</strong></span>
              </div>
            </div>
          </div>

          {/* Quick Codes Card */}
          <div className="hidden lg:block bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 w-80 shadow-2xl relative">
            <div className="absolute top-0 right-0 p-4 opacity-20">
              <Gem size={48} className="text-[#cfa039]" />
            </div>
            <h3 className="text-lg font-semibold mb-6 text-[#cfa039]">Dashen Fast Codes</h3>
            <ul className="space-y-4 font-mono text-lg">
              <li className="flex justify-between items-center border-b border-white/10 pb-2">
                <span>Amole Menu</span> 
                <span className="bg-[#cfa039] text-[#0f1e5a] px-2 py-0.5 rounded font-bold text-base">*996#</span>
              </li>
              <li className="flex justify-between items-center border-b border-white/10 pb-2">
                <span>Mobile Banking</span> 
                <span className="text-gray-300 text-base">*920#</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Pay Merchant</span> 
                <span className="text-gray-300 text-sm">Use App</span>
              </li>
            </ul>
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
              placeholder="Search Dashen services (e.g. 'Amole', 'Loan')..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 focus:ring-2 focus:ring-[#0f1e5a] outline-none transition-all"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-[#0f1e5a] text-white shadow-md border border-[#0f1e5a]"
                    : "bg-white dark:bg-zinc-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-zinc-700 hover:border-[#cfa039] hover:text-[#0f1e5a] dark:hover:text-[#cfa039]"
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
                    ? "border-[#cfa039] ring-1 ring-[#cfa039]/20 shadow-yellow-100 dark:shadow-none" 
                    : "border-gray-200 dark:border-zinc-800 hover:border-[#0f1e5a]/30"
                  }`}
              >
                {/* Special Badge for Amole */}
                {service.highlight && (
                   <div className="absolute top-0 right-0 bg-[#cfa039] text-[#0f1e5a] text-[10px] font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl flex items-center gap-1">
                     <Gem size={10} /> FEATURED
                   </div>
                )}

                {/* Icon */}
                <div className={`mb-4 h-12 w-12 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110 
                  ${service.highlight ? "bg-[#cfa039] text-[#0f1e5a]" : "bg-[#0f1e5a]/10 text-[#0f1e5a]"}`}>
                  <service.icon size={24} />
                </div>

                {/* Content */}
                <div className="grow">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                      {service.title}
                    </h3>
                    {service.category === "Interest-Free" && (
                      <span className="text-[10px] uppercase font-bold bg-green-100 text-green-700 px-2 py-1 rounded-full border border-green-200">Sharik</span>
                    )}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Footer */}
                <div className="mt-6 pt-4 border-t border-gray-100 dark:border-zinc-800">
                  <Link href={service.link}>
                    <button className={`flex items-center text-sm font-bold transition-colors gap-2 
                      ${service.highlight ? "text-[#cfa039] hover:text-[#b88d2f]" : "text-[#0f1e5a] hover:text-[#cfa039]"}`}>
                      {service.action} <ArrowRight size={16} />
                    </button>
                  </Link>
                </div>
              </div>
            ))}
            
            {/* Empty State */}
            {filteredServices.length === 0 && (
                <div className="col-span-full py-16 text-center opacity-60">
                    <ShoppingBag size={48} className="mx-auto mb-4 text-gray-300" />
                    <p className="text-lg">No services found for "{searchTerm}"</p>
                </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}