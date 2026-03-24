export default function Footer() {
  return (
    <footer className="border-t border-foreground/[0.09] px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--primary-foreground))" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
                  <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
                  <line x1="6" y1="1" x2="6" y2="4" /><line x1="10" y1="1" x2="10" y2="4" /><line x1="14" y1="1" x2="14" y2="4" />
                </svg>
              </div>
              <span className="font-serif text-xl font-bold">Cha <span className="text-primary italic">Kafe</span></span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Visakhapatnam's favourite artisan chai spot. Brewing happiness at Chinna Waltair since day one.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-4 text-sm uppercase tracking-widest">Quick Info</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>📍 Opp. Prince Apartments, Chinna Waltair Main Rd</li>
              <li>🏫 Next to GVMC School</li>
              <li>🕌 Near Masjid</li>
              <li>📮 Visakhapatnam, 530017</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-4 text-sm uppercase tracking-widest">Hours</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li className="flex justify-between max-w-xs"><span>Mon – Sat</span><span className="text-foreground font-semibold">9:00 AM – 9:00 PM</span></li>
              <li className="flex justify-between max-w-xs"><span>Sunday</span><span className="text-foreground font-semibold">3:00 PM – 9:00 PM</span></li>
              <li className="flex justify-between max-w-xs"><span>Payment</span><span className="text-primary font-semibold">UPI · GPay · Cash</span></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-foreground/[0.09] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground/50 text-xs">© 2025 Cha Kafe, Visakhapatnam. All rights reserved.</p>
          <p className="text-primary/30 text-xs font-black tracking-[0.6em] uppercase">Chai Kafe · Vizag · 530017</p>
        </div>
      </div>
    </footer>
  );
}
