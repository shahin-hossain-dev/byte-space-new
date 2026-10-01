import Image, { getImageProps } from "next/image";
import { cn } from "@/lib/utils";

interface DecorativeShapeProps {
  src: string;
  width: number;
  height: number;
  /** Source renders are grey; `white` brightens them, `lime` tints them with the highlight token. */
  tone?: "white" | "lime";
  /** Positioning + width (height follows the image's aspect ratio). */
  className?: string;
  sizes?: string;
}

/** Purely decorative 3D shape — hidden from assistive tech and never interactive. */
export function DecorativeShape({
  src,
  width,
  height,
  tone = "white",
  className,
  sizes = "200px",
}: DecorativeShapeProps) {
  // The lime tint is a token-coloured layer clipped to the shape's alpha. Route the
  // mask through the image optimizer too, so it's served as AVIF/WebP, not the raw PNG.
  const maskUrl =
    tone === "lime" ? getImageProps({ src, alt: "", width, height }).props.src : null;

  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute isolate select-none", className)}
    >
      <Image
        src={src}
        alt=""
        width={width}
        height={height}
        sizes={sizes}
        className="h-auto w-full brightness-[1.3]"
      />
      {maskUrl && (
        <span
          className="absolute inset-0 bg-highlight mix-blend-multiply"
          style={{
            maskImage: `url("${maskUrl}")`,
            maskSize: "100% 100%",
            WebkitMaskImage: `url("${maskUrl}")`,
            WebkitMaskSize: "100% 100%",
          }}
        />
      )}
    </div>
  );
}
