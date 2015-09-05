import thinkyFactory from 'thinky';

const thinky = thinkyFactory({
  // thinky's options
  db: 'dev'
});

const type = thinky.type;

export { thinky, type };
