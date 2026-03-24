import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin } from "lucide-react";

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }} className={className}>
      {children}
    </motion.div>
  );
}

export default function Visit() {
  return (
    <section id="visit" className="max-w-7xl mx-auto px-6 py-28">
      <div className="mb-16">
        <Reveal><div className="cat-pill">Find Us</div></Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-serif text-5xl md:text-6xl font-black leading-tight">
            Come Visit <em className="text-primary">Chinna Waltair</em>
          </h2>
        </Reveal>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Address */}
        <Reveal className="bento-card lg:col-span-2 p-10 flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
              <MapPin className="text-primary" size={22} />
            </div>
            <h3 className="font-serif text-3xl font-bold mb-4">Our Address</h3>
            <p className="text-muted-foreground leading-relaxed text-sm">
              Shop No. 1, GVMC School<br />
              Chinna Waltair Main Road<br />
              Near Masjid, Opp. Prince Apartments<br />
              Chinna Waltair, Visakhapatnam<br />
              <strong className="text-foreground">530017, Andhra Pradesh</strong>
            </p>
            <div className="mt-6 p-4 rounded-xl" style={{ background: "hsl(var(--gold) / 0.06)", border: "1px solid hsl(var(--gold) / 0.15)" }}>
              <p className="text-xs text-primary font-bold uppercase tracking-wider mb-1">Landmarks</p>
              <p className="text-sm text-muted-foreground">🏫 Next to GVMC School<br />🕌 Steps from the Masjid<br />🏢 Opposite Prince Apartments</p>
            </div>
          </div>
          <a href="https://maps.app.goo.gl/chakafeVizag" target="_blank" rel="noopener" className="cta-primary mt-8 justify-center">
            <MapPin size={16} /> OPEN IN GOOGLE MAPS
          </a>
        </Reveal>

        {/* Map */}
        <Reveal className="bento-card lg:col-span-3 p-0 min-h-[400px] overflow-hidden" delay={0.1}>
          <div className="w-full h-full relative min-h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3801.5!2d83.3012!3d17.7231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDQzJzIzLjIiTiA4M8KwMTgnMDQuMyJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) saturate(0.7)", minHeight: 400 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Cha Kafe location - Chinna Waltair, Visakhapatnam"
            />
            <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to top, hsl(var(--background) / 0.4) 0%, transparent 30%)" }} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
