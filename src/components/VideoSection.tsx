import { motion } from "framer-motion";
import { Play } from "lucide-react";

const VideoSection = () => (
  <section className="max-w-5xl mx-auto px-6 py-24" id="about">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="text-center mb-12"
    >
      <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 text-xs font-bold tracking-widest text-primary uppercase bg-accent rounded-full">
        <Play size={12} /> Featured Video
      </div>
      <h2 className="font-display text-3xl sm:text-4xl font-black text-foreground mb-4">
        Watch: Anti-Ragging Awareness
      </h2>
      <p className="text-muted-foreground max-w-xl mx-auto">
        Understand the impact and the legal consequences of ragging through this powerful awareness video.
      </p>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="relative group"
    >
      <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-2xl blur-lg opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative aspect-video rounded-2xl overflow-hidden bg-foreground/5 border border-border/50" style={{ boxShadow: "var(--shadow-elevated)" }}>
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/lDxcQQ21MKw"
          title="Anti-Ragging Awareness"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="mt-8 glass-card p-8 text-muted-foreground leading-relaxed text-center"
    >
      <p>
        This awareness video highlights that ragging is not a "rite of passage" but a form of systemic
        abuse. It emphasizes that silence is complicity—standing up for your peers is the first step
        toward a civilized campus culture. <strong className="text-foreground">Respect is earned through character, not through intimidation.</strong>
      </p>
    </motion.div>
  </section>
);

export default VideoSection;
