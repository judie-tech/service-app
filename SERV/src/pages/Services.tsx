import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Wrench,
  Truck,
  Scissors,
  Home,
  Droplet,
  Zap,
  Paintbrush,
  Sparkles,
  Bug,
  ShoppingBag,
  X,
  ChevronRight,
  Star,
  Clock,
  DollarSign,
  MapPin,
  Trees,
  Palette,
  Shield,
  SprayCan as Spray,
  Heart,
  Briefcase,
} from "lucide-react";

const serviceCategories = [
  {
    id: "cleaning",
    name: "Cleaning Services",
    icon: <Sparkles className="w-6 h-6" />,
    services: [
      {
        id: "residential-cleaning",
        name: "Residential Cleaning",
        description:
          "Professional house cleaning and tidying services. Our trained cleaners ensure your home is spotless.",
        price: "From $80",
        duration: "2-4 hours",
        rating: 4.8,
        reviews: 1250,
        image:
          "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=1000",
        basePrice: 80,
        priceFactors: ["Number of rooms", "Level of cleaning", "Frequency"],
      },
      {
        id: "deep-cleaning",
        name: "Deep Cleaning",
        description:
          "Thorough seasonal or pre/post-tenant cleaning service. Perfect for move-in/move-out situations.",
        price: "From $150",
        duration: "4-6 hours",
        rating: 4.9,
        reviews: 856,
        image:
          "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&q=80&w=1000",
        basePrice: 150,
        priceFactors: [
          "Square footage",
          "Level of dirt",
          "Additional services",
        ],
      },
      {
        id: "carpet-cleaning",
        name: "Carpet Cleaning",
        description:
          "Specialized cleaning for rugs and carpets using professional-grade equipment and eco-friendly products.",
        price: "From $100",
        duration: "2-3 hours",
        rating: 4.7,
        reviews: 623,
        image:
          "https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&q=80&w=1000",
        basePrice: 100,
        priceFactors: ["Carpet area", "Stain treatment", "Type of carpet"],
      },
      {
        id: "window-cleaning",
        name: "Window Cleaning",
        description:
          "Professional cleaning for windows and glass surfaces, including frames and tracks.",
        price: "From $90",
        duration: "2-4 hours",
        rating: 4.8,
        reviews: 445,
        image:
          "https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&q=80&w=1000",
        basePrice: 90,
        priceFactors: ["Number of windows", "Height", "Accessibility"],
      },
    ],
  },
  {
    id: "moving",
    name: "Moving Services",
    icon: <Truck className="w-6 h-6" />,
    services: [
      {
        id: "local-moving",
        name: "Local Moving",
        description:
          "Professional local moving services within city limits. Includes trained movers and proper equipment.",
        price: "From $120/hour",
        duration: "Varies",
        rating: 4.7,
        reviews: 923,
        image:
          "https://images.unsplash.com/photo-1600518464441-9154a4dea21b?auto=format&fit=crop&q=80&w=1000",
        basePrice: 120,
        priceFactors: ["Distance", "Volume of items", "Number of movers"],
      },
      {
        id: "long-distance-moving",
        name: "Long-Distance Moving",
        description:
          "Interstate or international moving services with comprehensive logistics and tracking.",
        price: "From $1000",
        duration: "1-7 days",
        rating: 4.8,
        reviews: 542,
        image:
          "https://source.unsplash.com/1600x900/?long-distance-moving-truck-on-highway",
        basePrice: 1000,
        priceFactors: ["Distance", "Volume", "Insurance coverage"],
      },
      {
        id: "packing-services",
        name: "Packing Services",
        description:
          "Professional packing and unpacking services using quality materials and techniques.",
        price: "From $60/hour",
        duration: "Varies",
        rating: 4.9,
        reviews: 328,
        image:
          "https://images.unsplash.com/photo-1600518464441-9154a4dea21b?auto=format&fit=crop&q=80&w=1000",
        basePrice: 60,
        priceFactors: ["Volume", "Special items", "Materials needed"],
      },
      {
        id: "storage-solutions",
        name: "Storage Solutions",
        description:
          "Secure temporary or long-term storage facilities for your belongings.",
        price: "From $100/month",
        duration: "Monthly",
        rating: 4.6,
        reviews: 245,
        image:
          "https://images.unsplash.com/photo-1600518464444-9154a4dea21e?auto=format&fit=crop&q=80&w=1000",
        basePrice: 100,
        priceFactors: ["Unit size", "Duration", "Climate control"],
      },
    ],
  },

  {
    id: "landscaping",
    name: "Landscaping and Lawn Care",
    icon: <Trees className="w-6 h-6" />,
    services: [
      {
        id: "garden-design",
        name: "Garden Design & Maintenance",
        description:
          "Professional garden design and regular maintenance services.",
        price: "From $200",
        duration: "Varies",
        rating: 4.8,
        reviews: 312,
        image:
          "https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&q=80&w=1000",
        basePrice: 200,
        priceFactors: [
          "Garden size",
          "Design complexity",
          "Maintenance frequency",
        ],
      },
      {
        id: "lawn-care",
        name: "Lawn Mowing & Aeration",
        description:
          "Regular lawn maintenance including mowing, edging, and aeration.",
        price: "From $50",
        duration: "1-2 hours",
        rating: 4.7,
        reviews: 528,
        image:
          "https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&q=80&w=1000",
        basePrice: 50,
        priceFactors: ["Lawn size", "Service frequency", "Additional services"],
      },
      {
        id: "tree-service",
        name: "Tree Trimming & Removal",
        description:
          "Professional tree care services including trimming, pruning, and removal.",
        price: "From $150",
        duration: "Varies",
        rating: 4.9,
        reviews: 234,
        image:
          "https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&q=80&w=1000",
        basePrice: 150,
        priceFactors: ["Tree size", "Service type", "Accessibility"],
      },
      {
        id: "irrigation",
        name: "Irrigation System Installation",
        description: "Design and installation of efficient irrigation systems.",
        price: "From $500",
        duration: "1-3 days",
        rating: 4.8,
        reviews: 156,
        image:
          "https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&q=80&w=1000",
        basePrice: 500,
        priceFactors: ["System size", "Complexity", "Materials"],
      },
    ],
  },
  {
    id: "repairs",
    name: "Home Repairs",
    icon: <Wrench className="w-6 h-6" />,
    services: [
      {
        id: "handyman",
        name: "Handyman Services",
        description: "General repairs and maintenance for your home.",
        price: "From $60/hour",
        duration: "Varies",
        rating: 4.7,
        reviews: 892,
        image:
          "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=1000",
        basePrice: 60,
        priceFactors: ["Service type", "Time required", "Materials"],
      },
      {
        id: "roof-repair",
        name: "Roof Repair",
        description: "Professional roof repair and replacement services.",
        price: "From $300",
        duration: "1-3 days",
        rating: 4.8,
        reviews: 234,
        image:
          "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=1000",
        basePrice: 300,
        priceFactors: ["Repair extent", "Materials", "Roof type"],
      },
      {
        id: "drywall-repair",
        name: "Drywall Repair",
        description: "Expert drywall repair and finishing services.",
        price: "From $100",
        duration: "2-4 hours",
        rating: 4.6,
        reviews: 312,
        image:
          "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=1000",
        basePrice: 100,
        priceFactors: ["Damage size", "Complexity", "Finishing level"],
      },
      {
        id: "furniture-assembly",
        name: "Furniture Assembly",
        description: "Professional assembly of all types of furniture.",
        price: "From $50",
        duration: "1-3 hours",
        rating: 4.7,
        reviews: 567,
        image:
          "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=1000",
        basePrice: 50,
        priceFactors: ["Item complexity", "Number of items", "Time required"],
      },
    ],
  },
  {
    id: "plumbing",
    name: "Plumbing Services",
    icon: <Droplet className="w-6 h-6" />,
    services: [
      {
        id: "pipe-repairs",
        name: "Pipe Repairs",
        description: "Expert repair of leaks and burst pipes.",
        price: "From $100",
        duration: "1-3 hours",
        rating: 4.8,
        reviews: 423,
        image:
          "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=1000",
        basePrice: 100,
        priceFactors: ["Repair type", "Materials", "Urgency"],
      },
      {
        id: "fixture-installation",
        name: "Fixture Installation",
        description:
          "Professional installation of sinks, faucets, and toilets.",
        price: "From $150",
        duration: "2-4 hours",
        rating: 4.7,
        reviews: 312,
        image:
          "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=1000",
        basePrice: 150,
        priceFactors: ["Fixture type", "Installation complexity", "Materials"],
      },
      {
        id: "water-heater",
        name: "Water Heater Services",
        description: "Installation and repair of water heaters.",
        price: "From $200",
        duration: "2-4 hours",
        rating: 4.9,
        reviews: 234,
        image:
          "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=1000",
        basePrice: 200,
        priceFactors: [
          "Service type",
          "Unit type",
          "Installation requirements",
        ],
      },
      {
        id: "drain-cleaning",
        name: "Drain Cleaning",
        description: "Professional drain and pipe cleaning services.",
        price: "From $80",
        duration: "1-2 hours",
        rating: 4.6,
        reviews: 567,
        image:
          "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=1000",
        basePrice: 80,
        priceFactors: ["Blockage severity", "Pipe location", "Method required"],
      },
    ],
  },
  {
    id: "electrical",
    name: "Electrical Services",
    icon: <Zap className="w-6 h-6" />,
    services: [
      {
        id: "lighting",
        name: "Lighting Installation",
        description:
          "Professional installation of indoor and outdoor lighting.",
        price: "From $80",
        duration: "1-3 hours",
        rating: 4.7,
        reviews: 345,
        image:
          "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=1000",
        basePrice: 80,
        priceFactors: [
          "Number of fixtures",
          "Installation type",
          "Wiring needs",
        ],
      },
      {
        id: "wiring",
        name: "Wiring Services",
        description: "Complete wiring and rewiring services for homes.",
        price: "From $200",
        duration: "Varies",
        rating: 4.8,
        reviews: 234,
        image:
          "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=1000",
        basePrice: 200,
        priceFactors: ["Project scope", "House size", "Wiring type"],
      },
      {
        id: "appliance-installation",
        name: "Appliance Installation",
        description: "Expert installation of electrical appliances.",
        price: "From $100",
        duration: "1-2 hours",
        rating: 4.6,
        reviews: 289,
        image:
          "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=1000",
        basePrice: 100,
        priceFactors: [
          "Appliance type",
          "Installation complexity",
          "Additional wiring",
        ],
      },
      {
        id: "troubleshooting",
        name: "Electrical Troubleshooting",
        description: "Diagnostic and repair of electrical issues.",
        price: "From $90",
        duration: "1-3 hours",
        rating: 4.7,
        reviews: 412,
        image:
          "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=1000",
        basePrice: 90,
        priceFactors: ["Problem complexity", "Repair needs", "Parts required"],
      },
    ],
  },
  {
    id: "painting",
    name: "Painting and Decorating",
    icon: <Palette className="w-6 h-6" />,
    services: [
      {
        id: "interior-painting",
        name: "Interior Painting",
        description: "Professional painting of walls, ceilings, and trims.",
        price: "From $300",
        duration: "1-3 days",
        rating: 4.8,
        reviews: 567,
        image:
          "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=1000",
        basePrice: 300,
        priceFactors: ["Room size", "Paint quality", "Surface prep"],
      },
      {
        id: "exterior-painting",
        name: "Exterior Painting",
        description: "Complete exterior painting services.",
        price: "From $500",
        duration: "2-4 days",
        rating: 4.7,
        reviews: 345,
        image:
          "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=1000",
        basePrice: 500,
        priceFactors: ["House size", "Surface type", "Paint quality"],
      },
      {
        id: "wallpaper",
        name: "Wallpaper Services",
        description: "Professional wallpaper installation and removal.",
        price: "From $200",
        duration: "1-2 days",
        rating: 4.6,
        reviews: 234,
        image:
          "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=1000",
        basePrice: 200,
        priceFactors: ["Wall area", "Wallpaper type", "Surface prep"],
      },
      {
        id: "decorative-painting",
        name: "Decorative Painting",
        description: "Custom murals and decorative painting services.",
        price: "From $400",
        duration: "Varies",
        rating: 4.9,
        reviews: 178,
        image:
          "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=1000",
        basePrice: 400,
        priceFactors: ["Design complexity", "Size", "Detail level"],
      },
    ],
  },
  {
    id: "beauty",
    name: "Beauty and Hair Services",
    icon: <Scissors className="w-6 h-6" />,
    services: [
      {
        id: "hair-styling",
        name: "Mobile Hair Styling",
        description: "Professional haircuts and styling at your location.",
        price: "From $60",
        duration: "1-2 hours",
        rating: 4.8,
        reviews: 678,
        image:
          "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=1000",
        basePrice: 60,
        priceFactors: ["Service type", "Hair length", "Style complexity"],
      },
      {
        id: "makeup",
        name: "Makeup Services",
        description: "Professional makeup application for all occasions.",
        price: "From $80",
        duration: "1-2 hours",
        rating: 4.9,
        reviews: 445,
        image:
          "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=1000",
        basePrice: 80,
        priceFactors: ["Occasion type", "Makeup style", "Products used"],
      },
      {
        id: "spa-services",
        name: "Mobile Spa Services",
        description: "Relaxing spa treatments in your home.",
        price: "From $100",
        duration: "1-3 hours",
        rating: 4.7,
        reviews: 334,
        image:
          "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=1000",
        basePrice: 100,
        priceFactors: ["Treatment type", "Duration", "Additional services"],
      },
      {
        id: "nail-services",
        name: "Nail Services",
        description: "Professional manicures and pedicures at home.",
        price: "From $40",
        duration: "1-2 hours",
        rating: 4.8,
        reviews: 567,
        image:
          "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=1000",
        basePrice: 40,
        priceFactors: ["Service type", "Nail art", "Products used"],
      },
    ],
  },
  {
    id: "pest-control",
    name: "Pest Control Services",
    icon: <Bug className="w-6 h-6" />,
    services: [
      {
        id: "rodent-control",
        name: "Rodent Control",
        description:
          "Professional removal and prevention of rodent infestations.",
        price: "From $150",
        duration: "2-3 hours",
        rating: 4.8,
        reviews: 234,
        image:
          "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=1000",
        basePrice: 150,
        priceFactors: [
          "Infestation level",
          "Property size",
          "Prevention measures",
        ],
      },
      {
        id: "insect-control",
        name: "Insect Extermination",
        description: "Treatment for various insect infestations.",
        price: "From $120",
        duration: "1-2 hours",
        rating: 4.7,
        reviews: 345,
        image:
          "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=1000",
        basePrice: 120,
        priceFactors: ["Pest type", "Treatment area", "Treatment method"],
      },
      {
        id: "bed-bugs",
        name: "Bed Bug Treatment",
        description: "Specialized bed bug elimination services.",
        price: "From $200",
        duration: "3-4 hours",
        rating: 4.9,
        reviews: 189,
        image:
          "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=1000",
        basePrice: 200,
        priceFactors: [
          "Infestation level",
          "Treatment type",
          "Follow-up needed",
        ],
      },
      {
        id: "wildlife",
        name: "Wildlife Removal",
        description: "Safe removal of wildlife from your property.",
        price: "From $180",
        duration: "Varies",
        rating: 4.8,
        reviews: 156,
        image:
          "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=1000",
        basePrice: 180,
        priceFactors: ["Animal type", "Removal method", "Prevention measures"],
      },
    ],
  },
  {
    id: "errands",
    name: "Running Errands",
    icon: <Briefcase className="w-6 h-6" />,
    services: [
      {
        id: "grocery-shopping",
        name: "Grocery Shopping",
        description: "Personal shopping and delivery of groceries.",
        price: "From $30",
        duration: "1-2 hours",
        rating: 4.7,
        reviews: 423,
        image:
          "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=1000",
        basePrice: 30,
        priceFactors: ["Shopping list size", "Distance", "Urgency"],
      },
      {
        id: "prescription-pickup",
        name: "Prescription Pickup",
        description: "Safe pickup and delivery of medications.",
        price: "From $20",
        duration: "30-60 min",
        rating: 4.8,
        reviews: 234,
        image:
          "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=1000",
        basePrice: 20,
        priceFactors: ["Distance", "Number of stops", "Urgency"],
      },
      {
        id: "package-delivery",
        name: "Package Services",
        description: "Pickup and delivery of packages and returns.",
        price: "From $25",
        duration: "Varies",
        rating: 4.6,
        reviews: 312,
        image:
          "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=1000",
        basePrice: 25,
        priceFactors: ["Package size", "Distance", "Service type"],
      },
      {
        id: "general-tasks",
        name: "General Errands",
        description:
          "Various errand services including dry cleaning, post office visits, etc.",
        price: "From $30",
        duration: "Varies",
        rating: 4.7,
        reviews: 378,
        image:
          "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=1000",
        basePrice: 30,
        priceFactors: ["Task type", "Time required", "Number of stops"],
      },
    ],
  },
];

interface Service {
  id: string;
  name: string;
  description: string;
  price: string;
  duration: string;
  rating: number;
  reviews: number;
  image: string;
  basePrice: number;
  priceFactors: string[];
}

interface ServiceModalProps {
  service: Service;
  onClose: () => void;
}

const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-lg w-full max-w-3xl mx-auto my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <img
            src={service.image}
            alt={service.name}
            className="w-full h-64 object-cover rounded-t-lg"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div className="space-y-2">
            <h3 className="text-3xl font-bold text-purple-800">
              {service.name}
            </h3>
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="ml-1">{service.rating}</span>
                <span className="ml-1">({service.reviews} reviews)</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5" />
                <span className="ml-1">{service.duration}</span>
              </div>
              <div className="flex items-center">
                <DollarSign className="w-5 h-5" />
                <span className="ml-1">Starting at ${service.basePrice}</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-purple-700">
              About This Service
            </h4>
            <p className="text-gray-600 leading-relaxed">
              {service.description}
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-purple-700">
              Pricing Factors
            </h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {service.priceFactors.map((factor, index) => (
                <li key={index} className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                  {factor}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => navigate(`/booking?service=${service.id}`)}
              className="flex-1 bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors duration-300 flex items-center justify-center space-x-2"
            >
              <span>Book Now</span>
              <ChevronRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => {
                // Add to favorites logic
              }}
              className="flex-1 border border-purple-600 text-purple-600 py-3 px-6 rounded-lg hover:bg-purple-50 transition-colors duration-300"
            >
              Save for Later
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Services = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {!selectedCategory ? (
          <>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl font-bold text-purple-800 mb-4">
                Our Services
              </h1>
              <p className="text-xl text-gray-600">
                Choose from our wide range of professional services
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceCategories.map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setSelectedCategory(category.id)}
                  className="bg-white rounded-lg shadow-lg p-6 cursor-pointer hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 bg-purple-100 rounded-lg">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-purple-800">
                      {category.name}
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    {category.services.length} services available
                  </p>
                </motion.div>
              ))}
            </div>
          </>
        ) : (
          <>
            <button
              onClick={() => setSelectedCategory(null)}
              className="mb-8 flex items-center text-purple-600 hover:text-purple-700"
            >
              <ChevronRight className="w-5 h-5 transform rotate-180" />
              <span>Back to Categories</span>
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceCategories
                .find((cat) => cat.id === selectedCategory)
                ?.services.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-300"
                    onClick={() => setSelectedService(service)}
                  >
                    <div className="relative h-48">
                      <img
                        src={service.image}
                        alt={service.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-purple-800 mb-2">
                        {service.name}
                      </h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="ml-1">{service.rating}</span>
                        </div>
                        <div className="flex items-center">
                          <DollarSign className="w-4 h-4" />
                          <span className="ml-1">{service.price}</span>
                        </div>
                      </div>
                      <p className="text-gray-600 line-clamp-2">
                        {service.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
            </div>
          </>
        )}

        <AnimatePresence>
          {selectedService && (
            <ServiceModal
              service={selectedService}
              onClose={() => setSelectedService(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Services;
