import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Play, BookOpen, Heart, Users, ShieldCheck } from "lucide-react";

const floatingIcons = [
  { Icon: Heart, className: "top-20 left-[10%] animate-float", size: 20 },
  { Icon: Users, className: "top-40 right-[12%] animate-float-delayed", size: 24 },
  { Icon: ShieldCheck, className: "bottom-20 left-[15%] animate-float-delayed", size: 22 },
];

const HeroSection = () => (
  <header className="relative overflow-hidden">
    {/* Dark gradient background */}
    <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
    
    {/* Decorative blobs */}
    <div className="floating-dot w-96 h-96 bg-primary top-[-10%] right-[-5%]" />
    <div className="floating-dot w-80 h-80 bg-secondary bottom-[-10%] left-[-5%]" />
    
    {/* Floating icons */}
    {floatingIcons.map(({ Icon, className, size }, i) => (
      <div key={i} className={`absolute ${className} hidden lg:block`}>
        <div className="w-12 h-12 rounded-xl bg-card/10 backdrop-blur-sm flex items-center justify-center border border-card/20">
          <Icon size={size} className="text-primary-foreground/60" />
        </div>
      </div>
    ))}

    <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-28 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 px-5 py-2 mb-8 text-xs font-bold tracking-widest text-primary-foreground/90 uppercase bg-primary-foreground/10 backdrop-blur-sm rounded-full border border-primary-foreground/20"
      >
        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
        Zero Tolerance Policy
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="font-display text-[clamp(2.2rem,5.5vw,4.5rem)] font-black text-primary-foreground mb-6 tracking-tight text-balance leading-[1.08]"
      >
        Say No to Ragging –
        <br />
        <span className="bg-gradient-to-r from-primary-glow to-primary bg-clip-text text-transparent">
          Build a Safe Campus
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="max-w-2xl mx-auto text-lg text-primary-foreground/70 leading-relaxed mb-12"
      >
        Ragging is a violation of human rights and a criminal offense. This portal empowers students
        to understand their rights, take action, and build campuses rooted in respect and equality.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <Button variant="hero" asChild>
          <a href="#about" className="gap-2">
            <Play size={18} /> Watch Awareness Video
          </a>
        </Button>
        <Button variant="hero-outline" asChild>
          <a href="#quiz" className="gap-2">
            <BookOpen size={18} /> Take the Quiz
          </a>
        </Button>
      </motion.div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.55 }}
        className="mt-16 flex flex-wrap justify-center gap-8 sm:gap-16"
      >
        {[
          { value: "1800+", label: "Institutions Covered" },
          { value: "24/7", label: "Helpline Active" },
          { value: "100%", label: "Confidential" },
        ].map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-2xl sm:text-3xl font-black text-primary-foreground">{stat.value}</p>
            <p className="text-xs text-primary-foreground/50 font-medium uppercase tracking-wider mt-1">
              {stat.label}
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  </header>
);

export default HeroSection;
