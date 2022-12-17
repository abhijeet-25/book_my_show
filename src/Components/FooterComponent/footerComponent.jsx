import React from 'react'
import { IoLogoFacebook,IoLogoInstagram,IoLogoLinkedin,IoLogoTwitter,IoLogoYoutube } from "react-icons/io";

const Footer = () => {
  return (
    <>
   <div className='h-full w-full flex flex-row gap-4 items-center  bg-red-500'  >
        <button className=' h-8 w-8 '>
            <IoLogoFacebook className='w-full h-full rounded-md'/>
        </button>
        <button className=' h-8 w-8 '>
            <IoLogoInstagram className='w-full h-full rounded-md'/>
        </button>
        <button className=' h-8 w-8 '>
            <IoLogoTwitter className='w-full h-full rounded-md'/>
        </button>
        <button className=' h-8 w-8 '>
            <IoLogoLinkedin className='w-full h-full rounded-md'/>
        </button>
        <button className=' h-8 w-8 '>
            <IoLogoYoutube className='w-full h-full rounded-md'/>
        </button>


    </div>

    </>
  )
}

export default Footer