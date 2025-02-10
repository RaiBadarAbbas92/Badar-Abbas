"use client"
import { motion } from "framer-motion"
import { useState } from "react"
import { Code, Server, Palette, Zap, Globe, Database } from "lucide-react"

const skills = [
  { name: "Frontend", icon: Code, color: "text-blue-500", skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { name: "Backend", icon: Server, color: "text-green-500", skills: ["Node.js", "Express", "Python", "Django"] },
  {
    name: "Design",
    icon: Palette,
    color: "text-purple-500",
    skills: ["Figma", "Adobe XD", "UI/UX", "Responsive Design"],
  },
  { name: "DevOps", icon: Zap, color: "text-yellow-500", skills: ["Docker", "Kubernetes", "CI/CD", "AWS"] },
  { name: "APIs", icon: Globe, color: "text-red-500", skills: ["RESTful", "GraphQL", "WebSockets", "OAuth"] },
  {
    name: "Databases",
    icon: Database,
    color: "text-indigo-500",
    skills: ["MongoDB", "PostgreSQL", "Redis", "Firebase"],
  },
]

export default function SkillsShowcase() {
  const [activeSkill, setActiveSkill] = useState(skills[0])

  return (
    <section className="py-20 bg-gradient-to-br from-background via-secondary to-background">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-center text-primary"
        >
          Skills Showcase
        </motion.h2>
        <div className="flex flex-col md:flex-row items-start justify-between">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/3 mb-8 md:mb-0"
          >
            {skills.map((skill, index) => (
              <motion.button
                key={skill.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveSkill(skill)}
                className={`flex items-center w-full p-4 mb-4 rounded-lg transition-all duration-300 ${
                  activeSkill.name === skill.name ? "bg-accent text-background" : "bg-background"
                }`}
              >
                <skill.icon className={`mr-4 ${skill.color}`} size={24} />
                <span className="text-lg font-semibold">{skill.name}</span>
              </motion.button>
            ))}
          </motion.div>
          <motion.div
            key={activeSkill.name}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-2/3 bg-background p-8 rounded-lg shadow-xl"
          >
            <h3 className="text-2xl font-bold mb-6 text-primary">{activeSkill.name} Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              {activeSkill.skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-secondary bg-opacity-20 p-4 rounded-lg"
                >
                  <h4 className="text-lg font-semibold mb-2">{skill}</h4>
                  <motion.div
                    className="h-2 bg-accent rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

