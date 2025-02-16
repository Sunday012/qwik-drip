import js from "@eslint/js"
import eslintConfigPrettier from "eslint-config-prettier"
import onlyWarn from "eslint-plugin-only-warn"
import tseslint from "typescript-eslint"
import pluginReact from "eslint-plugin-react"
import pluginReactHooks from "eslint-plugin-react-hooks"
import globals from "globals"
import pluginRouter from "@tanstack/eslint-plugin-router"

/** @type {import("eslint").Linter.Config} */
export default config = [
  js.configs.recommended,
  eslintConfigPrettier,
  pluginReact.configs.flat.recommended,
  ...tseslint.configs.recommended,
  ...pluginRouter.configs["flat/recommended"],
  {
    languageOptions: {
      ...pluginReact.configs.flat.recommended.languageOptions,
      globals: {
        ...globals.serviceworker,
        ...globals.browser,
      },
    },
  },
  {
    plugins: {
      "react-hooks": pluginReactHooks,
      onlyWarn,
    },
    settings: { react: { version: "detect" } },
    rules: {
      ...pluginReactHooks.configs.recommended.rules,
      // React scope no longer necessary with new JSX transform.
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "@tanstack/query/exhaustive-deps": "error",
      "unicorn/filename-case": [
        "error",
        {
          case: "kebabCase",
          ignore: ["README.md", "__root.tsx", "routeTree.gen.ts"],
        },
      ],
    },
  },
  
 
  {
    ignores: ["dist/**"],
  },

];
