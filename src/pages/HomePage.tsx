import { HeroSection } from '@/components/features/HeroSection';
import { ServiceCard } from '@/components/features/ServiceCard';
import { MenuCard } from '@/components/features/MenuCard';
import { TestimonialCard } from '@/components/features/TestimonialCard';
import { PackageCard } from '@/components/features/PackageCard';
import { ContactForm } from '@/components/features/ContactForm';
import { services, menuItems, testimonials, packages } from '@/constants/mockData';
import { ChefHat, Award, Users, Clock } from 'lucide-react';

export function HomePage() {
  const stats = [
    { icon: ChefHat, value: '15+', label: 'Años en la Parrilla' },
    { icon: Award, value: '500+', label: 'Asados Realizados' },
    { icon: Users, value: '10,000+', label: 'Clientes Satisfechos' },
    { icon: Clock, value: '24/7', label: 'Atención Disponible' },
  ];

  return (
    <div className="min-h-screen">
      <HeroSection />
      
      {/* Stats Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <Icon className="h-12 w-12 mx-auto mb-4 text-secondary" />
                  <p className="text-4xl font-bold mb-2">{stat.value}</p>
                  <p className="text-primary-foreground/80">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section id="servicios" className="py-20 bg-accent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Nuestros Servicios</h2>
            <p className="section-subtitle">
              Parrilladas profesionales y catering chileno para todo tipo de eventos
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Menu Section */}
      <section id="menu" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Menú de la Parrilla</h2>
            <p className="section-subtitle">
              Descubre nuestras carnes premium y platos tradicionales chilenos
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuItems.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Packages Section */}
      <section id="paquetes" className="py-20 bg-accent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Nuestros Paquetes</h2>
            <p className="section-subtitle">
              Encuentra el paquete perfecto para tu evento
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg) => (
              <PackageCard key={pkg.id} package={pkg} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section id="testimonios" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Testimonios</h2>
            <p className="section-subtitle">
              Lo que dicen nuestros clientes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="section-title">Solicita tu Cotización</h2>
              <p className="section-subtitle">
                Completa el formulario y nos pondremos en contacto contigo
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-lg border border-border">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
