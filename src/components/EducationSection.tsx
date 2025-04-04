
import React from 'react';

const EducationSection = () => {
  const educationItems = [
    {
      id: 1,
      institution: "Co-operative University",
      degree: "Bachelor's in Computer Science",
      status: "Currently Pursuing",
      description: "Focusing on software development, algorithms, and systems design. Engaging in hands-on projects to apply theoretical concepts in practical scenarios.",
      year: "Present",
      logo: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=200",
    },
    {
      id: 2,
      institution: "PLP Academy",
      degree: "Software Engineering Program",
      status: "Currently Pursuing",
      description: "Intensive training program focused on full-stack development, agile methodologies, and real-world software engineering practices.",
      year: "Present",
      logo: "/placeholder.svg",
    },
    {
      id: 3,
      institution: "Kisii School",
      degree: "High School Education",
      status: "Completed",
      description: "Graduated with an A- grade, with particular strength in Mathematics and Sciences. Participated in various tech clubs and programming competitions.",
      year: "Completed",
      logo: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=200",
    },
  ];

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 dark:text-white">Education</h2>
          <div className="w-20 h-1 bg-portfolio-purple mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My academic journey has equipped me with both theoretical knowledge and practical skills
            in computer science and software development.
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 dark:bg-gray-700 hidden md:block"></div>
          
          <div className="space-y-12">
            {educationItems.map((item, index) => (
              <div key={item.id} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-portfolio-purple hidden md:block"></div>
                
                <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
                  <div className="md:w-1/2 p-6">
                    <div className={`p-6 rounded-lg shadow-lg bg-white dark:bg-gray-900 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                          <img 
                            src={item.logo} 
                            alt={item.institution} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-bold text-xl text-portfolio-purple">{item.institution}</h3>
                          <p className="text-gray-600 dark:text-gray-400">{item.year}</p>
                        </div>
                      </div>
                      
                      <h4 className="text-lg font-semibold mb-2 dark:text-white">{item.degree}</h4>
                      <p className="text-sm text-portfolio-purple font-medium mb-3">{item.status}</p>
                      <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                    </div>
                  </div>
                  
                  <div className="md:w-1/2 hidden md:block"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
