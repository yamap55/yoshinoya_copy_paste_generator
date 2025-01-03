import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier";
export default tseslint.config(
  {
    files: ["src/**/*.ts"],
    ignores: ["**/*.config.js", "!**/eslint.config.js"],
    rules: {
      semi: "error",
    },
  },
  eslint.configs.recommended,
  tseslint.configs.strict,
  tseslint.configs.stylistic,
  eslintConfigPrettier,
);
