import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Home, ClipboardList, MapPin, Phone } from "lucide-react";

const MAPS_URL = "https://www.google.com/maps/search/?api=1&query=Cha+Kafe+Visakhapatnam&query_place_id=ChIJJfiuuPlDOToRNJULM98N8eA";

const tabs = [
  { icon: Home, label: "Home", action: "scroll", target: "#" },
  { icon: ClipboardList, label: "Menu", action: "scroll", target: "#menu" },
  { icon: MapPin, label: "Visit", action: "scroll", target: "#visit" },
  { icon: Phone, label: "Call", action: "call", target: "tel:+919704660404" },
] as const;

function haptic() {
  if (navigator.vibrate) navigator.vibrate(10);
}

export default function BottomNav() {
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track active section
  useEffect(() => {
    const sections = ["#", "#menu", "#visit"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id ? `#${entry.target.id}` : "#";
            const idx = sections.indexOf(id);
            if (idx >= 0) setActive(idx);
          }
        });
      },
      { threshold: 0.3 }
    );
    const els = [document.getElementById("menu"), document.getElementById("visit")];
    els.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleTap = (i: number) => {
    haptic();
    const tab = tabs[i];
    if (tab.action === "call") {
      window.location.href = tab.target;
      return;
    }
    setActive(i);
    if (tab.target === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.querySelector(tab.target)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!visible) return null;

  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="fixed bottom-0 left-0 right-0 z-[90] md:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      <div
        className="mx-3 mb-3 rounded-2xl flex items-center justify-around py-2"
        style={{
          background: "hsl(var(--bg-deep) / 0.85)",
          backdropFilter: "blur(20px) saturate(180%)",
          WebkitBackdropFilter: "blur(20px) saturate(180%)",
          border: "1px solid hsl(var(--glass-border))",
          boxShadow: "0 -4px 30px hsl(0 0% 0% / 0.4)",
        }}
      >
        {tabs.map((tab, i) => {
          const isActive = active === i && tab.action !== "call";
          const Icon = tab.icon;
          return (
            <button
              key={tab.label}
              onClick={() => handleTap(i)}
              className="relative flex flex-col items-center gap-0.5 px-4 py-2 outline-none"
            >
              {isActive && (
                <motion.div
                  layoutId="bottomNavGlow"
                  className="absolute inset-0 rounded-xl"
                  style={{ background: "hsl(var(--gold) / 0.12)", boxShadow: "0 0 20px hsl(var(--gold) / 0.15)" }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                />
              )}
              <motion.div
                animate={isActive ? { scale: 1.15 } : { scale: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                <Icon
                  size={20}
                  className="relative z-10"
                  style={{ color: isActive ? "hsl(var(--gold))" : tab.action === "call" ? "hsl(var(--green-status))" : "hsl(var(--muted-foreground))" }}
                />
              </motion.div>
              <span
                className="text-[10px] font-semibold relative z-10"
                style={{ color: isActive ? "hsl(var(--gold))" : tab.action === "call" ? "hsl(var(--green-status))" : "hsl(var(--muted-foreground))" }}
              >
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </motion.nav>
  );
}
