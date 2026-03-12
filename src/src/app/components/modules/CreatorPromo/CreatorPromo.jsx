import React from 'react';
import Image from 'next/image';
// Keep your original import path
import image4 from '../../../assets/images/new/image4.png';

const CreatorPromo = () => {
  return (
    <div className="w-full bg-white py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left Content - Now centered vertically */}
          <div className="plartform w-full lg:w-1/2 space-y-6 flex flex-col justify-center">
            <h1 style={{fontWeight: '900', maxWidth: '619px'}} className="text-4xl sm:text-5xl  text-gray leading-tight">
            Join a Global Community of Successful Creators
            </h1>
            <p style={{maxWidth: '519px'}} className="small-text text-lg text-gray-700">
            Thousands of creators worldwide trust Miestro to power their membership businesses. From fitness instructors to business coaches, artists to educators—creators of all types are building sustainable income streams and deeper audience connections on our platform.
            </p>
            <div className="pt-4">
              <button style={{background: 'linear-gradient(to right, #006838, #96CF24)'}} className="px-8 py-4  hover:bg-teal-700 transition-colors text-white font-medium rounded-md shadow-lg">
                Join Now For Your Free Trial
              </button>
            </div>
          </div>
          
          {/* Right Content - Full height image */}
          <div className="w-full lg:w-1/2 relative">
            <div className="w-full ">
              <Image 
                src={image4} 
                alt="Creators from around the world" 
                className="w-full h-auto" 
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatorPromo;