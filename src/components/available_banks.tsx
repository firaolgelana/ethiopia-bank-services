import Image from "next/image";
import Link from "next/link";

// 1. Define the list of Ethiopian Banks
const BANKS = [
  { name: "Commercial Bank of Ethiopia", id: "cbe", color: "#6F2C91" },
  { name: "Awash Bank", id: "awash", color: "#F7941D" },
  { name: "Dashen Bank", id: "dashen", color: "#00539C" },
  { name: "Bank of Abyssinia", id: "abyssinia", color: "#FDC300" },
  { name: "Coop Bank of Oromia", id: "coop", color: "#00A550" },
  { name: "Hibret Bank", id: "hibret", color: "#000000" },
  { name: "Nib International Bank", id: "nib", color: "#9F1F63" },
  { name: "Zemen Bank", id: "zemen", color: "#CD2027" },
  { name: "Wegagen Bank", id: "wegagen", color: "#F37021" },
  { name: "Oromia Bank", id: "oromia", color: "#D2232A" },
  { name: "Bunna Bank", id: "bunna", color: "#6F3E18" },
  { name: "Abay Bank", id: "abay", color: "#009640" },
  { name: "Lion International Bank", id: "lion", color: "#1D70B7" },
  { name: "Enat Bank", id: "enat", color: "#F68D2E" },
  { name: "Addis International Bank", id: "addis", color: "#0055A5" },
  { name: "Global Bank Ethiopia", id: "global", color: "#00AEEF" },
  { name: "Ahadu Bank", id: "ahadu", color: "#F37421" },
  { name: "Amhara Bank", id: "amhara", color: "#00A651" },
  { name: "Goh Betoch Bank", id: "goh", color: "#F37021" },
  { name: "Tsehay Bank", id: "tsehay", color: "#FDB913" },
  { name: "Siinqee Bank", id: "siinqee", color: "#8DC63F" },
  { name: "Tsedey Bank", id: "tsedey", color: "#006838" },
  { name: "Gadaa Bank", id: "gadaa", color: "#000000" },
  { name: "Zamzam Bank", id: "zamzam", color: "#000000" },
  { name: "Berhan International Bank", id: "berhan", color: "#000000" },
  { name: "Development Bank of Ethiopia", id: "development", color: "#000000" },
  { name: "Hijra Bank", id: "hijra", color: "#000000" },
  { name: "Shabelle Bank", id: "shabelle", color: "#000000" },
  { name: "Rammis Bank", id: "rammis", color: "#000000" },
];


export default function AvailableBanks() {
  return (
    // Removed the outer <main> tag
    <section className="py-20 px-6 sm:px-12 bg-muted/30">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Available Banks
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Select a bank to view services and rates.
          </p>
        </div>

        {/* GRID LAYOUT */}
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
          {BANKS.map((bank) => (
            // FIX 1: KEY PROP GOES HERE
            <Link key={bank.id} href={`/banks/${bank.id}`} className="block h-full">
              <div
                className="group h-full relative flex flex-col items-center justify-center gap-4 rounded-xl border border-border bg-card-background p-6 text-card-foreground shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary/50 cursor-pointer"
              >
                {/* Logo Container */}
                <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-muted p-2 shadow-inner overflow-hidden">
                  
                  {/* Fallback Text (Visible if image fails, depending on CSS) */}
                  <span className="absolute text-xl font-bold text-muted-foreground/20">
                    {bank.name.substring(0, 2).toUpperCase()}
                  </span>
                  
                  <Image
                    src={`/banks/${bank.id}.png`}
                    alt={`${bank.name} logo`}
                    width={60}
                    height={60}
                    className="object-contain z-10 transition-transform duration-300 group-hover:scale-110"
                    // Optional: Add a placeholder or error handler in real production
                  />
                </div>

                {/* Bank Name */}
                <h3 className="text-center text-sm font-semibold sm:text-base">
                  {bank.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}