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
  Sprout,
  Users,
  HandCoins,
  Scale
} from "lucide-react";

// --- Data: Real Rammis Bank Services ---
const RAMMIS_SERVICES = [
  // FLAGSHIP 
  {
    id: "ifb-core",
    title: "Ethical Banking",
    category: "Interest-Free",
    description: "Our core foundation. We offer comprehensive Sharia-compliant services designed to purify your wealth.",
    icon: Moon,
    action: "Learn More",
    link: "#",
    highlight: true // Special Green styling
  },

  // DIGITAL
  {
    id: "rammis-mobile",
    title: "Rammis Mobile",
    category: "Digital",
    description: "Modern banking for everyone. Secure transfers and bill payments via our app or *877#.",
    icon: Smartphone,
    action: "Download",
    link: "https://rammisbank.com.et/"
  },

  // BUSINESS / AGRO
  {
    id: "agro-financing",
    title: "Agro-Pastoral Loan",
    category: "Business",
    description: "Supporting the backbone of our community. Loans for farmers and cattle rearers.",
    icon: Sprout,
    action: "Requirements",
    link: "#"
  },
  {
    id: "sme-murabaha",
    title: "SME Murabaha",
    category: "Business",
    description: "Cost-plus financing for small businesses to purchase stock and equipment.",
    icon: HandCoins,
    action: "Apply",
    link: "#"
  },

  // SAVINGS
  {
    id: "wadiah-saving",
    title: "Wadiah Savings",
    category: "Personal",
    description: "Your trust, our responsibility. Safe keeping accounts where your principal is guaranteed.",
    icon: Scale,
    action: "Open Account",
    link: "#"
  },

  // DIASPORA
  {
    id: "diaspora-invest",
    title: "Diaspora Investment",
    category: "Diaspora",
    description: "Ethical investment opportunities for the Diaspora to participate in regional development.",
    icon: Globe,
    action: "Explore",
    link: "/eligibility"
  },
  
  // CARD
  {
    id: "rammis-card",
    title: "Rammis Card",
    category: "Personal",
    description: "Nationwide ATM access. Withdraw cash securely at any time.",
    icon: CreditCard,
    action: "Apply",
    link: "#"
  }
];

const CATEGORIES = ["All", "Interest-Free", "Business", "Digital", "Personal", "Diaspora"];

export default function RammisPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredServices = RAMMIS_SERVICES.filter((service) => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "All" || service.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-gray-100">
      
      {/* --- HERO SECTION (Green & Red) --- */}
      <section className="relative w-full bg-linear-to-br from-[#1b5e20] to-[#003300] text-white py-20 px-6 overflow-hidden">
        {/* Pattern: Geometric */}
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: 'radial-gradient(circle, #d32f2f 1px, transparent 1px)', backgroundSize: '20px 20px' }} 
        />
        
        <div className="relative mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="space-y-6 max-w-2xl">
            <div className="flex items-center gap-4">
               <div className="bg-white p-2 rounded-xl h-20 w-20 flex items-center justify-center shadow-lg border-4 border-[#d32f2f]">
                 <Users size={40} className="text-[#1b5e20]" />
               </div>
               <div>
                 <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Rammis Bank</h1>
                 <p className="text-[#d32f2f] font-bold tracking-wide uppercase text-sm mt-1">Trust & Growth</p>
               </div>
            </div>
            
            <p className="text-xl text-green-50 max-w-xl leading-relaxed">
              Building a brighter future through ethical banking. We specialize in <strong>Agro-Pastoral</strong> financing and comprehensive <strong>Interest-Free</strong> services.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="flex items-center gap-2 bg-[#d32f2f] hover:bg-[#b71c1c] text-white font-bold py-3 px-8 rounded-lg transition-all shadow-lg transform hover:-translate-y-0.5">
                <Smartphone size={20} />
                Get App
              </button>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 py-3 px-6 rounded-lg font-medium">
                <Phone size={20} />
                <span>Call Center: <strong>877</strong></span>
              </div>
            </div>
          </div>

          {/* Quick Info */}
          <div className="hidden lg:block bg-white/10 backdrop-blur-md p-6 rounded-2xl border-l-4 border-[#d32f2f] w-80 shadow-2xl">
             <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-[#d32f2f]">
               <Moon size={18} /> Ethical Focus
             </h3>
             <p className="text-sm text-gray-200 mb-4">
               Our operations are deeply rooted in Sharia principles to serve our community honestly.
             </p>
             <div className="bg-[#003300]/50 p-3 rounded-lg flex justify-between items-center text-sm border border-white/10">
                <span>USSD Code</span>
                <span className="font-mono font-bold text-white">*877#</span>
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
              placeholder="Search Rammis services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 focus:ring-2 focus:ring-[#1b5e20] outline-none transition-all"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-[#1b5e20] text-white shadow-md"
                    : "bg-white dark:bg-zinc-800 text-gray-600 dark:text-gray-300 border border-gray-200 hover:border-[#1b5e20] hover:text-[#1b5e20]"
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
                    ? "border-[#d32f2f] ring-1 ring-[#d32f2f]/20 shadow-red-50 dark:shadow-none" 
                    : "border-gray-200 dark:border-zinc-800 hover:border-[#1b5e20]/50"
                  }`}
              >
                {/* Highlight Badge */}
                {service.highlight && (
                   <span className="absolute top-4 right-4 bg-[#d32f2f] text-white text-[10px] font-bold px-2 py-1 rounded">
                     ETHICAL
                   </span>
                )}
                
                <div className={`mb-4 h-12 w-12 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110 
                  ${service.highlight ? "bg-[#1b5e20] text-white" : "bg-[#1b5e20]/10 text-[#1b5e20]"}`}>
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
                      ${service.highlight ? "text-[#d32f2f] hover:text-[#b71c1c]" : "text-[#1b5e20] hover:text-[#003300]"}`}>
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