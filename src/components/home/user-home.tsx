// components/home/user-home.tsx
import ProductGrid from "@/components/products/product-grid";
import { products } from "@/lib/placeholder-data";

export default function UserHome({ user }: { user: any }) {
  const recommended = products.slice(0, 6); // later fetch personalized

  const handleProtectedClick =() =>{
    
  }

  return (
    <div className="space-y-12 container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold tracking-tight">
        Welcome back, {user.displayName || "Shopper"} 👋
      </h1>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Recommended for you</h2>
        <ProductGrid handleProtectedClick={handleProtectedClick} products={recommended} />
      </section>
    </div>
  );
}
