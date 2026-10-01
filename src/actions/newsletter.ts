"use server";

import { NEWSLETTER } from "@/constants";
import { isValidEmail } from "@/lib/validation";

export interface NewsletterState {
  status: "idle" | "success" | "error";
  message: string;
}

export async function subscribeToNewsletter(
  _prevState: NewsletterState,
  formData: FormData,
): Promise<NewsletterState> {
  const email = String(formData.get("email") ?? "").trim();

  if (!isValidEmail(email)) {
    return { status: "error", message: NEWSLETTER.messages.invalid };
  }

  // No mailing-list provider is connected yet; this is where the email would be stored.
  return { status: "success", message: NEWSLETTER.messages.success };
}
