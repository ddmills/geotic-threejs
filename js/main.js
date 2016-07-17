import 'babel-polyfill'
import { MeshComponent } from './components';
import { RenderSystem } from './systems';
import { World } from 'geotic';
import Game from './Game';

let world = new World();

world.addSystem(new RenderSystem());

Game.start(world);
