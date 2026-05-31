// // src/pages/ResumeDashboard.js
// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { User, Briefcase, Folder, Settings } from "lucide-react";
// import linkedin from "../assets/icons/linkedin.svg";
// import { ProfileCard } from "../components/ProfileCard";
// import profilePic from "../assets/photos/headshot/resume_photo.jpg";




// export default function ResumeSection() {
//   const [activeSection, setActiveSection] = useState("Profile");
//   const [sidebarOpen, setSidebarOpen] = useState(false);


//   const sidebarItems = [
//     { label: "Profile", icon: <User size={20} /> },
//     { label: "Experience", icon: <Briefcase size={20} /> },
//     { label: "Projects", icon: <Folder size={20} /> },
//     { label: "Skills", icon: <Settings size={20} /> },
//   ];

//   const experienceData = [
//     {
//       title: "S.lang – Founder/Lead Software Developer",
//       location: "Austin, TX",
//       date: "April 2023 – Present",
//       bullets: [
//         "Built a sign language translation platform leveraging computer vision and deep learning via GANs or Stable Diffusion.",
//         "Trained Mediapipe + TensorFlow pipelines for real-time gesture recognition.",
//         "Developed RESTful API infrastructure in Flask for live inference across web and mobile clients.",
//         "Deployed services using Docker and GitLab CI/CD workflows."
//       ]
//     },
//     {
//       title: "Dell Technologies – AI Software Development Intern",
//       location: "Austin, TX",
//       date: "May 2024 – August 2024",
//       bullets: [
//         "Collaborated with WW Regulatory and Compliance team to develop AI-driven internal tools.",
//         "Enhanced help desk efficiency using ML text embeddings and RAG architecture.",
//         "Partnered across Dell and Dell EMC to leverage AI search engines.",
//         "Optimized AI tool performance, improving accuracy and user satisfaction by ~30%."
//       ]
//     },
//     {
//       title: "Blue Origin – AI Software Development Intern",
//       location: "Kent, WA",
//       date: "January 2023 – April 2023",
//       bullets: [
//         "Developed and deployed BlueGPT, a secure fine-tuned transformer trained on internal documentation.",
//         "Preprocessed large-scale corpora using PyTorch and HuggingFace Transformers.",
//         "Integrated Elasticsearch-based document retrieval with NLP ranking.",
//         "Built secure FastAPI APIs with JWT authentication; secured $1M funding post-pilot."
//       ]
//     }
//   ];

//   const projectData = [
//     {
//       title: "Autonomous PTZ Vehicle Tracker – Senior Design Capstone",
//       bullets: [
//         "Built AI-powered PTZ camera system using ResNet18 CNN and YOLOv9.",
//         "Enabled personalized vehicle tracking using PyTorch, ultralytics, and OpenCV.",
//         "Implemented multithreading with GStreamer integration for 89% accuracy and 320ms latency."
//       ]
//     },
//     {
//       title: "UT Campus AI Tour Guide – ECE 460J Final Project",
//       bullets: [
//         "YOLOv9-based mobile web app to detect UT campus landmarks with contextual descriptions via ChatGPT.",
//         "Built detection interface in Python + OpenCV and integrated FastAPI.",
//         "Tuned system for sub-200ms inference and response on mobile hardware."
//       ]
//     }
//   ];

//   const skillData = [
//     { name: "Python", level: 90 },
//     { name: "Java", level: 80 },
//     { name: "C/C++", level: 80 },
//     { name: "HTML/CSS", level: 85 },
//     { name: "TypeScript/Go", level: 70 },
//     { name: "AWS/Docker/Kubernetes", level: 75 },
//     { name: "PyTorch/TensorFlow/Keras", level: 80 },
//     { name: "FastAPI/Flask", level: 85 }
//   ];

//   const sections = {
//     Profile: (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: 20 }}
//       transition={{ duration: 0.5 }}
//       className="space-y-6"
//     >
//       <ProfileCard
//         name="Luigi Medrano"
//         title="Software Engineer"
//         handle="luigimedrano03@gmail.com"
//         status="Connect with me!"
//         avatarUrl={profilePic}
//         showUserInfo={true}
//         enableTilt={true}
//         enableMobileTilt={true}
//         className="w-full max-w-md mx-auto"
//         showBehindGradient={false}
//         innerGradient="none"
//         textColor="black"
//         onContactClick={() =>
//           window.open("https://www.linkedin.com/in/luigi-medrano/", "_blank")
//         }
//         contactText={
//           <img
//             src={linkedin}
//             alt="LinkedIn"
//             className="w-10 h-10 hover:opacity-80 transition cursor-pointer"
//           />
//         }
//       />


      
//       <div className="text-center text-gray-700 space-y-2">
//         <p>Email: <a href="mailto:Luigimedrano03@gmail.com" className="underline hover:text-black">Luigimedrano03@gmail.com</a></p>
//         <p>Phone: +1 (806) 240 0668</p>
//         <p><strong>Education:</strong> B.S. in Electrical & Computer Engineering – Software Engineering, The University of Texas at Austin, May 2025</p>
//       </div>
//     </motion.div>
//   ),
//     Experience: (
//       <div className="space-y-6">
//         {experienceData.map((exp, idx) => (
//           <motion.div
//             key={idx}
//             className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: idx * 0.1 }}
//           >
//             <div className="flex justify-between items-center mb-2">
//               <h3 className="font-semibold text-lg text-black">{exp.title}</h3>
//               <span className="text-sm italic text-gray-500">{exp.date}</span>
//             </div>
//             <p className="text-sm text-gray-600 mb-2">{exp.location}</p>
//             <motion.ul
//               initial="hidden"
//               animate="visible"
//               variants={{
//                 hidden: {},
//                 visible: { transition: { staggerChildren: 0.1 } }
//               }}
//               className="list-disc list-inside space-y-1 text-gray-700"
//             >
//               {exp.bullets.map((bullet, i) => (
//                 <motion.li
//                   key={i}
//                   variants={{
//                     hidden: { opacity: 0, y: 10 },
//                     visible: { opacity: 1, y: 0 }
//                   }}
//                 >
//                   {bullet}
//                 </motion.li>
//               ))}
//             </motion.ul>
//           </motion.div>
//         ))}
//       </div>
//     ),
//     Projects: (
//       <div className="space-y-6">
//         {projectData.map((proj, idx) => (
//           <motion.div
//             key={idx}
//             className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: idx * 0.1 }}
//           >
//             <h3 className="font-semibold text-lg mb-2 text-black">{proj.title}</h3>
//             <motion.ul
//               initial="hidden"
//               animate="visible"
//               variants={{
//                 hidden: {},
//                 visible: { transition: { staggerChildren: 0.1 } }
//               }}
//               className="list-disc list-inside space-y-1 text-gray-700"
//             >
//               {proj.bullets.map((bullet, i) => (
//                 <motion.li
//                   key={i}
//                   variants={{
//                     hidden: { opacity: 0, y: 10 },
//                     visible: { opacity: 1, y: 0 }
//                   }}
//                 >
//                   {bullet}
//                 </motion.li>
//               ))}
//             </motion.ul>
//           </motion.div>
//         ))}
//       </div>
//     ),
//     Skills: (
//       <div className="space-y-4">
//         <h3 className="text-xl font-semibold text-black">Technical Skills</h3>
//         {skillData.map((skill, idx) => (
//           <motion.div
//             key={idx}
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: idx * 0.1 }}
//             className="space-y-1"
//           >
//             <div className="flex justify-between text-gray-800">
//               <span>{skill.name}</span>
//               <span>{skill.level}%</span>
//             </div>
//             <motion.div
//               initial={{ width: 0 }}
//               whileInView={{ width: `${skill.level}%` }}
//               viewport={{ once: true }}
//               transition={{ duration: 1.2 }}
//               className="h-2 rounded-full bg-gradient-to-r from-black to-gray-600 hover:scale-y-110 transform origin-left transition"
//             />
//           </motion.div>
//         ))}
//       </div>
//     ),
//   };

//   return (
//     <div className="min-h-screen flex flex-col md:flex-row relative overflow-x-hidden bg-gradient-to-b from-gray-50 to-gray-200">
//       {/* Mobile Header */}
//       <div className="md:hidden flex items-center justify-between p-4 bg-white shadow">
//         <h2 className="text-lg font-semibold text-gray-800">Resume Dashboard</h2>
//         <button
//           onClick={() => setSidebarOpen((prev) => !prev)}
//           className="p-2 rounded-md hover:bg-gray-200"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={1.5}
//             stroke="currentColor"
//             className="w-6 h-6"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M3.75 5.25h16.5m-16.5 6h16.5m-16.5 6h16.5"
//             />
//           </svg>
//         </button>
//       </div>

//       {/* Sidebar */}
//       <motion.aside
//         initial={{ x: "-100%" }}
//         animate={{ x: sidebarOpen || window.innerWidth >= 768 ? 0 : "-100%" }}
//         transition={{ duration: 0.3 }}
//         className="fixed md:static top-0 left-0 z-40 h-full w-64 bg-white shadow-lg flex flex-col py-10 px-4 space-y-6"
//       >
//         {sidebarItems.map((item) => (
//           <button
//             key={item.label}
//             onClick={() => {
//               setActiveSection(item.label);
//               setSidebarOpen(false); // close sidebar on mobile
//             }}
//             className={`flex items-center gap-3 p-3 rounded-lg transition ${
//               activeSection === item.label
//                 ? "bg-black text-white"
//                 : "hover:bg-gray-300 text-gray-800"
//             }`}
//           >
//             {item.icon} {item.label}
//           </button>
//         ))}
//       </motion.aside>

// {/* Overlay for mobile when sidebar is open */}
// {sidebarOpen && window.innerWidth < 768 && (
//   <div
//     onClick={() => setSidebarOpen(false)}
//     className="fixed inset-0 bg-black bg-opacity-40 md:hidden"
//   />
// )}


//       {/* Overlay for mobile when sidebar is open */}
//       {sidebarOpen && (
//         <div
//           onClick={() => setSidebarOpen(false)}
//           className="fixed inset-0 bg-black bg-opacity-40 md:hidden"
//         />
//       )}

//       {/* Main Content */}
//       <main className="flex-1 p-6 md:p-10 flex items-center justify-center">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={activeSection}
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: -50 }}
//             transition={{ duration: 0.5 }}
//             className="w-full max-w-3xl"
//           >
//             {sections[activeSection]}
//           </motion.div>
//         </AnimatePresence>
//       </main>
//     </div>
//   );

// }


// src/pages/ResumeDashboard.js
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Briefcase, Folder, Settings, BookOpen, ExternalLink } from "lucide-react";
import linkedin from "../assets/icons/linkedin.svg";
import { ProfileCard } from "../components/ProfileCard";
import profilePic from "../assets/photos/headshot/resume_photo.jpg";
import { HP } from "../components/Highlighter";

// Electric blue — bold, confident, pops on black & white minimal theme
const hl = {
  highlightColor: "#60a5fa",
  highlightClassName: "rounded-[0.3em] px-px",
  transition: { type: "spring", duration: 1, delay: 0.3, bounce: 0 },
  useInViewOptions: { once: true, initial: true, amount: 0.3 },
};

const publicationData = [
  {
    title: "Scaling Retrieval Augmented Generation with RAG Fusion: Lessons from an Industry Deployment",
    authors: "Luigi Medrano, Arush Verma, Mukul Chhabra",
    venue: "arXiv preprint · cs.IR",
    date: "March 2, 2026",
    abstract: "Evaluates retrieval fusion in a production-style RAG pipeline and finds that while fusion increases raw recall, gains are largely neutralized after re-ranking and truncation — with Hit@10 decreasing from 0.51 to 0.48 in several configurations.",
    highlightPhrase: "gains are largely neutralized after re-ranking and truncation",
    arxivUrl: "https://arxiv.org/abs/2603.02153",
    tags: ["RAG", "Information Retrieval", "LLMs", "Industry Deployment"],
  },
  {
    title: "Case-Aware LLM-as-a-Judge Evaluation for Enterprise-Scale RAG Systems",
    authors: "Mukul Chhabra, Luigi Medrano, Arush Verma",
    venue: "arXiv preprint · cs.CL / cs.AI",
    date: "February 23, 2026",
    abstract: "Presents a case-aware LLM-as-a-Judge framework for enterprise multi-turn RAG systems, evaluating each turn with eight operationally grounded metrics covering retrieval quality, grounding fidelity, answer utility, and case/workflow alignment.",
    highlightPhrase: "eight operationally grounded metrics",
    arxivUrl: "https://arxiv.org/abs/2602.20379",
    tags: ["LLM Evaluation", "RAG", "Enterprise AI", "NLP"],
  },
];

export default function ResumeSection() {
  const [activeSection, setActiveSection] = useState("Profile");

  const navItems = [
    { label: "Profile",       icon: <User size={16} /> },
    { label: "Experience",    icon: <Briefcase size={16} /> },
    { label: "Projects",      icon: <Folder size={16} /> },
    { label: "Publications",  icon: <BookOpen size={16} /> },
    { label: "Skills",        icon: <Settings size={16} /> },
  ];

  const experienceData = [
    {
      title: "S.lang – Founder/Lead Software Developer",
      location: "Austin, TX",
      date: "April 2023 – Present",
      bullets: [
        { text: "Built a sign language translation platform leveraging computer vision and deep learning via GANs or Stable Diffusion.", highlights: ["sign language translation platform", "computer vision and deep learning"] },
        { text: "Trained Mediapipe + TensorFlow pipelines for real-time gesture recognition.", highlights: ["real-time gesture recognition"] },
        { text: "Developed RESTful API infrastructure in Flask for live inference across web and mobile clients.", highlights: ["RESTful API infrastructure"] },
        { text: "Deployed services using Docker and GitLab CI/CD workflows.", highlights: ["Docker and GitLab CI/CD"] },
      ],
    },
    {
      title: "Dell Technologies – AI Software Development Intern",
      location: "Austin, TX",
      date: "May 2024 – August 2024",
      bullets: [
        { text: "Collaborated with WW Regulatory and Compliance team to develop AI-driven internal tools.", highlights: ["AI-driven internal tools"] },
        { text: "Enhanced help desk efficiency using ML text embeddings and RAG architecture.", highlights: ["ML text embeddings and RAG architecture"] },
        { text: "Partnered across Dell and Dell EMC to leverage AI search engines.", highlights: [] },
        { text: "Optimized AI tool performance, improving accuracy and user satisfaction by ~30%.", highlights: ["improving accuracy and user satisfaction by ~30%"] },
      ],
    },
    {
      title: "Blue Origin – AI Software Development Intern",
      location: "Kent, WA",
      date: "January 2023 – April 2023",
      bullets: [
        { text: "Developed and deployed BlueGPT, a secure fine-tuned transformer trained on internal documentation.", highlights: ["BlueGPT", "secure fine-tuned transformer"] },
        { text: "Preprocessed large-scale corpora using PyTorch and HuggingFace Transformers.", highlights: ["large-scale corpora"] },
        { text: "Integrated Elasticsearch-based document retrieval with NLP ranking.", highlights: ["Elasticsearch-based document retrieval"] },
        { text: "Built secure FastAPI APIs with JWT authentication; secured $1M funding post-pilot.", highlights: ["secured $1M funding post-pilot"] },
      ],
    },
  ];

  const projectData = [
    {
      title: "Autonomous PTZ Vehicle Tracker – Senior Design Capstone",
      bullets: [
        { text: "Built AI-powered PTZ camera system using ResNet18 CNN and YOLOv9.", highlights: ["ResNet18 CNN and YOLOv9"] },
        { text: "Enabled personalized vehicle tracking using PyTorch, ultralytics, and OpenCV.", highlights: ["personalized vehicle tracking"] },
        { text: "Implemented multithreading with GStreamer integration for 89% accuracy and 320ms latency.", highlights: ["89% accuracy and 320ms latency"] },
      ],
    },
    {
      title: "UT Campus AI Tour Guide – ECE 460J Final Project",
      bullets: [
        { text: "YOLOv9-based mobile web app to detect UT campus landmarks with contextual descriptions via ChatGPT.", highlights: ["YOLOv9-based mobile web app", "contextual descriptions via ChatGPT"] },
        { text: "Built detection interface in Python + OpenCV and integrated FastAPI.", highlights: [] },
        { text: "Tuned system for sub-200ms inference and response on mobile hardware.", highlights: ["sub-200ms inference"] },
      ],
    },
  ];

  const skillData = [
    { name: "Python", level: 90 },
    { name: "Java", level: 80 },
    { name: "C/C++", level: 80 },
    { name: "HTML/CSS", level: 85 },
    { name: "TypeScript/Go", level: 70 },
    { name: "AWS/Docker/Kubernetes", level: 75 },
    { name: "PyTorch/TensorFlow/Keras", level: 80 },
    { name: "FastAPI/Flask", level: 85 },
  ];

  const sections = {
    Profile: (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <ProfileCard
          name="Luigi Medrano"
          title="Software Engineer"
          handle="luigimedrano03@gmail.com"
          status="Connect with me!"
          avatarUrl={profilePic}
          showUserInfo={true}
          enableTilt={true}
          enableMobileTilt={true}
          className="w-full max-w-md mx-auto"
          showBehindGradient={false}
          innerGradient="none"
          textColor="black"
          onContactClick={() =>
            window.open("https://www.linkedin.com/in/luigi-medrano/", "_blank")
          }
          contactText={
            <img
              src={linkedin}
              alt="LinkedIn"
              className="hover:opacity-80 transition cursor-pointer"
            />
          }
        />
        <div className="text-center text-gray-700 space-y-2">
          <p>Email: <a href="mailto:Luigimedrano03@gmail.com" className="underline hover:text-black">Luigimedrano03@gmail.com</a></p>
          <p>Phone: +1 (806) 240 0668</p>
          <HP
            text="Education: B.S. in Electrical & Computer Engineering – Software Engineering, The University of Texas at Austin, May 2025"
            highlights={[]}
            className="text-gray-700"
            {...hl}
          />
        </div>
      </motion.div>
    ),

    Experience: (
      <div className="space-y-6">
        {experienceData.map((exp, idx) => (
          <motion.div
            key={idx}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold text-lg text-black">{exp.title}</h3>
              <span className="text-sm italic text-gray-500">{exp.date}</span>
            </div>
            <p className="text-sm text-gray-600 mb-2">{exp.location}</p>
            <motion.ul
              initial="hidden"
              animate="visible"
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
              className="list-disc list-inside space-y-1 text-gray-700"
            >
              {exp.bullets.map((bullet, i) => (
                <motion.li key={i} variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
                  {bullet.highlights.length > 0
                    ? <HP text={bullet.text} highlights={bullet.highlights} className="inline" {...hl} />
                    : bullet.text}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        ))}
      </div>
    ),

    Projects: (
      <div className="space-y-6">
        {projectData.map((proj, idx) => (
          <motion.div
            key={idx}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            <h3 className="font-semibold text-lg mb-2 text-black">{proj.title}</h3>
            <motion.ul
              initial="hidden"
              animate="visible"
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
              className="list-disc list-inside space-y-1 text-gray-700"
            >
              {proj.bullets.map((bullet, i) => (
                <motion.li key={i} variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
                  {bullet.highlights.length > 0
                    ? <HP text={bullet.text} highlights={bullet.highlights} className="inline" {...hl} />
                    : bullet.text}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        ))}
      </div>
    ),

    Publications: (
      <div className="space-y-6">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sm text-gray-500 italic"
        >
          Research published on arXiv · Dell Technologies, Austin TX
        </motion.p>

        {publicationData.map((pub, idx) => (
          <motion.div
            key={idx}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 border-l-4 border-blue-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.15 }}
          >
            {/* Title + arXiv link */}
            <div className="flex items-start justify-between gap-4 mb-2">
              <h3 className="font-semibold text-base text-black leading-snug">
                {pub.title}
              </h3>
              <a
                href={pub.arxivUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 flex items-center gap-1 text-xs font-medium text-blue-500 border border-blue-300 rounded-full px-3 py-1 hover:bg-blue-50 transition"
              >
                arXiv <ExternalLink size={11} />
              </a>
            </div>

            {/* Authors */}
            <p className="text-sm text-gray-500 mb-1">{pub.authors}</p>

            {/* Venue + date */}
            <p className="text-xs text-gray-400 mb-3">{pub.venue} · {pub.date}</p>

            {/* Abstract with key phrase highlighted */}
            <HP
              text={pub.abstract}
              highlights={[pub.highlightPhrase]}
              className="text-sm text-gray-700 leading-relaxed"
              {...hl}
            />

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-4">
              {pub.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-blue-50 text-blue-600 border border-blue-200 rounded-full px-3 py-0.5"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    ),

    Skills: (
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-black">Technical Skills</h3>
        {skillData.map((skill, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="space-y-1"
          >
            <div className="flex justify-between text-gray-800">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="h-2 rounded-full bg-gradient-to-r from-black to-gray-600 hover:scale-y-110 transform origin-left transition"
            />
          </motion.div>
        ))}
      </div>
    ),
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-200 pt-20">
      {/* Sticky horizontal pill tab bar — top-[68px] keeps it below the fixed main navbar */}
      <div className="sticky top-[68px] z-20 flex justify-center pt-4 pb-4 bg-gradient-to-b from-gray-50 via-gray-50/90 to-transparent">
        <div className="flex items-center gap-1 bg-white/90 backdrop-blur-md border border-gray-200 rounded-full shadow-lg p-1.5 overflow-x-auto max-w-full mx-4">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => setActiveSection(item.label)}
              className="relative flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-black"
            >
              {activeSection === item.label && (
                <motion.div
                  layoutId="activeResumePill"
                  className="absolute inset-0 bg-black rounded-full"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              <span className={`relative z-10 ${activeSection === item.label ? "text-white" : "text-gray-600 hover:text-gray-900"}`}>
                {item.icon}
              </span>
              <span className={`relative z-10 ${activeSection === item.label ? "text-white" : "text-gray-600 hover:text-gray-900"}`}>
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 px-6 py-8 md:px-10 md:py-10 flex justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="w-full max-w-3xl"
          >
            {sections[activeSection]}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}