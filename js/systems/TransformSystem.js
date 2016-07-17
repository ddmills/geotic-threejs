'use strict';

import { System } from 'geotic';


export default class TransformSystem extends System
{
  constructor()
  {
    super();
  }

  update(world, time)
  {
    let entities = world.getEntities('transform');

    for (let [id, entity] of entities) {
      let x = entity.transform.rotation.x * time / 100;
      let y = entity.transform.rotation.y * time / 100;
      let z = entity.transform.rotation.z * time / 100;
      entity.mesh.geometry.rotateX(y);
      entity.mesh.geometry.rotateY(y);
      entity.mesh.geometry.rotateZ(y);
    }
  }

  onAttach(world)
  {
  //   let signature = world.getSignature('mesh');
  //
  //   signature.on('entity-added', (entity) => {
  //     this.scene.add(entity.mesh.mesh);
  //   });
  //
  //   world.getSignature('mesh').on('entity-removed', (entity) => {
  //     console.log(`removed an entity with a mesh component... ${entity.id}`);
  //   });
  }

}
