import { Plugin } from "vite";

import { embed } from "./discord-embed-def.ts";

export function discordEmbed(): Plugin {
	return {
		name: "discord-embed",
		generateBundle() {
			this.emitFile({
				type: "asset",
				fileName: "discord-embed.json",
				source: JSON.stringify({ component: embed }),
			});
		},
	};
}
