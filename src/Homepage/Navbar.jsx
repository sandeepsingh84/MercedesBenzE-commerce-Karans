import React from 'react'

 

const Navbar = () => {
  return (
    <div>


        <nav className='w-full bg-black h-20 bg-opacity-70  bg-white odd:bg-gray-500'>



        <ul className='flex justify-around pt-6  px-96'>
            <li><a className='text-white text-lg'  href="/Home/index">Art & Culture</a></li>
            <li><a className='text-white text-lg'   href='/Sustainability'>Sustainability</a></li>
            <li><a className='text-white text-lg'  href='/Design '>Design</a></li>
            <li><a className='text-white text-lg'  href='#'>Innovation</a></li>
            <li><a className='text-white text-lg'  href='#'>Exclusive</a></li>
        </ul>

{/* <video  autoPlay loop>
 <sourse src='src='https://youtu.be/7sDY4m8KNLc?t=107' type='video'/> 

 </video> */}

{/* <video controls loop>
  <source src='' type=''/>
</video> */}





        </nav>
    </div>
  )
}

export default Navbar;