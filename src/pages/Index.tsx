
import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { CategoryNav } from "@/components/category-nav"
import { CategoryCard } from "@/components/ui/category-card"
import { categories } from "@/data/categories"

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <CategoryNav />
      
      <main className="mx-auto max-w-7xl px-4 py-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
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

        <div className="mt-8 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 p-8 text-white">
          <h2 className="text-4xl font-bold">Special Offers</h2>
          <p className="mt-2 text-lg">Discover amazing deals on your favorite products</p>
          <button className="mt-4 flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 hover:bg-gray-50">
            Shop Now <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </main>
    </div>
  )
}

export default Index
