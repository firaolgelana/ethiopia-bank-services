"use client";

import dynamic from "next/dynamic";
import { MapPin } from "lucide-react";
import Navbar from "@/components/nav_bar";

// Dynamically import the map (SS: false prevents server-side rendering crash)
const BankMap = dynamic(() => import("@/components/bank_map"), { 
  ssr: false,
  loading: () => (
    <div className="h-150 w-full flex items-center justify-center bg-muted animate-pulse rounded-xl">
       <p className="text-muted-foreground">Loading Map...</p>
    </div>
  )
});

export default function LocationsPage() {
  return (
    <main className="min-h-screen pt-24 px-6 pb-20 bg-background">
      <Navbar/>
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold mb-4 flex items-center justify-center gap-2">
            <MapPin className="text-primary" /> ATM & Branch Locator
          </h1>
          <p className="text-muted-foreground">
            Locate nearest ATMs and branches across Addis Ababa and regional cities.
            Use the "Use My Location" button for the best results.
          </p>
        </div>

        {/* The Map Component */}
        <div className="w-full">
           <BankMap />
        </div>

        {/* City Quick Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {["Addis Ababa", "Adama", "Bahir Dar", "Hawassa", "Mekelle", "Dire Dawa", "Gonder", "Jimma"].map((city) => (
                <a 
                  key={city}
                  href={`https://www.google.com/maps/search/Banks+in+${city}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 text-center rounded-lg bg-card-background border hover:border-primary hover:bg-primary/5 transition-colors"
                >
                    <span className="font-semibold text-sm">Banks in {city}</span>
                </a>
            ))}
        </div>

      </div>
    </main>
  );
}