import { Canvas } from "@react-three/fiber";
import { workExperiences } from "../constants";
import { div } from "three/tsl";
import Avatar from "../components/Avatar";
import { Center, OrbitControls, SpotLight } from "@react-three/drei";
import { Suspense, useState } from "react";
import CanvasLoader from "../components/CanvasLoader";

export const Experience = () => {
  const [animationName, setAnimationName] = useState("idle");
  return (
    <section className="c-space my-20">
      <div className="w-full text-white-600">
        <h3 className="head-text">My work Experience</h3>
        <div className="work-container">
          <div className="work-canvas">
            <Canvas>
              <ambientLight intensity={7} />
              <SpotLight
                angle={0.15}
                penumbra={1}
                position={[10, 10, 10]}
                castShadow
              />
              <directionalLight position={[10, 10, 10]} intensity={1} />
              <Suspense fallback={<CanvasLoader />}>
                <group
                  scale={Math.PI}
                  position={[0, -3, 0]}
                  rotation={[0, -0.1, 0]}
                >
                  <Avatar animationName={animationName} />
                </group>
              </Suspense>
              <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
            </Canvas>
          </div>
          <div className="work-content">
            <div className="sm:py-10 py-5 sm:px-5 px-2.5">
              {workExperiences.map(
                ({ name, id, title, icon, pos, animation, duration }) => (
                  <div
                    key={id}
                    onClick={() =>
                      setAnimationName(animation.toLowerCase())
                    }
                    onPointerOver={() =>
                      setAnimationName(animation.toLowerCase())
                    }
                    onPointerOut={() => setAnimationName("idle")}
                    className="work-content_container group"
                  >
                    <div className="flex flex-col h-full justify-start items-center py-2 ">
                      <div className="work-content_logo">
                        <img src={icon} alt="icon" className="w-ful h-full" />
                      </div>
                      <div className="work-content_bar" />
                    </div>
                    <div className="sm:p-5 px-2.5 py-5">
                      <p className="font-bold text-white-800">{name}</p>
                      <p className="text-sm mb-5">
                        {pos} -- {duration}
                      </p>
                      <p className="group-hover:text-white trnasition ease-in-out duration-500">
                        {title}
                      </p>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
