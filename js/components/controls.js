import { component } from 'geotic';

component('controls', (entity, config={}) => {
  const controls = Object.assign({ speed: .25, rotation: 0.002 }, config);
  entity.mandate('velocity');
  return controls;
});
