"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Star, Bot, Package, Truck } from "lucide-react"

const projects = [
  {
    title: "Conversational Bot for Customer Support Gen AI based",
    description:
      "End-to-end conversational chatbot platform using AWS Lex and Amazon Connect. Features intuitive admin dashboard for bot management, JWT-based authentication, and comprehensive monitoring with Grafana dashboards.",
    image: "/customerbotale.png",
    technologies: [
      "AWS Lex",
      "Lambda",
      "API Gateway",
      "Node.js",
      "express.js",
      "DynamoDB",
      "REST APIs",
      "AWS Connect",
      "S3",
      "CloudeFront",
      "CloudWatch",
      "React.js",
      "JWT",
      "Docker",
      "Grafana",
    ],
    liveUrl: "https://customer-chatbot.movate-genai.com/?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJuYW1lIjoiSm9obiBEb2UiLCJsYW5nIjoiZW4iLCJpYXQiOjE3NTMxMDU0OTcsImFjY291bnRJZCI6IjI1ODk3ODcifQ.DNMUq5jxInbHVPvp9jZNorXm-QM9xdVIL6IQfpDP57j6rar6a9_9tzFw3knNqvIx_5AtCyugpdep3xxUyPrwT7aP5AAKQaCCrmMne6vmC8iV6JCRcBg10LPQJXHnWGvALKrOasgP12z2uRqMbkMsklsPlChTrpvhwJc34xh4SL8xz_4ROLflh7fYSjJ83bPEZMCvRZzRFtGQaLpj9odNCm6iPjKJTzTA7xoZh9BsZccRe-gGhqkHWQ-NldrosC49xnQwHvcyQIuL7uxStqoQIhn4wv0fv5RqWBZgig-5r5mUzYWVs6vSEoxWR-scpdpmixuHJK",
    githubUrl: "",
    featured: true,
    metrics: { integrations: "AWS Connect", deployment: "CI/CD", monitoring: "Grafana" },
    category: "Full-Stack",
    icon: Bot,  
  },
   {
    title: "Customer support Chatbot with analytics dashboard",
    description:
      "Lightweight customer support chatbot using Node.js, AWS Lambda, and React with Tailwind CSS. Designed for fast deployment and easy integration, providing instant customer query resolution via web interface.",
    image: "/barclays.png", 
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Lambda",
      "CloudWatch",
      "API Gateway",
      "AWS S3",
      "JWT",
      "dynamodb",
      "REST APIs",
      "Grafana",
    ],
    liveUrl: "http://barclays-uat.s3-website-eu-west-1.amazonaws.com",
    liveUrl2: "http://barclays-uat-dashboard.s3-website-eu-west-1.amazonaws.com/",
    featured: true,
    metrics: { integrations: "AWS Connect", deployment: "CI/CD", monitoring: "Grafana" },
    category: "Front-end",
    icon: Bot,
  },
   {  
    title: "Data-Driven Company Website",
    description:
      "A marketing and application platform for a data-driven AI/ML company built using React, Framer Motion, and Tailwind CSS. Supports job applications, blog CMS, animated sections, and responsive design.",
        image: "/zecdata.png", 
    technologies: [
      "React.js",
      "Framer Motion",
      "Tailwind CSS",
      "React Router",
      "Vite",
      "Netlify",
      "Zustand",
    ],
    liveUrl: "https://zecdata.com",   
    githubUrl: "#", 
    featured: true,
    category: "Frontend",
    icon: Star, 
  },
  {
    title: "Inventory Management System",
    description:
      "Comprehensive inventory management platform with modular React.js components, Fastify backend with role-based access control, and efficient GraphQL APIs. Deployed on AWS ECS with complete monitoring setup.",
    image: "/Inventory.png",
    technologies: [
      "Vue.js",
      "Node.js",  
      "Fastify",
      "MySQL",
      "GraphQL",
      "Docker",
      "AWS ECS",
      "S3",
      "CloudWatch",
      "Chakra UI",
      "GitHub Actions",
    ],
    liveUrl: "https://dev-shubhtech.zecdata.com",
    githubUrl: "#",
    featured: true,
    metrics: { deployment: "AWS ECS", apis: "GraphQL", monitoring: "CloudWatch" },
    category: "Full-Stack",
    icon: Package,
  },
  {
    title: "Logistics Store Application",
    description:
      "Next.js-based logistics platform with server-side rendering and optimized routing. Features scalable REST APIs, responsive Chakra UI components, and comprehensive unit testing with Jest.",
    image: "/mobile-progressive-web-app-interface.jpg",
    technologies: ["Next.js", "Node.js", "MongoDB", "REST APIs", "Docker", "Jest", "Chakra UI", "GCP"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    category: "Full-Stack",
    icon: Truck,
  },
]

const categories = ["All", "Full-Stack", "Frontend", "Backend", "DevOps"]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-background via-muted/10 to-background">
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent mb-6"
          >
            <Star className="h-5 w-5" />
            <span className="font-semibold">Featured Work</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Professional{" "}
            <span className="bg-gradient-to-r from-destructive to-accent bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto text-pretty leading-relaxed">
            Real-world applications showcasing expertise in conversational AI, inventory management, and logistics
            platforms using modern web technologies and cloud infrastructure.
          </p>
        </motion.div>

        <div className="grid gap-8">
          {/* Featured Projects */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {projects
              .filter((project) => project.featured)
              .map((project, index) => {
                const IconComponent = project.icon
                return (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <Card className="h-full overflow-hidden hover:shadow-2xl transition-all duration-500 group border-0 shadow-lg bg-card/50 backdrop-blur-sm">
                      <div className="relative overflow-hidden">
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        {/* Project icon overlay */}
                        <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="p-3 bg-accent/20 backdrop-blur-sm rounded-full">
                            <IconComponent className="h-6 w-6 text-white" />
                          </div>
                        </div>

                        {/* Project metrics overlay */}
                        {project.metrics && (
                          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="flex flex-wrap gap-2">
                              {Object.entries(project.metrics).map(([key, value]) => (
                                <Badge key={key} className="bg-black/50 text-white border-0 backdrop-blur-sm text-xs">
                                  {value}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}

                        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-2">
                          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                            <Button size="sm" className="bg-accent hover:bg-accent/90" asChild>
                              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="h-4 w-4" />
                              </a>
                            </Button>
                          </motion.div>
                          {project.liveUrl2 && (<motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                            <Button size="sm" className="bg-accent hover:bg-accent/90"asChild>
                              <a href={project.liveUrl2} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="h-4 w-4" />
                              </a>
                            </Button>
                          </motion.div>)}
                          
                        </div>
                      </div>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-xl group-hover:text-accent transition-colors">
                            {project.title}
                          </CardTitle>
                          <Badge variant="outline" className="border-accent/30 text-accent">
                            {project.category}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <motion.div
                              key={tech}
                              initial={{ opacity: 0, scale: 0 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                              viewport={{ once: true }}
                            >
                              <Badge variant="secondary" className="text-xs hover:bg-accent/10 transition-colors">
                                {tech}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
          </div>

          {/* Other Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects
              .filter((project) => !project.featured)
              .map((project, index) => {
                const IconComponent = project.icon
                return (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -3 }}
                  >
                    <Card className="h-full hover:shadow-lg transition-all duration-300 group border-0 shadow-md bg-card/30 backdrop-blur-sm">
                      <div className="relative overflow-hidden">
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute top-3 left-3">
                          <div className="p-2 bg-accent/20 backdrop-blur-sm rounded-full">
                            <IconComponent className="h-4 w-4 text-white" />
                          </div>
                        </div>
                        <div className="absolute top-3 right-3">
                          <Badge variant="outline" className="bg-white/90 backdrop-blur-sm border-0 text-xs">
                            {project.category}
                          </Badge>
                        </div>
                      </div>
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg group-hover:text-accent transition-colors">
                          {project.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {project.technologies.slice(0, 4).map((tech) => (
                            <Badge key={tech} variant="outline" className="text-xs border-accent/20">
                              {tech}
                            </Badge>
                          ))}
                          {project.technologies.length > 4 && (
                            <Badge variant="outline" className="text-xs border-accent/20">
                              +{project.technologies.length - 4}
                            </Badge>
                          )}
                        </div>
                        
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
          </div>
        </div>

        {/* Call to action */}
       <motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.3 }}
  viewport={{ once: true }}
  className="text-center mt-16"
>
  <p className="text-muted-foreground mb-6">
    Interested in seeing more of my work or discussing a project?
  </p>
  <a
    href="https://github.com/anilvishwakarma7076"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button
      size="lg"
      className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-lg"
    >
      View All Projects on GitHub
    </Button>
  </a>
</motion.div>

      </div>
    </section>
  )
}
