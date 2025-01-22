import React from 'react';
import ServiceDashboard from '@/components/ServiceDashboard';
import ServiceRequestForm from '@/components/ServiceRequestForm';
import ServiceTracker from '@/components/ServiceTracker';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-8">
        <ServiceDashboard />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          <ServiceRequestForm />
          <ServiceTracker />
        </div>
      </div>
    </div>
  );
};

export default Index;