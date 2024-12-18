"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { categories } from "@/lib/data"
import Image from "next/image"
import Link from "next/link"

export default function CategorySection() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  return (
    <div className="py-8">
      {/* Categories */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-8">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={selectedCategory === category.id ? "default" : "outline"}
            className="flex flex-col items-center p-4 h-auto"
            onClick={() => setSelectedCategory(
              category.id === selectedCategory ? null : category.id
            )}
          >
            <category.icon className="h-6 w-6 mb-2" />
            <span className="text-sm text-center">{category.name}</span>
          </Button>
        ))}
      </div>

      {/* Services for selected category */}
      {selectedCategory && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories
            .find(cat => cat.id === selectedCategory)
            ?.services.map(service => (
              <Card key={service.id}>
                <CardHeader>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">{service.description}</p>
                  <div className="space-y-4">
                    {service.providers.map(provider => (
                      <div key={provider.id} className="flex items-center gap-4">
                        <Image
                          src={provider.image}
                          alt={provider.name}
                          width={50}
                          height={50}
                          className="rounded-full"
                        />
                        <div>
                          <p className="font-semibold">{provider.name}</p>
                          <p className="text-sm text-gray-600">{provider.location}</p>
                          <p className="text-sm text-yellow-500">★ {provider.rating}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
        </div>
      )}
    </div>
  )
}

