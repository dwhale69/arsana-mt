import React from 'react';
import { MaintenanceIcon } from './MaintenanceIcon';
import { MaintenanceMessage } from './MaintenanceMessage';

export const MaintenancePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white flex items-center justify-center p-4">
      <div className="max-w-2xl w-full space-y-8">
        <div className="flex justify-center">
          <MaintenanceIcon />
        </div>
        <MaintenanceMessage 
          title="Under Maintenance"
          description="We're currently performing scheduled maintenance to improve your experience."
        />
        <div className="text-center">
          <p className="text-purple-400 text-sm">
            Thank you for your patience
          </p>
        </div>
      </div>
    </div>
  );
};