import geotic from 'geotic';

export default {
  update: (dt) => {
    geotic.findByComponent('transform', 'velocity').forEach(e => {
      e.transform.position.x += e.velocity.x * dt;
      e.transform.position.y += e.velocity.y * dt;
      e.transform.position.z += e.velocity.z * dt;
      e.transform.rotation.x += e.velocity.angular.x * dt;
      e.transform.rotation.y += e.velocity.angular.y * dt;
      e.transform.rotation.z += e.velocity.angular.z * dt;
    });
  }
};
