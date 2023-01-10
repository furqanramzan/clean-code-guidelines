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
      text: "Practise",
      icon: "note",
      prefix: "practise/",
      children: "structure",
    },
    {
      text: "Principle",
      icon: "note",
      prefix: "principle/",
      children: "structure",
    },
    {
      text: "Methods",
      icon: "note",
      prefix: "method/",
      children: "structure",
    },
    {
      text: "Design Patterns",
      icon: "note",
      prefix: "design-pattern/",
      children: "structure",
    },
    {
      text: "Glossary",
      icon: "note",
      prefix: "glossary/",
      children: "structure",
    },
    "slides",
  ],
});
