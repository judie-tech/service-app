import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Award, Clock, Users, ThumbsUp, HeartHandshake } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Verified Professionals",
      description: "All our service providers undergo thorough background checks and are fully licensed and insured."
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: "Quality Guaranteed",
      description: "We stand behind our service quality with a 100% satisfaction guarantee."
    },
    {
      icon: <Clock className="w-12 h-12" />,
      title: "Flexible Scheduling",
      description: "Book services at your convenience with our 24/7 booking system."
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Expert Team",
      description: "Our professionals have years of experience in their respective fields."
    },
    {
      icon: <ThumbsUp className="w-12 h-12" />,
      title: "Customer Satisfaction",
      description: "Maintaining a 4.8/5 rating with over 10,000 happy customers."
    },
    {
      icon: <HeartHandshake className="w-12 h-12" />,
      title: "Transparent Pricing",
      description: "No hidden fees or surprises. Get upfront pricing before booking."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-purple-800 mb-4">Why Choose Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're committed to providing exceptional service experiences through our network of trusted professionals
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                  <div className="text-purple-600">
                    {reason.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-purple-800 mb-4">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-16 bg-gradient-to-r from-purple-700 to-purple-900 rounded-lg shadow-xl p-8 text-white text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Experience the Difference?</h2>
          <p className="text-lg mb-6">Join thousands of satisfied customers who trust us with their service needs</p>
          <button
            onClick={() => window.location.href = '/services'}
            className="bg-white text-purple-700 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors duration-300"
          >
            Browse Services
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default WhyChooseUs;