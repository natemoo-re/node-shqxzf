const fs = require('fs');
const path = require('path');
require('./exec');

async function init() {
  const go = new Go();
  const src = path.resolve('wasm/tycho.wasm');
  console.log(src);
  const buf = fs.readFileSync(src);
  await WebAssembly.instantiate(new Uint8Array(buf), go.importObject);
  return { BuildDocument: globalThis.BuildDocument };
}

module.exports = init;
