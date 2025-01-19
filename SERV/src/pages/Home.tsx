import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Star, Clock, Shield } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Star className="w-8 h-8 text-purple-600" />,
      title: "Top-Rated Professionals",
      description: "Verified experts ready to help"
    },
    {
      icon: <Clock className="w-8 h-8 text-purple-600" />,
      title: "24/7 Availability",
      description: "Services when you need them"
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-600" />,
      title: "Secure Booking",
      description: "Safe and guaranteed service"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-gradient-to-r from-purple-700 to-purple-900 text-white py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Your One-Stop Service Solution
            </h1>
            <p className="text-xl mb-8">
              Professional services at your fingertips
            </p>
            <div className="max-w-xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="What service do you need?"
                className="w-full py-4 pl-12 pr-4 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Featured Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Popular Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {['Cleaning', 'Moving', 'Landscaping', 'Home Repairs'].map((category, index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => navigate('/services')}
              className="bg-white rounded-lg shadow-lg p-6 cursor-pointer transform hover:scale-105 transition-transform duration-200"
            >
              <div className="text-center">
                <h3 className="text-xl font-semibold text-purple-700 mb-2">{category}</h3>
                <p className="text-gray-600">Professional {category.toLowerCase()} services</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-lg p-6 text-center shadow-lg"
              >
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
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