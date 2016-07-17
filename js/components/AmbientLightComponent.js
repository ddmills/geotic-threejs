'use strict';

import { Component } from 'geotic';
import { AmbientLight } from 'three';
import ThreeJSComponent from './ThreeJSComponent';

export default class AmbientLightComponent extends ThreeJSComponent
{
  constructor()
  {
    super('ambientLight');

    this.color = 0xffffff;
    this.asset = new AmbientLight(this.color);
  }
}
