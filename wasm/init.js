const fs = require('fs');
const path = require('path');
require('./exec');

async function init() {
  const go = new Go();
  console.log(path.resolve('./tycho.wasm'));
  const buf = fs.readFileSync(path.resolve('./tycho.wasm'));
  await WebAssembly.instantiate(new Uint8Array(buf), go.importObject);
  return { BuildDocument: globalThis.BuildDocument };
}

module.exports = init;
