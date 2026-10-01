"use server";

import { redirect } from "next/navigation";
import { AUTH_MESSAGES, PASSWORD_MIN_LENGTH, ROUTES } from "@/constants";
import { isValidEmail } from "@/lib/validation";

export type AuthField = "name" | "email" | "password";

export interface AuthFormState {
  status: "idle" | "error";
  message: string;
  errors: Partial<Record<AuthField, string>>;
  /** Echoed back so the form keeps what was typed (passwords are never echoed). */
  values: Partial<Record<Exclude<AuthField, "password">, string>>;
}

const read = (formData: FormData, key: AuthField) => String(formData.get(key) ?? "").trim();

function invalid(
  errors: AuthFormState["errors"],
  values: AuthFormState["values"],
): AuthFormState | null {
  return Object.keys(errors).length > 0
    ? { status: "error", message: AUTH_MESSAGES.formInvalid, errors, values }
    : null;
}

export async function signIn(_prev: AuthFormState, formData: FormData): Promise<AuthFormState> {
  const email = read(formData, "email");
  const password = String(formData.get("password") ?? "");

  const errors: AuthFormState["errors"] = {};
  if (!isValidEmail(email)) errors.email = AUTH_MESSAGES.emailInvalid;
  if (!password) errors.password = AUTH_MESSAGES.passwordRequired;

  const failure = invalid(errors, { email });
  if (failure) return failure;

  // No auth provider is connected yet; this is where credentials would be verified
  // and a session created.
  redirect(ROUTES.dashboard);
}

export async function signUp(_prev: AuthFormState, formData: FormData): Promise<AuthFormState> {
  const name = read(formData, "name");
  const email = read(formData, "email");
  const password = String(formData.get("password") ?? "");

  const errors: AuthFormState["errors"] = {};
  if (name.length < 2) errors.name = AUTH_MESSAGES.nameRequired;
  if (!isValidEmail(email)) errors.email = AUTH_MESSAGES.emailInvalid;
  if (password.length < PASSWORD_MIN_LENGTH) errors.password = AUTH_MESSAGES.passwordTooShort;

  const failure = invalid(errors, { name, email });
  if (failure) return failure;

  // No auth provider is connected yet; this is where the account would be created.
  redirect(ROUTES.dashboard);
}
