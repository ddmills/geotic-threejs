'use strict';

import { Component } from 'geotic';
import { PerspectiveCamera as ThreePerspectiveCamera } from 'three';
import ThreeJSObject from './ThreeJSObject';


export default class PerspectiveCamera extends ThreeJSObject
{
  constructor(...args)
  {
    super('perspectiveCamera', ThreePerspectiveCamera, args);
  }
}
