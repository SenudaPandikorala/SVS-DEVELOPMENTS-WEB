import React from 'react';
import { Phone, Mail, MapPin, Clock, ArrowUp } from 'lucide-react';


const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navigationLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    // { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const services = [
    'New Construction Advice',
    'Renovation Consultation',
    'Inspection of Land or Building',
    'Inspection of ongoing Construction',
    'Feasibility Study reports'
  ];

  return (
    <footer className="bg-secondary/20 border-t border-border/50 relative">
      {/* Back to top button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 right-8 w-12 h-12 bg-gold hover:bg-gold-muted text-background rounded-full flex items-center justify-center transition-colors shadow-lg"
      >
        <ArrowUp className="w-5 h-5" />
      </button>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                {/* <div className="w-10 h-10 bg-gradient-to-br from-gold to-construction-orange rounded-lg flex items-center justify-center">
                  <span className="text-background font-bold text-lg">S</span>
                </div> */}
                <div>
                  <h3 className="text-xl font-playfair font-bold text-foreground">SVS Developments</h3>
                  <p className="text-sm text-muted-foreground">Construction Excellence</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Building dreams into reality with over 15 years of construction expertise. 
                Your trusted partner for residential and commercial projects.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="w-4 h-4 text-gold" />
                <span className="text-muted-foreground">+94 71 7181 999 / +94 11 2701 329</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="w-4 h-4 text-gold" />
                <span className="text-muted-foreground">svsdevelopments.sl@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <MapPin className="w-4 h-4 text-gold" />
                <span className="text-muted-foreground">341/1 57A Mahayaya gardens, Samanpura, Piliyandala</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Clock className="w-4 h-4 text-gold" />
                <span className="text-muted-foreground">Mon - Sun: 8:00 AM - 10:00 PM</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6">Quick Links</h4>
            <nav className="space-y-3">
              {navigationLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-muted-foreground hover:text-gold transition-colors duration-300"
                >
                  {link.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-muted-foreground text-sm leading-relaxed">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Business Hours & CTA */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6">Get Started</h4>
            <div className="space-y-4">
              <p className="text-muted-foreground text-sm leading-relaxed">
                Ready to start your construction project? Contact us today for a free consultation.
              </p>
              
              <div className="glass-card p-4 rounded-lg">
                <h5 className="font-semibold text-foreground mb-2">Free Consultation</h5>
                <p className="text-sm text-muted-foreground mb-3">
                  Get expert advice for your project at no cost.
                </p>
                <button 
                  onClick={() => scrollToSection('#contact')}
                  className="w-full bg-gold hover:bg-gold-muted text-background font-semibold py-2 px-4 rounded transition-colors text-sm"
                >
                  Contact Us Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-muted-foreground text-sm">
                © {currentYear} SVS Developments. All rights reserved.
              </p>
              <p className="text-muted-foreground text-xs mt-1">
                Licensed, Bonded & Insured Construction Company
              </p>
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <button className="text-muted-foreground hover:text-gold transition-colors">
                Privacy Policy
              </button>
              <button className="text-muted-foreground hover:text-gold transition-colors">
                Terms of Service
              </button>
              <button className="text-muted-foreground hover:text-gold transition-colors">
                Licensing
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;