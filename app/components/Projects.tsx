"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { Eye, Github } from "lucide-react"
import { useState } from "react"

const projects = [
  {
    title: "Examine Ai",
    image: "/Exam.PNG",
    description: "An Ai powered Exam Genration and GradinG Plateform",
    tags: ["React", "FastApi", "Postgrass", "LangGraph" , "Tailwind CSS" , "GraphQl" , "Saas"],
    liveUrl: "https://examini-ai-804.vercel.app/",
    codeUrl: "https://github.com/RaiBadarAbbas92/Examini_Ai",
  },
  {
    title: "Headline Ai",
    image: "/Headline.PNG",
    description: "Modren Way of newsin conversational user interface ",
    tags: ["Next.js", "Tailwind CSS", "FastApi" , "Langchain" , "LangGraph" , "Agentic Ai"],
    liveUrl: "https://headline-ai-ruddy.vercel.app/",
    codeUrl: "https://github.com/Muhammadzainattiq/AlphaAI-Frontend",
  },
  {
    title: "RUBINIUM COSMETICS",
    image: "/placeholder.svg?height=300&width=400",
    description: "Ecommerce store for RUBINIUM COSMETICS ",
    tags: ["React", "Redux", "FastApi" , "MongoDb"],
    liveUrl: "https://example.com",
    codeUrl: "https://github.com",
  },
  {
    title: "Ai Powered Blog",
    image: "/blog.PNG",
    description: "A modern blog platform built with Gatsby and GraphQL",
    tags: ["NextJs", "GraphQL", "Contentful"],
    liveUrl: "https://example.com",
    codeUrl: "https://github.com",
  },
  {
    title: "Weigh Station App",
    image: "/app.PNG",
    description: "App  for weigh station for calculatig weight and also print pages via mobile",
    tags: ["React Native", "TypeScript", "Fastapi"],
    liveUrl: "https://example.com",
    codeUrl: "https://github.com/RaiBadarAbbas92/QuickScale-FE",
  },
  {
    title: "Weigh station softwere",
    image: "/scale.PNG",
    description: "Softwere for WEIGH STATION FOR DESKTOP ",
    tags: ["Tauri" , "Javascript"],
    liveUrl: "https://example.com",
    codeUrl: "https://github.com/RaiBadarAbbas92/QuickScale-FE",
  },
]

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-background to-secondary">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-center text-primary"
        >
          My Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="bg-background p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
            >
              <motion.div
                initial={{ scale: 1 }}
                animate={{ scale: hoveredIndex === index ? 1.1 : 1 }}
                transition={{ duration: 0.3 }}
                className="relative h-48 mb-4 overflow-hidden rounded-lg"
              >
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-all duration-300 group-hover:filter group-hover:brightness-50"
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary text-background px-4 py-2 rounded-full font-semibold mr-4 hover:bg-opacity-80 transition-all duration-300"
                  >
                    <Eye className="inline-block mr-2" size={18} />
                    Live Demo
                  </a>
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-accent text-background px-4 py-2 rounded-full font-semibold hover:bg-opacity-80 transition-all duration-300"
                  >
                    <Github className="inline-block mr-2" size={18} />
                    Code
                  </a>
                </motion.div>
              </motion.div>
              <h3 className="text-xl font-semibold mb-2 text-primary">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="bg-secondary text-background text-sm px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
