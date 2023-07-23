import React from 'react'

const Sample=() =>{
  return (
    <div className='font-mono'>
    <div  >
        <nav>
            <div>
                <h1 className='font-bold uppercase p-4 border-b border-gray-100'>
                    <a href="/" className='sm:text-red-500 lg:text-blue-500'>Food Ninja</a>
                </h1>
            </div>
            <ul>
                <li className='text-gray-700 font-bold py-1'>
                    <a href="#">
                        <span>Home</span>
                    </a>
                </li>
                <li className='py-1'>
                    <a href="#">
                        <span>About</span>
                    </a>
                </li>
                <li className='py-1'>
                    <a href="#">
                        <span>Contact</span>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
    <div className='px-16 py-6 bg-gray-100'>
       <div className='flex justify-center md:justify-end'>
         <a href="#" className='text-primary'>Login</a>
         <a href="#" className='text-primary ml-2'>Sign up</a>
       </div> 
       {/* <div className='flex-center'>
           <div className='bg-red-500 h-4 w-6'></div>
           <div className='bg-red-500 h-4 w-6'></div>
           <div className='bg-red-500 h-4 w-6'></div>
       </div>
     */}
    <header>
        <h2 className='text-gray-700 text-6xl font-semibold'>Recipes</h2>
        <h2 className='text-2xl font-semibold'>For Ninjas</h2>
    </header>
    <div>
        <h4 className='font-bold mt-12 pb-2 border-b border-gray-200'>Latest Recipes</h4>
        <div className='mt-8'>
           {/* cards here */}
           <div className='card'>
              <img src="https://i.pinimg.com/564x/be/17/6f/be176f4f5180cb24a4c2e8a706472a0b.jpg" alt="" className='md:object-cover'/>
              <div>
                <span>Chocolate tart </span>
                <span>recipe by Mario</span>
              </div>
              <div className='bg-gray-600 text-secondary-200 text-xs uppercase rounded-full absolute top-1 ml-2 mt-2'>
                <span>25 min</span>
              </div>
           </div>

        </div>
        <h4 className='font-bold mt-12 pb-2 border-b border-gray-200'>Most Popular</h4>
        <div className='mt-8'>
           {/* cards here */} 
        </div>
        <div>
            <div className='bg-secondary-100 text-secondary-200 '>Load more</div>
        </div>

    </div>
    </div>
</div>
  )
}

export default Sample
