
import { Button } from "./ui/button"
import { cn } from "@/lib/utils"

interface ProductCardProps {
  title: string
  image: string
  price: number
  originalPrice: number
  discount: number
  unit: string
  className?: string
}

export function ProductCard({ title, image, price, originalPrice, discount, unit, className }: ProductCardProps) {
  return (
    <div className={cn("group relative bg-white rounded-lg p-4 border transition-shadow hover:shadow-lg", className)}>
      <div className="absolute top-4 left-4 bg-purple-600 text-white text-sm font-semibold px-2 py-1 rounded">
        {discount}% Off
      </div>
      <div className="aspect-square mb-4 overflow-hidden rounded-lg">
        <img 
          src={image} 
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <h3 className="text-lg font-semibold text-gray-800 line-clamp-2 mb-2">{title}</h3>
      <div className="text-sm text-gray-500 mb-2">{unit}</div>
      <div className="flex items-center gap-2 mb-4">
        <span className="text-xl font-bold">₹{price}</span>
        <span className="text-gray-500 line-through">₹{originalPrice}</span>
      </div>
      <Button className="w-full bg-white text-pink-500 border-2 border-pink-500 hover:bg-pink-50">
        Add
      </Button>
    </div>
  )
}
