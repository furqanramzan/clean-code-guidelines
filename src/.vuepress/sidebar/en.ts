import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    {
      text: "Practise",
      icon: "note",
      prefix: "practise/",
      children: "structure",
      collapsible: true,
    },
    {
      text: "Principle",
      icon: "sitemap",
      prefix: "principle/",
      children: "structure",
      collapsible: true,
    },
    {
      text: "Methods",
      icon: "comment",
      prefix: "method/",
      children: "structure",
      collapsible: true,
    },
    {
      text: "Design Patterns",
      icon: "layout",
      prefix: "design-pattern/",
      children: "structure",
      collapsible: true,
    },
    {
      text: "Glossary",
      icon: "info",
      prefix: "glossary/",
      children: "structure",
      collapsible: true,
    },
  ],
});
