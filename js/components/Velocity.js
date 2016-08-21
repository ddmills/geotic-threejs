import { component } from 'geotic';
import { Vector3 } from 'three';
import axis from '../axis';

class Velocity extends Vector3 {
  constructor(entity, data={}) {
    let angular = data.angular || { x: 0, y: 0, z: 0 };
    let x = data.x || 0;
    let y = data.y || 0;
    let z = data.z || 0;

    super(x, y, z);

    this.angular = new Vector3(angular.x, angular.y, angular.z);
    this._world = new Vector3(x, y, z);
  }

  updateWorld(rotation) {
    this._world.copy(this);
    this._world.applyAxisAngle(axis.x, rotation.x);
    this._world.applyAxisAngle(axis.y, rotation.y);
    this._world.applyAxisAngle(axis.z, rotation.z);
  }

  get world() {
    return this._world;
  }

  set world(vector) {
    this._world = vector;
  }
}

component('velocity', (entity, data={}) => new Velocity(entity, data));
