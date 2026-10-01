import { ROUTES } from "./routes";

/** Left-hand showcase copy for each auth page. */
export const AUTH_SHOWCASE = {
  login: {
    title: "Sign in with ease",
    description:
      "Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.",
  },
  signup: {
    title: "Sign up and come in",
    description:
      "The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost",
  },
} as const;

export const AUTH_FIELDS = {
  name: { label: "Full Name", placeholder: "Jamie Davis", autoComplete: "name" },
  email: { label: "Email", placeholder: "designer@example.com", autoComplete: "email" },
  password: { label: "Password", placeholder: "********" },
} as const;

export const LOGIN_COPY = {
  eyebrow: "Sign In",
  title: "Welcome Back",
  submit: "Sign In",
  pending: "Signing in…",
  divider: "or",
  footer: { prompt: "New user?", link: "Create an account", href: ROUTES.signup },
} as const;

export const SIGNUP_COPY = {
  eyebrow: "Create an Account",
  title: "Welcome to ByteSpace",
  submit: "Continue",
  pending: "Creating account…",
  footer: { prompt: "Already have an account?", link: "Login", href: ROUTES.login },
} as const;

export const SOCIAL_PROVIDERS = [
  { id: "facebook", label: "Continue with Facebook", name: "Facebook" },
  { id: "google", label: "Continue with Google", name: "Google" },
] as const;

export const PASSWORD_MIN_LENGTH = 8;

export const AUTH_MESSAGES = {
  nameRequired: "Please enter your full name.",
  emailInvalid: "Please enter a valid email address.",
  passwordRequired: "Please enter your password.",
  passwordTooShort: `Password must be at least ${PASSWORD_MIN_LENGTH} characters.`,
  formInvalid: "Please fix the highlighted fields.",
  socialUnavailable: (provider: string) => `${provider} sign-in isn't available yet.`,
} as const;
