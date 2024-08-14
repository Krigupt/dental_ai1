import React from 'react'
import Image from 'next/image'



const Stats = () => {
  return (
    <div id="stats" className="bg-zinc-900 mt-[40px]">
        <div className="mt-2 text-zinc-900">
            Hi
        </div>
        <div className="ml-[750px] font-extrabold text-2xl mt-10">
            Our aim is to make millions smile! 
        </div>

        <div className="ml-[750px] mt-5 font-thin">
            We also utilize hardware alongside our cutting-edge <br /> Artificial Intelligence and Machine Learning Models <br /> to accurately identify and resolve any tooth related <br /> issues you may have
        </div>

        <div>
         <Image 
            src="/images/checkmark.png"
            alt="logo"
            width={24}
            height={24}
            quality={100}
            className="mt-5 ml-[715px]"
            />
          <h4 className="mt-[-23px] ml-[750px] font-semibold">Unique blend of hardware, AI/ML and web-development</h4>
        </div>

        <div>
         <Image 
            src="/images/checkmark.png"
            alt="logo"
            width={24}
            height={24}
            quality={100}
            className="mt-5 ml-[715px]"
            />
          <h4 className="mt-[-23px] ml-[750px] font-semibold">Highly specialized and specific Artificial Intelligence</h4>
        </div>

        <div>
         <Image 
            src="/images/checkmark.png"
            alt="logo"
            width={24}
            height={24}
            quality={100}
            className="mt-5 ml-[715px]"
            />
          <h4 className="mt-[-23px] ml-[750px] font-semibold">10,000+ images used to fine-tune the ML models</h4>
        </div>

        <div>
         <Image 
            src="/images/checkmark.png"
            alt="logo"
            width={24}
            height={24}
            quality={100}
            className="mt-5 ml-[715px]"
            />
          <h4 className="mt-[-23px] ml-[750px] font-semibold">Cloud based service. Your data won't get lost!</h4>
        </div>

        <div>
            <Image 
                src="/images/Graph1.jpg"
                alt="logo"
                width={250}
                height={250}
                quality={100}
                className="mt-[-320px] ml-10"
            />
        </div>

        <div>
            <Image 
                src="/images/Graph2.jpg"
                alt="logo"
                width={250}
                height={250}
                quality={100}
                className="mt-[-100px] ml-[350px]"
            />
        </div>   

        <div className="text-zinc-900 mt-10">
            i
        </div>

    </div>
  )
}

export default Stats
