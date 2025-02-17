import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import tailwindcss from "@tailwindcss/vite";

import { imagetools } from "vite-imagetools";
import { VitePWA, VitePWAOptions } from "vite-plugin-pwa";

const pwaConfig: Partial<VitePWAOptions> = {
	registerType: "autoUpdate",
	manifest: {
		id: "afcms-portfolio",
		name: "AFCMS • Portfolio",
		short_name: "AFCMS • Portfolio",
		description: "AFCMS' personal portfolio",
		screenshots: [],
		categories: ["business", "entertainment", "games", "social"],
		dir: "ltr",
		icons: [
			{
				src: "pwa-64x64.png",
				sizes: "64x64",
				type: "image/png",
			},
			{
				src: "pwa-192x192.png",
				sizes: "192x192",
				type: "image/png",
			},
			{
				src: "pwa-512x512.png",
				sizes: "512x512",
				type: "image/png",
				purpose: "any",
			},
			{
				src: "maskable-icon-512x512.png",
				sizes: "512x512",
				type: "image/png",
				purpose: "maskable",
			},
		],
		theme_color: "#3465a4",
		background_color: "#f1f5f9",
		display: "minimal-ui",
		scope: "/",
		start_url: "/",
		orientation: "portrait",
	},
	workbox: {
		globPatterns: ["**/*.{js,css,html,png,webp}"],
		clientsClaim: true,
		skipWaiting: true,
	},
};

// noinspection JSUnusedGlobalSymbols
export default defineConfig({
	build: {
		outDir: "build",
	},
	plugins: [
		preact(),
		imagetools({
			defaultDirectives: new URLSearchParams("?format=webp&quality=90"),
		}),
		tailwindcss(),
		VitePWA(pwaConfig),
	],
	assetsInclude: ["**/*.md"],
});
