import { useAnimations, useGLTF } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useEffect, useRef } from "react"
import { Group} from "three"

useGLTF.preload("/robot_playground.glb")

interface ModelProps {
  scale?: number | [number, number, number];
  position?: [number, number, number];
}

export default function Model({ scale = 1, position = [0, 0, 0] }: ModelProps) {
  const group = useRef<Group>(null)
  const { nodes, materials, animations, scene } = useGLTF(
    "/robot_playground.glb"
  )
  const { actions } = useAnimations(animations, scene)

  useEffect(() => {
    if (actions["Experiment"]) {
      actions["Experiment"].play()
      actions["Experiment"].setLoop(true, Infinity)
    }
  }, [actions])

  const animationSpeed = 0.5

  useFrame((state, delta) => {
    if (actions["Experiment"]) {
      actions["Experiment"].time += delta * animationSpeed
      if (actions["Experiment"].time > actions["Experiment"].getClip().duration) {
        actions["Experiment"].time = 0
      }
    }
  })

  return (
    <group ref={group} scale={scale} position={position}>
      <primitive object={scene} />
    </group>
  )
}