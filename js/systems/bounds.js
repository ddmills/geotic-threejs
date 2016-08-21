import geotic from 'geotic';

export default {
  update: (dt) => {
    const actors = geotic.findByComponent('bounds');

    actors.forEach(e => {
      e.bounds.recalculate();
      e.bounds.debug();
    });

    for (let i = 0; i < actors.length; i++) {
      const left = actors[i];

      for (let j = i+1; j < actors.length; j++) {
        const other = actors[j];

        left.bounds.compare(other);

        if (left.bounds.intersects(other)) {
          console.log('collision');
        }
      }
    }
  }
};
