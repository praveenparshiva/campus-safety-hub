import { Shield, Heart } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border">
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="flex flex-col items-center gap-6 text-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center">
            <Shield size={16} className="text-primary-foreground" />
          </div>
          <span className="font-display font-extrabold text-lg text-foreground">
            SayNoTo<span className="text-primary">Ragging</span>
          </span>
        </div>
        <p className="text-muted-foreground font-semibold italic text-lg max-w-md">
          "Say NO to Ragging – Build Respectful Campuses."
        </p>
        <div className="section-divider max-w-xs" />
        <p className="text-muted-foreground/50 text-xs uppercase tracking-widest flex items-center gap-1">
          Made with <Heart size={10} className="text-primary" /> for safer
          campuses · © {new Date().getFullYear()}
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
