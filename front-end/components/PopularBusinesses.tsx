import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { categories } from "@/lib/data";

const PopularBusinesses = () => {
  // Flatten the categories and services structure to get all businesses
  const allBusinesses = categories.flatMap((category) =>
    category.services.flatMap((service) =>
      service.providers.map((provider) => ({
        id: provider.id,
        title: service.title,
        name: provider.name,
        address: provider.location,
        category: category.name,
        image: provider.image,
      }))
    )
  );

  // Get the first 8 businesses or all if less than 8
  const popularBusinesses = allBusinesses.slice(0, 8);

  return (
    <div className="py-10 px-4 md:px-10 bg-gray-50">
      <h2 className="text-3xl font-bold text-left mb-6">Popular Businesses</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {popularBusinesses.map((business) => (
          <div
            key={business.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <img
              src={business.image}
              alt={business.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="font-semibold text-lg text-gray-800">
                {business.title}
              </h3>
              <p className="text-gray-600">{business.name}</p>
              <p className="text-gray-500 text-sm">{business.address}</p>
              <Link href={`/business/${business.id}`}>
                <Button className="mt-4 w-full bg-purple-600 hover:bg-purple-700">
                  Book Now
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularBusinesses;
