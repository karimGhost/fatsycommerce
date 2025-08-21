'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '@/lib/placeholder-data';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useCart } from '@/providers/CartProvider';
import { useToast } from '@/hooks/use-toast';
import RatingStars from '@/components/shared/rating-stars';
import { ShoppingCart } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';

type ProductCardProps = {
  product: Product;
    handleProtectedClick: (e: React.MouseEvent) => void; 

};
//$
export default function ProductCard({ product, handleProtectedClick }: ProductCardProps) {
  const { addItem } = useCart();
  const { toast } = useToast();
const {user} = useAuth();
  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addItem(product);
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <Card onClick={handleProtectedClick} className="group overflow-hidden transition-shadow hover:shadow-lg">
      <Link  href={ user ?  `/products/${product.id}` : ""} className="block">
        <CardContent className="p-0">
          <div className="relative">
            <Image
              src={product.images[0]}
              alt={product.name}
              width={400}
              height={400}
              className="w-full h-auto aspect-square object-cover transition-transform group-hover:scale-105"
              data-ai-hint={`${product.category.toLowerCase()} product`}
            />
            <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <Button size="icon" onClick={handleAddToCart}>
                <ShoppingCart className="h-5 w-5" />
              </Button>
            </div>
          </div>
          <div className="p-4 space-y-2">
            <h3 className="text-lg font-semibold truncate">{product.name}</h3>
            <p className="text-sm text-muted-foreground">{product.description}</p>
            <div className="flex items-center justify-between">
              <p className="text-lg font-bold text-primary">{product.price.toFixed(2)}</p>
              <RatingStars rating={product.rating} />
            </div>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
}
