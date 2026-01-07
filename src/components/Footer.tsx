import { motion } from 'framer-motion';
import { Heart, Code2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="font-display text-2xl font-bold text-primary text-glow">
            AS<span className="text-foreground">.</span>
          </div>
          
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-accent fill-accent" />
            <span>and</span>
            <Code2 className="w-4 h-4 text-primary" />
            <span>by Akshat Srivastava</span>
          </div>
          
          <div className="text-muted-foreground text-sm">
            © 2025 All rights reserved
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
