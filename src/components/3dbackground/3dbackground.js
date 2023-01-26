import React from "react";
import * as THREE from "three";
import { TextureLoader } from "three";
import { useLoader } from "@react-three/fiber";
import EarthNightMap from "../../images/bg3.jpg";
function Models() {
  const [cloudsMap] = useLoader(TextureLoader, [EarthNightMap]);

  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector("#bg"),
  });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x9932cc, 0);
  camera.position.setY(-10);
  camera.position.setX(-30);
  camera.position.setZ(20);

  const earthGeometry = new THREE.SphereGeometry(8, 90, 90);
  const earthMaterial = new THREE.MeshPhongMaterial({
    side: THREE.DoubleSide,
    map: cloudsMap,
    opacity: 1,
  });
  const earth = new THREE.Mesh(earthGeometry, earthMaterial);
  earth.position.setX(-30);
  earth.position.setY(-10);

  const particlesGeometry = new THREE.BufferGeometry();
  const particlesCount = 10000;
  const postArray = new Float32Array(particlesCount * 100);

  for (let i = 0; i < particlesCount; i++) {
    postArray[i] = (Math.random() - 2.9) * 8 * ((Math.random() - 0.1) * 5);
  }

  particlesGeometry.setAttribute(
    "position",
    new THREE.BufferAttribute(postArray, 3)
  );
  const material = new THREE.PointsMaterial({
    size: 0.05,

  });
  const particlesMesh = new THREE.Points(particlesGeometry, material);

  scene.add(earth, particlesMesh);

  const pointLight = new THREE.PointLight(0xf5e371, 5);
  pointLight.position.set(45, 0, 15);

  const ambientLight = new THREE.AmbientLight(0xffffff);
  scene.add(ambientLight, pointLight);
  function moveCamera() {
    const t = document.body.getBoundingClientRect().top;
    earth.rotation.x = t * 0.001;
  }

  document.body.onscroll = moveCamera;
  document.addEventListener("mousemove", animateParticles);
  let mouseX = 0;
  let mouseY = 0;

  function animateParticles(event) {
    mouseX = event.clientX;
    mouseY = event.clientY;
    particlesMesh.position.x = mouseX * 0.009;
    particlesMesh.position.y = -mouseY * 0.009;
  }
  moveCamera();
  function animate() {
    requestAnimationFrame(animate);
    earth.rotation.y += 0.005;
    renderer.render(scene, camera);
  }
  animate();
  return <div></div>;
}

export default Models;
