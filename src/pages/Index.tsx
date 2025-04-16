
import { motion } from "framer-motion"
import { categories } from "@/data/categories"
import { CategoryCard } from "@/components/ui/category-card"
import { Navbar } from "@/components/navbar"

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="mx-auto max-w-7xl px-4 py-12">
        <div className="text-center">
          <h1 className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl">
            Discover Amazing Products
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Explore our wide range of categories and find what you love
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <CategoryCard {...category} />
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  )
}

export default Index
