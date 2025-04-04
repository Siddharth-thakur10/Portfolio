import { motion } from 'framer-motion';
import profileImage from '../assets/images/profile2.jpeg';

const About = () => {
  return (
    <section id="about" className="relative py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="hero-blob bg-indigo-700/30 top-1/3 -right-1/4 animate-pulse-slow"></div>
      
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >

          {/* Left Column: Profile Image */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 glass overflow-hidden rounded-full">
            <div className="absolute inset-0 bg-gradient-to-br from-portfolio-purple/70 to-blue-500/50"></div>
            <div className="absolute inset-2 glass-dark rounded-full flex items-center justify-center overflow-hidden">
              <img 
                src={profileImage} 
                alt="Profile"
                className="w-full h-full object-cover"
              />

            </div>
          </div>
          
          {/* Right Column: About Content */}
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-6 text-gradient"
            >
              About Me
            </motion.h2>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="glass p-6 rounded-xl mb-6"
            >
              <p className="text-gray-200 mb-4">
                I'm a skilled Software Development Engineer with expertise in building engaging interactive experiences and applications. With a background in Computer Science from Dr. D.Y.Patil Institute of Engineering Management & Research, I specialize in frontend development and Ui/Ux Design.
              </p>
              <p className="text-gray-200">
                My journey in tech has taken me from developing intuitive user interfaces to implementing complex web application architectures. I'm passionate about creating clean, efficient code and delivering exceptional user experiences.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="glass p-6 rounded-xl"
            >
              <h3 className="text-xl font-semibold text-white mb-3">What I Do</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Develop responsive and interactive web applications</li>
                <li>Create clean, maintainable frontend architectures</li>
                <li>Implement UI/UX designs with precision</li>
                <li>Optimize web performance and accessibility</li>
                <li>Collaborate with cross-functional teams to deliver solutions</li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;