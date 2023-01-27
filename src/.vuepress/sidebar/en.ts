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
      collapsible: true,
    },
    {
      text: "Practise",
      icon: "note",
      prefix: "practise/",
      children: "structure",
      collapsible: true,
    },
    {
      text: "Principle",
      icon: "note",
      prefix: "principle/",
      children: "structure",
      collapsible: true,
    },
    {
      text: "Methods",
      icon: "note",
      prefix: "method/",
      children: "structure",
      collapsible: true,
    },
    {
      text: "Design Patterns",
      icon: "note",
      prefix: "design-pattern/",
      children: "structure",
      collapsible: true,
    },
    {
      text: "Glossary",
      icon: "note",
      prefix: "glossary/",
      children: "structure",
      collapsible: true,
    },
    "slides",
  ],
});
