"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { Github, Linkedin, Twitter, ArrowDown, Code, Zap, Globe } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

const technologies = ["LangGraph", "Next.js", "TypeScript", "Fastapi", "GraphQL", "Langchain" , "CrewAi"]

export default function Hero() {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 300], [0, -100])
  const y2 = useTransform(scrollY, [0, 300], [0, -50])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  const [currentTech, setCurrentTech] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTech((prev) => (prev + 1) % technologies.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary relative overflow-hidden"
    >
      <div className="container mx-auto px-4 flex flex-col items-center justify-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Hi, I'm <span className="text-primary">Badar Abbas</span>
          </h1>
          <motion.p
            className="text-xl md:text-2xl mb-4 text-gray-300"
            animate={{ opacity: [0, 1, 1, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            I build with {technologies[currentTech]}
          </motion.p>
        </motion.div>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center" style={{ y: y1, opacity }}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <p className="text-lg mb-6 text-gray-400">Transforming ideas into seamless digital experiences</p>
            <div className="flex flex-col space-y-4 mb-8">
              <motion.div
                className="flex items-center space-x-2 text-gray-300"
                whileHover={{ x: 10, color: "#00ff00" }}
              >
                <Code size={20} />
                <span>Full Stack Developer</span>
              </motion.div>
              <motion.div
                className="flex items-center space-x-2 text-gray-300"
                whileHover={{ x: 10, color: "#ff00ff" }}
              >
                <Zap size={20} />
                <span>Performance Enthusiast</span>
              </motion.div>
              <motion.div
                className="flex items-center space-x-2 text-gray-300"
                whileHover={{ x: 10, color: "#00ffff" }}
              >
                <Globe size={20} />
                <span>Open Source Contributor</span>
              </motion.div>
            </div>
            <div className="flex space-x-4 mb-8">
              <motion.a
                href="https://github.com/RaiBadarAbbas92"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-300 hover:text-primary transition-colors duration-300"
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/badar-abbas/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-300 hover:text-primary transition-colors duration-300"
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-300 hover:text-primary transition-colors duration-300"
              >
                <Twitter size={24} />
              </motion.a>
            </div>
            <div className="flex space-x-4">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-accent text-background px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                View My Work
              </motion.a>
              <motion.a
                href="/cv.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-primary text-primary px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Download CV
              </motion.a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-64 h-64 mx-auto">
              <Image
                src="/badar.jpg"
                alt="Badar Abbas"
                layout="fill"
                objectFit="cover"
                className="rounded-full border-4 border-primary shadow-2xl"
              />
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
                className="absolute -top-4 -left-4 bg-accent text-background rounded-full p-3 shadow-lg"
              >
                <Code size={24} />
              </motion.div>
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, -360],
                }}
                transition={{
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
                className="absolute -bottom-4 -right-4 bg-secondary text-background rounded-full p-3 shadow-lg"
              >
                <Zap size={24} />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div style={{ y: y2 }} className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <Link href="#about">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
              className="cursor-pointer"
            >
              <ArrowDown size={32} className="text-primary" />
            </motion.div>
          </Link>
        </motion.div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <motion.path
            d="M0,0 Q50,50 100,0 V100 H0 Z"
            fill="none"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="0.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
          />
        </svg>
      </div>
    </section>
  )
}
