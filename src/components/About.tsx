import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Target, Eye, Award, Users } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To empower our clients with expert guidance and unbiased analysis, ensuring their complete peace of mind throughout every property decision and project.'
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description: 'To be the undisputed leader in Sri Lanka\'s professional services sector, setting the gold standard for integrity and expertise in property inspections and project consultancy.'
    },
    {
      icon: Award,
      title: 'Our Values',
      description: 'Quality, integrity, Client-Centricity, and customer satisfaction form the foundation of everything we do at SVS Developments.'
    },
    {
      icon: Users,
      title: 'Our Team',
      description: 'Our team consists of highly qualified professionals with extensive experience in property analysis and project management. We are dedicated to providing the expert advice and unbiased assessments required to ensure your confidence and peace of mind in every decision you make'
    }
  ];

  const achievements = [
    { number: '15+', label: 'Years of Excellence' },
    { number: '500+', label: 'Projects Completed' },
    { number: '300+', label: 'Satisfied Clients' },
    { number: '50+', label: 'Expert Team Members' }
  ];

  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold mb-6">
            About <span className="text-gradient">SVS Developments</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
          Leveraging over three decades of expertise in the construction industry, SVS Developments is backed by a dedicated team of qualified engineers committed to serving you. We are a trusted partner for all residential and commercial projects, providing expert guidance and unparalleled service to ensure quality, efficiency, and complete peace of mind.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <Badge className="bg-gold/10 text-gold border-gold/20 mb-4">
                Construction Excellence Since 2020
              </Badge>
              <h3 className="text-3xl font-playfair font-semibold mb-6 text-foreground">
                Need an expert opinion before you buy a building or land?
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">
               As Sri Lanka's first-ever provider of comprehensive building and land inspections, we specialize in assisting clients with their most challenging projects. Whether you are stuck due to poor project management or looking to purchase a new buidling or land for your business or residence,Our highly qualified professionals are committed to providing the expert guidance you need at every stage. We offer specialized advice to help you find the most suitable land or building for your needs and provide the expertise required to streamline your ongoing construction projects, ensuring a seamless and stress-free experience from start to finish.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
              Before you make a commitment, our team will inspect and analyze a land or building to determine its viability for purchase. We are here to help you get your project back on track and make informed decisions on a planned purchase of a new house or land.
              </p>
            </div>

            {/* Achievements */}
            {/* <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center p-4 glass-card rounded-lg">
                  <div className="text-3xl font-bold text-gold mb-2">{achievement.number}</div>
                  <div className="text-sm text-muted-foreground">{achievement.label}</div>
                </div>
              ))}
            </div> */}
          </div>

          {/* Right Content - Values Grid */}
          <div className="grid grid-cols-1 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="service-card group">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                      <value.icon className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">{value.title}</h4>
                      <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="glass-card max-w-4xl mx-auto p-12 rounded-2xl">
            <h3 className="text-3xl font-playfair font-semibold mb-6">
              Ready to Start Your Construction Project?
            </h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let our experienced team help you turn your construction dreams into reality. 
              Contact us today for a free consultation and discover how we can add value to your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gold hover:bg-gold-muted text-background font-semibold px-8 py-3 rounded-lg transition-colors"
              >
                Get Free Consultation
              </button>
              <button 
                onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
                className="border border-gold text-gold hover:bg-gold hover:text-background font-semibold px-8 py-3 rounded-lg transition-colors"
              >
                Explore Our Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;