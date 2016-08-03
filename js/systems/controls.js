import geotic from 'geotic';
import keyboard from '../keyboard';

class Controls {
  update(dt) {
    geotic.findByComponent('controls', 'velocity').forEach(e => {
      e.velocity.x = 0;
      e.velocity.z = 0;

      if (keyboard.w) {
        e.velocity.z = e.controls.speed;
      }

      if (keyboard.a) {
        e.velocity.x = -e.controls.speed;
      }

      if (keyboard.s) {
        e.velocity.z = -e.controls.speed;
      }

      if (keyboard.d) {
        e.velocity.x = e.controls.speed;
      }
    });
  }
}

export default new Controls;
