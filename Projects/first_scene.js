
import * as THREE from 'three';
let scene, camera, renderer; 

// set up the environment - 
// intializing scene, camera, objects, and renderer
let init = function() {
    // 1. create the sceen
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xababab);

    // 2. create and locate the camera
    camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 1, 1000); 
    camera.position.z = 5;

    // 3. create and locate the objects on the screen 
    // ... 

    // 4. create the renderer 
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    document.body.appendChild(renderer.domElement);

};

// main animation loop -- calls every 50-60 ms 
let mainLoop = function(){
    renderer.render(scene, camera);
    requestAnimationFrame(mainLoop);

};

//////////////////////////////////////////////////////////////
init;
mainLoop();