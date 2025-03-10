import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export function Input({ className = '', ...props }: InputProps) {
  return (
    <input
      className={`w-full px-3 py-2 bg-white border border-gray-300 rounded-lg 
        focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent
        ${className}`}
      {...props}
    />
  );
}