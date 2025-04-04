
import React from 'react';
import { Button } from "@/components/ui/button";
import { Github, Linkedin, ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80')" }}
      >
        <div className="absolute inset-0 bg-portfolio-dark/70"></div>
      </div>
      
      {/* Animated particles (CSS dots) */}
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-white/30"
            style={{
              width: `${Math.random() * 8 + 2}px`,
              height: `${Math.random() * 8 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `pulse ${Math.random() * 3 + 2}s infinite alternate`
            }}
          ></div>
        ))}
      </div>
      
      <div className="container mx-auto px-4 md:px-6 z-10 text-center md:text-left">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between">
          <div className="max-w-2xl animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Hello, I'm <span className="text-portfolio-purple">Ezra Nyamwange</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-white/90 mb-6">
              Software Engineer & Computer Science Student
            </h2>
            <p className="text-white/80 mb-8 text-lg">
              Building elegant solutions through code and creativity. I'm passionate about developing 
              functional and beautiful applications that make a difference.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <Button 
                className="bg-portfolio-purple hover:bg-portfolio-purple/90 text-white px-6 py-6"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contact Me <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              
              <div className="flex space-x-4 mt-4 sm:mt-0">
                <a 
                  href="https://github.com/MurdaEzra" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
                >
                  <Github className="h-5 w-5 text-white" />
                </a>
                <a 
                  href="https://linkedin.com/in/ezra-nyamwange" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
                >
                  <Linkedin className="h-5 w-5 text-white" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="hidden md:block mt-10 md:mt-0">
            <div className="relative">
              <div className="w-64 h-64 rounded-full bg-portfolio-purple/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
                <div className="text-6xl font-bold text-white">EN</div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-lg shadow-lg">
                <p className="font-mono text-sm">
                  <span className="text-portfolio-purple">&lt;code&gt;</span> 
                  <span className="animate-pulse">|</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
