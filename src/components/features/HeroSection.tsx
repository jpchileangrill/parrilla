import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

export function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="relative h-[600px] md:h-[700px] overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1558030006-450675393462?w=1920&h=1080&fit=crop"
        alt="Parrilla chilena con carnes asadas"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40 flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl space-y-6 animate-slide-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Experiencias Gastronómicas Inolvidables
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              Catering premium para eventos corporativos, bodas y celebraciones especiales
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="btn-secondary text-lg" onClick={scrollToContact}>
                Solicitar Cotización
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg bg-white/10 backdrop-blur border-white text-white hover:bg-white/20">
                Ver Menú
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
