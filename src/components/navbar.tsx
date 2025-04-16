
import { Search, ShoppingCart, User, ChevronDown } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-6">
          <a href="/" className="text-2xl font-bold text-purple-600">
            Quick & Quality
          </a>
          <Button variant="outline" className="hidden lg:flex items-center gap-2">
            Select Location <ChevronDown className="h-4 w-4" />
          </Button>
        </div>

        <div className="hidden flex-1 items-center justify-center px-20 lg:flex">
          <div className="relative w-full max-w-2xl">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <Input 
              type="search" 
              placeholder="Search for products..." 
              className="w-full pl-10"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" className="gap-2">
            <User className="h-5 w-5" />
            <span>Login</span>
          </Button>
          <Button variant="ghost" size="sm" className="gap-2">
            <ShoppingCart className="h-5 w-5" />
            <span>Cart</span>
          </Button>
        </div>
      </div>
    </nav>
  )
}
