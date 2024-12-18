"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";

const services = [
  "Plumbing Repair",
  "Electrical Wiring",
  "House Cleaning",
  "Appliance Repair",
  "Painting",
  "Carpet Cleaning",
];

export default function BookingPage() {
  const [bookingData, setBookingData] = useState({
    service: "",
    date: "",
    time: "",
    address: "",
    specialRequests: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setBookingData((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceChange = (value: string) => {
    setBookingData((prev) => ({ ...prev, service: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Booking submitted:", bookingData);
    toast({
      title: "Booking Confirmed",
      description: "Your service has been booked successfully.",
    });
    // Reset form or redirect to confirmation page
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Book a Service</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="service" className="block mb-2">
                Service
              </label>
              <Select onValueChange={handleServiceChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  {services.map((service) => (
                    <SelectItem key={service} value={service}>
                      {service}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label htmlFor="date" className="block mb-2">
                Date
              </label>
              <Input
                id="date"
                name="date"
                type="date"
                value={bookingData.date}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="time" className="block mb-2">
                Time
              </label>
              <Input
                id="time"
                name="time"
                type="time"
                value={bookingData.time}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="address" className="block mb-2">
                Address
              </label>
              <Input
                id="address"
                name="address"
                value={bookingData.address}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="specialRequests" className="block mb-2">
                Special Requests
              </label>
              <Textarea
                id="specialRequests"
                name="specialRequests"
                value={bookingData.specialRequests}
                onChange={handleChange}
              />
            </div>
            <Button type="submit">Confirm Booking</Button>
          </form>
        </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Booking Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                <p>Service: {bookingData.service || "Not selected"}</p>
                <p>Date: {bookingData.date || "Not selected"}</p>
                <p>Time: {bookingData.time || "Not selected"}</p>
                <p>Address: {bookingData.address || "Not provided"}</p>
                <p>Special Requests: {bookingData.specialRequests || "None"}</p>
              </CardDescription>
            </CardContent>
            <CardFooter>
              <p className="text-sm text-muted-foreground">
                Please review your booking details before confirming.
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
