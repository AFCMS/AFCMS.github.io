import type { Config } from "tailwindcss";

export default {
	mode: "jit",
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {},
	},
	plugins: [],
	variants: {
		extend: {
			visibility: ["group-hover"],
		},
	},
} satisfies Config;
