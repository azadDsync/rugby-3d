'use client'
import { useGLTF } from '@react-three/drei'
import {useThree } from '@react-three/fiber';
import gsap from 'gsap';

import React, { useLayoutEffect, useRef } from 'react'
import { Group } from 'three';


export default function Flamingo() {
  const { scene: modelScene } = useGLTF("/models/wilson_football.glb")
  const tl = gsap.timeline();
  const { scene } = useThree();
  const modelRef = useRef<Group>(null!);
  // const {cameraPosition,scenePosition,sceneRotation} = useControls({
  //   cameraPosition:{
  //     value : {
  //       x:0,
  //       y:3,
  //       z:5
  //     }
  //   },
  //   scenePosition:{
  //     value : {
  //       x:0,
  //       y:0,
  //       z:0
  //     }
  //   },
  //   sceneRotation:{
  //     value : {
  //       x:0,
  //       y:0,
  //       z:0
  //     }
  //   }
  // });

  // useFrame(()=>{
  // //   camera.position.x=cameraPosition.x;
  // //   camera.position.y=cameraPosition.y;
  // //   camera.position.z=cameraPosition.z;

  //   scene.position.x=scenePosition.x;
  //   scene.position.y=scenePosition.y;
  //   scene.position.z=scenePosition.z;

  //   scene.rotation.x=sceneRotation.x;
  //   scene.rotation.y=sceneRotation.y;
  //   scene.rotation.z=sceneRotation.z;

  // })
  useLayoutEffect(() => {
    if (!modelRef.current) return;
    tl.to(scene.position, {
      x: -0.139,
      y: -4.813999999999992,
      z: -0.34000000000000025,
      scrollTrigger: {
        trigger: ".middle-section",
        start: "top bottom",
        end: "top top",
        scrub: true,
        immediateRender: false,

      }
    }).to(scene.rotation, {
      x: 0.011000000000000083,
      y: 3.1469999999999914,
      z: 0.08300000000000003,
      scrollTrigger: {
        trigger: ".middle-section",
        start: "top bottom",
        end: "top top",
        scrub: true,
        immediateRender: false,

      }
    })
    tl.to(modelRef.current.rotation, {
      y: Math.PI * 2, // 360 degrees
      scrollTrigger: {
        trigger: ".end-section",
        start: "top bottom",
        end: "top top",
        scrub: true,
      },
    });
  })



  return (
    <primitive ref={modelRef} scale={0.1} object={modelScene} />
  )
}
