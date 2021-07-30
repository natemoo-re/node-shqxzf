const fs = require('fs');
require('./exec');

async function init() {
    const go = new Go();
    const buf = fs.readFileSync('./tycho.wasm');
    await WebAssembly.instantiate(new Uint8Array(buf), go.importObject);
    return { BuildDocument: globalThis.BuildDocument };
}

module.exports = init;
