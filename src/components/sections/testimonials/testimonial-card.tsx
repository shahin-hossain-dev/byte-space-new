import Image from "next/image";
import type { Testimonial } from "@/types";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
}

export function TestimonialCard({ testimonial, className }: TestimonialCardProps) {
  const { name, role, quote, avatar } = testimonial;

  return (
    <figure
      className={cn(
        "flex flex-col rounded-2xl bg-card p-5 text-card-foreground shadow-xl shadow-foreground/3 md:rounded-3xl md:p-6",
        className,
      )}
    >
      <Image
        src={avatar.src}
        alt={avatar.alt}
        width={80}
        height={80}
        className="size-16 rounded-full object-cover md:size-20"
      />
      <figcaption className="mt-5 md:mt-6">
        <p className="font-heading text-lg font-semibold md:text-xl">{name}</p>
        <p className="text-base text-primary md:text-lg">{role}</p>
      </figcaption>
      <blockquote className="mt-5 text-base leading-[1.6] text-secondary-foreground md:mt-6 md:text-lg">
        <p>&quot;{quote}&quot;</p>
      </blockquote>
    </figure>
  );
}
