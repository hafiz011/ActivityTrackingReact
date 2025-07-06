import { ContactForm } from "@/components/contact-form";
import { ContactInfo } from "@/components/contact-info";
import { GoogleMap } from "@/components/google-map";
import { LandingTheme } from "@/components/LandingTheme";
import {HeaderSection} from "@/components/headerSection"
export default function ContactPage() {
  return (
  <LandingTheme>
    <HeaderSection />
    <div className="max-w-6xl mx-auto mt-10 p-6 md:p-12 space-y-10">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-2 text-gray-200">Get in Touch</h1>
        <p className="text-gray-300">We’re here to help you grow your business with smart analytics.</p>
      </section>

      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <ContactInfo />
          <div className="pt-6">
            <ContactForm />
          </div>
        </div>
        <GoogleMap />
      </div>
    </div>
  </LandingTheme>
  );
}
