"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function BackgroundShapes() {
  const { scrollY } = useScroll();

  // Movimento continuo (non normalizzato 0-1)
  const yLeft = useTransform(scrollY, (value) => value * -0.15);
  const yRight = useTransform(scrollY, (value) => value * 0.15);

  // Leggera deformazione continua
  const skewLeft = useTransform(
    scrollY,
    (value) => Math.sin(value * 0.002) * 8,
  );

  const skewRight = useTransform(
    scrollY,
    (value) => Math.sin(value * 0.002) * -8,
  );

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* LEFT */}
      <motion.div
        style={{ y: yLeft, skewY: skewLeft }}
        className="fixed top-0 left-0 h-[120vh] w-96"
      >
        <svg
          viewBox="0 0 300 1000"
          preserveAspectRatio="none"
          width="100%"
          height="100%"
        >
          <path
            d="M 0 0 C 200 80 280 120 220 300 C 180 450 80 550 100 700 C 130 850 50 950 0 1000 L 0 0"
            fill="#b6752fb5"
          />
        </svg>
      </motion.div>

      {/* RIGHT */}
      <motion.div
        style={{ y: yRight, skewY: skewRight }}
        className="fixed top-0 right-0 h-[120vh] w-96"
      >
        <svg
          viewBox="0 0 300 1000"
          preserveAspectRatio="none"
          width="100%"
          height="100%"
        >
          <path
            d="M 300 0 C 100 80 20 120 80 300 C 120 450 220 550 200 700 C 170 850 250 950 300 1000 L 300 0"
            fill="#b6752fb5"
          />
        </svg>
      </motion.div>
    </div>
  );
}
