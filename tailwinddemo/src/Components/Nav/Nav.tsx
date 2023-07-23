import React, { useState } from 'react'

function Nav() {
    const [data,setdata]=useState<boolean>(false)
    const [sub,setSub]=useState<boolean>(false)
  return (
    <div>
     <div className='h-screen'>
     <div className='px-36 '>
           <h1 className='text-xl py-5 font-medium' onClick={()=>setdata(!data)}>Languages</h1>
     </div>
    <div className={`overflow-hidden duration-700 text-center ${data?'h-72':'h-0'}`}>
       <h1 className='pb-3'>hgvhgvhgvhv</h1>
       <h1 className='pb-3'>hgvhgvhgvhv</h1>
       <h1 className='pb-3'>hgvhgvhgvhv</h1>
       <h1 className='pb-3'>hgvhgvhgvhv</h1>
       <h1 className='pb-3'>hgvhgvhgvhv</h1>
       <h1 className='pb-3'>hgvhgvhgvhv</h1>
       <h1 className='pb-3'>hgvhgvhgvhv</h1>
       <h1 className='pb-3'>hgvhgvhgvhv</h1>
       <h1 className='pb-3'>hgvhgvhgvhv</h1>   
    </div>


    <div className='px-36 '>
           <h1 className='text-xl py-5 font-medium' onClick={()=>setSub(!sub)}>Subjects</h1>
     </div>
    <div className={`overflow-hidden duration-700 text-center ${sub?'h-72':'h-0'}`}>
       <h1 className='pb-3'>hgvhgvhgvhv</h1>
       <h1 className='pb-3'>hgvhgvhgvhv</h1>
       <h1 className='pb-3'>hgvhgvhgvhv</h1>
       <h1 className='pb-3'>hgvhgvhgvhv</h1>
       <h1 className='pb-3'>hgvhgvhgvhv</h1>
       <h1 className='pb-3'>hgvhgvhgvhv</h1>
       <h1 className='pb-3'>hgvhgvhgvhv</h1>
       <h1 className='pb-3'>hgvhgvhgvhv</h1>
       <h1 className='pb-3'>hgvhgvhgvhv</h1>    
    </div>
  </div>

     
    </div>
  )
}

export default Nav
