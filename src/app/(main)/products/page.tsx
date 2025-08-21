'use client';

import { useState, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { products, categories } from '@/lib/placeholder-data';
import type { Product } from '@/lib/placeholder-data';
import ProductGrid from '@/components/products/product-grid';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import LoginModal from '@/components/auth/login-modal';
import { useAuth } from '@/hooks/useAuth';
function ProductsPageContent() {
   const {user} = useAuth()

  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';
  
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([initialCategory]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500]);
  const [sortBy, setSortBy] = useState('popularity');
const [loginOpen, setLoginOpen] = useState(false);

  const handleProtectedClick = (e: React.MouseEvent) => {
    if (!user) {
      e.preventDefault();
      setLoginOpen(true);
    }
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategories(prev =>
      category === 'All'
        ? ['All']
        : prev.includes('All')
          ? [category]
          : prev.includes(category)
            ? prev.filter(c => c !== category)
            : [...prev, category]
    );
  };
  
  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || product.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategories.includes('All') || selectedCategories.includes(product.category);
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
      return matchesSearch && matchesCategory && matchesPrice;
    });

    switch (sortBy) {
      case 'price-asc':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'popularity':
      default:
        filtered.sort((a, b) => b.reviewCount - a.reviewCount);
        break;
    }
    return filtered;
  }, [searchTerm, selectedCategories, priceRange, sortBy]);
 //$
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold tracking-tight">Our Products</h1>
        <p className="mt-2 text-lg text-muted-foreground">Find what you're looking for.</p>
      </header>
      <div className="grid md:grid-cols-[280px_1fr] gap-8 items-start">
        <aside className="sticky top-24">
          <Card>
            <CardHeader><CardTitle>Filters</CardTitle></CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label>Category</Label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="cat-all" checked={selectedCategories.includes('All')} onCheckedChange={() => handleCategoryChange('All')} />
                    <Label htmlFor="cat-all">All</Label>
                  </div>
                  {categories.map(cat => (
                    <div key={cat.name} className="flex items-center space-x-2">
                      <Checkbox id={`cat-${cat.name}`} checked={selectedCategories.includes(cat.name)} onCheckedChange={() => handleCategoryChange(cat.name)} />
                      <Label htmlFor={`cat-${cat.name}`}>{cat.name}</Label>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="price-range">Price Range: {priceRange[0]} - {priceRange[1]}</Label>
                <Slider
                  id="price-range"
                  min={0}
                  max={500}
                  step={10}
                  value={priceRange}
                  onValueChange={(value) => setPriceRange(value as [number, number])}
                />
              </div>
              <Button onClick={() => {
                setSelectedCategories(['All']);
                setPriceRange([0, 500]);
              }} variant="outline" className="w-full">
                Clear Filters
              </Button>
            </CardContent>
          </Card>
        </aside>
        <main>
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
            <div className="w-full sm:w-auto sm:flex-1">
              <Input
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="max-w-sm"
              />
            </div>
            <div className="w-full sm:w-auto">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popularity">Popularity</SelectItem>
                  <SelectItem value="rating">Rating</SelectItem>
                  <SelectItem value="price-asc">Price: Low to High</SelectItem>
                  <SelectItem value="price-desc">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          {filteredAndSortedProducts.length > 0 ? (
            <ProductGrid handleProtectedClick={handleProtectedClick} products={filteredAndSortedProducts} />
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">No products found.</p>
            </div>
          )}
        </main>
      </div>
            <LoginModal open={loginOpen} onOpenChange={setLoginOpen} />
      
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProductsPageContent />
    </Suspense>
  );
}
