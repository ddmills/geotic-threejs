export default class game
{
  static start(fn)
  {
    let now = Date.now();
    const speed = 1;
    const loop = () => {
      requestAnimationFrame(loop);
      const prev = now;
      now = Date.now();
      const dt = (now - prev) * speed;
      fn(dt);
    }

    loop();
  }
}
