import { Brush, Wrench, Truck, Home, Droplet, Zap, Scissors, Car } from 'lucide-react'

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
            name: "Emma Potter",
            location: "525 N Tyron Street, New York",
            rating: 4.8,
            image: "/images/washing-cloths.jpg"
          }
        ]
      },
      {
        id: "floor-cleaning",
        title: "Floor Cleaning",
        description: "Expert floor cleaning and maintenance",
        providers: [
          {
            id: 2,
            name: "Harry Wilson",
            location: "123 Main St, New York",
            rating: 4.7,
            image: "/images/floor-cleaning.jpg"
          }
        ]
      },
      {
        id: "carpet-cleaning",
        title: "Carpet Cleaning",
        description: "Deep carpet cleaning and stain removal",
        providers: [
          {
            id: 3,
            name: "Sophia Johnson",
            location: "456 Park Ave, New York",
            rating: 4.9,
            image: "/images/carpet-cleaning.jpg"
          }
        ]
      }
    ]
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
            name: "John Smith",
            location: "789 Oak St, New York",
            rating: 4.6,
            image: "/images/appliance-repair.jpg"
          }
        ]
      },
      {
        id: "furniture-repair",
        title: "Furniture Repair",
        description: "Furniture restoration and repair",
        providers: [
          {
            id: 5,
            name: "Mike Brown",
            location: "321 Elm St, New York",
            rating: 4.8,
            image: "/images/furniture-repair.jpg"
          }
        ]
      },
      {
        id: "electronics-repair",
        title: "Electronics Repair",
        description: "Professional electronics repair services",
        providers: [
          {
            id: 6,
            name: "David Lee",
            location: "654 Pine St, New York",
            rating: 4.7,
            image: "/images/electronics-repair.jpg"
          }
        ]
      }
    ]
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
            name: "Alice Johnson",
            location: "987 Maple St, New York",
            rating: 4.9,
            image: "/images/interior-painting.jpg"
          }
        ]
      },
      {
        id: "exterior-painting",
        title: "Exterior Painting",
        description: "Expert exterior painting services",
        providers: [
          {
            id: 8,
            name: "Bob Williams",
            location: "654 Oak Ave, New York",
            rating: 4.7,
            image: "/images/exterior-painting.jpg"
          }
        ]
      }
    ]
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
            name: "Charlie Brown",
            location: "321 Pine Rd, New York",
            rating: 4.8,
            image: "/images/home-moving.jpg"
          }
        ]
      },
      {
        id: "office-moving",
        title: "Office Moving",
        description: "Efficient office relocation services",
        providers: [
          {
            id: 10,
            name: "Diana Clark",
            location: "789 Elm Blvd, New York",
            rating: 4.6,
            image: "/images/office-moving.jpg"
          }
        ]
      }
    ]
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
            name: "Edward Smith",
            location: "456 Birch Ln, New York",
            rating: 4.9,
            image: "/images/pipe-repair.jpg"
          }
        ]
      },
      {
        id: "drain-cleaning",
        title: "Drain Cleaning",
        description: "Professional drain cleaning services",
        providers: [
          {
            id: 12,
            name: "Fiona Davis",
            location: "123 Cedar St, New York",
            rating: 4.7,
            image: "/images/drain-cleaning.jpg"
          }
        ]
      }
    ]
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
            name: "George Wilson",
            location: "789 Spruce Ave, New York",
            rating: 4.8,
            image: "/images/wiring-services.jpg"
          }
        ]
      },
      {
        id: "lighting-installation",
        title: "Lighting Installation",
        description: "Expert lighting installation services",
        providers: [
          {
            id: 14,
            name: "Hannah Moore",
            location: "321 Willow Rd, New York",
            rating: 4.6,
            image: "/images/lighting-installation.jpg"
          }
        ]
      }
    ]
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
            name: "Ian Taylor",
            location: "654 Aspen Blvd, New York",
            rating: 4.9,
            image: "/images/lawn-care.jpg"
          }
        ]
      },
      {
        id: "garden-design",
        title: "Garden Design",
        description: "Creative garden design and implementation",
        providers: [
          {
            id: 16,
            name: "Julia Green",
            location: "987 Redwood Ln, New York",
            rating: 4.7,
            image: "/images/garden-design.jpg"
          }
        ]
      }
    ]
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
            name: "Kevin Mechanic",
            location: "123 Garage St, New York",
            rating: 4.8,
            image: "/images/car-repair.jpg"
          }
        ]
      },
      {
        id: "car-wash",
        title: "Car Wash",
        description: "Expert car washing and detailing",
        providers: [
          {
            id: 18,
            name: "Laura Washer",
            location: "456 Clean Ave, New York",
            rating: 4.6,
            image: "/images/car-wash.jpg"
          }
        ]
      }
    ]
  }
]

