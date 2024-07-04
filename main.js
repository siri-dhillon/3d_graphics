
import * as THREE from 'three';
let scene, camera, renderer, geometry, material, cube; 

// set up the environment - 
// intializing scene, camera, objects, and renderer

// 1. create the sceen
scene = new THREE.Scene();
scene.background = new THREE.Color(0xababab);

// 2. create and locate the camera
camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000); 
//camera.position.z = 5;

// 3. create and locate the objects on the screen 
geometry = new THREE.BoxGeometry( 1, 2, 1 );
material = new THREE.MeshBasicMaterial( { color: 0x02002f } );
cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

// 4. create the renderer 
renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);


// main animation loop -- calls every 50-60 ms 
function animate() {
    //requestAnimationFrame( animate );

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    // render the scene

	renderer.render( scene, camera );
}
renderer.setAnimationLoop( animate );
