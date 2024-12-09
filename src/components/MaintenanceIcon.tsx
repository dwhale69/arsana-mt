import React from 'react';
import { Settings } from 'lucide-react';

export const MaintenanceIcon = () => {
  return (
    <Settings 
      className="w-20 h-20 text-purple-600 animate-spin-slow" 
      strokeWidth={1.5} 
    />
  );
};