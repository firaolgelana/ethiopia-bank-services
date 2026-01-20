"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Filter, Check, Building2, ExternalLink } from "lucide-react";

// --- DATA: Banks with their specific features ---
const BANKS_DATA = [
  { 
    id: "cbe", 
    name: "Commercial Bank of Ethiopia", 
    type: "Government",
    tags: ["CBE Birr", "Western Union", "Interest-Free", "Visa Card", "Diaspora Mortgage"],
    logo: "CBE"
  },
  { 
    id: "awash", 
    name: "Awash Bank", 
    type: "Private",
    tags: ["Awash Birr", "MasterCard", "Interest-Free", "Payoneer", "SME Loan"],
    logo: "AB"
  },
  { 
    id: "dashen", 
    name: "Dashen Bank", 
    type: "Private",
    tags: ["Amole", "American Express", "Visa Card", "Interest-Free", "An-Nissa"],
    logo: "DB"
  },
  { 
    id: "coop", 
    name: "Coop Bank of Oromia", 
    type: "Private",
    tags: ["CoopPay", "Interest-Free", "Agricultural Loan", "Western Union"],
    logo: "CO"
  },
  { 
    id: "abyssinia", 
    name: "Bank of Abyssinia", 
    type: "Private",
    tags: ["Apollo", "Visa Card", "Virtual Banking", "Interest-Free"],
    logo: "BOA"
  }
];

// --- FILTERS ---
const FILTERS = [
  { category: "Digital Wallets", options: ["CBE Birr", "Amole", "Awash Birr", "CoopPay", "Apollo"] },
  { category: "International Cards", options: ["Visa Card", "MasterCard", "American Express"] },
  { category: "Services", options: ["Interest-Free", "Western Union", "Payoneer", "Diaspora Mortgage"] },
];

export default function BankFinderPage() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // Toggle Tag Logic
  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  // Filter Logic
  const filteredBanks = BANKS_DATA.filter(bank => {
    if (selectedTags.length === 0) return true; // Show all if no filter
    // Bank must have ALL selected tags (AND logic)
    return selectedTags.every(tag => bank.tags.includes(tag));
  });

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-black pt-24 px-6 pb-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* LEFT SIDEBAR: FILTERS */}
        <div className="lg:col-span-1 space-y-8 bg-card-background">
          <div className="flex items-center gap-2 mb-4">
             <Filter className="text-primary" size={20} />
             <h2 className="text-xl font-bold">Smart Filters</h2>
          </div>
          
          {FILTERS.map((section) => (
            <div key={section.category}>
              <h3 className="font-semibold text-sm text-muted-foreground mb-3 uppercase tracking-wider">
                {section.category}
              </h3>
              <div className="space-y-2">
                {section.options.map((option) => (
                  <label key={option} className="flex items-center gap-3 cursor-pointer group">
                    <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors 
                      ${selectedTags.includes(option) ? "bg-primary border-primary text-white" : "bg-white dark:bg-zinc-900 border-gray-300"}`}>
                      {selectedTags.includes(option) && <Check size={14} />}
                    </div>
                    <input 
                      type="checkbox" 
                      className="hidden" 
                      onChange={() => toggleTag(option)}
                      checked={selectedTags.includes(option)}
                    />
                    <span className={`text-sm ${selectedTags.includes(option) ? "font-medium text-foreground" : "text-gray-600 dark:text-gray-400 group-hover:text-primary"}`}>
                      {option}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          ))}

          {selectedTags.length > 0 && (
            <button 
              onClick={() => setSelectedTags([])}
              className="text-sm text-red-500 hover:underline"
            >
              Clear all filters
            </button>
          )}
        </div>

        {/* RIGHT CONTENT: RESULTS */}
        <div className="lg:col-span-3">
          <div className="mb-6">
            <h1 className="text-3xl font-bold">Find a Bank</h1>
            <p className="text-muted-foreground">
              Found {filteredBanks.length} banks matching your criteria.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredBanks.map((bank) => (
              <div key={bank.id} className="bg-card-background border border-gray-200 dark:border-zinc-800 p-6 rounded-xl hover:shadow-lg transition-all group">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-lg bg-white flex items-center justify-center font-bold text-gray-500">
                      {bank.logo}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{bank.name}</h3>
                      <span className="text-xs bg-gray-100 dark:bg-zinc-800 px-2 py-0.5 rounded text-gray-500">
                        {bank.type}
                      </span>
                    </div>
                  </div>
                  <Link href={`/banks/${bank.id}`}>
                    <ExternalLink size={18} className="text-gray-400 group-hover:text-primary" />
                  </Link>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  {bank.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className={`text-xs px-2 py-1 rounded-md border 
                        ${selectedTags.includes(tag) 
                          ? "bg-primary/10 border-primary text-primary font-medium" 
                          : "bg-gray-50 dark:bg-zinc-800 border-transparent text-gray-600"
                        }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            {filteredBanks.length === 0 && (
              <div className="col-span-full py-12 text-center bg-muted/20 rounded-xl border border-dashed">
                <Building2 size={48} className="mx-auto text-gray-300 mb-4" />
                <h3 className="text-lg font-medium">No banks match these exact filters.</h3>
                <p className="text-muted-foreground">Try removing some tags to broaden your search.</p>
              </div>
            )}
          </div>
        </div>

      </div>
    </main>
  );
}