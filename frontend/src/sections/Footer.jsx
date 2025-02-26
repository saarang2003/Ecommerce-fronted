import React from 'react'

function Footer() {
  return (
    <div className='w-full bg-[#021210]/95 text-[#A7A8A7] text-center mx-auto p-16 rounded-lg shadow-lg'>
            <div className='flex justify-evenly text-left items-center gap-6 '>

                <div className='flex flex-col gap-6 justify-between items-start '>
                    <label htmlFor="" className='text-2xl ml-2'>Join Our Newsletter</label>
                <input type="text" value="Enter Full Name" className='max-w-screen-sm border-none rounded-3xl p-4' />
                <input type="text" value="Enter Email" className='max-w-screen-sm border-none rounded-3xl p-4' />
                </div>

                <div className='flex flex-col gap-1 text-left justify-between items-start'>
                <h1 className='mb-4'>Snapcart</h1>
                   <a href="">Who We are </a>
                   <a href="">Terms and Condition </a>
                   <a href="">Fees & Payments </a>
                   <a href="">Returns & Refund Policy  </a>
                </div>

                
                <div className='flex flex-col gap-1 justify-between items-start'>
                <h1 className='mb-4'>Shop By</h1>
                   <a href="">All Men </a>
                   <a href="">Women </a>
                   <a href="">Men  </a>
                   <a href="">Kids</a>
                   <a href="">New Arrivals</a>
                   <a href="">Brands</a>
                </div>

                
                <div className='flex flex-col gap-1 justify-between items-start'>
                <h1 className='mb-4'>Follow Us</h1>
                   <a href="">facebook </a>
                   <a href="">Instagram </a>
                   <a href="">Pinterest </a>
                   <a href="">Twitter </a>
                </div>

            </div>
    </div>
  )
}

export default Footer