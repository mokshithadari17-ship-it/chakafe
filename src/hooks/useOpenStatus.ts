import { useState, useEffect } from "react";

function getISTNow() {
  const now = new Date();
  return new Date(now.getTime() + (330 + now.getTimezoneOffset()) * 60000);
}

function isOpen(ist: Date) {
  const d = ist.getDay(), h = ist.getHours(), m = ist.getMinutes();
  const t = h * 60 + m;
  if (d === 0) return t >= 15 * 60 && t < 21 * 60;
  return t >= 9 * 60 && t < 21 * 60;
}

function getNextOpen(ist: Date) {
  const d = ist.getDay(), h = ist.getHours();
  if (d === 0) {
    if (h < 15) return "today at 3:00 PM";
    return "Monday at 9:00 AM";
  }
  if (h < 9) return "today at 9:00 AM";
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const next = d === 6 ? 0 : d + 1;
  return `${days[next]} at ${next === 0 ? "3:00 PM" : "9:00 AM"}`;
}

export function useOpenStatus() {
  const [status, setStatus] = useState(() => {
    const ist = getISTNow();
    const open = isOpen(ist);
    return {
      isOpen: open,
      message: open ? "🟢 OPEN NOW — Stop by for a Chai!" : `🔴 CLOSED · Opens ${getNextOpen(ist)}`,
      label: open ? "OPEN" : "CLOSED",
    };
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const ist = getISTNow();
      const open = isOpen(ist);
      setStatus({
        isOpen: open,
        message: open ? "🟢 OPEN NOW — Stop by for a Chai!" : `🔴 CLOSED · Opens ${getNextOpen(ist)}`,
        label: open ? "OPEN" : "CLOSED",
      });
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return status;
}
