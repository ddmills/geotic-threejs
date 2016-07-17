'use strict';

import { Component } from 'geotic';
import { DirectionalLight } from 'three';
import ThreeJSComponent from './ThreeJSComponent';

export default class DirectionalLightComponent extends ThreeJSComponent
{
  constructor()
  {
    super('lamp');

    this.color = 0xffffff;
    this.asset = new DirectionalLight(this.color);
  }
}
