'use strict';

import { Component } from 'geotic';
import {
  MeshBasicMaterial,
  BoxBufferGeometry,
  Mesh
} from 'three';


export default class MeshComponent extends Component
{
  constructor()
  {
    super('mesh');

    let geometry = new BoxBufferGeometry(200, 200, 200);
    this.mesh = new Mesh(geometry);
  }
}
