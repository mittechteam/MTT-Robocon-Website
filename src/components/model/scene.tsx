"use client"
import { Canvas } from "@react-three/fiber"
import Model from "./model"
import { Suspense } from "react"
import { useProgress, Html } from "@react-three/drei"

function Loader() {
  const { progress } = useProgress()
  return <Html center>{progress.toFixed(1)} % loaded</Html>
}

export default function Scene() {
  return (
    <Canvas
      gl={{ antialias: true }}
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 5], fov: 50 }}
      style={{ width: '100%', height: '100%' }}
    >
      <directionalLight position={[-5, -5, 5]} intensity={4} />
      <ambientLight intensity={0.5} />
      <Suspense fallback={<Loader />}>
        <Model scale={1.2} position={[0, -1, 0]} />
      </Suspense>
    </Canvas>
  )
}