import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as n,o as l,c as a,a as o,d as e,e as s,w as r,b as c}from"./app-46b4ffbb.js";const d={},h=o("h2",{id:"introduction",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#introduction","aria-hidden":"true"},"#"),e(" Introduction")],-1),u=o("p",null,"Coupling is the degree to which each module depends on other modules; a measure of how closely connected two modules are. We should strive to minimize coupling.",-1),p=c("<p>Tightly coupled modules have the following disadvantages:</p><ul><li><p>Change in one module might break another module.</p></li><li><p>Change in one module usually forces a ripple effect of changes in other modules.</p></li><li><p>Reusability decreases as dependency over other modules increases.</p></li><li><p>Assembly of modules might require more effort and/or time.</p></li></ul><p>Coupling can be reduced by:</p><ul><li><p>By hiding inner details and interacting through interfaces.</p></li><li><p>Avoid interacting with classes that it can avoid directly dealing with.</p></li></ul><p>Components in a loosely coupled system can be replaced with alternative implementations that provide the same services.</p>",5);function m(g,f){const t=n("RouterLink");return l(),a("div",null,[h,u,o("p",null,[e("Coupling is usually contrasted with "),s(t,{to:"/glossary/cohesion.html"},{default:r(()=>[e("cohesion")]),_:1}),e(". Low coupling often correlates with high cohesion and vice versa.")]),p])}const y=i(d,[["render",m],["__file","coupling.html.vue"]]);export{y as default};
