import { MenuItem } from '@/types';

interface MenuCardProps {
  item: MenuItem;
}

export function MenuCard({ item }: MenuCardProps) {
  return (
    <div className="menu-card group cursor-pointer">
      <div className="relative h-48 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-3 right-3 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-semibold">
          {item.priceRange}
        </div>
      </div>
      
      <div className="p-4">
        <div className="text-xs text-primary font-semibold mb-1">{item.category}</div>
        <h3 className="text-lg font-bold mb-2">{item.name}</h3>
        <p className="text-sm text-muted-foreground line-clamp-2">{item.description}</p>
      </div>
    </div>
  );
}
