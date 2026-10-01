import { IMAGES } from "@/constants";
import { DecorativeShape } from "@/components/shared/decorative-shape";

/** Floating 3D shapes around the hero — positions measured from the 1440px design. */
export function HeroShapes() {
  return (
    <>
      <DecorativeShape
        src={IMAGES.shapes.springCropLeft}
        width={266}
        height={387}
        tone="lime"
        sizes="(min-width: 1024px) 195px, (min-width: 768px) 120px, 64px"
        className="top-2 left-0 w-12 md:top-72.5 md:w-20 lg:top-41.25 lg:w-48.75"
      />
      <DecorativeShape
        src={IMAGES.shapes.springSm1}
        width={176}
        height={176}
        sizes="(min-width: 1024px) 150px, 100px"
        className="hidden md:bottom-95 md:left-[4%] md:block md:w-25 lg:bottom-98.5 lg:left-[13.5%] lg:w-37.5"
      />
      <DecorativeShape
        src={IMAGES.shapes.torus}
        width={344}
        height={343}
        sizes="(min-width: 1024px) 330px, (min-width: 768px) 200px, 120px"
        className="bottom-2 -left-10 w-30 md:-left-6 md:w-50 lg:bottom-3.75 lg:left-[1.7%] lg:w-82.5"
      />
      <DecorativeShape
        src={IMAGES.shapes.cylinder1}
        width={213}
        height={372}
        tone="lime"
        sizes="(min-width: 1024px) 213px, (min-width: 768px) 130px, 56px"
        className="top-2 right-0 w-12 md:top-16 md:w-28 lg:top-24.25 lg:w-53.25"
      />
      <DecorativeShape
        src={IMAGES.shapes.pyramid1}
        width={189}
        height={189}
        sizes="(min-width: 1024px) 188px, 130px"
        className="hidden md:right-[4%] md:bottom-85 md:block md:w-32 lg:right-[10%] lg:bottom-89.75 lg:w-47"
      />
      <DecorativeShape
        src={IMAGES.shapes.spring}
        width={317}
        height={332}
        sizes="(min-width: 1024px) 316px, (min-width: 768px) 180px, 110px"
        className="-right-6 bottom-16 w-28 md:-right-4 md:bottom-10 md:w-45 lg:right-0 lg:bottom-5 lg:w-79"
      />
    </>
  );
}
