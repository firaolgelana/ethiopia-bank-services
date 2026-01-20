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
  Tractor, // Symbolizing Agriculture/Oromia
  Coins,
  ShieldCheck,
  Wheat
} from "lucide-react";

// --- Data: Real Oromia Bank Services ---
const OROMIA_SERVICES = [
  // FLAGSHIP 
  {
    id: "oro-card",
    title: "Oro-Card (ATM)",
    category: "Personal",
    description: "Reliable ATM services nationwide. Access your cash 24/7 at Oromia Bank terminals and Et-Switch network.",
    icon: CreditCard,
    action: "Apply",
    link: "#",
    highlight: true // Special styling
  },
  {
    id: "mobile-banking",
    title: "Oro Mobile Banking",
    category: "Digital",
    description: "Secure mobile banking via *895#. Transfer funds, check balances, and buy airtime instantly.",
    icon: Smartphone,
    action: "Download",
    link: "https://oromiabank.com/"
  },

  // AGRICULTURE / BUSINESS
  {
    id: "livestock-loan",
    title: "Livestock Financing",
    category: "Business",
    description: "Specialized loans for fattening, dairy farming, and poultry. Tailored for the backbone of the economy.",
    icon: Tractor,
    action: "Requirements",
    link: "/eligibility"
  },
  {
    id: "coffee-export",
    title: "Coffee Export Loan",
    category: "Business",
    description: "Pre-shipment financing specifically designed for Coffee exporters to manage harvest and processing.",
    icon: Wheat,
    action: "Learn More",
    link: "#"
  },

  // INTEREST FREE
  {
    id: "ifb-saving",
    title: "Halal Savings",
    category: "Interest-Free",
    description: "Interest-free deposit accounts (Wadiah) fully compliant with Sharia principles.",
    icon: Moon,
    action: "View Details",
    link: "#"
  },
  {
    id: "murabaha",
    title: "Murabaha Financing",
    category: "Interest-Free",
    description: "Cost-plus financing for vehicles, machinery, and home appliances.",
    icon: Moon,
    action: "Check Rates",
    link: "#"
  },

  // DIASPORA
  {
    id: "diaspora-banking",
    title: "Diaspora Accounts",
    category: "Diaspora",
    description: "Foreign currency accounts for Ethiopians living abroad with special mortgage privileges.",
    icon: Globe,
    action: "Open Account",
    link: "/eligibility"
  },
  
  // INSURANCE
  {
    id: "bancassurance",
    title: "Oromia Bancassurance",
    category: "Personal",
    description: "Get life and property insurance directly through your bank branch.",
    icon: ShieldCheck,
    action: "Get Quote",
    link: "#"
  }
];

const CATEGORIES = ["All", "Business", "Digital", "Personal", "Interest-Free", "Diaspora"];

export default function OromiaPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredServices = OROMIA_SERVICES.filter((service) => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "All" || service.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-gray-100">
      
      {/* --- HERO SECTION (Forest Green & Red) --- */}
      <section className="relative w-full bg-linear-to-r from-[#006837] to-[#004d29] text-white py-20 px-6 overflow-hidden">
        {/* Pattern: Abstract Circles */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-600 opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="relative mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="space-y-6 max-w-2xl">
            <div className="flex items-center gap-4">
               <div className="bg-white p-2 rounded-xl h-20 w-20 flex items-center justify-center shadow-lg border-b-4 border-red-600">
                 <Coins size={40} className="text-[#006837]" />
               </div>
               <div>
                 <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Oromia Bank</h1>
                 <p className="text-red-300 font-bold tracking-wide uppercase text-sm mt-1">Serving to Empower You</p>
               </div>
            </div>
            
            <p className="text-xl text-green-50 max-w-xl leading-relaxed">
              A bank dedicated to the people's growth. Specialized in agricultural financing, export support, and modern digital solutions like <strong>Oro-Card</strong>.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition-all shadow-lg transform hover:-translate-y-0.5">
                <Smartphone size={20} />
                Get App
              </button>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 py-3 px-6 rounded-lg font-medium">
                <Phone size={20} />
                <span>Call Center: <strong>895</strong></span>
              </div>
            </div>
          </div>

          {/* Quick Info */}
          <div className="hidden lg:block bg-white/10 backdrop-blur-md p-6 rounded-2xl border-l-4 border-red-600 w-80 shadow-2xl">
             <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
               <Tractor size={18} className="text-red-300" /> Key Focus
             </h3>
             <p className="text-sm text-gray-200 mb-4">
               Leading financier for coffee export and livestock development in the region.
             </p>
             <div className="bg-black/20 p-3 rounded-lg flex justify-between items-center text-sm">
                <span>USSD Code</span>
                <span className="font-mono font-bold text-red-300">*895#</span>
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
              placeholder="Search Oromia Bank services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 focus:ring-2 focus:ring-[#006837] outline-none transition-all"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-[#006837] text-white shadow-md"
                    : "bg-white dark:bg-zinc-800 text-gray-600 dark:text-gray-300 border border-gray-200 hover:border-[#006837] hover:text-[#006837]"
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
                    ? "border-red-500 ring-1 ring-red-500/20 shadow-red-50 dark:shadow-none" 
                    : "border-gray-200 dark:border-zinc-800 hover:border-[#006837]/50"
                  }`}
              >
                <div className={`mb-4 h-12 w-12 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110 
                  ${service.highlight ? "bg-red-600 text-white" : "bg-[#006837]/10 text-[#006837]"}`}>
                  <service.icon size={24} />
                </div>
                <div className="grow">
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{service.description}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-100 dark:border-zinc-800">
                  <Link href={service.link}>
                    <button className={`flex items-center text-sm font-bold transition-colors gap-2 
                      ${service.highlight ? "text-red-600 hover:text-red-700" : "text-[#006837] hover:text-[#004d29]"}`}>
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