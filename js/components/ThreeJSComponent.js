'use strict';

import { Component } from 'geotic';
import TransformComponent from './TransformComponent';


export default class ThreeJSComponent extends Component
{
  constructor(name)
  {
    super(name);
  }

  mount(entity)
  {
    if (entity.transform == undefined) {
      entity.addComponent(new TransformComponent());
    }

    entity.transform.instance.add(this.asset);
  }
}
