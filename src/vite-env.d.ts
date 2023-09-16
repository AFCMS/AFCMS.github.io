/// <reference types="vite/client" />

/**
 * This is a hack to make vite-imagetools work with typescript.
 */
declare module "*&imagetools" {
	const out;
	export default out;
}
