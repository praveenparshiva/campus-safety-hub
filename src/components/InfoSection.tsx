import { ShieldAlert, Scale, HeartCrack, Megaphone } from "lucide-react";

const items = [
  {
    icon: ShieldAlert,
    title: "What is Ragging",
    text: "Ragging includes any act of physical or mental abuse—bullying, exclusion, verbal taunts, or forced acts—targeted at new students, causing fear, shame, or psychological harm.",
  },
  {
    icon: HeartCrack,
    title: "Effects of Ragging",
    text: "Victims suffer severe trauma, depression, anxiety, and loss of self-esteem. In extreme cases, ragging leads students to abandon education or tragically resort to self-harm.",
  },
  {
    icon: Scale,
    title: "Anti-Ragging Laws",
    text: "Under the Supreme Court mandate and UGC regulations, ragging is a cognizable offense. Penalties include expulsion, suspension, FIR registration, and rigorous imprisonment up to 3 years.",
  },
  {
    icon: Megaphone,
    title: "How to Report",
    text: "Report to your institution's Anti-Ragging Committee, call the national helpline 1800-180-5522, or email helpline@antiragging.in. Every college must display complaint mechanisms prominently.",
  },
];

const InfoSection = () => (
  <section className="max-w-6xl mx-auto px-6 py-24 border-t border-border" id="laws">
    <div className="text-center mb-14">
      <h2 className="text-3xl font-extrabold text-foreground mb-4">Know Your Rights</h2>
      <p className="text-muted-foreground max-w-xl mx-auto">
        Understanding ragging, its consequences, and how to fight back is the first step toward a safer campus.
      </p>
    </div>
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {items.map((item) => (
        <div key={item.title} className="glass-card p-6">
          <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center mb-4">
            <item.icon size={20} className="text-primary" />
          </div>
          <h3 className="text-xs font-extrabold uppercase tracking-widest text-primary mb-3">
            {item.title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
        </div>
      ))}
    </div>
  </section>
);

export default InfoSection;
