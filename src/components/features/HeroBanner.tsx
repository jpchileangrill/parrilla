import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

export function HeroBanner() {
  return (
    <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-xl">
      <img
        src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1600&h=800&fit=crop"
        alt="Banner principal"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-xl space-y-4 animate-slide-up">
            <h2 className="text-4xl md:text-6xl font-bold text-white">
              CyberRipley
            </h2>
            <p className="text-xl md:text-2xl text-white/90">
              Hasta 50% OFF en tecnología
            </p>
            <p className="text-lg text-white/80">
              Las mejores ofertas del año en notebooks, smartphones y más
            </p>
            <Button size="lg" className="btn-secondary mt-4">
              Ver Ofertas
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
