import Link from "next/link";
import { 
  BarChart3, 
  MapPin, 
  Calculator, 
  Scale, 
  BellRing, 
  FileText, 
  Search, 
  HelpCircle,
  ArrowUpRight
} from "lucide-react";

const PLATFORM_FEATURES = [
  {
    title: "Compare Interest Rates",
    description: "Easily compare savings and fixed deposit interest rates across all 30+ Ethiopian banks to maximize your returns.",
    icon: Scale,
    href: "/services/compare", // Page for comparing rates
  },
  {
    title: "Live Forex Rates",
    description: "Get real-time daily exchange rates (USD, Euro, GBP) from official bank sources and the National Bank of Ethiopia.",
    icon: BarChart3,
    href: "/services/forex", // Page for exchange rates
  },
  {
    title: "ATM & Branch Locator",
    description: "Find the nearest ATM or bank branch in Addis Ababa and regional cities with our interactive map integration.",
    icon: MapPin,
    href: "/services/locations", // Page for map/locations
  },
  {
    title: "Loan Calculator",
    description: "Estimate your monthly mortgage, vehicle, or personal loan payments based on current bank interest rates.",
    icon: Calculator,
    href: "/services/calculator", // The page you created earlier
  },
  {
    title: "Service Eligibility",
    description: "Check requirements for diaspora accounts, loans, and credit cards before you visit the bank physically.",
    icon: FileText,
    href: "/services/eligibility",
  },
  {
    title: "Smart Search",
    description: "Filter banks by specific services (e.g., 'CBE Birr', 'Interest-Free', 'Western Union') to find exactly what you need.",
    icon: Search,
    href: "#home",
  },
  {
    title: "NBE Alerts",
    description: "Stay updated with the latest financial directives and policy changes from the National Bank of Ethiopia.",
    icon: BellRing,
    href: "/services/finder",
  },
  {
    title: "User Support",
    description: "Have questions? Our guide helps you navigate the Ethiopian banking system with ease.",
    icon: HelpCircle,
    href: "/services/support",
  },
];

export default function PlatformServices() {
  return (
    <section className="py-20 px-6 bg-muted/50 border-y border-border">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Why Use Our Platform?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            We simplify your financial life by aggregating data from all Ethiopian banks into one easy-to-use dashboard.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {PLATFORM_FEATURES.map((feature, index) => (
            <Link 
              key={index} 
              href={feature.href}
              className="group block h-full"
            >
              <div
                className="relative flex h-full flex-col items-start rounded-2xl bg-card-background p-6 shadow-sm ring-1 ring-border transition-all duration-300 hover:-translate-y-1 hover:ring-2 hover:ring-primary hover:shadow-lg"
              >
                {/* 
                   Optional: A small arrow icon in top right to indicate it's a link 
                   Visible only on hover 
                */}
                <div className="absolute top-4 right-4 opacity-0 transition-opacity group-hover:opacity-100 text-muted-foreground">
                  <ArrowUpRight size={18} />
                </div>

                {/* Icon Box */}
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-md transition-transform group-hover:scale-110">
                  <feature.icon size={24} />
                </div>

                {/* Text Content */}
                <h3 className="mb-3 text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}