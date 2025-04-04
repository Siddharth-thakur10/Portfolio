
import { useState } from 'react';
import { motion } from 'framer-motion';
import visitingCard from '../Assets/images/visting-card2.png';
import hpsetu from '../Assets/images/hpsetu.png';
import elogbook from '../Assets/images/elogbook.png';

const projects = [
  {
    id: 1,
    title: "e-Logbook",
    category: "Web Development",
    description: "The e-LogBook is a digital log management system built with HTML,CSS,Bootstrap, PHP and SQL, enabling seamless record-keeping, automation, and real-time tracking.",
    technologies: ["HTML", "CSS", "JavaScript ","Bootstarp", "Figma","PHP","Sql"],
    additionalPoints: [
      "The e-LogBook project digitalizes manual log entries, enhancing efficiency and accuracy in infrastructure record-keeping. ",
      "It allows users to create, track, and manage logs seamlessly while providing real-time data access. ",
      " The system includes features like form submission, status tracking, history logs, and a dashboard for analytics.",
      "Automated tracking streamline approvals , reducing paperwork and human errors.",
      "The project ensures compliance, transparency, and easy accessibility for all stakeholders."
    ],

    


    imagePath: elogbook



  },
  {
    id: 2,
    title: "HP Setu",
    category: "Intranet Portal Website",
    description: "HPSetu is an internal company portal built for employees to access essential information and tools in one place. It enhances communication, coordination, and daily operations within the organization.",
    technologies: ["Frontend: HTML, CSS, JavaScript", "Backend/Logic: PowerApps, Power Automate (for workflows)", " Database: SharePoint Lists & Libraries", "Hosting: SharePoint (intranet site)"],
    additionalPoints: [
      "View upcoming events and browse through photo galleries",
      "Access canteen menus, important forms, and user manuals",
      "Monitor meeting room availability and status in real-time",
      "Quick links to frequently used internal tools and services",
      "Designed for a user-friendly intranet experience for all employees"
    ],

    imagePath: hpsetu


  },
  {
    id: 3,
    title: "e-Visiting Card",
    category: "Ui/Ux and Development",
    description: "The E-Visiting Card Project is a responsive digital business card platform developed using HTML, CSS, JavaScript, PHP and SQL, . It allows users to share their contact information seamlessly. With QR code integration, users can instantly share their digital cards, eliminating the need for physical ones. The platform emphasizes user convenience, security, and sustainability, offering a modern approach to professional networking.",
    technologies: ["Frontend: HTML, CSS, JavaScript (with Bootstrap for responsive design)", "Backend: PHP, SQL (for data storage and management).js"],
    additionalPoints: [
      "Digital Business Cards: Created and customized professional digital visiting cards.",
      "QR Code Integration: Easily share contact details with a quick scan.",
      "User-Friendly Interface: Simple and intuitive design for easy card creation.",
      "Secure Data Storage: Store and manage card details in a secure database.",
      "Eco-Friendly & Cost-Effective: Eliminates the need for printed cards, promoting sustainability."
    ],


    imagePath: visitingCard


  }
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState(projects[0]);

  return (
    <section id="projects" className="relative py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="hero-blob bg-blue-600/20 -right-1/4 bottom-1/3 animate-pulse-slow"></div>
      
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Dive into my notable projects that showcase my technical skills and creative problem-solving approach.
          </p>
        </motion.div>

        {/* Project Selection Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {projects.map((project) => (
            <motion.button
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              onClick={() => setActiveProject(project)}
              className={`px-5 py-2.5 rounded-full transition-all duration-300 ${
                activeProject.id === project.id 
                  ? 'bg-portfolio-purple text-white' 
                  : 'glass hover:bg-white/20 text-white'
              }`}
            >
              {project.title}
            </motion.button>
          ))}
        </div>
        
        {/* Selected Project Display */}
        <motion.div 
          key={activeProject.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="glass overflow-hidden rounded-2xl"
        >
          <div className="grid md:grid-cols-2 gap-6">
            {/* Project Image */}
            <div className="relative h-64 md:h-full overflow-hidden">
              <img 
                src={activeProject.imagePath} 
                alt={activeProject.title} 
                className="object-cover w-full h-full transition-transform duration-700 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <span className="bg-portfolio-purple/80 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {activeProject.category}
                </span>
              </div>
            </div>
            
            {/* Project Info */}
            <div className="p-6 md:p-8">
              <h3 className="text-2xl font-bold text-white mb-3">{activeProject.title}</h3>
              <p className="text-gray-300 mb-4">{activeProject.description}</p>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-2">Key Features</h4>
                <ul className="text-gray-300 space-y-2">
                  {activeProject.additionalPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="mt-1.5 min-w-1.5 h-1.5 rounded-full bg-portfolio-purple"></div>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {activeProject.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="bg-white/10 text-white text-xs px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
