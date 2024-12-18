"use client"

import Image from "next/image"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Share2, Mail, Clock } from 'lucide-react'
import { useState } from "react"
import { services } from "@/lib/data"

export default function ServicePage({ params }: { params: { id: string } }) {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const service = services.find((s) => s.id === params.id)

  if (!service) return <div>Service not found</div>

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-4 mb-6">
            <Image
              src={service.image}
              alt={service.title}
              width={80}
              height={80}
              className="rounded-full"
            />
            <div>
              <h1 className="text-2xl font-bold">{service.title}</h1>
              <div className="flex items-center gap-2 text-gray-600">
                <Mail className="w-4 h-4" />
                <span>{service.provider}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Clock className="w-4 h-4" />
                <span>Available 8:00 AM to 10:PM</span>
              </div>
            </div>
            <Button variant="outline" className="ml-auto" size="icon">
              <Share2 className="w-4 h-4" />
            </Button>
          </div>

          <Card className="p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Description</h2>
            <p className="text-gray-600">{service.description}</p>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Gallery</h2>
            <div className="grid grid-cols-3 gap-4">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="relative aspect-square">
                  <Image
                    src={service.image}
                    alt={`Gallery image ${i + 1}`}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div>
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Book an Service</h2>
            <p className="text-gray-600 mb-4">
              Select Date and Time slot to book an service
            </p>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border mb-4"
            />
            <div className="space-y-2">
              {["10:00 AM", "10:30 AM", "11:30 AM", "12:00 PM", "12:30 PM"].map(
                (time) => (
                  <Button
                    key={time}
                    variant="outline"
                    className="w-full justify-start"
                  >
                    {time}
                  </Button>
                )
              )}
            </div>
            <Button className="w-full mt-4 bg-purple-600 hover:bg-purple-700">
              Book Appointment
            </Button>
          </Card>
        </div>
      </div>
    </div>
  )
}

