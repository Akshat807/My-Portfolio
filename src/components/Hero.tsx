import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-block px-6 py-2 rounded-full glassmorphism text-primary font-display text-sm tracking-widest uppercase">
              Full Stack Developer
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-glow"
          >
            <span className="text-foreground">AKSHAT</span>
            <br />
            <span className="text-primary">SRIVASTAVA</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12 font-sans leading-relaxed"
          >
            A Full Stack Developer who builds fast, scalable, and user-focused web applications. 
            I specialize in crafting <span className="text-primary">clean UIs</span>, 
            <span className="text-secondary"> robust backend systems</span>, and 
            <span className="text-accent"> seamless user experiences</span> from concept to deployment.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap gap-4 justify-center mb-16"
          >
            <a
              href="mailto:akshatsrivastava333@gmail.com"
              className="group flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-display font-semibold text-sm tracking-wide transition-all duration-300 hover:scale-105 box-glow"
            >
              <Mail className="w-5 h-5" />
              Get In Touch
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-6 py-3 glassmorphism rounded-lg font-display font-semibold text-sm tracking-wide text-foreground transition-all duration-300 hover:scale-105 hover:border-primary"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-6 py-3 glassmorphism rounded-lg font-display font-semibold text-sm tracking-wide text-foreground transition-all duration-300 hover:scale-105 hover:border-secondary"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex items-center justify-center gap-8 text-muted-foreground text-sm"
          >
            <a href="tel:+919693476411" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              +91 9693476411
            </a>
            <a href="mailto:akshatsrivastava333@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="w-4 h-4" />
              akshatsrivastava333@gmail.com
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-primary cursor-pointer"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
