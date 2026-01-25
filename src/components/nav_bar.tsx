"use client";

import { useState, useEffect } from "react";
import { Menu, X, Landmark, Search, Command } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle"; 
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/#services" },
    { name: "Banks", href: "/#banks" },
    { name: "Exchange Rates", href: "/#exchange" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "h-16 bg-background/80 backdrop-blur-md border-b border-border shadow-sm"
          : "h-20 bg-transparent border-transparent"
      }`}
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6 lg:px-8">
        
        {/* LOGO */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground transition-transform group-hover:rotate-12">
            <Landmark size={20} />
          </div>
          <span className={`font-bold text-xl tracking-tight ${isScrolled ? "text-foreground" : "text-white"}`}>
            ETHIO-BANK
          </span>
        </div>

        {/* CENTER SECTION: LINKS (Hidden on small, visible on lg) */}
        {/* We moved links to center-left to make room for the search bar on the right */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`relative text-sm font-medium transition-colors group ${
                isScrolled ? "text-muted-foreground hover:text-primary" : "text-gray-200 hover:text-white"
              }`}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* RIGHT SECTION: SEARCH & ACTIONS */}
        <div className="hidden md:flex items-center gap-3">
          
          {/* MODERN SEARCH BAR */}
          <div className={`relative transition-all duration-300 ${isSearchFocused ? "w-70" : "w-50 xl:w-60"}`}>
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none">
              <Search size={16} className={isScrolled ? "text-muted-foreground" : "text-gray-300"} />
            </div>
            
            <input 
              type="text"
              placeholder="Search banks, rates..." 
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
              className={`h-9 w-full rounded-full border px-9 text-sm outline-none transition-all placeholder:text-muted-foreground/70
                ${isScrolled 
                  ? "bg-muted/50 border-border text-foreground focus:bg-background focus:ring-2 focus:ring-primary/20" 
                  : "bg-white/10 border-white/20 text-white placeholder:text-gray-300 focus:bg-white/20 focus:border-white/50"
                }
              `}
            />

            {/* Keyboard Shortcut Hint (CTRL+K) */}
            <div className={`absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none flex items-center gap-1 rounded border px-1.5 py-0.5 text-[10px] font-medium
               ${isScrolled 
                 ? "bg-background border-border text-muted-foreground" 
                 : "bg-black/20 border-white/10 text-gray-300"
               }
            `}>
              <Command size={10} />
              <span>K</span>
            </div>
          </div>

          <ModeToggle />
        </div>

        {/* MOBILE MENU TOGGLE */}
        <div className="flex items-center gap-4 md:hidden">
          {/* Mobile Search Icon (Since bar is hidden) */}
          <button className={isScrolled ? "text-foreground" : "text-white"}>
            <Search size={24} />
          </button>
          
          <button
            className="p-1"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X size={28} className={isScrolled ? "text-foreground" : "text-white"} />
            ) : (
              <Menu size={28} className={isScrolled ? "text-foreground" : "text-white"} />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-background border-b border-border p-6 shadow-xl md:hidden flex flex-col gap-4 animate-in slide-in-from-top-5">
           {/* Mobile Search Input */}
           <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input 
              className="h-10 w-full rounded-md border border-input bg-muted px-9 text-sm focus:ring-2 focus:ring-primary outline-none" 
              placeholder="Search..." 
            />
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-foreground hover:text-primary hover:pl-2 transition-all"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
            <span className="text-sm text-muted-foreground">Theme</span>
            <ModeToggle />
          </div>
        </div>
      )}
    </nav>
  );
}