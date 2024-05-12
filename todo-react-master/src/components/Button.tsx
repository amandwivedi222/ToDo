import React from 'react';
import './Button.css';

interface ButtonProps {
  variant?: 'big' | 'small';
  onClick: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant = 'small', onClick, children }) => {
  return (
    <button className={`button ${variant}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
