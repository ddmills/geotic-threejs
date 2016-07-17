'use strict';

import { System } from 'geotic';


export default class VelocitySystem extends System
{
  constructor()
  {
    super();
  }

  update(world, time)
  {
    let entities = world.getEntities('transform', 'velocity');

    for (let [id, entity] of entities) {
      entity.transform.rotation.x += entity.velocity.angular.x * time;
      entity.transform.rotation.y += entity.velocity.angular.y * time;
      entity.transform.rotation.z += entity.velocity.angular.z * time;

      entity.transform.position.x += entity.velocity.positional.x * time;
      entity.transform.position.y += entity.velocity.positional.y * time;
      entity.transform.position.z += entity.velocity.positional.z * time;
    }
  }

  onAttach(world)
  {
  }
}
