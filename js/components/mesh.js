import { Mesh  } from 'three';
import { component } from 'geotic';

component('mesh', (entity, geometry, material) => {
  const mesh = new Mesh(geometry, material);
  entity.c.transform.add(mesh);
  return mesh;
});
