// src/pages/Projects.js
import { useState } from "react";
import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion";
import { DecryptingText } from "../components/DecryptingText";
import { Github, PlayCircle, X } from "lucide-react";
import complianceConnect from "../assets/photos/projects/compliance_connect.png";
import bluegpt from "../assets/photos/projects/bluegpt.png";
import ece319board from "../assets/photos/projects/319circuitboard.jpg";
import initbot from "../assets/photos/projects/initdesignbot.MOV";
import blocksensing from "../assets/photos/projects/blocksensingvid.MP4";
import aiagent from "../assets/photos/projects/aiagent.mov";
import stemsplitter from "../assets/photos/projects/stem_splitter.png";

const CATEGORIES = ["All", "Internship", "University", "Personal"];

const sampleProjects = [
  {
    title: "Dell Technologies Internship - AI Regulatory Compliance Model",
    description:
      "This AI model used a RAG architecture, enabling the compliance team at Dell to obtain product information in seconds from a pool of databases and improving communication with customers.",
    affiliation: "Dell Technologies Internship",
    category: "Internship",
    techStack: ["Python", "RAG", "AI"],
    media: complianceConnect,
    mediaType: "image",
  },
  {
    title: "Blue Origin Internship AI Model Project",
    description:
      "Created a fully operational chatbot from scratch using TensorFlow and PyTorch, improving company-wide productivity by 80%.",
    affiliation: "Blue Origin Internship",
    category: "Internship",
    techStack: ["TensorFlow", "PyTorch", "Chatbot"],
    media: bluegpt,
    mediaType: "image",
  },
  {
    title: "ECE319K Final Embedded Systems Lab",
    description:
      "Implemented DAC, ADC, Serial COM, and C programming to develop a video game.",
    affiliation: "University of Texas at Austin",
    category: "University",
    techStack: ["C", "Embedded Systems"],
    media: ece319board,
    mediaType: "image",
  },
  {
    title: "Space Invaders using C Programming",
    description:
      "Programmed the game's movements in C, achieving bit mapping for the front-end and a multi-functional I/O backend.",
    affiliation: "University of Texas at Austin",
    category: "University",
    techStack: ["C", "Game Programming"],
    media: "https://www.youtube.com/embed/qEx8jdwbly4",
    mediaType: "youtube",
  },
  {
    title: "Block Detection Algorithm (TensorFlow Object Detection)",
    description:
      "Created an algorithm that enhanced FTC Robotics' object detection efficiency during matches.",
    affiliation: "FTC Robotics",
    category: "Personal",
    techStack: ["TensorFlow", "Computer Vision"],
    media: blocksensing,
    mediaType: "video",
    github: "https://github.com/lumedrano/Luigi-Medrano-Computer-Vision-Code-State-Codes-FTC-UG-",
  },
  {
    title: "Robot Design and Programming Competition",
    description:
      "Led a team to design and program a robot capable of accomplishing over 80% of tasks within a week.",
    affiliation: "FTC Robotics",
    category: "Personal",
    techStack: ["Robotics", "C++", "Java"],
    media: initbot,
    mediaType: "video",
  },
  {
    title: "Senior Design Project - PitCam AI",
    description:
      "Designed and Implemented a vision-based AI system for autonomous driving using computer vision and machine learning algorithms for the University of Texas at Austin Senior Design Capstone Project. Utilized YOLO models, object tracking, and a PID controller for smooth steering.",
    affiliation: "University of Texas at Austin",
    category: "University",
    techStack: ["Python", "Computer Vision", "Machine Learning", "AWS"],
    media: "https://www.youtube.com/embed/enc_hi03MMg",
    mediaType: "youtube",
    github: "https://github.com/lumedrano/senior-design",
  },
  {
    title: "Gmail Chatbot Agent",
    description:
      "Developed a Gmail-integrated chatbot agent to automate email responses using NLP.",
    affiliation: "Personal Project",
    category: "Personal",
    techStack: ["Python", "NLP", "Google API"],
    media: aiagent,
    mediaType: "video",
    github: "https://github.com/lumedrano/GmailAgent",
  },
  {
    title: "STEM Splitter (Lyric Generation with PyTorch & OpenAI Whisper)",
    description:
      "Created a model to split and generate song lyrics using PyTorch and OpenAI Whisper for audio processing.",
    affiliation: "Personal Project",
    category: "Personal",
    techStack: ["PyTorch", "OpenAI Whisper", "Audio Processing"],
    media: stemsplitter,
    mediaType: "image",
    github: "https://github.com/lumedrano/ECE460J_FinalProject",
  },
];

// Per-category glow colors
const categoryGlow = {
  Internship: "from-blue-500 via-cyan-400 to-blue-600",
  University:  "from-orange-500 via-amber-400 to-orange-600",
  Personal:    "from-purple-500 via-pink-400 to-purple-600",
};

function ProjectCard({ project, index, onClick }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-6, 6]);

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const glow = categoryGlow[project.category] ?? "from-blue-500 via-purple-500 to-cyan-500";

  return (
    <motion.div
      style={{ perspective: 800 }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.08, duration: 0.6, type: "spring", stiffness: 100 }}
      className="group relative"
    >
      {/* Animated glow border */}
      <div
        className={`absolute -inset-[1.5px] rounded-3xl bg-gradient-to-br ${glow} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
        style={{ filter: "blur(3px)" }}
      />

      <motion.div
        className="relative bg-card rounded-3xl shadow-lg flex flex-col overflow-hidden cursor-pointer"
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") onClick(); }}
        aria-label={`Open ${project.title}`}
      >
        {/* Media */}
        <div className="relative h-48 md:h-56 w-full overflow-hidden rounded-t-3xl bg-background border-b border-muted">
          {project.mediaType === "video" ? (
            <>
              <video src={project.media} muted className="object-cover w-full h-full" />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <PlayCircle className="text-white w-12 h-12 drop-shadow-lg" />
              </div>
            </>
          ) : project.mediaType === "youtube" ? (
            <iframe
              src={project.media}
              title={project.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full object-cover pointer-events-none"
            />
          ) : (
            <img
              src={project.media}
              alt={project.title}
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
            />
          )}
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold mb-1">{project.title}</h3>
          <p className="text-sm italic text-muted-foreground mb-3">{project.affiliation}</p>

          {/* Tech badges — stagger on group-hover via CSS animation-delay trick */}
          <div className="flex gap-1.5 flex-wrap mb-3">
            {project.techStack.map((tech, ti) => (
              <motion.span
                key={tech}
                className="bg-primary/10 text-primary px-2.5 py-0.5 rounded-full text-xs font-medium"
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 + ti * 0.05, duration: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>

          <p className="text-muted-foreground text-sm line-clamp-3">{project.description}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? sampleProjects
    : sampleProjects.filter((p) => p.category === activeCategory);

  const expandedProject = expandedIndex !== null ? sampleProjects[expandedIndex] : null;

  return (
    <section className="min-h-screen px-6 py-16 bg-background text-foreground max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">🚀 My Projects</h1>
        <p className="text-lg md:text-xl text-muted-foreground">
          From internships to personal experiments, here's what I've built!
        </p>
        <DecryptingText
          text={["AI models 🤖", "Robotics 🤖", "Web apps 💻", "Games 🎮", "Creative experiments ✨"]}
          speed={50}
          waitTime={1500}
          className="text-primary font-semibold mt-3 inline-block"
        />
      </motion.div>

      {/* Category filter tabs */}
      <motion.div
        className="flex justify-center mb-10"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <div className="flex items-center gap-1 bg-card border border-muted rounded-full p-1 shadow-md">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="relative px-5 py-1.5 rounded-full text-sm font-medium transition-colors duration-200"
            >
              {activeCategory === cat && (
                <motion.div
                  layoutId="activeCategoryPill"
                  className="absolute inset-0 bg-primary rounded-full"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <span className={`relative z-10 ${activeCategory === cat ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}>
                {cat}
              </span>
            </button>
          ))}
        </div>
      </motion.div>

      {/* Grid */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={activeCategory}
          className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {filtered.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={i}
              onClick={() => setExpandedIndex(sampleProjects.indexOf(project))}
            />
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Frosted glass modal */}
      <AnimatePresence>
        {expandedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setExpandedIndex(null)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

            {/* Panel */}
            <motion.div
              className="relative w-full max-w-3xl max-h-[88vh] overflow-y-auto rounded-3xl bg-black/80 backdrop-blur-xl border border-white/10 shadow-2xl text-white p-6 sm:p-8"
              initial={{ y: 60, opacity: 0, scale: 0.97 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 40, opacity: 0, scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close */}
              <button
                onClick={() => setExpandedIndex(null)}
                className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Media */}
              <div className="mb-6 rounded-2xl overflow-hidden border border-white/10">
                {expandedProject.mediaType === "video" ? (
                  <video
                    src={expandedProject.media}
                    controls
                    autoPlay
                    className="w-full max-h-[55vh] object-contain bg-black"
                  />
                ) : expandedProject.mediaType === "youtube" ? (
                  <iframe
                    src={expandedProject.media}
                    title={expandedProject.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full aspect-video"
                  />
                ) : (
                  <img
                    src={expandedProject.media}
                    alt={expandedProject.title}
                    className="w-full max-h-[55vh] object-contain bg-black"
                  />
                )}
              </div>

              {/* Info */}
              <h3 id="modal-title" className="text-2xl font-bold mb-2">
                {expandedProject.title}
              </h3>
              <p className="italic text-sm text-white/50 mb-4">
                {expandedProject.affiliation}
              </p>
              <p className="text-white/80 mb-5 leading-relaxed">{expandedProject.description}</p>

              <div className="flex flex-wrap gap-2 mb-5">
                {expandedProject.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-white/10 border border-white/20 text-white rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {expandedProject.github && (
                <a
                  href={expandedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-black rounded-full font-semibold hover:bg-white/90 transition"
                >
                  <Github className="w-5 h-5" />
                  View on GitHub
                </a>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
