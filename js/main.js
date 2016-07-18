'use strict';

import 'babel-polyfill';
import * as Components from './components';
import * as Systems from './systems';
import * as gThree from './three';
import PlayerCamera from './entities/PlayerCamera';
import { World, Entity } from 'geotic';
import { MeshLambertMaterial, BoxBufferGeometry } from 'three';
import Game from './Game';


let _id = 0;
let id = () => ++_id;

let world = new World();
let box = new Entity(id());

let geom = new BoxBufferGeometry(200, 200, 200);
let mat = new MeshLambertMaterial({ color: 0xCC0000 });
box.addComponent(new gThree.components.Mesh(geom, mat));
box.addComponent(new gThree.components.Transform());
box.addComponent(new gThree.components.PointLight());
box.addComponent(new Components.Velocity());


box.velocity.angular.z = 0.007;
box.velocity.angular.y = -0.02;
box.velocity.angular.y = 0.06;
box.transform.position.y = 170;

let ambientLight = new Entity(id());
ambientLight.addComponent(new gThree.components.AmbientLight());

let directionalLight = new Entity(id());
directionalLight.addComponent(new gThree.components.DirectionalLight());

let playerCamera = PlayerCamera.create(id());
world.addEntity(playerCamera);

world.addSystem(new Systems.VelocitySystem());
world.addSystem(new gThree.systems.RenderSystem());

world.addEntity(box);
world.addEntity(ambientLight);
world.addEntity(directionalLight);

Game.start(world);
