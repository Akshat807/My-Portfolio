import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Frontend Technologies",
      color: "primary",
      skills: ["HTML5", "CSS3", "JavaScript", "React.js"],
    },
    {
      title: "UI Frameworks",
      color: "secondary",
      skills: ["Tailwind CSS", "Material UI"],
    },
    {
      title: "Backend & APIs",
      color: "accent",
      skills: ["RESTful APIs", "MongoDB", "SQL"],
    },
    {
      title: "Programming",
      color: "primary",
      skills: ["C++", "Java (Basic)"],
    },
    {
      title: "Cloud & Tools",
      color: "secondary",
      skills: ["Microsoft Azure", "Git", "GitHub"],
    },
    {
      title: "Core Concepts",
      color: "accent",
      skills: ["DSA", "DBMS", "OOP", "Operating Systems"],
    },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "primary":
        return "border-primary/30 hover:border-primary bg-primary/5 hover:bg-primary/10 text-primary";
      case "secondary":
        return "border-secondary/30 hover:border-secondary bg-secondary/5 hover:bg-secondary/10 text-secondary";
      case "accent":
        return "border-accent/30 hover:border-accent bg-accent/5 hover:bg-accent/10 text-accent";
      default:
        return "border-primary/30 hover:border-primary bg-primary/5 hover:bg-primary/10 text-primary";
    }
  };

  const getTitleColor = (color: string) => {
    switch (color) {
      case "primary":
        return "text-primary";
      case "secondary":
        return "text-secondary";
      case "accent":
        return "text-accent";
      default:
        return "text-primary";
    }
  };

  return (
    <section id="skills" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Technical</span>{' '}
            <span className="text-primary text-glow">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable web applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="glassmorphism rounded-2xl p-6 hover:scale-[1.02] transition-all duration-300"
            >
              <h3 className={`font-display text-lg font-bold mb-4 ${getTitleColor(category.color)}`}>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    className={`px-4 py-2 rounded-full text-sm font-display font-medium border transition-all duration-300 cursor-default ${getColorClasses(category.color)}`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: "DSA Problems", value: "800+", color: "text-primary" },
            { label: "Projects Built", value: "5+", color: "text-secondary" },
            { label: "Technologies", value: "15+", color: "text-accent" },
            { label: "Open Source", value: "GSSoC", color: "text-primary" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05 }}
              className="glassmorphism rounded-xl p-6 text-center animate-pulse-glow"
            >
              <div className={`font-display text-3xl md:text-4xl font-bold ${stat.color} text-glow mb-2`}>
                {stat.value}
              </div>
              <div className="text-muted-foreground text-sm font-display">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
