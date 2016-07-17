'use strict';

import { Component } from 'geotic';
import {
  MeshLambertMaterial,
  BoxBufferGeometry,
  Mesh
} from 'three';


export default class MeshComponent extends Component
{
  constructor()
  {
    super('mesh');

    this.geometry = new BoxBufferGeometry(200, 200, 200);
    this.material = new MeshLambertMaterial({
      color: 0xCC0000
    });

    this.mesh = new Mesh(this.geometry, this.material);
  }
}
