import React from 'react'

function AllListing() {
  return (
    <div className='w-full flex justify-between items-center mx-auto border-1 border-red-500 p-16'>

      <div className='flex flex-col justify-between  items-start gap-6 border-1 border-red-500'>
     <h1>Set Filters</h1>

     <div className='flex flex-col gap-2 '>
      <h1>Categories</h1>
      <ul>
  <li>
    <label>
      <input type="checkbox" name="category" value="men"  className='mr-3' />
      Men
    </label>
  </li>
  <li>
    <label>
      <input type="checkbox" name="category" value="women" className='mr-3' />
      Women
    </label>
  </li>
  <li>
    <label>
      <input type="checkbox" name="category" value="kids" className='mr-3' />
      Kids
    </label>
  </li>
  <li>
    <label>
      <input type="checkbox" name="category" value="girls"  className='mr-3' />
      Girls
    </label>
  </li>
  <li>
    <label>
      <input type="checkbox" name="category" value="accessories" className='mr-3' />
      Accessories
    </label>
  </li>
</ul>
     </div>

     <div className='flex flex-col gap-2 '>
      <h1>Sizes</h1>
      <ul>
  <li>
    <label>
      <input type="checkbox" name="sizes" value="XS" className='mr-3' />
      Extra Small
    </label>
  </li>
  <li>
    <label>
      <input type="checkbox" name="sizes" value="S" className='mr-3' />
      Small
    </label>
  </li>
  <li>
    <label>
      <input type="checkbox" name="sizes" value="M" className='mr-3' />
      Medium
    </label>
  </li>
  <li>
    <label>
      <input type="checkbox" name="sizes" value="L"  className='mr-3'/>
      Large
    </label>
  </li>
  <li>
    <label>
      <input type="checkbox" name="sizes" value="XL" className='mr-3' />
      Extra Large
    </label>
  </li>
</ul>

     </div>

     <div className="relative">
  <h1 className="mb-2">Price Range</h1>
  <input 
    type="range" 
    value="100" 
    min="100" 
    max="2500" 
    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" 
  />
  <span className="text-sm text-gray-500 dark:text-gray-400 absolute left-0 -bottom-6 transform translate-x-0">100</span>
  <span className ="text-sm text-gray-500 dark:text-gray-400 absolute right-0 -bottom-6 transform translate-x-0">2500</span>
</div>



      </div>

      <div>
        <h1>CLothing</h1>
      </div>

      
    </div>
  )
}

export default AllListing