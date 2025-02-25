import React, { useState, useRef, useEffect } from 'react';
import {AlignJustify} from 'lucide-react';

function Menu() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className='w-full flex justify-evenly items-center gap-4'>
      <div className='flex gap-2 justify-between items-center'>
        <button>
        <AlignJustify size ={20} className ="inline" />
        </button>  
       Shop Now</div>
      
      {/* div2 - Navigation Links */}
      <div className='flex justify-between items-center gap-4'>
        <a href="#" className='hover:underline decoration-[#DB9400]'>Home</a>
        <a href="#" className='hover:underline decoration-[#DB9400]'>Fashion</a>
        
        {/* Dropdown menu for New Arrivals */}
        <div className="relative" ref={dropdownRef}>
          <button 
            onClick={toggleDropdown}
            className='hover:underline decoration-[#DB9400] flex items-center gap-2'
          >
            New Arrivals
            <svg className="w-2.5 h-2.5 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
            </svg>
          </button>
          
          {/* Dropdown content with improved grid layout */}
          {isDropdownOpen && (
            <div className="absolute left-1/2 transform -translate-x-1/2 z-10 w-auto min-w-[600px] bg-white border border-gray-100 rounded-lg shadow-md mt-2 p-6">
              <div className="grid grid-cols-3 gap-8">
                {/* Column 1 */}
                <div>
                  <h3 className="font-medium text-gray-900 mb-4">Women</h3>
                  <ul className="space-y-3">
                    <li>
                      <a href="#" className="text-gray-500 hover:text-blue-600">
                        Dresses
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-500 hover:text-blue-600">
                        Tops
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-500 hover:text-blue-600">
                        Bottoms
                      </a>
                    </li>
                  </ul>
                </div>
                
                {/* Column 2 */}
                <div>
                  <h3 className="font-medium text-gray-900 mb-4">Men</h3>
                  <ul className="space-y-3">
                    <li>
                      <a href="#" className="text-gray-500 hover:text-blue-600">
                        Shirts
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-500 hover:text-blue-600">
                        Pants
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-500 hover:text-blue-600">
                        Accessories
                      </a>
                    </li>
                  </ul>
                </div>
                
                {/* Column 3 */}
                <div>
                  <h3 className="font-medium text-gray-900 mb-4">Collections</h3>
                  <ul className="space-y-3">
                    <li>
                      <a href="#" className="text-gray-500 hover:text-blue-600">
                        Spring 2025
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-500 hover:text-blue-600">
                        Limited Edition
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-500 hover:text-blue-600">
                        Exclusive Items
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
        
        <a href="#" className='hover:underline decoration-[#DB9400]'>All Brands</a>
        <a href="#" className='hover:underline decoration-[#DB9400]'>More</a>
      </div>
      
      {/* div3 */}
      <div className='flex justify-between items-center gap-2'>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-rocket">
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
          <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
          <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
          <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
        </svg>
        Free International Delivery
      </div>
    </div>
  );
}

export default Menu;