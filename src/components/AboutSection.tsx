
import React from 'react';
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

const AboutSection = () => {
  // CV download function
  const handleDownloadCV = () => {
    // In a real scenario, you would provide the actual link to the CV
    const link = document.createElement('a');
    link.href = '/ezra-nyamwange-cv.pdf'; // This would be the actual path to the CV file
    link.download = 'Ezra-Moseti-Nyamwange-CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 dark:text-white">About Me</h2>
          <div className="w-20 h-1 bg-portfolio-purple mx-auto"></div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="md:w-1/2">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80" 
                alt="Ezra Moseti Nyamwange" 
                className="rounded-lg shadow-xl object-cover h-[400px] w-full"
              />
              <div className="absolute -bottom-5 -right-5 bg-portfolio-purple p-4 rounded-lg shadow-lg">
                <p className="font-mono text-white text-sm">Passionate Developer</p>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 animate-fade-in">
            <h3 className="text-2xl font-bold mb-4 text-portfolio-purple font-vivaldi">Hi! I'm Ezra Moseti Nyamwange</h3>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              I am a passionate front-end and back-end developer with a love for creating functional 
              and beautiful web experiences. My journey in technology is driven by curiosity and a desire to build 
              solutions that make a positive impact.
            </p>
            <p className="mb-6 text-gray-700 dark:text-gray-300">
              I'm currently pursuing a Bachelor's degree in Computer Science at Co-operative University while also enhancing my practical 
              skills through software engineering training at PLP Academy. I believe in continuous learning and 
              staying updated with emerging technologies and industry best practices.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <h4 className="font-semibold text-portfolio-purple mb-2">Location</h4>
                <p className="text-gray-700 dark:text-gray-300">Nairobi, Kenya</p>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <h4 className="font-semibold text-portfolio-purple mb-2">Phone</h4>
                <p className="text-gray-700 dark:text-gray-300">+254 728 135 200</p>
              </div>
            </div>
            
            <Button 
              onClick={handleDownloadCV} 
              className="flex items-center gap-2 bg-portfolio-purple hover:bg-portfolio-purple/90 text-white"
            >
              <FileText className="h-4 w-4" />
              Download CV
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
