import { ArrowLeft, ArrowRight } from "lucide-react";
import React, { useState } from "react";
import img1 from "../assets/image/img1.jpg";
import img2 from "../assets/image/img2.jpg";
import img3 from "../assets/image/img3.jpg";

const images = [
    { id: 1, src: {img1}, alt: "Card 1", title: "Glass" },
    { id: 2, src:{img2}, alt: "Card 2", title: "Wood" },
    { id: 3, src: {img3}, alt: "Card 3", title: "Stone" }
  ];

function NewArrival() {
    const [expandedId, setExpandedId] = useState(1);
  return (
    <div className="flex justify-between items-center max-w-screen-xl mx-auto border-2 border-red-500 p-4 mb-4">
      <div className="flex flex-col gap-2 justify-between">
        <h1
          className="bg-gray-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100
"
        >
          Trendy Arrival's g;asssmorphsim efect{" "}
        </h1>

        <h1 className="text-[#A7A8A7] text-3xl font-bold">Just For You!</h1>

        <p className="max-w-screen-sm font-normal ">
          Check out our latest collections, handpicked to keep you ahead of the
          trends.
        </p>

        <ul>
          <li>
            <span className="font-inter font-bold">Men's Fashion</span> - Cool,
            casual, and effortlessly stylish.
          </li>
          <li>
            <span className="font-inter font-bold">Women's Fashion</span> -
            Elegant, bold, and chic.
          </li>
          <li>
            <span className="font-inter font-bold"> Kid's Fashion</span> -
            Playful styles for the little ones.
          </li>
          <li>
            <span className="font-inter font-bold"> Accessories</span> -
            Complete your look with the perfect accessories.
          </li>
        </ul>

        <button className="inline-flex items-center space-x-2">
  Shop Now 
  <span className="inline">
    <ArrowRight />
  </span>
</button>

      </div>

      <div className="w-full flex justify-between items-center">
      <div className="w-full max-w-7xl mx-auto p-4">
      <div className="flex w-full gap-3 h-[400px]">
        {images.map((image) => (
          <div
            key={image.id}
            className={`relative bg-gray-200 rounded-2xl overflow-hidden transition-all duration-500 cursor-pointer ${
              expandedId === image.id ? 'w-[70%]' : 'w-[15%]'
            }`}
            onMouseEnter={() => setExpandedId(image.id)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
            
            {/* Title at the bottom - only shows on expanded card */}
            {expandedId === image.id && (
              <div className="absolute bottom-4 left-4">
                <div className="inline-flex items-center gap-2 bg-amber-500 text-white px-3 py-2 rounded-full">
                  <div className="w-5 h-5 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                    </svg>
                  </div>
                  <span>{image.title}</span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
      </div>
    </div>
  );
}

export default NewArrival;
