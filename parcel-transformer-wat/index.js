const wabtPromise = require("wabt");
const path = require("path");
const { Buffer } = require("buffer");

const { Transformer } = require("@parcel/plugin");

module.exports = new Transformer({
	async transform({ asset, logger }) {
		const wabt = await wabtPromise();
		const mod = wabt.parseWat(
			path.basename(asset.filePath),
			await asset.getCode()
		);
		const binary = mod.toBinary({});

		asset.type = "wasm";
		asset.setBuffer(Buffer.from(binary.buffer));
		return [asset];
	},
});
