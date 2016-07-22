import { component } from 'geotic';

component('velocity', (entity, data = {}) => {
  let angular = data.angular || { x: 0, y: 0, z: 0 };
  let x = data.x || 0;
  let y = data.y || 0;
  let z = data.z || 0;
  return { angular, x, y, z };
});
