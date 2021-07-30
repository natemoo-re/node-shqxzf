// run `node index.js` in the terminal
let esbuild = require('esbuild-wasm');

async function run() {
  await esbuild.initialize();

  const result = await esbuild.transform('let x: number = 1', { loader: 'ts' });
  // esbuild.build(options).then(result => { ... })

  console.log(`${result.code}`);
}

run();
