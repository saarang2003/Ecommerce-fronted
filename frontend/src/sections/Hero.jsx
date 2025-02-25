import { div } from 'motion/react-client'
import React from 'react'

import { useState, useEffect } from 'react'


const blogs = [
    {
      id: 1,
      title: 'This is bento grid in vercel blog',
      author: 'Michael Jordan',
      date: '12.10.1999',
      image: 'https://picsum.photos/seed/1/600/400',
      avatar: 'https://i.pravatar.cc/150?img=1',
      link: '/',
    },
    {
      id: 2,
      title: 'Exploring the Future of Web Development',
      author: 'Jane Doe',
      date: '05.07.2023',
      image: 'https://picsum.photos/seed/2/600/400',
      avatar: 'https://i.pravatar.cc/150?img=2',
      link: '/',
    },
    {
      id: 3,
      title: 'How to Build Scalable Applications',
      author: 'John Smith',
      date: '18.03.2021',
      image: 'https://picsum.photos/seed/3/600/400',
      avatar: 'https://i.pravatar.cc/150?img=3',
      link: '/',
    },
    {
      id: 4,
      title: 'Mastering React with Next.js',
      author: 'Alice Johnson',
      date: '24.12.2022',
      image: 'https://picsum.photos/seed/4/600/400',
      avatar: 'https://i.pravatar.cc/150?img=4',
      link: '/',
    },
    {
      id: 5,
      title: 'Understanding TypeScript in 2024',
      author: 'Robert Brown',
      date: '02.11.2024',
      image: 'https://picsum.photos/seed/5/600/400',
      avatar: 'https://i.pravatar.cc/150?img=5',
      link: '/',
    },
  ]
  


export  function SolidBento() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="grid max-h-screen h-auto p-4 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-3 gap-4">
      {blogs.map((blog, index) => (
        <a
          key={blog.id}
          href={blog.link}
          className={`group relative flex overflow-hidden rounded-2xl  transition-all duration-300 hover:scale-[1.02] ${
            index === 0
              ? 'md:col-span-2 md:row-span-2'
              : index === 1
              ? 'md:col-span-1 md:row-span-1'
              : 'md:col-span-1 md:row-span-1 lg:row-span-2'
          }`}
        >
          <img
            src={blog.image}
            alt={blog.title}
            fill
            className="transition-all duration-300 group-hover:scale-110 group-hover:opacity-50 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="relative flex h-full w-full flex-col justify-end p-6 text-white">
            <h2 className="mb-2 text-2xl font-bold leading-tight">{blog.title}</h2>
            <div className="flex items-center space-x-2">
              <img
                src={blog.avatar}
                alt={blog.author}
                width={32}
                height={32}
                className="rounded-full"
              />
              <span className="text-sm font-medium">{blog.author}</span>
              <span className="text-xs text-gray-300">{blog.date}</span>
            </div>
          </div>
        </a>
      ))}
    </div>
  )
}


function Hero() {
  return (  
    <div className='flex flex-col md:flex-row justify-between w-full max-w-screen-xl mx-auto gap-4 mb-4 p-4'>
      
    {/* Left box - takes about 55% on larger screens */}
    <div className='w-full md:w-3/5 h-[460px] border-2 border-red-500 p-4 text-center rounded-lg'>
    <div id="default-carousel" className="relative w-full" data-carousel="slide">
   
    <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
      
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="https://picsum.photos/seed/1/600/400" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>

        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="https://picsum.photos/seed/1/600/400" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
     
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="https://picsum.photos/seed/1/600/400" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
   
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="https://picsum.photos/seed/1/600/400" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
     
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="https://picsum.photos/seed/1/600/400" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
    </div>
</div>
    </div>
    
    {/* Right column - takes about 40% on larger screens */}
    <div className='w-full md:w-2/5 flex flex-col gap-4'>
      <div className='w-full h-[220px] border-2 border-red-500 p-4 text-center rounded-lg'>
        box2
      </div>
      <div className='w-full h-[220px] border-2 border-red-500 p-4 text-center rounded-lg'>
        box3
      </div>
    </div>
  </div>

  
  )
}

export default Hero