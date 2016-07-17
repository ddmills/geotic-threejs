'use strict';

import { System } from 'geotic';


export default class VelocitySystem extends System
{
  update(world, time)
  {
    let entities = world.getEntities('transform', 'velocity');

    for (let [id, entity] of entities) {
      entity.transform.instance.rotation.x += entity.velocity.angular.x * time;
      entity.transform.instance.rotation.y += entity.velocity.angular.y * time;
      entity.transform.instance.rotation.z += entity.velocity.angular.z * time;

      entity.transform.instance.position.x += entity.velocity.positional.x * time;
      entity.transform.instance.position.y += entity.velocity.positional.y * time;
      entity.transform.instance.position.z += entity.velocity.positional.z * time;
    }
  }
}
