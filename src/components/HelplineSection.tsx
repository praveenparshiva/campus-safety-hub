import { Phone, Mail } from "lucide-react";

const HelplineSection = () => (
  <section className="max-w-6xl mx-auto px-6 py-24" id="helpline">
    <div className="bg-foreground rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden">
      <div className="relative z-10">
        <h2 className="text-3xl font-extrabold text-background mb-8">Need Immediate Assistance?</h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          <div className="text-center">
            <p className="text-muted-foreground text-xs uppercase tracking-widest mb-2 flex items-center justify-center gap-2">
              <Phone size={14} /> Toll-Free Helpline
            </p>
            <a
              href="tel:18001805522"
              className="text-2xl sm:text-3xl font-extrabold text-background hover:text-primary transition-colors tabular-nums"
            >
              1800-180-5522
            </a>
          </div>
          <div className="w-px h-12 bg-muted-foreground/30 hidden md:block" />
          <div className="text-center">
            <p className="text-muted-foreground text-xs uppercase tracking-widest mb-2 flex items-center justify-center gap-2">
              <Mail size={14} /> Official Email
            </p>
            <a
              href="mailto:helpline@antiragging.in"
              className="text-xl sm:text-2xl font-extrabold text-background hover:text-primary transition-colors break-all"
            >
              helpline@antiragging.in
            </a>
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-48 h-48 bg-secondary/10 rounded-full blur-3xl" />
    </div>
  </section>
);

export default HelplineSection;
