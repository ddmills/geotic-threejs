import geotic from 'geotic';

export default {
  update: (dt) => {
    geotic.findByComponent('transform', 'velocity').forEach(e => {
      e.transform.translateX(e.velocity.x * dt);
      e.transform.translateY(e.velocity.y * dt);
      e.transform.translateZ(e.velocity.z * dt);
      e.transform.rotateX(e.velocity.angular.x * dt);
      e.transform.rotateY(e.velocity.angular.y * dt);
      e.transform.rotateZ(e.velocity.angular.z * dt);
      e.velocity.updateWorld(e.transform.rotation);
    });
  }
};
