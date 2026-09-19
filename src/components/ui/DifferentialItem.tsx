import React from 'react';
import { LucideIcon } from 'lucide-react';

interface DifferentialItemProps {
  key?: React.Key;
  icon: LucideIcon;
  title: string;
  description: string;
}

export const DifferentialItem = ({ icon: Icon, title, description }: DifferentialItemProps) => (
  <div className="flex gap-4">
    <div className="flex-shrink-0 w-12 h-12 rounded-full border border-nude/30 flex items-center justify-center">
      <Icon className="text-nude w-5 h-5" aria-hidden="true" />
    </div>
    <div>
      <h4 className="font-bold text-lg mb-1 text-white">{title}</h4>
      <p className="text-white/60 text-sm leading-relaxed">{description}</p>
    </div>
  </div>
);
