import { PROPERTYLISTINGSAMPLE } from "@/constants";
import { PropertyProps } from "@/interfaces";
import Image from "next/image";

const filters = [
  "Top Villa", "Self Checkin", "Pet Friendly", "Luxury", "Free Parking",
  "Beachfront", "Mountain View", "Historical", "Hot Tub", "City Center"
];

const Pill = ({ label }: { label: string }) => (
  <button className="px-4 py-1 m-1 border rounded-full text-sm hover:bg-blue-100">
    {label}
  </button>
);

const PropertyCard = ({ property }: { property: PropertyProps }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <img src={property.image} alt={property.name} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h2 className="text-lg font-bold">{property.name}</h2>
      <p className="text-sm text-gray-500">{property.address.city}, {property.address.country}</p>
      <div className="flex justify-between items-center mt-2">
        <span className="text-blue-600 font-semibold">${property.price}</span>
        <span className="text-yellow-500 font-medium">{property.rating} ★</span>
      </div>
    </div>
  </div>
);

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[url('/hero.jpg')] bg-cover bg-center text-white text-center py-20 px-4">
        <h1 className="text-4xl font-bold mb-2">Find your favorite place here!</h1>
        <p className="text-lg">The best prices for over 2 million properties worldwide.</p>
      </section>

      {/* Filter Section */}
      <section className="my-6 px-4">
        <h3 className="text-xl font-semibold mb-2">Filter by:</h3>
        <div className="flex flex-wrap">
          {filters.map((filter, idx) => (
            <Pill key={idx} label={filter} />
          ))}
        </div>
      </section>

      {/* Listing Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-8">
        {PROPERTYLISTINGSAMPLE.map((property, index) => (
          <PropertyCard key={index} property={property} />
        ))}
      </section>
    </div>
  );
}
