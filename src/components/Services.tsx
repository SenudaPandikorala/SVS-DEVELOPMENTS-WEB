import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Home, 
  Building, 
  CreditCard, 
  DollarSign, 
  FileText, 
  Shield, 
  MapPin, 
  Wrench 
} from 'lucide-react';

const Services = () => {
  const freeServices = [
    {
      icon: Home,
      title: 'New Construction Advice',
      description: 'Professional technical guidance for housing and office construction projects',
      category: 'Residential & Commercial'
    },
    {
      icon: Wrench,
      title: 'Renovation Consultation', 
      description: 'Expert advice for all types of renovation projects, from minor updates to major overhauls',
      category: 'All Renovations'
    },
    {
      icon: CreditCard,
      title: 'Bank Loan Guidance',
      description: 'Professional assistance with construction loan applications and documentation',
      category: 'Financial Support'
    }
  ];

  const concessionalServices = [
    {
      icon: Building,
      title: 'Inspection of Land or Building',
      description: 'Affordable construction models for your house or office projects without compromising quality',
      category: 'Cost-Effective'
    },
    {
      icon: Building,
      title: 'Inspection of ongoing Construction',
      description: 'Affordable construction models for your house or office projects without compromising quality',
      category: 'Cost-Effective'
    },
    {
      icon: FileText,
      title: 'Plan and BOQ Preparation',
      description: 'Detailed Bill of Quantities preparation for accurate project cost estimation',
      category: 'Documentation'
    },
    // {
    //   icon: Shield,
    //   title: 'Construction Supervision',
    //   description: 'Professional supervision by qualified engineers, technical officers, and quantity surveyors',
    //   category: 'Quality Assurance'
    // },
    {
      icon: MapPin,
      title: 'Feasibility Study reports',
      description: 'Comprehensive reports on your selected land for development potential and feasibility',
      category: 'Site Analysis'
    },
    // {
    //   icon: Home,
    //   title: 'Settlement Technical Advice',
    //   description: 'Expert technical guidance for any settlement issues related to your house or office',
    //   category: 'Problem Solving'
    // }
  ];

  return (
    <section id="services" className="py-24 bg-secondary/10">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold mb-6">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We offer comprehensive construction and engineering services tailored to meet your specific needs, 
            from free consultations to professional project management.
          </p>
        </div>

        {/* Free Services */}
        <div className="mb-20">
          <div className="flex items-center justify-center mb-12">
            <Badge className="bg-gold text-background text-lg px-6 py-2 font-semibold">
              Free Services
            </Badge>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {freeServices.map((service, index) => (
              <Card key={index} className="service-card group cursor-pointer">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                      <service.icon className="w-6 h-6 text-gold" />
                    </div>
                    <Badge variant="outline" className="text-xs border-gold/30 text-gold">
                      {service.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Concessional Services */}
        <div>
          <div className="flex items-center justify-center mb-12">
            <Badge className="bg-construction-orange text-background text-lg px-6 py-2 font-semibold">
              Services on Concessionary Rate
            </Badge>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {concessionalServices.map((service, index) => (
              <Card key={index} className="service-card group cursor-pointer">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-construction-orange/10 rounded-lg flex items-center justify-center group-hover:bg-construction-orange/20 transition-colors">
                      <service.icon className="w-6 h-6 text-construction-orange" />
                    </div>
                    <Badge variant="outline" className="text-xs border-construction-orange/30 text-construction-orange">
                      {service.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="glass-card max-w-2xl mx-auto p-8 rounded-2xl">
            <h3 className="text-2xl font-playfair font-semibold mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-muted-foreground mb-6">
              Every project is unique. Contact us to discuss your specific requirements 
              and get a personalized consultation.
            </p>
            <button 
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gold hover:bg-gold-muted text-background font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Contact Us Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;