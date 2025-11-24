/*
Asteroid component - 3D asteroid model
*/

import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useMotionValue, useSpring } from "motion/react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function Astronaut(props) {
  const group = useRef();
  const { scene, nodes, materials } = useGLTF("/models/Asteroid.glb");

  // Debug: Log available nodes and materials
  useEffect(() => {
    console.log("Asteroid scene:", scene);
    console.log("Asteroid nodes:", Object.keys(nodes));
    console.log("Asteroid materials:", Object.keys(materials));
    console.log("Nodes detail:", nodes);
    console.log("Materials detail:", materials);
    
    // Traverse the scene to find all meshes
    scene.traverse((child) => {
      if (child.isMesh) {
        console.log("Found mesh:", child.name, "Material:", child.material);
      }
    });
  }, [scene, nodes, materials]);

  // Ensure materials are properly configured
  useEffect(() => {
    // Apply materials to all meshes in the scene
    scene.traverse((child) => {
      if (child.isMesh) {
        // Ensure the material is properly set
        if (child.material) {
          // Configure material properties for better visibility
          if (child.material.map) {
            child.material.map.flipY = false;
          }
          child.material.needsUpdate = true;
          
          // Add some basic lighting properties if missing
          if (!child.material.transparent) {
            child.material.transparent = false;
          }
        } else {
          // If no material, create a basic one
          child.material = new THREE.MeshStandardMaterial({
            color: 0x8B4513, // Brown asteroid color
            roughness: 0.8,
            metalness: 0.2,
          });
        }
        
        // Apply available materials if they exist
        if (Object.keys(materials).length > 0 && !child.material.map) {
          const firstMaterial = Object.values(materials)[0];
          if (firstMaterial) {
            child.material = firstMaterial.clone();
          }
        }
      }
    });
  }, [scene, materials]);

  // Add floating animation
  const yPosition = useMotionValue(5);
  const ySpring = useSpring(yPosition, { damping: 30 });
  useEffect(() => {
    ySpring.set(-1);
  }, [ySpring]);
  
  // Add rotation animation for the asteroid
  useFrame((state) => {
    if (group.current) {
      group.current.position.y = ySpring.get();
      group.current.rotation.x += 0.01;
      group.current.rotation.y += 0.005;
    }
  });

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      scale={props.scale || 0.5}
      position={props.position || [1.3, -1, 0]}
    >
      {/* Primary approach: Use the entire scene */}
      <primitive key="asteroid-scene" object={scene.clone()} />
    </group>
  );
}

useGLTF.preload("/models/Asteroid.glb");
