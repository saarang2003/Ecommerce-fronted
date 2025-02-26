import React, { useState } from "react";

function AllListing() {
  const [priceRange, setPriceRange] = useState(100);
  
  const handlePriceChange = (e) => {
    setPriceRange(e.target.value);
  };

  return (
    <div className="container mx-auto py-8 px-4">
    
      
      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters Section */}
        <aside className="w-full md:w-1/4 bg-gray-50 p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-medium mb-6">Set Filters</h2>

          {/* Categories */}
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-3">Categories</h3>
            <ul className="space-y-2">
              {["Men", "Women", "Kids", "Girls", "Accessories"].map((category) => (
                <li key={category}>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      name="category"
                      value={category.toLowerCase()}
                      className="mr-3 h-4 w-4 accent-black"
                    />
                    <span>{category}</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>

          {/* Sizes */}
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-3">Sizes</h3>
            <ul className="space-y-2">
              {[
                { value: "XS", label: "Extra Small" },
                { value: "S", label: "Small" },
                { value: "M", label: "Medium" },
                { value: "L", label: "Large" },
                { value: "XL", label: "Extra Large" },
              ].map((size) => (
                <li key={size.value}>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      name="sizes"
                      value={size.value}
                      className="mr-3 h-4 w-4 accent-black"
                    />
                    <span>{size.label}</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>

          {/* Price Range */}
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-3">Price Range</h3>
            <div className="relative pt-1 pb-6">
              <input
                type="range"
                value={priceRange}
                onChange={handlePriceChange}
                min="100"
                max="2500"
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-black"
              />
              <div className="flex justify-between mt-2 text-sm text-gray-600">
                <span>₹100</span>
                <span>₹{priceRange}</span>
                <span>₹2500</span>
              </div>
            </div>
          </div>

          {/* Colors */}
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-3">Color</h3>
            <ul className="space-y-3">
  {[
    { value: "Red", color: "red" },
    { value: "Green", color: "green" },
    { value: "White", color: "white", border: true },
    { value: "Black", color: "black" },
    { value: "Purple", color: "purple" },
    { value: "Brown", color: "brown" },
  ].map((color) => (
    <li key={color.value} className="flex items-center">
      <label className="flex items-center cursor-pointer">
        <input
          type="checkbox"
          name="color"
          value={color.value}
          className="mr-3 h-4 w-4 accent-black"
        />
        <span
          className={`w-5 h-5 rounded-full mr-3 inline-block ${
            color.border ? "border border-gray-300" : ""
          }`}
          style={{ backgroundColor: color.color }}
        ></span>
        <span>{color.value}</span>
      </label>
    </li>
  ))}
</ul>
          </div>

          {/* Filter buttons */}
          <div className="flex flex-col gap-3">
            <button className="w-full bg-black text-white py-2 px-4 rounded-full hover:bg-gray-800 transition">
              Apply Filter
            </button>
            <button className="w-full bg-gray-200 text-gray-800 py-2 px-4 rounded-full hover:bg-gray-300 transition">
              Reset Filters
            </button>
          </div>
        </aside>

        {/* Products Grid */}
        <main className="w-full md:w-3/4">
          <h2 className="text-4xl text-center font-thin mb-6">Clothing</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 12 }).map((_, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden mb-3">
                  {/* Product image placeholder */}
                  <div className="w-full h-full flex items-center justify-center text-gray-500">
                    Product Image
                  </div>
                </div>
                <h3 className="font-medium">Product Title {index + 1}</h3>
                <p className="text-gray-700">₹1,299</p>
                <div className="flex gap-1 mt-1">
                  <span className="w-3 h-3 rounded-full bg-black"></span>
                  <span className="w-3 h-3 rounded-full bg-red-500"></span>
                  <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                </div>
              </div>
            ))}
          </div>
          
          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <nav className="flex gap-2">
              {[1, 2, 3, 4].map((page) => (
                <button 
                  key={page} 
                  className={`w-8 h-8 flex items-center justify-center rounded-full ${
                    page === 1 ? "bg-black text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {page}
                </button>
              ))}
            </nav>
          </div>
        </main>
      </div>
    </div>
  );
}

export default AllListing;