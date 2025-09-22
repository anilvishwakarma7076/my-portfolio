"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code2, Database, Cloud, Wrench, TestTube, BarChart3, Server } from "lucide-react"

const skillCategories = [
  {
    title: "Frontend",
    icon: Code2,
    color: "from-accent to-accent/70",
    bgColor: "bg-accent/10",
    skills: [
      { name: "React", level: 95, years: "4+" },
      { name: "Next.js", level: 92, years: "3+" },
      { name: "Vue.js", level: 88, years: "2+" },
      { name: "TypeScript", level: 90, years: "3+" },
      { name: "JavaScript", level: 90, years: "3+" },
      { name: "Tailwind CSS", level: 94, years: "3+" },
      { name: "Framer Motion", level: 87, years: "2+" },
      { name: "Material UI", level: 85, years: "3+" },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    color: "from-destructive to-destructive/70",
    bgColor: "bg-destructive/10",
    skills: [
      { name: "Node.js", level: 93, years: "4+" },
      { name: "Express.js", level: 90, years: "4+" },
      { name: "NestJS", level: 85, years: "2+" },
      { name: "REST APIs", level: 95, years: "4+" },
      { name: "GraphQL", level: 82, years: "2+" },
    ],
  },
  {
    title: "Databases",
    icon: Database,
    color: "from-accent via-destructive to-accent",
    bgColor: "bg-gradient-to-r from-accent/10 to-destructive/10",
    skills: [
      { name: "PostgreSQL", level: 88, years: "3+" },
      { name: "MongoDB", level: 85, years: "3+" },
      { name: "Firebase", level: 82, years: "2+" },
      { name: "MySQL", level: 87, years: "3+" },
    ],
  },
  {
    title: "DevOps & Cloud",
    icon: Cloud,
    color: "from-destructive to-accent",
    bgColor: "bg-gradient-to-r from-destructive/10 to-accent/10",
    skills: [
      { name: "AWS EC2", level: 88, years: "3+" },
      { name: "AWS S3", level: 90, years: "3+" },
      { name: "AWS Lambda", level: 85, years: "2+" },
      { name: "AWS DynamoDB", level: 82, years: "2+" },
      { name: "AWS CloudWatch", level: 80, years: "2+" },
      { name: "AWS Cognito", level: 85, years: "2+" },
      { name: "Docker", level: 83, years: "2+" },
      { name: "GitHub Actions", level: 87, years: "2+" },
    ],
  },
  {
    title: "Developer Tools",
    icon: Wrench,
    color: "from-accent to-destructive",
    bgColor: "bg-gradient-to-r from-accent/10 to-destructive/10",
    skills: [
      { name: "React DevTools", level: 90, years: "3+" },
      { name: "Chrome DevTools", level: 92, years: "4+" },
      { name: "Lighthouse", level: 88, years: "2+" },
      { name: "SonarQube", level: 80, years: "2+" },
    ],
  },
  {
    title: "Testing",
    icon: TestTube,
    color: "from-destructive to-destructive/70",
    bgColor: "bg-destructive/10",
    skills: [
      { name: "Jest", level: 87, years: "3+" },
      {name:"mocha", level: 70, years: "2+"},
    ],
  },
  {
    title: "Monitoring",
    icon: BarChart3,
    color: "from-accent to-accent/70",
    bgColor: "bg-accent/10",
    skills: [
      { name: "Grafana", level: 78, years: "1+" },
      { name: "Prometheus", level: 75, years: "1+" },
      { name: "Pendo", level: 80, years: "1+" },
    ],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-muted/30 via-background to-muted/20">
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-accent/20 text-foreground mb-6"
          >
            <Code2 className="h-5 w-5 text-accent" />
            <span className="font-semibold">Technical Expertise</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-accent to-destructive bg-clip-text text-transparent">
              Tech Stack
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Comprehensive full-stack expertise across modern web technologies, cloud platforms, and development tools.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="h-full"
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-6">
                      <div className={`p-2 rounded-lg ${category.bgColor}`}>
                        <IconComponent className="h-5 w-5 text-foreground" />
                      </div>
                      <h3 className="font-bold text-lg">{category.title}</h3>
                    </div>

                    <div className="space-y-4">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                          viewport={{ once: true }}
                          className="space-y-2"
                        >
                          <div className="flex justify-between items-center">
                            <span className="font-medium text-sm">{skill.name}</span>
                            <div className="flex items-center gap-2">
                              <Badge variant="secondary" className="text-xs px-2 py-0">
                                {skill.years}
                              </Badge>
                              <span className="text-xs text-muted-foreground font-mono">{skill.level}%</span>
                            </div>
                          </div>
                          <div className="w-full bg-muted rounded-full h-1.5 overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              transition={{
                                duration: 1.2,
                                delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.3,
                                ease: "easeOut",
                              }}
                              viewport={{ once: true }}
                              className={`h-1.5 rounded-full bg-gradient-to-r ${category.color} shadow-sm`}
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Additional certifications or achievements section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-wrap gap-3 justify-center">
            {["AWS Certified", "React Expert", "Full-Stack Developer", "Cloud Architecture", "DevOps Practitioner"].map(
              (badge, index) => (
                <motion.div
                  key={badge}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Badge
                    variant="outline"
                    className="px-4 py-2 text-sm font-semibold border-accent/30 text-accent hover:bg-accent/10 transition-colors"
                  >
                    {badge}
                  </Badge>
                </motion.div>
              ),
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
