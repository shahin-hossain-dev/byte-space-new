const BASE = "/assets/images";

export const IMAGES = {
  logo: {
    /** White wordmark — for blue backgrounds. */
    light: `${BASE}/logo/logo-light.png`,
    /** Dark wordmark — for white backgrounds. */
    dark: `${BASE}/logo/logo-dark.png`,
  },
  hero: {
    manLaptop: `${BASE}/hero/man-laptop.png`,
    manLaptopShadow: `${BASE}/hero/man-laptop-shadow.png`,
    womanTablet: `${BASE}/hero/woman-tablet.png`,
  },
  shapes: {
    spring: `${BASE}/shapes/spring.png`,
    springCropLeft: `${BASE}/shapes/spring-crop-left.png`,
    springCropTop: `${BASE}/shapes/spring-crop-top.png`,
    springCropBottom: `${BASE}/shapes/spring-crop-bottom.png`,
    springSm1: `${BASE}/shapes/spring-sm-1.png`,
    springSm2: `${BASE}/shapes/spring-sm-2.png`,
    springSm3: `${BASE}/shapes/spring-sm-3.png`,
    torus: `${BASE}/shapes/torus.png`,
    torusCrop: `${BASE}/shapes/torus-crop.png`,
    cylinder1: `${BASE}/shapes/cylinder-1.png`,
    cylinder2: `${BASE}/shapes/cylinder-2.png`,
    pyramid1: `${BASE}/shapes/pyramid-1.png`,
    pyramid2: `${BASE}/shapes/pyramid-2.png`,
    cone: `${BASE}/shapes/cone.png`,
  },
  avatars: {
    sm: [1, 2, 3, 4].map((n) => `${BASE}/avatars/sm/avatar-${n}.png`),
    md: [1, 2, 3, 4, 5, 6, 7].map((n) => `${BASE}/avatars/md/avatar-${n}.png`),
    lg: [1, 2, 3].map((n) => `${BASE}/avatars/lg/avatar-${n}.png`),
  },
  courses: {
    figma: `${BASE}/courses/learn-figma.jpg`,
    digitalAsset: `${BASE}/courses/digital-asset.jpg`,
    bigData: `${BASE}/courses/big-data.jpg`,
    productivity: `${BASE}/courses/productivity.jpg`,
    money: `${BASE}/courses/money-management.jpg`,
    startup: `${BASE}/courses/startup.jpg`,
  },
} as const;
