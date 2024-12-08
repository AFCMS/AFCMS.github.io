// @ts-check

import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import pluginTypescript from "typescript-eslint";

// noinspection JSCheckFunctionSignatures
export default pluginTypescript.config({
	files: ["src/**/*.{js,jsx,mjs,cjs,ts,tsx}"],
	languageOptions: { globals: globals.browser },
	extends: [js.configs.recommended, pluginTypescript.configs.recommended],
	plugins: { react: pluginReact },
});
