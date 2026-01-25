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
  Sprout, 
  Wallet,
  Leaf,
  Zap,
  Wheat
} from "lucide-react";
import Navbar from "@/components/nav_bar";

// --- Data: Real Coopbank Services ---
const COOP_SERVICES = [
  // FLAGSHIP DIGITAL PRODUCT
  {
    id: "cooppay",
    title: "CoopPay (E-Birr)",
    category: "Digital",
    description: "The all-in-one mobile wallet. Transfer money, pay merchants, buy airtime, and pay utilities instantly via *896#.",
    icon: Wallet,
    action: "Download App",
    link: "https://coopbankoromia.com.et/cooppay/",
    highlight: true // Special styling
  },

  // UNIQUE INNOVATION (Digital Lending)
  {
    id: "michu",
    title: "Michu Digital Loan",
    category: "Digital",
    description: "Ethiopia's first uncollateralized digital lending platform for SMEs and individuals. Get approved in minutes.",
    icon: Zap,
    action: "Apply on Michu",
    link: "https://michu.coopbankoromia.com.et/"
  },

  // AGRICULTURAL (Their Core Strength)
  {
    id: "agri-financing",
    title: "Agricultural Financing",
    category: "Business",
    description: "Specialized loans for farmers, cooperatives, and agro-processors. Includes machinery and input financing.",
    icon: Wheat,
    action: "Learn More",
    link: "#"
  },

  // COOP TAQWA (Interest Free)
  {
    id: "taqwa-wadiah",
    title: "Coop Taqwa Savings",
    category: "Interest-Free",
    description: "Sharia-compliant Wadiah account. Secure your money with total peace of mind and zero interest.",
    icon: Moon,
    action: "View Details",
    link: "#"
  },
  {
    id: "taqwa-financing",
    title: "Murabaha Financing",
    category: "Interest-Free",
    description: "Cost-plus financing for vehicles, machinery, and housing under strict Sharia principles.",
    icon: Moon,
    action: "Check Rates",
    link: "#"
  },

  // PERSONAL & DIASPORA
  {
    id: "diaspora-account",
    title: "Diaspora Banking",
    category: "Diaspora",
    description: "Dedicated foreign currency accounts for Ethiopians abroad. Support your family or invest back home.",
    icon: Globe,
    action: "Open Account",
    link: "https://coopbankoromia.com.et/diaspora-banking/"
  },
  {
    id: "coop-card",
    title: "Coop Card (Visa)",
    category: "Personal",
    description: "Domestic and International Visa cards for secure ATM withdrawals and POS payments.",
    icon: CreditCard,
    action: "Apply",
    link: "#"
  },
  {
    id: "youth-account",
    title: "Muday Youth Account",
    category: "Personal",
    description: "A savings account designed to cultivate financial discipline in youth with attractive interest rates.",
    icon: Sprout,
    action: "Start Saving",
    link: "#"
  }
];

const CATEGORIES = ["All", "Digital", "Interest-Free", "Business", "Diaspora", "Personal"];

export default function CoopPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter Logic
  const filteredServices = COOP_SERVICES.filter((service) => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "All" || service.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-gray-100">
      <Navbar/>
      {/* --- HERO SECTION (Coop Green) --- */}
      <section className="relative w-full bg-linear-to-r from-[#009640] to-[#007a33] text-white py-20 px-6">
        <div className="absolute inset-0 opacity-10" />
        <div className="relative mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-10">
          
          <div className="space-y-6 max-w-2xl">
            <div className="flex items-center gap-4">
               {/* Logo Placeholder */}
               <div className="bg-white p-2 rounded-xl h-20 w-20 flex items-center justify-center shadow-lg">
                 <Leaf size={40} className="text-[#009640]" />
               </div>
               <div>
                 <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Coopbank</h1>
                 <p className="text-[#d9e021] font-bold tracking-wide uppercase text-sm mt-1">We Care for Your Growth</p>
               </div>
            </div>
            
            <p className="text-xl text-green-50 max-w-xl leading-relaxed">
              The bank of the people. Rooted in community, leading in digital innovation with <strong>CoopPay</strong> and <strong>Michu</strong>.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="flex items-center gap-2 bg-[#d9e021] hover:bg-[#c5cc1f] text-[#00682c] font-bold py-3 px-8 rounded-lg transition-all shadow-lg hover:shadow-[#d9e021]/20 transform hover:-translate-y-0.5">
                <Wallet size={20} />
                Get CoopPay
              </button>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 py-3 px-6 rounded-lg font-medium">
                <Phone size={20} />
                <span>Support: <strong>9596</strong></span>
              </div>
            </div>
          </div>

          {/* Quick Codes Card */}
          <div className="hidden lg:block bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 w-80 shadow-2xl">
            <h3 className="text-lg font-bold mb-6 text-[#d9e021] flex items-center gap-2">
              <Smartphone size={18} /> USSD Services
            </h3>
            <ul className="space-y-4 font-mono text-lg">
              <li className="flex justify-between items-center border-b border-white/10 pb-2">
                <span>CoopPay E-Birr</span> 
                <span className="bg-[#d9e021] text-[#00682c] px-2 py-0.5 rounded font-bold text-base">*896#</span>
              </li>
              <li className="flex justify-between items-center border-b border-white/10 pb-2">
                <span>Mobile Banking</span> 
                <span className="text-gray-200 text-base">*896#</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Michu Loan</span> 
                <span className="text-gray-200 text-sm">Via App</span>
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
              placeholder="Search services (e.g. 'Michu', 'Taqwa', 'Loan')..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 focus:ring-2 focus:ring-[#009640] outline-none transition-all"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-[#009640] text-white shadow-md border border-[#009640]"
                    : "bg-white dark:bg-zinc-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-zinc-700 hover:border-[#8DC63F] hover:text-[#009640] dark:hover:text-[#8DC63F]"
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
                    ? "border-[#009640] ring-1 ring-[#009640]/20 shadow-green-100 dark:shadow-none" 
                    : "border-gray-200 dark:border-zinc-800 hover:border-[#009640]/30"
                  }`}
              >
                {/* Highlight Badge */}
                {service.highlight && (
                   <span className="absolute top-4 right-4 bg-[#009640] text-white text-[10px] font-bold px-2 py-1 rounded">
                     RECOMMENDED
                   </span>
                )}

                {/* Icon */}
                <div className={`mb-4 h-12 w-12 rounded-lg flex items-center justify-center transition-transform group-hover:scale-105 
                  ${service.highlight ? "bg-[#009640] text-white" : "bg-[#009640]/10 text-[#009640]"}`}>
                  <service.icon size={24} />
                </div>

                {/* Content */}
                <div className="grow">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                      {service.title}
                    </h3>
                    {service.category === "Interest-Free" && (
                      <span className="text-[10px] uppercase font-bold bg-green-100 text-green-700 px-2 py-1 rounded-full border border-green-200">Taqwa</span>
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
                      ${service.highlight ? "text-[#009640] hover:text-[#007a33]" : "text-[#009640] hover:text-[#8DC63F]"}`}>
                      {service.action} <ArrowRight size={16} />
                    </button>
                  </Link>
                </div>
              </div>
            ))}

            {/* Empty State */}
            {filteredServices.length === 0 && (
                <div className="col-span-full py-16 text-center opacity-60">
                    <Leaf size={48} className="mx-auto mb-4 text-gray-300" />
                    <p className="text-lg">No services found for "{searchTerm}"</p>
                </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}