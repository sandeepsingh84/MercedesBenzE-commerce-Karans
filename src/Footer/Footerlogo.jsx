import React from 'react'

const Footerlogo = () => {
  return (
    <div className='bg-black text-gray-300 h-[550px] p-24'>

     <div className='flex justify-between border-t'>
     <ul className='flex gap-5 items-center mt-10'>
        <li className='text-gray-400 hover:text-white delay-200'>Provider</li>
        <li className='text-gray-400 hover:text-white delay-200'>Legal Notice</li>
        <li className='text-gray-400 hover:text-white delay-200'>Cookies</li>
        <li className='text-gray-400 hover:text-white delay-200'>Privacy Statement</li>
        <li className='text-gray-400 hover:text-white delay-200'>Contact</li>
        <li className='text-gray-400 hover:text-white delay-200'>Do not sell My personal Information(CCPA)</li>
     </ul>


<div className='flex gap-5 items-center mt-10'>
    <button className='text-gray-400 hover:text-white delay-200'> Deutsch</button>
    <p>English</p>
</div>


</div>


<img src='https://www.mercedes-benz.com/content/dam/brandhub/global/logos/logo_footer.svg' className='m-auto mt-24'/>


    

    

    </div>
  )
}

export default Footerlogo