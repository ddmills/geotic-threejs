import {
  AmbientLight,
  DirectionalLight,
  HemisphereLight,
  PointLight,
  SpotLight
} from 'three';
import { component } from 'geotic';

component('light', (entity, data={}) => {
  const type = data.type || 'point';
  const intensity = data.intensity || 1;
  const color = data.color || 0XFFFFFF;
  const sky = data.sky || 0XFFFFFF;
  const ground = data.ground || 0XFFFFFF;
  const distance = data.distance || 0;
  const decay = data.decay || 1;

  let light;

  switch (type) {
    case 'ambient':
      light = new AmbientLight(color, intensity);
      break;
    case 'directional':
      light = new DirectionalLight(color, intensity);
      break;
    case 'hemisphere':
      light = new HemisphereLight(sky, ground, intensity);
      break;
    case 'spot':
      light = new SpotLight(color, intensity);
      break;
    case 'point':
    default:
      light = new PointLight(color, intensity);
      break;
  }

  entity.c.transform.add(light);
  return light;
});
