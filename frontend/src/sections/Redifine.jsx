import React from "react";
import img from "../assets/image/img.png";
import img1 from '../assets/image/img1.jpg';

function Redifine() {
  return (
    <div className="flex flex-col gap-4 justify-between items-center max-w-screen-xl mx-auto border-2 border-red-500 p-4 mb-4">
      <h1 className="text-[90px] font-inter font-bold">
        Redefining your <span className="text-[#A7A8A7]">Wardrobe</span>
      </h1>
      <img src={img} alt="image " />

      <div className="w-full mb-4">
        <h1 className="text-center text-[30px] font-bold text-[#A7A8A7] mb-4">
          WesternWear
        </h1>
        <div className="flex gap-4 justify-between items-center">
            <div className="w-[300px] h-[400px] border-2 border-slate-800 text-center">Card1</div>
            <div className="w-[300px] h-[400px] border-2 border-slate-800 text-center">Card1</div>
            <div className="w-[300px] h-[400px] border-2 border-slate-800 text-center">Card1</div>
            <div className="w-[300px] h-[400px] border-2 border-slate-800 text-center">Card1</div>
        </div>
      </div>

      <div className="w-full mb-4">
        <h1 className="text-center text-[30px] font-bold text-[#A7A8A7] mb-4">
          EthnicWear
        </h1>
        <div className="flex gap-4 justify-between items-center">
            <div className="w-[300px] h-[400px] border-2 border-slate-800 text-center">Card1</div>
            <div className="w-[300px] h-[400px] border-2 border-slate-800 text-center">Card1</div>
            <div className="w-[300px] h-[400px] border-2 border-slate-800 text-center">Card1</div>
            <div className="w-[300px] h-[400px] border-2 border-slate-800 text-center">Card1</div>
        </div>
      </div>

      <div className="w-full mb-4">
        <h1 className="text-center text-[30px] font-bold text-[#A7A8A7] mb-4">
          Footwear
        </h1>
        <div className="flex gap-4 justify-between items-center">
            <div className="w-[300px] h-[400px] border-2 border-slate-800 text-center">Card1</div>
            <div className="w-[300px] h-[400px] border-2 border-slate-800 text-center">Card1</div>
            <div className="w-[300px] h-[400px] border-2 border-slate-800 text-center">Card1</div>
            <div className="w-[300px] h-[400px] border-2 border-slate-800 text-center">Card1</div>
        </div>
      </div>

      <div className="flex gap-8 justify-between mx-auto items-center">
  <div className="flex flex-col gap-4 items-center">
    <img src={img1} alt="icons" width={50} height={50} />
    <h1 className="font-inter font-bold">EASY EXCHANGE</h1>
  </div>

  <div className="flex flex-col gap-4 items-center">
    <img src={img1} alt="icons" width={50} height={50} />
    <h1 className="font-inter font-bold">EASY EXCHANGE</h1>
  </div>

  <div className="flex flex-col gap-4 items-center">
    <img src={img1} alt="icons" width={50} height={50} />
    <h1 className="font-inter font-bold">EASY EXCHANGE</h1>
  </div>
</div>


    </div>
  );
}

export default Redifine;
