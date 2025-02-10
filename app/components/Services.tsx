"use client"
import { motion } from "framer-motion"
import { Code, Palette, Globe, Zap, Server, Users } from "lucide-react"

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Creating responsive and dynamic websites using modern technologies.",
  },
  { icon: Palette, title: "UI/UX Design", description: "Designing intuitive and visually appealing user interfaces." },
  { icon: Globe, title: "SEO Optimization", description: "Improving website visibility and search engine rankings." },
  { icon: Zap, title: "Performance Optimization", description: "Enhancing website speed and overall performance." },
  { icon: Server, title: "Backend Development", description: "Building robust server-side applications and APIs." },
  {
    icon: Users,
    title: "Consultation",
    description: "Providing expert advice on web technologies and best practices.",
  },
]

export default function Services() {
  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-br from-background via-secondary to-background relative overflow-hidden"
    >
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-center text-primary"
        >
          My Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="bg-background p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-accent to-primary transform origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              <div className="flex items-center mb-4">
                <service.icon className="w-10 h-10 text-accent mr-4" />
                <h3 className="text-xl font-semibold text-primary">{service.title}</h3>
              </div>
              <p className="text-gray-300">{service.description}</p>
              <motion.div
                className="mt-4 flex justify-end"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-accent hover:text-primary transition-colors duration-300"
                >
                  Learn More →
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
          <path d="M0,50 Q25,0 50,50 T100,50" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
          <path d="M0,67 Q25,33 50,67 T100,67" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
          <path d="M0,33 Q25,67 50,33 T100,33" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
        </svg>
      </div>
    </section>
  )
}

