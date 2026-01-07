import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Work</span>{' '}
            <span className="text-secondary text-glow">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional journey in frontend development
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-primary via-secondary to-accent" />
            
            {/* Experience Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative pl-8 md:pl-0 md:pr-8 md:w-1/2"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-auto md:right-0 transform md:translate-x-1/2 w-4 h-4 rounded-full bg-primary box-glow" />
              
              <div className="glassmorphism rounded-2xl p-8 gradient-border hover:scale-[1.02] transition-all duration-300">
                <div className="flex items-center gap-2 text-primary mb-2">
                  <Briefcase className="w-5 h-5" />
                  <span className="font-display font-bold text-lg">Navodita Infotech</span>
                </div>
                
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-display">
                    Front-end Intern
                  </span>
                  <div className="flex items-center gap-1 text-muted-foreground text-sm">
                    <Calendar className="w-4 h-4" />
                    Jul'25 - Aug'25
                  </div>
                </div>
                
                <ul className="space-y-3 text-muted-foreground">
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-2 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    <span>Converted Figma-based UI/UX designs into responsive React.js components using HTML5, CSS3, and JavaScript</span>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-2 w-2 h-2 rounded-full bg-secondary flex-shrink-0" />
                    <span>Integrated RESTful APIs and optimized component rendering, reducing page load time by <span className="text-primary font-semibold">~25%</span></span>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-2 w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                    <span>Improved cross-browser compatibility and mobile responsiveness following modern frontend best practices</span>
                  </motion.li>
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
