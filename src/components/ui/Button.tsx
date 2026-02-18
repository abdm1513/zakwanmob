import React from 'react';
import { type LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
  fullWidth?: boolean;
  href?: string;
  to?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  icon: Icon,
  fullWidth = false,
  href,
  to,
  children,
  className = '',
  ...props
}) => {
  // Base styles
  const baseStyles = 'rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2';
  
  // Variant styles
  const variantStyles = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800',
    secondary: 'bg-green-600 text-white hover:bg-green-700 active:bg-green-800',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50 active:bg-blue-100',
  };
  
  // Size styles
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };
  
  const buttonClasses = `
    ${baseStyles}
    ${variantStyles[variant]}
    ${sizes[size]}
    ${fullWidth ? 'w-full' : ''}
    ${className}
  `;

  // If it's a react-router link
  if (to) {
    return (
      <Link to={to} className={buttonClasses}>
        {Icon && <Icon className="w-5 h-5" />}
        {children}
      </Link>
    );
  }

  // If it's an external link
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={buttonClasses}>
        {Icon && <Icon className="w-5 h-5" />}
        {children}
      </a>
    );
  }

  // Regular button
  return (
    <button className={buttonClasses} {...props}>
      {Icon && <Icon className="w-5 h-5" />}
      {children}
    </button>
  );
};