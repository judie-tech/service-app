import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search, Bell, User } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-purple-700 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Home className="w-6 h-6" />
            <span className="font-bold text-xl">ServiceHub</span>
          </Link>
          
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                className="pl-10 pr-4 py-2 rounded-full bg-purple-600 text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>
            
            <Link to="/services" className="hover:text-purple-200">Services</Link>
            <Link to="/why-choose-us" className="hover:text-purple-200">Why Choose Us</Link>
            
            <div className="flex items-center space-x-3">
              <Bell className="w-6 h-6 cursor-pointer hover:text-purple-200" />
              <User className="w-6 h-6 cursor-pointer hover:text-purple-200" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;