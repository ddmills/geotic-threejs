import { component } from 'geotic';
import { Mesh } from 'three';

component('obstacle', (entity, geometry) => {
  const mesh = new Mesh(geometry);
  const owner = entity.mandate('transform').add(mesh);

  return { mesh };
});
