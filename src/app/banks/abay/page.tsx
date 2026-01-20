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
  Waves, // Symbolizing the "Abay" River
  Droplets,
  Anchor,
  Zap
} from "lucide-react";

// --- Data: Real Abay Bank Services ---
const ABAY_SERVICES = [
  // FLAGSHIP 
  {
    id: "abay-mobile",
    title: "Abay Mobile",
    category: "Digital",
    description: "Your bank in your hand. Transfer funds, pay bills, and manage beneficiaries via the app or *882#.",
    icon: Smartphone,
    action: "Download",
    link: "https://abaybank.com.et/",
    highlight: true // Special Blue styling
  },

  // INTEREST FREE (SADIQ)
  {
    id: "sadiq-savings",
    title: "Sadiq Savings",
    category: "Interest-Free",
    description: "Sharia-compliant Wadiah account. 'Sadiq' means truthful/friend, ensuring your funds are handled ethically.",
    icon: Moon,
    action: "Details",
    link: "#"
  },
  {
    id: "sadiq-financing",
    title: "Sadiq Financing",
    category: "Interest-Free",
    description: "Interest-free financing for vehicles, businesses, and personal assets based on Murabaha.",
    icon: Moon,
    action: "Check Rates",
    link: "#"
  },

  // LOANS
  {
    id: "vehicle-loan",
    title: "Automobile Loan",
    category: "Personal",
    description: "Drive your dream car. We finance brand new and used vehicles with extended repayment periods.",
    icon: Building2,
    action: "Calculate",
    link: "/calculator"
  },
  {
    id: "export-loan",
    title: "Export Financing",
    category: "Business",
    description: "Pre-shipment and revolving credit facilities for exporters to maximize foreign currency generation.",
    icon: Anchor,
    action: "Requirements",
    link: "#"
  },

  // DIASPORA
  {
    id: "diaspora-account",
    title: "Diaspora Accounts",
    category: "Diaspora",
    description: "Participate in national growth. Save in foreign currency (USD, GBP, EUR) with premium interest rates.",
    icon: Globe,
    action: "Open Account",
    link: "/eligibility"
  },
  
  // CARD
  {
    id: "abay-card",
    title: "Abay Card",
    category: "Personal",
    description: "Access your cash 24/7 at Abay ATMs and all Et-Switch member machines nationwide.",
    icon: CreditCard,
    action: "Apply",
    link: "#"
  }
];

const CATEGORIES = ["All", "Digital", "Interest-Free", "Business", "Personal", "Diaspora"];

export default function AbayPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredServices = ABAY_SERVICES.filter((service) => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "All" || service.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-gray-100">
      
      {/* --- HERO SECTION (River Blue) --- */}
      <section className="relative w-full bg-linear-to-br from-[#005696] to-[#003366] text-white py-20 px-6 overflow-hidden">
        {/* Pattern: Waves */}
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: 'radial-gradient(circle at center, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
        />
        <div className="absolute bottom-0 left-0 w-full h-24 bg-linear-to-t from-[#fecb00]/20 to-transparent"></div>

        <div className="relative mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="space-y-6 max-w-2xl">
            <div className="flex items-center gap-4">
               <div className="bg-white p-2 rounded-xl h-20 w-20 flex items-center justify-center shadow-lg border-b-4 border-[#fecb00]">
                 <Waves size={40} className="text-[#005696]" />
               </div>
               <div>
                 <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Abay Bank</h1>
                 <p className="text-[#fecb00] font-bold tracking-wide uppercase text-sm mt-1">The Trustworthy Bank</p>
               </div>
            </div>
            
            <p className="text-xl text-blue-100 max-w-xl leading-relaxed">
              Named after the great river, we flow with your financial needs. Experience seamless banking with <strong>Abay Mobile</strong> and our <strong>Sadiq</strong> Interest-Free services.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="flex items-center gap-2 bg-[#fecb00] hover:bg-[#e5b600] text-[#003366] font-bold py-3 px-8 rounded-lg transition-all shadow-lg transform hover:-translate-y-0.5">
                <Smartphone size={20} />
                Get App
              </button>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 py-3 px-6 rounded-lg font-medium">
                <Phone size={20} />
                <span>Call Center: <strong>882</strong></span>
              </div>
            </div>
          </div>

          {/* Quick Info */}
          <div className="hidden lg:block bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 w-80 shadow-2xl">
             <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-[#fecb00]">
               <Droplets size={18} /> Financial Flow
             </h3>
             <p className="text-sm text-gray-200 mb-4">
               We offer specialized loans for export, transport, and construction sectors.
             </p>
             <div className="bg-[#003366]/50 p-3 rounded-lg flex justify-between items-center text-sm border border-white/10">
                <span>USSD Code</span>
                <span className="font-mono font-bold text-[#fecb00]">*882#</span>
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
              placeholder="Search Abay services (e.g. 'Sadiq', 'Loan')..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 focus:ring-2 focus:ring-[#005696] outline-none transition-all"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-[#005696] text-white shadow-md"
                    : "bg-white dark:bg-zinc-800 text-gray-600 dark:text-gray-300 border border-gray-200 hover:border-[#005696] hover:text-[#005696]"
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
                    ? "border-[#005696] ring-1 ring-[#005696]/20 shadow-blue-50 dark:shadow-none" 
                    : "border-gray-200 dark:border-zinc-800 hover:border-[#005696]/50"
                  }`}
              >
                <div className={`mb-4 h-12 w-12 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110 
                  ${service.highlight ? "bg-[#005696] text-white" : "bg-[#005696]/10 text-[#005696]"}`}>
                  <service.icon size={24} />
                </div>
                <div className="grow">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{service.title}</h3>
                    {service.category === "Interest-Free" && (
                      <span className="text-[10px] uppercase font-bold bg-green-100 text-green-700 px-2 py-1 rounded-full border border-green-200">Sadiq</span>
                    )}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{service.description}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-100 dark:border-zinc-800">
                  <Link href={service.link}>
                    <button className={`flex items-center text-sm font-bold transition-colors gap-2 
                      ${service.highlight ? "text-[#005696] hover:text-[#003366]" : "text-gray-600 hover:text-[#005696]"}`}>
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