// noinspection JSCheckFunctionSignatures
/*export default pluginTypescript.config({
	files: ["src/**/ /*.{js,jsx,mjs,cjs,ts,tsx}"],
	languageOptions: { globals: globals.browser },
	extends: [js.configs.recommended, pluginTypescript.configs.recommended],
	plugins: { react: pluginReact },
});*/

/// <reference types="@types/node" />

import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginReactRefresh from "eslint-plugin-react-refresh";
import pluginReactHooks from "eslint-plugin-react-hooks";
import prettier from "eslint-config-prettier/flat";
import { defineConfig, globalIgnores } from "eslint/config";

const configBase = [js.configs.recommended, tseslint.configs.recommendedTypeChecked, prettier];

const configsReact = [
	js.configs.recommended,
	tseslint.configs.recommendedTypeChecked,
	pluginReact.configs.flat.recommended,
	pluginReactRefresh.configs.vite,
	pluginReactHooks.configs.flat["recommended-latest"],
	prettier,
];

export default defineConfig([
	globalIgnores(["node_modules", "**/dist"]),

	{
		files: ["src/**/*.{ts,tsx}"],
		ignores: [],
		extends: configsReact,
		languageOptions: {
			globals: { ...globals.node },
			ecmaVersion: 2020,
			parserOptions: {
				project: "./tsconfig.app.json",
				tsconfigRootDir: import.meta.dirname,
			},
		},
		settings: {
			react: {
				version: "detect",
			},
		},
		rules: {
			"react/react-in-jsx-scope": "off",
			"react/no-unescaped-entities": "off",
			"react/no-unknown-property": [
				"error",
				{ ignore: ["class", "stroke-width", "stroke-linecap", "stroke-linejoin"] },
			],
		},
	},
	{
		files: ["vite.config.ts"],
		extends: configBase,
		languageOptions: {
			globals: { ...globals.node },
			ecmaVersion: 2020,
			parserOptions: {
				project: "./tsconfig.node.json",
				tsconfigRootDir: import.meta.dirname,
			},
		},
	},
]);
