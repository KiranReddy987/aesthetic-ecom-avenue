
import { cn } from "@/lib/utils"
import { ChevronRight } from "lucide-react"
import { Link } from "react-router-dom"

interface CategoryCardProps {
  title: string
  image: string
  subcategories: string[]
  className?: string
}

export function CategoryCard({ title, image, subcategories, className }: CategoryCardProps) {
  return (
    <div className={cn("group relative overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg", className)}>
      <div className="aspect-[16/9] overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="mb-4 text-2xl font-semibold text-gray-800">{title}</h3>
        <ul className="space-y-2">
          {subcategories.map((subcategory) => (
            <li key={subcategory} className="flex items-center text-gray-600 hover:text-purple-600">
              <ChevronRight className="mr-2 h-4 w-4" />
              <Link to={`/category/${title.toLowerCase()}/${subcategory.toLowerCase().replace(/\s+/g, '-')}`}>
                {subcategory}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
