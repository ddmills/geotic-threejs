import geotic from 'geotic';

export default {
  update: (dt) => {
    geotic.findByComponent('transform', 'velocity').forEach(e => {
      e.c.transform.position.x += e.c.velocity.x * dt;
      e.c.transform.position.y += e.c.velocity.y * dt;
      e.c.transform.position.z += e.c.velocity.z * dt;
      e.c.transform.rotation.x += e.c.velocity.angular.x * dt;
      e.c.transform.rotation.y += e.c.velocity.angular.y * dt;
      e.c.transform.rotation.z += e.c.velocity.angular.z * dt;
    });
  }
};
