import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useOpenStatus } from "@/hooks/useOpenStatus";

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }} className={className}>
      {children}
    </motion.div>
  );
}

const perks = [
  { emoji: "🪑", label: "Outdoor Seating" },
  { emoji: "🥡", label: "Takeaway Available" },
  { emoji: "🍵", label: "Dine-in Space" },
  { emoji: "🌿", label: "Healthy Options" },
  { emoji: "🚗", label: "Free Street Parking" },
  { emoji: "🅿️", label: "Free Lot Parking" },
  { emoji: "🍃", label: "Great Tea Selection (14+)" },
  { emoji: "📱", label: "UPI / GPay / Card" },
];

const nopes = [
  { emoji: "🛵", label: "No Delivery" },
  { emoji: "🚻", label: "No Restrooms" },
  { emoji: "📅", label: "No Reservations" },
];

export default function Amenities() {
  const status = useOpenStatus();

  return (
    <section id="amenities" className="max-w-7xl mx-auto px-6 py-28">
      <div className="mb-16">
        <Reveal><div className="cat-pill">Know Before You Go</div></Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-serif text-5xl md:text-6xl font-black leading-tight">
            What We <em className="text-primary">Offer</em>
          </h2>
        </Reveal>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <Reveal>
          <h3 className="flex items-center gap-3 text-xl font-black text-status-open mb-6 uppercase tracking-wider">
            <span className="w-8 h-8 rounded-full bg-status-open/10 flex items-center justify-center text-base">✅</span>
            The Perks
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {perks.map((p) => (
              <div key={p.label} className="perk-badge">
                <span className="text-status-open text-lg">{p.emoji}</span>
                <span>{p.label}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <h3 className="flex items-center gap-3 text-xl font-black text-status-closed mb-6 uppercase tracking-wider">
            <span className="w-8 h-8 rounded-full bg-status-closed/10 flex items-center justify-center text-base">⛔</span>
            Not Available
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {nopes.map((n) => (
              <div key={n.label} className="no-perk-badge">
                <span className="text-status-closed text-lg">{n.emoji}</span>
                <span>{n.label}</span>
              </div>
            ))}
          </div>

          {/* Hours card */}
          <div className="bento-card p-8 mt-8" style={{ background: "linear-gradient(135deg, hsl(var(--gold) / 0.06), transparent)" }}>
            <p className="text-primary font-bold text-xs uppercase tracking-widest mb-4">Operating Hours</p>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground font-medium">Monday – Saturday</span>
                <span className="font-black text-foreground">9:00 AM – 9:00 PM</span>
              </div>
              <div className="h-px bg-foreground/5" />
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground font-medium">Sunday</span>
                <span className="font-black text-foreground">3:00 PM – 9:00 PM</span>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-foreground/5 flex items-center gap-3">
              <span className="pulse-ring" style={{
                background: status.isOpen ? "hsl(var(--green-status))" : "hsl(var(--red-status))",
                color: status.isOpen ? "hsl(var(--green-status))" : "hsl(var(--red-status))"
              }} />
              <span className="text-sm font-semibold" style={{ color: status.isOpen ? "hsl(var(--green-status))" : "hsl(var(--red-status))" }}>
                {status.message}
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
