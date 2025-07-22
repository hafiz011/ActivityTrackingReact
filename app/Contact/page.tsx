import { ContactForm } from "@/components/contact-form";
import { ContactInfo } from "@/components/contact-info";
import { GoogleMap } from "@/components/google-map";
import React from "react";
import { Sparkles } from "lucide-react";
import { Facebook, Twitter, Linkedin } from 'lucide-react';
import { Card } from '@/components/ui/card';

export default function ContactPage() {
  return (
    <div className="max-w-6xl mx-auto mt-10 p-6 md:p-12 space-y-10">
      {/* Hero Section */}
      <section className="relative overflow-hidden">

          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-8">
              <Sparkles className="w-4 h-4 mr-2" />
              Contact UserTrack Pro
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-gray-300 mb-6 leading-tight">
              Let's Build Something{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Amazing Together
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Ready to unlock the power of user behavior intelligence? Our team is here to help you get started 
              and answer any questions about UserTrack Pro.
            </p>
          </div>
      </section>




      <div className="grid md:grid-cols-2 gap-10">
        <div>
        <ContactForm />
        </div>
        <div>
          <ContactInfo />
        </div>
      </div>
      {/* Social Media Links */}
        <Card className="flex items-start space-x-4 p-6 shadow-lg">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
              <div className="w-6 h-6 bg-indigo-600 rounded"></div>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-300 mb-1">Follow Us</h4>
            <p className="text-gray-400 mb-3">Stay connected on social media</p>
            <div className="flex space-x-4">
              <a href="#" className="text-indigo-600 hover:text-indigo-700 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-indigo-600 hover:text-indigo-700 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-indigo-600 hover:text-indigo-700 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </Card>
      <GoogleMap />
    </div>
  );
}
