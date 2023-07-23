import React, { useState } from 'react'

function SideNav() {
    const [data,setdata]=useState<boolean>(false)
    const [sub,setsub]=useState<boolean>(false)
    console.log(data);
    
  return (
    <div>
     <div className='top-0 left-0 h-64 lg:h-screen w-full lg:w-96 bg-gray-300'>

     <div className='px-36 '>
           <h1 className='text-xl py-5 font-medium' onClick={()=>setdata(!data)}>Languages</h1>
        </div>

        <div className={`  overflow-hidden duration-700 bg-slate-500   ${data?'h-72':'h-0'}`}>
            <div className='px-36'>
            <h1 className='mt-2'>python</h1>
                <h1 className='mt-2'>python</h1>
                <h1 className='mt-2'>python</h1>
                <h1 className='mt-2'>python</h1>
                <h1 className='mt-2'>python</h1>
                <h1 className='mt-2'>python</h1>
                <h1 className='mt-2'>python</h1>
            </div>

            
               
            

        </div>
        <div className='px-36 '>
           <h1 className='text-xl py-5 font-medium' onClick={()=>setsub(!sub)}>Subjects</h1>
        </div>

        <div className={` h-full overflow-hidden duration-700   ${sub?'h-96':'h-0'}`}>
            <div className='px-36'>
            <h1 className='mt-2'>python</h1>
                <h1 className='mt-2'>python</h1>
                <h1 className='mt-2'>python</h1>
                <h1 className='mt-2'>python</h1>
                <h1 className='mt-2'>python</h1>
                <h1 className='mt-2'>python</h1>
                <h1 className='mt-2'>python</h1>
            </div>

            
               
            

        </div>

         {/* <div className={`z-10 h-full bg-gray-100 absolute  right-0 sideMenuBar  duration-700   ${sideMenu?'w-96':'w-0'}`}>
                <div className="flex items-center ms-5 mt-5 gap-4 border-b-2 border-gray-700 me-4 pb-4">
                    <img className='h-20 rounded-full' src={image} alt="" />
                    <div>
                        <p className='font-bold text-lg'>{username}</p>
                        <p className='text-sm'>{userEmail}</p>
                    </div>
                </div>
                
                <ul className={`mt-4 font-work text-2xl cursor-pointer overflow-hidden  `}>
                    <li className='border-b-2 ps-4 pb-2 pt-2 hover:scale-105 transition duration-150 ease-in-out w-96'><FontAwesomeIcon icon={faFile} />  Saved Jobs</h1>
                    <li className='border-b-2 ps-4 pb-2 pt-2 hover:scale-105 transition duration-150 ease-in-out w-96'><FontAwesomeIcon icon={faCircleQuestion} /> Learn and Share</h1>
                    <li className='border-b-2 ps-4 pb-2 pt-2 hover:scale-105 transition duration-150 ease-in-out w-96'><FontAwesomeIcon icon={faEye} /> View Resume</h1>
                    <li className='border-b-2 ps-4 pb-2 pt-2 hover:scale-105 transition duration-150 ease-in-out w-96'><FontAwesomeIcon icon={faEdit} /> Edit Resume</h1>
                    <li className='border-b-2 ps-4 pb-2 pt-2 hover:scale-105 transition duration-150 ease-in-out w-96'><FontAwesomeIcon icon={faBusinessTime} /> Applied Jobs</h1>
                    <li className='border-b-2 ps-4 pb-2 pt-2 hover:scale-105 transition duration-150 ease-in-out w-96'><FontAwesomeIcon icon={faGears} /> Settings</h1>
                    <li onClick={userLogout} className='border-b-2 ps-4 pb-2 pt-2 shadow-md hover:scale-105 transition duration-150 ease-in-out w-96'><FontAwesomeIcon icon={faPersonWalkingArrowRight} /> Logout</h1>
                </ul>
            </div> */}
            

        {/* <div className='px-36 py-10'>
           <h1 className='text-xl font-medium' onClick={()=>setdata(true)}>Languages</h1>
        </div>
        {
            data?(
              <div className='px-36'>
               <ul className='mt-2'>
                <h1>python</h1>
                <h1>python</h1>
                <h1>python</h1>
                <h1>python</h1>
                <h1>python</h1>
                <h1>python</h1>
                <h1>python</h1>
                <h1>python</h1>
                <h1>python</h1>
                <h1>python</h1>
                <h1>python</h1>
               </ul>
              </div>
            ):(
               <div>

               </div>
            )
        } */}
     </div>
    </div>
           

    
  )
}

export default SideNav
