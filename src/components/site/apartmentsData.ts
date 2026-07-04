import room1 from "../../assets/room-1.jpg?url";
import room2 from "../../assets/room-2.jpg?url";
import room3 from "../../assets/room-3.jpg?url";
import hero1 from "../../assets/hero1.jpeg?url";
import hero2 from "../../assets/hero2.jpeg?url";
import home3 from "../../assets/home3.jpeg?url";
import lounge from "../../assets/amenity-lounge.jpg?url";
import gym from "../../assets/amenity-gym.jpg?url";
import pool from "../../assets/amenity-pool.jpg?url";

export type Apartment = {
  slug: string;
  title: string;
  short: string;
  description: string;
  unitsAvailable: string;
  bedroom: string;
  bathroom: string;
  kitchen: string;
  living: string;
  amenities: string[];
  parking: string;
  quick: Record<string, string>;
  images: string[];
  location?: {
    latitude: number;
    longitude: number;
    address: string;
  };
};

export const apartments: Apartment[] = [
  {
    slug: "two-bedroom-apartment",
    title: "Two-Bedroom Apartment",
    short: "Spacious two-bedroom with king-size beds and three bathrooms.",
    description:
      "Our most generous floor plan — two full bedrooms each with a king-size bed, three private bathrooms, a fully equipped kitchen and a warm, elegant living area. Ideal for families or small groups who want room to spread out without giving up the daily-serviced comfort of a hotel.",
    unitsAvailable: "4 units available",
    bedroom:
      "Two bedrooms, each with a king-size bed, quality linens, fitted wardrobes, and bedside lighting.",
    bathroom:
      "Three bathrooms in total — a master ensuite, a second ensuite for the guest bedroom, and an additional guest/powder bathroom.",
    kitchen:
      "Fully equipped kitchen with cooker, fridge-freezer, microwave and everyday cookware — ready for home-cooked meals.",
    living:
      "Open-plan living and dining space with comfortable seating, a smart TV, and a dedicated work corner.",
    amenities: [
      "Daily housekeeping",
      "High-speed Wi‑Fi",
      "Smart TV",
      "24/7 security",
      "Backup power",
    ],
    parking: "Private on-site parking included.",
    quick: {
      "Bed size": "King (x2)",
      Bedrooms: "2",
      Bathrooms: "3",
      Occupancy: "Up to 4 guests",
    },
    images: [room1, room2, hero1],
    location: {
      latitude: 6.5244,
      longitude: 3.3792,
      address: "Home Pestana Apartments, Ikorodu, Nigeria",
    },
  },
  {
    slug: "one-bedroom-sitting-room",
    title: "One-Bedroom with Sitting Room",
    short: "One bedroom with a separate sitting room, king-size bed, and two bathrooms.",
    description:
      "A comfortable one-bedroom residence with its own distinct sitting room — perfect for guests who want a clear separation between where they relax and where they sleep. Comes with a king-size bed and two private bathrooms.",
    unitsAvailable: "1 unit available",
    bedroom: "One bedroom with a king-size bed, wardrobe storage, and quiet, restful lighting.",
    bathroom:
      "Two bathrooms — an ensuite off the bedroom and a second guest bathroom off the sitting room.",
    kitchen: "Compact, well-appointed kitchen area with essential appliances for everyday cooking.",
    living: "Separate sitting room with lounge seating, a dining spot, and a smart TV.",
    amenities: [
      "Daily housekeeping",
      "High-speed Wi‑Fi",
      "Smart TV",
      "24/7 security",
      "Backup power",
    ],
    parking: "On-site parking available.",
    quick: {
      "Bed size": "King",
      Bedrooms: "1 + sitting room",
      Bathrooms: "2",
      Occupancy: "Up to 2 guests",
    },
    images: [hero2, home3, lounge],
    location: {
      latitude: 6.5244,
      longitude: 3.3792,
      address: "Home Pestana Apartments, Ikorodu, Nigeria",
    },
  },
  {
    slug: "studio-single-room",
    title: "Studio (Single Room with Kitchen)",
    short: "Compact studio with an integrated kitchen and one bathroom.",
    description:
      "A well-appointed studio designed for solo travellers or short stays — a comfortable sleeping area, an integrated kitchen, and a private bathroom, all finished to the same standard as our larger residences.",
    unitsAvailable: "3 units available",
    bedroom: "Single sleeping area with a comfortable bed and storage space.",
    bathroom: "One private bathroom with shower.",
    kitchen:
      "Integrated kitchenette with hob, fridge, and microwave — everything needed for a short or extended stay.",
    living: "Combined living and sleeping area with a smart TV and small work desk.",
    amenities: ["Daily housekeeping (optional)", "High-speed Wi‑Fi", "Smart TV", "24/7 security"],
    parking: "Street parking available nearby.",
    quick: {
      "Bed size": "Standard",
      Bedrooms: "Studio",
      Bathrooms: "1",
      Occupancy: "Up to 2 guests",
    },
    images: [room3, pool, gym],
    location: {
      latitude: 6.5244,
      longitude: 3.3792,
      address: "Home Pestana Apartments, Ikorodu, Nigeria",
    },
  },
];

export default apartments;
