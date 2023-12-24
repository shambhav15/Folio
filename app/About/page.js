
import React from 'react';

const page = () => {
  const gradientStops = [
    'rgba(128, 0, 128, 1) 0%',
    'rgba(128, 0, 128, 0.4) 0.001%',
    'rgba(128, 0, 128, 0.2) 40%',
    'rgba(128, 0, 128, 0.1) 60%',
    'rgba(128, 0, 128, 0) 100%',
  ]; // Define gradient stops

  const gradient = gradientStops.join(', '); // Join stops for the gradient

  return (
    <div className="h-screen flex items-center justify-center bg-black">
      <div className="relative w-full h-full">
        <div
          style={{
            background: `radial-gradient(circle at center, ${gradient})`,
          }}
          className="absolute inset-0"
        ></div>
      </div>
    </div>
  );
};

export default page;