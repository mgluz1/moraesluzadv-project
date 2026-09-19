import React from 'react';

interface NavItemProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export const NavItem = ({ href, children, onClick }: NavItemProps) => (
  <a 
    href={href} 
    onClick={onClick}
    className="text-sm font-medium text-white/80 hover:text-nude transition-colors duration-300 uppercase tracking-widest"
  >
    {children}
  </a>
);
