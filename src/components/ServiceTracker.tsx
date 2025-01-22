import React from 'react';
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle2,
  Clock,
  AlertCircle,
  ArrowRight
} from "lucide-react";

const ServiceTracker = () => {
  const services = [
    {
      id: "SR001",
      type: "Repair",
      status: "In Progress",
      client: "John Doe",
      governorId: "GOV-123",
      date: "2024-02-20",
      technician: "Mike Smith"
    },
    {
      id: "SR002",
      type: "Consultation",
      status: "Pending",
      client: "Jane Smith",
      governorId: "GOV-124",
      date: "2024-02-21",
      technician: "Pending Assignment"
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status.toLowerCase()) {
      case 'completed':
        return <CheckCircle2 className="w-5 h-5 text-green-500" />;
      case 'in progress':
        return <Clock className="w-5 h-5 text-blue-500" />;
      case 'pending':
        return <AlertCircle className="w-5 h-5 text-yellow-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="p-6 space-y-6 animate-fade-in">
      <h2 className="text-2xl font-bold">Active Service Requests</h2>
      
      <div className="space-y-4">
        {services.map((service) => (
          <Card key={service.id} className="service-card">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <h3 className="text-lg font-semibold">#{service.id}</h3>
                  <Badge variant="outline">{service.type}</Badge>
                </div>
                <p className="text-sm text-gray-500">
                  Client: {service.client} | Governor ID: {service.governorId}
                </p>
                <p className="text-sm text-gray-500">
                  Technician: {service.technician}
                </p>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  {getStatusIcon(service.status)}
                  <span className="text-sm font-medium">{service.status}</span>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400" />
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ServiceTracker;