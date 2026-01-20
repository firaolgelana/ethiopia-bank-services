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
  Hexagon, // Symbolizing "Nib" (Bee/Honeycomb)
  ShieldCheck,
  Truck,
  Layers
} from "lucide-react";

// --- Data: Real Nib Bank Services ---
const NIB_SERVICES = [
  // FLAGSHIP DIGITAL PRODUCT
  {
    id: "nib-mobile",
    title: "Nib Mobile App",
    category: "Digital",
    description: "Your bank in your pocket. Transfer funds, pay school fees, and manage your savings securely via the app or *855#.",
    icon: Smartphone,
    action: "Download",
    link: "https://www.nibbanksc.com/electronic-banking/",
    highlight: true // Special Yellow styling
  },

  // INTEREST FREE (HUDA)
  {
    id: "huda-wadiah",
    title: "Huda Wadiah Saving",
    category: "Interest-Free",
    description: "Sharia-compliant deposit account. 'Huda' ensures your funds are kept pure and free from any interest-based activities.",
    icon: Moon,
    action: "Learn More",
    link: "#"
  },
  {
    id: "huda-investment",
    title: "Huda Investment",
    category: "Interest-Free",
    description: "Profit-sharing investment accounts (Mudarabah) designed for ethical growth of your capital.",
    icon: Moon,
    action: "View Rates",
    link: "#"
  },

  // CARDS
  {
    id: "mastercard",
    title: "Nib MasterCard",
    category: "Personal",
    description: "As a principal member of MasterCard, Nib offers Gold and Standard cards for international travel and online payments.",
    icon: CreditCard,
    action: "Apply Now",
    link: "#"
  },

  // LOANS
  {
    id: "transport-loan",
    title: "Transport / Vehicle Loan",
    category: "Business",
    description: "Specialized financing for commercial vehicles, trucks, and public transport operators.",
    icon: Truck,
    action: "Calculate",
    link: "/calculator"
  },
  {
    id: "mortgage",
    title: "Home Construction",
    category: "Personal",
    description: "Long-term financing to help you build or finish your residential home.",
    icon: Home,
    action: "Calculate",
    link: "/calculator"
  },

  // DIASPORA
  {
    id: "diaspora-account",
    title: "Diaspora Banking",
    category: "Diaspora",
    description: "Foreign currency accounts (USD, GBP, EUR) for Ethiopians abroad with attractive interest packages.",
    icon: Globe,
    action: "Check Eligibility",
    link: "/eligibility"
  },
  
  // BUSINESS
  {
    id: "overdraft",
    title: "Overdraft Facility",
    category: "Business",
    description: "Flexible working capital to manage your business cash flow gaps effectively.",
    icon: Layers,
    action: "Requirements",
    link: "#"
  },
  {
    id: "insurance-link",
    title: "Bancassurance",
    category: "Business",
    description: "One-stop shop for banking and insurance services through Nib Insurance Company.",
    icon: ShieldCheck,
    action: "Get Quote",
    link: "#"
  }
];

const CATEGORIES = ["All", "Digital", "Interest-Free", "Personal", "Diaspora", "Business"];

export default function NibPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter Logic
  const filteredServices = NIB_SERVICES.filter((service) => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "All" || service.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-gray-100">
      
      {/* --- HERO SECTION (Nib Black & Yellow) --- */}
      <section className="relative w-full bg-[#1a1a1a] text-white py-20 px-6 overflow-hidden">
        
        {/* CSS Pattern: Honeycomb/Hexagons (Symbolizing "Nib"/Bee) */}
        <div className="absolute inset-0 opacity-10" 
             style={{ 
                backgroundImage: 'radial-gradient(#fecb00 2px, transparent 2px)', 
                backgroundSize: '30px 30px' 
             }} 
        />
        {/* Glow Effect */}
        <div className="absolute bottom-0 right-0 w-100 h-100 bg-[#fecb00] opacity-10 rounded-full blur-3xl translate-y-1/2"></div>

        <div className="relative mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-10">
          
          <div className="space-y-6 max-w-2xl">
            <div className="flex items-center gap-4">
               {/* Logo Placeholder */}
               <div className="bg-[#fecb00] p-2 rounded-xl h-20 w-20 flex items-center justify-center shadow-lg shadow-yellow-500/20">
                 <Hexagon size={40} className="text-black fill-black/10" strokeWidth={2.5} />
               </div>
               <div>
                 <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Nib Int. Bank</h1>
                 <p className="text-[#fecb00] font-bold tracking-wide uppercase text-sm mt-1">The Bank that Gives You More</p>
               </div>
            </div>
            
            <p className="text-xl text-gray-300 max-w-xl leading-relaxed">
              Resilient, reliable, and hardworking like a bee. Experience modern banking with our Huda Interest-Free services and digital solutions.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              {/* Primary Button: Black text on Yellow background for accessibility */}
              <button className="flex items-center gap-2 bg-[#fecb00] hover:bg-[#e5b600] text-black font-bold py-3 px-8 rounded-lg transition-all shadow-lg hover:shadow-[#fecb00]/30 transform hover:-translate-y-0.5">
                <Smartphone size={20} />
                Mobile Banking
              </button>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 py-3 px-6 rounded-lg font-medium">
                <Phone size={20} />
                <span>Call Center: <strong>6226</strong></span>
              </div>
            </div>
          </div>

          {/* Quick Codes Card */}
          <div className="hidden lg:block bg-[#2a2a2a] p-8 rounded-tr-[3rem] rounded-bl-[3rem] border-r-4 border-[#fecb00] w-80 shadow-2xl">
            <h3 className="text-lg font-bold mb-6 text-[#fecb00] flex items-center gap-2">
              <Hexagon size={16} className="fill-[#fecb00]" /> Quick Dial
            </h3>
            <ul className="space-y-4 font-mono text-lg">
              <li className="flex justify-between items-center border-b border-gray-700 pb-2">
                <span>USSD</span> 
                <span className="bg-[#fecb00] text-black px-2 py-0.5 rounded font-bold text-base">*855#</span>
              </li>
              <li className="flex justify-between items-center border-b border-gray-700 pb-2">
                <span>SMS Alert</span> 
                <span className="text-gray-400 text-sm">Active</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Forex</span> 
                <Link href="/forex" className="text-[#fecb00] text-sm hover:underline">View Rates</Link>
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
              placeholder="Search NIB services (e.g. 'Huda', 'Card')..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 focus:ring-2 focus:ring-[#fecb00] outline-none transition-all"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-[#1a1a1a] text-[#fecb00] shadow-md border border-[#1a1a1a]"
                    : "bg-white dark:bg-zinc-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-zinc-700 hover:border-[#fecb00] hover:text-black dark:hover:text-[#fecb00]"
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
                    ? "border-[#fecb00] ring-1 ring-[#fecb00]/30 shadow-yellow-100 dark:shadow-none" 
                    : "border-gray-200 dark:border-zinc-800 hover:border-[#fecb00]/50"
                  }`}
              >
                {/* Highlight Badge */}
                {service.highlight && (
                   <span className="absolute top-4 right-4 bg-[#fecb00] text-black text-[10px] font-bold px-2 py-1 rounded">
                     POPULAR
                   </span>
                )}

                {/* Icon */}
                <div className={`mb-4 h-12 w-12 rounded-lg flex items-center justify-center transition-transform group-hover:scale-105 
                  ${service.highlight ? "bg-[#fecb00] text-black" : "bg-black/5 dark:bg-white/10 text-black dark:text-[#fecb00]"}`}>
                  <service.icon size={24} />
                </div>

                {/* Content */}
                <div className="grow">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                      {service.title}
                    </h3>
                    {service.category === "Interest-Free" && (
                      <span className="text-[10px] uppercase font-bold bg-green-100 text-green-700 px-2 py-1 rounded-full border border-green-200">Huda</span>
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
                      ${service.highlight ? "text-black hover:text-gray-700" : "text-[#dcb000] hover:text-black dark:hover:text-white"}`}>
                      {service.action} <ArrowRight size={16} />
                    </button>
                  </Link>
                </div>
              </div>
            ))}

            {/* Empty State */}
            {filteredServices.length === 0 && (
                <div className="col-span-full py-16 text-center opacity-60">
                    <Hexagon size={48} className="mx-auto mb-4 text-gray-300" />
                    <p className="text-lg">No services found for "{searchTerm}"</p>
                </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}