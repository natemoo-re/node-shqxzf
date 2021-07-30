// run `node index.js` in the terminal
// let esbuild = require('esbuild-wasm');
let init = require('./wasm/init');

async function run() {
  const Tycho = await init();
  const doc = Tycho.BuildDocument('<h1>Hello world</h1>');
  console.log(doc);
  // await esbuild.initialize();

  // const result = await esbuild.transform('let x: number = 1', { loader: 'ts' });
  // esbuild.build(options).then(result => { ... })
}

run();
