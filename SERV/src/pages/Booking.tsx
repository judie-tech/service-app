import React, { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  MapPin,
  CreditCard,
  ChevronRight,
  ChevronLeft,
  Shield,
  DollarSign,
} from "lucide-react";

interface BookingDetails {
  date: string;
  time: string;
  address: string;
  instructions: string;
  propertySize: string;
  serviceFrequency: string;
  extras: string[];
}

const Booking: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const serviceId = searchParams.get("service");

  const [step, setStep] = useState(1);
  const [bookingDetails, setBookingDetails] = useState<BookingDetails>({
    date: "",
    time: "",
    address: "",
    instructions: "",
    propertySize: "",
    serviceFrequency: "one-time",
    extras: [],
  });

  const [totalPrice, setTotalPrice] = useState(0);
  const basePrice = 80; // This would come from the service details

  useEffect(() => {
    // Calculate total price based on selections
    let price = basePrice;

    // Add property size factor
    switch (bookingDetails.propertySize) {
      case "small":
        price *= 1;
        break;
      case "medium":
        price *= 1.5;
        break;
      case "large":
        price *= 2;
        break;
    }

    // Add frequency discount
    switch (bookingDetails.serviceFrequency) {
      case "weekly":
        price *= 0.85; // 15% discount
        break;
      case "bi-weekly":
        price *= 0.9; // 10% discount
        break;
      case "monthly":
        price *= 0.95; // 5% discount
        break;
    }

    // Add extras
    price += bookingDetails.extras.length * 25;

    setTotalPrice(Math.round(price));
  }, [bookingDetails]);

  const timeSlots = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
  ];

  const propertySizes = [
    { id: "small", name: "Small (1-2 bedrooms)", price: basePrice },
    { id: "medium", name: "Medium (3-4 bedrooms)", price: basePrice * 1.5 },
    { id: "large", name: "Large (5+ bedrooms)", price: basePrice * 2 },
  ];

  const frequencies = [
    { id: "one-time", name: "One-time Service", discount: 0 },
    { id: "weekly", name: "Weekly (-15%)", discount: 15 },
    { id: "bi-weekly", name: "Bi-weekly (-10%)", discount: 10 },
    { id: "monthly", name: "Monthly (-5%)", discount: 5 },
  ];

  const extras = [
    { id: "deep-clean", name: "Deep Clean (+$25)", price: 25 },
    { id: "windows", name: "Window Cleaning (+$25)", price: 25 },
    { id: "laundry", name: "Laundry Service (+$25)", price: 25 },
    { id: "organizing", name: "Organization (+$25)", price: 25 },
  ];

  const handleInputChange = (field: keyof BookingDetails, value: any) => {
    setBookingDetails((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleExtrasToggle = (extraId: string) => {
    setBookingDetails((prev) => ({
      ...prev,
      extras: prev.extras.includes(extraId)
        ? prev.extras.filter((id) => id !== extraId)
        : [...prev.extras, extraId],
    }));
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-semibold text-purple-800">
              Service Details
            </h2>

            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">
                  Property Size
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {propertySizes.map((size) => (
                    <button
                      key={size.id}
                      onClick={() => handleInputChange("propertySize", size.id)}
                      className={`p-4 rounded-lg text-left ${
                        bookingDetails.propertySize === size.id
                          ? "bg-purple-600 text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-purple-100"
                      }`}
                    >
                      <div className="font-semibold">{size.name}</div>
                      <div className="text-sm opacity-90">${size.price}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">
                  Service Frequency
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {frequencies.map((freq) => (
                    <button
                      key={freq.id}
                      onClick={() =>
                        handleInputChange("serviceFrequency", freq.id)
                      }
                      className={`p-4 rounded-lg text-left ${
                        bookingDetails.serviceFrequency === freq.id
                          ? "bg-purple-600 text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-purple-100"
                      }`}
                    >
                      <div className="font-semibold">{freq.name}</div>
                      {freq.discount > 0 && (
                        <div className="text-sm opacity-90">
                          Save {freq.discount}%
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">
                  Extra Services
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {extras.map((extra) => (
                    <button
                      key={extra.id}
                      onClick={() => handleExtrasToggle(extra.id)}
                      className={`p-4 rounded-lg text-left ${
                        bookingDetails.extras.includes(extra.id)
                          ? "bg-purple-600 text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-purple-100"
                      }`}
                    >
                      {extra.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        );

      case 2:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-semibold text-purple-800">
              Schedule Service
            </h2>

            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">Select Date</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="date"
                    value={bookingDetails.date}
                    onChange={(e) => handleInputChange("date", e.target.value)}
                    min={new Date().toISOString().split("T")[0]}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Select Time</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      onClick={() => handleInputChange("time", time)}
                      className={`p-2 rounded-lg text-sm ${
                        bookingDetails.time === time
                          ? "bg-purple-600 text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-purple-100"
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        );

      case 3:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-semibold text-purple-800">
              Location & Details
            </h2>

            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">
                  Service Address
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Enter your address"
                    value={bookingDetails.address}
                    onChange={(e) =>
                      handleInputChange("address", e.target.value)
                    }
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">
                  Special Instructions
                </label>
                <textarea
                  placeholder="Any special requirements or instructions?"
                  value={bookingDetails.instructions}
                  onChange={(e) =>
                    handleInputChange("instructions", e.target.value)
                  }
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                  rows={4}
                />
              </div>
            </div>
          </motion.div>
        );

      case 4:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-semibold text-purple-800">
              Review & Payment
            </h2>

            <div className="space-y-6">
              <div className="bg-purple-50 p-6 rounded-lg space-y-4">
                <h3 className="font-semibold text-purple-800 text-lg">
                  Booking Summary
                </h3>

                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span>Service Type:</span>
                    <span className="font-medium">{serviceId}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Date & Time:</span>
                    <span className="font-medium">
                      {bookingDetails.date} at {bookingDetails.time}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Property Size:</span>
                    <span className="font-medium">
                      {
                        propertySizes.find(
                          (s) => s.id === bookingDetails.propertySize
                        )?.name
                      }
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Frequency:</span>
                    <span className="font-medium">
                      {
                        frequencies.find(
                          (f) => f.id === bookingDetails.serviceFrequency
                        )?.name
                      }
                    </span>
                  </div>
                  {bookingDetails.extras.length > 0 && (
                    <div className="flex justify-between">
                      <span>Extras:</span>
                      <span className="font-medium">
                        {bookingDetails.extras
                          .map((e) => extras.find((ex) => ex.id === e)?.name)
                          .join(", ")}
                      </span>
                    </div>
                  )}
                  <div className="pt-4 border-t">
                    <div className="flex justify-between text-lg font-semibold text-purple-800">
                      <span>Total Price:</span>
                      <span>${totalPrice}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-purple-800 text-lg">
                  Payment Details
                </h3>

                <div className="space-y-4">
                  <div className="relative">
                    <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Card number"
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                    />
                    <input
                      type="text"
                      placeholder="CVC"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow-lg p-8"
        >
          {/* Progress Steps */}
          <div className="flex items-center justify-between mb-8">
            {["Service Details", "Schedule", "Location", "Payment"].map(
              (title, index) => (
                <div
                  key={title}
                  className={`flex items-center ${index !== 3 ? "flex-1" : ""}`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      step > index + 1
                        ? "bg-green-500 text-white"
                        : step === index + 1
                        ? "bg-purple-600 text-white"
                        : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {step > index + 1 ? "✓" : index + 1}
                  </div>
                  {index !== 3 && (
                    <div
                      className={`flex-1 h-1 mx-2 ${
                        step > index + 1 ? "bg-green-500" : "bg-gray-200"
                      }`}
                    />
                  )}
                </div>
              )
            )}
          </div>

          {renderStep()}

          {/* Navigation Buttons */}
          <div className="mt-8 flex justify-between">
            {step > 1 && (
              <button
                onClick={() => setStep(step - 1)}
                className="flex items-center px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-300"
              >
                <ChevronLeft className="w-5 h-5 mr-2" />
                Back
              </button>
            )}
            <button
              onClick={() => {
                if (step === 4) {
                  // Handle booking confirmation
                  alert("Booking confirmed! Thank you for your order.");
                  navigate("/");
                } else {
                  setStep(step + 1);
                }
              }}
              className="flex items-center px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-300 ml-auto"
            >
              {step === 4 ? "Confirm Booking" : "Continue"}
              <ChevronRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </motion.div>

        {/* Trust Badges */}
        <div className="mt-8 grid grid-cols-3 gap-4">
          <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm">
            <Shield className="w-5 h-5 text-purple-600 mr-2" />
            <span className="text-sm text-gray-600">Secure Payment</span>
          </div>
          <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm">
            <Clock className="w-5 h-5 text-purple-600 mr-2" />
            <span className="text-sm text-gray-600">24/7 Support</span>
          </div>
          <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm">
            <DollarSign className="w-5 h-5 text-purple-600 mr-2" />
            <span className="text-sm text-gray-600">Money-back Guarantee</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
