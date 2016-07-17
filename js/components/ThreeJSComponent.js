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

    entity.transform.instance.add(this.asset);
  }

  unmount(entity)
  {
    entity.transform.instance.remove(this.asset);
  }
}
