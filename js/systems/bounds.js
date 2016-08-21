import geotic from 'geotic';

export default {
  update: (dt) => {
    const actors = geotic.findByComponent('bounds');

    actors.forEach(e => {
      e.bounds.collisions = [];
      e.bounds.bounds.setFromObject(e.bounds.mesh);
      e.bounds.debug();
    });

    for (let i = 0; i < actors.length; i++) {
      const left = actors[i];

      for (let j = i+1; j < actors.length; j++) {
        const other = actors[j];

        left.bounds.compare(other);
      }
    }
  }
};
