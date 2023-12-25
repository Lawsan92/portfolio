import React, { Suspense , useState, useEffect, useRef} from 'react';
import { animated, useSpring } from '@react-spring/web';
import { useLoader, Canvas, ambientLight, pointLight, MeshPhongMaterial } from '@react-three/fiber';
import { OrbitControls, Text,  useGLTF, Circle, meshStandardMaterial, Html } from "@react-three/drei";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useTheme } from '../../ThemeContext.js';
import * as THREE from 'three';

const Laptop_2 = ()  => {

  const darkTheme = useTheme();
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [text, delay, loop] = [`Lawrence Sanzogni,\n Software Engineer\n\nI'm a fullstack Software Engineer with a specialty in MERN and PERN\ntech stacks. I freelance as a web developer and love creating new content for\ngrowing businesses. I'm currently looking for new full time opportunities\nand to make an impact.`, currentIndex < 38 ? 100 : 25, false];

  const spring = useSpring({
    from: {
      opacity: 0, transition: '2s ease-in'
    },
    to:{
       opacity: 1, transition: '2s ease-in'
    }
  })

  const [isHover, setHover] = useState(false);

  useEffect(() => {
    if (currentIndex <= text.length) {
      animateText()
    } else if (loop) {
      setCurrentIndex(0);
      setCurrentText('');
    }
  }, [currentIndex, delay, text]);

  const animateText = () => {
    const timeout = setTimeout(() => {
      setCurrentText((prevText) => {return prevText + text[currentIndex]});
      setCurrentIndex((prevIndex) => {return prevIndex + 1});
    }, delay);
    return () => {
      return clearTimout(timeout);
    };
  }

  const { nodes, materials } = useGLTF("/assets/laptop.gltf");
  return (
    <animated.div style={spring} >
    <Canvas camera={{fov: 45, position: [-6, 3, 10]}} shadows className='home_laptop_canvas' style={{...spring, height: '100vh', width: '90vw'}}>
      <Suspense fallback={null}>
      <ambientLight intensity={2}/>
      <pointLight/>
      <OrbitControls/>
      <group>
        <Text color='steelblue'
        scale={[0.25, 0.25, 0.25]}
        anchorY={-7}
        anchorX={9}
        >{Array.from(currentText).slice(0, 37).join('')}</Text>
        <Text
        color='grey'
        scale={[0.12, 0.12, 0.12]}
        anchorY={-10}
        anchorX={16}
        >{Array.from(currentText).slice(38, text.length - 1).join('')}</Text>
      </group>
      <group className='circles' >
        <mesh
        onPointerOver={() => {setHover({...isHover, [0]: true})}}
        onPointerOut={() => {setHover({...isHover, [0]: false})}}
        className='circle_1'
        material={ new THREE.MeshPhongMaterial({ color: !isHover[0] ? 'steelblue' : 'white', transparent: currentIndex <= text.length  ? true : false, opacity: 0 }) }
        geometry={new THREE.CircleGeometry (5, 32 )}
        scale={0.06}
        position={[0.75, 0.25, 0]}
        />
        <mesh
        className='circle_2'
        onPointerOver={() => {setHover({...isHover, [1]: true})}}
        onPointerOut={() => {setHover({...isHover, [1]: false})}}
        material={ new THREE.MeshPhongMaterial({ color: !isHover[1] ? 'steelblue' : 'white', transparent: currentIndex <= text.length  ? true : false, opacity: 0 }) }
        geometry={new THREE.CircleGeometry (5, 32 )}
        scale={0.075}
        position={[0, -0.2, 0]}
        />
        <mesh
        className='circle_3'
        onPointerOver={() => {setHover({...isHover, [2]: true})}}
        onPointerOut={() => {setHover({...isHover, [2]: false})}}
        material={ new THREE.MeshPhongMaterial({ color: !isHover[2] ? 'steelblue' : 'white', transparent: currentIndex <= text.length  ? true : false, opacity: 0 }) }
        geometry={new THREE.CircleGeometry (5, 32 )}
        scale={0.1}
        position={[1, -0.7, 0]}
        />
      </group>
    <group dispose={null} scale={1} rotation={[0, 0, 0]} position={[0, -1.8, 1.95]}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.aiStandardSurface5SG}
        />
        <mesh
          className='laptop_screen'
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials.aiStandardSurface7SG}
          material-color={darkTheme ? '#000000' : '#ffffff'}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials.aiStandardSurface1SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials.aiStandardSurface3SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={materials.aiStandardSurface4SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_7.geometry}
          material={materials.aiStandardSurface4SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8.geometry}
          material={materials.aiStandardSurface4SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_9.geometry}
          material={materials.aiStandardSurface6SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_10.geometry}
          material={materials.initialShadingGroup}
          className='laptop_casing'
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_11.geometry}
          material={materials.initialShadingGroup}
          className='laptop_casing'
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_12.geometry}
          material={materials.initialShadingGroup}
          className='laptop_casing'
          material-color={darkTheme ? 'steelblue' : '#ffffff'}
        />
      </group>
    </group>
      </Suspense>
    </Canvas>
    </animated.div>
  );
};

useGLTF.preload("/laptop.gltf");

export default Laptop_2;