"use client"
import React, { Suspense } from 'react'
import BaseBall from './BaseBall'
import { Environment, OrbitControls } from '@react-three/drei'
import DirectionalLightWithHelper from './DirectionalLightWithHelper'

export default function CanvasItems() {

    

    return (
        <>
            <ambientLight intensity={0.6} />
            <DirectionalLightWithHelper />
            {/* <CameraDebugger /> */}
            <OrbitControls enableZoom={false} />
            <mesh  position={[6, 2.5, 0]}   >
                <Suspense fallback={null}>
                    <BaseBall />
                </Suspense>
            </mesh>
            {/* <Environment/> */}
        </>
    )
}
