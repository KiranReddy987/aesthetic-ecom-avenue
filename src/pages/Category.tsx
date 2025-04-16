
import { Navbar } from "@/components/navbar"
import { CategoryNav } from "@/components/category-nav"
import { ProductCard } from "@/components/product-card"

const products = [
  {
    title: "boAt Storm Call 3 Smart Watch w/ 4.3cm Display",
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800",
    price: 1499,
    originalPrice: 8499,
    discount: 82,
    unit: "1 pc"
  },
  {
    title: "URBN 20000 mAh Premium Black Power Bank",
    image: "https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?w=800",
    price: 1899,
    originalPrice: 4999,
    discount: 62,
    unit: "1 pc"
  }
]

const Category = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <CategoryNav />
      
      <main className="mx-auto max-w-7xl px-4 py-8">
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Category;
