"use client"
import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"

const steps = [
  { title: "Discovery", description: "Understanding your needs and project requirements" },
  { title: "Planning", description: "Creating a detailed project plan and timeline" },
  { title: "Design", description: "Crafting the user interface and experience" },
  { title: "Development", description: "Building the project using cutting-edge technologies" },
  { title: "Testing", description: "Ensuring quality and performance" },
  { title: "Deployment", description: "Launching your project to the world" },
]

export default function HowIWork() {
  return (
    <section id="how-i-work" className="py-20 bg-gradient-to-br from-background to-secondary relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-extrabold mb-16 text-center text-primary drop-shadow-lg"
        >
          How I Work
        </motion.h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary to-secondary"></div>
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`flex items-center mb-12 ${index % 2 === 0 ? "flex-row-reverse" : ""}`}
            >
              <div className={`w-1/2 ${index % 2 === 0 ? "text-right pr-12" : "pl-12"}`}>
                <h3 className="text-3xl font-bold mb-4 text-primary">{step.title}</h3>
                <p className="text-lg text-gray-200">{step.description}</p>
              </div>
              <div className="relative">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.25 }}
                  className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center shadow-lg"
                >
                  <CheckCircle className="text-background" size={28} />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileHover={{ opacity: 1, scale: 1.3 }}
                  transition={{ duration: 0.4 }}
                  className="absolute top-0 left-0 w-full h-full rounded-full bg-primary opacity-40"
                ></motion.div>
              </div>
              <div className="w-1/2"></div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
          <path d="M0,50 Q25,0 50,50 T100,50" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
        </svg>
      </div>
    </section>
  )
}
