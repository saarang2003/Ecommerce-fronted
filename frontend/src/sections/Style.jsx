import React from 'react'

function Style() {
  return (
    <div className='flex flex-col  items-center max-w-screen-xl mx-auto border-2 border-red-500'>
        <h1 className='text-center font-inter font-extrabold text-3xl mb-1'>Style That Speaks </h1>
        <p className='max-w-screen-sm font-normal text-center text-slate-600 '>Shop the latest trends in high-quality, aesthetic clothing, and make a statement every time you step out.</p>
        <div className='flex flex-col w-full  '>
            <h1 className='font-inter font-extrabold text-3xl mb-4'>Featured Categories</h1>
            <div className='flex justify-between items-center w-full gap-3 mx-auto'>
                <div className='text-center w-[250px] h-[250px] border-2 border-red-500 rounded-full shadow-xl'>imag1</div>
                <div className='text-center w-[250px] h-[250px] border-2 border-red-500 rounded-full shadow-xl'>imag1</div>
                <div className='text-center w-[250px] h-[250px] border-2 border-red-500 rounded-full shadow-xl'>imag1</div>
                <div className='text-center w-[250px] h-[250px] border-2 border-red-500 rounded-full shadow-xl'>imag1</div>
            </div>
        </div>
    
    </div>
  )
}

export default Style