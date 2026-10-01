import Image from "next/image";
import { PlayIcon } from "lucide-react";
import { COURSE_DETAILS_COPY } from "@/constants";
import type { ImageAsset } from "@/types";
import { cn } from "@/lib/utils";

interface CoursePreviewProps {
  title: string;
  image: ImageAsset;
  className?: string;
}

/** Course trailer poster — the page's LCP image, so it loads with priority. */
export function CoursePreview({ title, image, className }: CoursePreviewProps) {
  return (
    <figure
      className={cn(
        "relative aspect-3/2 overflow-hidden rounded-2xl bg-muted shadow-2xl shadow-foreground/10 md:rounded-3xl",
        className,
      )}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority
        sizes="(min-width: 1280px) 724px, (min-width: 1024px) 55vw, 100vw"
        className="object-cover"
      />
      {/* Decorative until a trailer video is available. */}
      <span
        aria-hidden="true"
        className="absolute inset-0 m-auto flex size-16 items-center justify-center rounded-2xl bg-foreground/30 backdrop-blur-md md:size-20"
      >
        <span className="flex size-10 items-center justify-center rounded-full bg-background md:size-12">
          <PlayIcon className="ml-0.5 size-4 fill-foreground/70 text-foreground/70 md:size-5" />
        </span>
      </span>
      <figcaption className="sr-only">{COURSE_DETAILS_COPY.previewLabel(title)}</figcaption>
    </figure>
  );
}
