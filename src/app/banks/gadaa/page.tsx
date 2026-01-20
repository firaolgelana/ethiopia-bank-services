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
  TreeDeciduous, // The "Oda" (Sycamore Tree) - symbol of Gadaa
  Scale, // Justice/Fairness
  Users,
  Wheat
} from "lucide-react";

// --- Data: Real Gadaa Bank Services ---
const GADAA_SERVICES = [
  // FLAGSHIP 
  {
    id: "gadaa-mobile",
    title: "Gadaa Mobile",
    category: "Digital",
    description: "Banking with values. Secure and fast mobile transactions via the app or *902#.",
    icon: Smartphone,
    action: "Download",
    link: "https://gadaabank.com.et/",
    highlight: true // Special Red styling
  },

  // INTEREST FREE (ODA)
  {
    id: "oda-savings",
    title: "Oda Savings",
    category: "Interest-Free",
    description: "Sharia-compliant savings (Wadiah). Named after the Oda tree, symbolizing peace and shelter for your wealth.",
    icon: Moon,
    action: "Learn More",
    link: "#"
  },
  {
    id: "oda-financing",
    title: "Oda Financing",
    category: "Interest-Free",
    description: "Ethical financing solutions for housing, vehicles, and trade based on Murabaha.",
    icon: Moon,
    action: "Check Rates",
    link: "#"
  },

  // COOP / AGRI
  {
    id: "coop-financing",
    title: "Cooperative Loan",
    category: "Business",
    description: "Specialized lending for Farmers' Cooperatives and Unions to purchase inputs and machinery.",
    icon: Users,
    action: "Requirements",
    link: "#"
  },
  {
    id: "agri-business",
    title: "Agri-Business",
    category: "Business",
    description: "Supporting the agricultural value chain from farm to market.",
    icon: Wheat,
    action: "Apply",
    link: "#"
  },

  // PERSONAL
  {
    id: "gadaa-card",
    title: "Gadaa Card",
    category: "Personal",
    description: "Access your funds at Gadaa ATMs and across the entire Et-Switch network.",
    icon: CreditCard,
    action: "Request Card",
    link: "#"
  },
  {
    id: "diaspora",
    title: "Diaspora Accounts",
    category: "Diaspora",
    description: "Foreign currency savings for the Diaspora. Invest in your roots.",
    icon: Globe,
    action: "Open Account",
    link: "/eligibility"
  }
];

const CATEGORIES = ["All", "Digital", "Interest-Free", "Business", "Personal", "Diaspora"];

export default function GadaaPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredServices = GADAA_SERVICES.filter((service) => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "All" || service.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-gray-100">
      
      {/* --- HERO SECTION (Gadaa Red & Black) --- */}
      <section className="relative w-full bg-linear-to-r from-[#ed1c24] to-[#a00000] text-white py-20 px-6 overflow-hidden">
        {/* Pattern: Cultural Stripes/Shapes */}
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 10px, transparent 10px, transparent 20px)' }} 
        />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-black opacity-30 rounded-tl-full"></div>
        
        <div className="relative mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="space-y-6 max-w-2xl">
            <div className="flex items-center gap-4">
               <div className="bg-white p-2 rounded-xl h-20 w-20 flex items-center justify-center shadow-lg border-4 border-black">
                 <TreeDeciduous size={40} className="text-[#ed1c24]" />
               </div>
               <div>
                 <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Gadaa Bank</h1>
                 <p className="text-black font-bold tracking-wide uppercase text-sm mt-1 bg-white/20 px-2 py-0.5 inline-block rounded">Bank of the People</p>
               </div>
            </div>
            
            <p className="text-xl text-red-50 max-w-xl leading-relaxed">
              Inspired by the values of the Gadaa system. We provide fair, inclusive, and transparent banking services for everyone.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="flex items-center gap-2 bg-black hover:bg-gray-900 text-white font-bold py-3 px-8 rounded-lg transition-all shadow-lg transform hover:-translate-y-0.5">
                <Smartphone size={20} />
                Get App
              </button>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 py-3 px-6 rounded-lg font-medium">
                <Phone size={20} />
                <span>Call Center: <strong>902</strong></span>
              </div>
            </div>
          </div>

          {/* Quick Info */}
          <div className="hidden lg:block bg-black/40 backdrop-blur-md p-6 rounded-2xl border-l-4 border-white w-80 shadow-2xl">
             <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-white">
               <Scale size={18} /> Fair Banking
             </h3>
             <p className="text-sm text-gray-200 mb-4">
               Our cooperative financing model ensures shared growth for farmers and SMEs.
             </p>
             <div className="bg-[#ed1c24]/80 p-3 rounded-lg flex justify-between items-center text-sm border border-white/10">
                <span>USSD Code</span>
                <span className="font-mono font-bold text-white">*902#</span>
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
              placeholder="Search Gadaa services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 focus:ring-2 focus:ring-[#ed1c24] outline-none transition-all"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-[#ed1c24] text-white shadow-md"
                    : "bg-white dark:bg-zinc-800 text-gray-600 dark:text-gray-300 border border-gray-200 hover:border-[#ed1c24] hover:text-[#ed1c24]"
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
                    ? "border-[#ed1c24] ring-1 ring-[#ed1c24]/20 shadow-red-50 dark:shadow-none" 
                    : "border-gray-200 dark:border-zinc-800 hover:border-[#ed1c24]/50"
                  }`}
              >
                {/* Highlight Badge */}
                {service.highlight && (
                   <span className="absolute top-4 right-4 bg-[#ed1c24] text-white text-[10px] font-bold px-2 py-1 rounded">
                     FAIR FOR ALL
                   </span>
                )}
                
                <div className={`mb-4 h-12 w-12 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110 
                  ${service.highlight ? "bg-[#ed1c24] text-white" : "bg-[#ed1c24]/10 text-[#ed1c24]"}`}>
                  <service.icon size={24} />
                </div>
                <div className="grow">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{service.title}</h3>
                    {service.category === "Interest-Free" && (
                      <span className="text-[10px] uppercase font-bold bg-green-100 text-green-700 px-2 py-1 rounded-full border border-green-200">Oda</span>
                    )}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{service.description}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-100 dark:border-zinc-800">
                  <Link href={service.link}>
                    <button className={`flex items-center text-sm font-bold transition-colors gap-2 
                      ${service.highlight ? "text-[#ed1c24] hover:text-[#a00000]" : "text-gray-600 hover:text-[#ed1c24]"}`}>
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