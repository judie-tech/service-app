"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { categories } from "@/lib/data";

const CategorySection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Categories</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant="outline"
            className={`flex flex-col items-center justify-center h-24 p-2 hover:scale-105 transition-all ${
              selectedCategory === category.id
                ? "bg-purple-100 border-purple-600"
                : ""
            }`}
            onClick={() =>
              setSelectedCategory(
                category.id === selectedCategory ? null : category.id
              )
            }
          >
            <div className="p-2 rounded-full bg-purple-100 mb-2">
              <category.icon className="h-6 w-6 text-purple-600" />
            </div>
            <span className="text-sm font-medium text-center">
              {category.name}
            </span>
          </Button>
        ))}
      </div>

      {selectedCategory && (
        <div className="mt-8">
          <h3 className="text-2xl font-bold mb-6">
            {categories.find((c) => c.id === selectedCategory)?.name} Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories
              .find((c) => c.id === selectedCategory)
              ?.services.map((service) => (
                <Card
                  key={service.id}
                  className="hover:shadow-lg transition-shadow"
                >
                  <CardHeader>
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    {service.providers.map((provider) => (
                      <div
                        key={provider.id}
                        className="flex items-center gap-4 mb-4 last:mb-0"
                      >
                        <div className="relative w-12 h-12">
                          <img
                            src={provider.image}
                            alt={provider.name}
                            className="rounded-full object-cover w-full h-full"
                          />
                        </div>
                        <div>
                          <p className="font-medium">{provider.name}</p>
                          <p className="text-sm text-gray-600">
                            {provider.location}
                          </p>
                          <div className="flex items-center text-yellow-500">
                            {"★".repeat(Math.floor(provider.rating))}
                            <span className="ml-1 text-sm text-gray-600">
                              ({provider.rating})
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CategorySection;
