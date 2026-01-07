import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Phone, Github, Linkedin, Code2, Send } from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const links = [
    {
      icon: Mail,
      label: "Email",
      value: "akshatsrivastava333@gmail.com",
      href: "mailto:akshatsrivastava333@gmail.com",
      color: "primary",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9693476411",
      href: "tel:+919693476411",
      color: "secondary",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/akshat",
      href: "https://github.com",
      color: "accent",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/akshat",
      href: "https://linkedin.com",
      color: "primary",
    },
    {
      icon: Code2,
      label: "CodeChef",
      value: "codechef.com/akshat",
      href: "https://codechef.com",
      color: "secondary",
    },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "primary":
        return "bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground group-hover:shadow-[0_0_30px_hsl(175_100%_50%_/_0.3)]";
      case "secondary":
        return "bg-secondary/10 text-secondary hover:bg-secondary hover:text-secondary-foreground group-hover:shadow-[0_0_30px_hsl(260_80%_60%_/_0.3)]";
      case "accent":
        return "bg-accent/10 text-accent hover:bg-accent hover:text-accent-foreground group-hover:shadow-[0_0_30px_hsl(320_80%_55%_/_0.3)]";
      default:
        return "bg-primary/10 text-primary";
    }
  };

  return (
    <section id="contact" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Get In</span>{' '}
            <span className="text-primary text-glow">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate or discuss opportunities? Let's connect!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {links.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? "_blank" : undefined}
                rel={link.href.startsWith('http') ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group glassmorphism rounded-2xl p-6 flex flex-col items-center text-center transition-all duration-300"
              >
                <div className={`p-4 rounded-xl mb-4 transition-all duration-300 ${getColorClasses(link.color)}`}>
                  <link.icon className="w-6 h-6" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-1">{link.label}</h3>
                <p className="text-muted-foreground text-sm">{link.value}</p>
              </motion.a>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 text-center"
          >
            <a
              href="mailto:akshatsrivastava333@gmail.com"
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-display font-bold text-lg tracking-wide transition-all duration-300 hover:scale-105 box-glow"
            >
              <Send className="w-5 h-5" />
              Let's Work Together
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
