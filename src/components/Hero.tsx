import { motion } from "framer-motion";
import { useOpenStatus } from "@/hooks/useOpenStatus";
import { Phone, MapPin, ClipboardList } from "lucide-react";
import heroImg from "@/assets/hero-chai.jpg";

export default function Hero() {
  const status = useOpenStatus();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden noise-bg"
      style={{ background: "radial-gradient(ellipse at 60% 20%, hsl(var(--gold) / 0.07) 0%, transparent 60%), hsl(var(--background))" }}>
      
      {/* Glow orbs */}
      <div className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(var(--gold) / 0.08) 0%, transparent 70%)" }} />
      <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 w-[700px] h-[700px] rounded-full pointer-events-none opacity-50"
        style={{ background: "radial-gradient(circle, hsl(var(--gold) / 0.08) 0%, transparent 70%)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left copy */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-semibold mb-8"
            style={{ color: status.isOpen ? "hsl(var(--green-status))" : "hsl(var(--red-status))" }}
          >
            <span className="pulse-ring" style={{
              background: status.isOpen ? "hsl(var(--green-status))" : "hsl(var(--red-status))",
              color: status.isOpen ? "hsl(var(--green-status))" : "hsl(var(--red-status))"
            }} />
            {status.message}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="font-serif text-6xl md:text-7xl xl:text-8xl leading-[0.95] font-black mb-6"
          >
            <span className="text-foreground">Vizag's</span><br />
            <span className="text-primary italic">Finest</span><br />
            <span className="text-foreground">Chai.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-md"
          >
            Hand-crafted teas brewed fresh every morning at <strong className="text-foreground">Chinna Waltair</strong> — opposite <strong className="text-foreground">Prince Apartments</strong>, beside <strong className="text-foreground">GVMC School</strong>. A Vizag ritual since day one.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-3 mb-10"
          >
            <a href="tel:+919704660404" className="cta-primary">
              <Phone size={17} /> CALL NOW
            </a>
            <a href="https://wa.me/919704660404?text=Hi%20Cha%20Kafe!%20I%27d%20like%20to%20know%20more." target="_blank" rel="noopener" className="cta-secondary" style={{ color: "hsl(142 70% 45%)" }}>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WHATSAPP
            </a>
            <a href="https://maps.app.goo.gl/YourRealGoogleMapsLink" target="_blank" rel="noopener" className="cta-secondary">
              <MapPin size={17} /> GET DIRECTIONS
            </a>
            <a href="#menu" className="cta-secondary">
              <ClipboardList size={17} /> VIEW MENU
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex gap-8"
          >
            <div>
              <div className="stat-num">₹15</div>
              <p className="text-muted-foreground text-xs uppercase tracking-widest">Starting Price</p>
            </div>
            <div className="w-px bg-foreground/10" />
            <div>
              <div className="stat-num">14+</div>
              <p className="text-muted-foreground text-xs uppercase tracking-widest">Tea Varieties</p>
            </div>
            <div className="w-px bg-foreground/10" />
            <div>
              <div className="stat-num">6AM</div>
              <p className="text-muted-foreground text-xs uppercase tracking-widest">Daily Prep Starts</p>
            </div>
          </motion.div>
        </div>

        {/* Right image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative flex justify-center items-center"
        >
          <div className="hero-img-wrap w-full max-w-md">
            <img
              src={heroImg}
              alt="Masala chai in glass cup with spices at Cha Kafe Visakhapatnam"
              className="w-full h-[520px] object-cover"
              width={896}
              height={1152}
            />
          </div>

          <div className="animate-float absolute -top-4 -left-4 md:-left-10 glass-card rounded-2xl px-4 py-3 shadow-2xl text-sm">
            <p className="text-primary font-bold text-xs uppercase tracking-wider mb-1">Best Seller</p>
            <p className="font-bold text-foreground">Cha Kafe Special</p>
            <p className="text-2xl font-black text-primary">₹20</p>
          </div>

          <div className="absolute -bottom-4 -right-4 md:-right-8 glass-card rounded-2xl px-4 py-3 shadow-2xl text-center"
            style={{ animation: "float 4s 1s ease-in-out infinite" }}>
            <p className="text-xs text-muted-foreground mb-1">We accept</p>
            <p className="font-black text-foreground text-base">UPI · GPay · Cash</p>
            <div className="flex justify-center gap-1 mt-1">
              <span className="text-status-open text-xs">✓</span>
              <span className="text-xs text-muted-foreground">All payments welcome</span>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground/50 text-xs uppercase tracking-[0.25em]">
        <span>Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-primary/50 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
