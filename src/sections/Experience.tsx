import { Suspense, useState } from "react";

import { Canvas } from "@react-three/fiber";
import CanvasLoader from "@/components/CanvasLoader";
import Developer from "@/components/Developer";
import { OrbitControls } from "@react-three/drei";
import { workExperiences } from "@/constants";

const Experience = () => {
  const [animationName, setAnimationName] = useState("idle");

  return (
    <section className="c-space my-20">
      <div className="w-full text-white-600">
        <h3 className="head-text">My Experience</h3>

        <div className="work-container">
          <div className="work-canvas">
            <Canvas>
              <ambientLight intensity={7} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
              <directionalLight position={[10, 10, 10]} intensity={1} />

              <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />

              <Suspense fallback={<CanvasLoader />}>
                <Developer
                  position-y={-3}
                  scale={3}
                  animationName={animationName}
                />
              </Suspense>
            </Canvas>
          </div>

          <div className="work-content">
            <div className="sm:py-10 py-5 sm:px-5 px-2.5">
              {workExperiences.map(
                ({ id, name, pos, duration, title, animation, icon }) => (
                  <div
                    key={id}
                    className="work-content_container group"
                    onClick={() => setAnimationName(animation.toLowerCase())}
                    onPointerOver={() =>
                      setAnimationName(animation.toLowerCase())
                    }
                    onPointerOut={() => setAnimationName("idle1")}
                  >
                    <div className="flex flex-col h-full justify-start items-center py-2">
                      <div className="work-container_logo">
                        <img src={icon} alt="logo" className="h-10 w-10" />
                      </div>

                      <div className="work-content_bar"></div>
                    </div>

                    <div className="sm:pd-5 px-2.5 py-5">
                      <p className="font-bold text-white-800 text-sm">{name}</p>
                      <p className="text-sm mb-5 font-suse">
                        {pos} -- {duration}
                      </p>

                      <p className="group-hover:text-white transition ease-in-out duration-500 font-suse text-xs">
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

export default Experience;
