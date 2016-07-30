import { Mesh  } from 'three';
import { component } from 'geotic';

component('mesh', (entity, geometry, material) => {
  const mesh = new Mesh(geometry, material);
  entity.mandate('transform').add(mesh);
  return mesh;
});
