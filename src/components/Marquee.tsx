const items = [
  "UPI ACCEPTED", "✦", "OUTDOOR SEATING", "✦", "FREE STREET PARKING", "✦",
  "MASALA CHAI ₹25", "✦", "CHINNA WALTAIR'S OWN", "✦", "NO DELIVERY", "✦",
  "BEST CHAI IN VIZAG", "✦", "OPEN 9AM TO 9PM", "✦",
];

export default function Marquee() {
  return (
    <div className="py-4 overflow-hidden bg-primary border-y border-gold-dark">
      <div className="flex gap-10 animate-marquee font-black italic text-base text-primary-foreground whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span key={i}>{item}</span>
        ))}
      </div>
    </div>
  );
}
