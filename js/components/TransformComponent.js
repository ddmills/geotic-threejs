'use strict';

import ProxyComponent from './ProxyComponent';
import { Object3D } from 'three';


export default class TransformComponent extends ProxyComponent
{
  constructor()
  {
    let object3d = new Object3D();
    super('transform', object3d);
    this.object3d = object3d;
  }
}
