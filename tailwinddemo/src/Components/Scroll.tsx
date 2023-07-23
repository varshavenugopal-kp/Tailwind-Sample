import React, { useRef, useState } from 'react'
import '../Components/Example.css'

function Scroll() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [scrollAmount, setScrollAmount] = useState<number>(1200);
  
    const handleScrollLeft = () => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollLeft -= scrollAmount;
      }
    };
  
    const handleScrollRight = () => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollLeft += scrollAmount;
      }
    };
  return (
    <div>
        <div className='flex justify-between'>
            <div>
                <h1 className='text-xl mt-14 font-medium'>Popular subjects and Languages</h1>
            </div>
            <div className='flex space-x-2 mt-16'>
                <div className='border-2 border-black h-10 w-10 rounded-sm flex justify-center items-center' >
                <i className="fa-solid fa-chevron-left " onClick={handleScrollLeft}></i>
                </div>
                <div className='border-2 border-black h-10 w-10 rounded-sm flex justify-center items-center' onClick={handleScrollRight}>
                <i className="fa-solid fa-chevron-right text-center" onClick={handleScrollRight}></i>
                </div>
            </div>
        </div>
      
      <div className="flex flex-col bg-white m-auto p-auto">
     
      <div className="flex overflow-x-scroll pb-10 hide-scroll-bar transition delay-75 " ref={scrollContainerRef}>
        <div className="flex">
        <div className="flex flex-col bg-white m-auto p-auto">

<div
  className="flex overflow-x-scroll pb-10 hide-scroll-bar mt-6 "
>
  <div
    className="flex flex-nowrap md:ml-20  "
  >
    <div className="inline-block px-3">
      <div
        className="w-72 h-48 max-w-xs overflow-hidden shadow-md bg-gray-400 hover:shadow-xl transition-shadow duration-300 ease-in-out "
      >
        <div className="inner-card mt-9 ml-4 w-64 h-28 bg-white shadow-lg">
    {/* Content of the inner card goes here */}
    <div className='pt-6 m-4'>
        <h1 className=''>Explore All</h1>
        <h1 className='font-medium text-xl'>Python</h1>
    </div>
  </div>
      </div>
    </div>
    <div className="inline-block px-3">
      <div
        className="w-72 h-48 max-w-xs overflow-hidden  shadow-md bg-gray-400 hover:shadow-xl transition-shadow duration-300 ease-in-out"
      >
         <div className="inner-card mt-9 ml-4 w-64 h-28 bg-white shadow-lg">
    {/* Content of the inner card goes here */}
    <div className='pt-6 m-4'>
        <h1 className=''>Explore All</h1>
        <h1 className='font-medium text-xl'>Python</h1>
    </div>
  </div>
      </div>
    </div> 
    <div className="inline-block px-3">
      <div
        className="w-72 h-48 max-w-xs overflow-hidden  shadow-md bg-gray-400 hover:shadow-xl transition-shadow duration-300 ease-in-out"
      >
         <div className="inner-card mt-9 ml-4 w-64 h-28 bg-white shadow-lg">
    {/* Content of the inner card goes here */}
    <div className='pt-6 m-4'>
        <h1 className=''>Explore All</h1>
        <h1 className='font-medium text-xl'>Python</h1>
    </div>
  </div>
      </div>
    </div>
   
    <div className="inline-block px-3">
      <div
        className="w-72 h-48 max-w-xs overflow-hidden  shadow-md  bg-gray-400 hover:shadow-xl transition-shadow duration-300 ease-in-out"
      >
         <div className="inner-card mt-9 ml-4 w-64 h-28 bg-white shadow-lg">
    {/* Content of the inner card goes here */}
    <div className='pt-6 m-4'>
        <h1 className=''>Explore All</h1>
        <h1 className='font-medium text-xl'>Python</h1>
    </div>
  </div>
      </div>
    </div>
    <div className="inline-block px-3">
      <div
        className="w-72 h-48 max-w-xs overflow-hidden  shadow-md  bg-gray-400 hover:shadow-xl transition-shadow duration-300 ease-in-out"
      >
         <div className="inner-card mt-9 ml-4 w-64 h-28 bg-white shadow-lg">
    {/* Content of the inner card goes here */}
    <div className='pt-6 m-4'>
        <h1 className=''>Explore All</h1>
        <h1 className='font-medium text-xl'>Python</h1>
    </div>
  </div>
      </div>
    </div>
    <div className="inline-block px-3">
      <div
        className="w-72 h-48 max-w-xs overflow-hidden  shadow-md  bg-gray-400 hover:shadow-xl transition-shadow duration-300 ease-in-out"
      >
         <div className="inner-card mt-9 ml-4 w-64 h-28 bg-white shadow-lg">
    {/* Content of the inner card goes here */}
    <div className='pt-6 m-4'>
        <h1 className=''>Explore All</h1>
        <h1 className='font-medium text-xl'>Python</h1>
    </div>
  </div>
      </div>
    </div>
    
  </div>
</div>
</div>
        </div>
      </div>
    
    </div>
    </div>
  )
}

export default Scroll
