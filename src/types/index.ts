export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: string;
  features: string[];
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  category: string;
  image: string;
  priceRange?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  text: string;
  rating: number;
  image?: string;
}

export interface Package {
  id: string;
  name: string;
  description: string;
  price: string;
  features: string[];
  popular?: boolean;
}
