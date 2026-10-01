import { LEARNING_PROGRESS } from "@/constants";
import { cn } from "@/lib/utils";
import { FloatingCard } from "./floating-card";

export function ProgressCard({ className }: { className?: string }) {
  const { label, value } = LEARNING_PROGRESS;

  return (
    <FloatingCard className={cn("w-36 md:w-52 lg:w-58", className)}>
      <p className="text-xs md:text-sm">{label}</p>
      <p className="mt-1 text-3xl font-bold md:mt-2 md:text-5xl">{value}%</p>
      <div
        role="progressbar"
        aria-label={label}
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={100}
        className="mt-2 h-1.5 overflow-hidden rounded-full bg-muted md:mt-4 md:h-2"
      >
        <div className="h-full rounded-full bg-highlight" style={{ width: `${value}%` }} />
      </div>
    </FloatingCard>
  );
}
