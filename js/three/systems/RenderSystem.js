'use strict';

import { System } from 'geotic';
import { Scene, WebGLRenderer } from 'three';

export default class RenderSystem extends System
{
  constructor()
  {
    super();

    this.width = window.innerWidth;
    this.height = window.innerHeight;

    this.scene = new Scene();

    this.renderer = new WebGLRenderer();
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(this.width, this.height);

    document.body.appendChild(this.renderer.domElement);
    window.addEventListener('resize', this.onWindowResize.bind(this), false);
  }

  update(world, time)
  {
    if (this.camera) {
      this.renderer.render(this.scene, this.camera);
    }
  }

  onWindowResize()
  {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.renderer.setSize(this.width, this.height);
  }

  onAttach(world)
  {
    let signature = world.getSignature('transform');

    let cameraEntities = world.getTagged('playerCamera');

    for (let [id, entity] of cameraEntities) {
      let camera = entity.getComponentsWithTag('playerCamera')[0];
      if (camera) {
        this.camera = camera;
      }
    }

    for (let [id, entity] of signature.entities) {
      this.scene.add(entity.transform);
    }

    signature.on('entity-added', (entity) => {
      this.scene.add(entity.transform);
    });

    signature.on('entity-removed', (entity) => {
      this.scene.remove(entity.transform);
    });
  }
}
