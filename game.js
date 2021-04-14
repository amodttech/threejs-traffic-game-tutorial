
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

/// Assets

const vehicleColors = [0xa52523, 0xbdb638, 0x78b14b]

function Car() {
    const car = new THREE.Group()

    const backWheel = Wheel()
    backWheel.position.x = -10 // moves the object to  the rear of the car
    car.add(backWheel)

    const frontWheel = Wheel()
    frontWheel.position.x = 10 //moves object equilvalent distance to the fron of the car
    car.add(frontWheel)

    const main = new THREE.Mesh(  //  car body
      new THREE.BoxBufferGeometry(60, 30, 15),
      new THREE.MeshLambertMaterial({color: pickRandom(vehicleColors)})
    )
    main.position.z = 12
    car.add(main)

    const cabin = new THREE.Mesh(
      new THREE.BoxBufferGeometry(33, 24, 12),
      new THREE.MeshLambertMaterial({color: 0xffffff})
    )
    cabin.position.x = -6
    cabin.position.z = 25.5
    car.add(cabin)

  return car
}

function Wheel() {
  const wheel = new THREE.Mesh(
    new THREE.BoxBufferGeometry(12,33,12), // 
    new THREE.MeshLambertMaterial({color: 0x333333})  // color is charcoal grey
  )
  wheel.position.z = 6 //  it's center height is equal to half its whole height, so it will render resting on the ground
  console.log(`wheel`, wheel)
  return wheel
}

function pickRandom(array) {
  return array[Math.floor(Math.random() * array.length)]
}

