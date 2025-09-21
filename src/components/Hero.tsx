import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Award, Users, Building2 } from 'lucide-react';
import heroImage from '@/assets/hero-construction.jpg';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    { icon: Building2, label: 'Projects Completed', value: '500+' },
    { icon: Users, label: 'Happy Clients', value: '300+' },
    { icon: Award, label: 'Years Experience', value: '15+' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center hero-gradient relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Construction and engineering excellence" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/60"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-playfair font-bold leading-tight">
                Building Your
                <span className="text-gradient block">Dreams</span>
                into Reality
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                SVS Holding delivers exceptional construction and engineering solutions. 
                From residential homes to commercial complexes, we provide expert guidance, 
                quality supervision, and innovative designs.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                onClick={() => scrollToSection('#services')}
                className="bg-gold hover:bg-gold-muted text-background font-semibold px-8 py-6 text-lg animate-pulse-glow"
              >
                Our Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('#projects')}
                className="border-gold text-gold hover:bg-gold hover:text-background px-8 py-6 text-lg"
              >
                View Projects
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2">
                    <stat.icon className="w-8 h-8 text-gold" />
                  </div>
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image/Visual Element */}
          <div className="relative lg:block hidden">
            <div className="glass-card rounded-2xl p-8 space-y-6">
              <h3 className="text-2xl font-playfair font-semibold text-gold">Why Choose SVS Holding?</h3>
              <div className="space-y-4">
                {[
                  'Expert technical consultation',
                  'Quality construction supervision',
                  'Competitive pricing models',
                  'Professional engineering team'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gold rounded-full"></div>
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;