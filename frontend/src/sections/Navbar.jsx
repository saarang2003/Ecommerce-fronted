import React from "react";
import logo from "../assets/image/logo.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Heart, ShoppingCart } from "lucide-react";
import {Link} from 'react-router-dom';



export function InputWithButton() {
  return (
    <div className="flex w-full items-center space-x-2">
      <Input
        className="border border-black sm:w-auto md:w-80 lg:max-w-96"
        type="email"
        placeholder="Email"
      /> 
      <Button className=" bg-[#DB9400]  text-black hover:bg-white hover:outline  py-2" type="submit">
        Subscribe
      </Button>
    </div>
  );
}

export function MultiMenu() {
  return (
    <nav className="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <a
          href="https://flowbite.com"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Flowbite
          </span>
        </a>
        <button
          data-collapse-toggle="mega-menu-full-image"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="mega-menu-full-image"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          id="mega-menu-full-image"
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
        >
          <ul className="flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <button
                id="mega-menu-full-cta-image-button"
                data-collapse-toggle="mega-menu-full-image-dropdown"
                className="flex items-center justify-between w-full py-2 px-3 font-medium text-gray-900 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Company{" "}
                <svg
                  className="w-2.5 h-2.5 ms-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Marketplace
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Resources
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div
        id="mega-menu-full-image-dropdown"
        className="mt-1 bg-white border-gray-200 shadow-xs border-y dark:bg-gray-800 dark:border-gray-600"
      >
        <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-sm text-gray-500 dark:text-gray-400 md:grid-cols-3 md:px-6">
          <ul
            className="hidden mb-4 space-y-4 md:mb-0 md:block"
            aria-labelledby="mega-menu-full-image-button"
          >
            <li>
              <a
                href="#"
                className="hover:underline hover:text-blue-600 dark:hover:text-blue-500"
              >
                Online Stores
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:underline hover:text-blue-600 dark:hover:text-blue-500"
              >
                Segmentation
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:underline hover:text-blue-600 dark:hover:text-blue-500"
              >
                Marketing CRM
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:underline hover:text-blue-600 dark:hover:text-blue-500"
              >
                Online Stores
              </a>
            </li>
          </ul>
          <ul className="mb-4 space-y-4 md:mb-0">
            <li>
              <a
                href="#"
                className="hover:underline hover:text-blue-600 dark:hover:text-blue-500"
              >
                Our Blog
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:underline hover:text-blue-600 dark:hover:text-blue-500"
              >
                Terms & Conditions
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:underline hover:text-blue-600 dark:hover:text-blue-500"
              >
                License
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:underline hover:text-blue-600 dark:hover:text-blue-500"
              >
                Resources
              </a>
            </li>
          </ul>
          <a
            href="#"
            className="p-8 bg-local bg-gray-500 bg-center bg-no-repeat bg-cover rounded-lg bg-blend-multiply hover:bg-blend-soft-light dark:hover:bg-blend-darken"
            style="background-image: url(/docs/images/dashboard-overview.png)"
          >
            <p className="max-w-xl mb-5 font-extrabold leading-tight tracking-tight text-white">
              Preview the new Flowbite dashboard navigation.
            </p>
            <button
              type="button"
              className="inline-flex items-center px-2.5 py-1.5 text-xs font-medium text-center text-white border border-white rounded-lg hover:bg-white hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-700"
            >
              Get started
              <svg
                className="w-3 h-3 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
}

function Navbar() {
  return (
    <div className="w-full mb-2 ">
      <div className="text-center bg-[#DB9400] font-regular border-b border-slate-200  mb-2 shadow-lg text-white">
        Sign up now to get 20% off on your order
      </div>

      <div className="w-full flex justify-around  items-center  ">
        <div className="flex justify-between items-center">
          <img src={logo} alt="logo image" width={40} height={40} />
          <h1 className="font-inter text-[#0C0D0B] font-bold text-3xl">
           <Link to='/' >
           Snapcart
           </Link> 
          </h1>
        </div>

        <div className="flex items-center ">
          <InputWithButton />
        </div>

        <div className="flex justify-between gap-3 items-center">
          <h1 className="font text-black">
            <Link to='/login'>
            Login / Register
            </Link>
            </h1>
       
         <Link  to='/wishlist' >
         <Heart />
         </Link>   
         
         <Link to='/orders'>
         <ShoppingCart />
         </Link> 

        </div>
      </div>
    </div>
  );
}

export default Navbar;
