import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import spicesImg from "@/assets/spices.jpg";
import teaPourImg from "@/assets/tea-pour.jpg";
import hibiscusImg from "@/assets/hibiscus-tea.jpg";

function RevealSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="max-w-7xl mx-auto px-6 py-28">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Image grid */}
        <div className="order-2 lg:order-1">
          <div className="grid grid-cols-2 gap-4">
            <div className="bento-card p-0 row-span-2">
              <img src={spicesImg} alt="Fresh ginger and spices for masala chai" className="w-full h-full object-cover min-h-[280px]" loading="lazy" width={640} height={896} />
            </div>
            <div className="bento-card p-0">
              <img src={teaPourImg} alt="Hot tea being poured" className="w-full h-full object-cover min-h-[130px]" loading="lazy" width={640} height={640} />
            </div>
            <div className="bento-card p-0">
              <img src={hibiscusImg} alt="Hibiscus tea" className="w-full h-full object-cover min-h-[130px]" loading="lazy" width={640} height={640} />
            </div>
          </div>
        </div>

        {/* Copy */}
        <div className="order-1 lg:order-2">
          <RevealSection><div className="cat-pill">Our Story</div></RevealSection>
          <RevealSection delay={0.1}>
            <h2 className="font-serif text-5xl md:text-6xl font-black leading-tight mb-6">
              Where Every Cup<br /><em className="text-primary">Tells Vizag</em>
            </h2>
          </RevealSection>
          <RevealSection delay={0.2}>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              Tucked into <strong className="text-foreground">Shop No. 1, beside GVMC School</strong> on Chinna Waltair Main Road, Cha Kafe was born out of one simple belief: that a perfect cup of chai should be accessible to everyone — at ₹15 a cup.
            </p>
          </RevealSection>
          <RevealSection delay={0.3}>
            <p className="text-muted-foreground/70 leading-relaxed mb-8">
              From the morning commuters heading past <strong className="text-foreground">Prince Apartments</strong> to the late-evening regulars who call this neighbourhood home, we've become Chinna Waltair's living room. Every tea — from our signature Miriyala Palu to the vibrant Hibiscus — is crafted with the freshest ingredients and zero shortcuts.
            </p>
          </RevealSection>
          <RevealSection delay={0.4}>
            <div className="flex flex-wrap gap-3">
              <div className="glass-card rounded-xl px-4 py-3 text-sm">📍 Near Masjid, Chinna Waltair</div>
              <div className="glass-card rounded-xl px-4 py-3 text-sm">🕘 Mon–Sat: 9AM – 9PM</div>
              <div className="glass-card rounded-xl px-4 py-3 text-sm">🕒 Sunday: 3PM – 9PM</div>
            </div>
          </RevealSection>
        </div>
      </div>
    </section>
  );
}
