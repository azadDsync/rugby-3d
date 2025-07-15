import React, { useRef } from 'react'

export default function DirectionalLightWithHelper() {
    const directionalLightRef = useRef(null!);
    // useHelper(directionalLightRef, THREE.DirectionalLightHelper, 0.5, "hotpink")
  return (
    <directionalLight intensity={4} position={[-3, 3, 0]} ref={directionalLightRef} castShadow  />
  )
}
