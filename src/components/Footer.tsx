
import React from 'react';
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-portfolio-dark text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-portfolio-purple flex items-center justify-center text-white font-bold text-xl">
                EMN
              </div>
              <span className="ml-2 text-lg font-semibold font-vivaldi">Ezra Moseti Nyamwange</span>
            </div>
            <p className="mt-2 text-gray-400 max-w-md">
              Front-end & Back-end Developer passionate about building elegant solutions through code.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a 
                href="https://github.com/MurdaEzra" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="h-5 w-5" />
              </a>
              
              <a 
                href="https://linkedin.com/in/ezra-nyamwange" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              
              <a 
                href="mailto:ezranyamwange895@gmail.com" 
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
            
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Ezra Moseti Nyamwange. All rights reserved.
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-white/10">
          <nav className="flex flex-wrap justify-center gap-6">
            <a href="#home" className="hover:text-portfolio-purple transition-colors">Home</a>
            <a href="#about" className="hover:text-portfolio-purple transition-colors">About</a>
            <a href="#education" className="hover:text-portfolio-purple transition-colors">Education</a>
            <a href="#skills" className="hover:text-portfolio-purple transition-colors">Skills</a>
            <a href="#projects" className="hover:text-portfolio-purple transition-colors">Projects</a>
            <a href="#contact" className="hover:text-portfolio-purple transition-colors">Contact</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
