'use strict';

import ProxyComponent from './ProxyComponent';
import { Object3D } from 'three';


export default class TransformComponent extends ProxyComponent
{
  constructor(...args)
  {
    super('transform', Object3D, args);
    this.object3d = this.wrapped;
  }
}
