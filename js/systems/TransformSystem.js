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
    let entities = world.getEntities('transform', 'mesh');

    for (let [id, entity] of entities) {
      let mesh = entity.mesh.mesh;
      let transform = entity.transform;

      mesh.scale.x = transform.scale.x;
      mesh.scale.y = transform.scale.y;
      mesh.scale.z = transform.scale.z;

      mesh.rotation.x = transform.rotation.x;
      mesh.rotation.y = transform.rotation.y;
      mesh.rotation.z = transform.rotation.z;

      mesh.position.x = transform.position.x;
      mesh.position.y = transform.position.y;
      mesh.position.z = transform.position.z;
    }
  }

  onAttach(world)
  {
  }
}
