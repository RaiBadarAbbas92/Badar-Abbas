"use client"
import { motion } from "framer-motion"
import Image from "next/image"

const skills = [
  { name: "React", icon: "/placeholder.svg?height=80&width=80" },
  { name: "Node.js", icon: "/placeholder.svg?height=80&width=80" },
  { name: "TypeScript", icon: "/placeholder.svg?height=80&width=80" },
  { name: "Next.js", icon: "/placeholder.svg?height=80&width=80" },
  { name: "CSS/SASS", icon: "/placeholder.svg?height=80&width=80" },
  { name: "GraphQL", icon: "/placeholder.svg?height=80&width=80" },
  { name: "MongoDB", icon: "/placeholder.svg?height=80&width=80" },
  { name: "Docker", icon: "/placeholder.svg?height=80&width=80" },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-background via-secondary to-background">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-center text-primary"
        >
          My Skills
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="flex items-center justify-center w-24 h-24"
            >
              <Image
                src={skill.icon || "/placeholder.svg"}
                alt={skill.name}
                width={80}
                height={80}
                className="rounded-full bg-background p-2"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
