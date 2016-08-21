import geotic from 'geotic';

export default {
  update: (dt) => {
    geotic.findByComponent('bounds', 'velocity').forEach(e => {
      e.bounds.collisions.forEach(other => {
        if (e.transform.position.x, other.transform.position.x);
      });
    });
  }
};
