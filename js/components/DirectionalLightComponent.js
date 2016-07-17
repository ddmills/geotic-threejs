'use strict';

import { Component } from 'geotic';
import { DirectionalLight } from 'three';
import ThreeJSComponent from './ThreeJSComponent';

export default class DirectionalLightComponent extends ThreeJSComponent
{
  constructor(...args)
  {
    super('directionalLight', DirectionalLight, args);
  }
}
