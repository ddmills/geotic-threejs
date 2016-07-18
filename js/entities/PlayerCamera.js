import { Entity } from 'geotic';
import { PerspectiveCamera } from '../three/components';


export default class PlayerCamera extends Entity
{
  static create(id)
  {
    let width = window.innerWidth;
    let height = window.innerHeight;
    let camComponent = new PerspectiveCamera(45, (width / height), 0.1, 10000);
    camComponent.tag('playerCamera');

    camComponent.position.z = 0;
    camComponent.position.y = 160;
    camComponent.position.z = 400;

    let camera = new PlayerCamera(id);
    camera.addComponent(camComponent);

    window.addEventListener('resize', () => {
      PlayerCamera.onWindowResize(camComponent);
    }, false);

    return camera;
  }

  static onWindowResize(camera)
  {
    let width = window.innerWidth;
    let height = window.innerHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  }
}
