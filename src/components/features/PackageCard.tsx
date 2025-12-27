import { Package } from '@/types';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

interface PackageCardProps {
  package: Package;
}

export function PackageCard({ package: pkg }: PackageCardProps) {
  return (
    <div className={`relative bg-card rounded-lg border-2 p-8 ${
      pkg.popular ? 'border-secondary scale-105 shadow-xl' : 'border-border'
    }`}>
      {pkg.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-secondary text-secondary-foreground px-4 py-1 rounded-full text-sm font-bold">
            Más Popular
          </span>
        </div>
      )}
      
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
        <p className="text-muted-foreground mb-4">{pkg.description}</p>
        <p className="text-3xl font-bold text-primary">{pkg.price}</p>
      </div>
      
      <ul className="space-y-3 mb-8">
        {pkg.features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      
      <Button className={`w-full ${pkg.popular ? 'btn-secondary' : 'btn-primary'}`} size="lg">
        Seleccionar Paquete
      </Button>
    </div>
  );
}
