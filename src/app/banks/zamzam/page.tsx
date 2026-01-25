"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Search, 
  Smartphone, 
  Building2, 
  Globe, 
  Moon, // Symbolizing IFB
  CreditCard, 
  Briefcase, 
  ArrowRight,
  Phone,
  Scale, // Justice/Balance
  Gem,
  HeartHandshake,
  ScrollText
} from "lucide-react";
import Navbar from "@/components/nav_bar";

// --- Data: Real ZamZam Bank Services ---
const ZAMZAM_SERVICES = [
  // FLAGSHIP (The Pioneer Status)
  {
    id: "full-ifb",
    title: "100% Sharia Compliant",
    category: "Interest-Free",
    description: "Ethiopia's first full-fledged Interest-Free Bank. We do not mix funds with interest-based systems. Pure banking.",
    icon: Moon,
    action: "Our Sharia Board",
    link: "#",
    highlight: true // Special Green/Gold styling
  },

  // DIGITAL
  {
    id: "zamzam-mobile",
    title: "ZamZam Mobile",
    category: "Digital",
    description: "Ethical banking at your fingertips. Manage your Wadiah accounts and transfers via app or *993#.",
    icon: Smartphone,
    action: "Download",
    link: "https://zamzambank.com/"
  },

  // SAVINGS (WADIAH/MUDARABAH)
  {
    id: "wadiah-saving",
    title: "Wadiah (Safe Keeping)",
    category: "Personal",
    description: "Your money is kept safe with us. You can withdraw at any time, guaranteed by the bank.",
    icon: Scale,
    action: "Open Account",
    link: "#"
  },
  {
    id: "mudarabah-invest",
    title: "Mudarabah Investment",
    category: "Personal",
    description: "Profit-sharing investment accounts. Partner with the bank and share in the profits generated from Halal businesses.",
    icon: Gem,
    action: "View Profit Rates",
    link: "#"
  },

  // FINANCING (MURABAHA)
  {
    id: "vehicle-murabaha",
    title: "Vehicle Murabaha",
    category: "Business",
    description: "Cost-plus financing. We buy the vehicle you need and sell it to you at a markup with flexible installments.",
    icon: Building2,
    action: "Calculate",
    link: "/calculator"
  },
  {
    id: "diaspora-investment",
    title: "Diaspora Investment",
    category: "Diaspora",
    description: "Halal investment opportunities for the Diaspora community in real estate and industry.",
    icon: Globe,
    action: "Explore",
    link: "/eligibility"
  },
  
  // CARD
  {
    id: "zamzam-card",
    title: "ZamZam Debit Card",
    category: "Personal",
    description: "Sharia-compliant debit card for easy access to your funds at ATMs and POS terminals.",
    icon: CreditCard,
    action: "Apply",
    link: "#"
  }
];

const CATEGORIES = ["All", "Interest-Free", "Personal", "Business", "Digital", "Diaspora"];

export default function ZamZamPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredServices = ZAMZAM_SERVICES.filter((service) => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "All" || service.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-gray-100">
      <Navbar/>
      {/* --- HERO SECTION (Islamic Green & Gold) --- */}
      <section className="relative w-full bg-linear-to-r from-[#009639] to-[#006e2a] text-white py-20 px-6 overflow-hidden">
        {/* Pattern: Geometric Islamic Art Style (CSS) */}
        <div className="absolute inset-0 opacity-10" 
             style={{ 
               backgroundImage: 'repeating-linear-gradient(45deg, #d4af37 0, #d4af37 1px, transparent 0, transparent 50%), repeating-linear-gradient(-45deg, #d4af37 0, #d4af37 1px, transparent 0, transparent 50%)', 
               backgroundSize: '20px 20px' 
             }} 
        />
        
        <div className="relative mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="space-y-6 max-w-2xl">
            <div className="flex items-center gap-4">
               <div className="bg-white p-2 rounded-full h-20 w-20 flex items-center justify-center shadow-lg border-4 border-[#d4af37]">
                 <Moon size={40} className="text-[#009639]" />
               </div>
               <div>
                 <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">ZamZam Bank</h1>
                 <p className="text-[#d4af37] font-bold tracking-wide uppercase text-sm mt-1">Al-Baraka (The Blessing)</p>
               </div>
            </div>
            
            <p className="text-xl text-green-50 max-w-xl leading-relaxed">
              Ethiopia's first full-fledged Interest-Free Bank. We provide purely ethical banking services compliant with Sharia law.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="flex items-center gap-2 bg-[#d4af37] hover:bg-[#b5952f] text-[#006e2a] font-bold py-3 px-8 rounded-lg transition-all shadow-lg transform hover:-translate-y-0.5">
                <Smartphone size={20} />
                Get App
              </button>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 py-3 px-6 rounded-lg font-medium">
                <Phone size={20} />
                <span>Call Center: <strong>993</strong></span>
              </div>
            </div>
          </div>

          {/* Quick Info */}
          <div className="hidden lg:block bg-[#006e2a] p-6 rounded-2xl border-l-4 border-[#d4af37] w-80 shadow-2xl">
             <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-[#d4af37]">
               <ScrollText size={18} /> First of its Kind
             </h3>
             <p className="text-sm text-gray-200 mb-4">
               Unlike other banks, our entire capital and operations are dedicated solely to Interest-Free Banking.
             </p>
             <div className="bg-black/20 p-3 rounded-lg flex justify-between items-center text-sm border border-white/10">
                <span>USSD Code</span>
                <span className="font-mono font-bold text-[#d4af37]">*993#</span>
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
              placeholder="Search ZamZam services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 focus:ring-2 focus:ring-[#009639] outline-none transition-all"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-[#009639] text-white shadow-md"
                    : "bg-white dark:bg-zinc-800 text-gray-600 dark:text-gray-300 border border-gray-200 hover:border-[#009639] hover:text-[#009639]"
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
                    ? "border-[#d4af37] ring-1 ring-[#d4af37]/30 shadow-yellow-50 dark:shadow-none" 
                    : "border-gray-200 dark:border-zinc-800 hover:border-[#009639]/50"
                  }`}
              >
                {/* Highlight Badge */}
                {service.highlight && (
                   <span className="absolute top-4 right-4 bg-[#d4af37] text-[#006e2a] text-[10px] font-bold px-2 py-1 rounded">
                     ETHICAL FIRST
                   </span>
                )}
                
                <div className={`mb-4 h-12 w-12 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110 
                  ${service.highlight ? "bg-[#009639] text-white" : "bg-[#009639]/10 text-[#009639]"}`}>
                  <service.icon size={24} />
                </div>
                <div className="grow">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{service.title}</h3>
                    <span className="text-[10px] uppercase font-bold bg-green-100 text-green-700 px-2 py-1 rounded-full border border-green-200">Halal</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{service.description}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-100 dark:border-zinc-800">
                  <Link href={service.link}>
                    <button className={`flex items-center text-sm font-bold transition-colors gap-2 
                      ${service.highlight ? "text-[#d4af37] hover:text-[#b5952f]" : "text-[#009639] hover:text-[#006e2a]"}`}>
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