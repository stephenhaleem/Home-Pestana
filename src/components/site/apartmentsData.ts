import hero1 from "../../assets/hero1.jpeg?url";
import room1 from "../../assets/hero2.jpeg?url";
import room2 from "../../assets/home3.jpeg?url";
import lounge from "../../assets/WhatsApp Image 2026-07-03 at 7.51.45 PM (1).jpeg";

export type Apartment = {
  slug: string;
  title: string;
  short: string;
  description: string;
  bedrooms: string;
  bathrooms: string;
  kitchen: string;
  living: string;
  amenities: string[];
  parking: string;
  quick: Record<string, string>;
  images: string[];
};

export const apartments: Apartment[] = [
  {
    slug: "two-bedroom-deluxe",
    title: "Two-Bedroom Deluxe",
    short: "Spacious two-bedroom with king beds and three bathrooms.",
    description:
      "Generous two-bedroom suites designed for extended stays — two large bedrooms with king-size beds, three modern bathrooms, a fully-equipped kitchen and an elegant living room perfect for entertaining.",
    bedrooms: "2 bedrooms, king-size beds, fitted wardrobes, bedside lighting",
    bathrooms: "3 bathrooms — master ensuite with rain shower and bathtub, guest bathroom, and powder room",
    kitchen: "Full kitchen with oven, hob, fridge, dishwasher, and stone countertops",
    living: "Open-plan living and dining area with smart TV, work desk, and balcony",
    amenities: ["Daily housekeeping", "High-speed Wi‑Fi", "Smart TV", "In-room safe", "Mini bar"],
    parking: "Off-street parking available",
    quick: {
      "Bed size": "King",
      "Bedrooms": "2",
      "Bathrooms": "3",
      "Occupancy": "4 adults",
      "Size": "~95 m²",
    },
    images: [hero1, room1, lounge],
  },
  {
    slug: "one-bedroom-grand",
    title: "One-Bedroom Grand",
    short: "One-bedroom with sitting room and king-size bed, two bathrooms.",
    description:
      "A generous one-bedroom residence with separate sitting room — ideal for guests who want a distinct living and sleeping area. King-size bed and two bathrooms provide comfort and privacy.",
    bedrooms: "1 bedroom with king-size bed and storage",
    bathrooms: "2 bathrooms — ensuite and a guest bathroom",
    kitchen: "Open-plan kitchen with modern appliances and breakfast bar",
    living: "Sitting room with lounge seating, dining table and workspace",
    amenities: ["Daily housekeeping", "Complimentary refreshments", "Laundry service on request"],
    parking: "Secure parking available",
    quick: {
      "Bed size": "King",
      "Bedrooms": "1 + sitting room",
      "Bathrooms": "2",
      "Occupancy": "2 adults",
      "Size": "~65 m²",
    },
    images: [room1, hero1, room2],
  },
  {
    slug: "studio-kitchen",
    title: "Studio with Kitchen",
    short: "Studio apartment with integrated kitchen and one bathroom.",
    description:
      "Compact studio living designed for short stays or solo travellers — a well-appointed kitchenette, comfortable sleeping area, and private bathroom.",
    bedrooms: "Studio sleeping area with king-size bed",
    bathrooms: "1 bathroom with shower",
    kitchen: "Compact kitchen with hob, fridge and microwave",
    living: "Combined living/sleeping area with TV and workspace",
    amenities: ["Fast Wi‑Fi", "Daily housekeeping (optional)", "Smart TV"],
    parking: "Street parking nearby",
    quick: {
      "Bed size": "King",
      "Bedrooms": "Studio",
      "Bathrooms": "1",
      "Occupancy": "2 adults",
      "Size": "~36 m²",
    },
    images: [room2, lounge, hero1],
  },
  {
    slug: "two-bedroom-premier",
    title: "Two-Bedroom Premier",
    short: "Luxurious two-bedroom with king beds and three bathrooms.",
    description:
      "A premium two-bedroom layout with generous living spaces, curated finishes and three bathrooms to ensure comfort for families or groups.",
    bedrooms: "2 bedrooms, king-size beds, premium linens",
    bathrooms: "3 bathrooms — en suite and guest facilities",
    kitchen: "Chef-style kitchen with full appliances and dining seating",
    living: "Spacious living room with premium audio and viewing experience",
    amenities: ["24/7 concierge", "Gym access", "Laundry service"],
    parking: "Private covered parking",
    quick: {
      "Bed size": "King",
      "Bedrooms": "2",
      "Bathrooms": "3",
      "Occupancy": "4 adults",
      "Size": "~110 m²",
    },
    images: [lounge, room2, room1],
  },
];

export default apartments;
