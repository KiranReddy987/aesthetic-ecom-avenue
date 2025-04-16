
import { Link } from "react-router-dom"
import { 
  LayoutGrid, Coffee, Home, Gamepad2, Apple, 
  Smartphone, Sparkles, Shirt, Tags, Baby 
} from "lucide-react"
import { cn } from "@/lib/utils"

const categories = [
  { name: "All", icon: LayoutGrid, href: "/" },
  { name: "Cafe", icon: Coffee, href: "/category/cafe" },
  { name: "Home", icon: Home, href: "/category/home" },
  { name: "Toys", icon: Gamepad2, href: "/category/toys" },
  { name: "Fresh", icon: Apple, href: "/category/fresh" },
  { name: "Electronics", icon: Smartphone, href: "/category/electronics" },
  { name: "Beauty", icon: Sparkles, href: "/category/beauty" },
  { name: "Fashion", icon: Shirt, href: "/category/fashion" },
  { name: "Deal Zone", icon: Tags, href: "/category/deals" },
  { name: "Baby Store", icon: Baby, href: "/category/baby" },
]

export function CategoryNav() {
  return (
    <div className="border-b bg-white">
      <nav className="mx-auto max-w-7xl px-4">
        <ul className="flex items-center gap-8 overflow-x-auto py-3">
          {categories.map((category) => (
            <li key={category.name}>
              <Link
                to={category.href}
                className={cn(
                  "flex items-center gap-2 text-sm font-medium text-gray-600 transition-colors hover:text-purple-600",
                  category.name === "All" && "text-purple-600"
                )}
              >
                <category.icon className="h-5 w-5" />
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
