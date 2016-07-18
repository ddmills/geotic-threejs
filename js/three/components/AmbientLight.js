'use strict';

import { Component } from 'geotic';
import { AmbientLight as ThreeAmbientLight } from 'three';
import ThreeJSObject from './ThreeJSObject';

export default class AmbientLight extends ThreeJSObject
{
  constructor(...args)
  {
    super('ambientLight', ThreeAmbientLight, args);
  }
}
