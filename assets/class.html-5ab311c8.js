import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as l,c as h,a as e,d as a,e as t,w as i,b as d}from"./app-46b4ffbb.js";const r={},c=d('<h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><p>Classes bind related data and expose functions that operate on that data. This helps make the code more organized.</p><p>There are many design principles and patterns that can help make our code better organized. Let&#39;s look at some rules which can help us design better classes:</p><h2 id="organized-and-encapsulated" tabindex="-1"><a class="header-anchor" href="#organized-and-encapsulated" aria-hidden="true">#</a> Organized and Encapsulated</h2><p>A class should keep all data attributes and utility functions private. Only the functions that are supposed to be exposed should be kept public.</p><p>A class should be ordered like this:</p><ul><li><p>Start with the variables</p><ul><li><p>public static constants</p></li><li><p>followed by private static attributes</p></li><li><p>followed by private instance attributes</p></li></ul></li><li><p>followed by public functions</p></li><li><p>private utility function just after the public function that calls it</p></li></ul><h2 id="should-be-small-and-should-do-just-one-thing" tabindex="-1"><a class="header-anchor" href="#should-be-small-and-should-do-just-one-thing" aria-hidden="true">#</a> Should be small and should do Just One Thing</h2><p>A class should be very small. Different experts have different views on &quot;how small?&quot;. Based on most of the views, a class should be small enough that it does just one thing. In general, it should have less than 20 functions.</p><p>If a class does more than one thing then it should be broken down into different classes each of which does a single thing.</p><h2 id="small-number-of-instance-variables" tabindex="-1"><a class="header-anchor" href="#small-number-of-instance-variables" aria-hidden="true">#</a> Small Number of Instance Variables</h2>',11),u=e("p",null,"A maximal cohesive class is one in which all functions work with all the instance variables. Achieving that is pretty difficult. We should try to make our classes as cohesive as possible. This can be done by having a smaller number of instance variables such that each function in the class work with as many of the instance variables as possible. This can be done by splitting the class into multiple classes based on the responsibility of each class.",-1),p=e("h2",{id:"hide-implementation-details",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#hide-implementation-details","aria-hidden":"true"},"#"),a(" Hide Implementation Details")],-1),b=e("p",null,"Hiding implementation details helps to make changes in a class without making changes in the other one using that class. This can be achieved by creating interfaces and using them instead of the concrete classes.",-1),m=e("p",null,"Encapsulation with proper access management should also be done to expose only the required public functions.",-1),f=e("h2",{id:"minimize-coupling",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#minimize-coupling","aria-hidden":"true"},"#"),a(" Minimize Coupling")],-1),g=e("h2",{id:"base-class-must-know-nothing-about-derivatives",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#base-class-must-know-nothing-about-derivatives","aria-hidden":"true"},"#"),a(" Base Class must know Nothing about Derivatives")],-1),v=e("p",null,"The base class must know nothing about its derivatives because it promotes loose coupling between classes. This means that changes to a derived class will not affect the base class and vice versa. This makes the code more flexible and easier to maintain, as changes in one part of the code do not propagate and cause unexpected behavior in other parts. Additionally, it allows for more flexibility in how the derived classes can be used, as they are not tightly bound to the base class and can be used in a variety of contexts.",-1),_=e("h2",{id:"use-access-modifier",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#use-access-modifier","aria-hidden":"true"},"#"),a(" Use Access Modifier")],-1),w=e("p",null,"Variables should be private and manipulated by getters and setters, but remember, there is no necessity to add getters/setters to each variable to expose them as public.",-1);function y(x,k){const s=o("RouterLink");return l(),h("div",null,[c,e("p",null,[a("A class should have strong "),t(s,{to:"/glossary/cohesion.html"},{default:i(()=>[a("cohesion")]),_:1}),a(", i.e., the functions of a class should be strongly related to supporting a single central purpose.")]),u,p,b,m,f,e("p",null,[a("For info "),t(s,{to:"/glossary/coupling.html"},{default:i(()=>[a("click here")]),_:1}),a(".")]),g,v,_,w])}const A=n(r,[["render",y],["__file","class.html.vue"]]);export{A as default};