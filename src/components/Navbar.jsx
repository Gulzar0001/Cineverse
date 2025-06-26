import React from 'react'
import logoimg from "../assets/logoimg.png"
function Navbar() {
  return (
   <div className="fixed top-6 left-1/2 transform -translate-x-1/2 w-[95%] bg-white/20 backdrop-blur-md  rounded-full border border-white/30 px-6 py-4 z-50 flex justify-between items-center text-black text-xl">

        <div className='flex items-center space-x-2'>
                <p> 
                    <img 
                    src={logoimg} alt="Logo" className='w-28 h-12 rounded-full' />
                </p>
       </div>

        <div className='flex space-x-4  p-2 rounded-lg w-96 justify-between items-center  '>
            
            <p>Home</p>
            <p>Movies</p>
            <p>TV Shows</p>
        
        </div>

        <div className='flex items-center space-x-4 w-96 h-12 rounded-full '>
            {/*<p className='text-2xl font-medium'>Q</p>*/}

            <div className='p-2 rounded-full  inline-block'>
                  
            </div>

        </div>


        <div className='flex items-center justify-center w-96'>
             <p>

               W
             </p>


             <p>
                 F

             </p>


             <p>

                 A
             </p>



             

        </div>
    </div>
  )
}

export default Navbar
