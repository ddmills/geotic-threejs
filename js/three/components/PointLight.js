'use strict';

import { Component } from 'geotic';
import { PointLight as ThreePointLight } from 'three';
import ThreeJSObject from './ThreeJSObject';


export default class PointLight extends ThreeJSObject
{
  constructor(...args)
  {
    super('pointLight', ThreePointLight, args);
  }
}
