import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { imagetools } from "vite-imagetools";
import { VitePWA, VitePWAOptions } from "vite-plugin-pwa";

const pwaConfig: Partial<VitePWAOptions> = {
	registerType: "autoUpdate",
	manifest: {
		name: "AFCM's Website",
		short_name: "AFCM's Website",
		description: "AFCM's personal portfolio",
		icons:
			[
				{
					src: "pwa-64x64.png",
					sizes: "64x64",
					type: "image/png"
				},
				{
					src: "pwa-192x192.png",
					sizes: "192x192",
					type: "image/png"
				},
				{
					src: "pwa-512x512.png",
					sizes: "512x512",
					type: "image/png",
					purpose: "any"
				},
				{
					src: "maskable-icon-512x512.png",
					sizes: "512x512",
					type: "image/png",
					purpose: "maskable"
				}
			],
		theme_color: "#3465a4",
		background_color: "#f1f5f9",
		display: "minimal-ui",
		scope: "/",
		start_url: "/",
		orientation: "portrait"
	},
	workbox: {
		globPatterns: ["**/*.{js,css,html,png,webp}"]
	}
};

// noinspection JSUnusedGlobalSymbols
export default defineConfig({
	build: {
		outDir: "build"
	},
	plugins: [
		react(),
		imagetools({
			defaultDirectives: new URLSearchParams("?format=webp&quality=90")
		}),
		VitePWA(pwaConfig)],
	assetsInclude: ["**/*.md"]
});
