import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Camera, ChevronLeft, ChevronRight, X, ExternalLink } from "lucide-react";
import shopPhoto from "@/assets/shop-photo.png";
import kesarTea from "@/assets/shop-kesar-tea.png";
import chaiBiscuits from "@/assets/photo-chai-biscuits.jpg";
import purpleTea from "@/assets/photo-purple-tea.jpg";

const photos = [
  { src: shopPhoto, alt: "Chai & Masala Bun at Cha Kafe", title: "Chai & Masala Bun", desc: "Our signature combo" },
  { src: kesarTea, alt: "Kesar Elaichi Tea at Cha Kafe", title: "Kesar Elaichi Tea", desc: "Customer favourite" },
  { src: chaiBiscuits, alt: "Chai with biscuits & snacks at Cha Kafe", title: "Chai & Biscuits", desc: "Perfect evening snack" },
  { src: purpleTea, alt: "Butterfly Pea Tea at Cha Kafe", title: "Butterfly Pea Tea", desc: "Signature special" },
];

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }} className={className}>
      {children}
    </motion.div>
  );
}

function Lightbox({ photos, index, onClose, onNav }: { photos: typeof import("*.jpg")[]; index: number; onClose: () => void; onNav: (i: number) => void }) {
  const photo = (photos as any)[index] as (typeof photos)[number];
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm"
        onClick={onClose}
      >
        <button onClick={onClose} className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
          <X size={20} />
        </button>

        {index > 0 && (
          <button
            onClick={(e) => { e.stopPropagation(); onNav(index - 1); }}
            className="absolute left-4 z-10 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
        )}

        {index < photos.length - 1 && (
          <button
            onClick={(e) => { e.stopPropagation(); onNav(index + 1); }}
            className="absolute right-4 z-10 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            <ChevronRight size={20} />
          </button>
        )}

        <motion.img
          key={index}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
          src={(photo as any).src}
          alt={(photo as any).alt}
          className="max-w-[90vw] max-h-[85vh] object-contain rounded-xl"
          onClick={(e) => e.stopPropagation()}
        />

        <div className="absolute bottom-6 text-center text-white">
          <p className="font-bold text-sm">{(photo as any).title}</p>
          <p className="text-xs text-white/60">{index + 1} / {photos.length}</p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Visit() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

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

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-16">
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
          <a href="https://maps.app.goo.gl/YourRealGoogleMapsLink" target="_blank" rel="noopener" className="cta-primary mt-8 justify-center">
            <MapPin size={16} /> OPEN IN GOOGLE MAPS
          </a>
        </Reveal>

        {/* Map */}
        <Reveal className="bento-card lg:col-span-3 p-0 min-h-[400px] overflow-hidden" delay={0.1}>
          <div className="w-full h-full relative min-h-[400px]">
            <a href="https://maps.app.goo.gl/YourRealGoogleMapsLink" target="_blank" rel="noopener"
              className="w-full h-full min-h-[400px] flex flex-col items-center justify-center gap-4 bg-muted/30 hover:bg-muted/50 transition-colors cursor-pointer">
              <MapPin className="text-primary" size={48} />
              <p className="font-serif text-2xl font-bold text-foreground">View on Google Maps</p>
              <p className="text-muted-foreground text-sm">Tap to open directions in Google Maps</p>
            </a>
            <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to top, hsl(var(--background) / 0.4) 0%, transparent 30%)" }} />
          </div>
        </Reveal>
      </div>

      {/* Real Photos Gallery */}
      <Reveal delay={0.2}>
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
            <Camera className="text-primary" size={18} />
          </div>
          <div>
            <h3 className="font-serif text-2xl font-bold text-foreground">Real Photos</h3>
            <p className="text-muted-foreground text-sm">Tap to view · Straight from Cha Kafe</p>
          </div>
        </div>
      </Reveal>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {photos.map((photo, i) => (
          <Reveal key={i} delay={0.2 + i * 0.08}>
            <button
              onClick={() => setLightboxIndex(i)}
              className="bento-card p-0 overflow-hidden group w-full text-left cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-2xl"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-[220px] sm:h-[260px] object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="p-3">
                <p className="font-bold text-foreground text-xs">{photo.title}</p>
                <p className="text-[11px] text-muted-foreground">{photo.desc}</p>
              </div>
            </button>
          </Reveal>
        ))}
      </div>

      {/* Google Maps CTA */}
      <Reveal delay={0.5}>
        <div className="mt-8 text-center">
          <a
            href="https://maps.app.goo.gl/YourRealGoogleMapsLink"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-primary font-semibold hover:underline underline-offset-4 transition-colors"
          >
            <ExternalLink size={14} />
            Check out Cha Kafe on Google Maps for more pictures
          </a>
        </div>
      </Reveal>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          photos={photos as any}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNav={(i) => setLightboxIndex(i)}
        />
      )}
    </section>
  );
}
