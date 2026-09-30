import React, { useEffect, useRef, useState } from 'react';
import { animate, useInView, useReducedMotion } from 'motion/react';

const AR_DIGITS = '٠١٢٣٤٥٦٧٨٩';
const toWestern = (s: string) => s.replace(/[٠-٩]/g, (d) => String(AR_DIGITS.indexOf(d)));
const toArabic = (s: string) => s.replace(/\d/g, (d) => AR_DIGITS[Number(d)]);

const ordinalSuffix = (n: number) => {
  const v = n % 100;
  if (v >= 11 && v <= 13) return 'th';
  switch (n % 10) {
    case 1: return 'st';
    case 2: return 'nd';
    case 3: return 'rd';
    default: return 'th';
  }
};

interface CountUpProps {
  value: string;
  duration?: number;
  className?: string;
}

export const CountUp: React.FC<CountUpProps> = ({ value, duration = 2.5, className }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduceMotion = useReducedMotion();

  const useArabicDigits = /[٠-٩]/.test(value);
  const match = toWestern(value).match(/^(\D*?)(\d+)(.*)$/);

  const target = match ? parseInt(match[2], 10) : 0;
  const prefix = match ? match[1] : '';
  const suffix = match ? match[3] : '';
  const isOrdinal = /^(st|nd|rd|th)$/i.test(suffix.trim());

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!match) return;
    if (reduceMotion) {
      setCurrent(target);
      return;
    }
    if (!inView) return;

    const controls = animate(0, target, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setCurrent(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, target, duration, reduceMotion, value]);

  // نص بدون أرقام (مثل "الثالث"): يُعرض كما هو
  if (!match) return <span className={className}>{value}</span>;

  const shownSuffix = isOrdinal ? ordinalSuffix(current) : suffix;
  const text = `${prefix}${current}${shownSuffix}`;

  return (
    <span ref={ref} className={`tabular-nums ${className ?? ''}`}>
      {useArabicDigits ? toArabic(text) : text}
    </span>
  );
};