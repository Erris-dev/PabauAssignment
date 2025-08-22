import ArtistImage from "@/assets/generate me an image of a famous guitar player.png";
import { useState } from "react";

export interface Musician {
    name: string;
    musicianImage: string;
}

export interface Specs {
    bodyWood: string;
    neckWood: string;
    fingerboard: string;
    pickups: string;
    tuners: string;
    scaleLength: string;
    bridge: string;
}

export const SpecificationContent = ( { description, specs }: { description: string, specs: Specs }) => (
     <div className="text-gray-700 space-y-6">
        <p className="leading-relaxed">{description}</p>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Body Wood: "{specs.bodyWood}"</li>
            <li>Neck Wood: "{specs.neckWood}"</li>
            <li>Fingerboard: "{specs.fingerboard}"</li>
            <li>Pickups: "{specs.pickups}"</li>
            <li>Tuners: "{specs.tuners}"</li>
            <li>Scale Length: "{specs.scaleLength}"</li>
            <li>Bridge: "{specs.bridge}"</li>
        </ul>
    </div>
);

const ArtistCard = ({ musician }: { musician: Musician }) => (
  <div className="bg-[#FDFBF9] p-4 w-60 rounded-md shadow-sm h-full">
    <div className="size-50 bg-black rounded-md overflow-hidden">
      <img
        src={musician.musicianImage}
        alt={`A photo of ${musician.name}`}
        className="w-full h-full object-contain"
      />
    </div>
    <p className="text-center mt-4 text-gray-700 font-medium">
      {musician.name}
    </p>
  </div>
);

export const WhoPlaysItContent = ({ musicians }: { musicians: Musician[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsPerView = 3; // show 3 at a time (adjust for mobile)
  const totalPages = Math.ceil(musicians.length / itemsPerView);

  const handlePrev = () => {
    setCurrentIndex((prev: number) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev: number) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            width: `${totalPages * 100}%`,
          }}
        >
          {musicians.map((musician, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 md:w-1/3 flex-shrink-0 px-2"
            >
              <ArtistCard musician={musician} />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-4 bg-white p-2 rounded-full shadow-md text-gray-600 hover:bg-gray-100"
      >
        ‹
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-4 bg-white p-2 rounded-full shadow-md text-gray-600 hover:bg-gray-100"
      >
        ›
      </button>
    </div>
  );
};

