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
  Handshake, // Symbolizing "Hibret" (Union)
  Gem,
  Baby,
  Users
} from "lucide-react";
import Navbar from "@/components/nav_bar";

// --- Data: Real Hibret Bank Services ---
const HIBRET_SERVICES = [
  // FLAGSHIP DIGITAL PRODUCT
  {
    id: "hibret-mobile",
    title: "Hibret Mobile",
    category: "Digital",
    description: "Experience seamless banking. Biometric login, cardless withdrawal, and utility payments via the new Hibret App.",
    icon: Smartphone,
    action: "Download",
    link: "https://www.hibretbank.com.et/digital-banking/",
    highlight: true // Special Orange styling
  },

  // UNIQUE IDENTITY (Union/Community)
  {
    id: "equb-account",
    title: "Digital Equb",
    category: "Personal",
    description: "Modernizing traditional saving. Join a secure digital Equb circle managed by the bank to save with friends.",
    icon: Users,
    action: "Join Equb",
    link: "#"
  },

  // TIRAZ (Interest Free)
  {
    id: "tiraz-wadiah",
    title: "Tiraz Wadiah",
    category: "Interest-Free",
    description: "Pure Sharia-compliant safe keeping account. Your funds are managed with strict adherence to Islamic values.",
    icon: Moon,
    action: "Learn More",
    link: "#"
  },
  {
    id: "tiraz-labbaik",
    title: "Labbaik Hajj Saving",
    category: "Interest-Free",
    description: "A dedicated savings scheme to facilitate your spiritual journey for Hajj and Umrah.",
    icon: Moon,
    action: "Start Plan",
    link: "#"
  },

  // PERSONAL & DIASPORA
  {
    id: "hibir-diaspora",
    title: "Hibir Diaspora",
    category: "Diaspora",
    description: "Exclusive accounts for the Ethiopian Diaspora. Enjoy mortgage loans and vehicle financing in foreign currency.",
    icon: Globe,
    action: "Check Eligibility",
    link: "/eligibility"
  },
  {
    id: "etyop-women",
    title: "Etyop Women's Acc",
    category: "Personal",
    description: "Empowering women with higher interest rates, reduced loan processing fees, and business mentorship.",
    icon: Gem,
    action: "Apply",
    link: "#"
  },
  {
    id: "guh-youth",
    title: "Guh Youth Account",
    category: "Personal",
    description: "Building financial literacy for the next generation (Age 14-29). Includes special debit card designs.",
    icon: Baby,
    action: "Details",
    link: "#"
  },

  // BUSINESS
  {
    id: "export-credit",
    title: "Export Credit Guarantee",
    category: "Business",
    description: "Pre-shipment and post-shipment financing for exporters to boost Ethiopian international trade.",
    icon: Briefcase,
    action: "Requirements",
    link: "#"
  },
  {
    id: "card-banking",
    title: "Hibret Card",
    category: "Personal",
    description: "Contactless Visa cards for secure payments at POS terminals and ATMs nationwide.",
    icon: CreditCard,
    action: "Request Card",
    link: "#"
  }
];

const CATEGORIES = ["All", "Digital", "Interest-Free", "Personal", "Diaspora", "Business"];

export default function HibretPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter Logic
  const filteredServices = HIBRET_SERVICES.filter((service) => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "All" || service.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-gray-100">
      <Navbar/>
      {/* --- HERO SECTION (Hibret Blue & Orange) --- */}
      <section className="relative w-full bg-linear-to-br from-[#005587] to-[#003f63] text-white py-20 px-6 overflow-hidden">
        {/* CSS Pattern: Connected Nodes (Symbolizing Unity) */}
        <div className="absolute inset-0 opacity-10" 
             style={{ 
                backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', 
                backgroundSize: '30px 30px' 
             }} 
        />
        
        {/* Accent Circle */}
        <div className="absolute top-0 right-0 w-125 h-125 bg-[#f58220] opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>

        <div className="relative mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-10">
          
          <div className="space-y-6 max-w-2xl">
            <div className="flex items-center gap-4">
               {/* Logo Placeholder */}
               <div className="bg-white p-2 rounded-xl h-20 w-20 flex items-center justify-center shadow-lg border-b-4 border-[#f58220]">
                 <Handshake size={40} className="text-[#005587]" />
               </div>
               <div>
                 <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Hibret Bank</h1>
                 <p className="text-[#f58220] font-bold tracking-wide uppercase text-sm mt-1">United We Prosper</p>
               </div>
            </div>
            
            <p className="text-xl text-gray-100 max-w-xl leading-relaxed">
              Formerly United Bank. We combine decades of trust with modern technology to serve your personal and business needs.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="flex items-center gap-2 bg-[#f58220] hover:bg-[#d66e13] text-white font-bold py-3 px-8 rounded-lg transition-all shadow-lg hover:shadow-[#f58220]/20 transform hover:-translate-y-0.5">
                <Smartphone size={20} />
                Get App
              </button>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 py-3 px-6 rounded-lg font-medium">
                <Phone size={20} />
                <span>Call Center: <strong>995</strong></span>
              </div>
            </div>
          </div>

          {/* Quick Stats / Info Card */}
          <div className="hidden lg:block bg-white/10 backdrop-blur-md p-8 rounded-2xl border-l-4 border-[#f58220] w-80 shadow-2xl">
            <h3 className="text-lg font-bold mb-6 text-white flex items-center gap-2">
              <Globe size={18} className="text-[#f58220]" /> Quick Links
            </h3>
            <ul className="space-y-4 font-mono text-lg">
              <li className="flex justify-between items-center border-b border-white/10 pb-2">
                <span>USSD Banking</span> 
                <span className="text-[#f58220] font-bold">*995#</span>
              </li>
              <li className="flex justify-between items-center border-b border-white/10 pb-2">
                <span>Internet Bank</span> 
                <span className="text-gray-300 text-sm">Login</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Forex Rates</span> 
                <Link href="/forex" className="text-[#f58220] text-sm hover:underline">View Today</Link>
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
              placeholder="Search Hibret services (e.g. 'Tiraz', 'Diaspora')..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 focus:ring-2 focus:ring-[#005587] outline-none transition-all"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-[#005587] text-white shadow-md border border-[#005587]"
                    : "bg-white dark:bg-zinc-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-zinc-700 hover:border-[#f58220] hover:text-[#005587] dark:hover:text-[#f58220]"
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
                    ? "border-[#f58220] ring-1 ring-[#f58220]/20 shadow-orange-100 dark:shadow-none" 
                    : "border-gray-200 dark:border-zinc-800 hover:border-[#005587]/30"
                  }`}
              >
                {/* Highlight Badge */}
                {service.highlight && (
                   <span className="absolute top-0 right-0 bg-[#f58220] text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl shadow-sm">
                     POPULAR
                   </span>
                )}

                {/* Icon */}
                <div className={`mb-4 h-12 w-12 rounded-lg flex items-center justify-center transition-transform group-hover:scale-105 
                  ${service.highlight ? "bg-[#f58220] text-white" : "bg-[#005587]/10 text-[#005587]"}`}>
                  <service.icon size={24} />
                </div>

                {/* Content */}
                <div className="grow">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                      {service.title}
                    </h3>
                    {service.category === "Interest-Free" && (
                      <span className="text-[10px] uppercase font-bold bg-green-100 text-green-700 px-2 py-1 rounded-full border border-green-200">Tiraz</span>
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
                      ${service.highlight ? "text-[#f58220] hover:text-[#d66e13]" : "text-[#005587] hover:text-[#f58220]"}`}>
                      {service.action} <ArrowRight size={16} />
                    </button>
                  </Link>
                </div>
              </div>
            ))}

            {/* Empty State */}
            {filteredServices.length === 0 && (
                <div className="col-span-full py-16 text-center opacity-60">
                    <Handshake size={48} className="mx-auto mb-4 text-gray-300" />
                    <p className="text-lg">No services found for "{searchTerm}"</p>
                </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}