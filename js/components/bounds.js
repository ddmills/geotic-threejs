import { component } from 'geotic';
import { Box3, Vector3, Mesh, MeshBasicMaterial, BoundingBoxHelper } from 'three';
import renderer from '../systems/renderer';

component('bounds', (entity, geometry=false) => {
  const transform = entity.mandate('transform');

  let mesh = null;

  if (!geometry) {
    if (entity.has('mesh')) {
      mesh = entity.mesh;
    } else {
      mesh = entity.mandate('mesh');
    }
  } else {
    mesh = new Mesh(geometry, new MeshBasicMaterial({ transparent: true, opacity: 0 }));
  }

  transform.add(mesh);

  const bounds = new Box3(new Vector3, new Vector3);
  const helper = new BoundingBoxHelper(mesh, 0xffffff);
  let collisions = [];

  const debug = () => {
    renderer.scene.add(helper);
  }

  const compare = (other) => {
    if (other.bounds.bounds.intersectsBox(bounds)) {
      collisions.push(other);
      other.bounds.collisions.push(entity);
    }
  }

  const intersects = (other) => {
    return collisions.includes(other);
  }

  return { bounds, mesh, compare, intersects, collisions, debug };
});
