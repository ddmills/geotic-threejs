import { component } from 'geotic';
import { Box3, Vector3, Mesh, MeshBasicMaterial } from 'three';

component('obstacle', (entity, geometry) => {
  const transform = entity.mandate('transform');
  // const mesh = new Mesh(geometry, new MeshBasicMaterial({ transparent: true, opacity: 0 }));
  const mesh = new Mesh(geometry, new MeshBasicMaterial({ wireframe: true, color: 0xeb45fa }));
  transform.add(mesh);
  const bounds = new Box3(new Vector3, new Vector3);

  const recalculate = () => bounds.setFromObject(mesh);
  const intersects = (other) => {

  }

  return { bounds, mesh, recalculate, intersects };
});
