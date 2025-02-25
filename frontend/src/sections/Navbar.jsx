import { Facebook, X } from 'lucide-react'
import React from 'react'
import logo from '../assets/images/logo.png'

function Navbar() {
  return (
    <div className='w-full z-20 top-0 start-0 border-b border-white '>
      <div className="flex flex-col sm:flex md:flex-row w-full bg-[#DB9400] justify-around">
  {/* div1 */}
  <div className="flex flex-col md:flex-row gap-1 justify-between items-center hidden md:flex">
    <p className='text-black px-4 '>Follow Us</p>
    <img
      src="https://cdn4.iconfinder.com/data/icons/social-media-black-white-2/1227/X-1024.png"
      alt="twitter img"
      width={15}
      height={15}
    />
    <img
      src="https://cdn1.iconfinder.com/data/icons/social-media-outline-6/128/SocialMedia_Facebook-Outline-1024.png"
      alt="facebook img"
      width={15}
      height={15}
    />
    <img
      src="https://cdn4.iconfinder.com/data/icons/social-media-and-logos-12/32/Logo_Google-1024.png"
      alt="google img"
      width={20}
      height={20}
    />
  </div>

  {/* div2 */}
  <div className=" text-black font-regular p-1 text-center">
    Sign up to get 20% off on our collection
  </div>

  {/* div3 */}
  <div className="flex flex-col md:flex-row gap-1 justify-between items-center hidden md:flex">
    <img
      src="https://cdn4.iconfinder.com/data/icons/multimedia-75/512/multimedia-01-1024.png"
      alt="call image"
      width={20}
      height={20}
    />
    <p className='text-black'>(1000)-000 -0202</p>
  </div>
</div>


    {/* div2 */}
        <div className='flex flex-col sm:flex md:flex-row w-full'>
         
         {/* div1 */}
         <div className='flex justify-between gap-4'>
            <img src={logo} alt="logo" width={20} height={20} />
            <h className = "font-bold">SnapCart</h>
         </div>

         {/* div2 */}
        <div className='flex justify-between'>
        {/* searcj  */}
        {/* livaray button  */}
        <button>Search</button>
        </div>

        <div className='flex justify-between'>
        {/* ion1 */}
        {/* ion1 */}
        {/* ion1 */}
        </div>

        </div>
    </div>
  )
}

export default Navbar

