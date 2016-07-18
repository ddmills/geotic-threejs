'use strict';

import { Component } from 'geotic';
import { Mesh as ThreeMesh } from 'three';
import ThreeJSObject from './ThreeJSObject';


export default class Mesh extends ThreeJSObject
{
  constructor(...args)
  {
    super('mesh', ThreeMesh, args);
  }
}
