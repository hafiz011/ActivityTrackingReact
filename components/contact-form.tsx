'use client';

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, ContactFormData } from "@/lib/validation";
import { submitContactForm } from "@/app/Contact/actions";

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    const res = await submitContactForm(data);

    if ("error" in res) {
      toast.error("Form submission failed.");
    } else {
      toast.success("Message sent!");
      reset();
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Input placeholder="Your Name" {...register("name")} />
      <Input placeholder="Email Address" type="email" {...register("email")} />
      <Input placeholder="Company (Optional)" {...register("company")} />
      <select {...register("type")} className="w-full p-2 border rounded-md">
        <option value="">Select Inquiry Type</option>
        <option value="Support">Support</option>
        <option value="Partnership">Partnership</option>
        <option value="Demo">Demo</option>
        <option value="Other">Other</option>
      </select>
      <Textarea rows={5} placeholder="Your Message" {...register("message")} />
      <Button className="bg-blue-600 hover:bg-blue-700 text-white" type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
