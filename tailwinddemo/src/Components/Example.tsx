import React, { useRef, useState } from 'react'
import Scroll from './Scroll'
import Career from './career/Career'



const Example= ()=> {
   
  return (
    <>
    <div className='px-10 py-5 m-3'>
      <div className='mt-2 h-16 px-10 w- bg-slate-700'>

      </div>
      <div>
        <h1 className='text-3xl mt-7 font-medium'>Explore the catelog</h1>
    </div>
    <div>
        <Scroll/>
</div>
<div>
    <Career/>
</div>
    </div>
    
    </>
  )
}

export default Example
