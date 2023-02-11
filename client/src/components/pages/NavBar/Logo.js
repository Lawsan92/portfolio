import React, { useEffect, useState, useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { useTheme } from '../../ThemeContext.js';

const Box = () => {

  const darkTheme = useTheme();

  const texture = new TextureLoader().load('https://res.cloudinary.com/darp0mj9i/image/upload/v1673782343/icons/Screen_Shot_2023-01-15_at_05.32.19_dl0qkv.jpg');
  const darkTexture = new TextureLoader().load('https://res.cloudinary.com/darp0mj9i/image/upload/v1675142019/icons/Screen_Shot_2023-01-30_at_23.13.35_wbbr6b.jpg');

  const ref = useRef();

  const [windowWidth, getWidth] = useState(window.innerWidth);

  useFrame(() => {
    ref.current.rotation.x += 0.005;
    ref.current.rotation.y += 0.015;
    ref.current.rotation.z += 0.01;
  });

  const handleResize = () => {
    window.addEventListener('resize', () => {
      getWidth(windowWidth.innerWidth);
    });
  }

  useEffect(() => {
    handleResize();
  }, [])

  return (
    <mesh
      ref={ref}
      scale={window.innerWidth < 450 ? 3.5 : 2.5}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial map={!darkTheme ? texture : darkTexture}
      />
    </mesh>
  )
}

const Logo = () => {

  const [canvasSize, getSize] = useState({height: (window.innerWidth < 450) ? 260 : 160, width: (window.innerWidth < 450) ? 260 : 160});

  const [canvasContainer, getMeasure] = useState({height: 160, width: 160});

  const styles = {
        container: {
          display: 'flex',
          justifyContent: 'center',
          height: `${canvasContainer.height}px`,
          width: `${canvasContainer.width}px`,
        }
      }

  const handleLogoResize = () => {
    window.addEventListener('resize', () => {
      let canvasHeight = window.getComputedStyle(document.querySelector(".navbar_logo")).height;
      let canvasWidth = window.getComputedStyle(document.querySelector(".navbar_logo")).width;
      let navbarHeight = window.getComputedStyle(document.querySelector(".navbar")).height;
      let navbarWidth = window.getComputedStyle(document.querySelector(".navbar")).width;

      const CanvasLargerThanNavbar = Math.floor(window.innerWidth / 10) < 120;

      if (CanvasLargerThanNavbar) {
        getMeasure({...canvasContainer, height: navbarWidth, width: navbarWidth });
        getSize({...canvasSize, height: navbarWidth, width: navbarWidth });
      }

      // console.log('navbarWidth:', navbarWidth, 'navbarHeight:', navbarHeight);
    });
  }

  useEffect(() => {
    handleLogoResize();
  }, [])


  return (
    <div className='navbar_logo' style={styles.container}>
      <Suspense fallback={<div>loading...</div>}>
        <Canvas style={{height: `${canvasContainer.height}px`, width: `${canvasContainer.width}px`}}>
          <ambientLight intensity={1} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <pointLight position={[-10, -10, -10]} />
          <Box position={[-1.2, 0, 0]} />
          <Box position={[1.2, 0, 0]} />
        </Canvas>
      </Suspense>
    </div>
  );

};

export default Logo;