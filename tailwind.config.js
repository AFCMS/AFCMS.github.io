module.exports = {
	mode: "jit",
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {},
	},
	plugins: [],
	variants: {
		extend: {
			visibility: ["group-hover"],
		},
	},
}
