import * as THREE from 'three';
import {OrbitControls} from '../node_modules/three/examples/jsm/controls/OrbitControls';

//creating a scene
export const scene = new THREE.Scene();
//creating a camera
const camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 1000);
//creating a raycaster to make object interactive
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2()
//creating renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
//creating a orbitcontrols
const controls = new OrbitControls(camera, renderer.domElement);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
document.body.appendChild(renderer.domElement);


scene.background = new THREE.Color(0xFFFFFF);

camera.position.z = 25;
camera.position.y = 1.5;

//gltfLoader2.position.x=2;
controls.update();
controls.autoRotate = false;

const animate = function () {
    requestAnimationFrame(animate);
  
    renderer.render(scene, camera);
  
    controls.update()
    
  };

  animate();
