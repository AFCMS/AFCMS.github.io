import { defineConfig } from "oxfmt";

export default defineConfig({
	printWidth: 120,
	ignorePatterns: ["**/node_modules/**", "**/dist/**", "**/build/**", "pnpm-lock.yaml"],
	trailingComma: "all",
	singleQuote: false,
	semi: true,
	sortTailwindcss: true,
	sortPackageJson: false,
});
