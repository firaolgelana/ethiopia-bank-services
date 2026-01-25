"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Search, 
  Building2, 
  Globe, 
  Briefcase, 
  ArrowRight,
  Phone,
  Factory, // Symbolizing Industry/Development
  Wheat,   // Commercial Agriculture
  Zap,     // Energy
  Cog,     // Machinery/Lease
  FileText
} from "lucide-react";
import Navbar from "@/components/nav_bar";

// --- Data: Real DBE Services ---
const DBE_SERVICES = [
  // FLAGSHIP (Lease Financing)
  {
    id: "lease-financing",
    title: "SME Lease Financing",
    category: "Business",
    description: "Don't buy machinery, lease it. We provide capital goods (machinery/equipment) for SMEs with small initial deposits.",
    icon: Cog,
    action: "Check Eligibility",
    link: "/eligibility",
    highlight: true // Special Gold styling
  },

  // PROJECT FINANCING
  {
    id: "manufacturing-loan",
    title: "Manufacturing Project",
    category: "Business",
    description: "Long-term loans for establishing or expanding manufacturing industries (Textile, Leather, Pharmaceutics).",
    icon: Factory,
    action: "Requirements",
    link: "#"
  },
  {
    id: "commercial-agri",
    title: "Commercial Agriculture",
    category: "Business",
    description: "Financing for large-scale commercial farming and agro-processing industries to boost national export.",
    icon: Wheat,
    action: "Apply",
    link: "#"
  },
  {
    id: "energy-mining",
    title: "Energy & Mining",
    category: "Business",
    description: "Capital for renewable energy projects and mining extraction operations.",
    icon: Zap,
    action: "Learn More",
    link: "#"
  },

  // EXPORT
  {
    id: "export-credit",
    title: "Export Credit Guarantee",
    category: "Business",
    description: "Reducing risk for exporters. We guarantee payment for goods shipped to foreign buyers.",
    icon: Globe,
    action: "Details",
    link: "#"
  },

  // SPECIAL BONDS
  {
    id: "grand-dam-bond",
    title: "GERD Bond",
    category: "Personal",
    description: "Buy the Grand Renaissance Dam Bond. Invest in your country's future power generation.",
    icon: Building2,
    action: "Buy Bond",
    link: "#"
  }
];

// Note: DBE is primarily a policy bank, less retail focused.
const CATEGORIES = ["All", "Business", "Personal"];

export default function DbePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredServices = DBE_SERVICES.filter((service) => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "All" || service.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-gray-100">
      <Navbar/>
      {/* --- HERO SECTION (Slate Blue & Gold) --- */}
      <section className="relative w-full bg-linear-to-r from-[#2c3e50] to-[#1a252f] text-white py-20 px-6 overflow-hidden">
        {/* Pattern: Blueprints/Grid */}
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: 'linear-gradient(#f1c40f 1px, transparent 1px), linear-gradient(90deg, #f1c40f 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
        />
        
        <div className="relative mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="space-y-6 max-w-2xl">
            <div className="flex items-center gap-4">
               <div className="bg-white p-2 rounded-none h-20 w-20 flex items-center justify-center shadow-lg border-b-4 border-[#f1c40f]">
                 <Factory size={40} className="text-[#2c3e50]" />
               </div>
               <div>
                 <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Development Bank</h1>
                 <p className="text-[#f1c40f] font-bold tracking-wide uppercase text-sm mt-1">The Policy Bank</p>
               </div>
            </div>
            
            <p className="text-xl text-gray-300 max-w-xl leading-relaxed">
              We finance the nation's growth. Specialized in providing long-term loans for <strong>Manufacturing</strong>, <strong>Agriculture</strong>, and <strong>SMEs</strong> via Lease Financing.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="flex items-center gap-2 bg-[#f1c40f] hover:bg-[#d4ac0d] text-[#2c3e50] font-bold py-3 px-8 rounded shadow-lg transform hover:-translate-y-0.5">
                <FileText size={20} />
                Submit Proposal
              </button>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 py-3 px-6 rounded font-medium">
                <Phone size={20} />
                <span>Call Center: <strong>951</strong></span>
              </div>
            </div>
          </div>

          {/* Quick Info */}
          <div className="hidden lg:block bg-white/5 backdrop-blur-md p-6 rounded-sm border-l-4 border-[#f1c40f] w-80 shadow-2xl">
             <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-[#f1c40f]">
               <Cog size={18} /> Priority Sectors
             </h3>
             <ul className="space-y-2 text-sm text-gray-300">
                <li>• Manufacturing & Industry</li>
                <li>• Commercial Agriculture</li>
                <li>• Mining & Energy</li>
                <li>• SMEs (Lease Finance)</li>
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
              placeholder="Search DBE projects (e.g. 'Lease', 'Farm')..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-none border border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 focus:ring-2 focus:ring-[#2c3e50] outline-none transition-all"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-none text-sm font-medium transition-all border ${
                  activeCategory === cat
                    ? "bg-[#2c3e50] text-white border-[#2c3e50]"
                    : "bg-white dark:bg-zinc-800 text-gray-600 dark:text-gray-300 border-gray-200 hover:border-[#2c3e50] hover:text-[#2c3e50]"
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
                className={`group relative bg-white dark:bg-zinc-900 border p-6 hover:shadow-xl transition-all duration-300 flex flex-col h-full 
                  ${service.highlight 
                    ? "border-[#f1c40f] border-t-4 shadow-yellow-50 dark:shadow-none" 
                    : "border-gray-200 dark:border-zinc-800 hover:border-[#2c3e50]"
                  }`}
              >
                {service.highlight && (
                   <span className="absolute top-0 right-0 bg-[#f1c40f] text-[#2c3e50] text-[10px] font-bold px-2 py-1">
                     TOP PRIORITY
                   </span>
                )}
                
                <div className={`mb-4 h-12 w-12 flex items-center justify-center transition-colors 
                  ${service.highlight ? "bg-[#2c3e50] text-[#f1c40f]" : "bg-gray-100 text-gray-600 group-hover:bg-[#2c3e50] group-hover:text-white"}`}>
                  <service.icon size={24} />
                </div>
                <div className="grow">
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{service.description}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-100 dark:border-zinc-800">
                  <Link href={service.link}>
                    <button className={`flex items-center text-sm font-bold transition-colors gap-2 
                      ${service.highlight ? "text-[#b7950b] hover:text-[#2c3e50]" : "text-[#2c3e50] hover:text-[#f1c40f]"}`}>
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