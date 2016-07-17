'use strict';

import { Component } from 'geotic';
import { Vector3 } from 'three';


export default class TransformComponent extends Component
{
  constructor()
  {
    super('transform');

    this.rotation = new Vector3(0.02, 0.05, 0.01);
    this.position = new Vector3(0, 0, 0);
    this.scaling = new Vector3(1, 1, 1);
  }
}
