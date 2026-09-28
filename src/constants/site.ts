export const SITE = {
  name: "ByteSpace",
  title: "ByteSpace — Get Access to Hundreds of Courses",
  description:
    "Unlock your creativity, gain valuable knowledge, and grow your business with ByteSpace's wide range of online courses.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  locale: "en_US",
  copyright: `© ${new Date().getFullYear()} ByteSpace. All rights reserved.`,
} as const;
