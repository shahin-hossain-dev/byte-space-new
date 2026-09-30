"use client";

import { useActionState } from "react";
import { signUp, type AuthFormState } from "@/actions/auth";
import { AUTH_FIELDS, PASSWORD_MIN_LENGTH, SIGNUP_COPY } from "@/constants";
import { AuthField } from "./auth-field";
import { AuthSubmit } from "./auth-submit";

const initialState: AuthFormState = { status: "idle", message: "", errors: {}, values: {} };

export function SignupForm() {
  const [state, formAction, pending] = useActionState(signUp, initialState);
  const { name, email, password } = AUTH_FIELDS;

  return (
    <form action={formAction} noValidate className="flex flex-col gap-6">
      <AuthField
        name="name"
        label={name.label}
        placeholder={name.placeholder}
        autoComplete={name.autoComplete}
        required
        defaultValue={state.values.name}
        error={state.errors.name}
      />
      <AuthField
        name="email"
        type="email"
        label={email.label}
        placeholder={email.placeholder}
        autoComplete={email.autoComplete}
        required
        defaultValue={state.values.email}
        error={state.errors.email}
      />
      <AuthField
        name="password"
        type="password"
        label={password.label}
        placeholder={password.placeholder}
        autoComplete="new-password"
        minLength={PASSWORD_MIN_LENGTH}
        required
        error={state.errors.password}
      />
      <p role="status" className="sr-only">
        {state.message}
      </p>
      <AuthSubmit pending={pending} label={SIGNUP_COPY.submit} pendingLabel={SIGNUP_COPY.pending} />
    </form>
  );
}
