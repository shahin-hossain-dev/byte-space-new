import type { Partner, PartnerMark } from "@/types";
import { cn } from "@/lib/utils";

/** 40×40 marks. Cut-outs are painted in the band's `secondary` colour. */
const MARKS: Record<PartnerMark, React.ReactNode> = {
  waves: (
    <>
      <circle cx="20" cy="20" r="20" className="fill-current" />
      <g className="fill-none stroke-secondary" strokeWidth="2.5">
        <path d="M0 10q10-5 20 0t20 0" />
        <path d="M0 17.5q10-5 20 0t20 0" />
      </g>
    </>
  ),
  sunburst: (
    <g className="stroke-current" strokeWidth="3.5" strokeLinecap="round">
      {Array.from({ length: 12 }, (_, i) => (
        <line key={i} x1="20" y1="3" x2="20" y2="12" transform={`rotate(${i * 30} 20 20)`} />
      ))}
    </g>
  ),
  bolt: (
    <>
      <circle cx="20" cy="20" r="20" className="fill-current" />
      <path d="M23 7 11 23h8l-2 10 12-16h-8l2-10Z" className="fill-secondary" />
    </>
  ),
  clover: (
    <>
      <circle cx="20" cy="20" r="20" className="fill-current" />
      <g className="fill-secondary">
        <circle cx="20" cy="12.5" r="5" />
        <circle cx="12.5" cy="20" r="5" />
        <circle cx="27.5" cy="20" r="5" />
        <circle cx="20" cy="27.5" r="5" />
      </g>
    </>
  ),
  rings: (
    <g className="fill-none stroke-current" strokeWidth="1.25">
      <circle cx="20" cy="20" r="19" />
      <circle cx="18" cy="18" r="15" />
      <circle cx="16" cy="16" r="11" />
      <circle cx="14.5" cy="14.5" r="7" />
      <circle cx="13" cy="13" r="3" className="fill-current" />
    </g>
  ),
};

export function PartnerLogo({ partner, className }: { partner: Partner; className?: string }) {
  return (
    <svg
      viewBox="0 0 168 40"
      role="img"
      aria-label={partner.name}
      className={cn("h-8 w-auto md:h-9 lg:h-10", className)}
    >
      {MARKS[partner.mark]}
      {/* textLength pins the wordmark to the design's width whatever font renders it. */}
      <text
        x="48"
        y="28.5"
        textLength="118"
        lengthAdjust="spacingAndGlyphs"
        fontWeight="700"
        className="fill-current font-heading text-[24px]"
      >
        {partner.name}
      </text>
    </svg>
  );
}
