
import { ShoppingCart, Menu, Search } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <div className="flex items-center gap-6">
          <Button variant="ghost" size="icon" className="lg:hidden">
            <Menu className="h-6 w-6" />
          </Button>
          <a href="/" className="text-xl font-semibold text-gray-900">
            ShopVibe
          </a>
        </div>

        <div className="hidden flex-1 items-center justify-center px-20 lg:flex">
          <div className="relative w-full max-w-2xl">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <Input 
              type="search" 
              placeholder="Search products..." 
              className="w-full pl-10"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <ShoppingCart className="h-5 w-5" />
          </Button>
          <Button className="hidden lg:inline-flex">Sign In</Button>
        </div>
      </div>
    </nav>
  )
}
