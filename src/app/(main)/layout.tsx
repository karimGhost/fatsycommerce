import type { ReactNode } from 'react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
