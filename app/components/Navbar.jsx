import React from 'react'
import Image from "next/image";
import Link from 'next/link';
import { Button } from "@/components/ui/button"
import "../../app/globals.css"

const Navbar = () => {
  return (
    <nav className="backdrop-filter backdrop-blur-lg flex justify-between items-center w-full h-16 px-4 fixed bg-opacity-25 z-10 rounded-full scroll-smooth">
      <div className="">
        <Image
            src="/images/logo.png"
            alt="logo"
            width={60}
            height={60}
            quality={100}
            className="rounded-full hover:animate-pulse mt-2 ml-2"
          />
      </div>

      <div className="flex justify-center">
        <Button className="p-4 rounded-full font-semibold hover:text-indigo-700 text-base">
            <Link href="#about">
                About
            </Link>
        </Button>
      </div>

      <div className="flex justify-center">
        <Button className="p-4 rounded-full hover:text-indigo-700 font-semibold text-base">
            <Link href="#stats" className="scroll-smooth">
                Stats
            </Link>
        </Button>
      </div>


      <div className="flex justify-center">
        <Button className="p-4 rounded-full hover:text-indigo-700 font-semibold text-base">
            <Link href="#Classify" className="scroll-smooth">
                ML
            </Link>
        </Button>
      </div>

      <div className="flex justify-center">
        <Button className="p-4 bg-slate-800 rounded-full hover:bg-slate-700 font-semibold">
            <Link href="/sign-in">
                Sign-In
            </Link>
        </Button>
      </div>

      <div className="mr-3 flex justify-center">
        <Button className="p-4 bg-slate-800 rounded-full hover:bg-indigo-900 font-semibold">
            <Link href="/sign-up">
                Register
            </Link>
        </Button>
      </div>

    </nav>
  )
}

export default Navbar
