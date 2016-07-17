'use strict';

import { Component } from 'geotic';
import { AmbientLight } from 'three';
import ThreeJSComponent from './ThreeJSComponent';

export default class AmbientLightComponent extends ThreeJSComponent
{
  constructor(...args)
  {
    super('ambientLight', AmbientLight, args);
  }
}
