export default class Game
{
  static start(world)
  {
    let now = Date.now();
    let loop = function() {
      requestAnimationFrame(loop);

      let prev = now;
      now = Date.now();

      world.update(now - prev);
    }

    loop();
  }
}
