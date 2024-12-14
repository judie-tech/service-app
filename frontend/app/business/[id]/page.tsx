"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Share2, MapPin, Mail, Clock } from "lucide-react";
import BookingModal from "@/components/booking-modal";
import { toast } from "@/hooks/use-toast";

// This would typically come from your API/database
const businessData = {
  id: "1",
  title: "House Cleaning",
  provider: "Jenny Wilson",
  address: "255 Grand Park Ave, New York",
  email: "accounts@tubeguruji.com",
  hours: "8:00 AM to 10:PM",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  gallery: [
    "/placeholder.svg?height=200&width=200",
    "/placeholder.svg?height=200&width=200",
    "/placeholder.svg?height=200&width=200",
  ],
  similarBusinesses: [
    {
      id: "2",
      title: "House Cleaning",
      provider: "Jenny Wilson",
      address: "255 Grand Park Ave, New York",
      image: "/placeholder.svg?height=50&width=50",
    },
    {
      id: "3",
      title: "Washing Cloths",
      provider: "Emma Potter",
      address: "525 N Tyron Street, New York",
      image: "/placeholder.svg?height=50&width=50",
    },
    {
      id: "4",
      title: "Bathroom Cleaning",
      provider: "Henry Wilson",
      address: "525 N Tyron Street, NC",
      image: "/placeholder.svg?height=50&width=50",
    },
  ],
};

export default function BusinessPage({ params }: { params: { id: string } }) {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="md:col-span-2">
          {/* Business Header */}
          <div className="flex items-start gap-6 mb-8">
            <Image
              src="/placeholder.svg?height=100&width=100"
              alt={businessData.title}
              width={100}
              height={100}
              className="rounded-full"
            />
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <h1 className="text-2xl font-bold mb-4">
                  {businessData.title}
                </h1>
                <Button variant="outline" size="icon">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
              <div className="space-y-2 text-gray-600">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>{businessData.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>{businessData.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>Available {businessData.hours}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Description</h2>
            <p className="text-gray-600">{businessData.description}</p>
          </div>

          {/* Gallery */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Gallery</h2>
            <div className="grid grid-cols-3 gap-4">
              {businessData.gallery.map((image, index) => (
                <div key={index} className="aspect-square relative">
                  <Image
                    src={image}
                    alt={`Gallery image ${index + 1}`}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="md:col-span-1">
          <Button
            className="w-full mb-6 bg-purple-600 hover:bg-purple-700"
            onClick={() => setIsBookingOpen(true)}
          >
            Book Appointment
          </Button>

          <div>
            <h2 className="text-xl font-semibold mb-4">Similar Business</h2>
            <div className="space-y-4">
              {businessData.similarBusinesses.map((business) => (
                <div key={business.id} className="flex items-center gap-4">
                  <Image
                    src={business.image}
                    alt={business.title}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold text-purple-600">
                      {business.title}
                    </h3>
                    <p className="text-sm text-gray-600">{business.provider}</p>
                    <p className="text-xs text-gray-500">{business.address}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        businessName={businessData.title}
        onBookingComplete={() => {
          setIsBookingOpen(false);
          toast({
            title: "Booking Successful!",
            description: "Your appointment has been confirmed.",
          });
        }}
      />
    </div>
  );
}
