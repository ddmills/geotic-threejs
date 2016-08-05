import { component } from 'geotic';
import { Mesh } from 'three';

component('obstacle', (entity, geometry) => {
  const mesh = new Mesh(geometry);
  let obstacle = { mesh };
  entity.mandate('transform').add(mesh);
  return obstacle;
});
