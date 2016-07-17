'use strict';

import { Component } from 'geotic';
import ProxyComponent from './ProxyComponent';
import TransformComponent from './TransformComponent';


export default class ThreeJSComponent extends ProxyComponent
{
  mount(entity)
  {
    if (entity.transform == undefined) {
      entity.addComponent(new TransformComponent());
    }

    entity.transform.add(this.wrapped);
  }

  unmount(entity)
  {
    entity.transform.remove(this.wrapped);
  }
}
