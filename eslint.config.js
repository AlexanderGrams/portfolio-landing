import js from "@eslint/js";
import globals from "globals";
import vue from "eslint-plugin-vue";
import vueParser from "vue-eslint-parser";
import tseslint from "typescript-eslint";

export default [
  // игноры сразу
  { ignores: ["dist/**", "node_modules/**"] },

  // базовые JS правила
  js.configs.recommended,

  // Vue: берём essential (минимум, без стилистического занудства)
  ...vue.configs["flat/essential"],

  // TS: базовые правила (без type-aware, чтобы не требовал tsconfig-настроек)
  ...tseslint.configs.recommended,

  // общие настройки для браузера
  {
    files: ["**/*.{js,ts,vue}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: globals.browser,
    },
    rules: {
      "no-console": "off",
      "no-debugger": "warn",

      // Vue: отключаем правила, которые постоянно мешают с Tailwind-разметкой
      "vue/first-attribute-linebreak": "off",
      "vue/max-attributes-per-line": "off",
      "vue/singleline-html-element-content-newline": "off",
      "vue/multiline-html-element-content-newline": "off",

      // чтобы не ругался на однословные компоненты типа App, Hero и т.п.
      "vue/multi-word-component-names": "off",
    },
  },

  // парсер для .vue, чтобы не было "'>' expected"
  {
    files: ["**/*.vue"],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        parser: tseslint.parser,
      },
    },
  },

  // Node окружение для конфигов/скриптов
  {
    files: [
      "vite.config.*",
      "eslint.config.*",
      "*.config.*",
      "scripts/**/*.{js,ts}",
    ],
    languageOptions: { globals: globals.node },
  },
];
