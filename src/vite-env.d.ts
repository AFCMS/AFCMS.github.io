/// <reference types="vite/client" />
/// <reference types="vite-plugin-pwa/react" />

/**
 * This is a hack to make vite-imagetools work with typescript.
 */
declare module "*&imagetools" {
	const out;
	// noinspection JSUnusedGlobalSymbols
	export default out;
}
