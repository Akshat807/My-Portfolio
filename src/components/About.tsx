import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const education = [
    {
      institution: "Technocrats Institute of Technology",
      location: "Bhopal, M.P",
      degree: "B.Tech CSE",
      year: "2022 - 2026",
      grade: "CGPA: 7.0 (Till 6th Sem)",
    },
    {
      institution: "Mahabiri Saraswati Vidya Mandir",
      location: "Siwan",
      degree: "CBSE Class XII",
      year: "2019 - 2021",
      grade: "Aggregate: 64.6%",
    },
    {
      institution: "A.N.D. Public School",
      location: "Chhapra",
      degree: "CBSE Class X",
      year: "2018 - 2019",
      grade: "Aggregate: 77.4%",
    },
  ];

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary text-glow">About</span>{' '}
            <span className="text-foreground">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I design and develop modern web experiences that are fast, scalable, and user-centric. 
            As a Full Stack Developer, I bridge the gap between elegant frontend design and powerful backend logic.
          </p>
        </motion.div>

        <div className="flex justify-center">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl w-full"
          >
            <div className="flex items-center gap-3 mb-8 justify-center">
              <div className="p-3 rounded-lg bg-primary/10 text-primary">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground">Education</h3>
            </div>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="relative pl-6 border-l-2 border-primary/30 hover:border-primary transition-colors"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary/20 border-2 border-primary" />
                  <div className="glassmorphism rounded-xl p-5">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-display font-semibold text-foreground">{edu.institution}</h4>
                      <span className="text-xs text-primary font-display">{edu.year}</span>
                    </div>
                    <p className="text-muted-foreground text-sm mb-1">{edu.degree}</p>
                    <p className="text-secondary text-sm font-semibold">{edu.grade}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
