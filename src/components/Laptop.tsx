import * as THREE from "three";

import { GLTF } from "three-stdlib";
import { Group } from "three";
import { Interpolation } from "@react-spring/three";
import { calculateSizes } from "@/constants";
import { a as three } from "@react-spring/three";
import { useGLTF } from "@react-three/drei";
import { useRef } from "react";

type GLTFResult = GLTF & {
  nodes: {
    [key: string]: THREE.Mesh;
  };
  materials: {
    [key: string]: THREE.Material;
  };
};

interface LaptopProps {
  hinge: Interpolation<number>;
  isMobile: boolean;
  isSmall: boolean;
}

export const Laptop = ({ hinge, isMobile, isSmall, ...props }: LaptopProps) => {
  const sizes = calculateSizes(isSmall, isMobile);

  const group = useRef<Group>(null);
  // Load model
  const { nodes, materials } = useGLTF("/models/mac-draco.glb") as GLTFResult;

  return (
    <group ref={group} {...props} dispose={null}>
      <three.group
        rotation-x={hinge}
        position={sizes.laptopPosition as [number, number, number]}
        scale={sizes.laptopScale}
      >
        <group position={[0, 2.96, 4]} rotation={[Math.PI / 2, 0, 3.16]}>
          <mesh
            material={materials.aluminium}
            geometry={nodes["Cube008"].geometry}
          />
          <mesh
            material={materials["matte.001"]}
            geometry={nodes["Cube008_1"].geometry}
          />
          <mesh
            material={materials["screen.001"]}
            geometry={nodes["Cube008_2"].geometry}
          />
        </group>

        <mesh
          material={materials.keys}
          geometry={nodes.keyboard.geometry}
          position={[1.79, 0, 3.45]}
        />
        <group position={[0, -0.1, 3.39]}>
          <mesh
            material={materials.aluminium}
            geometry={nodes["Cube002"].geometry}
          />
          <mesh
            material={materials.trackpad}
            geometry={nodes["Cube002_1"].geometry}
          />
        </group>
        <mesh
          material={materials.touchbar}
          geometry={nodes.touchbar.geometry}
          position={[0, -0.03, 1.2]}
        />
      </three.group>
    </group>
  );
};
