import { motion } from "framer-motion";
import { ShieldAlert, Scale, HeartCrack, Megaphone } from "lucide-react";

const items = [
  {
    icon: ShieldAlert,
    title: "What is Ragging",
    text: "Ragging includes any act of physical or mental abuse—bullying, exclusion, verbal taunts, or forced acts—targeted at new students, causing fear, shame, or psychological harm.",
    color: "from-primary/10 to-primary/5",
    iconBg: "bg-primary/10 text-primary",
  },
  {
    icon: HeartCrack,
    title: "Effects of Ragging",
    text: "Victims suffer severe trauma, depression, anxiety, and loss of self-esteem. In extreme cases, ragging leads students to abandon education or tragically resort to self-harm.",
    color: "from-destructive/10 to-destructive/5",
    iconBg: "bg-destructive/10 text-destructive",
  },
  {
    icon: Scale,
    title: "Anti-Ragging Laws",
    text: "Under the Supreme Court mandate and UGC regulations, ragging is a cognizable offense. Penalties include expulsion, suspension, FIR registration, and rigorous imprisonment up to 3 years.",
    color: "from-secondary/10 to-secondary/5",
    iconBg: "bg-secondary/10 text-secondary",
  },
  {
    icon: Megaphone,
    title: "How to Report",
    text: "Report to your institution's Anti-Ragging Committee, call the national helpline 1800-180-5522, or email helpline@antiragging.in. Every college must display complaint mechanisms prominently.",
    color: "from-success/10 to-success/5",
    iconBg: "bg-success/10 text-success",
  },
];

const InfoSection = () => (
  <section className="max-w-6xl mx-auto px-6 py-24" id="laws">
    <div className="section-divider mb-24" />

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="text-center mb-14"
    >
      <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 text-xs font-bold tracking-widest text-primary uppercase bg-accent rounded-full">
        <Scale size={12} /> Know the Facts
      </div>
      <h2 className="font-display text-3xl sm:text-4xl font-black text-foreground mb-4">Know Your Rights</h2>
      <p className="text-muted-foreground max-w-xl mx-auto">
        Understanding ragging, its consequences, and how to fight back is the first step toward a safer campus.
      </p>
    </motion.div>

    <div className="grid sm:grid-cols-2 gap-6">
      {items.map((item, i) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="glass-card p-7 group"
        >
          <div className={`w-12 h-12 rounded-xl ${item.iconBg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
            <item.icon size={22} />
          </div>
          <h3 className="font-display text-sm font-extrabold uppercase tracking-widest text-foreground mb-3">
            {item.title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default InfoSection;
