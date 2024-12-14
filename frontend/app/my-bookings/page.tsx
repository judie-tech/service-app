"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, MapPin, Calendar, Clock } from "lucide-react";
import Image from "next/image";
import { useToast } from "@/hooks/use-toast";

const bookings = {
  booked: [
    {
      id: 1,
      service: "Washing Cloths",
      provider: "Emma Potter",
      location: "525 N Tyron Street, New York",
      date: "27-Mar-2024",
      time: "11:00 AM",
      image: "/images/washing-cloths.jpg",
    },
    {
      id: 2,
      service: "House Cleaning",
      provider: "Jenny Wilson",
      location: "255 Grand Park Ave, New York",
      date: "11-Mar-2024",
      time: "10:30 AM",
      image: "/images/house-cleaning.jpg",
    },
  ],
  completed: [],
};

export default function MyBookingsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">My Bookings</h1>

      <Tabs defaultValue="booked" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="booked">Booked</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>

        <TabsContent value="booked" className="space-y-4">
          {bookings.booked.map((booking) => (
            <div key={booking.id} className="bg-white rounded-lg shadow-sm p-4">
              <div className="flex gap-6">
                <div className="w-24 h-24 relative flex-shrink-0">
                  <Image
                    src={booking.image}
                    alt={booking.service}
                    fill
                    className="rounded-lg object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2">
                    {booking.service}
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4 text-purple-600" />
                      <span className="text-purple-600">
                        {booking.provider}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-gray-500" />
                      <span className="text-gray-600">{booking.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-gray-500" />
                      <span className="text-gray-600">
                        Service on: {booking.date}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-gray-500" />
                      <span className="text-gray-600">
                        Service on: {booking.time}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </TabsContent>

        <TabsContent value="completed" className="space-y-4">
          {bookings.completed.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              No completed bookings yet
            </div>
          ) : (
            bookings.completed.map((booking) => (
              <div
                key={booking.id}
                className="bg-white rounded-lg shadow-sm p-4"
              >
                {/* Same structure as booked items */}
              </div>
            ))
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
