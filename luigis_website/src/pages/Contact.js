// import { motion } from "framer-motion";
// import React from "react";

// // SVG imports as file paths
// import gmail from "../assets/icons/gmail.svg";
// import linkedin from "../assets/icons/linkedin.svg";
// import github from "../assets/icons/github.svg";
// import instagram from "../assets/icons/instagram.svg";

// export default function Contact() {
//   const icons = [
//     { icon: gmail, label: "luigimedrano03@gmail.com" },
//     { icon: linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/luigi-medrano/" },
//     { icon: github, label: "GitHub", href: "https://github.com/lumedrano" },
//     { icon: instagram, label: "Instagram", href: "https://instagram.com/luigi_med03" },
//   ];

//   return (
//     <section className="min-h-screen px-6 py-16 bg-white text-black flex flex-col items-center justify-center">
//       {/* Page Title */}
//       <motion.h1
//         className="text-4xl md:text-5xl font-bold mb-12 text-center text-[#000000]" // UT Burnt Orange
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//       >
//         Contact Me
//       </motion.h1>

//       <motion.div
//         className="grid lg:grid-cols-2 gap-14 w-full max-w-6xl"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.3, duration: 0.8 }}
//       >
//         {/* Contact Info Section */}
//         <div className="bg-gray-100 p-10 rounded-3xl shadow-2xl flex flex-col justify-center space-y-8 relative overflow-hidden">
//           <h2 className="text-2xl font-semibold text-[#FF6B00]">Get in Touch</h2>

//           <div className="space-y-6">
//             {icons.map((item, idx) => (
//               <motion.div
//                 key={idx}
//                 whileHover={{ scale: 1.1 }}
//                 transition={{ type: "spring", stiffness: 300 }}
//                 className="flex items-center space-x-4 cursor-pointer"
//               >
//                 <img src={item.icon} alt={`${item.label} icon`} className="w-6 h-6" />
//                 {item.href ? (
//                   <a
//                     href={item.href}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="hover:underline font-medium text-black"
//                   >
//                     {item.label}
//                   </a>
//                 ) : (
//                   <span className="text-gray-700 break-all">{item.label}</span>
//                 )}
//               </motion.div>
//             ))}
//           </div>

//           {/* Animated background circles */}
//           <motion.div
//             className="absolute -top-20 -left-20 w-60 h-60 rounded-full bg-orange-300 opacity-20 blur-3xl animate-pulse-slow"
//           />
//           <motion.div
//             className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-blue-300 opacity-20 blur-3xl animate-pulse-slow"
//           />
//         </div>

//         {/* Contact Form Section */}
//         <div className="relative z-0 w-full h-[600px] rounded-3xl overflow-hidden shadow-xl border border-gray-300">
//           <iframe
//             src="https://formsubmit.co/el/mebilo"
//             title="Contact Form"
//             className="w-full h-full border-0 rounded-3xl"
//             allow="camera; microphone"
//           />
//         </div>
//       </motion.div>
//     </section>
//   );
// }


import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";

// SVG imports as file paths
import gmail from "../assets/icons/gmail.svg";
import linkedin from "../assets/icons/linkedin.svg";
import github from "../assets/icons/github.svg";
import instagram from "../assets/icons/instagram.svg";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("luigimedrano03@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const icons = [
    {
      icon: gmail,
      label: "luigimedrano03@gmail.com",
      action: copyEmail,
      isCopy: true,
    },
    {
      icon: linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/luigi-medrano/",
    },
    {
      icon: github,
      label: "GitHub",
      href: "https://github.com/lumedrano",
    },
    {
      icon: instagram,
      label: "Instagram",
      href: "https://instagram.com/luigi_med03",
    },
  ];

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
        className="grid lg:grid-cols-2 gap-14 w-full max-w-6xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        {/* Contact Info Section */}
        <div className="bg-gray-100 p-10 rounded-3xl shadow-2xl flex flex-col justify-center space-y-8 relative overflow-hidden">
          <h2 className="text-2xl font-semibold text-[#FF6B00]">Get in Touch</h2>

          <div className="space-y-6">
            {icons.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                whileTap={item.isCopy ? { scale: 0.95 } : {}}
                transition={{ type: "spring", stiffness: 250 }}
                className="flex items-center space-x-4 cursor-pointer relative"
                onClick={item.isCopy ? item.action : undefined}
              >
                <img src={item.icon} alt={`${item.label} icon`} className="w-6 h-6" />
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline font-medium text-black"
                  >
                    {item.label}
                  </a>
                ) : (
                  <span
                    className={`text-gray-700 break-all transition-all duration-200 ${
                      copied ? "text-[#FF6B00]" : ""
                    }`}
                  >
                    {item.label}
                  </span>
                )}

                {/* Floating animated "Copied!" with checkmark */}
                {item.isCopy && (
                  <AnimatePresence>
                    {copied && (
                      <motion.div
                        key="copied"
                        initial={{ opacity: 0, y: 10, scale: 0.8 }}
                        animate={{ opacity: 1, y: -20, scale: 1 }}
                        exit={{ opacity: 0, y: -40, scale: 0.8 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="absolute flex items-center space-x-1 text-[#000000] font-semibold text-sm left-1/2 -translate-x-1/2"
                      >
                        <motion.span
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          ✅
                        </motion.span>
                        <span>Copied!</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </motion.div>
            ))}
          </div>

          {/* Animated background circles */}
          <motion.div className="absolute -top-20 -left-20 w-60 h-60 rounded-full bg-orange-300 opacity-20 blur-3xl animate-pulse-slow" />
          <motion.div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-blue-300 opacity-20 blur-3xl animate-pulse-slow" />
        </div>

        {/* Contact Form Section */}
        <div className="relative z-0 w-full h-[600px] rounded-3xl overflow-hidden shadow-xl border border-gray-300">
          <iframe
            src="https://formsubmit.co/el/mebilo"
            title="Contact Form"
            className="w-full h-full border-0 rounded-3xl"
            allow="camera; microphone"
          />
        </div>
      </motion.div>
    </section>
  );
}
