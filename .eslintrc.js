module.exports = {
	root: true,
	env: {
		node: true,
		jquery: true,
	},
	extends: [
		"eslint:recommended",
		"plugin:vue/essential",
		"@vue/standard",
		"@vue/typescript/recommended",
	],
	ignorePatterns: [
		"/**/node_modules/*",
		"dist/",
		"src/json/",
	],
	parserOptions: {
		ecmaVersion: 2020,
		ecmaFeatures: {
			jsx: true,
		},
	},
	overrides: [
		{
			files: ["*.js"],
			rules: {
				"@typescript-eslint/no-var-requires": "off",
			},
		},
		{
			files: ["src/Defines/**/*.ts"],
			rules: {
				camelcase: "off",
			},
		},
		{
			files: ["src/Libs/**/*.ts"],
			rules: {
				"no-extend-native": "off",
			},
		},
	],
	rules: {
		semi: "off",
		"@typescript-eslint/semi": "error",

		"no-unexpected-multiline": "warn",
		"no-extra-semi": "warn",

		quotes: ["warn", "double"],
		"no-tabs": "off",

		indent: ["warn", "tab", {
			SwitchCase: 1,
		}],

		"no-dupe-class-members": "off",
		"@typescript-eslint/no-dupe-class-members": "error",

		"no-useless-constructor": "off",
		"@typescript-eslint/no-useless-constructor": "error",

		"no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
		"no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",

		"@typescript-eslint/explicit-module-boundary-types": "off",

		camelcase: "warn",
		"@typescript-eslint/camelcase": "off",

		"no-unused-expressions": "off",
		"@typescript-eslint/no-unused-expressions": "error",

		"comma-dangle": ["warn", "always-multiline"],

		"@typescript-eslint/interface-name-prefix": "off",
		"@typescript-eslint/no-empty-interface": "off",

		"no-unused-vars": "off",
		"@typescript-eslint/no-unused-vars": "off",

		"newline-per-chained-call": "warn",

		"import/order": "off",
		"sort-keys": "off",

		"no-multiple-empty-lines": "off",

		curly: ["warn", "multi-or-nest"],

		"@typescript-eslint/no-inferrable-types": ["error", {
			ignoreParameters: true,
			ignoreProperties: true,
		}],

		"max-len": ["warn", {
			code: 150,
			tabWidth: 4,
		}],

		"@typescript-eslint/ban-ts-ignore": "off",
		"@typescript-eslint/no-explicit-any": "off",

		// "prefer-arrow/prefer-arrow-functions": "off",

		// "no-bitwise": "off",

		// no-empty: false
		"no-empty": "off",

		"@typescript-eslint/ban-types": [
			"warn",
			{
				types: {
					Object: { message: "Avoid using the `Object` type. Did you mean `object`?" },
					Function: { message: "Avoid using the `Function` type. Prefer a specific function type, like `() => void`." },
					Boolean: { message: "Avoid using the `Boolean` type. Did you mean `boolean`?" },
					Number: { message: "Avoid using the `Number` type. Did you mean `number`?" },
					String: { message: "Avoid using the `String` type. Did you mean `string`?" },
					Symbol: { message: "Avoid using the `Symbol` type. Did you mean `symbol`?" },
				},
			},
		],
	},
};
