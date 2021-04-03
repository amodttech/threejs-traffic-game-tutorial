import _ from 'lodash'
import { dir } from 'node:console'
import THREE, { AmbientLight } from 'three'


const scene = new THREE.Scene()


const playerCar = Car()
scene.add(playerCar)


// lights setup

const ambientLight = new THREE.AmbientLight(0xffffff, 0.6)
scene.add(ambientLight)

const dirLight = new THREE.DirectionalLight(0xffffff, 0.6)
dirLight.position.set(100, -300, 400)
scene.add(dirLight)














function component() {
    const element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    return element;
  }
  
document.body.appendChild(component());