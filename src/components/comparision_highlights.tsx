import { Trophy, Percent, Landmark } from "lucide-react";

export default function ComparisonHighlights() {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Market Highlights</h2>
            <p className="text-muted-foreground mt-2">Current best offers across all banks.</p>
          </div>
          <a href="#" className="text-primary hover:underline mt-4 md:mt-0">View full comparison &rarr;</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Savings */}
          <div className="rounded-2xl bg-linear-to-br from-green-50 to-emerald-100 p-6 dark:from-green-950/30 dark:to-emerald-900/10 border border-green-100 dark:border-green-900">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-green-500/10 rounded-lg text-green-600">
                <Percent size={24} />
              </div>
              <h3 className="font-semibold text-lg">Best Savings Rate</h3>
            </div>
            <div className="text-4xl font-bold text-green-700 dark:text-green-400">14.5%</div>
            <p className="text-sm text-muted-foreground mt-2">Offered by <span className="font-bold text-foreground">Amhara Bank</span></p>
          </div>

          {/* Card 2: Loan */}
          <div className="rounded-2xl bg-linear-to-br from-blue-50 to-indigo-100 p-6 dark:from-blue-950/30 dark:to-indigo-900/10 border border-blue-100 dark:border-blue-900">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-500/10 rounded-lg text-blue-600">
                <Landmark size={24} />
              </div>
              <h3 className="font-semibold text-lg">Lowest Mortgage</h3>
            </div>
            <div className="text-4xl font-bold text-blue-700 dark:text-blue-400">11.5%</div>
            <p className="text-sm text-muted-foreground mt-2">Offered by <span className="font-bold text-foreground">CBE</span></p>
          </div>

          {/* Card 3: Feature */}
          <div className="rounded-2xl bg-linear-to-br from-orange-50 to-amber-100 p-6 dark:from-orange-950/30 dark:to-amber-900/10 border border-orange-100 dark:border-orange-900">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-orange-500/10 rounded-lg text-orange-600">
                <Trophy size={24} />
              </div>
              <h3 className="font-semibold text-lg">Top Rated App</h3>
            </div>
            <div className="text-4xl font-bold text-orange-700 dark:text-orange-400">4.8/5</div>
            <p className="text-sm text-muted-foreground mt-2">Winner: <span className="font-bold text-foreground">Bank of Abyssinia</span></p>
          </div>

        </div>
      </div>
    </section>
  );
}