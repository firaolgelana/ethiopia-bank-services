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
  Plane,
  Gem, // Symbolizing "Premium/VIP"
  Truck,
  Landmark,
  Home
} from "lucide-react";
import Navbar from "@/components/nav_bar";

// --- Data: Real Zemen Bank Services ---
const ZEMEN_SERVICES = [
  // FLAGSHIP (Corporate Focus)
  {
    id: "corporate-internet",
    title: "Corporate Internet Banking",
    category: "Business",
    description: "State-of-the-art online platform for bulk transfers, payroll management, and real-time forex monitoring.",
    icon: Building2,
    action: "Login",
    link: "https://www.zemenbank.com/internet-banking",
    highlight: true // Special Red styling
  },

  // UNIQUE VIP SERVICE
  {
    id: "doorstep-banking",
    title: "Doorstep Banking",
    category: "Business",
    description: "Exclusive service for corporate clients. We pick up cash deposits and deliver withdrawal cash directly to your office.",
    icon: Truck,
    action: "Request Service",
    link: "#"
  },

  // TRAVEL
  {
    id: "prepaid-travel",
    title: "Prepaid Travel Card",
    category: "Personal",
    description: "Reloadable Mastercard for international travel. Safer than cash, accepted globally at millions of ATMs and POS.",
    icon: Plane,
    action: "Apply",
    link: "#"
  },

  // DIGITAL
  {
    id: "z-cash",
    title: "Z-Cash (ATM)",
    category: "Digital",
    description: "Send money to anyone (even without a bank account). They can withdraw cash from Zemen ATMs using just a code.",
    icon: Smartphone,
    action: "How to use",
    link: "#"
  },
  {
    id: "mobile-banking",
    title: "Zemen Mobile App",
    category: "Digital",
    description: "A premium mobile experience. Biometric login, expense tracking, and instant transfers via *901#.",
    icon: Smartphone,
    action: "Download",
    link: "#"
  },

  // INTEREST FREE
  {
    id: "zemen-interest-free",
    title: "Zemen Interest Free",
    category: "Interest-Free",
    description: "Sharia-compliant banking services including Wadiah savings and Murabaha financing options.",
    icon: Moon,
    action: "Details",
    link: "#"
  },

  // DIASPORA
  {
    id: "diaspora-mortgage",
    title: "Diaspora Mortgage",
    category: "Diaspora",
    description: "Competitive home loan rates for the Diaspora community with extended repayment periods.",
    icon: Home, // Using imported icon or fallback
    action: "Calculate",
    link: "/calculator"
  }
];

const CATEGORIES = ["All", "Business", "Digital", "Personal", "Interest-Free", "Diaspora"];

export default function ZemenPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredServices = ZEMEN_SERVICES.filter((service) => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "All" || service.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-gray-100">
      <Navbar/>
      {/* --- HERO SECTION (Zemen Red) --- */}
      <section className="relative w-full bg-linear-to-br from-[#ed1c24] to-[#a60f14] text-white py-20 px-6 overflow-hidden">
        {/* Pattern: Abstract Lines for "Modern Era" */}
        <div className="absolute inset-0 opacity-20" 
             style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #ffffff 10px, #ffffff 11px)' }} 
        />
        
        <div className="relative mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="space-y-6 max-w-2xl">
            <div className="flex items-center gap-4">
               {/* Logo */}
               <div className="bg-white p-2 rounded-none h-20 w-20 flex items-center justify-center shadow-2xl skew-x-[-10deg]">
                 <Landmark size={40} className="text-[#ed1c24] skew-x-10" />
               </div>
               <div>
                 <h1 className="text-4xl font-bold tracking-tight sm:text-5xl uppercase">Zemen Bank</h1>
                 <p className="text-white/80 font-light tracking-widest text-sm mt-1">Bank of the New Era</p>
               </div>
            </div>
            
            <p className="text-xl text-red-50 max-w-xl leading-relaxed font-light">
              Ethiopia's premier corporate and high-end retail bank. Experience <strong>Doorstep Banking</strong> and world-class digital solutions.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="flex items-center gap-2 bg-white hover:bg-gray-100 text-[#ed1c24] font-bold py-3 px-8 rounded shadow-lg transition-all transform hover:-translate-y-0.5">
                <Briefcase size={20} />
                Corporate Login
              </button>
              <div className="flex items-center gap-2 bg-black/20 backdrop-blur-md border border-white/20 py-3 px-6 rounded font-medium">
                <Phone size={20} />
                <span>Call: <strong>6000</strong></span>
              </div>
            </div>
          </div>

          {/* Premium Card Look */}
          <div className="hidden lg:block bg-linear-to-r from-gray-900 to-black p-8 rounded-xl border border-gray-700 w-80 shadow-2xl relative">
             <div className="absolute top-4 right-4"><Gem className="text-[#ed1c24]" /></div>
             <p className="text-gray-400 text-xs uppercase tracking-widest mb-8">Zemen Platinum</p>
             <h3 className="text-2xl font-mono text-white mb-4">**** **** **** 4092</h3>
             <div className="flex justify-between items-end">
                <div className="text-xs text-gray-400">
                    <p>VALID THRU</p>
                    <p>12/28</p>
                </div>
                <div className="text-white font-bold">VISA</div>
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
              placeholder="Search Zemen services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-none border border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 focus:ring-2 focus:ring-[#ed1c24] outline-none transition-all"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-sm font-medium transition-all rounded-none border ${
                  activeCategory === cat
                    ? "bg-[#ed1c24] text-white border-[#ed1c24]"
                    : "bg-white dark:bg-zinc-800 text-gray-600 dark:text-gray-300 border-gray-200 hover:border-[#ed1c24] hover:text-[#ed1c24]"
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
                className={`group relative bg-white dark:bg-zinc-900 border p-6 hover:shadow-xl transition-all duration-300 flex flex-col h-full 
                  ${service.highlight 
                    ? "border-[#ed1c24] border-l-4 shadow-red-50 dark:shadow-none" 
                    : "border-gray-200 dark:border-zinc-800 hover:border-[#ed1c24]"
                  }`}
              >
                <div className={`mb-4 h-12 w-12 flex items-center justify-center transition-colors
                  ${service.highlight ? "bg-[#ed1c24] text-white" : "bg-gray-100 text-gray-600 group-hover:bg-[#ed1c24] group-hover:text-white"}`}>
                  <service.icon size={24} />
                </div>
                <div className="grow">
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{service.description}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-100 dark:border-zinc-800">
                  <Link href={service.link}>
                    <button className="flex items-center text-sm font-bold text-[#ed1c24] hover:underline gap-2">
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