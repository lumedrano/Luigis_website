import { motion } from "framer-motion";

// SVG imports as file paths
import gmail from "../assets/icons/gmail.svg";
import linkedin from "../assets/icons/linkedin.svg";
import github from "../assets/icons/github.svg";
import instagram from "../assets/icons/instagram.svg";

export default function Contact() {
  return (
    <section className="min-h-screen px-6 py-16 bg-background text-foreground flex flex-col items-center justify-center">
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
        <div className="bg-card p-10 rounded-3xl shadow-2xl flex flex-col justify-center space-y-8">
          <h2 className="text-2xl font-semibold text-primary">Get in Touch</h2>

          <div className="space-y-6">
            <ContactItem
              icon={gmail}
              label="luigimedrano03@gmail.com"
            />
            <ContactItem
              icon={linkedin}
              label="LinkedIn"
              href="https://www.linkedin.com/in/luigi-medrano/"
            />
            <ContactItem
              icon={github}
              label="GitHub"
              href="https://github.com/lumedrano"
            />
            <ContactItem
              icon={instagram}
              label="Instagram"
              href="https://instagram.com/luigi_med03"
            />
          </div>
        </div>

        {/* Form Section */}
        <div className="relative z-0 w-full h-[600px] rounded-3xl overflow-hidden shadow-xl">
          <iframe
            src="https://formsubmit.co/el/mebilo"
            title="Contact Form"
            className="w-full h-full border-0"
            allow="camera; microphone"
          />
        </div>
      </motion.div>
    </section>
  );
}

// Updated for image-based icons
function ContactItem({ icon, label, href }) {
  return (
    <div className="flex items-center space-x-4">
      <img src={icon} alt={`${label} icon`} className="w-6 h-6" />
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline font-medium text-foreground"
        >
          {label}
        </a>
      ) : (
        <span className="text-muted-foreground break-all">{label}</span>
      )}
    </div>
  );
}
