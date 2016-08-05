import { component } from 'geotic';
import { Vector3 as vector } from 'three';

component('velocity', (entity, data = {}) => {
  let angular = data.angular || { x: 0, y: 0, z: 0 };
  let x = data.x || 0;
  let y = data.y || 0;
  let z = data.z || 0;
  const v = new vector(x, y ,z);
  v.angular = new vector(angular.x, angular.y, angular.z);
  return v;
});
