import { Scene, WebGLRenderer } from 'three';

class Renderer extends WebGLRenderer {
  constructor() {
    super();
    this.setPixelRatio(window.devicePixelRatio);
    this.onWindowResize();
    this.scene = new Scene();
    document.body.appendChild(this.domElement);
    window.addEventListener('resize', this.onWindowResize.bind(this), false);
  }

  add(entity) {
    this.scene.add(entity.c.transform);
  }

  update(dt) {
    if (this.camera) {
      this.render(this.scene, this.camera);
    }
  }

  onWindowResize() {
    this.setSize(window.innerWidth, window.innerHeight);
  }
}

export default (new Renderer());
