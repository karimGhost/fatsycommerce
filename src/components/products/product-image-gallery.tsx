'use client';

import { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';

type ProductImageGalleryProps = {
  images: string[];
  productName: string;
};

export default function ProductImageGallery({ images, productName }: ProductImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="flex flex-col gap-4">
      <Card className="overflow-hidden">
        <CardContent className="p-0">
          <Image
            src={images[selectedImage]}
            alt={`${productName} - Image ${selectedImage + 1}`}
            width={600}
            height={600}
            className="w-full h-auto aspect-square object-cover"
            data-ai-hint="product image"
          />
        </CardContent>
      </Card>
      <div className="grid grid-cols-5 gap-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={cn(
              "overflow-hidden rounded-md border-2 transition-all",
              selectedImage === index ? "border-primary" : "border-transparent hover:border-primary/50"
            )}
          >
            <Image
              src={image}
              alt={`${productName} - Thumbnail ${index + 1}`}
              width={100}
              height={100}
              className="w-full h-auto aspect-square object-cover"
               data-ai-hint="product thumbnail"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
