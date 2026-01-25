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
  QrCode,
  Zap,
  LayoutGrid
} from "lucide-react";
import Navbar from "@/components/nav_bar";

// --- Data: Real Awash Bank Services ---
const AWASH_SERVICES = [
  // SPECIAL FEATURE (The one you asked for)
  {
    id: "digital-slip",
    title: "Paperless Branch Service",
    category: "Digital",
    description: "Skip the paper slip! Use the Awash Mobile App to initiate Cash-In or Cash-Out transactions, then simply share the code with the teller.",
    icon: QrCode,
    action: "How it works",
    link: "#",
    highlight: true // Special styling
  },

  // DIGITAL BANKING
  {
    id: "awash-birr",
    title: "Awash Birr Pro",
    category: "Digital",
    description: "The upgraded mobile wallet. Pay merchants, buy fuel, transfer funds, and pay utility bills seamlessly via *901#.",
    icon: Zap,
    action: "Download App",
    link: "https://play.google.com/store/apps/details?id=com.awashbank.mobile.android"
  },
  {
    id: "internet-banking",
    title: "Internet Banking",
    category: "Digital",
    description: "Comprehensive corporate and personal banking from your desktop. Bulk transfers and payroll management.",
    icon: LayoutGrid,
    action: "Login",
    link: "https://ib.awashbank.com/"
  },

  // PERSONAL BANKING
  {
    id: "personal-loan",
    title: "Personal Loan",
    category: "Personal",
    description: "Flexible loans for salary earners. Quick processing times for medical, educational, or personal needs.",
    icon: Building2,
    action: "Calculate Loan",
    link: "/calculator"
  },
  {
    id: "mortgage",
    title: "Home & Construction",
    category: "Personal",
    description: "Competitive mortgage rates for purchasing finished homes or completing construction projects.",
    icon: Home,
    action: "Calculate Loan",
    link: "/calculator"
  },

  // AWASH IKHLAS (Interest Free)
  {
    id: "ikhlas-savings",
    title: "Awash Ikhlas Savings",
    category: "Interest-Free",
    description: "Sharia-compliant Wadiah saving accounts. Secure your wealth without interest (Riba).",
    icon: Moon,
    action: "View Details",
    link: "#"
  },
  {
    id: "ikhlas-investment",
    title: "Ikhlas Investment",
    category: "Interest-Free",
    description: "Mudarabah investment accounts where profits are shared between the bank and the customer.",
    icon: Moon,
    action: "Check Rates",
    link: "#"
  },

  // BUSINESS & DIASPORA
  {
    id: "sme-financing",
    title: "SME Solutions",
    category: "Business",
    description: "Tailored credit facilities and advisory services for Small and Medium Enterprises in Ethiopia.",
    icon: Briefcase,
    action: "Requirements",
    link: "#"
  },
  {
    id: "diaspora-banking",
    title: "Diaspora Accounts",
    category: "Diaspora",
    description: "Dedicated FCY accounts (USD, GBP, Euro) for Ethiopians abroad with attractive interest rates.",
    icon: Globe,
    action: "Check Eligibility",
    link: "/eligibility"
  },
  {
    id: "mastercard",
    title: "Awash MasterCard",
    category: "Business",
    description: "International prepaid and debit cards for travel and online payments worldwide.",
    icon: CreditCard,
    action: "Apply Now",
    link: "#"
  }
];

const CATEGORIES = ["All", "Digital", "Personal", "Interest-Free", "Business", "Diaspora"];

export default function AwashPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter Logic
  const filteredServices = AWASH_SERVICES.filter((service) => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "All" || service.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-gray-100">
      <Navbar/>
      {/* --- HERO SECTION (Awash Blue & Orange) --- */}
      <section className="relative w-full bg-linear-to-r from-[#003da5] to-[#0056b3] text-white py-20 px-6">
        <div className="absolute inset-0 opacity-10" /> 
        <div className="relative mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-10">
          
          <div className="space-y-6 max-w-2xl">
            <div className="flex items-center gap-4">
               {/* Placeholder for Logo */}
               <div className="bg-white p-2 rounded-xl h-20 w-20 flex items-center justify-center shadow-lg">
                 <span className="text-2xl font-bold text-[#003da5]">AB</span>
               </div>
               <div>
                 <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Awash Bank</h1>
                 <p className="text-[#f37021] font-bold tracking-wide uppercase text-sm mt-1">Nurturing Like a River</p>
               </div>
            </div>
            
            <p className="text-xl text-blue-100 max-w-xl">
              Leading the private banking sector with innovative digital solutions. Experience banking without the paperwork.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <button className="flex items-center gap-2 bg-[#f37021] hover:bg-[#d65f1a] text-white font-bold py-3 px-6 rounded-lg transition-all shadow-lg hover:shadow-orange-500/20">
                <Smartphone size={20} />
                Get Awash App
              </button>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 py-3 px-6 rounded-lg">
                <Phone size={20} />
                <span>Support: <strong>8980</strong></span>
              </div>
            </div>
          </div>

          {/* Quick Codes Card */}
          <div className="hidden lg:block bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/20 w-80 shadow-2xl">
            <h3 className="text-lg font-semibold mb-4 border-b border-white/20 pb-2">Awash Fast Codes</h3>
            <ul className="space-y-3 font-mono text-lg">
              <li className="flex justify-between"><span>Mobile/Wallet</span> <span className="text-[#f37021] font-bold">*901#</span></li>
              <li className="flex justify-between"><span>Pay Bills</span> <span className="text-blue-200">App</span></li>
              <li className="flex justify-between"><span>Branch Code</span> <span className="text-blue-200">Scan QR</span></li>
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
              placeholder="Search Awash services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 focus:ring-2 focus:ring-[#003da5] outline-none transition-all"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-[#003da5] text-white shadow-md"
                    : "bg-white dark:bg-zinc-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-700"
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
                    ? "border-[#f37021] ring-1 ring-[#f37021]/20 shadow-orange-100 dark:shadow-none" 
                    : "border-gray-200 dark:border-zinc-800 hover:border-[#003da5]/30"
                  }`}
              >
                {/* Special Badge for the Paperless Feature */}
                {service.highlight && (
                   <span className="absolute -top-3 -right-3 bg-[#f37021] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md animate-pulse">
                     NEW FEATURE
                   </span>
                )}

                {/* Icon */}
                <div className={`mb-4 h-12 w-12 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110 
                  ${service.highlight ? "bg-[#f37021]/10 text-[#f37021]" : "bg-[#003da5]/10 text-[#003da5]"}`}>
                  <service.icon size={24} />
                </div>

                {/* Content */}
                <div className="grow">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    {service.category === "Interest-Free" && (
                      <span className="text-[10px] uppercase font-bold bg-green-100 text-green-700 px-2 py-1 rounded-full">Ikhlas</span>
                    )}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Footer */}
                <div className="mt-6 pt-4 border-t border-gray-100 dark:border-zinc-800">
                  <Link href={service.link}>
                    <button className={`flex items-center text-sm font-semibold transition-colors gap-2 
                      ${service.highlight ? "text-[#f37021] hover:text-[#d65f1a]" : "text-[#003da5] hover:text-[#f37021]"}`}>
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