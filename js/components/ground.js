import { Mesh  } from 'three';
import { component } from 'geotic';
import {
  MeshLambertMaterial as material,
  PlaneGeometry as plane,
} from 'three';

component('ground', entity => {
  const ground = new Mesh(new plane(10000, 10000), new material({ color: 0x9ea82d }));
  ground.rotation.x = -Math.PI/2;
  ground.position.y = -50;
  ground.doubleSided = true;
  entity.mandate('transform').add(ground);
  return ground;
});
