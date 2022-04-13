module.exports = {
	extends: ["stylelint-config-standard", "stylelint-config-prettier"],
	customSyntax: "postcss-scss",
	rules: {
		"at-rule-no-unknown": [
			true,
			{
				ignoreAtRules: [
					"tailwind",
					"apply",
					"variants",
					"responsive",
					"screen",
					"layer",
				],
			},
		],
	},
	//ignoreFiles: ["/node_modules", "/build"],
};
