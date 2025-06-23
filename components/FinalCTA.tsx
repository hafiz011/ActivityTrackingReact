import React from 'react';
import Link from "next/link";
import {Button} from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react";



const FinalCTA: React.FC = () => {
    return (
         <section className="py-24 px-4 bg-gradient-to-br from-blue-600/10 via-purple-600/5 to-emerald-600/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to{" "}
            <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
              Track Smarter?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            Know your users. Detect threats instantly. Convert more.<br />
            Start with Tracly today — setup takes just 60 seconds.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild size="lg" className="text-lg px-8 py-4 h-auto bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <Link href="#" className="flex items-center gap-2">
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-4 h-auto border-2 hover:bg-accent/50 transition-all duration-300">
              <Link href="#" className="flex items-center gap-2">
                <Play className="w-5 h-5" />
                Book a Demo
              </Link>
            </Button>
          </div>
        </div>
      </section>
    );
};

export default FinalCTA;