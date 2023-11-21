module.exports = {
	parser: "@typescript-eslint/parser",
	rules: {
		indent: "off",
	},
	plugins: ["@typescript-eslint"],
	overrides: [
		{
			files: ["*.json"],
			extends: ["plugin:jsonc/recommended-with-jsonc"],
			parser: "jsonc-eslint-parser",
			parserOptions: {
				jsonSyntax: "JSON",
			},
		},
	],
};
