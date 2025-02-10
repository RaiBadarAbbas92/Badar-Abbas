"use client"
import { motion, useAnimation } from "framer-motion"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"

const testimonials = [
  {
    name: "John Smith",
    role: "CEO, Tech Corp",
    text: "Working with this developer was a game-changer for our project. Their expertise and dedication are unmatched.",
  },
  {
    name: "Sarah Johnson",
    role: "Marketing Director, Creative Co",
    text: "The attention to detail and creative solutions provided were exactly what we needed. Highly recommended!",
  },
  {
    name: "Mike Brown",
    role: "Startup Founder",
    text: "From concept to launch, the support and skill demonstrated were invaluable to our success.",
  },
]

export default function Testimonials() {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-background to-secondary relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-center text-primary"
        >
          Testimonials
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: (i) => ({
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: i * 0.3,
                    duration: 0.5,
                  },
                }),
              }}
              custom={index}
              initial="hidden"
              animate={controls}
              className="bg-background p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 + index * 0.3, duration: 0.5 }}
                className="absolute -top-4 -left-4 w-16 h-16 bg-accent rounded-full flex items-center justify-center text-4xl text-background font-bold opacity-20"
              >
                "
              </motion.div>
              <p className="mb-4 italic relative z-10">"{testimonial.text}"</p>
              <div className="relative z-10">
                <p className="font-semibold text-primary">{testimonial.name}</p>
                <p className="text-secondary">{testimonial.role}</p>
              </div>
              <motion.div
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-0 left-0 h-1 bg-accent"
              />
            </motion.div>
          ))}
        </div>
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

