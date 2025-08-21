'use client';

import { useState, useEffect } from 'react';
import { getProductRecommendations } from '@/ai/flows/product-recommendations';
import { getProductsByIds, Product } from '@/lib/placeholder-data';
import { useViewHistory } from '@/hooks/use-view-history';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import ProductCard from './product-card';
import { Skeleton } from '@/components/ui/skeleton';

type ProductRecommendationsProps = {
  currentProductId: string;
};

export default function ProductRecommendations({ currentProductId }: ProductRecommendationsProps) {
  const { history, addProduct } = useViewHistory();
  const [recommendations, setRecommendations] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    addProduct(currentProductId);
  }, [currentProductId, addProduct]);

  useEffect(() => {
    if (history.length > 0) {
      const fetchRecommendations = async () => {
        setIsLoading(true);
        try {
          const result = await getProductRecommendations({ viewingHistory: history, maxRecommendations: 4 });
          const recommendedProducts = getProductsByIds(result.recommendations);
          // Filter out the current product from recommendations
          setRecommendations(recommendedProducts.filter(p => p.id !== currentProductId));
        } catch (error) {
          console.error("Failed to fetch product recommendations:", error);
        } finally {
          setIsLoading(false);
        }
      };
      fetchRecommendations();
    } else {
        setIsLoading(false);
    }
  }, [history, currentProductId]);

  if (isLoading) {
    return (
      <div>
        <h2 className="text-2xl font-bold tracking-tight mb-6">You Might Also Like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
                <div key={i} className="space-y-2">
                    <Skeleton className="h-[250px] w-full" />
                    <Skeleton className="h-6 w-3/4" />
                    <Skeleton className="h-4 w-full" />
                </div>
            ))}
        </div>
      </div>
    );
  }

  if (recommendations.length === 0) {
    return null;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold tracking-tight mb-6">You Might Also Like</h2>
      <Carousel opts={{ align: "start", loop: true }}>
        <CarouselContent>
          {recommendations.map(product => (
            <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
              <div className="p-1">
                <ProductCard product={product} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
