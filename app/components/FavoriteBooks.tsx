"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"

const books = [
  {
    title: "Clean Code",
    author: "Robert C. Martin",
    image: "/CODE.PNG",
    description: "A handbook of agile software craftsmanship",
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt, David Thomas",
    image: "/THE.PNG",
    description: "Your journey to mastery",
  }, 
  {
    title: "Design Patterns",
    author: "Erich Gamma, et al.",
    image: "/placeholder.svg?height=300&width=200",
    description: "Elements of Reusable Object-Oriented Software",
  },
  {
    title: "Refactoring",
    author: "Martin Fowler",
    image: "/refact.PNG",
    description: "Improving the design of existing code",
  },
]

export default function FavoriteBooks() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-20 bg-gradient-to-br from-background via-secondary to-background">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-center text-primary"
        >
          My Favorite Books
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {books.map((book, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="bg-background p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center relative overflow-hidden group"
            >
              <div className="relative w-32 h-48 mx-auto mb-4">
                <Image
                  src={book.image || "/placeholder.svg"}
                  alt={book.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded shadow-md"
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4"
                >
                  <p className="text-white text-sm">{book.description}</p>
                </motion.div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary">{book.title}</h3>
              <p className="text-secondary">{book.author}</p>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: hoveredIndex === index ? "100%" : 0 }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-0 left-0 h-1 bg-accent"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

