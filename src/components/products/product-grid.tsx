import ProductCard from './product-card';
import type { Product } from '@/lib/placeholder-data';

type ProductGridProps = {
  products: Product[];
  handleProtectedClick: (e: React.MouseEvent) => void; 
};

export default function ProductGrid({ products , handleProtectedClick }: ProductGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard handleProtectedClick={handleProtectedClick} key={product.id} product={product} />
      ))}
    </div>
  );
}
