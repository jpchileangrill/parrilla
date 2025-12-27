import { Phone, Mail, Menu, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function Header() {
  const { language, setLanguage, t } = useLanguage();

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
          
          <div className="flex items-center gap-2">
            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-2">
                  <Globe className="h-4 w-4" />
                  <span className="hidden sm:inline">{language === 'es' ? 'Español' : 'English'}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setLanguage('es')} className="cursor-pointer">
                  <span className={language === 'es' ? 'font-bold' : ''}>🇨🇱 Español</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage('en')} className="cursor-pointer">
                  <span className={language === 'en' ? 'font-bold' : ''}>🇺🇸 English</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="flex items-center justify-between py-4">
          <h1 className="text-2xl md:text-3xl font-bold text-primary">
            JP <span className="text-secondary">{t('header.title')}</span>
          </h1>
          
          <div className="hidden lg:flex items-center gap-8">
            <button onClick={() => scrollToSection('inicio')} className="text-foreground hover:text-primary transition-colors">
              {t('header.nav.inicio')}
            </button>
            <button onClick={() => scrollToSection('servicios')} className="text-foreground hover:text-primary transition-colors">
              {t('header.nav.servicios')}
            </button>
            <button onClick={() => scrollToSection('menu')} className="text-foreground hover:text-primary transition-colors">
              {t('header.nav.menu')}
            </button>
            <button onClick={() => scrollToSection('paquetes')} className="text-foreground hover:text-primary transition-colors">
              {t('header.nav.paquetes')}
            </button>
            <button onClick={() => scrollToSection('testimonios')} className="text-foreground hover:text-primary transition-colors">
              {t('header.nav.testimonios')}
            </button>
            <Button onClick={() => scrollToSection('contacto')} className="btn-secondary">
              {t('header.nav.cotizar')}
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}