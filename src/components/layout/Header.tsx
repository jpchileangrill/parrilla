import { Phone, Mail, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="flex items-center justify-between py-3 border-b border-border">
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <a href="tel:+56912345678" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">+56 9 1234 5678</span>
            </a>
            <a href="mailto:contacto@jpchileangrill.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="h-4 w-4" />
              <span className="hidden md:inline">contacto@jpchileangrill.com</span>
            </a>
          </div>
          
          <Button variant="ghost" size="icon" className="lg:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
        
        {/* Main Navigation */}
        <nav className="flex items-center justify-between py-4">
          <h1 className="text-2xl md:text-3xl font-bold text-primary">
            JP <span className="text-secondary">Chilean Grill</span>
          </h1>
          
          <div className="hidden lg:flex items-center gap-8">
            <button onClick={() => scrollToSection('inicio')} className="text-foreground hover:text-primary transition-colors">
              Inicio
            </button>
            <button onClick={() => scrollToSection('servicios')} className="text-foreground hover:text-primary transition-colors">
              Servicios
            </button>
            <button onClick={() => scrollToSection('menu')} className="text-foreground hover:text-primary transition-colors">
              Menú
            </button>
            <button onClick={() => scrollToSection('paquetes')} className="text-foreground hover:text-primary transition-colors">
              Paquetes
            </button>
            <button onClick={() => scrollToSection('testimonios')} className="text-foreground hover:text-primary transition-colors">
              Testimonios
            </button>
            <Button onClick={() => scrollToSection('contacto')} className="btn-secondary">
              Cotizar Ahora
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
