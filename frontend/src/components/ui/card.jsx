import React from "react";

export const Card = ({ children, className }) => (
  <div className={`border-2 border-gray-300 rounded-lg shadow-lg ${className}`}>{children}</div>
);

export const CardContent = ({ children }) => (
  <div className="p-4">{children}</div>
);