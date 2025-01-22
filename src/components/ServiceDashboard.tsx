import React from 'react';
import { Card } from "@/components/ui/card";
import { 
  BarChart, 
  Activity, 
  Clock,
  Users
} from "lucide-react";

const ServiceDashboard = () => {
  const stats = [
    { title: "Active Requests", value: "12", icon: Activity },
    { title: "Avg Response Time", value: "2.5h", icon: Clock },
    { title: "Available Technicians", value: "8", icon: Users },
    { title: "Total Services", value: "45", icon: BarChart },
  ];

  return (
    <div className="p-6 space-y-6 animate-fade-in">
      <h1 className="text-3xl font-bold text-gray-900">Service Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <Card key={index} className="stats-card">
            <div className="flex items-center space-x-4">
              <div className="p-2 rounded-full bg-primary/20">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ServiceDashboard;