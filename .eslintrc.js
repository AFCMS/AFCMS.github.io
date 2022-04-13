module.exports = {
	env: {
		browser: true,
		es6: true,
		jest: true,
	},
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: module,
	},
	rules: {
		indent: "off",
	},
	plugins: ["@typescript-eslint"],
	overrides: [
		{
			files: ["*.json"],
			extends: ["plugin:jsonc/recommended-with-json"],
			parser: "jsonc-eslint-parser",
			parserOptions: {
				jsonSyntax: "JSONC",
			},
		},
		{
			files: ["*.jsonc"],
			extends: ["plugin:jsonc/recommended-with-jsonc"],
			parser: "jsonc-eslint-parser",
			parserOptions: {
				jsonSyntax: "JSON",
			},
		},
		{
			files: ["*.json5"],
			extends: ["plugin:jsonc/recommended-with-json5"],
			parser: "jsonc-eslint-parser",
			parserOptions: {
				jsonSyntax: "JSON5",
			},
		},
	],
};
