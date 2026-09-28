import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    // Colors live as tokens in src/app/globals.css — block hex/rgb/hsl/oklch literals
    // in code (e.g. `bg-[#383838]`, `style={{ color: "rgb(0 0 0)" }}`).
    files: ["src/**/*.{ts,tsx}"],
    rules: {
      "no-restricted-syntax": [
        "error",
        {
          selector:
            "Literal[value=/#(?:[0-9a-fA-F]{3,4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})\\b|\\b(?:rgba?|hsla?|oklch|oklab|lab|lch|hwb)\\(/]",
          message:
            "Hardcoded color. Use a theme token from globals.css (e.g. bg-primary, text-foreground).",
        },
        {
          selector:
            "TemplateElement[value.raw=/#(?:[0-9a-fA-F]{3,4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})\\b|\\b(?:rgba?|hsla?|oklch|oklab|lab|lch|hwb)\\(/]",
          message:
            "Hardcoded color. Use a theme token from globals.css (e.g. bg-primary, text-foreground).",
        },
      ],
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
