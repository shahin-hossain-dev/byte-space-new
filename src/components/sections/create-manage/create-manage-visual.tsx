import Image from "next/image";
import { CREATE_MANAGE_SECTION, IMAGES } from "@/constants";
import { DecorativeShape } from "@/components/shared/decorative-shape";
import { HappyStudentsCard } from "@/components/shared/happy-students-card";
import { cn } from "@/lib/utils";
import { EarningsCard } from "./earnings-card";

/**
 * Creator photo with earnings cards on the left and a Happy Students card in front.
 * Offsets are percentages of the 579×719 photo, measured from the design.
 */
export function CreateManageVisual({ className }: { className?: string }) {
  const { image, revenueCard, yearToDateCard } = CREATE_MANAGE_SECTION;

  return (
    <div className={cn("relative isolate aspect-579/719", className)}>
      {/* Sits behind the photo — her head overlaps its right half. */}
      <EarningsCard
        label={revenueCard.label}
        period={revenueCard.period}
        amount={revenueCard.amount}
        className="absolute top-[4%] left-0 w-[41.5%] sm:top-[6%] sm:left-[-1.5%]"
      >
        <div
          role="progressbar"
          aria-label={revenueCard.label}
          aria-valuenow={revenueCard.progress}
          aria-valuemin={0}
          aria-valuemax={100}
          className="mt-1.5 h-1 overflow-hidden rounded-full bg-primary-foreground sm:mt-2 sm:h-1.5 md:mt-3 md:h-2"
        >
          <div
            className="h-full rounded-full bg-highlight"
            style={{ width: `${revenueCard.progress}%` }}
          />
        </div>
      </EarningsCard>

      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes="(min-width: 1024px) 579px, 100vw"
        className="z-10 object-contain"
      />

      <EarningsCard
        label={yearToDateCard.label}
        period={yearToDateCard.period}
        amount={yearToDateCard.amount}
        className="absolute top-[31%] left-0 z-20 w-fit sm:top-[26.8%] sm:left-[-1.5%]"
      >
        <span className="mt-1.5 inline-flex rounded-full bg-highlight px-2 py-1 text-[0.5625rem] leading-none text-highlight-foreground sm:mt-2 sm:text-[0.625rem] md:mt-3">
          {yearToDateCard.change}
        </span>
      </EarningsCard>

      {/* Scaled down on phones so it clears the earnings cards and stays inside the gutter. */}
      <HappyStudentsCard className="absolute top-[64%] right-0 z-20 origin-top-right scale-80 sm:top-[57.3%] sm:right-auto sm:left-[47.5%] sm:origin-center sm:scale-100" />

      <DecorativeShape
        src={IMAGES.shapes.springSm3}
        width={216}
        height={216}
        tone="lime"
        sizes="210px"
        className="top-[15.9%] left-[51.3%] z-30 w-[36%]"
      />
    </div>
  );
}
