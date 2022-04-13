module.exports = {
	rules: {
		indent: "off",
	},
	overrides: [
		{
			files: ["*-test.js", "*.spec.js"],
			rules: {
				"no-unused-expressions": "off",
			},
		},
	],
};
