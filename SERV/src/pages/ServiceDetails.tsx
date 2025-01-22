// ServiceDetails.tsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, Clock, DollarSign, CheckCircle } from "lucide-react";

const ServiceDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Enhanced service details with specific image
  const serviceDetails = {
    title: "Professional House Cleaning",
    rating: 4.8,
    reviews: 256,
    priceRange: "KSH 8,000 - KSH 20,000",
    duration: "2-4 hours",
    image:
      "http://images.unsplash.com/photo-1527515545081-5db817172677?ixlib=rb-4.0.3",
    description:
      "Our professional house cleaning service ensures your home is spotless and sanitized. We use eco-friendly products and follow a detailed cleaning checklist to exceed your expectations.",
    features: [
      "Highly trained and vetted cleaning professionals",
      "Premium eco-friendly cleaning products",
      "Flexible scheduling options",
      "100% satisfaction guarantee with money-back warranty",
    ],
    included: [
      "Thorough deep cleaning of all rooms and surfaces",
      "Complete bathroom and kitchen sanitization",
      "Detailed dusting and professional vacuuming",
      "Window sills, baseboards, and corner cleaning",
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden border border-purple-100"
        >
          <div className="relative h-[500px]">
            <img
              src={serviceDetails.image}
              alt={serviceDetails.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-12 text-white">
              <h1 className="text-5xl font-bold mb-6">
                {serviceDetails.title}
              </h1>
              <div className="flex items-center space-x-6 text-lg">
                <div className="flex items-center bg-black/30 rounded-full px-4 py-2">
                  <Star className="w-6 h-6 text-yellow-400 fill-current" />
                  <span className="ml-2">{serviceDetails.rating}</span>
                  <span className="ml-1 text-gray-300">
                    ({serviceDetails.reviews} reviews)
                  </span>
                </div>
                <div className="flex items-center bg-black/30 rounded-full px-4 py-2">
                  <Clock className="w-6 h-6" />
                  <span className="ml-2">{serviceDetails.duration}</span>
                </div>
                <div className="flex items-center bg-black/30 rounded-full px-4 py-2">
                  <DollarSign className="w-6 h-6" />
                  <span className="ml-2">{serviceDetails.priceRange}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-purple-900 mb-6">
                    About This Service
                  </h2>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {serviceDetails.description}
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-purple-900 mb-6">
                    What's Included
                  </h3>
                  <ul className="space-y-4">
                    {serviceDetails.included.map((item) => (
                      <li
                        key={item}
                        className="flex items-center text-gray-700 text-lg"
                      >
                        <CheckCircle className="w-6 h-6 text-purple-600 mr-3 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <div className="bg-purple-50 p-8 rounded-2xl border border-purple-100">
                  <h3 className="text-2xl font-bold text-purple-900 mb-6">
                    Service Features
                  </h3>
                  <ul className="space-y-4">
                    {serviceDetails.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center text-gray-700 text-lg"
                      >
                        <CheckCircle className="w-6 h-6 text-purple-600 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => navigate(`/booking?service=${id}`)}
                    className="mt-8 w-full bg-purple-600 text-white py-4 rounded-xl hover:bg-purple-700 transition-colors duration-300 text-lg font-semibold shadow-lg hover:shadow-xl"
                  >
                    Book Now
                  </button>
                </div>

                <div className="mt-8 p-6 bg-green-50 rounded-xl border border-green-100">
                  <p className="text-green-800 text-lg">
                    ✨ Special Offer: Get 15% off on your first booking! Use
                    code WELCOME15 at checkout.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ServiceDetails;

// Booking.tsx modifications for the currency and styling update would be similarly extensive. Would you like me to continue with the Booking.tsx and Services.tsx updates as well?
