const VideoSection = () => (
  <section className="max-w-4xl mx-auto px-6 py-16" id="about">
    <div className="text-center mb-10">
      <h2 className="text-3xl font-extrabold text-foreground mb-4">Watch: Anti-Ragging Awareness</h2>
      <p className="text-muted-foreground">Understand the impact and the legal consequences of ragging.</p>
    </div>
    <div className="aspect-video rounded-xl overflow-hidden mb-8" style={{ boxShadow: "var(--shadow-card)" }}>
      <iframe
        className="w-full h-full"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        title="Anti-Ragging Awareness"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
    <div className="glass-card p-8 text-muted-foreground leading-relaxed">
      <p>
        This awareness video highlights that ragging is not a "rite of passage" but a form of systemic
        abuse. It emphasizes that silence is complicity—standing up for your peers is the first step
        toward a civilized campus culture. Respect is earned through character, not through intimidation.
      </p>
    </div>
  </section>
);

export default VideoSection;
