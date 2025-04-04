
import React from 'react';

const SkillsSection = () => {
  const programmingLanguages = [
    { name: "JavaScript", percentage: 85 },
    { name: "Python", percentage: 80 },
    { name: "Java", percentage: 75 },
    { name: "HTML/CSS", percentage: 90 },
    { name: "C++", percentage: 65 },
    { name: "TypeScript", percentage: 75 },
  ];

  const frameworks = [
    { name: "React", percentage: 85 },
    { name: "Node.js", percentage: 80 },
    { name: "Django", percentage: 70 },
    { name: "Express", percentage: 75 },
    { name: "Spring Boot", percentage: 65 },
  ];

  const tools = [
    { name: "Git & GitHub", percentage: 90 },
    { name: "Docker", percentage: 70 },
    { name: "AWS", percentage: 65 },
    { name: "Firebase", percentage: 75 },
    { name: "MongoDB", percentage: 80 },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">My Skills</h2>
          <div className="w-20 h-1 bg-portfolio-purple mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            I've developed proficiency in various programming languages, frameworks, and tools
            throughout my educational and personal development journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Programming Languages */}
          <div className="bg-white rounded-lg shadow-lg p-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-xl font-bold mb-6 text-center text-portfolio-dark">
              Programming Languages
            </h3>
            <div className="space-y-6">
              {programmingLanguages.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-gray-500">{skill.percentage}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-portfolio-purple skill-progress-bar rounded-full"
                      style={{ 
                        '--skill-percentage': `${skill.percentage}%`,
                        width: '0%'
                      } as React.CSSProperties}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Frameworks & Libraries */}
          <div className="bg-white rounded-lg shadow-lg p-6 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <h3 className="text-xl font-bold mb-6 text-center text-portfolio-dark">
              Frameworks & Libraries
            </h3>
            <div className="space-y-6">
              {frameworks.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-gray-500">{skill.percentage}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-portfolio-teal skill-progress-bar rounded-full"
                      style={{ 
                        '--skill-percentage': `${skill.percentage}%`,
                        width: '0%'
                      } as React.CSSProperties}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Tools & Technologies */}
          <div className="bg-white rounded-lg shadow-lg p-6 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <h3 className="text-xl font-bold mb-6 text-center text-portfolio-dark">
              Tools & Technologies
            </h3>
            <div className="space-y-6">
              {tools.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-gray-500">{skill.percentage}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-portfolio-purple/70 skill-progress-bar rounded-full"
                      style={{ 
                        '--skill-percentage': `${skill.percentage}%`,
                        width: '0%'
                      } as React.CSSProperties}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Interests Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Professional Interests</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-white rounded-lg shadow-md text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center bg-portfolio-purple/10 text-portfolio-purple">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Web Development</h4>
              <p className="text-gray-600 text-sm">Modern frameworks, responsive design, and performance optimization</p>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-md text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center bg-portfolio-purple/10 text-portfolio-purple">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Machine Learning</h4>
              <p className="text-gray-600 text-sm">AI applications, data analysis, and predictive modeling</p>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-md text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center bg-portfolio-purple/10 text-portfolio-purple">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Mobile Development</h4>
              <p className="text-gray-600 text-sm">Cross-platform solutions and native app development</p>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-md text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center bg-portfolio-purple/10 text-portfolio-purple">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Cloud Computing</h4>
              <p className="text-gray-600 text-sm">Scalable architecture and serverless applications</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
