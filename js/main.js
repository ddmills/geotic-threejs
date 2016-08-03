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

const orb = entity()
  .add('mesh',
    new sphere(50, 16, 16),
    new material({ color: 0x8e98dd })
  );

const floor = entity().add('ground');

entity()
  .add('transform', { position: { x: 200, y: 25, z: 100 }})
  .add('velocity', { x: .0025, angular: {x: -.001, y: 0, z: -.001}})
  .add('mesh',
    new cube(50, 50, 50),
    new material({ color: 0xbb2253 })
  );

const rotatingLamp = entity()
  .add('light', { type: 'directional' })
  .add('velocity', { angular: { x: 0, y: 0.002, z: 0 } });

const player = entity()
  .add('controls')
  .add('mesh',
    new cube(50, 50, 50),
    new material({ color: 0xe7bcec })
  );

const camera = entity().add('camera');

entity().add('light', { type: 'ambient', intensity: .7 })

player.transform.position.x = -200;
player.transform.position.y = -5;
rotatingLamp.light.position.z = 15;
camera.transform.position.z = 300;
orb.transform.position.y = 20;
floor.transform.position.y = 20;

game.start((dt) => {
  systems.controls.update(dt);
  systems.renderer.update(dt);
  systems.velocity.update(dt);
});
