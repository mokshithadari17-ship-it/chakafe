import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useOpenStatus } from "@/hooks/useOpenStatus";
import { Phone, MapPin, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Story", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Amenities", href: "#amenities" },
  { label: "Visit Us", href: "#visit" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const status = useOpenStatus();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] px-6 py-5 transition-all duration-400 ${
        scrolled ? "glass-card shadow-lg" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/30">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--primary-foreground))" strokeWidth="2.5" strokeLinecap="round">
              <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
              <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
              <line x1="6" y1="1" x2="6" y2="4" /><line x1="10" y1="1" x2="10" y2="4" /><line x1="14" y1="1" x2="14" y2="4" />
            </svg>
          </div>
          <span className="font-serif text-xl font-bold">
            Cha <span className="text-primary italic">Kafe</span>
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        {/* Status badge */}
        <div className="hidden md:flex items-center gap-2 text-xs font-bold px-3 py-1.5 rounded-full glass-card" style={{ color: status.isOpen ? "hsl(var(--green-status))" : "hsl(var(--red-status))" }}>
          <span className="pulse-ring" style={{ background: status.isOpen ? "hsl(var(--green-status))" : "hsl(var(--red-status))", color: status.isOpen ? "hsl(var(--green-status))" : "hsl(var(--red-status))" }} />
          {status.label}
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-foreground">
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass-card mt-4 rounded-2xl p-6 flex flex-col gap-4"
        >
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setMobileOpen(false)} className="text-foreground font-medium text-lg">
              {l.label}
            </a>
          ))}
          <div className="flex gap-3 mt-2">
            <a href="tel:+919704660404" className="cta-primary text-sm px-4 py-2">
              <Phone size={14} /> Call
            </a>
            <a href="https://wa.me/919704660404?text=Hi%20Cha%20Kafe!" target="_blank" rel="noopener" className="cta-primary text-sm px-4 py-2" style={{ background: "hsl(142 70% 45%)" }}>
              💬 WhatsApp
            </a>
            <a href="https://www.google.com/maps/search/?api=1&query=Cha+Kafe+Visakhapatnam&query_place_id=ChIJJfiuuPlDOToRNJULM98N8eA" target="_blank" rel="noopener noreferrer" onClick={(e) => { e.preventDefault(); window.open('https://www.google.com/maps/search/?api=1&query=Cha+Kafe+Visakhapatnam&query_place_id=ChIJJfiuuPlDOToRNJULM98N8eA', '_blank'); }} className="cta-secondary text-sm px-4 py-2">
              <MapPin size={14} /> Directions
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
