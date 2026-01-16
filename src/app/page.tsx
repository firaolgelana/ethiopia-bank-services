import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* NAVBAR */}
      {/* 
        - h-16: Matches 64px
        - bg-black/40 backdrop-blur-md: Matches the transparent glass effect
        - z-50: Ensures it stays on top 
      */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex h-16 items-center justify-between bg-black/40 px-8 text-white backdrop-blur-md">
        <div className="font-bold text-xl">MyApp</div>
        <div className="flex gap-4">
          <a href="#" className="hover:text-primary/80 transition-colors">Home</a>
          <a href="#" className="hover:text-primary/80 transition-colors">Features</a>
          <a href="#" className="hover:text-primary/80 transition-colors">Contact</a>
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
          <p className="mt-4 text-lg sm:text-xl text-gray-200">
            Build modern apps with Next.js
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
      <section className="flex min-h-screen flex-col justify-center bg-background px-8 py-16 text-foreground">
        <h2 className="text-3xl font-bold mb-4">Features</h2>
        <p className="text-muted-foreground text-lg">
          This section scrolls normally and adapts to your theme colors.
        </p>
      </section>

      {/* ANOTHER SECTION (More Content) */}
      {/* 
         - bg-muted: Uses your theme's secondary/muted background color 
           (usually light gray in light mode, dark gray in dark mode)
      */}
      <section className="flex min-h-screen flex-col justify-center bg-muted px-8 py-16 text-foreground">
        <h2 className="text-3xl font-bold mb-4">More Content</h2>
        <p className="text-muted-foreground text-lg">
          Add anything here. This utilizes the 'muted' variable for contrast.
        </p>
      </section>
    </>
  );
}