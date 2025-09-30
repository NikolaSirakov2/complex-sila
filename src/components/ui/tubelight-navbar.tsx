import React from 'react';
import { LucideIcon } from 'lucide-react';

interface NavItem {
  name: string;
  url: string;
  icon: LucideIcon;
}

interface NavBarProps {
  items: NavItem[];
}

export function NavBar({ items }: NavBarProps) {
  return (
    <div className="flex items-center space-x-1">
      {items.map((item, index) => {
        const Icon = item.icon;
        return (
          <a
            key={index}
            href={item.url}
            className="group relative flex items-center gap-2 px-4 py-2 rounded-lg text-secondary-foreground hover:text-primary transition-all duration-300 hover:bg-primary/10"
          >
            <Icon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
            <span className="font-medium text-sm">{item.name}</span>
            
            {/* Tubelight effect */}
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/10 via-primary/20 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
        );
      })}
    </div>
  );
}
