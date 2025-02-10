"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { Code, Coffee, Book, Headphones } from "lucide-react"

const interests = [
  { icon: Code, text: "Coding" },
  { icon: Coffee, text: "Coffee" },
  { icon: Book, text: "Reading" },
  { icon: Headphones, text: "Music" },
]

export default function About() {
  const { scrollYProgress } = useScroll()
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1])

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-background via-secondary to-background overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-center text-primary"
        >
          About Me
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div style={{ scale, opacity }} className="md:w-1/2 mb-8 md:mb-0 relative">
            <div className="relative w-64 h-64 mx-auto">
              <Image
                src="/badar.jpg"
                alt="badar"
                layout="fill"
                objectFit="cover"
                className="rounded-full border-4 border-primary shadow-2xl"
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute inset-0 rounded-full border-4 border-dashed border-accent"
              ></motion.div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 md:pl-8"
          >
            <motion.p
              className="text-lg mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              I'm a passionate web developer with 5 years of experience in creating beautiful and functional websites.
              My expertise includes React, Node.js, and UI/UX design.
            </motion.p>
            <motion.p
              className="text-lg mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              When I'm not coding, you can find me exploring new technologies, reading tech blogs, or contributing to
              open-source projects.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="grid grid-cols-2 gap-4 mb-8"
            >
              {interests.map((interest, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-2 bg-background p-3 rounded-lg shadow-md"
                >
                  <interest.icon className="text-accent" size={24} />
                  <span>{interest.text}</span>
                </motion.div>
              ))}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-background px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Download CV
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

