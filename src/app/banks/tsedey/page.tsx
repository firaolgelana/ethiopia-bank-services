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
  Sprout, // "Tsedey" means Spring/Growth
  Flower2, 
  Tractor,
  Users
} from "lucide-react";
import Navbar from "@/components/nav_bar";

// --- Data: Real Tsedey Bank Services ---
const TSEDEY_SERVICES = [
  // FLAGSHIP (Legacy Strength)
  {
    id: "agri-loan",
    title: "Agricultural Financing",
    category: "Business",
    description: "Specialized loans for inputs, machinery, and harvest. We remain the partner of choice for farmers.",
    icon: Tractor,
    action: "Requirements",
    link: "#",
    highlight: true // Special Green styling
  },

  // DIGITAL
  {
    id: "tsedey-mobile",
    title: "Tsedey Mobile",
    category: "Digital",
    description: "Banking for everyone. Easy-to-use mobile banking for rural and urban customers via *878#.",
    icon: Smartphone,
    action: "Download",
    link: "https://tsedeybank.com.et/"
  },

  // MICRO FINANCE ROOTS
  {
    id: "micro-loan",
    title: "Micro-Business Loan",
    category: "Business",
    description: "Small loans with minimal requirements to help traders and small businesses grow.",
    icon: Sprout,
    action: "Apply at Branch",
    link: "#"
  },

  // SAVINGS
  {
    id: "target-saving",
    title: "Target Savings",
    category: "Personal",
    description: "Plan for your future. High-interest savings accounts designed for weddings, education, or housing.",
    icon: Building2,
    action: "View Rates",
    link: "#"
  },

  // INTEREST FREE
  {
    id: "halal-savings",
    title: "Tsedey Halal",
    category: "Interest-Free",
    description: "Sharia-compliant saving services ensuring your money grows ethically.",
    icon: Moon,
    action: "Details",
    link: "#"
  },

  // DIASPORA
  {
    id: "diaspora-account",
    title: "Diaspora Accounts",
    category: "Diaspora",
    description: "Connect with home. Secure foreign currency accounts for the Ethiopian Diaspora.",
    icon: Globe,
    action: "Open Account",
    link: "/eligibility"
  },
  
  // CARD
  {
    id: "tsedey-card",
    title: "Tsedey Card",
    category: "Personal",
    description: "Access your cash 24/7 at Tsedey ATMs and the shared Et-Switch network.",
    icon: CreditCard,
    action: "Apply",
    link: "#"
  }
];

const CATEGORIES = ["All", "Business", "Digital", "Personal", "Interest-Free", "Diaspora"];

export default function TsedeyPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredServices = TSEDEY_SERVICES.filter((service) => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "All" || service.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-gray-100">
      <Navbar/>
      {/* --- HERO SECTION (Spring Green) --- */}
      <section className="relative w-full bg-linear-to-br from-[#388e3c] to-[#1b5e20] text-white py-20 px-6 overflow-hidden">
        {/* Pattern: Leaves/Nature */}
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: 'radial-gradient(circle, #fbc02d 2px, transparent 2px)', backgroundSize: '24px 24px' }} 
        />
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#fbc02d] opacity-20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="relative mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="space-y-6 max-w-2xl">
            <div className="flex items-center gap-4">
               <div className="bg-white p-2 rounded-xl h-20 w-20 flex items-center justify-center shadow-lg border-b-4 border-[#fbc02d]">
                 <Flower2 size={40} className="text-[#388e3c]" />
               </div>
               <div>
                 <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Tsedey Bank</h1>
                 <p className="text-[#fbc02d] font-bold tracking-wide uppercase text-sm mt-1">The Bank for All</p>
               </div>
            </div>
            
            <p className="text-xl text-green-50 max-w-xl leading-relaxed">
              Symbolizing a new season of financial growth. We bring commercial banking services to every corner of the country, powered by our strong roots in the community.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="flex items-center gap-2 bg-[#fbc02d] hover:bg-[#f9a825] text-[#1b5e20] font-bold py-3 px-8 rounded-lg transition-all shadow-lg transform hover:-translate-y-0.5">
                <Smartphone size={20} />
                Get App
              </button>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 py-3 px-6 rounded-lg font-medium">
                <Phone size={20} />
                <span>Call Center: <strong>878</strong></span>
              </div>
            </div>
          </div>

          {/* Quick Info */}
          <div className="hidden lg:block bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 w-80 shadow-2xl">
             <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-[#fbc02d]">
               <Users size={18} /> Inclusive Banking
             </h3>
             <p className="text-sm text-gray-200 mb-4">
               From micro-loans to corporate financing, we serve millions of customers nationwide.
             </p>
             <div className="bg-[#1b5e20]/50 p-3 rounded-lg flex justify-between items-center text-sm border border-white/10">
                <span>USSD Code</span>
                <span className="font-mono font-bold text-[#fbc02d]">*878#</span>
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
              placeholder="Search Tsedey services (e.g. 'Agri', 'Loan')..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 focus:ring-2 focus:ring-[#388e3c] outline-none transition-all"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-[#388e3c] text-white shadow-md"
                    : "bg-white dark:bg-zinc-800 text-gray-600 dark:text-gray-300 border border-gray-200 hover:border-[#388e3c] hover:text-[#388e3c]"
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
                    ? "border-[#fbc02d] ring-1 ring-[#fbc02d]/30 shadow-yellow-50 dark:shadow-none" 
                    : "border-gray-200 dark:border-zinc-800 hover:border-[#388e3c]/50"
                  }`}
              >
                {/* Highlight Badge */}
                {service.highlight && (
                   <span className="absolute top-4 right-4 bg-[#fbc02d] text-[#1b5e20] text-[10px] font-bold px-2 py-1 rounded">
                     CORE SECTOR
                   </span>
                )}
                
                <div className={`mb-4 h-12 w-12 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110 
                  ${service.highlight ? "bg-[#388e3c] text-white" : "bg-[#388e3c]/10 text-[#388e3c]"}`}>
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
                      ${service.highlight ? "text-[#fbc02d] hover:text-[#f9a825]" : "text-[#388e3c] hover:text-[#1b5e20]"}`}>
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