"use client"
import { Canvas } from '@react-three/fiber'
import CanvasItems from './CanvasItems'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);
export default function CanvasContainer() {
    
    return (
        <Canvas >
            <CanvasItems/>
        </Canvas>
    )
}
