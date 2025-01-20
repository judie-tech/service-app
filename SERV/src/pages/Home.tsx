import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, Star, Clock, Shield } from "lucide-react";

const Home = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Star className="w-8 h-8 text-purple-600" />,
      title: "Top-Rated Professionals",
      description: "Verified experts ready to help",
    },
    {
      icon: <Clock className="w-8 h-8 text-purple-600" />,
      title: "24/7 Availability",
      description: "Services when you need them",
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-600" />,
      title: "Secure Booking",
      description: "Safe and guaranteed service",
    },
  ];

  const trendingServices = [
    {
      title: "Cleaning",
      description: "Transform your space",
      badge: "Most Popular",
      image: "/api/placeholder/400/300",
    },
    {
      title: "Moving",
      description: "Stress-free relocation",
      badge: "Best Value",
      image: "/api/placeholder/400/300",
    },
    {
      title: "Landscaping",
      description: "Beautiful outdoors",
      badge: "Seasonal",
      image: "/api/placeholder/400/300",
    },
    {
      title: "Home Repairs",
      description: "Expert solutions",
      badge: "24/7 Service",
      image: "/api/placeholder/400/300",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative bg-gradient-to-r from-purple-700 to-purple-900 text-white py-24 overflow-hidden"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        {/* Background Image */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/api/placeholder/1920/1080"
            alt="Hero background"
            className="w-full h-full object-cover opacity-10"
          />
        </div>

        {/* Animated background elements */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          <div className="absolute top-10 left-10 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-400 rounded-full filter blur-3xl opacity-20"></div>
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <motion.h1
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl md:text-6xl font-bold mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Your One-Stop Service Solution
            </motion.h1>
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-xl mb-12 text-purple-100"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Professional services at your fingertips
            </motion.p>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="max-w-xl mx-auto relative"
            >
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="What service do you need?"
                className="w-full py-4 pl-12 pr-4 rounded-full text-gray-900 focus:outline-none focus:ring-4 focus:ring-purple-300 shadow-lg text-lg"
                style={{ fontFamily: "'Inter', sans-serif" }}
              />
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Trending Services Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16 text-purple-900"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Trending Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trendingServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              onClick={() => navigate("/services")}
              className="relative bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer group"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <motion.div
                initial={{ x: 100 }}
                whileInView={{ x: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                className="absolute top-4 right-0 bg-purple-600 text-white px-4 py-1 text-sm rounded-l-full font-medium shadow-md"
              >
                {service.badge}
              </motion.div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-purple-800 mb-3 group-hover:text-purple-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
              </div>
              <div className="bg-purple-50 py-3 text-center text-purple-600 text-sm font-medium group-hover:bg-purple-100 transition-colors duration-300">
                <span className="group-hover:translate-x-2 inline-block transition-transform duration-300">
                  Explore Services →
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div
        className="bg-white py-20"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-b from-white to-purple-50 rounded-2xl p-8 text-center shadow-lg"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="flex justify-center mb-6"
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-bold mb-3 text-purple-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
