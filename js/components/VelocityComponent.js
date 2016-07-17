'use strict';

import { Component } from 'geotic';
import { Vector3 } from 'three';


export default class VelocityComponent extends Component
{
  constructor()
  {
    super('velocity');
    this.angular = new Vector3(0, 0, 0);
    this.positional = new Vector3(0, 0, 0);
  }
}
