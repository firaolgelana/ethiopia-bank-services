"use client";

import { useState, useEffect } from "react";
import { Menu, X, Landmark, ChevronRight } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle"; 
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Services", href: "#" },
    { name: "Banks", href: "#" },
    { name: "Compare Rates", href: "#" },
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

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`relative text-sm font-medium transition-colors group ${
                isScrolled ? "text-muted-foreground hover:text-primary" : "text-gray-200 hover:text-white"
              }`}
            >
              {link.name}
              {/* Animated Underline */}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* ACTIONS (Toggle + Button) */}
        <div className="hidden md:flex items-center gap-4">
          <ModeToggle />
          <button className="hidden lg:flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/20">
            Get App <ChevronRight size={16} />
          </button>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button
          className="md:hidden p-2 text-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} className={isScrolled ? "text-foreground" : "text-white"} />}
        </button>
      </div>

      {/* MOBILE MENU (Slide Down) */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-background border-b border-border p-6 shadow-xl md:hidden flex flex-col gap-4 animate-in slide-in-from-top-5">
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
          <button className="w-full mt-2 rounded-lg bg-primary py-3 text-center font-bold text-primary-foreground">
            Get App
          </button>
        </div>
      )}
    </nav>
  );
}