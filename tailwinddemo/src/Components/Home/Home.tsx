import React from 'react'
import Nav from '../Nav/Nav'
import Subject from '../Subject/Subject'
import Career from '../career/Career'

function Home() {
  return (
    <div>
      <div className='grid grid-cols-12 '>
       <div className='col-span-3 '>
         <Nav/>
       </div>
       <div className='col-span-9  ps-10'>
         <div className=' mt-10  me-32 h-20 bg-pink-600'>
           <h1>Not sure where to begin?</h1>
         </div>
         <div className='mt-10'>
            <h1 className='text-4xl font-semibold'>Explore the catalog</h1>
         </div>
         <div>
            <Subject/>
         </div>
         {/* <div>
            <Career/>
         </div> */}
       </div>
      </div>
    </div>
  )
}

export default Home
