import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div>
      <div className="mt-20">
        <Image 
            src="/images/logo.png"
            alt="logo"
            width={72}
            height={72}
            quality={100}
            className="mt-5 ml-[600px] rounded-full"
        />
      </div>
      <div className="mt-[-45px] ml-[700px] text-xl font-bold">
        aiDent
      </div>

      <div className="mt-10 flex justify-center text-stone-300">
        © 2024 aiDent™. All Rights Reserved. Built with Next and Tailwind CSS.
      </div>

      <div className="text-slate-950 mt-5">
        i
      </div>
    </div>
  )
}

export default Footer
