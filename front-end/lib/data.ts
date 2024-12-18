import {
  Brush,
  Wrench,
  Truck,
  Home,
  Droplet,
  Zap,
  Scissors,
  Car,
} from "lucide-react";

export const categories = [
  {
    id: "cleaning",
    name: "Cleaning",
    icon: Home,
    services: [
      {
        id: "clothes-cleaning",
        title: "Clothes Cleaning",
        description: "Professional laundry and dry cleaning services",
        providers: [
          {
            id: 1,
            name: "Akinyi's Laundry Services",
            location: "Ngong Road, Nairobi",
            rating: 4.8,
            image: "/images/cleaning clothes.jpg",
            description:
              "We provide top-notch laundry services with a quick turnaround time. Our eco-friendly detergents ensure your clothes are clean and fresh without harming the environment.",
            galleryImages: [
              "/images/laundry-1.jpg",
              "/images/laundry-2.jpg",
              "/images/laundry-3.jpg",
            ],
          },
        ],
      },
      {
        id: "floor-cleaning",
        title: "Floor Cleaning",
        description: "Expert floor cleaning and maintenance",
        providers: [
          {
            id: 2,
            name: "Ochieng's Floor Care",
            location: "Westlands, Nairobi",
            rating: 4.7,
            image: "/images/floor cleaning.jpg",
            description:
              "Specializing in all types of floor cleaning, from hardwood to tile. We use state-of-the-art equipment to restore your floors to their original shine.",
            galleryImages: [
              "/images/floor-1.jpg",
              "/images/floor-2.jpg",
              "/images/floor-3.jpg",
            ],
          },
        ],
      },
      {
        id: "carpet-cleaning",
        title: "Carpet Cleaning",
        description: "Deep carpet cleaning and stain removal",
        providers: [
          {
            id: 3,
            name: "Wanjiru's Carpet Solutions",
            location: "Kilimani, Nairobi",
            rating: 4.9,
            image: "/images/carpet cleaning.jpg",
            description:
              "We breathe new life into your carpets with our deep cleaning services. Our team is trained to handle even the toughest stains while preserving the quality of your carpets.",
            galleryImages: [
              "/images/carpet-1.jpg",
              "/images/carpet-2.jpg",
              "/images/carpet-3.jpg",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "repair",
    name: "Repair",
    icon: Wrench,
    services: [
      {
        id: "appliance-repair",
        title: "Appliance Repair",
        description: "Expert repair for all home appliances",
        providers: [
          {
            id: 4,
            name: "Mutua's Appliance Fixes",
            location: "Lavington, Nairobi",
            rating: 4.6,
            image: "/images/appliance repair.jpg",
            description:
              "From refrigerators to washing machines, we repair all major home appliances. Our technicians are certified and use genuine spare parts for all repairs.",
            galleryImages: [
              "/images/appliance-1.jpg",
              "/images/appliance-2.jpg",
              "/images/appliance-3.jpg",
            ],
          },
        ],
      },
      {
        id: "furniture-repair",
        title: "Furniture Repair",
        description: "Furniture restoration and repair",
        providers: [
          {
            id: 5,
            name: "Kamau's Furniture Workshop",
            location: "Karen, Nairobi",
            rating: 4.8,
            image: "/images/furniture repair.jpg",
            description:
              "We restore and repair all types of furniture, from antiques to modern pieces. Our craftsmen have years of experience in bringing old furniture back to life.",
            galleryImages: [
              "/images/furniture repair 2.jpg",
              "/images/furniture repair 2.jpg",
              "/images/furniture repair 2.jpg",
            ],
          },
        ],
      },
      {
        id: "electronics-repair",
        title: "Electronics Repair",
        description: "Professional electronics repair services",
        providers: [
          {
            id: 6,
            name: "Otieno's Tech Solutions",
            location: "Upperhill, Nairobi",
            rating: 4.7,
            image: "/images/electronic repair.jpg",
            description:
              "We repair all kinds of electronics, including smartphones, laptops, and gaming consoles. Our team stays up-to-date with the latest technology to provide the best repair services.",
            galleryImages: [
              "/images/electronics-1.jpg",
              "/images/electronics-2.jpg",
              "/images/electronics-3.jpg",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "painting",
    name: "Painting",
    icon: Brush,
    services: [
      {
        id: "interior-painting",
        title: "Interior Painting",
        description: "Professional interior painting services",
        providers: [
          {
            id: 7,
            name: "Njeri's Brush Strokes",
            location: "Kileleshwa, Nairobi",
            rating: 4.9,
            image: "/images/interior painting.jpg",
            description:
              "Transform your interior spaces with our expert painting services. We use high-quality paints and techniques to bring your vision to life.",
            galleryImages: [
              "/images/interior-paint-1.jpg",
              "/images/interior-paint-2.jpg",
              "/images/interior-paint-3.jpg",
            ],
          },
        ],
      },
      {
        id: "exterior-painting",
        title: "Exterior Painting",
        description: "Expert exterior painting services",
        providers: [
          {
            id: 8,
            name: "Kimani's Exterior Experts",
            location: "Runda, Nairobi",
            rating: 4.7,
            image: "/images/exterior painting.jpg",
            description:
              "Enhance your home's curb appeal with our professional exterior painting services. We use weather-resistant paints to protect and beautify your home.",
            galleryImages: [
              "/images/exterior-paint-1.jpg",
              "/images/exterior-paint-2.jpg",
              "/images/exterior-paint-3.jpg",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "moving",
    name: "Moving",
    icon: Truck,
    services: [
      {
        id: "home-moving",
        title: "Home Moving",
        description: "Professional home relocation services",
        providers: [
          {
            id: 9,
            name: "Onyango's Movers",
            location: "Embakasi, Nairobi",
            rating: 4.8,
            image: "/images/home-moving.jpg",
            description:
              "We make your move stress-free with our professional packing, loading, and transportation services. Your belongings are in safe hands with us.",
            galleryImages: [
              "/images/moving-1.jpg",
              "/images/moving-2.jpg",
              "/images/moving-3.jpg",
            ],
          },
        ],
      },
      {
        id: "office-moving",
        title: "Office Moving",
        description: "Efficient office relocation services",
        providers: [
          {
            id: 10,
            name: "Muthomi's Business Relocations",
            location: "Industrial Area, Nairobi",
            rating: 4.6,
            image: "/images/office-moving.jpg",
            description:
              "Minimize downtime with our efficient office moving services. We handle everything from packing to setup at your new location.",
            galleryImages: [
              "/images/office-move-1.jpg",
              "/images/office-move-2.jpg",
              "/images/office-move-3.jpg",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "plumbing",
    name: "Plumbing",
    icon: Droplet,
    services: [
      {
        id: "pipe-repair",
        title: "Pipe Repair",
        description: "Expert pipe repair and maintenance",
        providers: [
          {
            id: 11,
            name: "Wekesa's Plumbing Solutions",
            location: "South B, Nairobi",
            rating: 4.9,
            image: "/images/pipe-repair.jpg",
            description:
              "We offer quick and reliable pipe repair services. Our team is equipped to handle all types of plumbing emergencies.",
            galleryImages: [
              "/images/pipe-1.jpg",
              "/images/pipe-2.jpg",
              "/images/pipe-3.jpg",
            ],
          },
        ],
      },
      {
        id: "drain-cleaning",
        title: "Drain Cleaning",
        description: "Professional drain cleaning services",
        providers: [
          {
            id: 12,
            name: "Auma's Drain Masters",
            location: "Donholm, Nairobi",
            rating: 4.7,
            image: "/images/drain-cleaning.jpg",
            description:
              "Say goodbye to clogged drains with our professional cleaning services. We use advanced tools to ensure your drains flow smoothly.",
            galleryImages: [
              "/images/drain-1.jpg",
              "/images/drain-2.jpg",
              "/images/drain-3.jpg",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "electrical",
    name: "Electrical",
    icon: Zap,
    services: [
      {
        id: "wiring-services",
        title: "Wiring Services",
        description: "Professional electrical wiring services",
        providers: [
          {
            id: 13,
            name: "Mwangi's Electric",
            location: "Kasarani, Nairobi",
            rating: 4.8,
            image: "/images/wiring-services.jpg",
            description:
              "From new installations to rewiring, we provide safe and reliable electrical services for your home or business.",
            galleryImages: [
              "/images/wiring-1.jpg",
              "/images/wiring-2.jpg",
              "/images/wiring-3.jpg",
            ],
          },
        ],
      },
      {
        id: "lighting-installation",
        title: "Lighting Installation",
        description: "Expert lighting installation services",
        providers: [
          {
            id: 14,
            name: "Nyambura's Bright Ideas",
            location: "Kitisuru, Nairobi",
            rating: 4.6,
            image: "/images/lighting-installation.jpg",
            description:
              "Illuminate your space with our professional lighting installation services. We offer a wide range of lighting solutions to suit your needs.",
            galleryImages: [
              "/images/lighting-1.jpg",
              "/images/lighting-2.jpg",
              "/images/lighting-3.jpg",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "landscaping",
    name: "Landscaping",
    icon: Scissors,
    services: [
      {
        id: "lawn-care",
        title: "Lawn Care",
        description: "Professional lawn maintenance services",
        providers: [
          {
            id: 15,
            name: "Oloo's Green Thumbs",
            location: "Loresho, Nairobi",
            rating: 4.9,
            image: "/images/lawn-care.jpg",
            description:
              "Keep your lawn lush and healthy with our comprehensive care services. We offer mowing, fertilizing, and pest control solutions.",
            galleryImages: [
              "/images/lawn-1.jpg",
              "/images/lawn-2.jpg",
              "/images/lawn-3.jpg",
            ],
          },
        ],
      },
      {
        id: "garden-design",
        title: "Garden Design",
        description: "Creative garden design and implementation",
        providers: [
          {
            id: 16,
            name: "Waridi Landscape Designs",
            location: "Spring Valley, Nairobi",
            rating: 4.7,
            image: "/images/garden-design.jpg",
            description:
              "Transform your outdoor space with our creative garden design services. We bring your vision to life with beautiful, sustainable landscapes.",
            galleryImages: [
              "/images/garden-1.jpg",
              "/images/garden-2.jpg",
              "/images/garden-3.jpg",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "auto-service",
    name: "Auto Service",
    icon: Car,
    services: [
      {
        id: "car-repair",
        title: "Car Repair",
        description: "Professional auto repair services",
        providers: [
          {
            id: 17,
            name: "Juma's Auto Clinic",
            location: "Industrial Area, Nairobi",
            rating: 4.8,
            image: "/images/car-repair.jpg",
            description:
              "Get your vehicle back on the road with our expert repair services. We handle everything from routine maintenance to major repairs.",
            galleryImages: [
              "/images/car-repair-1.jpg",
              "/images/car-repair-2.jpg",
              "/images/car-repair-3.jpg",
            ],
          },
        ],
      },
      {
        id: "car-wash",
        title: "Car Wash",
        description: "Expert car washing and detailing",
        providers: [
          {
            id: 18,
            name: "Amani's Sparkle Car Wash",
            location: "Kilimani, Nairobi",
            rating: 4.6,
            image: "/images/car-wash.jpg",
            description:
              "Give your car the care it deserves with our professional washing and detailing services. We'll make your vehicle look as good as new.",
            galleryImages: [
              "/images/car-wash-1.jpg",
              "/images/car-wash-2.jpg",
              "/images/car-wash-3.jpg",
            ],
          },
        ],
      },
    ],
  },
];
