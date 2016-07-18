'use strict';

import { Component } from 'geotic';
import ProxyComponent from './ProxyComponent';
import Transform from './Transform';


export default class ThreeJSObject extends ProxyComponent
{
  mount(entity)
  {
    if (entity.transform == undefined) {
      entity.addComponent(new Transform());
    }

    entity.transform.add(this.wrapped);
  }

  unmount(entity)
  {
    entity.transform.remove(this.wrapped);
  }
}
