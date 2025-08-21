import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Target, Rocket } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-extrabold tracking-tight text-foreground">About FastyCommerce </h1>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-muted-foreground">
            We're on a mission to revolutionize online shopping with speed, quality, and an unparalleled user experience.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-4">Our Story</h2>
            <p className="text-muted-foreground text-lg mb-4">
              FastyCommerce Lite was born from a simple idea: shopping online should be a pleasure, not a chore. Frustrated with slow, complicated websites, our founders set out to create a platform that is not only beautiful and intuitive but also lightning-fast.
            </p>
            <p className="text-muted-foreground text-lg">
              Today, we are a passionate team of designers, engineers, and product enthusiasts dedicated to curating the best products and delivering them to your doorstep with incredible efficiency.
            </p>
          </div>
          <Card className="overflow-hidden">
            <Image
              src="https://placehold.co/600x400.png"
              alt="Our Team"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
              data-ai-hint="team collaboration"
            />
          </Card>
        </div>

        <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-8">Our Core Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
                <Card>
                    <CardContent className="p-8">
                        <Rocket className="h-12 w-12 text-primary mx-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                        <p className="text-muted-foreground">We constantly push the boundaries of technology to create a better shopping experience.</p>
                    </CardContent>
                </Card>
                 <Card>
                    <CardContent className="p-8">
                        <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Customer First</h3>
                        <p className="text-muted-foreground">Our customers are at the heart of everything we do. Your satisfaction is our top priority.</p>
                    </CardContent>
                </Card>
                 <Card>
                    <CardContent className="p-8">
                        <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Quality</h3>
                        <p className="text-muted-foreground">We are committed to offering high-quality products that you can trust and enjoy.</p>
                    </CardContent>
                </Card>
            </div>
        </div>

      </div>
    </div>
  );
}
