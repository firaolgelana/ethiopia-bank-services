import { 
  Smartphone, 
  Building2, 
  Globe, 
  Moon, 
  CreditCard, 
  Home, 
  Briefcase, 
  ArrowRight 
} from "lucide-react";

// Real services common in Ethiopian Banking
const SERVICES = [
  {
    name: "Mobile Banking",
    description: "Transfer money, pay bills (EthioTel, DSTV), and manage accounts via Telebirr or Bank Apps.",
    icon: Smartphone,
  },
  {
    name: "Interest-Free Banking",
    description: "Sharia-compliant banking services (e.g., CBE Noor, Awash Ikhlas) strictly avoiding interest.",
    icon: Moon, // Symbolizing Islamic Banking
  },
  {
    name: "Diaspora Accounts",
    description: "Special foreign currency accounts for Ethiopians living abroad to save in USD, Euro, or GBP.",
    icon: Globe,
  },
  {
    name: "Corporate & SME Loans",
    description: "Financing solutions for businesses, from small startups to large manufacturing industries.",
    icon: Building2,
  },
  {
    name: "International Trade",
    description: "Import/Export services, Letters of Credit (LC), and forex permit facilitation.",
    icon: Briefcase,
  },
  {
    name: "Mortgage & Housing",
    description: "Long-term loans for purchasing homes, condominiums, or completing construction.",
    icon: Home,
  },
  {
    name: "Card Banking",
    description: "ATM services, POS merchant payments, and Visa/Mastercard international travel cards.",
    icon: CreditCard,
  },
  {
    name: "Digital Lending",
    description: "Quick, short-term micro-loans accessible directly through mobile devices without collateral.",
    icon: Smartphone,
  },
];

export default function Services() {
  return (
    <section className="py-16 px-6 bg-background text-foreground">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight">Our Services</h2>
          <p className="mt-2 text-muted-foreground">
            Explore the financial solutions provided by Ethiopian financial institutions.
          </p>
        </div>

        {/* 
           GRID LAYOUT:
           - Mobile: 1 column
           - Tablet: 2 columns
           - Desktop: 4 columns (Requested)
        */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, index) => (
            <div
              key={index}
              className="group relative flex flex-col justify-between rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md hover:border-primary/50"
            >
              <div>
                {/* Icon Container */}
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <service.icon size={24} />
                </div>
                
                {/* Title & Desc */}
                <h3 className="mb-2 text-lg font-semibold text-card-foreground">
                  {service.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Action Link */}
              <div className="mt-6 flex items-center text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                <span>Learn more</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}