import { categories } from '@/constants/mockData';
import * as LucideIcons from 'lucide-react';

export function CategoryNav() {
  return (
    <nav className="bg-accent/50 border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center gap-3 overflow-x-auto scrollbar-hide">
          {categories.map((category) => {
            const Icon = LucideIcons[category.icon as keyof typeof LucideIcons] as React.ComponentType<{ className?: string }>;
            
            return (
              <button
                key={category.id}
                className="category-badge flex items-center gap-2 whitespace-nowrap"
              >
                {Icon && <Icon className="h-4 w-4" />}
                <span className="text-sm font-medium">{category.name}</span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
