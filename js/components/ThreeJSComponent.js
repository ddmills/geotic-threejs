'use strict';

import { Component } from 'geotic';
import TransformComponent from './TransformComponent';


export default class ThreeJSComponent extends Component
{
  mount(entity)
  {
    if (entity.transform == undefined) {
      entity.addComponent(new TransformComponent());
    }

    console.log(`add ${this.name} to ${entity.id}`);

    entity.transform.add(this.asset);
  }

  unmount(entity)
  {
    entity.transform.remove(this.asset);
  }
}
