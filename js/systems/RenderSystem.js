'use strict';

import { System } from 'geotic';
import { Scene, WebGLRenderer, PerspectiveCamera } from 'three';


export default class RenderSystem extends System
{
  constructor()
  {
    super();
    this.width = window.innerWidth;
    this.height = window.innerHeight;

    this.scene = new Scene();
    this.camera = new PerspectiveCamera(70, this.width / this.height, 1, 1000);
    this.renderer = new WebGLRenderer();
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(this.width, this.height);

    window.addEventListener('resize', this.onWindowResize.bind(this), false);
    document.body.appendChild(this.renderer.domElement);
  }

  update(world, time)
  {
    this.renderer.render(this.scene, this.camera);
  }

  onWindowResize()
  {
    this.camera.aspect = this.width / this.height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(this.width, this.height);
  }
}
