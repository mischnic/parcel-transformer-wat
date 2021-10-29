# `parcel-transformer-wat`

A Parcel transformer to convert WAT (WebAssembly Text Format) assets into (binary) `.wasm` using https://github.com/AssemblyScript/wabt.js

## Usage:

Add a `.parcelrc` with

```json
{
	"extends": "@parcel/config-default",
	"transformers": {
		"*.wat": ["parcel-transformer-wat"]
	}
}
```

Now using a `wat` file behaves just like the corresponding `wat` file

```js
await WebAssembly.instantiateStreaming(
	fetch(new URL("./test.wat", import.meta.url))
);
```
