'use strict';

import { System } from 'geotic';
import {
  Scene,
  Vector3,
  WebGLRenderer,
  PerspectiveCamera
} from 'three';

export default class RenderSystem extends System
{
  constructor()
  {
    super();

    this.width = window.innerWidth;
    this.height = window.innerHeight;

    this.scene = new Scene();
    this.camera = new PerspectiveCamera(45, (this.width / this.height), 0.1, 10000);

    this.camera.position.z = 0;
    this.camera.position.y = 160;
    this.camera.position.z = 400;

    this.scene.add(this.camera);
    this.camera.lookAt(new Vector3(0, 0, 0));

    this.renderer = new WebGLRenderer();
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(this.width, this.height);

    document.body.appendChild(this.renderer.domElement);
    window.addEventListener('resize', this.onWindowResize.bind(this), false);
  }

  update(world, time)
  {
    this.renderer.render(this.scene, this.camera);
  }

  onWindowResize()
  {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.camera.aspect = this.width / this.height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(this.width, this.height);
  }

  onAttach(world)
  {
    let signature = world.getSignature('transform');

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
