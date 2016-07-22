import { PerspectiveCamera  } from 'three';
import { component } from 'geotic';
import systems from '../systems';

component('camera', entity => {
  let camera = new PerspectiveCamera(45, (window.innerWidth / window.innerHeight), 0.1, 10000);
  entity.c.transform.add(camera);
  systems.renderer.camera = camera;
  return camera;
});
