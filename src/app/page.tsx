import Image from "next/image";
import AvailableBanks from "../components/available_banks";
import PlatformServices from "../components/platform_services";
import ExchangeRates from "../components/exchange_rates";
import ComparisonHighlights from "../components/comparision_highlights";
import { ModeToggle } from "@/components/mode-toggle";
import Footer from "../components/footer";

export default function Home() {
  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex h-16 items-center justify-between bg-black/40 px-8 text-white backdrop-blur-md border-b border-white/10">
        <div className="font-bold text-xl tracking-wider">ETHIO-BANK</div>
        <div className="hidden md:flex gap-6 text-sm font-medium items-center">
          <a href="#" className="hover:text-primary transition-colors">Home</a>
          <a href="#" className="hover:text-primary transition-colors">Services</a>
          <a href="#" className="hover:text-primary transition-colors">Banks</a>
          <a href="#" className="hover:text-primary transition-colors">Contact</a>
          <ModeToggle />
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative h-screen w-full">
        {/* Background Image */}
        <Image
          src="/background.png"
          alt="Background"
          fill
          priority
          className="object-cover -z-10"
        />

        {/* Hero Content */}
        {/* 
           - pt-16: Accounts for the fixed navbar
           - text-white: Hardcoded white here because it's always over an image
        */}
        <div className="flex h-full flex-col items-center justify-center pt-16 text-center text-white px-4">
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
            Welcome
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-200 font-semibold">
            Ethiopia Banks Services
          </p>

          {/* Button using your global primary colors */}
          <button className="mt-6 rounded-md bg-primary px-6 py-3 font-medium text-primary-foreground hover:bg-primary/90 transition-colors">
            Get Started
          </button>
        </div>
      </section>

      {/* MIDDLE SECTION (Features) */}
      {/* 
         - bg-background: Uses your theme's main background color
         - text-foreground: Uses your theme's main text color
      */}
      {/* <section className="flex min-h-screen flex-col justify-center bg-background px-8 py-16 text-foreground">
        <h2 className="text-3xl font-bold mb-4">Features</h2>
        <p className="text-muted-foreground text-lg">
          This section scrolls normally and adapts to your theme colors.
        </p>
      </section> */}
      <PlatformServices />
      <AvailableBanks />
      <ExchangeRates />
      <ComparisonHighlights />

      <Footer />
    </>
  );
}