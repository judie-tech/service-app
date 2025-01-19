import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, Clock, DollarSign, CheckCircle } from 'lucide-react';

const ServiceDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // In a real app, this would come from an API
  const serviceDetails = {
    title: 'Professional House Cleaning',
    rating: 4.8,
    reviews: 256,
    priceRange: '$80 - $200',
    duration: '2-4 hours',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=1000',
    description: 'Our professional house cleaning service ensures your home is spotless and sanitized. We use eco-friendly products and follow a detailed cleaning checklist to exceed your expectations.',
    features: [
      'Trained and vetted professionals',
      'Eco-friendly cleaning products',
      'Flexible scheduling',
      '100% satisfaction guarantee'
    ],
    included: [
      'Deep cleaning of all rooms',
      'Bathroom and kitchen sanitization',
      'Dusting and vacuuming',
      'Window sill and baseboards cleaning'
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-white rounded-lg shadow-lg overflow-hidden"
        >
          <div className="relative h-96">
            <img
              src={serviceDetails.image}
              alt={serviceDetails.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h1 className="text-4xl font-bold mb-4">{serviceDetails.title}</h1>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="ml-1">{serviceDetails.rating}</span>
                  <span className="ml-1 text-gray-300">({serviceDetails.reviews} reviews)</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5" />
                  <span className="ml-1">{serviceDetails.duration}</span>
                </div>
                <div className="flex items-center">
                  <DollarSign className="w-5 h-5" />
                  <span className="ml-1">{serviceDetails.priceRange}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-semibold text-purple-800 mb-4">About This Service</h2>
                <p className="text-gray-600 mb-6">{serviceDetails.description}</p>
                
                <h3 className="text-xl font-semibold text-purple-800 mb-4">What's Included</h3>
                <ul className="space-y-3">
                  {serviceDetails.included.map((item) => (
                    <li key={item} className="flex items-center text-gray-600">
                      <CheckCircle className="w-5 h-5 text-purple-600 mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-purple-800 mb-4">Service Features</h3>
                  <ul className="space-y-3">
                    {serviceDetails.features.map((feature) => (
                      <li key={feature} className="flex items-center text-gray-600">
                        <CheckCircle className="w-5 h-5 text-purple-600 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => navigate(`/booking?service=${id}`)}
                    className="mt-8 w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors duration-300 font-semibold"
                  >
                    Book Now
                  </button>
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