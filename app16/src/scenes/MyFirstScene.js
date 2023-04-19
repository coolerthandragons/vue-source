import { Engine, Scene, FreeCamera, Vector3, MeshBuilder, StandardMaterial, Color3, HemisphericLight, SceneLoader } from "@babylonjs/core";
import * as BABYLON from "@babylonjs/core";

const createScene = (canvas) => {
  const engine = new Engine(canvas);
  const scene = new Scene(engine);
  addSkyBox(scene)
  generateBalloons(scene, 0, 30, 15, 0, -20, -40)
  addMusic(scene)
  createCake(scene)

  const camera = new FreeCamera("camera1", new Vector3(0, 5, -10), scene);
  camera.setTarget(Vector3.Zero());
  camera.attachControl(canvas, true);

  new HemisphericLight("light", Vector3.Up(), scene);

  const box = MeshBuilder.CreateBox("box", { size: 30, height: 5, width: 40 }, scene);
  const material = new StandardMaterial("box-material", scene);
  box.position.x = -10
  material.diffuseColor = Color3.Blue();
  box.material = material;

  engine.runRenderLoop(() => {
    scene.render();
  });
};

function addSkyBox(scene) {
  let skybox = BABYLON.Mesh.CreateBox("skyBox", 8000.0, scene);
  skybox.position.y = -100;
  skybox.infiniteDistance = true;

  let skyboxMaterial = new StandardMaterial("skyBoxMat", scene);
  skyboxMaterial.backFaceCulling = false;

  let files = ["back-z-1.jpg", "top-y.jpg", "left-x-1.jpg", "front-z-1.jpg", "top-y.jpg", "right-x-1.jpg"];
  skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture("/", scene, files);
  skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
  skyboxMaterial.diffuseColor = new Color3(0, 0, 0);
  skyboxMaterial.specularColor = new Color3(0, 0, 0);
  skybox.material = skyboxMaterial;
}

function addMusic(scene) {
  const music = new BABYLON.Sound("music", "music.mp3", scene, null, {
    loop: true,
    autoplay: true,
  })
}

function generateBalloons(scene, x1, x2, y1, y2, z1, z2) {

  let instanceCount = 10
  var allClones = [];
  for (var index = 0; index < instanceCount; index++) {
    let clone = BABYLON.MeshBuilder.CreateCapsule("capsule", { radius: 0.5, height: 10, radiusTop: 4 })
    allClones.push(clone);

    clone.position.x = x1 - Math.random() * x2;
    clone.position.y = y1 - Math.random() * y2;
    clone.position.z = z1 - Math.random() * z2;
    clone.scaling.x = clone.scaling.y = clone.scaling.z = 0.5 + Math.random() * 1;

    let material = new BABYLON.StandardMaterial("material");

    clone.material = material;

    material.disableLighting = true;
    let max = -4
    let min = 4
    material.emissiveColor = new BABYLON.Color3((Math.random() * (max - min) + min), Math.random(), 0);

    let keyFrames = []
    let fps = 60
    let anim = new BABYLON.Animation(
      "anim2",
      "position.y",
      fps,
      BABYLON.Animation.ANIMATIONTYPE_FLOAT,
      BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE)

    keyFrames.push({
      frame: 0,
      value: 10
    })
    keyFrames.push({
      frame: fps * 2,
      value: 30
    })

    anim.setKeys(keyFrames)
    clone.animations.push(anim)
    scene.beginAnimation(clone, 0, fps * 2, true)

    keyFrames = []
    fps = 60
    anim = new BABYLON.Animation(
      "anim2",
      "position.y",
      fps,
      BABYLON.Animation.ANIMATIONTYPE_FLOAT,
      BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE)

    keyFrames.push({
      frame: 0,
      value: 0
    })
    keyFrames.push({
      frame: fps * 2,
      value: 40
    })

    anim.setKeys(keyFrames)
    clone.animations.push(anim)
    scene.beginAnimation(clone, 0, fps * 2, true)
  }
}

function createCake(scene) {
  const cylinder = BABYLON.MeshBuilder.CreateCylinder("cylinder", { height: 10, width: 20, diameter: 15 });
  cylinder.position.x = 0
  cylinder.position.y = 3
  const material1 = new StandardMaterial("box-material", scene);
  material1.diffuseColor = Color3.Red();
  cylinder.material = material1;

  const cylinder1 = BABYLON.MeshBuilder.CreateCylinder("cylinder", { height: 8, width: 20, diameter: 20 });
  cylinder1.position.x = 0
  cylinder1.position.y = 13
  const material2 = new StandardMaterial("box-material", scene);
  material2.diffuseColor = Color3.Yellow();
  cylinder1.material = material2;

  const cylinder2 = BABYLON.MeshBuilder.CreateCylinder("cylinder", { height: 8, width: 20, diameter: 15 });
  cylinder2.position.x = 0
  cylinder2.position.y = 18
  const material3 = new StandardMaterial("box-material", scene);
  material3.diffuseColor = Color3.Purple();
  cylinder2.material = material3;

  const cylinder3 = BABYLON.MeshBuilder.CreateCylinder("cylinder", { height: 3, width: 20, diameter: 10 });
  cylinder3.position.x = 0
  cylinder3.position.y = 23
  const material4 = new StandardMaterial("box-material", scene);
  material4.diffuseColor = Color3.White();
  cylinder3.material = material4;

  const cylinder4 = BABYLON.MeshBuilder.CreateCylinder("cylinder", { height: 3, width: 20, diameter: 8 });
  cylinder4.position.x = 0
  cylinder4.position.y = 25
  const material5 = new StandardMaterial("box-material", scene);
  material5.diffuseColor = Color3.Blue();
  cylinder4.material = material5;

  const cylinder5 = BABYLON.MeshBuilder.CreateCylinder("cylinder", { height: 3, width: 20, diameter: 6 });
  cylinder5.position.x = 0
  cylinder5.position.y = 27
  const material6 = new StandardMaterial("box-material", scene);
  material6.diffuseColor = Color3.Black();
  cylinder5.material = material6;

  const candle = BABYLON.MeshBuilder.CreateCylinder("cylinder", {tessellation: 3, diameter:1});
  candle.position.x = 2
  candle.position.y = 29

  const candle2 = BABYLON.MeshBuilder.CreateCylinder("cylinder", {tessellation: 3, diameter:1});
  candle2.position.x = -2
  candle2.position.y = 29

  const candle3 = BABYLON.MeshBuilder.CreateCylinder("cylinder", {tessellation: 3, diameter:1});
  candle3.position.z = 2
  candle3.position.y = 29

  const candle4 = BABYLON.MeshBuilder.CreateCylinder("cylinder", {tessellation: 3, diameter:1});
  candle4.position.z = -2
  candle4.position.y = 29

}
export { createScene };