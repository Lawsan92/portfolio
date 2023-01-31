import React, { useEffect, useState } from 'react';
import {Scene, PerspectiveCamera, WebGLRenderer, BoxGeometry, MeshBasicMaterial, Mesh, TextureLoader, Color} from 'three';
import { useTheme } from '../ThemeContext.js';

const Logo = () => {

  const darkTheme = useTheme();

  const [canvasSize, getSize] = useState({height: (window.innerWidth < 450) ? 260 : 160, width: (window.innerWidth < 450) ? 260 : 160});

  const [canvasContainer, getMeasure] = useState({height: 160, width: 160});

  // Appends renderer to DOM element
  useEffect(() => {
    const container = document.querySelector('.navbar_logo');
    container.appendChild(renderer.domElement);
    window.addEventListener('resize', () => {
      let canvasHeight = window.getComputedStyle(document.querySelector(".navbar_logo")).height;
      let canvasWidth = window.getComputedStyle(document.querySelector(".navbar_logo")).width;
      let navbarHeight = window.getComputedStyle(document.querySelector(".navbar")).height;
      let navbarWidth = window.getComputedStyle(document.querySelector(".navbar")).width;

      (Math.floor(window.innerWidth / 10) < 120) && getMeasure({...canvasContainer, height: navbarWidth, width: navbarWidth }), getSize({...canvasSize, height: navbarWidth, width: navbarWidth })

      // console.log('navbarWidth:', navbarWidth, 'navbarHeight:', navbarHeight);
    })
  }, [])

  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      height: `${canvasContainer.height}px`,
      width: `${canvasContainer.width}px`,
      // backgroundColor: 'white'
    }
  }

  class Cube  {
    constructor () {
      this.scene = new Scene();
      this.scene.background = new Color(0x000000);
      this.camera = new PerspectiveCamera(30, canvasSize.height / canvasSize.width, 0.1, 1000);
      this.camera.position.z = 5;
      this.texture = new TextureLoader().load('https://res.cloudinary.com/darp0mj9i/image/upload/v1673782343/icons/Screen_Shot_2023-01-15_at_05.32.19_dl0qkv.jpg');
      this.renderer = new WebGLRenderer({alpha: true });
      this.renderer.setSize( canvasSize.height, canvasSize.width );
      this.renderer.setPixelRatio(window.devicePixelRatio)
      this.geometry = new BoxGeometry( 1, 1, 1 );
      this.material = new MeshBasicMaterial( { map: this.texture } );
      this.cube = new Mesh( this.geometry, this.material );
      this.animate = function () {
        requestAnimationFrame( this.animate )
        this.cube.rotation.x += 0.01;
        this.cube.rotation.y += 0.01;
        this.cube.rotation.z += 0.01;
        this.renderer.render(this.scene, this.camera)
        this.scene.add( this.cube )
        console.log('this.scene.add(this.cube):', this.scene.add(this.cube))
      }
    }
  }

  let cube1 = new Cube ();


  // TEXT
  const texture = new TextureLoader().load('https://res.cloudinary.com/darp0mj9i/image/upload/v1673782343/icons/Screen_Shot_2023-01-15_at_05.32.19_dl0qkv.jpg');

  // Scene
  const scene = new Scene();
  // scene.background = new Color(0xffffff)

  // Camera
  const camera = new PerspectiveCamera(30, canvasSize.height / canvasSize.width, 0.1, 1000);
  // this will move our scene behind our 3D elements
  camera.position.z = 5;

  // Renderer
  const renderer = new WebGLRenderer({alpha: true });
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

  /*-----------------
      DARK MODE CUBE
  ------------------ */


  return (
    <div className='navbar_logo' style={styles.container} >
      { animate()}
    </div>
  )
}

export default Logo;