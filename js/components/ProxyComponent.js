'use strict';

import { Component } from 'geotic';


export default class ProxyComponent extends Component
{
  constructor(name, wrapped)
  {
    super(name);
    this.wrapped = wrapped;

    return new Proxy(this, {
      get: (target, key) => {
        return key in target ? target[key] : target.wrapped[key];
      },
      set: (target, key, value) => {
        key in target ? target[key] = value : target.wrapped[key] = value;
        return true;
      },
      apply: (target, ctx, args) => {
        return Reflect.apply(...arguments)
      }
    });
  }
}
