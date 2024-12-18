"use client";

import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  businessName: string;
  provider: string;
  location: string;
}

const timeSlots = ["10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM"];

export default function BookingModal({
  isOpen,
  onClose,
  businessName,
  provider,
  location,
}: BookingModalProps) {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string>("");
  const { toast } = useToast();
  const router = useRouter();

  const handleBooking = () => {
    if (date && selectedTime) {
      toast({
        title: "Service Booked Successfully!",
        description: `Your appointment has been scheduled for ${date.toLocaleDateString()} at ${selectedTime}`,
        duration: 3000,
      });
      onClose();
      router.push("/my-bookings");
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[700px]">
        <DialogHeader>
          <DialogTitle>Book an Service</DialogTitle>
        </DialogHeader>
        <div className="flex gap-6">
          <div className="flex-1">
            <h3 className="font-medium mb-2">{businessName}</h3>
            <p className="text-sm text-gray-600 mb-4">
              {provider} - {location}
            </p>
            <div>
              <h4 className="font-medium mb-2">Select Time Slot</h4>
              <div className="grid grid-cols-2 gap-2">
                {timeSlots.map((time) => (
                  <Button
                    key={time}
                    variant={selectedTime === time ? "default" : "outline"}
                    onClick={() => setSelectedTime(time)}
                    className="w-full"
                  >
                    {time}
                  </Button>
                ))}
              </div>
            </div>
          </div>
          <div className="flex-1">
            <h4 className="font-medium mb-2">Select Date</h4>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
              disabled={(date) => date < new Date()}
            />
          </div>
        </div>
        <DialogFooter className="flex gap-2 mt-6">
          <Button variant="outline" onClick={onClose} className="flex-1">
            Cancel
          </Button>
          <Button
            onClick={handleBooking}
            disabled={!date || !selectedTime}
            className="flex-1 bg-purple-600 hover:bg-purple-700"
          >
            Book
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
