import type { Stat } from "@/types";
import { cn } from "@/lib/utils";

interface GrowthStatsProps {
  stats: readonly Stat[];
  className?: string;
}

export function GrowthStats({ stats, className }: GrowthStatsProps) {
  return (
    <dl className={cn("flex flex-wrap gap-x-10 gap-y-6 md:gap-x-14", className)}>
      {stats.map((stat) => (
        // Label follows the value visually, but is announced first.
        <div key={stat.label} className="flex flex-col">
          <dt className="order-2 mt-1 text-base text-secondary-foreground md:text-lg">
            {stat.label}
          </dt>
          <dd className="order-1 text-3xl leading-tight font-bold text-primary md:text-[40px]">
            {stat.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
