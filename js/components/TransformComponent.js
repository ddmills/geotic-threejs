'use strict';

import { Component } from 'geotic';
import { Object3D } from 'three';


export default class TransformComponent extends Component
{
  constructor()
  {
    super('transform');
    this.instance = new Object3D();
  }

  render(scene)
  {
    scene.add(this.instance);
  }
}
