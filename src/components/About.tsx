import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Target, Eye, Award, Users } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To provide exceptional construction and engineering services that exceed client expectations while maintaining the highest standards of quality and professionalism.'
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description: 'To be the leading construction consultancy firm, known for innovation, reliability, and delivering sustainable building solutions for communities.'
    },
    {
      icon: Award,
      title: 'Our Values',
      description: 'Quality, integrity, innovation, and customer satisfaction form the foundation of everything we do at SVS Holding.'
    },
    {
      icon: Users,
      title: 'Our Team',
      description: 'Experienced engineers, architects, and construction professionals dedicated to bringing your vision to life with expertise and precision.'
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
            About <span className="text-gradient">SVS Holding</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            With over 15 years of experience in the construction industry, SVS Holding has established 
            itself as a trusted partner for residential and commercial construction projects.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <Badge className="bg-gold/10 text-gold border-gold/20 mb-4">
                Construction Excellence Since 2009
              </Badge>
              <h3 className="text-3xl font-playfair font-semibold mb-6 text-foreground">
                Building Tomorrow's Infrastructure Today
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                SVS Holding specializes in providing comprehensive construction and engineering solutions. 
                Our team of qualified engineers, architects, and construction professionals work together 
                to deliver projects that meet the highest standards of quality, safety, and sustainability.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                From initial planning and design to final construction and handover, we guide our clients 
                through every step of their construction journey, ensuring transparency, quality, and 
                timely delivery.
              </p>
            </div>

            {/* Achievements */}
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center p-4 glass-card rounded-lg">
                  <div className="text-3xl font-bold text-gold mb-2">{achievement.number}</div>
                  <div className="text-sm text-muted-foreground">{achievement.label}</div>
                </div>
              ))}
            </div>
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