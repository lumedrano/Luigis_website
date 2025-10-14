import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import profilePic from "../assets/photos/headshot/luigi.JPG";
import { IconCloud } from "../components/interactive-icon-cloud";
import { ProfileCard } from "../components/ProfileCard";
import { Typewriter } from "../components/typewriter";

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

  // Colored Python code lines for the typewriter
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
      {/* Section 1: Split Layout */}
      <motion.div
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

          <div className="bg-[#1e1e1e] rounded-xl shadow-lg p-6 font-mono text-sm md:text-base text-gray-100 flex flex-col h-[480px]">
            {/* VSCode-like top bar */}
            <div className="flex items-center space-x-2 mb-4">
              <span className="w-3 h-3 bg-red-500 rounded-full" />
              <span className="w-3 h-3 bg-yellow-500 rounded-full" />
              <span className="w-3 h-3 bg-green-500 rounded-full" />
              <span className="ml-2 text-gray-400 text-xs">about_me.py</span>
            </div>

            {/* Typewriter */}
            <div className="flex-1 overflow-y-auto mb-4 pr-2">
              <Typewriter
                lines={pythonLines}
                speed={5}
                initialDelay={500}
                showCursor={true}
                cursorChar="_"
              />
            </div>

            {/* Terminal-like options */}
            <div className="pt-4 border-t border-gray-600 mt-auto">
              <p className="text-gray-400 text-xs mb-2">$ select an option:</p>
              <div className="flex gap-3">
                <button
                  onClick={() => navigate("/contact")}
                  className="flex-1 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded text-green-400 text-sm font-mono transition-colors"
                >
                  $ contact me
                </button>
                <button
                  onClick={() => navigate("/projects")}
                  className="flex-1 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded text-blue-400 text-sm font-mono transition-colors"
                >
                  $ view projects
                </button>
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
          onContactClick={() => navigate("/contact")} // <-- navigate here
          className="h-full"
          showBehindGradient={false}
          innerGradient="none"
          textColor="white"
        />

        </div>
      </motion.div>

      {/* Section 2: Icon Cloud & Stats */}
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
