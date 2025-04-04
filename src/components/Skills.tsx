
import { motion } from 'framer-motion';

const skillCategories = [
  {
    category: "Frontend Development",
    skills: ["HTML", "CSS", "JavaScript", "React" ,"Bootstrap"]
  },
  {
    category: "Backend Development",
    skills: ["PHP","SQL"]
  },
  {
    category: "Tools & Others",
    skills: ["Git", "Webpack","UX/UI Design", "Performance Optimization", "Responsive Design"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="relative py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="hero-blob bg-indigo-600/20 left-1/3 top-1/4 animate-pulse-slow"></div>
      
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
            Skills & Technologies
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            My technical toolkit that I've developed and refined throughout my career.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: catIndex * 0.2 }}
              viewport={{ once: true }}
              className="glass p-6 rounded-xl hover:bg-white/10 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-white mb-4">{category.category}</h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: 0.3 + catIndex * 0.1 + skillIndex * 0.05,
                      type: "spring",
                      stiffness: 100
                    }}
                    viewport={{ once: true }}
                    className="bg-portfolio-purple/20 hover:bg-portfolio-purple/40 px-3 py-2 rounded-lg transition-all duration-300"
                  >
                    <span className="text-white">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Education and Certifications */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass p-6 rounded-xl"
          >
            <h3 className="text-xl font-bold text-white mb-6">Education</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-portfolio-purple">Computer Science</h4>
                <p className="text-white">Dr. D.Y.Patil Institute of Engineering, Management & Research, Akurdi,Pune.</p>
                <p className="text-gray-400">2020 - 2024</p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-portfolio-purple">Higher Secondary</h4>
                <p className="text-white">S.P Smart higher Secondary School,Jammu,J&K.</p>
                <p className="text-gray-400">2017 - 2019</p>
              </div>
            </div>
          </motion.div>
          
          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass p-6 rounded-xl"
          >
            <h3 className="text-xl font-bold text-white mb-6">Certifications</h3>
            
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="mt-1.5 min-w-2 h-2 rounded-full bg-portfolio-purple"></div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Foundations of User Experience (UX) Design</h4>
                  <p className="text-gray-400">Google, 2024</p>
                </div>
              </li>
              
              <li className="flex items-start gap-3">
                <div className="mt-1.5 min-w-2 h-2 rounded-full bg-portfolio-purple"></div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Start the UX Design Process: Empathize, Define, and Ideate</h4>
                  <p className="text-gray-400">Google, 2024</p>
                </div>
              </li>
              
              <li className="flex items-start gap-3">
                <div className="mt-1.5 min-w-2 h-2 rounded-full bg-portfolio-purple"></div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Data Structures & Algorithms Essentials using C++</h4>
                  <p className="text-gray-400">Udemy, 2023</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
