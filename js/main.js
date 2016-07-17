'use strict';

import 'babel-polyfill';
import { MeshComponent, TransformComponent } from './components';
import { RenderSystem, TransformSystem } from './systems';
import { World, Entity } from 'geotic';
import Game from './Game';


let world = new World();
let entity = new Entity(1);

entity.addComponent(new MeshComponent());
entity.addComponent(new TransformComponent());

world.addSystem(new TransformSystem());
world.addSystem(new RenderSystem());
world.addEntity(entity);

console.log(world.getSignature('transform'));
console.log(world.getEntities('transform'));

Game.start(world);
