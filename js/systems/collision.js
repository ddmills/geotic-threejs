import geotic from 'geotic';
import { Raycaster } from 'three';

const caster = new Raycaster();

export default {
  update: (dt) => {
    const obstacles = geotic.findByComponent('obstacle').map(e => e.obstacle.mesh);
    const actors = geotic.findByComponent('collision');

    actors.forEach(e => {
      const direction = e.velocity.clone().setLength(1);
      const target = e.transform.getWorldDirection();
      const distance = 50;

      if (direction.z == -1) {
        target.multiplyScalar(direction.z);
      }

      caster.far = distance;
      caster.set(e.transform.position, target);
      const collisions = caster.intersectObjects(obstacles);

      if (collisions.length) {
        e.velocity.z = 0;
      }
    });
  }
};
