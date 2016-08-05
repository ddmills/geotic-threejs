import { component } from 'geotic';
import { Mesh } from 'three';

component('mesh', (entity, geometry, material) => {
  const mesh = new Mesh(geometry, material);
  entity.mandate('transform').add(mesh);
  return mesh;
});
