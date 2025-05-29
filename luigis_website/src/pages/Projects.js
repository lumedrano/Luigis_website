// src/pages/Projects.js
import { useState } from "react";
import complianceConnect from "../assets/photos/projects/compliance_connect.png";
import bluegpt from "../assets/photos/projects/bluegpt.png";
import ece319board from "../assets/photos/projects/319circuitboard.jpg";
import initbot from "../assets/photos/projects/initdesignbot.MOV";
import blocksensing from "../assets/photos/projects/blocksensingvid.MP4";
import aiagent from "../assets/photos/projects/aiagent.mov";

const sampleProjects = [
  {
    title: "Dell Technologies Internship - AI Regulatory Compliance Model",
    description:
      "This AI model used a RAG architecture, enabling the compliance team at Dell to obtain product information in seconds from a pool of databases and improving communication with customers.",
    affiliation: "Dell Technologies Internship",
    techStack: ["Python", "RAG", "AI"],
    media: complianceConnect,
    mediaType: "image",
  },
  {
    title: "Blue Origin Internship AI Model Project",
    description:
      "Created a fully operational chatbot from scratch using TensorFlow and PyTorch, improving company-wide productivity by 80%.",
    affiliation: "Blue Origin Internship",
    techStack: ["TensorFlow", "PyTorch", "Chatbot"],
    media: bluegpt,
    mediaType: "image",
  },
  {
    title: "ECE319K Final Embedded Systems Lab",
    description:
      "Implemented DAC, ADC, Serial COM, and C programming to develop a video game.",
    affiliation: "University of Texas at Austin",
    techStack: ["C", "Embedded Systems"],
    media: ece319board,
    mediaType: "image",
  },
  {
    title: "Space Invaders using C Programming",
    description:
      "Programmed the game’s movements in C, achieving bit mapping for the front-end and a multi-functional I/O backend.",
    affiliation: "University of Texas at Austin",
    techStack: ["C", "Game Programming"],
    media: "https://www.youtube.com/embed/qEx8jdwbly4",
    mediaType: "youtube",
  },
  {
    title: "Block Detection Algorithm (TensorFlow Object Detection)",
    description:
      "Created an algorithm that enhanced FTC Robotics’ object detection efficiency during matches.",
    affiliation: "FTC Robotics",
    techStack: ["TensorFlow", "Computer Vision"],
    media: blocksensing,
    mediaType: "video",
  },
  {
    title: "Robot Design and Programming Competition",
    description:
      "Led a team to design and program a robot capable of accomplishing over 80% of tasks within a week.",
    affiliation: "FTC Robotics",
    techStack: ["Robotics", "C++", "Java"],
    media: initbot,
    mediaType: "video",
  },
  {
    title: "3-day Built Robot for Regionals",
    description:
      "Led a full rebuild of a robot resulting in a 60% increase in scoring and qualification to state competition.",
    affiliation: "Robotics Team Captain",
    techStack: ["Mechanical Design", "Programming"],
    media: "/assets/images/newbot.jpg",
    mediaType: "image",
  },
  // New projects
  {
    title: "Senior Design Project",
    description:
      "Designed and implemented a scalable IoT solution to monitor environmental data in real-time, integrating cloud services and mobile apps for seamless user experience.",
    affiliation: "University of Texas at Austin",
    techStack: ["IoT", "AWS", "React Native"],
    media: "/assets/images/senior_design_project.jpg",
    mediaType: "image",
  },
  {
    title: "Gmail Chatbot Agent",
    description:
      "Developed a Gmail-integrated chatbot agent to automate email responses using NLP.",
    affiliation: "Personal Project",
    techStack: ["Python", "NLP", "Google API"],
    media: aiagent,
    mediaType: "video",
  },
  {
    title: "STEM Splitter (Lyric Generation with PyTorch & OpenAI Whisper)",
    description:
      "Created a model to split and generate song lyrics using PyTorch and OpenAI Whisper for audio processing.",
    affiliation: "Personal Project",
    techStack: ["PyTorch", "OpenAI Whisper", "Audio Processing"],
    media: "/assets/images/stem_splitter_demo.gif",
    mediaType: "image",
  },
];

export default function Projects() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  function toggleExpand(i) {
    setExpandedIndex(expandedIndex === i ? null : i);
  }

  return (
    <section className="min-h-screen px-6 py-16 bg-background text-foreground max-w-7xl mx-auto">
      <div className="flex justify-center mb-12">
        <a
          href="/assets/Luigi_Medrano_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-primary text-background rounded-full font-semibold hover:bg-primary-dark transition"
          download
        >
          Preview / Download Resume
        </a>
      </div>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {sampleProjects.map((project, i) => {
          const isExpanded = expandedIndex === i;

          return (
            <div
              key={project.title}
              className={`bg-card rounded-3xl shadow-lg flex flex-col overflow-hidden cursor-pointer
              transition-all duration-300
              ${isExpanded ? "col-span-full" : ""}
              `}
              onClick={() => toggleExpand(i)}
              aria-expanded={isExpanded}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") toggleExpand(i);
              }}
            >
              {/* Media */}
              <div className="relative h-48 md:h-56 w-full overflow-hidden rounded-t-3xl bg-background border-b border-muted">
              {project.mediaType === "video" ? (
                <video
                  src={project.media}
                  controls={isExpanded}
                  autoPlay={isExpanded}
                  loop={isExpanded}
                  muted
                  className="object-cover w-full h-full"
                />
              ) : project.mediaType === "youtube" ? (
                <iframe
                  src={project.media}
                  title={project.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full object-cover"
                />
              ) : (
                <img
                  src={project.media}
                  alt={project.title}
                  className="object-cover w-full h-full"
                />
              )}
            </div>


              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className={`text-muted-foreground transition-all duration-300 ${isExpanded ? "line-clamp-none" : "line-clamp-3"}`}>
                  {project.description}
                </p>

                {isExpanded && (
                  <>
                    <p className="mt-4 italic text-sm text-muted-foreground">
                      Affiliation: {project.affiliation}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-3">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-5 px-5 py-2 bg-primary text-background rounded-full font-semibold hover:bg-primary-dark transition self-start"
                        onClick={(e) => e.stopPropagation()}
                      >
                        View Code
                      </a>
                    )}

                    <button
                      className="mt-6 text-sm text-primary underline self-start"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleExpand(i);
                      }}
                    >
                      Collapse
                    </button>
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
