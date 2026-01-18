import Image from "next/image";
import AvailableBanks from "../components/available_banks";
import PlatformServices from "../components/platform_services";
import ExchangeRates from "../components/exchange_rates";
import ComparisonHighlights from "../components/comparision_highlights";
import Footer from "../components/footer";
import Navbar from "@/components/nav_bar";
import ExchangeTicker from "@/components/ExchangeTicker";
import Link from "next/link";
export default function Home() {
  return (
    <>
      {/* NAVBAR */}
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative h-screen w-full">
        {/* Background Image */}
        <Image
          src="/background.png"
          alt="Background"
          fill
          priority
          className="object-cover -z-20"
        />
        {/* Overlay: 40% opacity in light mode, 80% in dark mode */}
        <div className="absolute inset-0 bg-black/40 dark:bg-black/80 -z-10" />

        {/* Hero Content */}
        {/* 
           - pt-16: Accounts for the fixed navbar
           - text-white: Hardcoded white here because it's always over an image
        */}
        <div className="flex h-full flex-col items-center justify-center pt-16 text-center text-white px-4">
          {/* Badge/Tag - Adds a modern tech feel */}

          <h1 className="max-w-4xl text-5xl font-extrabold tracking-tight sm:text-6xl drop-shadow-md">
            All Ethiopian Banks. <br />
            <span className="text-primary-foreground bg-primary/20 px-2 rounded-lg">One Platform.</span>
          </h1>
          
          <p className="mt-6 max-w-2xl text-lg sm:text-xl text-gray-100 leading-relaxed shadow-sm">
            Stop visiting 30 different websites. Compare loans, exchange rates, and digital services from CBE, Awash, Dashen, and more in real-time.
          </p>

          {/* Button Group */}
          <div className="mt-8 flex gap-4">
          <Link href={"/services/compare"}>
            <button className="rounded-md bg-primary px-8 py-3.5 font-bold text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all shadow-lg">
              Compare Rates
            </button>
            </Link>
            <Link href={"/services/calculator"}>
            <button className="rounded-md bg-white/10 backdrop-blur-md border border-white/30 px-8 py-3.5 font-bold text-white hover:bg-white/20 transition-all">
              Find a Branch
            </button>
            </Link>
          </div>
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
      <ExchangeTicker />
      <ComparisonHighlights />

      <Footer />
    </>
  );
}