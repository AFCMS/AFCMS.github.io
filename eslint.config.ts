/// <reference types="@types/node" />

import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import e18e from "@e18e/eslint-plugin";
import pluginReact from "@eslint-react/eslint-plugin";
import pluginReactRefresh from "eslint-plugin-react-refresh";
import pluginReactHooks from "eslint-plugin-react-hooks";
import prettier from "eslint-config-prettier/flat";
import { defineConfig, globalIgnores } from "eslint/config";

const configBase = [js.configs.recommended, tseslint.configs.recommendedTypeChecked, prettier];

const configsReact = [
	js.configs.recommended,
	tseslint.configs.recommendedTypeChecked,
	e18e.configs.recommended,
	pluginReact.configs["recommended-typescript"],
	pluginReact.configs["disable-conflict-eslint-plugin-react-hooks"],
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
		rules: {},
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
