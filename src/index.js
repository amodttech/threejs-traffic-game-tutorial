import _ from 'lodash'
import { dir } from 'node:console'
import THREE, { AmbientLight } from 'three'


const scene = new THREE.Scene()


const playerCar = Car()
scene.add(playerCar)


// lights setup

const ambientLight = new THREE.AmbientLight(0xffffff, 0.6) // (color, intensity)
scene.add(ambientLight)

const dirLight = new THREE.DirectionalLight(0xffffff, 0.6)
dirLight.position.set(100, -300, 400)  // (x, y, z)
scene.add(dirLight)


// camera setup

const aspectRatio = window.innerWidth / window.innerHeight
const cameraWidth = 150
const cameraHeight = cameraWidth / aspectRatio

const camera = new THREE.OrthographicCamera(
  cameraWidth / -2, // left     
  cameraWidth / 2, // right
  cameraHeight / 2, //top
  cameraHeight / -2, // bottom
  0, // near plane
  1000 // far plane 
)

camera.position.set(200, -200, 300)  // (x, y, z)
camera.up.set(0, 0, 1)  //  set which direction is Upwards, (0,0,1) sets that the positive Z axis is up.  this is not default, default has Y axis pointing up
camera.lookAt(0, 0, 0)  //  set where the camera should focus

//  renderer setup

const renderer = new THREE.WebGL1Renderer({antialias: true})
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.render(scene, camera)










function component() {
    const element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    return element;
  }

  
document.body.appendChild(component());
document.body.appendChild(renderer.domElement);