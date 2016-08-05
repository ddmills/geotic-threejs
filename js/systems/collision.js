import geotic from 'geotic';

export default {
  update: (dt) => {
    const obstacles = geotic.findByComponent('obstacle').map(e => e.obstacle);
    const actors = geotic.findByComponent('collision');
    
  }
};
