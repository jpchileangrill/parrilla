import { Service } from '@/types';
import { Briefcase, Heart, Coffee, Wine, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ServiceCardProps {
  service: Service;
}

const iconMap = {
  Briefcase,
  Heart,
  Coffee,
  Wine,
};

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = iconMap[service.icon as keyof typeof iconMap] || Briefcase;

  return (
    <div className="service-card group">
      <div className="relative h-64 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-secondary text-secondary-foreground w-12 h-12 rounded-full flex items-center justify-center mb-3">
            <Icon className="h-6 w-6" />
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
        <p className="text-muted-foreground mb-4">{service.description}</p>
        
        <ul className="space-y-2 mb-6">
          {service.features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-sm">
              <ChevronRight className="h-4 w-4 text-primary" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        
        <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
          Más Información
        </Button>
      </div>
    </div>
  );
}
