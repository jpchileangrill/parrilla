import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

export function ContactForm() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    guests: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: '¡Solicitud Enviada!',
      description: 'Nos pondremos en contacto contigo pronto.',
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      eventDate: '',
      guests: '',
      message: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Nombre Completo
          </label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Juan Pérez"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="juan@example.com"
          />
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-2">
            Teléfono
          </label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="+56 9 1234 5678"
          />
        </div>
        
        <div>
          <label htmlFor="eventDate" className="block text-sm font-medium mb-2">
            Fecha del Evento
          </label>
          <Input
            id="eventDate"
            name="eventDate"
            type="date"
            value={formData.eventDate}
            onChange={handleChange}
            required
          />
        </div>
        
        <div>
          <label htmlFor="guests" className="block text-sm font-medium mb-2">
            Número de Invitados
          </label>
          <Input
            id="guests"
            name="guests"
            type="number"
            value={formData.guests}
            onChange={handleChange}
            required
            placeholder="50"
            min="1"
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Mensaje / Requerimientos Especiales
        </label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          placeholder="Cuéntanos sobre tu evento..."
        />
      </div>
      
      <Button type="submit" className="w-full btn-secondary" size="lg">
        Solicitar Cotización
      </Button>
    </form>
  );
}
