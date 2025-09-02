const typescriptParser = require("@typescript-eslint/parser");
const nextPlugin = require("@next/eslint-plugin-next");
const reactPlugin = require("eslint-plugin-react");
const reactHooksPlugin = require("eslint-plugin-react-hooks");

module.exports = [
  {
    ignores: [
      ".next/**",
      "out/**",
      "dist/**", 
      "build/**",
      "node_modules/**",
      "*.log",
      ".DS_Store",
      "Thumbs.db",
      ".vscode/**",
      ".idea/**",
      ".env*",
      "*.tmp",
      "*.temp"
    ]
  },
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      "@next/next": nextPlugin,
      "react": reactPlugin,
      "react-hooks": reactHooksPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
      "react/no-unescaped-entities": "off",
      "@next/next/no-img-element": "off", // Disable img warnings for this presentation app
    },
  },
];