import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    "",
    {
      icon: "discover",
      text: "Demo",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
    {
      text: "Docs",
      icon: "note",
      prefix: "guide/",
      children: "structure",
    },
    {
      text: "Methods",
      icon: "note",
      prefix: "method/",
      children: "structure",
    },
    {
      text: "Practise",
      icon: "note",
      prefix: "practise/",
      children: "structure",
    },
    "slides",
  ],
});
