"use client"
import { useThree } from '@react-three/fiber'
import { useHelper } from '@react-three/drei'
import { CameraHelper } from 'three'

export function CameraDebugger() {
  const { camera } = useThree() 
    console.log(camera) //for desired position
  useHelper({ current: camera }, CameraHelper) 

  return null
}
