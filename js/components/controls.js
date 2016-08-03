import { component } from 'geotic';

component('controls', (entity, data = {}) => {
  let speed = data.speed || .1;
  entity.mandate('velocity');
  return { speed };
});
