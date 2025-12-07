/* eslint-disable react/no-unknown-property */
import { PerspectiveCamera } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import  HackerRoom  from "../components/HackerRoom"
import { Suspense } from "react"
import CanvasLoader from "../components/CanvasLoader"
import MediaQuery from "react-responsive"
import { calculateSizes } from "../constants"
import ReactLogo from "../components/ReactLogo"
import Cube from "../components/Cube"
import Rings from "../components/Ring"
import HeroCamera from "../components/HeroCamera"
import Button from "../components/Button"
// import Target from "../components/Target"

/* eslint-disable react/no-unescaped-entities */
function Hero() { 

    const isSmall = MediaQuery({maxWidth: 480});
    const isMobile = MediaQuery({maxWidth: 768});
    const isTablet = MediaQuery({minWidth: 768,maxWidth: 1024});

    const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className="min-h-screen w-full relative
    flex flex-col" id="home">
        <div className="w-full mx-auto flex flex-col 
        sm:mt-36 mt-20 c-space gap-3">
            <p className="text-blue-50 sm:text-2xl 
            text-xl font-medium text-center font-generalsans">Oi, sou Alexandre
                <span className="waving-hand">👋</span></p>
                <p className="hero_tag text-gray_gradient">
                    Construindo produtos e marcas
                </p>
        </div>
        <div className="w-full h-full absolute inset-0 mt-20">
            <Canvas className="w-full h-full">
                <Suspense fallback={<CanvasLoader/>}>
                    <PerspectiveCamera makeDefault position={[0, 0, 30]} />
                    <HeroCamera isMobile={isMobile}>
                        <HackerRoom 
                        scale={sizes.deskScale} 
                        position={sizes.deskPosition} 
                        rotation={[0.1, 
                        Math.PI, 0]}/>
                    </HeroCamera>
                    <group>
                        {/* <Target position={sizes.targetPosition}/>	 */}
                        <ReactLogo position={sizes.reactLogoPosition}/>
                        <Cube position={sizes.cubePosition}/>
                        <Rings position={sizes.ringPosition}/>
                    </group>
                    <ambientLight intensity={1} />
                    <directionalLight position={[10, 10, 10]}
                    intensity={0.5} />
                </Suspense>
            </Canvas>
        </div>
        <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
            <a href="#contact" className="w-fit">
                <Button text="Vamos trabalhar juntos" 
                isBeam containerClass = "sm:w-fit w-full sm:min-w-96 "/>
            </a>
        </div>
    </section>
  )
}

export default Hero