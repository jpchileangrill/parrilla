import { Service, MenuItem, Testimonial, Package } from '@/types';

export const services: Service[] = [
  {
    id: '1',
    title: 'Asados Corporativos',
    description: 'Parrilladas profesionales para eventos empresariales, team building y celebraciones corporativas.',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&h=600&fit=crop',
    icon: 'Briefcase',
    features: ['Parrilla en vivo', 'Carnes premium', 'Servicio completo', 'Anticuchos y choripanes'],
  },
  {
    id: '2',
    title: 'Bodas & Celebraciones',
    description: 'Haz de tu día especial un momento inolvidable con auténtico asado chileno a la parrilla.',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&h=600&fit=crop',
    icon: 'Heart',
    features: ['Parrillero profesional', 'Barra de ensaladas', 'Pebre y salsas caseras', 'Servicio completo'],
  },
  {
    id: '3',
    title: 'Parrilladas Familiares',
    description: 'Asados tradicionales chilenos para reuniones familiares y celebraciones íntimas.',
    image: 'https://images.unsplash.com/photo-1558030006-450675393462?w=800&h=600&fit=crop',
    icon: 'Coffee',
    features: ['Carnes seleccionadas', 'Ensaladas frescas', 'Pebre tradicional', 'Servicio a domicilio'],
  },
  {
    id: '4',
    title: 'Eventos & Recepciones',
    description: 'Servicio de parrilla y catering para recepciones, inauguraciones y eventos sociales.',
    image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=800&h=600&fit=crop',
    icon: 'Wine',
    features: ['Anticuchos gourmet', 'Empanadas fritas', 'Barra de tragos', 'Montaje completo'],
  },
];

export const menuItems: MenuItem[] = [
  {
    id: '1',
    name: 'Asado de Tira Premium',
    description: 'Costillas de res maduradas, asadas a la parrilla con cocción lenta y carbón de espino',
    category: 'Parrilla',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&h=400&fit=crop',
    priceRange: '$$$$',
  },
  {
    id: '2',
    name: 'Lomo Vetado',
    description: 'Lomo fino con marbling perfecto, sellado a alta temperatura y terminado al punto',
    category: 'Parrilla',
    image: 'https://images.unsplash.com/photo-1546039907-7fa05f864c02?w=600&h=400&fit=crop',
    priceRange: '$$$$',
  },
  {
    id: '3',
    name: 'Anticuchos de Corazón',
    description: 'Tradicionales anticuchos chilenos marinados en ají y especias, asados a la parrilla',
    category: 'Entradas',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&h=400&fit=crop',
    priceRange: '$$',
  },
  {
    id: '4',
    name: 'Chorizo Parrillero',
    description: 'Choripanes artesanales con pebre picante y pan amasado recién horneado',
    category: 'Entradas',
    image: 'https://images.unsplash.com/photo-1619894991069-b5f1c7154be7?w=600&h=400&fit=crop',
    priceRange: '$$',
  },
  {
    id: '5',
    name: 'Mote con Huesillos',
    description: 'Refrescante bebida tradicional chilena con duraznos y trigo mote',
    category: 'Postres',
    image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=600&h=400&fit=crop',
    priceRange: '$',
  },
  {
    id: '6',
    name: 'Sopaipillas Pasadas',
    description: 'Sopaipillas artesanales bañadas en chancaca caliente con canela',
    category: 'Postres',
    image: 'https://images.unsplash.com/photo-1587248720327-7921a6d0ca43?w=600&h=400&fit=crop',
    priceRange: '$',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Roberto Sánchez',
    company: 'Tech Solutions',
    text: 'El asado corporativo estuvo increíble. Las carnes de primera calidad y el parrillero muy profesional. Todos quedaron encantados con el sabor chileno auténtico.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Carolina y Diego',
    company: 'Boda Muñoz-Silva',
    text: 'JP Chilean Grill hizo de nuestra boda algo inolvidable. El asado estuvo espectacular, todos nuestros invitados quedaron felices. ¡Gracias por todo!',
    rating: 5,
  },
  {
    id: '3',
    name: 'Patricia Lagos',
    company: 'Constructora del Sur',
    text: 'Contratamos para un evento de 200 personas y todo salió perfecto. Las parrilladas estuvieron exquisitas, muy recomendados para eventos grandes.',
    rating: 5,
  },
];

export const packages: Package[] = [
  {
    id: '1',
    name: 'Parrillada Familiar',
    description: 'Perfecto para reuniones familiares íntimas',
    price: 'Desde $18.000 por persona',
    features: [
      'Anticuchos de entrada',
      '2 cortes de carne a elección',
      'Ensaladas y pebre',
      'Pan amasado',
      'Parrillero incluido',
    ],
  },
  {
    id: '2',
    name: 'Asado Premium',
    description: 'Ideal para eventos corporativos y celebraciones',
    price: 'Desde $28.000 por persona',
    features: [
      'Tabla de anticuchos y choripanes',
      '3 cortes premium (asado, lomo, entraña)',
      'Barra de ensaladas gourmet',
      'Pebre y salsas artesanales',
      'Parrilla en vivo',
      'Servicio completo de meseros',
    ],
    popular: true,
  },
  {
    id: '3',
    name: 'Grill Exclusivo',
    description: 'Experiencia gastronómica chilena de lujo',
    price: 'Desde $45.000 por persona',
    features: [
      'Degustación completa de parrilla',
      'Carnes maduradas premium',
      'Chef parrillero en vivo',
      'Maridaje con vinos chilenos',
      'Barra de tragos premium',
      'Decoración temática chilena',
      'Coordinador de eventos',
    ],
  },
];
