import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as t,c as o,b as a}from"./app-46b4ffbb.js";const n={},s=a('<h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><p>&quot;Do The Simplest Thing That Could Possibly Work&quot; (DTSTTCPW) is a principle that suggests that when designing a solution to a problem, one should start with the simplest possible solution that meets the requirements, and then only add complexity if necessary. The idea is that simple solutions are typically easier to understand, implement, and maintain than complex ones and that additional complexity should only be added as needed to solve the problem at hand.</p><p>First, implement a new capability in the simplest way you can think of that &quot;could possibly work&quot;. Don&#39;t build a lot of amazing superstructures, don&#39;t do anything fancy, just put it in. Use an if statement, even. Make the code pass the UnitTests for the new feature (and all features, as always).</p><p>Second, and this is critical to the rule, refactor the system to be the simplest possible code including all the features it now has. Follow the other code quality rules to make the system as clean as it can be.</p><p>We&#39;re not looking for the quickest way, we&#39;re looking for the simplest result. So, we first break the existing method into pieces. That leaves the existing test cases running. Then we modify (simply, now) one of the little methods to handle the next test case.</p><p>Simplest does, however, mean a minimal solution. Don&#39;t build a giant super-efficient object, sorted and hashed and linked together, if an Array will do the job.</p><h2 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h2><p>An example of the &quot;Do The Simplest Thing That Could Possibly Work&quot; (DTSTTCPW) principle in action might be a task to create a system to track inventory levels for a retail store.</p><p>The simplest solution would be to create a spreadsheet with columns for the product name, current stock level, and a running total of stock in and stock out. This solution meets the requirement of being able to track inventory levels, it is easy to understand and maintain, and it can be done with minimal effort.</p><p>If the store grows and the inventory becomes too large to manage through a spreadsheet, you can then add more complexity by creating a database to store the information and a web interface for employees to update and access the inventory levels.</p><p>Another example could be a task to create a function that takes an input and return it in reverse order. A simple solution for this could be to iterate over the input string and add each character to a new string in reverse order. This solution meets the requirement and is easy to understand and implement, and it can be done with minimal effort. If performance is an issue, then we can explore more complex solutions like using pointers, but only when it&#39;s necessary.</p><p>In both of these examples, the principle of DTSTTCPW is followed by starting with the simplest solution possible that meets the requirements, and only adding complexity as needed.</p>',12),i=[s];function r(l,h){return t(),o("div",null,i)}const p=e(n,[["render",r],["__file","dtsttcpw.html.vue"]]);export{p as default};
