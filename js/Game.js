export default class Game
{
  static start(world)
  {
    let speed = .01
    let now = Date.now();
    let loop = function() {
      requestAnimationFrame(loop);

      let prev = now;
      now = Date.now();

      world.update((now - prev) * speed);
    }

    loop();
  }
}
