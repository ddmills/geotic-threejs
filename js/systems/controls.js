import geotic from 'geotic';
import keyboard from '../keyboard';
import { Vector3, Quaternion } from 'three';

class Controls {
  update(dt) {
    geotic.findByComponent('controls', 'velocity').forEach(e => {
      e.velocity.angular.y = 0;
      e.velocity.z = 0;

      if (keyboard.w) {
        e.velocity.z = e.controls.speed;
      }

      if (keyboard.a) {
        e.velocity.angular.y = e.controls.rotation;
      }

      if (keyboard.s) {
        e.velocity.z = -e.controls.speed;
      }

      if (keyboard.d) {
        e.velocity.angular.y = -e.controls.rotation;
      }
    });
  }
}

export default new Controls;
