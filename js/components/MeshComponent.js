'use strict';

import { Component } from 'geotic';
import ThreeJSComponent from './ThreeJSComponent';
import { Mesh } from 'three';


export default class MeshComponent extends ThreeJSComponent
{
  constructor(...args)
  {
    super('mesh', Mesh, args);
  }
}
