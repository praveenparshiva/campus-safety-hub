import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "#about", label: "Awareness" },
  { href: "#quiz", label: "Self-Test" },
  { href: "#laws", label: "Legal" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-extrabold text-xl tracking-tight text-foreground uppercase">
          Guardian<span className="text-primary">Protocol</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-muted-foreground">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
          <Button variant="emergency" asChild>
            <a href="#helpline">Emergency</a>
          </Button>
        </div>
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-card border-b border-border"
          >
            <div className="flex flex-col gap-2 px-6 py-4">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="py-2 text-sm font-semibold text-muted-foreground hover:text-primary"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              ))}
              <Button variant="emergency" asChild className="mt-2 w-full justify-center">
                <a href="#helpline" onClick={() => setOpen(false)}>Emergency</a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
