import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'es';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string) => {
    const keys = key.split('.');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let value: any = translations[language];

    for (const k of keys) {
      value = value?.[k];
    }

    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

const translations = {
  es: {
    header: {
      title: 'Chilean Grill',
      nav: {
        inicio: 'Inicio',
        servicios: 'Servicios',
        menu: 'Menú',
        paquetes: 'Paquetes',
        testimonios: 'Testimonios',
        cotizar: 'Cotizar Ahora'
      }
    },
    hero: {
      title: 'Experiencias Gastronómicas Inolvidables',
      subtitle: 'Catering premium para eventos corporativos, bodas y celebraciones especiales',
      cta: 'Solicitar Cotización',
      menu: 'Ver Menú'
    },
    stats: {
      years: 'Años en la Parrilla',
      events: 'Asados Realizados',
      clients: 'Clientes Satisfechos',
      available: 'Atención Disponible'
    },
    services: {
      title: 'Nuestros Servicios',
      subtitle: 'Parrilladas profesionales y catering chileno para todo tipo de eventos',
      corporate: {
        title: 'Asados Corporativos',
        description: 'Parrilladas profesionales para eventos empresariales, team building y celebraciones corporativas.',
        features: ['Parrilla en vivo', 'Carnes premium', 'Servicio completo', 'Anticuchos y choripanes']
      },
      weddings: {
        title: 'Bodas & Celebraciones',
        description: 'Haz de tu día especial un momento inolvidable con auténtico asado chileno a la parrilla.',
        features: ['Parrillero profesional', 'Barra de ensaladas', 'Pebre y salsas caseras', 'Servicio completo']
      },
      family: {
        title: 'Parrilladas Familiares',
        description: 'Asados tradicionales chilenos para reuniones familiares y celebraciones íntimas.',
        features: ['Carnes seleccionadas', 'Ensaladas frescas', 'Pebre tradicional', 'Servicio a domicilio']
      },
      events: {
        title: 'Eventos & Recepciones',
        description: 'Servicio de parrilla y catering para recepciones, inauguraciones y eventos sociales.',
        features: ['Anticuchos gourmet', 'Empanadas fritas', 'Barra de tragos', 'Montaje completo']
      },
      more: 'Más Información'
    },
    menu: {
      title: 'Menú de la Parrilla',
      subtitle: 'Descubre nuestras carnes premium y platos tradicionales chilenos'
    },
    packages: {
      title: 'Nuestros Paquetes',
      subtitle: 'Encuentra el paquete perfecto para tu evento',
      popular: 'Más Popular',
      desde: 'Desde',
      porPersona: 'por persona',
      seleccionar: 'Seleccionar Paquete'
    },
    testimonials: {
      title: 'Testimonios',
      subtitle: 'Lo que dicen nuestros clientes'
    },
    contact: {
      title: 'Solicita tu Cotización',
      subtitle: 'Completa el formulario y nos pondremos en contacto contigo',
      nombre: 'Nombre Completo',
      email: 'Email',
      telefono: 'Teléfono',
      fecha: 'Fecha del Evento',
      invitados: 'Número de Invitados',
      mensaje: 'Mensaje / Requerimientos Especiales',
      enviar: 'Solicitar Cotización'
    },
    footer: {
      description: 'Servicios de catering premium para eventos corporativos y sociales.',
      links: 'Enlaces Rápidos',
      contact: 'Contacto',
      follow: 'Síguenos',
      rights: 'Todos los derechos reservados.'
    }
  },
  en: {
    header: {
      title: 'Chilean Grill',
      nav: {
        inicio: 'Home',
        servicios: 'Services',
        menu: 'Menu',
        paquetes: 'Packages',
        testimonios: 'Testimonials',
        cotizar: 'Get Quote'
      }
    },
    hero: {
      title: 'Unforgettable Gastronomic Experiences',
      subtitle: 'Premium catering for corporate events, weddings and special celebrations',
      cta: 'Request Quote',
      menu: 'View Menu'
    },
    stats: {
      years: 'Years of Grilling',
      events: 'Events Completed',
      clients: 'Satisfied Clients',
      available: 'Available 24/7'
    },
    services: {
      title: 'Our Services',
      subtitle: 'Professional BBQ and Chilean catering for all types of events',
      corporate: {
        title: 'Corporate BBQ',
        description: 'Professional BBQ for corporate events, team building and company celebrations.',
        features: ['Live grilling', 'Premium meats', 'Full service', 'Anticuchos and chorizo']
      },
      weddings: {
        title: 'Weddings & Celebrations',
        description: 'Make your special day unforgettable with authentic Chilean BBQ.',
        features: ['Professional griller', 'Salad bar', 'Homemade sauces', 'Full service']
      },
      family: {
        title: 'Family BBQ',
        description: 'Traditional Chilean BBQ for family gatherings and intimate celebrations.',
        features: ['Selected meats', 'Fresh salads', 'Traditional pebre', 'Home delivery']
      },
      events: {
        title: 'Events & Receptions',
        description: 'BBQ and catering service for receptions, openings and social events.',
        features: ['Gourmet anticuchos', 'Fried empanadas', 'Bar service', 'Full setup']
      },
      more: 'More Information'
    },
    menu: {
      title: 'Grill Menu',
      subtitle: 'Discover our premium meats and traditional Chilean dishes'
    },
    packages: {
      title: 'Our Packages',
      subtitle: 'Find the perfect package for your event',
      popular: 'Most Popular',
      desde: 'From',
      porPersona: 'per person',
      seleccionar: 'Select Package'
    },
    testimonials: {
      title: 'Testimonials',
      subtitle: 'What our clients say'
    },
    contact: {
      title: 'Request Your Quote',
      subtitle: 'Complete the form and we will contact you',
      nombre: 'Full Name',
      email: 'Email',
      telefono: 'Phone',
      fecha: 'Event Date',
      invitados: 'Number of Guests',
      mensaje: 'Message / Special Requirements',
      enviar: 'Request Quote'
    },
    footer: {
      description: 'Premium catering services for corporate and social events.',
      links: 'Quick Links',
      contact: 'Contact',
      follow: 'Follow Us',
      rights: 'All rights reserved.'
    }
  }
};