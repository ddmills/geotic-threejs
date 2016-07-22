import { Object3D, Vector3 } from 'three';
import { component } from 'geotic';
import renderer from '../systems/renderer';

export default class Transform extends Object3D {
  constructor(e, d = {}) {
    let p = { x: 0, y: 0, z: 0 };

    if (d.position) {
      p.x = d.position.x || p.x;
      p.y = d.position.y || p.y;
      p.z = d.position.z || p.z;
    }

    super();

    this.position.x = p.x;
    this.position.y = p.y;
    this.position.z = p.z;

    renderer.scene.add(this);
  }
}

component('transform', (entity, data) => new Transform(entity, data));
