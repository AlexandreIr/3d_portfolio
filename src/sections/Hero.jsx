/* eslint-disable react/no-unknown-property */
import { PerspectiveCamera } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import  HackerRoom  from "../components/HackerRoom"
import { Suspense } from "react"
import CanvasLoader from "../components/CanvasLoader"
import MediaQuery from "react-responsive"
import { calculateSizes } from "../constants"
import Target from "../components/Target"
import ReactLogo from "../components/ReactLogo"

/* eslint-disable react/no-unescaped-entities */
function Hero() { 

    const isSmall = MediaQuery({maxWidth: 480});
    const isMobile = MediaQuery({maxWidth: 768});
    const isTablet = MediaQuery({minWidth: 768,maxWidth: 1024});

    const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className="min-h-screen w-full relative
     flex flex-col overflow-hidden">
        <div className="w-full mx-auto flex flex-col 
        sm:mt-36 mt-20 c-space gap-3">
            <p className="text-blue-50 sm:text-2xl 
            text-xl font-medium text-center font-generalsans">Hi, I'm Alexandre
                <span className="waving-hand">👋</span></p>
                <p className="hero_tag text-gray_gradient">
                    Building products & Brands
                </p>
        </div>
        <div className="w-full h-full absolute inset-0 mt-24">
            <Canvas className="w-full h-full">
                <Suspense fallback={<CanvasLoader/>}>
                    <PerspectiveCamera makeDefault position={[0, 0, 20]} />
                    <HackerRoom 
                    scale={sizes.deskScale} 
                    position={sizes.deskPosition} 
                    rotation={[-50, 
                    Math.PI, 0]}/>
                    <group>
                        <Target position={sizes.targetPosition}/>
                        <ReactLogo position={sizes.reactLogoPosition}/>
                    </group>
                    <ambientLight intensity={0.7} />
                    <directionalLight position={[10, 10, 10]}
                    intensity={0.5} />
                </Suspense>
            </Canvas>
        </div>
    </section>
  )
}

export default Hero