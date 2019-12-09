var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 25, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.set( 1, 1, 20 );

var renderer = new THREE.WebGLRenderer();
renderer.setClearColor( 0xC5C5C3 );
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var light = new THREE.AmbientLight( 0x404040 );
scene.add( light );
			
var directionalLight = new THREE.DirectionalLight( 0xffffff );
directionalLight.position.set( 0, 1, 1 ).normalize();
scene.add( directionalLight );

var loader = new THREE.GLTFLoader();

loader.load('./assets/Squirtle.glb', function(gltf) {			
	gltf.scene.scale.set( 2, 2, 2 );			   
	gltf.scene.position.x = 0.5; // Esquerda, direita
    gltf.scene.position.y = 0; // Cima, baixo				    
	gltf.scene.position.z = 5;	// Frente, trás			     
	
	scene.add( gltf.scene );
}, undefined, function(error) {
    console.error(error);
});

function animate() {
	render();
	requestAnimationFrame( animate );
	}

function render() {
    renderer.render(scene, camera);
}

render();

animate();