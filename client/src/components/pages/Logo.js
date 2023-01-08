import React, { useEffect, useState } from 'react';
import {Scene, PerspectiveCamera, WebGLRenderer, BoxGeometry, MeshBasicMaterial, Mesh, TextureLoader} from 'three';

const Logo = () => {

  const [canvasSize, getSize] = useState({height: 160, width: 160})

  // Appends renderer to DOM element
  useEffect(() => {
    const container = document.querySelector('.navbar_logo');
    container.appendChild(renderer.domElement);
    window.addEventListener('resize', () => {
      let canvasHeight = window.getComputedStyle(document.querySelector(".navbar_logo")).height;
      let canvasWidth = window.getComputedStyle(document.querySelector(".navbar_logo")).width;
      console.log('canvasHeight:', canvasHeight, 'canvasWidth:', canvasWidth);
    })
  }, [])

  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      height: '10em',
      width: '10em',
      // backgroundColor: 'white'
    }
  }

  // TEXT
  const texture = new TextureLoader().load('https://res.cloudinary.com/darp0mj9i/image/upload/v1673181941/icons/Screen_Shot_2023-01-08_at_06.45.37_q21fhw.jpg');

  // Scene
  const scene = new Scene();
  // scene.background = new Color(0xadd8e6)

  // Camera
  const camera = new PerspectiveCamera(30, canvasSize.height / canvasSize.width, 0.1, 1000);
  // this will move our scene behind our 3D elements
  camera.position.z = 5;

  // Renderer
  const renderer = new WebGLRenderer({alpha:  true});
   // this sets the render size to the size of the window element


  renderer.setSize( canvasSize.height, canvasSize.width );
  renderer.setPixelRatio(window.devicePixelRatio)

  // 3D element

  // set of vectors ( {x, y, x} corrdinates/points) that make up a shape
  const geometry = new BoxGeometry( 1, 1, 1 );
  // The “wrapping paper” of a geometry, this give the shape color and texture
  const material = new MeshBasicMaterial( { map: texture } );
  //takes the geometry and applies a material to it
  const cube = new Mesh( geometry, material );

  // Our recursive rendering function which will repeatedly update the scene and mesh (60 times per second)
  const animate = () => {
    requestAnimationFrame( animate ); // method tells the browser that you wish to perform an animation and requests that the browser calls a specified function to update an animation before the next repaint
    cube.rotation.x += 0.01; // change vertical position of shape down by 1 degree
    cube.rotation.y += 0.01; // change horizontal position of shape left to right by 1 degree
    cube.rotation.z += 0.01; // change the face position clockwise by 1 degree
    renderer.render(scene, camera) // this render method will 'draw the camera and scene onto the browser'
    scene.add( cube ); // this will add our shape to the scene
  }

  return (
    <div className='navbar_logo' style={styles.container} >
      {animate()}
    </div>
  )
}

export default Logo;