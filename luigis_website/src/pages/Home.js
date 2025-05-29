// import React, { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Typewriter } from "../components/typewriter";
// import { Link } from "react-router-dom";

// // Pop-in loud animation variant for chat bubbles
// const popInLoud = {
//   hidden: { opacity: 0, y: 20, scale: 0.95 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     scale: 1.05,
//     transition: {
//       type: "spring",
//       stiffness: 500,
//       damping: 20,
//       mass: 0.6,
//     },
//   },
//   exit: {
//     opacity: 0,
//     y: -20,
//     transition: { duration: 0.4, ease: "easeIn" },
//   },
// };

// const introVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { ease: "easeOut", duration: 0.8, delay: 0.3 },
//   },
//   exit: {
//     opacity: 0,
//     y: -20,
//     transition: { ease: "easeIn", duration: 0.5 },
//   },
// };

// function Home() {
//   const [showChat, setShowChat] = useState(true);
//   const [showReply, setShowReply] = useState(false);

//   useEffect(() => {
//     const replyTimer = setTimeout(() => {
//       setShowReply(true);
//     }, 1500);

//     const hideTimer = setTimeout(() => {
//       setShowChat(false);
//     }, 3000); // Adjusted for longer delay between second and third bubble

//     return () => {
//       clearTimeout(replyTimer);
//       clearTimeout(hideTimer);
//     };
//   }, []);

//   return (
//     // <div className="w-full h-screen flex items-center justify-center bg-background px-4 text-center">
//     <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 px-4 text-center">

//       <AnimatePresence mode="wait">
//         {showChat ? (
//           <motion.div
//             key="chat"
//             className="flex flex-col max-w-md w-full"
//             initial="hidden"
//             animate="visible"
//             exit="exit"
//             variants={popInLoud}
//           >
//             {/* First bubble */}
//             <motion.div
//               className="rounded-3xl px-8 py-5 max-w-md self-end shadow-lg text-lg"
//               style={{
//                 borderTopRightRadius: 0,
//                 backgroundColor: "#3B82F6", // Shiny blue
//                 color: "white",
//                 boxShadow: "0 4px 12px rgba(59, 130, 246, 0.7)",
//               }}
//               variants={popInLoud}
//             >
//               Hey!👋 Is this Luigi?
//             </motion.div>

//             {/* Second and third bubbles */}
//             {showReply && (
//               <>
//                 <motion.div
//                   className="rounded-3xl px-8 py-5 max-w-md self-start mt-5 shadow-lg text-lg"
//                   style={{
//                     borderTopLeftRadius: 0,
//                     backgroundColor: "#E5E7EB", // Light gray
//                     color: "#374151", // Dark gray text
//                     boxShadow: "0 4px 12px rgba(209, 213, 219, 0.7)",
//                   }}
//                   variants={popInLoud}
//                   initial="hidden"
//                   animate="visible"
//                   exit="exit"
//                   transition={{ delay: 0.5 }}
//                 >
//                   Yes‼️
//                 </motion.div>

//                 <motion.div
//                   className="rounded-3xl px-8 py-5 max-w-md self-start mt-4 shadow-lg text-lg text-left"
//                   style={{
//                     borderTopLeftRadius: 0,
//                     backgroundColor: "#E5E7EB",
//                     color: "#374151",
//                     boxShadow: "0 4px 12px rgba(209, 213, 219, 0.7)",
//                     alignText: "left"
//                   }}
//                   variants={popInLoud}
//                   initial="hidden"
//                   animate="visible"
//                   exit="exit"
//                   transition={{ delay: 2.2 }}
//                 >
//                   Come learn more about me and my work!💻
//                 </motion.div>
//               </>
//             )}
//           </motion.div>
//         ) : (
//           // Intro content after chat
//           <motion.div
//             key="intro"
//             className="max-w-4xl"
//             initial="hidden"
//             animate="visible"
//             exit="exit"
//             variants={introVariants}
//           >
//             <p className="md:text-4xl lg:text-5xl sm:text-3xl text-2xl font-light text-foreground leading-snug mb-8">
//               <span className="block mb-2">
//                 Hey there! I'm{" "}
//                 <span className="font-medium text-primary">Luigi</span>.
//               </span>
//               <span className="block">I build things for the web as a{" "}</span>
//               <Typewriter
//                 text={["Software Engineer", "Web Developer", "Tech Enthusiast"]}
//                 speed={70}
//                 waitTime={1500}
//                 deleteSpeed={40}
//                 cursorChar="_"
//                 className="text-orange-500 font-semibold"
//               />
//             </p>

//             <motion.div
//               initial={{ opacity: 0, scale: 0.95 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ delay: 1.2, duration: 0.5 }}
//             >
//               <Link
//                   to="/about"
//                   className="relative z-50 inline-block px-6 py-3 rounded-full bg-primary text-background font-semibold text-base shadow-lg hover:scale-105 hover:bg-primary/90 transition-transform duration-300 cursor-pointer animate-pulse hover:animate-none"
//                 >
//                 Learn more about me →
//               </Link>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }

// export default Home;



import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import { Typewriter } from "../components/typewriter";
import {DecryptingText} from "../components/DecryptingText";
import { Link } from "react-router-dom";

// Pop-in loud animation variant for chat bubbles
const popInLoud = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 20,
      mass: 0.6,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.4, ease: "easeIn" },
  },
};

const introVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ease: "easeOut", duration: 0.8, delay: 0.3 },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { ease: "easeIn", duration: 0.5 },
  },
};

function Home() {
  const [showChat, setShowChat] = useState(true);
  const [showReply, setShowReply] = useState(false);

  useEffect(() => {
    const replyTimer = setTimeout(() => {
      setShowReply(true);
    }, 1500);

    const hideTimer = setTimeout(() => {
      setShowChat(false);
    }, 3000); // Adjusted for longer delay between second and third bubble

    return () => {
      clearTimeout(replyTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    // <div className="w-full h-screen flex items-center justify-center bg-background px-4 text-center">
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 px-4 text-center">

      <AnimatePresence mode="wait">
        {showChat ? (
          <motion.div
            key="chat"
            className="flex flex-col max-w-md w-full"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={popInLoud}
          >
            {/* First bubble */}
            <motion.div
              className="rounded-3xl px-8 py-5 max-w-md self-end shadow-lg text-lg"
              style={{
                borderTopRightRadius: 0,
                backgroundColor: "#3B82F6", // Shiny blue
                color: "white",
                boxShadow: "0 4px 12px rgba(59, 130, 246, 0.7)",
              }}
              variants={popInLoud}
            >
              Hey!👋 Is this Luigi?
            </motion.div>

            {/* Second and third bubbles */}
            {showReply && (
              <>
                <motion.div
                  className="rounded-3xl px-8 py-5 max-w-md self-start mt-5 shadow-lg text-lg"
                  style={{
                    borderTopLeftRadius: 0,
                    backgroundColor: "#E5E7EB", // Light gray
                    color: "#374151", // Dark gray text
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
                    alignText: "left"
                  }}
                  variants={popInLoud}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ delay: 2.2 }}
                >
                  Come learn more about me and my work!💻
                </motion.div>
              </>
            )}
          </motion.div>
        ) : (
          // Intro content after chat
          <motion.div
            key="intro"
            className="max-w-4xl"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={introVariants}
          >
            <p className="md:text-4xl lg:text-5xl sm:text-3xl text-2xl font-light text-foreground leading-snug mb-8">
              <span className="block mb-2">
                Hey there! I'm{" "}
                <span className="font-medium text-primary">Luigi</span>.
              </span>
              <span className="block">I build things for the web as a{" "}</span>
              <DecryptingText
              text={["Software Engineer", "Web Developer", "Tech Enthusiast"]}
              speed={50}
              waitTime={2000}
              className="text-orange-500 font-semibold"
              />

            </p>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
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
