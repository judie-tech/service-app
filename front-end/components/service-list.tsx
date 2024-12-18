import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Service {
  id: string
  title: string
  provider: string
  location: string
  image: string
  category: string
}

interface ServiceListProps {
  services: Service[]
}

export default function ServiceList({ services }: ServiceListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {services.map((service) => (
        <Card key={service.id} className="overflow-hidden">
          <Link href={`/service/${service.id}`}>
            <div className="relative h-48">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
              />
            </div>
            <CardHeader className="p-4">
              <Badge className="w-fit mb-2" variant="secondary">
                {service.category}
              </Badge>
              <h3 className="font-semibold">{service.title}</h3>
              <div className="text-sm text-gray-600">
                <div>{service.provider}</div>
                <div>{service.location}</div>
              </div>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <Button className="w-full bg-purple-600 hover:bg-purple-700">
                Book Now
              </Button>
            </CardContent>
          </Link>
        </Card>
      ))}
    </div>
  )
}

