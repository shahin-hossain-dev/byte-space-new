"use client";

import { useActionState } from "react";
import { signIn, type AuthFormState } from "@/actions/auth";
import { AUTH_FIELDS, LOGIN_COPY } from "@/constants";
import { AuthField } from "./auth-field";
import { AuthSubmit } from "./auth-submit";
import { SocialSignIn } from "./social-sign-in";

const initialState: AuthFormState = { status: "idle", message: "", errors: {}, values: {} };

export function LoginForm() {
  const [state, formAction, pending] = useActionState(signIn, initialState);
  const { email, password } = AUTH_FIELDS;

  return (
    <>
      <form action={formAction} noValidate className="flex flex-col gap-6">
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
          autoComplete="current-password"
          required
          error={state.errors.password}
        />
        <p role="status" className="sr-only">
          {state.message}
        </p>
        <AuthSubmit pending={pending} label={LOGIN_COPY.submit} pendingLabel={LOGIN_COPY.pending} />
      </form>
      <SocialSignIn />
    </>
  );
}
