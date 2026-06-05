import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useAnimationFrame } from "framer-motion";
import { DecryptingText } from "../components/DecryptingText";
import { Link } from "react-router-dom";

// Floating particle dot
function Particle({ x, y, size, duration, delay }) {
  return (
    <motion.div
      className="absolute rounded-full bg-gray-400/15 pointer-events-none"
      style={{ left: `${x}%`, top: `${y}%`, width: size, height: size }}
      animate={{
        y: [0, -18, 0, 10, 0],
        x: [0, 6, -6, 3, 0],
        opacity: [0.2, 0.5, 0.2],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

const PARTICLES = Array.from({ length: 22 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 6 + 3,
  duration: Math.random() * 6 + 5,
  delay: Math.random() * 4,
}));


const popInLoud = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1.05,
    transition: { type: "spring", stiffness: 500, damping: 20, mass: 0.6 },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.4, ease: "easeIn" },
  },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18, delayChildren: 0.1 } },
  exit: { opacity: 0, y: -20, transition: { ease: "easeIn", duration: 0.5 } },
};

const lineVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { ease: "easeOut", duration: 0.6 } },
};

function Home() {
  const [showChat, setShowChat] = useState(true);
  const [showReply, setShowReply] = useState(false);
  const [showMainContent, setShowMainContent] = useState(false);

  // Animated mesh gradient
  const gradientRef = useRef(null);
  const t = useRef(0);
  useAnimationFrame((time) => {
    t.current = time / 6000;
    if (gradientRef.current) {
      const a = Math.sin(t.current) * 0.5 + 0.5;
      const b = Math.cos(t.current * 0.7) * 0.5 + 0.5;
      gradientRef.current.style.background = `radial-gradient(ellipse at ${30 + a * 40}% ${30 + b * 40}%, #f9fafb 0%, #f3f4f6 50%, #e5e7eb 100%)`;
    }
  });

  useEffect(() => {
    const replyTimer = setTimeout(() => setShowReply(true), 500);
    const introTimer = setTimeout(() => {
      setShowChat(false);
      setShowMainContent(true);
    }, 2500);
    return () => { clearTimeout(replyTimer); clearTimeout(introTimer); };
  }, []);

  return (
    <div ref={gradientRef} className="relative w-full h-screen flex items-center justify-center px-4 text-center overflow-hidden transition-colors duration-1000">

      {/* Floating particles */}
      {PARTICLES.map((p) => (
        <Particle key={p.id} {...p} />
      ))}

      <AnimatePresence mode="wait">
        {showChat && (
          <motion.div
            key="chat"
            className="flex flex-col max-w-md w-full"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={popInLoud}
          >
            <motion.div
              className="rounded-3xl px-8 py-5 max-w-md self-end shadow-lg text-lg"
              style={{
                borderTopRightRadius: 0,
                backgroundColor: "#3B82F6",
                color: "white",
                boxShadow: "0 4px 12px rgba(59, 130, 246, 0.7)",
              }}
              variants={popInLoud}
            >
              Hey!👋 Is this Luigi?
            </motion.div>

            {showReply && (
              <>
                <motion.div
                  className="rounded-3xl px-8 py-5 max-w-md self-start mt-5 shadow-lg text-lg"
                  style={{
                    borderTopLeftRadius: 0,
                    backgroundColor: "#E5E7EB",
                    color: "#374151",
                    boxShadow: "0 4px 12px rgba(209, 213, 219, 0.7)",
                  }}
                  variants={popInLoud}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ delay: 0.5 }}
                >
                  Yes‼️
                </motion.div>

                <motion.div
                  className="rounded-3xl px-8 py-5 max-w-md self-start mt-4 shadow-lg text-lg text-left"
                  style={{
                    borderTopLeftRadius: 0,
                    backgroundColor: "#E5E7EB",
                    color: "#374151",
                    boxShadow: "0 4px 12px rgba(209, 213, 219, 0.7)",
                  }}
                  variants={popInLoud}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ delay: 1.5 }}
                >
                  Come learn more about me and my work!💻
                </motion.div>
              </>
            )}
          </motion.div>
        )}

        {showMainContent && (
          <motion.div
            key="intro"
            className="max-w-4xl w-full flex flex-col items-center"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={containerVariants}
          >
            {/* Staggered heading lines */}
            <div className="mb-8 space-y-1">
              <motion.p
                variants={lineVariants}
                className="md:text-4xl lg:text-5xl sm:text-3xl text-2xl font-light text-foreground leading-snug"
              >
                Hey there! I'm{" "}
                <span className="font-medium text-primary">Luigi</span>.
              </motion.p>

              <motion.p
                variants={lineVariants}
                className="md:text-4xl lg:text-5xl sm:text-3xl text-2xl font-light text-foreground leading-snug"
              >
                I build things for the web as a
              </motion.p>

              <motion.div variants={lineVariants}>
                <DecryptingText
                  text={["Software Engineer", "Web Developer", "Tech Enthusiast"]}
                  speed={50}
                  waitTime={2000}
                  className="md:text-4xl lg:text-5xl sm:text-3xl text-2xl text-orange-500 font-semibold"
                />
              </motion.div>
            </div>

            {/* CTA button */}
            <motion.div variants={lineVariants}>
              <Link
                to="/about"
                className="relative z-50 inline-block px-6 py-3 rounded-full bg-primary text-background font-semibold text-base shadow-lg hover:scale-105 hover:bg-primary/90 transition-transform duration-300 cursor-pointer animate-pulse hover:animate-none"
              >
                Learn more about me →
              </Link>
            </motion.div>

                </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Home;
