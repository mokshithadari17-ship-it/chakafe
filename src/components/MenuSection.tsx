import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import teaPourImg from "@/assets/tea-pour.jpg";
import hibiscusImg from "@/assets/hibiscus-tea.jpg";

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }} className={className}>
      {children}
    </motion.div>
  );
}

function MenuRow({ name, price }: { name: string; price: string }) {
  return (
    <div className="menu-row">
      <span>{name}</span>
      <span className="font-bold text-primary text-sm">{price}</span>
    </div>
  );
}

const snacks = [
  { emoji: "🥐", name: "Osmania Biscuits", desc: "Hyderabadi classic" },
  { emoji: "🥟", name: "Samosas", desc: "Hot & crispy" },
  { emoji: "🍟", name: "French Fries", desc: "Salted & masala" },
  { emoji: "🍜", name: "Maggi", desc: "Masala magic" },
  { emoji: "🧇", name: "Waffles", desc: "Sweet cravings" },
  { emoji: "🍞", name: "Bun Maska", desc: "Irani style" },
];

export default function MenuSection() {
  return (
    <section id="menu" className="max-w-7xl mx-auto px-6 py-28">
      <div className="mb-16">
        <Reveal><div className="cat-pill">Full Menu</div></Reveal>
        <div className="flex flex-col md:flex-row justify-between items-end gap-4">
          <Reveal delay={0.1}>
            <h2 className="font-serif text-5xl md:text-6xl font-black leading-tight">
              The Daily <em className="text-primary">Pour</em>
            </h2>
          </Reveal>
          <Reveal>
            <p className="text-muted-foreground text-sm uppercase tracking-widest font-semibold">Prices as verified from shop board</p>
          </Reveal>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
        {/* Best seller */}
        <Reveal className="bento-card md:col-span-5 p-10 flex flex-col justify-between" delay={0}>
          <div>
            <span className="cat-pill">⭐ Best Seller</span>
            <h3 className="font-serif text-4xl font-black mb-3 text-foreground">Cha Kafe<br />Special Tea</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">Our house signature — a meticulously balanced blend of tea, milk, and secret spices. The cup that keeps Chinna Waltair running.</p>
          </div>
          <div className="mt-8">
            <span className="font-display text-6xl font-black text-primary">₹20</span>
            <p className="text-muted-foreground text-xs mt-1 uppercase tracking-widest">Per cup</p>
          </div>
        </Reveal>

        {/* Signature milk teas */}
        <Reveal className="bento-card md:col-span-4 p-8" delay={0.1}>
          <div className="cat-pill">Signature Milk Teas</div>
          <MenuRow name="Masala Tea" price="₹25" />
          <MenuRow name="Ginger Tea" price="₹25" />
          <MenuRow name="Cardamom Tea" price="₹20" />
          <MenuRow name="Filter Coffee" price="₹20" />
          <MenuRow name="Miriyala Palu with Bellam" price="₹25" />
        </Reveal>

        {/* Image */}
        <Reveal className="bento-card md:col-span-3 p-0 min-h-[280px]" delay={0.2}>
          <img src={teaPourImg} alt="Masala chai being poured" className="w-full h-full object-cover" loading="lazy" width={640} height={640} />
        </Reveal>

        {/* Healthy */}
        <Reveal className="bento-card md:col-span-4 p-8" delay={0.1}>
          <div className="cat-pill" style={{ background: "hsl(142 71% 65% / 0.08)", borderColor: "hsl(142 71% 65% / 0.2)", color: "hsl(var(--green-status))" }}>Healthy & Heritage</div>
          <MenuRow name="Honey Lemon Tea" price="₹20" />
          <MenuRow name="Black Tea" price="₹15" />
          <MenuRow name="Tulsi Green Tea" price="₹50" />
          <MenuRow name="Detox Tea" price="₹40" />
          <MenuRow name="Hibiscus Tea" price="₹60" />
          <MenuRow name="Black Ginger Tea" price="₹20" />
        </Reveal>

        {/* Coolers */}
        <Reveal className="bento-card md:col-span-4 p-8" delay={0.2}>
          <div className="cat-pill" style={{ background: "hsl(199 92% 74% / 0.08)", borderColor: "hsl(199 92% 74% / 0.2)", color: "hsl(199 92% 74%)" }}>Coolers & Indulgence</div>
          <MenuRow name="Rose Milk" price="₹50" />
          <MenuRow name="Badam Milk" price="₹20" />
          <MenuRow name="Cold Coffee" price="₹70" />
          <MenuRow name="Iced Lemon Tea" price="₹40" />
        </Reveal>

        {/* Image 2 */}
        <Reveal className="bento-card md:col-span-4 p-0 min-h-[220px]" delay={0.3}>
          <img src={hibiscusImg} alt="Hibiscus tea" className="w-full h-full object-cover" loading="lazy" width={640} height={640} />
        </Reveal>

        {/* Quick bites */}
        <Reveal className="bento-card md:col-span-12 p-10" delay={0}>
          <div className="mb-6">
            <div className="cat-pill" style={{ background: "hsl(25 95% 53% / 0.1)", borderColor: "hsl(25 95% 53% / 0.25)", color: "hsl(25 95% 53%)" }}>Quick Bites</div>
            <h3 className="font-serif text-3xl font-bold text-foreground">Something to munch on</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {snacks.map((s) => (
              <div key={s.name} className="glass-card rounded-2xl p-5 text-center hover:border-primary/40 transition-colors">
                <div className="text-3xl mb-2">{s.emoji}</div>
                <p className="font-bold text-foreground text-sm">{s.name}</p>
                <p className="text-muted-foreground text-xs mt-1">{s.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
