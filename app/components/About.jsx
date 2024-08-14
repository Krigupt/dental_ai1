import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div id="about">
      <div className="ml-10 text-2xl font-extrabold mt-[100px]">
        Leveraging AI/ML to revolutionalize orthodontic care 
      </div>

      <div className="ml-10 text-xl font-thin mt-3">
        We use the latest machine learning models and artificial intelligence to deliver accurate <br />
         prognosis of dental conditions and predict treatment outcomes with bleeding-edge precision
      </div>

      <div>
         <Image 
            src="/images/checkmark.png"
            alt="logo"
            width={24}
            height={24}
            quality={100}
            className="mt-5 ml-10"
            />
          <h4 className="mt-[-23px] ml-20 font-semibold">Completely free to use. Providing affordable and accessible healthcare to everyone</h4>
      </div>

      <div>
         <Image 
            src="/images/checkmark.png"
            alt="logo"
            width={24}
            height={24}
            quality={100}
            className="mt-5 ml-10"
            />
         <h4 className="mt-[-23px] ml-20 font-semibold">Designed to be intuitive and seamless </h4>
      </div>

      <div>
         <Image 
            src="/images/checkmark.png"
            alt="logo"
            width={24}
            height={24}
            quality={100}
            className="mt-5 ml-10"
            />
         <h4 className="mt-[-23px] ml-20 font-semibold">Get a personalized and detailled medical report for free</h4>
      </div>
      
      <div className="ml-10 mt-5 text-xl font-thin">
        Through our robust platform, experience how AI can completely transform <br /> and change your way of viewing orthodontics
      </div>

      <div className="ml-10 mt-10 text-xl font-thin">
        Discover the contemporary tech stack used to power and enrich your experience
      </div>

      <div className="">
      <Image
            src="/images/tooth.png"
            alt="logo"
            width={300}
            height={300}
            quality={100}
            className="rounded-xl mt-[-350px] ml-[920px] shadow-md hover:shadow-lg"
          />
      </div>

    </div>
  )
}

export default About
