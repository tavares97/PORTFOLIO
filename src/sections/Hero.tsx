import Button from "@/components/Button";
import { Canvas } from "@react-three/fiber";
import CanvasLoader from "@/components/CanvasLoader";
import { Environment } from "@react-three/drei";
import HeroCamera from "@/components/HeroCamera";
import { Interpolation } from "@react-spring/three";
import { Laptop } from "@/components/Laptop";
import { Suspense } from "react";
import { useMediaQuery } from "react-responsive";
import { useSpring } from "@react-spring/core";

const Hero = () => {
  const props = useSpring({ open: Number(false) });
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  const isSmall = useMediaQuery({
    query: "(max-width: 440px)",
  });

  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-2xl text-sm font-medium text-white text-center font-start2p">
          Hi, I am André <span className="waving-hand text-3xl">👋🏼</span>
        </p>
        <p className="hero_tag text-gray_gradient font-suse">
          Trying to master the art of developing
        </p>
      </div>

      <div className="w-full h-full absolute inset-0">
        <Canvas className="h-full w-full">
          <Suspense fallback={<CanvasLoader />}>
            <HeroCamera isMobile={isMobile}>
              <group rotation={[0.2, Math.PI, 0]}>
                <Laptop
                  hinge={props.open.to([0, 0], [0, 0]) as Interpolation<number>}
                  isMobile={isMobile}
                  isSmall={isSmall}
                />
              </group>
            </HeroCamera>
            <Environment preset="city" />
            <directionalLight position={[5, 12, 10]} intensity={1} />
          </Suspense>
        </Canvas>
      </div>

      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a href="#about" className="w-fit">
          <Button
            name="Let's work together"
            isBeam
            containerClass="sm:w-fit w-full sm:min-w-96"
          />
        </a>
      </div>
    </section>
  );
};

export default Hero;
