import React from 'react'
import { Decal, Dodecahedron, MeshWobbleMaterial, useTexture } from '@react-three/drei'

export default function AnimatedTetrahedron({value}) {
    const texture = useTexture(value);
    return <Dodecahedron scale={2.5}>
         <MeshWobbleMaterial 
        color="#5e6c82" 
        speed={0.5}
        roughness={1}
        />
        <Decal position={[0, 0, 1]} rotation={[2 * Math.PI, 0, 6.25]} scale={0.75} className="w-10 h-10" map={texture} flatShading />
    </Dodecahedron>;
}
