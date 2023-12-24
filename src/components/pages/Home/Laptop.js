import React, { Suspense , useState, useEffect, useMemo } from 'react';
import { useLoader, Canvas, ambientLight, pointLight } from '@react-three/fiber';
import { OrbitControls, Text,  useGLTF } from "@react-three/drei";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Laptop = ()  => {
  const gltf = useLoader(GLTFLoader, '/assets/laptop.gltf');

  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [text, delay, loop] = ['Lawrence Sanzogni,\n Software Engineer', 200, true];

  useEffect(() => {
    if (currentIndex <= text.length) {
      animateText()
    } else if (loop) {
      setCurrentIndex(0);
      setCurrentText('');
    }
  }, [currentIndex, delay, text]);

  useMemo(() => {
    gltf.scene.traverse((obj) => {
      console.log('obj:', obj, 'name:', obj.name);
      if (obj.material)  {
        // obj.material.color = {isColor: true, r: 70, g: 130, b: 180}
        // (70,130,180) = steelblue
      }
    })

  }, [gltf]);

  const animateText = () => {
    const timeout = setTimeout(() => {
      setCurrentText((prevText) => {return prevText + text[currentIndex]});
      setCurrentIndex((prevIndex) => {return prevIndex + 1});
    }, delay);
    return () => {
      return clearTimout(timeout);
    };
  }

  return (
    // <Canvas camera={{fov: 45, position: [-6, -1, 10]}}>
    <Canvas camera={{fov: 80, position: [-6, 2, 8]} /**refs.txt#1 */}>
      <Suspense fallback={null}>
      <ambientLight intensity={2}/>
      <OrbitControls/>
      <Text
      color="#ffffff"
      scale={[0.25, 0.25, 0.25]}
      fontSize={1}
      anchorY={0}
      anchorX={6}
      >{currentText}</Text>
      <primitive object={gltf.scene} scale={1} rotation={[0, 0.0, 0]} position={[0, -3, 1.96]}/>
      </Suspense>
    </Canvas>
  )
};

export default Laptop;