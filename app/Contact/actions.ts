"use server";

import { contactFormSchema } from "@/lib/validation";
import { revalidatePath } from "next/cache";

export async function submitContactForm(formData: unknown) {
  const result = contactFormSchema.safeParse(formData);

  if (!result.success) {
    return { error: "Validation failed", issues: result.error.format() };
  }

  const data = result.data;

  // Send to DB/email service here
  console.log("New message:", data);

  return { success: true };
}
