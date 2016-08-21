import { component } from 'geotic';
import { Vector3 } from 'three';

component('velocity', (entity, data = {}) => {
  let angular = data.angular || { x: 0, y: 0, z: 0 };
  let x = data.x || 0;
  let y = data.y || 0;
  let z = data.z || 0;
  const v = new Vector3(x, y ,z);
  v.angular = new Vector3(angular.x, angular.y, angular.z);

  v.updateWorld = (rotation) => {
    v.world.copy(v);
    v.world.applyAxisAngle(new Vector3(1, 0, 0), rotation.x);
    v.world.applyAxisAngle(new Vector3(0, 1, 0), rotation.y);
    v.world.applyAxisAngle(new Vector3(0, 0, 1), rotation.z);
  }

  v.world = new Vector3(0, 0, 0);
  return v;
});
