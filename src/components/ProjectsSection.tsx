
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce application with user authentication, product catalog, and payment processing integration.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=500",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      githubUrl: "https://github.com/MurdaEzra/e-commerce-platform",
      liveUrl: "#",
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A responsive task management application with drag-and-drop functionality, user collaboration features, and real-time updates.",
      image: "https://images.unsplash.com/photo-1481887328591-3e277f9473dc?auto=format&fit=crop&q=80&w=500",
      technologies: ["React", "Firebase", "Tailwind CSS", "DnD Kit"],
      githubUrl: "https://github.com/MurdaEzra/task-management-app",
      liveUrl: "#",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A weather application that provides real-time weather data, forecasts, and location-based tracking using external APIs.",
      image: "https://images.unsplash.com/photo-1585802492136-9a21cacf1848?auto=format&fit=crop&q=80&w=500",
      technologies: ["JavaScript", "OpenWeather API", "Chart.js", "Geolocation API"],
      githubUrl: "https://github.com/MurdaEzra/weather-dashboard",
      liveUrl: "#",
    },
    {
      id: 4,
      title: "Blog Platform",
      description: "A content management system for blogging with rich text editing, categories, tags, and user authentication.",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=500",
      technologies: ["Next.js", "Prisma", "PostgreSQL", "Auth.js"],
      githubUrl: "https://github.com/MurdaEzra/blog-platform",
      liveUrl: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Projects</h2>
          <div className="w-20 h-1 bg-portfolio-purple mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Here are some of the projects I've worked on that showcase my skills and problem-solving abilities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="project-card bg-white rounded-xl overflow-hidden shadow-lg"
            >
              <div className="aspect-video w-full overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-portfolio-dark">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="bg-gray-100">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  <Button asChild variant="outline" size="sm" className="gap-2">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  
                  <Button asChild size="sm" className="gap-2 bg-portfolio-purple hover:bg-portfolio-purple/90">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild className="bg-portfolio-purple hover:bg-portfolio-purple/90">
            <a 
              href="https://github.com/MurdaEzra" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github className="h-4 w-4" />
              See More Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
