import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { SITE } from "@/constants";

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_ALT = SITE.title;
export const OG_CONTENT_TYPE = "image/png";

const root = process.cwd();

// next/og can't resolve CSS variables, so read the :root tokens from globals.css to keep
// it the single source of truth for colors.
async function readTokens() {
  const css = await readFile(join(root, "src/app/globals.css"), "utf8");
  const token = (name: string) => {
    const match = css.match(new RegExp(`--${name}:\\s*([^;]+);`));
    if (!match) throw new Error(`Missing --${name} token in globals.css`);
    return match[1].trim();
  };
  return {
    primary: token("primary"),
    primaryForeground: token("primary-foreground"),
    highlight: token("highlight"),
    highlightForeground: token("highlight-foreground"),
  };
}

export async function renderOgImage() {
  const [colors, bold, logo] = await Promise.all([
    readTokens(),
    readFile(join(root, "public/assets/fonts/Satoshi-Bold.otf")),
    readFile(join(root, "public/assets/images/logo/logo-light.png"), "base64"),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: colors.primary,
          color: colors.primaryForeground,
          fontFamily: "Satoshi",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`data:image/png;base64,${logo}`} width={256} height={55} alt="" />

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div style={{ fontSize: 84, fontWeight: 700, lineHeight: 1.05, letterSpacing: -2 }}>
            Get Access to Hundreds of Courses
          </div>
          <div style={{ fontSize: 32, lineHeight: 1.35, opacity: 0.85, maxWidth: 900 }}>
            Unlock your creativity, gain valuable knowledge, and grow your business.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignSelf: "flex-start",
            padding: "16px 36px",
            borderRadius: 999,
            fontSize: 30,
            fontWeight: 700,
            background: colors.highlight,
            color: colors.highlightForeground,
          }}
        >
          Start learning today
        </div>
      </div>
    ),
    {
      ...OG_SIZE,
      fonts: [{ name: "Satoshi", data: bold, style: "normal", weight: 700 }],
    },
  );
}
