import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/clean-code-guidelines/",

  locales: {
    "/": {
      lang: "en-US",
      title: "Clean Code Guidelines",
      description: "A docs demo for vuepress-theme-hope",
    },
  },

  theme,

  shouldPrefetch: false,
});
