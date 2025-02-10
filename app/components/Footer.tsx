"use client"
import { motion } from "framer-motion"
import { Github, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="py-8 bg-secondary bg-opacity-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 md:mb-0 text-lg font-semibold text-center md:text-left"
          >
            © {new Date().getFullYear()} Badar Abbas. All rights reserved.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex space-x-4"
          >
            {[
              { href: "https://github.com/RaiBadarAbbas92", icon: <Github />, label: "GitHub" },
              { href: "https://www.linkedin.com/in/badar-abbas/", icon: <Linkedin />, label: "LinkedIn" },
              { href: "https://twitter.com", icon: <Twitter />, label: "Twitter" }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                className="text-text hover:text-accent"
                whileHover={{ scale: 1.1 }}
                aria-label={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
