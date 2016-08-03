import geotic from 'geotic';
import keymap from './keymap';

const keys = {};

document.addEventListener('keydown', e => {
  const ch = keymap[e.keyCode];
  keys[ch] = true;
});

document.addEventListener('keyup', e => {
  const ch = keymap[e.keyCode];
  keys[ch] = false;
});

const prox = new Proxy({}, {
  get: (target, name) => name in keys ? !!keys[name] : false
});

export default prox;
