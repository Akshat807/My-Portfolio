import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Calendar, Layers } from 'lucide-react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Arogyadoot",
      subtitle: "Healthcare Booking Platform",
      period: "Jul'24 - Dec'24",
      description: "A healthcare platform enabling patients to search, filter, and book appointments with doctors and hospitals.",
      highlights: [
        "Designed intuitive UI for patient-doctor booking flow",
        "Integrated dynamic forms for real-time slot availability",
        "Ensured responsive design for desktop and mobile",
      ],
      tech: ["React.js", "JavaScript", "CSS3", "REST API"],
      color: "primary",
    },
    {
      title: "Study Link",
      subtitle: "Student–Mentor Interaction Platform",
      period: "Jun'25 - Dec'25",
      description: "A comprehensive platform connecting students with mentors, featuring authentication and real-time interactions.",
      highlights: [
        "Built reusable React components with state management",
        "Implemented OTP verification and secure authentication",
        "Optimized UI performance and accessibility",
        "Integrated backend APIs for real-time interactions",
      ],
      tech: ["React.js", "HTML5", "CSS3", "JavaScript", "REST API"],
      color: "secondary",
    },
    {
      title: "Smart Utility Management",
      subtitle: "Local Service Provider Platform",
      period: "2024",
      description: "A Smart Utility Management System enabling users to discover, book, and review local service providers seamlessly.",
      highlights: [
        "Developed responsive and user-friendly frontend interfaces with smooth navigation and booking flows",
        "Implemented secure user authentication, role-based access, and real-time service scheduling features",
        "Designed the platform with scalability, performance, and modern UX best practices in mind",
      ],
      tech: ["React.js", "JavaScript", "CSS3", "REST API", "Authentication"],
      color: "primary",
    },
  ];

  return (
    <section id="projects" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Featured</span>{' '}
            <span className="text-accent text-glow">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real-world applications built with modern technologies
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="glassmorphism rounded-2xl p-8 h-full gradient-border hover:scale-[1.02] transition-all duration-500">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Layers className={`w-5 h-5 ${project.color === 'primary' ? 'text-primary' : 'text-secondary'}`} />
                      <h3 className={`font-display text-2xl font-bold ${project.color === 'primary' ? 'text-primary' : 'text-secondary'}`}>
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-foreground font-display">{project.subtitle}</p>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground text-sm">
                    <Calendar className="w-4 h-4" />
                    {project.period}
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-2 mb-6">
                  {project.highlights.map((highlight, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.2 + i * 0.1 }}
                      className="flex items-start gap-3 text-sm text-muted-foreground"
                    >
                      <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${project.color === 'primary' ? 'bg-primary' : 'bg-secondary'}`} />
                      {highlight}
                    </motion.li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 rounded-full text-xs font-display border transition-colors ${
                        project.color === 'primary'
                          ? 'border-primary/30 bg-primary/5 text-primary hover:bg-primary/10'
                          : 'border-secondary/30 bg-secondary/5 text-secondary hover:bg-secondary/10'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
