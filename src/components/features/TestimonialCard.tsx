import { Testimonial } from '@/types';
import { Star, Quote } from 'lucide-react';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-card p-6 rounded-lg border border-border">
      <Quote className="h-8 w-8 text-secondary mb-4" />
      
      <div className="flex gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
        ))}
      </div>
      
      <p className="text-muted-foreground mb-6 italic">&quot;{testimonial.text}&quot;</p>
      
      <div>
        <p className="font-bold">{testimonial.name}</p>
        <p className="text-sm text-muted-foreground">{testimonial.company}</p>
      </div>
    </div>
  );
}
