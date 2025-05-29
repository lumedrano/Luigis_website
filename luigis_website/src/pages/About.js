// src/pages/About.tsx
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import profilePic from "../assets/photos/headshot/luigi.JPG";
import { IconCloud } from "../components/interactive-icon-cloud";


const stats = [
  { label: "Programming Languages", value: 9 },
  { label: "Projects Completed", value: 20 },
  { label: "Technologies Mastered", value: 24 },
];

function AnimatedCounter(props) {
  const { end } = props;
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const stepTime = Math.max(Math.floor(duration / end), 20);
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, stepTime);
    return () => clearInterval(timer);
  }, [end]);

  return <div className="text-5xl md:text-6xl font-bold text-primary">{count}+</div>;
}

const slugs = [
  "python",
  "java",
  "cplusplus",       // For C/C++
  "typescript",
  "javascript",
  "html5",
  "css3",
  "go",
  "react",
  "fastapi",
  "tensorflow",
  "pytorch",
  "docker",
  "kubernetes",
  "amazonaws",       // AWS
  "postgresql",
  "firebase",
  "nginx",
  "git",
  "github",
  "jira",
  "visualstudiocode",
  "figma",
  "linux",
  "bash",            // Shell scripting
  "pytest",          // Python testing
  "jenkins",         // CI/CD (commonly used)
]


export default function About() {
  return (
    <div className="min-h-screen w-full bg-background px-6 py-20 md:px-16 lg:px-32 text-foreground">
      {/* Section 1: Professional Split Layout */}
      <motion.div
        className="flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        {/* Left Side: Text */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-primary">About Me</h1>
          <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
            Hi, I’m <span className="font-semibold text-orange-500">Luigi Medrano</span>. I recently graduated from <span className="font-medium">The University of Texas at Austin</span> with a Bachelor of Science in Electrical and Computer Engineering.
            <br /><br />
            Now, I work full-time as a Software Engineer, leveraging my expertise in languages like Python, Java, C/C++, HTML/CSS, and Go. I’m experienced with cloud and DevOps tools such as AWS, Docker, and Kubernetes, and frameworks including PyTorch, TensorFlow, and FastAPI.
            <br /><br />
            Over my career and studies, I have completed <strong>20+ projects</strong> ranging from robotics and machine learning to backend API development. Feel free to explore my work below or{" "}
            <a href="/contact" className="underline text-blue-600 hover:text-blue-700">get in touch</a>.
          </p>
        </div>

        {/* Right Side: Photo */}
        <div className="w-full max-w-sm">
          <div className="rounded-2xl overflow-hidden shadow-lg border border-muted">
            <img
              src={profilePic}
              alt="Luigi Medrano"
              className="object-cover w-full h-auto"
            />
          </div>
        </div>
      </motion.div>

      {/* Section 2: Counters with Icon Cloud behind */}
      <div className="relative mt-24 w-full h-56 md:h-64"> 
        {/* Icon Cloud Background */}
          <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}  // increased opacity here
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute inset-0 flex justify-center items-center pointer-events-none select-none"
          aria-hidden="true"
        >
          <IconCloud iconSlugs={slugs} />
        </motion.div>


        {/* Stats Counters */}
        <div className="relative z-10 flex justify-center items-center h-full px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center bg-muted/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg max-w-4xl w-full">
            {stats.map(({ label, value }) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className=""
              >
                <AnimatedCounter end={value} />
                <p className="text-md font-semibold mt-2 text-muted-foreground">{label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>



      {/* Section 3: Project Callout */}
      <motion.div
        className="text-center mt-40"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-semibold mb-3">My Projects</h2>
        <p className="text-lg max-w-xl mx-auto text-muted-foreground mb-6">
          A collection of personal and academic projects — built with passion and code.
        </p>
        <a
          href="/projects"
          className="inline-block px-6 py-3 bg-primary text-background rounded-full font-medium shadow-md hover:scale-105 transition-transform duration-300"
        >
          View Projects →
        </a>
      </motion.div>
    </div>
  );
}
