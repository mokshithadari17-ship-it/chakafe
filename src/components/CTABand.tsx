import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, MapPin } from "lucide-react";

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }} className={className}>
      {children}
    </motion.div>
  );
}

export default function CTABand() {
  return (
    <section className="relative py-28 overflow-hidden" style={{ background: "linear-gradient(135deg, hsl(var(--gold) / 0.08) 0%, transparent 50%)" }}>
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 50%, hsl(var(--gold) / 0.06) 0%, transparent 70%)" }} />
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <Reveal><div className="cat-pill">One More Cup?</div></Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-serif text-6xl md:text-7xl font-black leading-tight mb-6">
            Your Next Cup is<br /><em className="text-primary">Waiting at Vizag</em>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
            Walk in, breathe in the aroma, and let our chai reset your day. No delivery, no middleman — just the most honest cup in <strong className="text-foreground">Chinna Waltair</strong>.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="tel:+919704660404" className="cta-primary text-lg px-10 py-5" style={{ boxShadow: "0 0 50px hsl(var(--gold) / 0.25)" }}>
              <Phone size={18} /> CALL TO CHECK WAIT
            </a>
            <a href="https://wa.me/919704660404?text=Hi%20Cha%20Kafe!%20I%27d%20like%20to%20visit." target="_blank" rel="noopener" className="cta-primary text-lg px-10 py-5" style={{ background: "hsl(142 70% 45%)", boxShadow: "0 0 50px hsl(142 70% 45% / 0.25)" }}>
              💬 WHATSAPP US
            </a>
            <a href="https://www.google.com/maps/dir/?api=1&destination=Cha+Kafe+Chinna+Waltair+Visakhapatnam&destination_place_id=ChIJJfiuuPlDOToRNJULM98N8eA" target="_blank" rel="noopener noreferrer" onClick={(e) => { e.preventDefault(); window.open('https://www.google.com/maps/dir/?api=1&destination=Cha+Kafe+Chinna+Waltair+Visakhapatnam&destination_place_id=ChIJJfiuuPlDOToRNJULM98N8eA', '_blank'); }} className="cta-secondary text-lg px-10 py-5">
              <MapPin size={18} /> GET DIRECTIONS
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
