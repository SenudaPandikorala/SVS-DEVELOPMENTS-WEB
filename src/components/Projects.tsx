import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Users, ExternalLink } from 'lucide-react';
import projectResidential from '@/assets/project-residential.jpg';
import projectCommercial from '@/assets/project-commercial.jpg';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Luxury Residential Complex',
      category: 'Residential',
      description: 'A modern 3-story residential complex featuring 24 premium apartments with contemporary design and sustainable construction practices.',
      image: projectResidential,
      location: 'Downtown District',
      duration: '18 months',
      clients: '24 families',
      status: 'Completed',
      features: ['Modern Architecture', 'Energy Efficient', 'Premium Finishes', 'Smart Home Features']
    },
    {
      id: 2,
      title: 'Corporate Office Building',
      category: 'Commercial', 
      description: 'A state-of-the-art 5-story office building designed for maximum efficiency and employee comfort with modern amenities.',
      image: projectCommercial,
      location: 'Business Center',
      duration: '24 months',
      clients: '1 corporation',
      status: 'In Progress',
      features: ['Glass Facade', 'HVAC Systems', 'Modern Elevators', 'Parking Facility']
    },
    {
      id: 3,
      title: 'Residential Villa Project',
      category: 'Residential',
      description: 'Custom-designed luxury villa with landscaped gardens, swimming pool, and high-end interior finishes.',
      image: projectResidential,
      location: 'Suburban Area',
      duration: '12 months',
      clients: '1 family',
      status: 'Completed',
      features: ['Custom Design', 'Swimming Pool', 'Landscaping', 'Premium Materials']
    },
    {
      id: 4,
      title: 'Renovation Project',
      category: 'Renovation',
      description: 'Complete renovation of a historic building, preserving architectural heritage while adding modern functionality.',
      image: projectCommercial,
      location: 'Historic District',
      duration: '15 months',
      clients: '1 heritage society',
      status: 'Planning',
      features: ['Heritage Preservation', 'Modern Updates', 'Structural Reinforcement', 'Code Compliance']
    }
  ];

  const getStatusBadge = (status: string) => {
    const variants = {
      'Completed': 'bg-green-500/10 text-green-400 border-green-500/20',
      'In Progress': 'bg-gold/10 text-gold border-gold/20',
      'Planning': 'bg-blue-500/10 text-blue-400 border-blue-500/20'
    };
    return variants[status as keyof typeof variants] || variants['Planning'];
  };

  const getCategoryBadge = (category: string) => {
    const variants = {
      'Residential': 'bg-construction-orange/10 text-construction-orange border-construction-orange/20',
      'Commercial': 'bg-gold/10 text-gold border-gold/20',
      'Renovation': 'bg-purple-500/10 text-purple-400 border-purple-500/20'
    };
    return variants[category as keyof typeof variants] || variants['Residential'];
  };

  return (
    <section id="projects" className="py-24 bg-secondary/10">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold mb-6">
            Our <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Discover our portfolio of successful construction projects. From residential complexes 
            to commercial buildings, each project showcases our commitment to quality and innovation.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {projects.map((project) => (
            <Card key={project.id} className="service-card group overflow-hidden">
              <div className="relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <Badge className={getCategoryBadge(project.category)}>
                    {project.category}
                  </Badge>
                  <Badge className={getStatusBadge(project.status)}>
                    {project.status}
                  </Badge>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 right-4">
                    <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center">
                      <ExternalLink className="w-5 h-5 text-background" />
                    </div>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-playfair font-semibold mb-3 text-foreground">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Project Details */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="flex items-center space-x-2 text-sm">
                    <MapPin className="w-4 h-4 text-gold" />
                    <span className="text-muted-foreground">{project.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Calendar className="w-4 h-4 text-gold" />
                    <span className="text-muted-foreground">{project.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Users className="w-4 h-4 text-gold" />
                    <span className="text-muted-foreground">{project.clients}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {project.features.map((feature, index) => (
                    <Badge key={index} variant="outline" className="text-xs border-border/50">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="glass-card max-w-2xl mx-auto p-8 rounded-2xl">
            <h3 className="text-2xl font-playfair font-semibold mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join our growing list of satisfied clients. Let's discuss your construction 
              project and bring your vision to life with our expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gold hover:bg-gold-muted text-background font-semibold px-8 py-3 rounded-lg transition-colors"
              >
                Start Your Project
              </button>
              <button 
                onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
                className="border border-gold text-gold hover:bg-gold hover:text-background font-semibold px-8 py-3 rounded-lg transition-colors"
              >
                View All Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;