"use client"
import React from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <div>
      <div id="home" className="w-full h-screen text-center">
        <Spline scene="https://prod.spline.design/EdSUgSrI23YHQUhO/scene.splinecode" />
      </div>

    </div>
  )
}

export default Hero
