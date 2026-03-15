import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const HeroSection = () => (
  <header className="max-w-6xl mx-auto px-6 pt-20 pb-16 text-center">
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="inline-block px-4 py-1.5 mb-6 text-xs font-extrabold tracking-widest text-primary uppercase bg-accent rounded-full"
    >
      Zero Tolerance Policy
    </motion.span>
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="text-[clamp(2.5rem,5vw,4.5rem)] font-extrabold text-foreground mb-6 tracking-tighter text-balance leading-[1.05]"
    >
      Stop Ragging.
      <br />
      <span className="text-muted-foreground">Create a Safe Campus.</span>
    </motion.h1>
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed mb-10"
    >
      Ragging is a violation of human rights and a criminal offense. We are committed to
      fostering an environment of respect, equality, and safety for every student.
    </motion.p>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="flex flex-col sm:flex-row gap-4 justify-center"
    >
      <Button variant="hero" asChild>
        <a href="#quiz">Take Awareness Quiz</a>
      </Button>
      <Button variant="hero-outline" asChild>
        <a href="#helpline">Get Help Now</a>
      </Button>
    </motion.div>
  </header>
);

export default HeroSection;
