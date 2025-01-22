import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

const ServiceRequestForm = () => {
  const [date, setDate] = React.useState<Date>();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Service Request Submitted",
      description: "A technician will be assigned shortly.",
    });
  };

  return (
    <Card className="p-6 animate-fade-in">
      <h2 className="text-2xl font-bold mb-6">New Service Request</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium">Service Type</label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select service type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="repair">Repair</SelectItem>
                <SelectItem value="renewal">Renewal</SelectItem>
                <SelectItem value="consultation">Consultation</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm font-medium">Governor ID</label>
            <Input placeholder="Enter Governor ID" className="mt-1" />
          </div>

          <div>
            <label className="text-sm font-medium">Client Name</label>
            <Input placeholder="Enter client name" className="mt-1" />
          </div>

          <div>
            <label className="text-sm font-medium">Issue Description</label>
            <Textarea 
              placeholder="Describe the issue or service needed"
              className="mt-1"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Preferred Date</label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-full justify-start text-left font-normal mt-1",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : "Pick a date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>

        <Button type="submit" className="w-full">
          Submit Request
        </Button>
      </form>
    </Card>
  );
};

export default ServiceRequestForm;