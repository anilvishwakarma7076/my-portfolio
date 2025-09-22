"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Award, Users, Rocket, Target, TrendingUp, GraduationCap } from "lucide-react"
import Image from "next/image"

const features = [
  {
    icon: Code,
    title: "Full-Stack Development",
    description:
      "Building end-to-end applications with React.js, Node.js, and modern cloud technologies for scalable solutions.",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: Rocket,
    title: "Cloud & DevOps",
    description:
      "Expertise in AWS services, Docker containerization, and CI/CD pipelines for efficient deployment workflows.",
    color: "text-destructive",
    bgColor: "bg-destructive/10",
  },
  {
    icon: Users,
    title: "API Development",
    description: "Creating robust REST APIs and GraphQL endpoints with proper authentication and security measures.",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: Target,
    title: "Problem Solving",
    description: "Translating complex business requirements into elegant technical solutions that drive results.",
    color: "text-destructive",
    bgColor: "bg-destructive/10",
  },
]

const achievements = [
  { number: "5+", label: "Projects Delivered", icon: Rocket },
  { number: "2.5+", label: "Years Experience", icon: Award },
  { number: "10+", label: "Technologies Mastered", icon: TrendingUp },
  { number: "3", label: "Major Platforms Built", icon: Users },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-muted/20 via-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 text-destructive mb-6"
          >
            <Users className="h-5 w-5" />
            <span className="font-semibold">About Me</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Passionate{" "}
            <span className="bg-gradient-to-r from-accent to-destructive bg-clip-text text-transparent">
              Full-Stack Developer
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto text-pretty leading-relaxed">
            Results-driven developer with 2.5+ years of experience building scalable, secure, and modern web
            applications. Specialized in conversational AI, inventory management, and logistics platforms.
          </p>
        </motion.div>

        {/* Enhanced stats section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon
            return (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="text-center"
              >
                <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-0">
                    <div className="flex justify-center mb-3">
                      <motion.div
                        className="p-3 rounded-full bg-gradient-to-r from-accent/20 to-destructive/20"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <IconComponent className="h-6 w-6 text-accent" />
                      </motion.div>
                    </div>
                    <div className="text-2xl font-bold bg-gradient-to-r from-accent to-destructive bg-clip-text text-transparent mb-1">
                      {achievement.number}
                    </div>
                    <div className="text-sm text-muted-foreground font-medium">{achievement.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold">My Professional Journey</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                As a <span className="text-accent font-semibold">Full-Stack Developer</span> with 2.5+ years of hands-on
                experience, I've specialized in building innovative solutions including conversational AI chatbots,
                inventory management systems, and logistics platforms.
              </p>
              <p>
                My expertise spans modern web technologies - from architecting scalable backend systems with
                <span className="text-destructive font-semibold"> Node.js, Fastify, and AWS</span> to crafting
                responsive user interfaces with
                <span className="text-accent font-semibold"> React.js, Next.js, and Chakra UI</span>.
              </p>
              <p>
                I'm passionate about <span className="text-destructive font-semibold">cloud technologies</span>,
                implementing CI/CD pipelines with Docker, and creating robust monitoring solutions with Grafana and
                CloudWatch. I thrive in Agile environments and enjoy solving complex technical challenges.
              </p>
            </div>

            <div className="pt-4">
              <div className="flex items-center gap-2 mb-3">
                <GraduationCap className="h-5 w-5 text-accent" />
                <h4 className="text-lg font-semibold">Education</h4>
              </div>
              <p className="text-muted-foreground">
                <span className="font-medium">Government Post Graduation College</span> - Rajgarh (2021)
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-4">
              {["AWS Cloud", "React Expert", "Node.js", "Docker", "GraphQL", "Agile"].map((badge, index) => (
                <motion.div
                  key={badge}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1 }}
                >
                  <Badge variant="outline" className="px-3 py-1 border-accent/30 text-accent hover:bg-accent/10">
                    {badge}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <div className="relative">
              {/* Animated background rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute -inset-4 rounded-full border-2 border-accent/20"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute -inset-8 rounded-full border border-destructive/20"
              />

              {/* Main image container */}
              <motion.div
                initial={{ scale: 0, rotate: -10 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="relative w-80 h-80 rounded-full overflow-hidden shadow-2xl"
              >
                <Image
                  src="https://media.licdn.com/dms/image/v2/D5603AQEx_WyP0wGxDw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1676629651208?e=2147483647&v=beta&t=tslrzVFElgBE7oQVpWy8AVhg4mtpKp40aFc7j93I5IU"
                  alt="Anil Vishwakarma - Full Stack Developer"
                  fill
                  className="object-cover filter brightness-110 contrast-110 saturate-110"
                  priority
                />
                {/* Gradient overlays for attractive effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-accent/10 via-transparent to-destructive/10" />
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20" />

                {/* Animated border effect */}
                <motion.div
                  animate={{
                    background: [
                      "linear-gradient(0deg, rgba(5,150,105,0.3), rgba(236,72,153,0.3))",
                      "linear-gradient(90deg, rgba(5,150,105,0.3), rgba(236,72,153,0.3))",
                      "linear-gradient(180deg, rgba(5,150,105,0.3), rgba(236,72,153,0.3))",
                      "linear-gradient(270deg, rgba(5,150,105,0.3), rgba(236,72,153,0.3))",
                      "linear-gradient(360deg, rgba(5,150,105,0.3), rgba(236,72,153,0.3))",
                    ],
                  }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                  className="absolute inset-0 opacity-50 mix-blend-overlay rounded-full" // also add rounded-full here
                />
              </motion.div>

              {/* Floating elements around photo */}
              <motion.div
                animate={{
                  rotate: 360,
                  y: [0, -10, 0],
                }}
                transition={{
                  rotate: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                  y: { duration: 3, repeat: Number.POSITIVE_INFINITY },
                }}
                className="absolute -top-4 -right-4 w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-accent/30"
              >
                <Code className="h-6 w-6 text-accent" />
              </motion.div>

              <motion.div
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 10, 0],
                }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-destructive/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-destructive/30"
              >
                <Rocket className="h-6 w-6 text-destructive" />
              </motion.div>

              <motion.div
                animate={{
                  x: [0, 10, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 3.5, repeat: Number.POSITIVE_INFINITY }}
                className="absolute top-1/2 -left-6 w-10 h-10 bg-accent/15 rounded-full flex items-center justify-center backdrop-blur-sm border border-accent/20"
              >
                <Target className="h-5 w-5 text-accent" />
              </motion.div>

              <motion.div
                animate={{
                  x: [0, -10, 0],
                  y: [0, 5, 0],
                }}
                transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY }}
                className="absolute top-1/2 -right-6 w-10 h-10 bg-destructive/15 rounded-full flex items-center justify-center backdrop-blur-sm border border-destructive/20"
              >
                <TrendingUp className="h-5 w-5 text-destructive" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    <motion.div
                      className={`inline-flex p-3 rounded-full ${feature.bgColor} mb-4`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <IconComponent className={`h-6 w-6 ${feature.color}`} />
                    </motion.div>
                    <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
