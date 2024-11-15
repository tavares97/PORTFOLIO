import { Group } from "three";
import { easing } from "maath";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const HeroCamera: React.FC<{
  children: React.ReactNode;
  isMobile: boolean;
}> = ({ children, isMobile }) => {
  const groupRef = useRef<Group>(null);

  useFrame((state, delta) => {
    easing.damp3(state.camera.position, [0, 0, 5], 0.25, delta);

    if (groupRef.current && !isMobile) {
      easing.dampE(
        groupRef.current.rotation,
        [-state.pointer.y / 3, state.pointer.x / 5, 0],
        0.25,
        delta
      );
    }
  });

  return <group ref={groupRef}>{children}</group>;
};

export default HeroCamera;
