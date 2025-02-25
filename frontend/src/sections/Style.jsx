import React from "react";
import img1 from "../assets/image/img1.jpg";
import img2 from "../assets/image/img2.jpg";
import img3 from "../assets/image/img3.jpg";
import img4 from "../assets/image/img4.jpg";

function Style() {
  return (
    <div className="flex flex-col items-center max-w-screen-xl mx-auto border-2 border-red-500 mb-4">
      <h1 className="text-center font-inter font-extrabold text-3xl mb-1">
        Style That Speaks{" "}
      </h1>
      <p className="max-w-screen-sm font-normal text-center text-slate-600 mb-3">
        Shop the latest trends in high-quality, aesthetic clothing, and make a
        statement every time you step out.
      </p>
      <div className="flex flex-col w-full">
        <div className="flex justify-between items-center w-full gap-3 mx-auto">
          {/* Women's Section */}
          <div className="flex flex-col gap-3 items-center text-center w-[250px] h-[250px] border-2 border-red-500 rounded-full shadow-xl">
            <img
              src={img1}
              alt="image1"
              className="w-full h-full object-cover rounded-full"
            />
            <h1 className="font-inter font-medium text-sm mt-2">Women's</h1>
          </div>

          {/* Men's Section */}
          <div className="flex flex-col gap-3 items-center text-center w-[250px] h-[250px] border-2 border-red-500 rounded-full shadow-xl">
            <img
              src={img2}
              alt="image2"
              className="w-full h-full object-cover rounded-full"
            />
            <h1 className="font-inter font-medium text-sm mt-2">Men's</h1>
          </div>

          {/* Jewelry's Section */}
          <div className="flex flex-col gap-3 items-center text-center w-[250px] h-[250px] border-2 border-red-500 rounded-full shadow-xl">
            <img
              src={img3}
              alt="image3"
              className="w-full h-full object-cover rounded-full"
            />
            <h1 className="font-inter font-medium text-sm mt-2">Jewelry's</h1>
          </div>

          {/* Accessories's Section */}
          <div className="flex flex-col gap-3 items-center text-center w-[250px] h-[250px] border-2 border-red-500 rounded-full shadow-xl">
            <img
              src={img4}
              alt="image4"
              className="w-full h-full object-cover rounded-full"
            />
            <h1 className="font-inter font-medium text-sm mt-2">Accessories's</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Style;
