import 'babel-polyfill';
import { entity, component } from 'geotic';
import {
  MeshLambertMaterial as material,
  BoxBufferGeometry as cube,
  PlaneGeometry as plane,
  SphereGeometry as sphere
} from 'three';
import geotic from 'geotic';
import game from './game';
import systems from './systems';
import './components';

entity()
  .add('transform', { position: { y: 20 } })
  .add('mesh',
    new sphere(50, 16, 16),
    new material({ color: 0x8e98dd })
  );

entity()
  .add('transform', { position: { y: 20 } })
  .add('ground');

entity()
  .add('transform')
  .add('velocity', { x: .005 })
  .add('mesh',
    new cube(50, 50, 50),
    new material({ color: 0xbb2253 })
  );

let rotatingLamp = entity()
  .add('transform')
  .add('light', { type: 'directional' })
  .add('velocity', { angular: { x: 0, y: 0.005, z: 0 } });

let player = entity()
  .add('transform', { position: { z: 300 }})
  .add('camera');

entity()
  .add('transform')
  .add('light', { type: 'ambient', intensity: .7 })

rotatingLamp.c.light.position.z = 15;

game.start((dt) => {
  systems.renderer.update(dt);
  systems.velocity.update(dt);
});
