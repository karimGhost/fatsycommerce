import { getProductById } from '@/lib/placeholder-data';
import type { Product } from '@/lib/placeholder-data';
import { notFound } from 'next/navigation';
import AddToCart from '@/components/products/add-to-cart';
import ProductImageGallery from '@/components/products/product-image-gallery';
import ProductRecommendations from '@/components/products/product-recommendations';
import RatingStars from '@/components/shared/rating-stars';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';
import { Separator } from '@/components/ui/separator';

type ProductPageProps = {
  params: { id: string };
};

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductById(params.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        <ProductImageGallery images={product.images} productName={product.name} />
        
        <div className="flex flex-col gap-6">
          <div className="space-y-2">
            <Badge variant="secondary">{product.category}</Badge>
            <h1 className="text-3xl lg:text-4xl font-bold tracking-tight">{product.name}</h1>
            <div className="flex items-center gap-2">
              <RatingStars rating={product.rating} />
              <span className="text-sm text-muted-foreground">({product.reviewCount} reviews)</span>
            </div>
            <p className="text-3xl font-bold text-primary">{product.price.toFixed(2)}</p>
          </div>
          
          <p className="text-muted-foreground">{product.longDescription}</p>

          <AddToCart product={product} />

          <Separator />
          
          <Card>
            <CardHeader>
              <CardTitle>Specifications</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableBody>
                  {product.specifications.map((spec) => (
                    <TableRow key={spec.key}>
                      <TableCell className="font-medium">{spec.key}</TableCell>
                      <TableCell>{spec.value}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-16">
        <ProductRecommendations currentProductId={product.id} />
      </div>
    </div>
  );
}
