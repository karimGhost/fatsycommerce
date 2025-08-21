import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

type RatingStarsProps = {
  rating: number;
  maxRating?: number;
  className?: string;
};

export default function RatingStars({ rating, maxRating = 5, className }: RatingStarsProps) {
  return (
    <div className={cn("flex items-center gap-0.5", className)}>
      {[...Array(maxRating)].map((_, index) => {
        const starValue = index + 1;
        return (
          <Star
            key={index}
            className={cn(
              "h-4 w-4",
              starValue <= rating ? "text-yellow-400 fill-yellow-400" : "text-muted-foreground/50"
            )}
          />
        );
      })}
    </div>
  );
}
