import React from "react";

export const Button = ({ children, onClick, className, variant }) => {
  const baseStyle = "px-6 py-3 rounded text-white font-semibold transition duration-200";
  const variantStyle =
    variant === "destructive"
      ? "bg-red-500 hover:bg-red-600"
      : "bg-blue-500 hover:bg-blue-600";

  return (
    <button
      onClick={onClick}
      className={`${baseStyle} ${variantStyle} ${className}`}
    >
      {children}
    </button>
  );
};