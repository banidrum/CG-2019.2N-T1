import * as THREE from './lib/threejs/build/three.module';
import { GLTFLoader } from './lib/threejs/examples/jsm/loaders/GLTFLoader';

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var loader = new THREE.GLTFLoader();

loader.load('./assets/Squirtle/Squirtle.gltf') {
    scene.add(gltf.scene);
}
