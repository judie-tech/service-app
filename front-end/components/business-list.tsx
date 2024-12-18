import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Business {
  id: number;
  title: string;
  provider: string;
  location: string;
  image: string;
  category: string;
}

interface BusinessListProps {
  businesses: Business[];
}

export default function BusinessList({ businesses }: BusinessListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {businesses.map((business) => (
        <Card key={business.id} className="overflow-hidden">
          <div className="relative h-48">
            <Image
              src={business.image}
              alt={business.title}
              fill
              className="object-cover"
            />
          </div>
          <CardHeader className="p-4">
            <Badge className="mb-2 w-fit bg-purple-100 text-purple-600 hover:bg-purple-100">
              {business.category}
            </Badge>
            <CardTitle className="text-lg">{business.title}</CardTitle>
            <CardDescription className="space-y-1">
              <span className="block text-sm font-medium">
                {business.provider}
              </span>
              <span className="block text-sm text-gray-500">
                {business.location}
              </span>
            </CardDescription>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <Button className="w-full bg-purple-600 hover:bg-purple-700">
              Book Now
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
