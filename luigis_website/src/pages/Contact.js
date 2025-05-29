import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Instagram } from "lucide-react";

export default function Contact() {
  return (
    <section className="min-h-screen px-6 py-16 bg-background text-foreground flex flex-col items-center justify-center">
      <motion.h1
        className="text-4xl md:text-5xl font-bold mb-10 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contact Me
      </motion.h1>

      <motion.div
        className="grid lg:grid-cols-2 gap-12 w-full max-w-6xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        {/* Contact Info Section */}
        <div className="bg-card p-8 rounded-3xl shadow-xl flex flex-col justify-center space-y-6">
          <h2 className="text-2xl font-semibold text-primary">Get in Touch</h2>

          <div className="flex items-center space-x-4">
            <Mail className="text-primary" />
            <span className="break-words">luigimedrano03@gmail.com</span>
          </div>

          <div className="flex items-center space-x-4">
            <Linkedin className="text-primary" />
            <a
              href="https://www.linkedin.com/in/luigi-medrano/"
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <Github className="text-primary" />
            <a
              href="https://github.com/lumedrano"
              className="text-gray-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <Instagram className="text-primary" />
            <a
              href="https://instagram.com/luigi_med03"
              className="text-pink-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </div>
        </div>

        {/* Form Section */}
        <div className="relative z-0 w-full h-[600px] rounded-3xl overflow-hidden shadow-xl">
          <iframe
            src="https://formsubmit.co/el/mebilo"
            title="Contact Form"
            className="w-full h-full pointer-events-auto border-0"
            allow="camera; microphone"
          />
        </div>
      </motion.div>
    </section>
  );
}
