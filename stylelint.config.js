module.exports = {
	extends: ["stylelint-config-standard"],
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
