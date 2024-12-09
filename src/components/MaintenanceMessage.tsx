import React from 'react';

interface MaintenanceMessageProps {
  title: string;
  description: string;
}

export const MaintenanceMessage: React.FC<MaintenanceMessageProps> = ({
  title,
  description
}) => {
  return (
    <div className="text-center space-y-4">
      <h1 className="text-4xl font-bold text-purple-600">{title}</h1>
      <p className="text-lg text-purple-500">{description}</p>
    </div>
  );
};