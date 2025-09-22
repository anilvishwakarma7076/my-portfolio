"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import confetti from "canvas-confetti"

import { ArrowDown, Github, Linkedin, Mail, Code2, Sparkles } from "lucide-react"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const scrollToProjects = () => {
    const element = document.getElementById("projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  // Confetti handler for Download Resume button
  const handleDownloadResume = () => {
    // Trigger confetti
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#0f766e", "#ff0000ff", "#d9ff00ff", "#34d399"],
    });
    setTimeout(() => {
      window.open(
        "https://drive.google.com/file/d/15MNl6ZH59lLZo8eNhEDrKwFoc-1wnCHX/view?usp=drivesdk",
        "_blank"
      );
    }, 1000);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(5,150,105,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(236,72,153,0.1),transparent_50%)]" />

      {/* Interactive floating background */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(5,150,105,0.05), transparent 40%)`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
      />

      {/* Floating code symbols */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-accent/20 text-2xl font-mono"
          initial={{
            x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1200),
            y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 800),
            rotate: 0,
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4 + i,
            repeat: Number.POSITIVE_INFINITY,
            delay: i * 0.5,
          }}
          style={{
            left: `${5 + i * 12}%`,
            top: `${15 + i * 8}%`,
          }}
        >
          {["</", "/>", "{}", "[]", "()", "&&", "=>", "++", "!", "*", "#"][i]}
        </motion.div>
      ))}

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex items-center justify-center gap-2 text-accent mb-4"
          >
            <Code2 className="h-6 w-6" />
            <span className="text-lg font-mono">Hello World!</span>
            <Sparkles className="h-5 w-5" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-balance"
          >
            I'm <span className="text-accent font-bold">Anil Vishwakarma</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6 max-w-4xl mx-auto"
          >
            <p className="text-xl sm:text-2xl text-muted-foreground text-pretty">
              <span className="text-accent font-semibold">Full-Stack Developer</span> with{" "}
              <span className="text-destructive font-semibold">2.5+ years</span> of experience crafting scalable web
              solutions with <span className="text-accent font-semibold">React</span>,{" "}
              <span className="text-destructive font-semibold">Node.js</span>, and{" "}
              <span className="text-accent font-semibold">AWS Cloud</span>
            </p>
            <p className="text-lg text-muted-foreground/80">
              Specializing in conversational AI, inventory management, and logistics applications
            </p>
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button
                onClick={scrollToProjects}
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Explore My Work
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-destructive text-destructive hover:bg-destructive hover:text-white px-8 py-3 text-lg font-semibold bg-transparent shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={handleDownloadResume}  // Confetti on press
              >
                Download Resume
              </Button>
            </motion.div>
          </motion.div>

          {/* Social icons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex justify-center space-x-6 pt-8"
          >
            {[
              { icon: Github, href: "https://github.com/anilvishwakarma7076", label: "GitHub", color: "hover:text-accent" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/anilvishwakarma7076?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", label: "LinkedIn", color: "hover:text-destructive" },
              { icon: Mail, href: "mailto:anilvishwakarma7076@gmail.com", label: "Email", color: "hover:text-accent" },
            ].map(({ icon: Icon, href, label, color }) => (
              <motion.a
                key={label}
                href={href}
                whileHover={{ scale: 1.2, y: -5, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className={`p-4 rounded-full bg-card/50 backdrop-blur-sm border border-border/50 ${color} transition-all duration-300 shadow-lg hover:shadow-xl`}
                aria-label={label}
              >
                <Icon className="h-6 w-6" />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Scroll down arrow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="cursor-pointer group"
            onClick={scrollToProjects}
          >
            <div className="p-2 rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors">
              <ArrowDown className="h-6 w-6 text-accent group-hover:text-accent/80" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
    