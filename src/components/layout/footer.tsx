import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Logo from '@/components/shared/logo';
import { Twitter, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Logo />
            <p className="text-muted-foreground text-sm">
              The best place to find high-quality products that fit your lifestyle.
            </p>
            <div className="flex space-x-4">
              <Link href="#"><Twitter className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" /></Link>
              <Link href="#"><Facebook className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" /></Link>
              <Link href="#"><Instagram className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" /></Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/products" className="text-muted-foreground hover:text-primary transition-colors">All Products</Link></li>
              <li><Link href="/products?category=Electronics" className="text-muted-foreground hover:text-primary transition-colors">Electronics</Link></li>
              <li><Link href="/products?category=Apparel" className="text-muted-foreground hover:text-primary transition-colors">Apparel</Link></li>
              <li><Link href="/products?category=Home+Goods" className="text-muted-foreground hover:text-primary transition-colors">Home Goods</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link href="/faq" className="text-muted-foreground hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Stay Updated</h3>
            <p className="text-sm text-muted-foreground mb-2">Subscribe to our newsletter for deals and updates.</p>
            <form className="flex gap-2">
              <Input type="email" placeholder="Your Email" className="flex-grow text-sm" />
              <Button type="submit" size="sm">Subscribe</Button>
            </form>
          </div>
        </div>
        <div className="border-t mt-8 pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} FastyCommerce Lite. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
