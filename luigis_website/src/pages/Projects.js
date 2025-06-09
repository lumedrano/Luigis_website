// src/pages/Projects.js
import { useState } from "react";
import { Github, PlayCircle, FileText } from "lucide-react";
import complianceConnect from "../assets/photos/projects/compliance_connect.png";
import bluegpt from "../assets/photos/projects/bluegpt.png";
import ece319board from "../assets/photos/projects/319circuitboard.jpg";
import initbot from "../assets/photos/projects/initdesignbot.MOV";
import blocksensing from "../assets/photos/projects/blocksensingvid.MP4";
import aiagent from "../assets/photos/projects/aiagent.mov";
import newbot from "../assets/photos/projects/newbot.jpg";
import stemsplitter from "../assets/photos/projects/stem_splitter.png";

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
    github: "https://github.com/lumedrano/Luigi-Medrano-Computer-Vision-Code-State-Codes-FTC-UG-",
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
    media: newbot,
    mediaType: "image",
  },
  {
    title: "Senior Design Project - PitCam AI",
    description:
      "Designed and Implemented a vision-based AI system for autonomous driving using computer vision and machine learning algorithms for the University of Texas at Austin Senior Design Capstone Project. Utilized YOLO models, object tracking, and a PID controller for smooth steering.",
    affiliation: "University of Texas at Austin",
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
    techStack: ["PyTorch", "OpenAI Whisper", "Audio Processing"],
    media: stemsplitter,
    mediaType: "image",
  },
];

export default function Projects() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <section className="min-h-screen px-6 py-16 bg-background text-foreground max-w-7xl mx-auto">
      <div className="bg-card p-6 rounded-3xl shadow-lg mb-12 flex flex-col items-center text-center max-w-md mx-auto">
  <h2 className="text-2xl font-bold mb-2">View My Resume</h2>
  <p className="text-muted-foreground mb-4">Learn more about my experience, skills, and education.</p>
  <a
    href="/assets/Luigi_Medrano_Resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 px-5 py-2 bg-primary text-background rounded-full font-semibold hover:bg-primary-dark transition"
    download
  >
    <FileText className="w-5 h-5" />
    Download Resume (PDF)
  </a>
</div>


      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {sampleProjects.map((project, i) => (
          <div
            key={project.title}
            className="bg-card rounded-3xl shadow-lg flex flex-col overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl group"
            onClick={() => setExpandedIndex(i)}
            aria-expanded={expandedIndex === i}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") setExpandedIndex(i);
            }}
          >
            <div className="relative h-48 md:h-56 w-full overflow-hidden rounded-t-3xl bg-background border-b border-muted">
              {project.mediaType === "video" ? (
                <>
                  <video
                    src={project.media}
                    muted
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                    <PlayCircle className="text-white w-12 h-12" />
                  </div>
                </>
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
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
              )}
            </div>

            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold mb-1">{project.title}</h3>
              <p className="text-sm italic text-muted-foreground mb-2">
                {project.affiliation}
              </p>
              <div className="flex gap-1 flex-wrap mb-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="bg-primary/10 text-primary px-2 py-0.5 rounded text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-muted-foreground line-clamp-3">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {expandedIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-6"
          onClick={() => setExpandedIndex(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div
            className="bg-white rounded-3xl shadow-xl max-w-3xl w-full mx-4 p-6 relative max-h-[80vh] overflow-y-auto text-black"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setExpandedIndex(null)}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-2xl font-bold"
              aria-label="Close modal"
            >
              &times;
            </button>

            <div className="mb-4">
              {sampleProjects[expandedIndex].mediaType === "video" ? (
                <video
                  src={sampleProjects[expandedIndex].media}
                  controls
                  autoPlay
                  className="w-full max-h-[60vh] rounded-xl object-contain"
                />
              ) : sampleProjects[expandedIndex].mediaType === "youtube" ? (
                <iframe
                  src={sampleProjects[expandedIndex].media}
                  title={sampleProjects[expandedIndex].title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full max-h-[60vh] rounded-xl"
                  style={{ objectFit: "contain" }}
                />
              ) : (
                <img
                  src={sampleProjects[expandedIndex].media}
                  alt={sampleProjects[expandedIndex].title}
                  className="w-full max-h-[60vh] rounded-xl object-contain"
                />
              )}
            </div>

            <h3 id="modal-title" className="text-2xl font-bold mb-3">
              {sampleProjects[expandedIndex].title}
            </h3>
            <p className="mb-4">{sampleProjects[expandedIndex].description}</p>

            <p className="italic text-sm text-muted-foreground mb-4">
              Affiliation: {sampleProjects[expandedIndex].affiliation}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {sampleProjects[expandedIndex].techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            {sampleProjects[expandedIndex].github && (
              <a
                href={sampleProjects[expandedIndex].github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition"
              >
                <Github className="w-5 h-5" />
                View on GitHub
              </a>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
