
import { motion } from 'framer-motion';

const experiences = [
  {
    title: "Graduate Engineer Trainee",
    company: "Hindustan Platinum Private limited.",
    location: "Mumbai, India",
    period: "Feb 2023 - Present",
    description: [
      "Developed and deployed responsive web applications using HTML and designed UI to enhance user experience and performance",
      "Collaborated with cross-functional teams to identify requirements and deliver high-quality software solutions on time",
      "Improved API integration by implementing efficient data fetching strategies using React Query, resulting in faster load times",
      "Optimized web performance by reducing bundle size by 25% using webpack and code splitting techniques"
    ]
  },
  {
    title: "Web Development Intern",
    company: "Career Dreams Education",
    location: "Mumbai, India",
    period: "Mar 2023 - May 2023",
    description: [
      "Enhanced the UI design using CSS, JavaScript and improving accessibility and UX",
      "Implemented responsive design principles across multiple platforms",
      "Developed and debugged interactive website components using HTML, CSS, JavaScript.",
      "Improved website performance and user experience through optimization techniques"
    ]
  },
  {
    title: "Media & Graphics Coordinator | UI/UX & Branding",
    company: "CompSA",
    location: "Remote",
    period: "Sep 2021 - Oct 2022",
    description: [
      "Designed engaging promotional materials, banners, and digital assets, increasing audience engagement by 40%. ",
      "Led a team of 3 to develop branding materials for digital and social media campaigns."
      
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="relative py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="hero-blob bg-portfolio-purple/20 -left-1/4 top-1/2 animate-pulse-slow"></div>
      
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gradient">
            Work Experience
          </h2>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            My professional journey through tech companies, where I've honed my 
            skills and contributed to impactful projects.
          </p>
        </motion.div>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-portfolio-purple/30"></div>
          
          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8`}
              >
                {/* Timeline Dot (visible on md screens) */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-portfolio-purple rounded-full"></div>
                
                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className="glass p-6 rounded-xl hover:bg-white/20 transition-all duration-300">
                    <div className="flex flex-col md:items-end gap-1 mb-3">
                      <span className="text-sm text-gray-400">{exp.period}</span>
                      <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                      <div className="flex items-center gap-2">
                        <span className="text-portfolio-purple font-medium">{exp.company}</span>
                        <span className="text-gray-400">|</span>
                        <span className="text-gray-400">{exp.location}</span>
                      </div>
                    </div>
                    
                    <ul className={`text-gray-300 space-y-2 ${index % 2 === 0 ? 'md:ml-auto' : ''}`}>
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <div className="mt-1.5 min-w-1.5 h-1.5 rounded-full bg-portfolio-purple"></div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Empty div for layout in md screens */}
                <div className="hidden md:block md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
