import React from 'react';
import {Card, CardContent} from "@/components/ui/card"
import { Star } from "lucide-react";


interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
}


const testimonials: Testimonial[] = [
  {
    quote: "Tracly uncovered $2,000+ in abandoned carts for us in the first week — pure gold! The insights helped us optimize our checkout flow.",
    author: "Aisha R.",
    role: "eCommerce Founder",
    company: "StyleHub",
    rating: 5
  },
  {
    quote: "The suspicious login alerts saved us from several attacks. I trust Tracly daily to keep our platform secure and our users protected.",
    author: "Imran H.",
    role: "Security Lead",
    company: "TechFlow",
    rating: 5
  },
  {
    quote: "The real-time analytics and user behavior insights have transformed how we make product decisions. Highly recommend!",
    author: "Sarah Chen",
    role: "Product Manager",
    company: "InnovateApp",
    rating: 5
  }
];


const Testimonials : React.FC = () => {
    return (
         <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What Our{" "}
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Customers Say
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Real results from real businesses
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gradient-to-br from-background to-accent/5 hover:shadow-xl transition-all duration-300 border-0">
                <CardContent className="p-8">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-lg mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

    );
};

export default Testimonials;