'use strict';

import 'babel-polyfill';
import * as Components from './components';
import * as Systems from './systems';
import { World, Entity } from 'geotic';
import { MeshLambertMaterial, BoxBufferGeometry } from 'three';
import Game from './Game';


let _id = 0;
let id = () => ++_id;

let world = new World();
let box = new Entity(id());


let geom = new BoxBufferGeometry(200, 200, 200);
let mat = new MeshLambertMaterial({ color: 0xCC0000 });
box.addComponent(new Components.MeshComponent(geom, mat));
box.addComponent(new Components.TransformComponent());
box.addComponent(new Components.VelocityComponent());
box.addComponent(new Components.PointLightComponent());

box.velocity.angular.z = 0.007;
box.velocity.angular.y = -0.02;
box.velocity.angular.y = 0.06;
box.transform.position.y = 25;

let ambientLight = new Entity(id());
ambientLight.addComponent(new Components.AmbientLightComponent());

let directionalLight = new Entity(id());
directionalLight.addComponent(new Components.DirectionalLightComponent());


world.addSystem(new Systems.VelocitySystem());
world.addSystem(new Systems.RenderSystem());

world.addEntity(box);
world.addEntity(ambientLight);
world.addEntity(directionalLight);

Game.start(world);
