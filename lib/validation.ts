import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional(),
  type: z.enum(["Support", "Partnership", "Demo", "Other"]),
  message: z.string().min(10)
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
