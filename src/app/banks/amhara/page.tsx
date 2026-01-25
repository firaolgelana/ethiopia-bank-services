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
  Users, // Community/Shareholders
  HeartPulse, // Health (Tena)
  Wheat,
  Award
} from "lucide-react";
import Navbar from "@/components/nav_bar";

// --- Data: Real Amhara Bank Services ---
const AMHARA_SERVICES = [
  // FLAGSHIP 
  {
    id: "amhara-mobile",
    title: "Amhara Mobile",
    category: "Digital",
    description: "Banking beyond limits. Manage your finances, pay bills, and transfer funds seamlessly via *818#.",
    icon: Smartphone,
    action: "Download",
    link: "https://www.amharabank.com.et/",
    highlight: true // Special Teal styling
  },

  // UNIQUE PRODUCT
  {
    id: "tena-account",
    title: "Tena (Health) Savings",
    category: "Personal",
    description: "Save for your health. A unique account that offers medical insurance coverage and priority healthcare loans.",
    icon: HeartPulse,
    action: "Learn More",
    link: "#"
  },

  // INTEREST FREE (BALEWILETA)
  {
    id: "balewileta-savings",
    title: "Balewileta Savings",
    category: "Interest-Free",
    description: "Sharia-compliant savings (Wadiah). 'Balewileta' ensures your funds are managed ethically without interest.",
    icon: Moon,
    action: "Details",
    link: "#"
  },
  {
    id: "balewileta-financing",
    title: "Balewileta Financing",
    category: "Interest-Free",
    description: "Halal financing for vehicles, homes, and business machinery based on Murabaha.",
    icon: Moon,
    action: "Check Rates",
    link: "#"
  },

  // BUSINESS
  {
    id: "agri-loan",
    title: "Agri-Business Loan",
    category: "Business",
    description: "Empowering farmers and agro-processors with specialized credit lines and input financing.",
    icon: Wheat,
    action: "Requirements",
    link: "#"
  },
  
  // PERSONAL
  {
    id: "amhara-card",
    title: "Amhara Card",
    category: "Personal",
    description: "Access your cash anytime. Secure debit cards accepted at all ATM networks in Ethiopia.",
    icon: CreditCard,
    action: "Apply",
    link: "#"
  },
  {
    id: "diaspora",
    title: "Agar (Diaspora)",
    category: "Diaspora",
    description: "Exclusive foreign currency accounts for Ethiopians living abroad to build wealth at home.",
    icon: Globe,
    action: "Open Account",
    link: "/eligibility"
  }
];

const CATEGORIES = ["All", "Digital", "Interest-Free", "Personal", "Business", "Diaspora"];

export default function AmharaPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredServices = AMHARA_SERVICES.filter((service) => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "All" || service.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-gray-100">
      <Navbar/>
      {/* --- HERO SECTION (Teal & Gold) --- */}
      <section className="relative w-full bg-linear-to-r from-[#00a79d] to-[#007a72] text-white py-20 px-6 overflow-hidden">
        {/* Pattern: Community/Dots */}
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: 'radial-gradient(#fdb913 2px, transparent 2px)', backgroundSize: '30px 30px' }} 
        />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#fdb913] opacity-20 rounded-full blur-3xl translate-y-1/2 translate-x-1/2"></div>
        
        <div className="relative mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="space-y-6 max-w-2xl">
            <div className="flex items-center gap-4">
               <div className="bg-white p-2 rounded-xl h-20 w-20 flex items-center justify-center shadow-lg border-b-4 border-[#fdb913]">
                 <Award size={40} className="text-[#00a79d]" />
               </div>
               <div>
                 <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Amhara Bank</h1>
                 <p className="text-[#fdb913] font-bold tracking-wide uppercase text-sm mt-1">Bankik Belay (Beyond Bank)</p>
               </div>
            </div>
            
            <p className="text-xl text-teal-50 max-w-xl leading-relaxed">
              The people's bank. With a massive community base, we offer inclusive services like the <strong>Tena Health Account</strong> and digital banking for all.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="flex items-center gap-2 bg-[#fdb913] hover:bg-[#e0a00b] text-[#00554d] font-bold py-3 px-8 rounded-lg transition-all shadow-lg transform hover:-translate-y-0.5">
                <Smartphone size={20} />
                Get App
              </button>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 py-3 px-6 rounded-lg font-medium">
                <Phone size={20} />
                <span>Call Center: <strong>818</strong></span>
              </div>
            </div>
          </div>

          {/* Quick Info */}
          <div className="hidden lg:block bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 w-80 shadow-2xl">
             <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-[#fdb913]">
               <Users size={18} /> People's Choice
             </h3>
             <p className="text-sm text-gray-200 mb-4">
               We hold the record for the highest number of shareholders in Ethiopian banking history.
             </p>
             <div className="bg-[#00554d]/50 p-3 rounded-lg flex justify-between items-center text-sm border border-white/10">
                <span>USSD Code</span>
                <span className="font-mono font-bold text-[#fdb913]">*818#</span>
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
              placeholder="Search Amhara Bank services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 focus:ring-2 focus:ring-[#00a79d] outline-none transition-all"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-[#00a79d] text-white shadow-md"
                    : "bg-white dark:bg-zinc-800 text-gray-600 dark:text-gray-300 border border-gray-200 hover:border-[#00a79d] hover:text-[#00a79d]"
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
                    ? "border-[#fdb913] ring-1 ring-[#fdb913]/30 shadow-yellow-50 dark:shadow-none" 
                    : "border-gray-200 dark:border-zinc-800 hover:border-[#00a79d]/50"
                  }`}
              >
                {/* Highlight Badge */}
                {service.highlight && (
                   <span className="absolute top-4 right-4 bg-[#fdb913] text-[#00554d] text-[10px] font-bold px-2 py-1 rounded">
                     POPULAR
                   </span>
                )}
                
                <div className={`mb-4 h-12 w-12 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110 
                  ${service.highlight ? "bg-[#00a79d] text-white" : "bg-[#00a79d]/10 text-[#00a79d]"}`}>
                  <service.icon size={24} />
                </div>
                <div className="grow">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{service.title}</h3>
                    {service.category === "Interest-Free" && (
                      <span className="text-[10px] uppercase font-bold bg-green-100 text-green-700 px-2 py-1 rounded-full border border-green-200">Balewileta</span>
                    )}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{service.description}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-100 dark:border-zinc-800">
                  <Link href={service.link}>
                    <button className={`flex items-center text-sm font-bold transition-colors gap-2 
                      ${service.highlight ? "text-[#e0a00b] hover:text-[#00554d]" : "text-[#00a79d] hover:text-[#007a72]"}`}>
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