import { motion } from "framer-motion";
import { Phone, Mail, ShieldCheck } from "lucide-react";

const HelplineSection = () => (
  <section className="max-w-6xl mx-auto px-6 py-24" id="helpline">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="relative rounded-3xl overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-primary/15 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 -ml-12 -mb-12 w-48 h-48 bg-secondary/15 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="relative z-10 p-8 sm:p-14 text-center">
        <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center border border-primary-foreground/20">
          <ShieldCheck size={28} className="text-primary-foreground" />
        </div>

        <h2 className="font-display text-3xl sm:text-4xl font-black text-primary-foreground mb-3">
          Need Immediate Assistance?
        </h2>
        <p className="text-primary-foreground/60 mb-10 max-w-lg mx-auto">
          Don't suffer in silence. Reach out now — all calls are confidential and toll-free.
        </p>

        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          <a
            href="tel:18001805522"
            className="group flex items-center gap-4 px-8 py-5 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 hover:bg-primary-foreground/20 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center group-hover:scale-110 transition-transform">
              <Phone size={20} className="text-primary-foreground" />
            </div>
            <div className="text-left">
              <p className="text-primary-foreground/60 text-xs uppercase tracking-widest font-semibold">
                Toll-Free Helpline
              </p>
              <p className="text-xl sm:text-2xl font-black text-primary-foreground tabular-nums">
                1800-180-5522
              </p>
            </div>
          </a>

          <div className="w-px h-12 bg-primary-foreground/20 hidden md:block" />

          <a
            href="mailto:helpline@antiragging.in"
            className="group flex items-center gap-4 px-8 py-5 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 hover:bg-primary-foreground/20 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center group-hover:scale-110 transition-transform">
              <Mail size={20} className="text-secondary-foreground" />
            </div>
            <div className="text-left">
              <p className="text-primary-foreground/60 text-xs uppercase tracking-widest font-semibold">
                Official Email
              </p>
              <p className="text-lg sm:text-xl font-black text-primary-foreground break-all">
                helpline@antiragging.in
              </p>
            </div>
          </a>
        </div>
      </div>
    </motion.div>
  </section>
);

export default HelplineSection;
