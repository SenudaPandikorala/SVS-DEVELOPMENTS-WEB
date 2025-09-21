import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  MessageSquare,
  Building2,
  User
} from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      details: '+1 (555) 123-4567',
      subtitle: 'Mon - Fri: 8:00 AM - 6:00 PM'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: 'info@svsholding.com',
      subtitle: 'We respond within 24 hours'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: '123 Construction Ave',
      subtitle: 'Business District, City 12345'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Mon - Fri: 8:00 AM - 6:00 PM',
      subtitle: 'Sat: 9:00 AM - 4:00 PM'
    }
  ];

  const projectTypes = [
    'New Construction - Residential',
    'New Construction - Commercial', 
    'Renovation/Remodeling',
    'Technical Consultation',
    'Construction Supervision',
    'BOQ Preparation',
    'Land Development Report',
    'Other'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      projectType: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold mb-6">
            Contact <span className="text-gradient">Us</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Ready to start your construction project? Get in touch with our expert team 
            for a free consultation and personalized quote.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <h3 className="text-2xl font-playfair font-semibold mb-6 text-foreground">
                Get in Touch
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Have a question about our services or want to discuss your project? 
                We're here to help. Reach out through any of the channels below.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="service-card group">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                        <info.icon className="w-6 h-6 text-gold" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                        <p className="text-foreground font-medium">{info.details}</p>
                        <p className="text-sm text-muted-foreground">{info.subtitle}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Info */}
            <div className="glass-card p-6 rounded-lg">
              <h4 className="font-semibold text-foreground mb-4">Why Choose SVS Holding?</h4>
              <div className="space-y-3">
                {[
                  'Free initial consultation',
                  '15+ years of experience',
                  'Licensed & insured professionals',
                  'Competitive pricing',
                  'Quality guarantee'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gold rounded-full"></div>
                    <span className="text-sm text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Forms */}
          <div className="lg:col-span-2 space-y-8">
            {/* Main Contact Form */}
            <Card className="service-card">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <MessageSquare className="w-6 h-6 text-gold" />
                  <CardTitle className="text-xl">Send us a Message</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Full Name</label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                        className="bg-background border-border"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Email Address</label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                        className="bg-background border-border"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Phone Number</label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="(555) 123-4567"
                        className="bg-background border-border"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Project Type</label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 bg-background border border-border rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                        required
                      >
                        <option value="">Select project type</option>
                        {projectTypes.map((type, index) => (
                          <option key={index} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Project Details</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your project, timeline, budget, and any specific requirements..."
                      rows={5}
                      required
                      className="bg-background border-border resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gold hover:bg-gold-muted text-background font-semibold py-3"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Quick Inquiry Form */}
            <Card className="service-card">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-6 h-6 text-construction-orange" />
                    <CardTitle className="text-xl">Quick Phone Consultation</CardTitle>
                  </div>
                  <Badge className="bg-construction-orange/10 text-construction-orange border-construction-orange/20">
                    Free Service
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Need immediate assistance? Schedule a free 15-minute phone consultation 
                  with one of our construction experts.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <Input 
                    placeholder="Your name"
                    className="bg-background border-border"
                  />
                  <Input 
                    placeholder="Phone number"
                    className="bg-background border-border"
                  />
                  <Button className="bg-construction-orange hover:bg-construction-orange/90 text-background">
                    Schedule Call
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;