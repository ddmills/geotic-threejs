'use strict';

import 'babel-polyfill';

import {
  MeshComponent,
  VelocityComponent,
  TransformComponent
} from './components';

import {
  RenderSystem,
  VelocitySystem,
  TransformSystem
} from './systems';

import { World, Entity } from 'geotic';
import Game from './Game';


let world = new World();
let entity = new Entity(1);

entity.addComponent(new MeshComponent());
entity.addComponent(new TransformComponent());
entity.addComponent(new VelocityComponent());

entity.velocity.angular.z = 0.007;
entity.velocity.angular.y = -0.02;
entity.velocity.angular.y = 0.06;
entity.transform.position.y = 25;

world.addSystem(new TransformSystem());
world.addSystem(new VelocitySystem());
world.addSystem(new RenderSystem());

world.addEntity(entity);

Game.start(world);
