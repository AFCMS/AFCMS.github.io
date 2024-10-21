// eslint-disable-next-line no-undef
module.exports = {
	extends: ["stylelint-config-standard"],
	customSyntax: "postcss-scss",
	rules: {
		"at-rule-no-unknown": [
			true,
			{
				ignoreAtRules: ["tailwind", "apply", "variants", "responsive", "screen", "layer"],
			},
		],
		"selector-class-pattern": false,
	},
	//ignoreFiles: ["/node_modules", "/build"],
};
