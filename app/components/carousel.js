'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';

const images = [
   '/resu.png',
   '/game.png',
   '/hospital.png'
  // Add more image paths as needed
];

export default function Carousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-5/6 overflow-hidden rounded-2xl">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          width: `${images.length * 100}%`,
          transform: `translateX(-${index * (100 / images.length)}%)`,
        }}
      >
        {images.map((image, i) => (
          <div key={i} className="w-full h-full">
            <Image
              width={200}
              height={200}
              src={image}
              alt={`slide-${i}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
