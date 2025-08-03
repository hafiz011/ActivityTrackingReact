'use client';

import React from 'react';
import { Send } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { contactFormSchema, ContactFormData } from '@/lib/validation';
import { submitContactForm } from '@/app/Contact/actions';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';

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

    if ('error' in res) {
      toast.error('Form submission failed.');
    } else {
      toast.success('Message sent!');
      reset();
    }
  };

  return (
    <div className="relative bg-gradient-to-br from-blue-900/40 via-slate-900/60 to-cyan-900/30 via-transparent rounded-3xl p-6 border border-cyan-500/20 shadow-2xl mb-16 backdrop-blur-sm hover:border-cyan-400/40 transition-all duration-500 group overflow-hidden">
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-gray-300 mb-4">Send Us a Message</h3>
        <p className="text-gray-400">
          Fill out the form below and we'll get back to you within 24 hours.
        </p>
      </div>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Input className="bg-black/30 text-white/70" placeholder="Your Name" {...register("name")} />
      <Input className="bg-black/30 text-white/70" placeholder="Email Address" type="email" {...register("email")} />
      <Input className="bg-black/30 text-white/70" placeholder="Company (Optional)" {...register("company")} />
      <select {...register("type")} className="w-full p-2 border rounded-md bg-black/30 text-white/70">
        <option value="">Select Inquiry Type</option>
        <option value="Support">Support</option>
        <option value="Partnership">Partnership</option>
        <option value="Demo">Demo</option>
        <option value="Other">Other</option>
      </select>
      <Textarea className="bg-black/30 text-white/70" rows={5} placeholder="Your Message" {...register("message")} />
      <Button className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02]" type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>

    </div>
  );
}