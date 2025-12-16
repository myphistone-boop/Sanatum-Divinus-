import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  ...props 
}) => {
  // Enhanced hover effects: greater translation, deeper shadow for 3D feel
  const baseStyles = "px-12 py-5 rounded-full uppercase tracking-[0.25em] font-sans text-sm md:text-base font-bold transition-all duration-500 ease-out transform hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(0,0,0,0.3)] active:scale-95";
  
  const variants = {
    primary: "bg-sacred-gold text-sacred-green-dark hover:bg-white hover:shadow-[0_20px_40px_rgba(217,185,94,0.3)] border border-transparent",
    secondary: "bg-sacred-green-dark text-sacred-gold border-2 border-sacred-gold/30 hover:border-sacred-gold hover:bg-sacred-green-dark/80",
    outline: "border-2 border-sacred-gold text-sacred-gold hover:bg-sacred-gold hover:text-sacred-green-dark",
    ghost: "text-sacred-cream hover:text-sacred-gold hover:bg-white/5",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};