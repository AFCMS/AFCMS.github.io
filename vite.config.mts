import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { imagetools } from "vite-imagetools";

export default defineConfig({
	build: {
		outDir: "build",
	},
	plugins: [react(), imagetools({
		defaultDirectives: new URLSearchParams("?format=webp&quality=100")
	})],
	assetsInclude: ["**/*.md"],
});
