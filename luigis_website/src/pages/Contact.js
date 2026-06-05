import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";

import gmail from "../assets/icons/gmail.svg";
import linkedin from "../assets/icons/linkedin.svg";
import github from "../assets/icons/github.svg";
import instagram from "../assets/icons/instagram.svg";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [, setTappedApp] = useState(null);
  const [clockTime, setClockTime] = useState("");
  const [clockDate, setClockDate] = useState("");

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      let h = now.getHours() % 12 || 12;
      const m = String(now.getMinutes()).padStart(2, "0");
      setClockTime(`${h}:${m}`);
      setClockDate(
        now.toLocaleDateString("en-US", {
          weekday: "long",
          month: "long",
          day: "numeric",
        })
      );
    };
    tick();
    const id = setInterval(tick, 30000);
    return () => clearInterval(id);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText("lm03subs@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const apps = [
    {
      icon: gmail,
      name: "Gmail",
      iconBg: "bg-white",
      action: copyEmail,
      isCopy: true,
    },
    {
      icon: linkedin,
      name: "LinkedIn",
      iconBg: "bg-[#0077B5]",
      href: "https://www.linkedin.com/in/luigi-medrano/",
    },
    {
      icon: github,
      name: "GitHub",
      iconBg: "bg-[#24292e]",
      href: "https://github.com/lumedrano",
    },
    {
      icon: instagram,
      name: "Instagram",
      iconBg: "bg-gradient-to-br from-[#f09433] via-[#dc2743] to-[#bc1888]",
      href: "https://instagram.com/luigi_med03",
    },
  ];

  const handleAppTap = (app, idx) => {
    setTappedApp(idx);
    setTimeout(() => setTappedApp(null), 400);
    if (app.isCopy) {
      copyEmail();
    } else if (app.href) {
      window.open(app.href, "_blank", "noopener noreferrer");
    }
  };

  return (
    <section className="min-h-screen px-6 py-16 bg-white text-black flex flex-col items-center justify-center">
      {/* Page Title */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contact Me
      </motion.h1>

      <motion.div
        className="grid lg:grid-cols-2 gap-14 w-full max-w-6xl items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        {/* ── LEFT: iPhone ── */}
        <div className="flex justify-center">
          {/* Outer phone shell */}
          <div
            className="relative select-none"
            style={{
              width: 300,
              borderRadius: 50,
              background: "#111",
              /* Side rail — slightly lighter than the screen bezel */
              boxShadow:
                /* left rail  */ "-3px 0 0 2px #2a2a2a," +
                /* right rail */ " 3px 0 0 2px #2a2a2a," +
                /* bottom rail*/ " 0 3px 0 2px #2a2a2a," +
                /* top rail   */ " 0 -3px 0 2px #2a2a2a," +
                /* depth shadow*/ " 0 40px 100px rgba(0,0,0,0.45), 0 8px 24px rgba(0,0,0,0.3)",
              padding: "0 0",
            }}
          >
            {/* Screen bezel */}
            <div
              style={{
                borderRadius: 44,
                overflow: "hidden",
                border: "8px solid #1a1a1a",
                background: "#000",
              }}
            >
              {/* Dynamic Island row */}
              <div
                className="flex items-center justify-center bg-black"
                style={{ height: 52 }}
              >
                <div
                  style={{
                    width: 120,
                    height: 34,
                    borderRadius: 22,
                    background: "#0a0a0a",
                    border: "1.5px solid #222",
                  }}
                />
              </div>

              {/* Status bar */}
              <div
                className="flex justify-between items-center bg-black"
                style={{
                  paddingLeft: 22,
                  paddingRight: 18,
                  height: 18,
                  marginTop: -4,
                }}
              >
                <span
                  className="text-white font-semibold"
                  style={{
                    fontSize: 13,
                    fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
                    letterSpacing: "-0.3px",
                  }}
                >
                  {clockTime}
                </span>
                <div className="flex items-center gap-[5px]">
                  {/* Signal bars */}
                  <svg width="17" height="12" viewBox="0 0 17 12" fill="white">
                    <rect x="0"   y="5"   width="3" height="7"  rx="0.8" />
                    <rect x="4.5" y="3"   width="3" height="9"  rx="0.8" />
                    <rect x="9"   y="1"   width="3" height="11" rx="0.8" />
                    <rect x="13.5" y="0"  width="3" height="12" rx="0.8" opacity="0.3" />
                  </svg>
                  {/* Wi-Fi */}
                  <svg width="16" height="12" viewBox="0 0 16 12" fill="white">
                    <path d="M8 9.5a1.8 1.8 0 1 1 0 3.6A1.8 1.8 0 0 1 8 9.5z" />
                    <path d="M8 6C6.1 6 4.4 6.8 3.2 8L2 6.8C3.5 5.3 5.6 4.4 8 4.4s4.5.9 6 2.4L12.8 8C11.6 6.8 9.9 6 8 6z" opacity="0.75" />
                    <path d="M8 2.5C4.9 2.5 2.1 3.8 0.2 5.9L-1 4.7C1.2 2.3 4.4 0.8 8 0.8s6.8 1.5 9 3.9L15.8 5.9C13.9 3.8 11.1 2.5 8 2.5z" opacity="0.45" />
                  </svg>
                  {/* Battery */}
                  <svg width="27" height="12" viewBox="0 0 27 12" fill="none">
                    <rect x="0.5" y="1" width="23" height="10" rx="3" stroke="white" strokeWidth="1" />
                    <rect x="23.5" y="3.5" width="2.5" height="5" rx="1.2" fill="white" opacity="0.4" />
                    <rect x="2" y="2.5" width="18" height="7" rx="2" fill="white" />
                  </svg>
                </div>
              </div>

              {/* Wallpaper + content */}
              <div
                style={{
                  background:
                    "linear-gradient(170deg,#0d0d1a 0%,#0f1e3d 35%,#102040 60%,#0a1628 100%)",
                  minHeight: 500,
                  display: "flex",
                  flexDirection: "column",
                  padding: "24px 20px 0",
                }}
              >
                {/* Lock-screen time on wallpaper */}
                <div className="text-center mb-10">
                  <div
                    className="text-white font-extralight tracking-tight"
                    style={{
                      fontSize: 58,
                      lineHeight: 1,
                      fontFamily:
                        "-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif",
                      letterSpacing: "-2px",
                    }}
                  >
                    {clockTime}
                  </div>
                  <div
                    className="text-white mt-2"
                    style={{
                      fontSize: 13,
                      opacity: 0.6,
                      fontFamily: "-apple-system, sans-serif",
                      letterSpacing: "0.01em",
                    }}
                  >
                    {clockDate}
                  </div>
                </div>

                {/* Subtle star-like dots on wallpaper */}
                {[
                  { top: "18%", left: "12%", size: 1.5, opacity: 0.5 },
                  { top: "12%", left: "72%", size: 1,   opacity: 0.4 },
                  { top: "30%", left: "85%", size: 2,   opacity: 0.35 },
                  { top: "8%",  left: "45%", size: 1.5, opacity: 0.45 },
                  { top: "22%", left: "30%", size: 1,   opacity: 0.3 },
                ].map((s, i) => (
                  <div
                    key={i}
                    className="absolute rounded-full bg-white"
                    style={{
                      top: s.top,
                      left: s.left,
                      width: s.size,
                      height: s.size,
                      opacity: s.opacity,
                    }}
                  />
                ))}

                {/* App grid — 4 icons in one row */}
                <div className="grid grid-cols-4 gap-3 px-1 mb-4">
                  {apps.map((app, idx) => (
                    <motion.button
                      key={idx}
                      className="flex flex-col items-center gap-[5px] bg-transparent border-0 cursor-pointer p-0"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.82 }}
                      transition={{ type: "spring", stiffness: 400, damping: 14 }}
                      onClick={() => handleAppTap(app, idx)}
                      aria-label={app.name}
                    >
                      <div
                        className={`flex items-center justify-center ${app.iconBg}`}
                        style={{
                          width: 54,
                          height: 54,
                          borderRadius: 14,
                          boxShadow:
                            "0 2px 12px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.15)",
                        }}
                      >
                        <img
                          src={app.icon}
                          alt={app.name}
                          style={{ width: 32, height: 32, display: "block" }}
                        />
                      </div>
                      <span
                        className="text-white text-center"
                        style={{
                          fontSize: 10,
                          fontFamily: "-apple-system, sans-serif",
                          textShadow: "0 1px 4px rgba(0,0,0,0.9)",
                          lineHeight: 1.2,
                          maxWidth: 54,
                          overflow: "hidden",
                          whiteSpace: "nowrap",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {app.name}
                      </span>
                    </motion.button>
                  ))}
                </div>

                {/* Page dots */}
                <div className="flex justify-center gap-[5px] mb-4">
                  {[0, 1, 2].map((i) => (
                    <div
                      key={i}
                      className="rounded-full bg-white"
                      style={{
                        width: i === 0 ? 6 : 5,
                        height: i === 0 ? 6 : 5,
                        opacity: i === 0 ? 0.9 : 0.3,
                      }}
                    />
                  ))}
                </div>

                {/* Flex spacer */}
                <div className="flex-1" />

                {/* Dock */}
                <div
                  className="flex justify-around items-center mx-1 mb-3 px-4 py-3"
                  style={{
                    borderRadius: 26,
                    background: "rgba(255,255,255,0.1)",
                    border: "0.5px solid rgba(255,255,255,0.18)",
                    backdropFilter: "blur(24px)",
                    WebkitBackdropFilter: "blur(24px)",
                  }}
                >
                  {apps.map((app, idx) => (
                    <motion.button
                      key={idx}
                      className={`flex items-center justify-center ${app.iconBg} border-0 cursor-pointer`}
                      style={{
                        width: 46,
                        height: 46,
                        borderRadius: 12,
                        boxShadow:
                          "0 2px 8px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.12)",
                        padding: 0,
                      }}
                      whileHover={{ scale: 1.14 }}
                      whileTap={{ scale: 0.85 }}
                      transition={{ type: "spring", stiffness: 380, damping: 13 }}
                      onClick={() => handleAppTap(app, idx)}
                      aria-label={app.name}
                    >
                      <img
                        src={app.icon}
                        alt={app.name}
                        style={{ width: 28, height: 28, display: "block" }}
                      />
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Home indicator */}
              <div
                className="flex items-center justify-center bg-black"
                style={{ height: 30 }}
              >
                <div
                  style={{
                    width: 126,
                    height: 5,
                    borderRadius: 3,
                    background: "rgba(255,255,255,0.28)",
                  }}
                />
              </div>
            </div>

            {/* Physical side buttons — purely decorative divs */}
            {/* Volume up */}
            <div
              className="absolute bg-[#2a2a2a] rounded-l-sm"
              style={{ left: -11, top: 108, width: 4, height: 32, borderRadius: "2px 0 0 2px" }}
            />
            {/* Volume down */}
            <div
              className="absolute bg-[#2a2a2a] rounded-l-sm"
              style={{ left: -11, top: 148, width: 4, height: 32, borderRadius: "2px 0 0 2px" }}
            />
            {/* Silent switch */}
            <div
              className="absolute bg-[#2a2a2a]"
              style={{ left: -11, top: 72, width: 4, height: 22, borderRadius: "2px 0 0 2px" }}
            />
            {/* Power button */}
            <div
              className="absolute bg-[#2a2a2a]"
              style={{ right: -11, top: 120, width: 4, height: 56, borderRadius: "0 2px 2px 0" }}
            />
          </div>
        </div>

        {/* ── RIGHT: Contact Form (unchanged) ── */}
        <div className="relative z-0 w-full h-[600px] rounded-3xl overflow-hidden shadow-xl border border-gray-300">
          <iframe
            src="https://formsubmit.co/el/mebilo"
            title="Contact Form"
            className="w-full h-full border-0 rounded-3xl"
            allow="camera; microphone"
          />
        </div>
      </motion.div>

      {/* Toast for email copy (phone taps) */}
      <AnimatePresence>
        {copied && (
          <motion.div
            key="toast"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 bg-black text-white text-sm font-medium px-5 py-2 rounded-full shadow-xl"
          >
            <span>✅</span> Email copied to clipboard
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}