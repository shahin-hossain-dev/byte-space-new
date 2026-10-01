import { cn } from "@/lib/utils";

interface EarningsCardProps {
  label: string;
  period: string;
  amount: string;
  /** Progress bar, badge, etc. shown under the amount. */
  children?: React.ReactNode;
  className?: string;
}

/** Blue creator-earnings card that floats over the Create & Manage photo. */
export function EarningsCard({ label, period, amount, children, className }: EarningsCardProps) {
  return (
    <div
      className={cn(
        "rounded-lg bg-primary p-2.5 text-primary-foreground shadow-xl shadow-primary/20 sm:rounded-xl sm:p-3 md:rounded-2xl md:p-4",
        className,
      )}
    >
      <p className="text-xs leading-tight sm:text-sm md:text-base">{label}</p>
      <p className="text-[0.5625rem] text-primary-foreground/80 sm:text-[0.625rem]">{period}</p>
      <p className="mt-1 text-base leading-tight font-bold sm:mt-1.5 sm:text-lg md:mt-1 md:text-2xl">
        {amount}
      </p>
      {children}
    </div>
  );
}
