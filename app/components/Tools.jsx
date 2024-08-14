"use client"
import React, {Suspense} from 'react'
import {Canvas} from "@react-three/fiber";
import { OrbitControls } from '@react-three/drei';
import Tetrahedron from './AnimatedTetrahedron';

const Tools = () => {
  return (
    <div className="flex justify-items-center mt-[25px]">
      <Canvas className="canvas">
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Suspense fallback={null}>
          <Tetrahedron value={'/tensorflowIcon.png'}/>
        </Suspense>
      </Canvas>

      <Canvas className="canvas">
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Suspense fallback={null}>
          <Tetrahedron value={'/flaskLogo.png'}/>
        </Suspense>
      </Canvas>

      <Canvas className="canvas">
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Suspense fallback={null}>
          <Tetrahedron value={'/opencvLogo.png'}/>
        </Suspense>
      </Canvas>
      <Canvas className="canvas">
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Suspense fallback={null}>
          <Tetrahedron value={'/yoloLogo.png'}/>
        </Suspense>
      </Canvas>
      <Canvas className="canvas">
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Suspense fallback={null}>
          <Tetrahedron value={'/nextLogo.png'}/>
        </Suspense>
      </Canvas>
      <Canvas className="canvas">
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Suspense fallback={null}>
          <Tetrahedron value={'/tailwindLogo.png'}/>
        </Suspense>
      </Canvas>
    </div>
  )
}

export default Tools
