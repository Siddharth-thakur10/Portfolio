
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden">
      {/* Background Effects */}
      <div className="hero-blob bg-purple-500 top-1/4 -left-1/3 animate-pulse-slow"></div>
      <div className="hero-blob bg-indigo-600 bottom-1/4 -right-1/3 animate-pulse-slow animation-delay-2000"></div>
      
      {/* Animated Rings/Orbital Illustration */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="w-[500px] h-[500px] border border-portfolio-purple/30 rounded-full"
        />
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute w-[400px] h-[400px] border border-portfolio-purple/40 rounded-full"
        />
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute w-[300px] h-[300px] border border-portfolio-purple/50 rounded-full"
        />
      </div>

      {/* Hero Content */}
      <div className="container relative z-10 px-6 mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-2xl md:text-3xl font-light text-white mb-4"
          >
            Hello, I'm
          </motion.h2>
          
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 text-gradient"
          >
            Siddharth Thakur
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="glass inline-block px-6 py-3 rounded-full mb-10"
          >
            <h3 className="text-xl md:text-2xl text-white">
              Frontend Developer and Ui/Ux Designer
            </h3>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8"
          >
            Creating innovative web solutions with modern technologies.
            Specialized in frontend development with Html,Css, JavaScript, and
            UX/UI design.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a 
              href="#projects" 
              className="glass px-8 py-3 rounded-lg hover:bg-portfolio-purple/30 transition-all duration-300 text-white font-medium"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="glass-dark px-8 py-3 rounded-lg hover:bg-black/50 transition-all duration-300 text-white font-medium"
            >
              Get In Touch
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center">
          <span className="text-gray-400 text-sm mb-2">Scroll Down</span>
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-gray-400 flex justify-center p-1"
          >
            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 bg-portfolio-purple rounded-full"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
