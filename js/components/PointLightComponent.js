'use strict';

import { Component } from 'geotic';
import { PointLight } from 'three';
import ThreeJSComponent from './ThreeJSComponent';


export default class PointLightComponent extends ThreeJSComponent
{
  constructor()
  {
    super('lamp');

    this.color = 0xffffff;
    this.asset = new PointLight(this.color);
  }
}
