import { type Config } from "prettier";

const config: Config = {
	plugins: ["prettier-plugin-tailwindcss"],
	// Keep indentation settings in .editorconfig; Prettier CLI reads it by default
	// Prettier does not read max_line_length from .editorconfig
	// Keep in sync with .editorconfig's max_line_length (120)
	printWidth: 120,
	trailingComma: "all",
	singleQuote: false,
	semi: true,
};

export default config;
