import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import profilePic from "../assets/photos/headshot/luigi.JPG";
import blankBevoVideo from "../assets/videos/BlankBevo.mp4";
import { IconCloud } from "../components/interactive-icon-cloud";
import { ProfileCard } from "../components/ProfileCard";
import { Typewriter } from "../components/typewriter";
import WavingFlagSection from "../components/WavingFlag";

const stats = [
  { label: "Programming Languages", value: 9 },
  { label: "Projects Completed", value: 20 },
  { label: "Technologies Mastered", value: 24 },
];

const slugs = [
  "python","java","cplusplus","typescript","javascript","html5","css3","go",
  "react","fastapi","tensorflow","pytorch","docker","kubernetes","amazonaws",
  "postgresql","firebase","nginx","git","github","jira","visualstudiocode",
  "figma","linux","bash","pytest","jenkins",
];

export default function About() {
  const navigate = useNavigate();
  const [expandedMilestone, setExpandedMilestone] = useState(null);

  // Intro states scoped to this section
  const [showVideo, setShowVideo] = useState(true);
  const [showSectionContent, setShowSectionContent] = useState(false);

  useEffect(() => {
    const hasSeenAboutIntro = sessionStorage.getItem("hasSeenAboutIntro");

    if (hasSeenAboutIntro) {
      setShowVideo(false);
      setShowSectionContent(true);
      return;
    }

    const videoTimer = setTimeout(() => {
      setShowVideo(false);
      setShowSectionContent(true);
      sessionStorage.setItem("hasSeenAboutIntro", "true");
    }, 5000);

    return () => clearTimeout(videoTimer);
  }, []);

  const importAll = (r) => {
    let images = {};
    r.keys().forEach((key) => {
      images[key.replace('./', '')] = r(key);
    });
    return images;
  };

  const timelineImages = importAll(
    require.context("../assets/photos/timeline", false, /\.(png|jpe?g|svg)$/i)
  );

  const timelineMilestones = [
    {
      year: "2003",
      title: "Born in Dimmitt, Texas",
      desc: "Raised in a small town, I learned the meaning of hard work, the value of community, and the strength that comes from resilience, guided by the pride and traditions of my Mexican heritage.",
      photos: [],
    },
    {
      year: "2016-2018",
      title: "Lego Robotics State Competitor",
      desc: "Got involved in Lego Robotics in 7th and 8th grade and competed at state level.",
      photos: [{ url: timelineImages["lego_robotics.jpg"], alt: "7th Grade Regional Robotics Competition" }]  
    },
    {
      year: "2018-2021",
      title: "FTC Robotics State Competitor",
      desc: "Competed in FIRST Tech Challenge all four years of high school, reaching state every year.",
      photos: [{url: timelineImages["ftc_insta_post.jpg"], alt: "FTC Robotics State Competition"},
              {url: timelineImages["trophy_ftc.jpg"], alt: "FTC 2019 State Championship"}],
    },
    {
      year: "2021-2025",
      title: "UT Austin — Electrical & Computer Engineering",
      desc: "Studied ECE while participating in student organizations such as Texas Guadaloop and SHPE.",
      photos: [{url: timelineImages["guadaloop.jpg"], alt: "Texas Guadaloop Hyperloop Research Organization"}],
    },
    {
      year: "2023-2024",
      title: "HSF STEM Summit Scholar & Intern at Dell",
      desc: "Attended the Hispanic Scholarship Fund STEM Summit, interned at Dell, became a HSF spokesperson and later mentor for the summit.",
      photos: [{url: timelineImages["hsf_scholar_stem.JPG"], alt: "HSF STEM Summit as a Scholar"},
              {url: timelineImages["hsf_speaker.JPG"], alt: "Attended the HSF Scholar Celebration as a Speaker in Houston, TX"},
              {url: timelineImages["hsf_mentor.JPG"], alt: "HSF STEM Summit as a Mentor"}],
    },
    {
      year: "2024-2025",
      title: "Senior Year Highlights",
      desc: "Inducted into the Order of the Engineer and completed senior capstone project focused on AI & Machine Learning.",
      photos: [{url: timelineImages["order_of_engineer.JPG"], alt: "Order of the Engineer Induction"},
                {url: timelineImages["capstone_project_1.JPG"], alt: "Senior Design Capstone Project"},
                {url: timelineImages["capstone_project_2.JPG"], alt: "Senior Design Capstone Project"}],
    },
    {
      year: "2025",
      title: "Graduated UT Austin",
      desc: "Earned B.S. in Electrical & Computer Engineering and prepared to enter the tech industry.",
      photos: [{url: timelineImages["senior_photo.JPG"], alt: "Senior Photo"},
              {url: timelineImages["graduation_pic.jpg"], alt: "Graduation Picture"}],
    },
    {
      year: "2021-Present",
      title: "Software Engineer at Dell Technologies",
      desc: "Working as a SWE in AI/ML and participating in recruiting efforts, combining technical expertise with community outreach.",
      photos: [{url: timelineImages["dell_recruiting_1.JPG"], alt: "Dell Recruiting"},
              {url: timelineImages["dell_recruiting_2.JPG"], alt: "Dell Recruiting Team"}],
    },
  ];

  const pythonLines = [
    [{ text: "# Hi, I'm Luigi Medrano\n", className: "text-green-500" }],
    [{ text: "# Bachelor of Science in Electrical and Computer Engineering - UT Austin\n", className: "text-green-500" }],
    [{ text: "def", className: "text-blue-400" }, { text: " about_me():\n" }],
    [{ text: "    # I recently graduated from UT Austin\n", className: "text-green-500" }],
    [{ text: "    print", className: "text-yellow-300" }, { text: '("Full-time Software Engineer")\n', className: "text-orange-300" }],
    [{ text: "    print", className: "text-yellow-300" }, { text: '("Languages: Python, Java, C/C++, HTML/CSS, Go")\n', className: "text-orange-300" }],
    [{ text: "    print", className: "text-yellow-300" }, { text: '("Frameworks: PyTorch, TensorFlow, FastAPI")\n', className: "text-orange-300" }],
    [{ text: "    print", className: "text-yellow-300" }, { text: '("Cloud & DevOps: AWS, Docker, Kubernetes")\n', className: "text-orange-300" }],
    [{ text: "    # Over my career and studies, I have completed 20+ projects\n", className: "text-green-500" }],
    [{ text: "    print", className: "text-yellow-300" }, { text: '("Projects Completed: 20+")\n', className: "text-orange-300" }],
    [{ text: "    print", className: "text-yellow-300" }, { text: '("Ready to explore my work or get in touch!")\n', className: "text-orange-300" }],
  ];

  return (
    <div className="min-h-screen w-full bg-background px-6 py-20 md:px-16 lg:px-32 text-foreground">

      {/* ─── Section 1: Intro animation OR split layout ─── */}
      <div className="relative w-full" style={{ minHeight: "480px" }}>

        {/* Inline CSS for logo animation */}
        <style>{`
          @keyframes smoothIntro {
            0%   { opacity: 0; transform: scale(0.75); filter: blur(8px); }
            40%  { opacity: 1; transform: scale(1);    filter: blur(0);   }
            70%  { opacity: 1; transform: scale(1);    filter: blur(0);   }
            100% { opacity: 0; transform: scale(1.18); filter: blur(4px); }
          }
          .about-intro-animation {
            animation: smoothIntro 2.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          }
          @keyframes flagRingSpin {
            from { transform: rotate(0deg); }
            to   { transform: rotate(360deg); }
          }
          .flag-ring {
            animation: flagRingSpin 4s linear infinite;
            background: conic-gradient(
              #006847 0deg 120deg,
              #ffffff 120deg 240deg,
              #CE1126 240deg 360deg
            );
          }
          .flag-ring-hover:hover .flag-ring {
            animation-duration: 1.2s;
          }
        `}</style>

        {/* VIDEO — fills the section */}
        <AnimatePresence>
          {showVideo && (
            <motion.div
              key="video"
              className="absolute inset-0 rounded-2xl overflow-hidden z-20 bg-black"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <video
                src={blankBevoVideo}
                autoPlay
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* MAIN CONTENT — fades in after intro */}
        <AnimatePresence>
          {showSectionContent && (
            <motion.div
              key="content"
              className="flex flex-col-reverse lg:flex-row items-start gap-16 lg:gap-24"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              {/* Left VSCode Panel */}
              <div className="flex-1 flex flex-col h-full">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-primary">
                  About Me
                </h1>

                <div className="bg-[#1e1e1e] rounded-xl shadow-2xl font-mono text-sm md:text-base text-gray-100 flex flex-col h-[480px] overflow-hidden">
                  {/* Title bar */}
                  <div className="flex items-center bg-[#323233] px-3 py-2 gap-2 shrink-0">
                    <span className="w-3 h-3 bg-[#ff5f57] rounded-full" />
                    <span className="w-3 h-3 bg-[#febc2e] rounded-full" />
                    <span className="w-3 h-3 bg-[#28c840] rounded-full" />
                    <span className="flex-1 text-center text-[#9d9d9d] text-xs tracking-wide select-none">about_me.py — Luigi Medrano</span>
                  </div>

                  {/* Tab bar */}
                  <div className="flex items-end bg-[#252526] border-b border-[#1e1e1e] shrink-0">
                    <div className="flex items-center gap-2 bg-[#1e1e1e] px-4 py-1.5 border-t-2 border-t-[#007acc] text-[#cccccc] text-xs">
                      <span className="text-yellow-400">🐍</span>
                      <span>about_me.py</span>
                      <span className="text-[#9d9d9d] hover:text-white cursor-pointer ml-1">×</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-1.5 text-[#9d9d9d] text-xs cursor-pointer hover:bg-[#2d2d2d]">
                      <span>README.md</span>
                    </div>
                  </div>

                  {/* Code area */}
                  <div className="flex-1 overflow-y-auto py-3 bg-[#1e1e1e] scrollbar-thin scrollbar-thumb-[#424242] scrollbar-track-transparent">
                    <Typewriter
                      lines={pythonLines}
                      speed={5}
                      initialDelay={500}
                      showCursor={true}
                      cursorChar="|"
                    />
                  </div>

                  {/* Terminal panel */}
                  <div className="bg-[#1a1a1a] border-t border-[#333] shrink-0">
                    <div className="flex items-center gap-4 px-3 py-1 bg-[#252526] border-b border-[#333]">
                      <span className="text-[#cccccc] text-xs border-b border-[#007acc] pb-0.5">TERMINAL</span>
                      <span className="text-[#9d9d9d] text-xs">PROBLEMS</span>
                    </div>
                    <div className="px-3 py-2">
                      <p className="text-[#9d9d9d] text-xs mb-2">luigi@portfolio:~$</p>
                      <div className="flex gap-3">
                        <button
                          onClick={() => navigate("/contact")}
                          className="flex-1 bg-[#2d2d2d] hover:bg-[#3a3a3a] px-3 py-1.5 rounded text-green-400 text-xs font-mono transition-colors border border-[#444] hover:border-green-400/50"
                        >
                          ./contact_me.sh
                        </button>
                        <button
                          onClick={() => navigate("/projects")}
                          className="flex-1 bg-[#2d2d2d] hover:bg-[#3a3a3a] px-3 py-1.5 rounded text-blue-400 text-xs font-mono transition-colors border border-[#444] hover:border-blue-400/50"
                        >
                          ./view_projects.sh
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Status bar */}
                  <div className="flex items-center justify-between bg-[#007acc] px-3 py-0.5 text-white text-[10px] shrink-0">
                    <div className="flex items-center gap-3">
                      <span>⎇ main</span>
                      <span>✓ 0 errors</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Ln {pythonLines.length}, Col 1</span>
                      <span>Python 3.11</span>
                      <span>UTF-8</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Profile Card */}
              <div className="w-full max-w-sm flex justify-center h-[480px]">
                <ProfileCard
                  name="Luigi Medrano"
                  title="Software Engineer"
                  handle="luigimedrano"
                  status="Online"
                  contactText="Contact Me"
                  avatarUrl={profilePic}
                  showUserInfo={true}
                  enableTilt={true}
                  enableMobileTilt={true}
                  onContactClick={() => navigate("/contact")}
                  className="h-full"
                  showBehindGradient={false}
                  innerGradient="none"
                  textColor="white"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ─── Section 2: Heritage & Horizontal Timeline ─── */}
      <div className="relative w-full py-16">
        <motion.h2 
          className="text-4xl md:text-5xl font-extrabold mb-12 text-foreground text-center"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My Heritage & Journey
        </motion.h2>

        <div className="relative w-full py-16 md:py-24 lg:py-32 px-6 md:px-16 lg:px-32 xl:px-40 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <WavingFlagSection height={600} opacity={1} />
          </div>

          <div className="relative z-10 flex justify-center">
            <div className="relative w-full max-w-7xl xl:max-w-[90rem] overflow-x-auto overflow-y-visible pb-8 scrollbar-thin scrollbar-thumb-white/30 scrollbar-track-transparent hover:scrollbar-thumb-white/50">
              <div className="relative min-w-max px-4">
                <motion.div 
                  className="absolute top-24 left-0 w-full h-1 bg-gradient-to-r from-green-500 via-white to-red-500 shadow-lg"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  viewport={{ once: true }}
                />

                <div className="flex items-start gap-12 md:gap-16 justify-center">
                  {timelineMilestones.map((event, index) => (
                    <motion.div 
                      key={index} 
                      className="relative flex flex-col items-center z-10 text-center group w-80 flex-shrink-0"
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ 
                        duration: 0.6, 
                        delay: index * 0.2,
                        type: "spring",
                        stiffness: 100
                      }}
                      viewport={{ once: true }}
                    >
                      <motion.div 
                        className="absolute top-0 left-1/2 w-0.5 h-24 bg-gradient-to-b from-white/80 to-white/40 -translate-x-1/2"
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                        viewport={{ once: true }}
                      />
                      
                      {/* Spinning flag ring year circle */}
                      <motion.div
                        className="relative w-20 h-20 mb-6 cursor-pointer flag-ring-hover"
                        whileHover={{ scale: 1.18 }}
                        animate={{
                          filter: [
                            "drop-shadow(0 0 8px rgba(255,255,255,0.4))",
                            "drop-shadow(0 0 18px rgba(255,255,255,0.7))",
                            "drop-shadow(0 0 8px rgba(255,255,255,0.4))",
                          ],
                        }}
                        transition={{
                          filter: { duration: 2, repeat: Infinity, repeatType: "reverse" },
                          scale: { type: "spring", stiffness: 300, damping: 18 },
                        }}
                        onClick={() => setExpandedMilestone(expandedMilestone === index ? null : index)}
                      >
                        {/* Outer spinning conic ring */}
                        <div className="flag-ring absolute inset-0 rounded-full" />
                        {/* Inner dark circle */}
                        <div className="absolute inset-[4px] rounded-full bg-black/85 flex items-center justify-center">
                          <span className="text-white font-extrabold text-[10px] leading-tight text-center px-1">
                            {event.year}
                          </span>
                        </div>

                        {event.photos && event.photos.length > 0 && (
                          <motion.div
                            className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-blue-500 border-2 border-white shadow-lg flex items-center justify-center text-white text-xs font-bold pointer-events-none"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: index * 0.2 + 0.5, type: "spring", stiffness: 200 }}
                          >
                            {event.photos.length}
                          </motion.div>
                        )}
                      </motion.div>
                      
                      <motion.div 
                        className="relative w-full bg-gradient-to-br from-black/50 to-black/30 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-white/30 overflow-hidden group-hover:border-white/50 transition-all flex flex-col"
                        animate={{ 
                          height: expandedMilestone === index ? "auto" : "288px"
                        }}
                        whileHover={{ 
                          y: -10,
                          boxShadow: "0 20px 40px rgba(0,0,0,0.5)"
                        }}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ 
                          opacity: { delay: index * 0.2 + 0.4 },
                          height: { duration: 0.5, ease: "easeInOut" }
                        }}
                        viewport={{ once: true }}
                      >
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-white/10 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                          animate={{
                            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "linear"
                          }}
                          style={{ backgroundSize: "200% 200%" }}
                        />
                        
                        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/20 to-transparent rounded-bl-full" />
                        
                        <div className="relative z-10 flex-1 flex flex-col overflow-hidden">
                          <motion.h3 
                            className="text-lg md:text-xl font-bold text-white mb-3 drop-shadow-lg flex-shrink-0"
                            whileHover={{ scale: 1.05 }}
                          >
                            {event.title}
                          </motion.h3>
                          <div className={`flex-1 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-white/30 scrollbar-track-transparent ${expandedMilestone === index ? 'max-h-32' : ''}`}>
                            <p className="text-sm text-gray-100 drop-shadow leading-relaxed">
                              {event.desc}
                            </p>
                          </div>

                          {expandedMilestone === index && event.photos && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.5 }}
                              className="mt-4 pt-4 border-t border-white/20 flex-shrink-0"
                            >
                              <div className="flex items-center justify-between mb-3">
                                <h4 className="text-white font-bold text-sm flex items-center gap-2">
                                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                  Photos
                                </h4>
                                <button
                                  onClick={() => setExpandedMilestone(null)}
                                  className="text-white/70 hover:text-white text-xl leading-none hover:rotate-90 transition-all duration-300"
                                >
                                  ×
                                </button>
                              </div>
                              <div className="grid grid-cols-2 gap-3">
                                {event.photos.map((photo, photoIndex) => (
                                  <motion.div
                                    key={photoIndex}
                                    className="relative overflow-hidden rounded-lg border-2 border-white/20 hover:border-white/60 transition-all group/photo"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: photoIndex * 0.1 }}
                                    whileHover={{ scale: 1.05 }}
                                  >
                                    <img
                                      src={photo.url}
                                      alt={photo.alt}
                                      className="w-full h-32 object-cover"
                                      loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover/photo:opacity-100 transition-opacity flex items-end p-2">
                                      <span className="text-white text-xs font-medium">{photo.alt}</span>
                                    </div>
                                  </motion.div>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </div>

                        <motion.div
                          className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-green-500 via-white to-red-500 flex-shrink-0"
                          initial={{ width: 0 }}
                          whileInView={{ width: "100%" }}
                          transition={{ delay: index * 0.2 + 0.6, duration: 0.8 }}
                          viewport={{ once: true }}
                        />
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── Section 3: Icon Cloud & Stats ─── */}
      <div className="mt-32 relative w-full h-screen max-h-96">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute inset-0 flex justify-center items-center pointer-events-none select-none"
          aria-hidden="true"
        >
          <IconCloud iconSlugs={slugs} />
        </motion.div>

        <div className="relative z-10 flex justify-center items-center h-full px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center bg-muted/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg max-w-4xl w-full">
            {stats.map(({ label, value }) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="text-5xl md:text-6xl font-bold text-primary">{value}+</div>
                <p className="text-md font-semibold mt-2 text-muted-foreground">{label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}