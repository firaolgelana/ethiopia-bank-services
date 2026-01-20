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
  Rocket,
  MonitorPlay,
  ShoppingCart,
  Zap
} from "lucide-react";

// --- Data: Real Bank of Abyssinia Services ---
const ABYSSINIA_SERVICES = [
  // FLAGSHIP PRODUCT (Apollo)
  {
    id: "apollo",
    title: "Apollo Digital Bank",
    category: "Digital",
    description: "Open an account in minutes without visiting a branch. Transfer funds, pay bills, and access loans directly from the Apollo app.",
    icon: Rocket,
    action: "Get Apollo",
    link: "https://apollo.bankofabyssinia.com/",
    highlight: true // Special styling for their main product
  },
  
  // UNIQUE FEATURE (Virtual Banking)
  {
    id: "virtual-banking",
    title: "Virtual Banking (ITM)",
    category: "Digital",
    description: "Video chat with tellers at our Virtual Banking Centers. Deposit/withdraw cash and print cards 24/7 via interactive machines.",
    icon: MonitorPlay,
    action: "Find Locations",
    link: "/locations"
  },

  // E-COMMERCE
  {
    id: "ecommerce-gateway",
    title: "E-Commerce Gateway",
    category: "Business",
    description: "Accept Visa, Mastercard, and American Express payments on your website securely using BoA's CyberSource gateway.",
    icon: ShoppingCart,
    action: "Integrate",
    link: "#"
  },

  // AMANA (Interest Free)
  {
    id: "amana-savings",
    title: "Amana Savings",
    category: "Interest-Free",
    description: "Sharia-compliant Wadyah accounts. Secure your funds adhering strictly to Islamic banking principles.",
    icon: Moon,
    action: "View Rates",
    link: "#"
  },
  {
    id: "amana-financing",
    title: "Amana Investment",
    category: "Interest-Free",
    description: "Murabaha and Mudarabah financing schemes for businesses seeking Halal growth capital.",
    icon: Moon,
    action: "Requirements",
    link: "#"
  },

  // PERSONAL & DIASPORA
  {
    id: "mortgage",
    title: "Housing Loan",
    category: "Personal",
    description: "Competitive mortgage rates for resident and diaspora Ethiopians to buy or construct real estate.",
    icon: Home,
    action: "Calculate",
    link: "/calculator"
  },
  {
    id: "diaspora-account",
    title: "Diaspora FCY",
    category: "Diaspora",
    description: "Zero-minimum balance foreign currency accounts (USD, GBP, EUR) for the global Ethiopian community.",
    icon: Globe,
    action: "Open Online",
    link: "https://virtual.bankofabyssinia.com/" // BoA allows online opening
  },
  {
    id: "prepaid-card",
    title: "Abyssinia Prepaid",
    category: "Personal",
    description: "Reloadable Visa cards for safe online shopping and travel without linking to your main bank account.",
    icon: CreditCard,
    action: "Apply",
    link: "#"
  },
  {
    id: "mobile-banking",
    title: "Mobile Banking (*815#)",
    category: "Digital",
    description: "Access your account on any phone without internet. Check balance and transfer money instantly.",
    icon: Smartphone,
    action: "Dial *815#",
    link: "#"
  }
];

const CATEGORIES = ["All", "Digital", "Personal", "Interest-Free", "Business", "Diaspora"];

export default function AbyssiniaPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter Logic
  const filteredServices = ABYSSINIA_SERVICES.filter((service) => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "All" || service.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-gray-100">
      
      {/* --- HERO SECTION (BoA Maroon & Gold) --- */}
      <section className="relative w-full bg-linear-to-r from-[#8a1538] to-[#6d0f2b] text-white py-20 px-6">
        <div className="absolute inset-0 opacity-10" />
        <div className="relative mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-10">
          
          <div className="space-y-6 max-w-2xl">
            <div className="flex items-center gap-4">
               {/* Logo Placeholder */}
               <div className="bg-white p-2 rounded-full h-20 w-20 flex items-center justify-center shadow-xl border-4 border-[#fdb913]">
                 <span className="text-3xl font-extrabold text-[#8a1538]">BoA</span>
               </div>
               <div>
                 <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Bank of Abyssinia</h1>
                 <p className="text-[#fdb913] font-bold tracking-wide uppercase text-sm mt-1">The Choice for All</p>
               </div>
            </div>
            
            <p className="text-xl text-gray-100 max-w-xl leading-relaxed">
              Experience the future of banking with <strong>Apollo</strong> and Ethiopia's first virtual banking centers. 
              Modern, secure, and accessible everywhere.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="flex items-center gap-2 bg-[#fdb913] hover:bg-[#e6a600] text-[#8a1538] font-bold py-3 px-8 rounded-full transition-all shadow-lg hover:shadow-[#fdb913]/20 transform hover:-translate-y-0.5">
                <Rocket size={20} />
                Get Apollo App
              </button>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 py-3 px-6 rounded-full font-medium">
                <Phone size={20} />
                <span>Support: <strong>8388</strong></span>
              </div>
            </div>
          </div>

          {/* Quick Codes Card */}
          <div className="hidden lg:block bg-white/10 backdrop-blur-md p-8 rounded-2xl border-l-4 border-[#fdb913] w-80 shadow-2xl">
            <h3 className="text-lg font-bold mb-4 text-[#fdb913] uppercase tracking-wider">Quick Actions</h3>
            <ul className="space-y-4 font-mono text-lg">
              <li className="flex justify-between items-center border-b border-white/10 pb-2">
                <span>Mobile Banking</span> 
                <span className="text-[#fdb913] font-bold">*815#</span>
              </li>
              <li className="flex justify-between items-center border-b border-white/10 pb-2">
                <span>Apollo</span> 
                <span className="text-gray-200 text-sm">Download App</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Virtual Center</span> 
                <span className="text-gray-200 text-sm">24/7 Video</span>
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
              placeholder="Search BoA services (e.g. 'Apollo', 'Virtual', 'Loan')..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-full border border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 focus:ring-2 focus:ring-[#8a1538] outline-none transition-all"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-[#8a1538] text-white shadow-md border border-[#8a1538]"
                    : "bg-white dark:bg-zinc-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-zinc-700 hover:border-[#fdb913] hover:text-[#8a1538] dark:hover:text-[#fdb913]"
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
                    ? "border-[#fdb913] ring-1 ring-[#fdb913]/30 shadow-yellow-100 dark:shadow-none" 
                    : "border-gray-200 dark:border-zinc-800 hover:border-[#8a1538]/30"
                  }`}
              >
                {/* Special Badge for Apollo */}
                {service.highlight && (
                   <div className="absolute top-4 right-4 animate-pulse">
                     <span className="flex h-3 w-3 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#fdb913] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-[#fdb913]"></span>
                     </span>
                   </div>
                )}

                {/* Icon */}
                <div className={`mb-4 h-12 w-12 rounded-full flex items-center justify-center transition-transform group-hover:rotate-6 
                  ${service.highlight ? "bg-linear-to-br from-[#fdb913] to-orange-400 text-white" : "bg-[#8a1538]/10 text-[#8a1538]"}`}>
                  <service.icon size={24} />
                </div>

                {/* Content */}
                <div className="grow">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                      {service.title}
                    </h3>
                    {service.category === "Interest-Free" && (
                      <span className="text-[10px] uppercase font-bold bg-green-100 text-green-700 px-2 py-1 rounded-full border border-green-200">Amana</span>
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
                      ${service.highlight ? "text-[#e6a600] hover:text-[#8a1538]" : "text-[#8a1538] hover:text-[#fdb913]"}`}>
                      {service.action} <ArrowRight size={16} />
                    </button>
                  </Link>
                </div>
              </div>
            ))}

             {/* Empty State */}
             {filteredServices.length === 0 && (
                <div className="col-span-full py-16 text-center opacity-60">
                    <Zap size={48} className="mx-auto mb-4 text-gray-300" />
                    <p className="text-lg">No services found for "{searchTerm}"</p>
                </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}