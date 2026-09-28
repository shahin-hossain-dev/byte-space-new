import Image from "next/image";
import type { ImageAsset } from "@/types";
import { cn } from "@/lib/utils";

interface AvatarGroupProps {
  avatars: readonly ImageAsset[];
  /** Label for the trailing bubble, e.g. "2K+" or "26+". */
  extra?: string;
  /** Largest rendered size in px — sets the image's intrinsic size for srcset. */
  size?: number;
  /** Responsive rendered size, e.g. "size-8 md:size-9". */
  itemClassName?: string;
  className?: string;
}

export function AvatarGroup({
  avatars,
  extra,
  size = 36,
  itemClassName = "size-9",
  className,
}: AvatarGroupProps) {
  return (
    <ul className={cn("flex items-center -space-x-2", className)}>
      {avatars.map((avatar) => (
        <li key={avatar.src} className={cn("shrink-0", itemClassName)}>
          <Image
            src={avatar.src}
            alt={avatar.alt}
            width={size}
            height={size}
            className="size-full rounded-full border-2 border-card object-cover"
          />
        </li>
      ))}
      {extra && (
        <li
          className={cn(
            "flex shrink-0 scale-110 items-center justify-center rounded-full border-2 border-card bg-highlight text-[0.625rem] font-bold text-highlight-foreground md:text-xs",
            itemClassName,
          )}
        >
          {extra}
        </li>
      )}
    </ul>
  );
}
