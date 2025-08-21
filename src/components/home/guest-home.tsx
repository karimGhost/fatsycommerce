"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { ArrowRight } from "lucide-react";
import ProductGrid from "@/components/products/product-grid";
import { products, categories } from "@/lib/placeholder-data";
import { Icon } from "@/lib/icons";
import LoginModal from "@/components/auth/login-modal";
import { useAuth } from "@/hooks/useAuth";

export default function GuestHome() {
  const trendingProducts = products.slice(0, 4);
const {user} = useAuth();
  const [loginOpen, setLoginOpen] = useState(false);

  const handleProtectedClick = (e: React.MouseEvent) => {
    if (!user) {
      e.preventDefault();
      setLoginOpen(true);
    }
  };

  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <section className="bg-card text-center py-20 sm:py-32">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground">
            Welcome to FastyCommerce Lite
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground">
            Discover the best products, curated for you. High quality, great prices, and fast shipping.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            {/* Shop Now requires login */}
            <Button asChild size="lg">
              <Link href="/products" onClick={handleProtectedClick}>
                Shop Now
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-8">
          Shop by Category
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={`/products?category=${category.name}`}
              onClick={handleProtectedClick}
            >
              <Card className="group hover:shadow-lg transition-shadow duration-300">
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <Icon
                    name={category.icon}
                    className="h-12 w-12 text-primary mb-4"
                  />
                  <h3 className="text-lg font-semibold text-foreground">
                    {category.name}
                  </h3>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <Separator className="my-12" />

      {/* Trending */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-8">
          Trending Deals
        </h2>
        <ProductGrid    handleProtectedClick={handleProtectedClick}  products={trendingProducts} />
        <div className="text-center mt-8">
          <Button asChild variant="outline">
            <Link href="/products" onClick={handleProtectedClick}>
              View All Products <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <Separator className="my-12" />

      {/* Newsletter */}
      <section className="bg-card py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-2">
            Stay in the Loop
          </h2>
          <p className="text-muted-foreground mb-6">
            Subscribe to our newsletter for the latest deals and updates.
          </p>
          <form className="max-w-md mx-auto flex gap-2">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-grow"
            />
            <Button type="submit">Subscribe</Button>
          </form>
        </div>
      </section>

      {/* 🔹 Login Modal */}
      <LoginModal open={loginOpen} onOpenChange={setLoginOpen} />
    </div>
  );
}
