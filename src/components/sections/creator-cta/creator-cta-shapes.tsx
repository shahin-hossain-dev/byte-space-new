import { IMAGES } from "@/constants";
import { DecorativeShape } from "@/components/shared/decorative-shape";

/** Floating 3D shapes around the creator CTA — positions measured from the 1440px design. */
export function CreatorCtaShapes() {
  return (
    <>
      <DecorativeShape
        src={IMAGES.shapes.springCropBottom}
        width={266}
        height={225}
        tone="lime"
        sizes="(min-width: 1024px) 266px, (min-width: 768px) 160px, 96px"
        className="top-0 left-0 w-24 md:w-40 lg:w-66.5"
      />
      <DecorativeShape
        src={IMAGES.shapes.springSm1}
        width={176}
        height={176}
        sizes="(min-width: 1024px) 176px, 112px"
        className="hidden md:top-4 md:left-[14%] md:block md:w-28 lg:top-2.5 lg:left-45 lg:w-44"
      />
      <DecorativeShape
        src={IMAGES.shapes.cone}
        width={139}
        height={189}
        sizes="(min-width: 1024px) 139px, 96px"
        className="hidden md:top-[45%] md:left-0 md:block md:w-24 lg:top-56.25 lg:w-34.75"
      />
      <DecorativeShape
        src={IMAGES.shapes.torusCrop}
        width={344}
        height={190}
        tone="lime"
        sizes="(min-width: 1024px) 344px, (min-width: 768px) 208px, 128px"
        className="bottom-0 -left-4 w-32 md:left-0 md:w-52 lg:left-4.25 lg:w-86"
      />
      <DecorativeShape
        src={IMAGES.shapes.pyramid2}
        width={189}
        height={189}
        tone="lime"
        sizes="(min-width: 1024px) 189px, 112px"
        className="hidden md:top-2 md:right-[14%] md:block md:w-28 lg:top-0 lg:right-43.5 lg:w-47.25"
      />
      <DecorativeShape
        src={IMAGES.shapes.cylinder2}
        width={218}
        height={372}
        sizes="(min-width: 1024px) 218px, (min-width: 768px) 128px, 56px"
        className="top-1 right-0 w-14 md:w-32 lg:w-54.5"
      />
      <DecorativeShape
        src={IMAGES.shapes.springCropTop}
        width={332}
        height={199}
        tone="lime"
        sizes="(min-width: 1024px) 332px, (min-width: 768px) 208px, 128px"
        className="right-0 bottom-0 w-32 md:w-52 lg:w-83"
      />
    </>
  );
}
