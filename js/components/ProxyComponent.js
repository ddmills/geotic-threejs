'use strict';

import { Component } from 'geotic';


export default class ProxyComponent extends Component
{
  constructor(name, Wrapped, args)
  {
    super(name);

    let self = this;
    this.wrapped = new Wrapped(...args);
    this.wrapped.name = this.name;
    this.wrapped.original = this;

    let proxy = {
      get: (target, key) => {
        return key in target ? target[key] : self[key];
      },
      set: (target, key, value) => {
        key in target ? target[key] = value : self[key] = value;
        return true;
      },
      apply: (target, ctx, args) => {
        return Reflect.apply(...args);
      }
    };

    return new Proxy(this.wrapped, proxy);
  }
}
