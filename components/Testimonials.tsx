import React from 'react';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Tracly uncovered $2,000+ in abandoned carts for us in the first week — pure gold! The insights helped us optimize our checkout flow and increase conversions by 23%.",
    author: "Aisha Rahman",
    role: "eCommerce Founder",
    company: "StyleHub",
    rating: 5,
    avatar: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  },
  {
    quote: "The suspicious login alerts saved us from several attacks. I trust Tracly daily to keep our platform secure and our users protected. It's like having a security team 24/7.",
    author: "Imran Hassan",
    role: "Security Lead",
    company: "TechFlow",
    rating: 5,
    avatar: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  },
  {
    quote: "The real-time analytics and user behavior insights have transformed how we make product decisions. Our team productivity increased by 40% since implementing Tracly.",
    author: "Sarah Chen",
    role: "Product Manager",
    company: "InnovateApp",
    rating: 5,
    avatar: "https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  }
];

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 transition-colors duration-200 ${
            i < rating
              ? "fill-amber-400 text-amber-400"
              : "fill-gray-200 text-gray-200"
          }`}
        />
      ))}
    </div>
  );
};

const TestimonialCard: React.FC<{ testimonial: Testimonial; index: number }> = ({
  testimonial,
  index,
}) => {
  return (
    <div
      className="group relative bg-black/60 rounded-2xl p-8 shadow-sm border border-cyan-500/30 hover:border-cyan-400/60 shadow-xl hover:shadow-cyan-500/20 transition-all duration-500 transform"
      style={{
        animationDelay: `${index * 50}ms`,
      }}
    >
      {/* Quote Icon */}
      <div className="absolute -top-4 left-8">
        <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-lg">
          <Quote className="w-4 h-4 text-white" />
        </div>
      </div>
      
      {/* Rating */}
      <div className="mb-6 pt-4">
        <StarRating rating={testimonial.rating} />
      </div>
      
      {/* Quote */}
      <blockquote className="text-gray-200 text-lg leading-relaxed mb-8 font-medium">
        "{testimonial.quote}"
      </blockquote>
      
      {/* Author Info */}
      <div className="flex items-center gap-4">
        <div className="relative">
          <img
            src={testimonial.avatar}
            alt={testimonial.author}
            className="w-12 h-12 rounded-full object-cover ring-2 ring-gray-100 group-hover:ring-orange-200 transition-all duration-300"
          />
          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
        </div>
        <div>
          <div className="font-semibold text-gray-300 text-base">
            {testimonial.author}
          </div>
          <div className="text-sm text-gray-500">
            {testimonial.role} at{" "}
            <span className="font-medium text-gray-400">{testimonial.company}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  return (
    <div className="min-h-screemin-h-screen flex items-center justify-center">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
              What Our{" "}
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Customers Say
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Real results from real businesses using our platform to drive growth and success
            </p>
          </div>
          
          {/* Testimonials Grid */}
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                testimonial={testimonial}
                index={index}
              />
            ))}
          </div>
          


        </div>
      </section>
    </div>
  );
};

export default Testimonials;