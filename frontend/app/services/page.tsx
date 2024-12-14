import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const services = [
  {
    id: 1,
    title: "House Cleaning",
    description: "Professional house cleaning services",
    provider: "CleanCo",
    rating: 4.8,
    reviews: 120,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    title: "Plumbing Repair",
    description: "Expert plumbing services",
    provider: "PlumbPros",
    rating: 4.7,
    reviews: 95,
    image: "/placeholder.svg?height=100&width=100",
  },
  // Add more services as needed
]

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <Card key={service.id}>
            <CardHeader>
              <div className="flex items-center space-x-4">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.provider}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">{service.description}</p>
              <div className="flex items-center justify-between">
                <div>
                  <Badge variant="secondary" className="mr-2">
                    {service.rating} ★
                  </Badge>
                  <span className="text-sm text-gray-500">({service.reviews} reviews)</span>
                </div>
                <Button>Book Now</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

