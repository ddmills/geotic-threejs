'use strict';

import { Component } from 'geotic';
import { PointLight } from 'three';
import ThreeJSComponent from './ThreeJSComponent';


export default class PointLightComponent extends ThreeJSComponent
{
  constructor(...args)
  {
    super('pointLight', PointLight, args);
  }
}
