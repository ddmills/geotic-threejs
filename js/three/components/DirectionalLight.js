'use strict';

import { Component } from 'geotic';
import { DirectionalLight as ThreeDirectionalLight } from 'three';
import ThreeJSObject from './ThreeJSObject';

export default class DirectionalLight extends ThreeJSObject
{
  constructor(...args)
  {
    super('directionalLight', ThreeDirectionalLight, args);
  }
}
