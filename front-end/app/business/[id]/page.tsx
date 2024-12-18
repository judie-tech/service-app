"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { categories } from "@/lib/data";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import BookingModal from "@/components/booking-modal";
import { motion } from "framer-motion";

export default function BusinessPage() {
  const { id } = useParams();
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  // Find the business by id
  const business = categories
    .flatMap((category) =>
      category.services.flatMap((service) =>
        service.providers.find((provider) => provider.id.toString() === id)
      )
    )
    .find(Boolean);

  if (!business) {
    return <div>Business not found</div>;
  }

  const service = categories
    .flatMap((category) =>
      category.services.find((service) =>
        service.providers.some((provider) => provider.id.toString() === id)
      )
    )
    .find(Boolean);

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        <div>
          <Image
            src={business.image}
            alt={business.name}
            width={500}
            height={300}
            className="rounded-lg object-cover w-full h-64"
          />
          <div className="mt-4 grid grid-cols-3 gap-2">
            {business.galleryImages.map((img, index) => (
              <Image
                key={index}
                src={img}
                alt={`Gallery image ${index + 1}`}
                width={150}
                height={150}
                className="rounded-lg object-cover w-full h-24"
              />
            ))}
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{service?.title}</h1>
          <h2 className="text-xl font-semibold mb-2">{business.name}</h2>
          <p className="text-gray-600 mb-4">{business.location}</p>
          <p className="text-gray-800 mb-6">{business.description}</p>
          <div className="flex items-center mb-6">
            <span className="text-yellow-500 mr-2">★★★★★</span>
            <span className="text-gray-600">{business.rating} out of 5</span>
          </div>
          <Button
            onClick={() => setIsBookingModalOpen(true)}
            className="w-full md:w-auto"
          >
            Book Now
          </Button>
        </div>
      </motion.div>

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        businessName={service?.title || ""}
        provider={business.name}
        location={business.location}
      />
    </div>
  );
}
