import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as t,b as i,a as n,d as a}from"./app-46b4ffbb.js";const o={},c=i('<h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><p>In programming, a magic number is a hard-coded numerical or string value that is used in the code, rather than being stored in a named constant. Magic numbers are often used to represent values that are unlikely to change, such as the maximum size of an array, or a special error code.</p><p>Using magic numbers can make code more difficult to understand and maintain since it is not immediately clear what the numbers represent. It is generally considered a best practice to use named constants for values that are used frequently or that have special meaning in the code, rather than using magic numbers. This makes it easier for other developers to understand the code and helps to prevent errors that can be introduced if the values are accidentally changed.</p><p>The same can be applied to conditions to make them more readable.</p><h2 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h2><p>Here is an example of code that uses magic numbers:</p><h3 id="bad-practise" tabindex="-1"><a class="header-anchor" href="#bad-practise" aria-hidden="true">#</a> Bad Practise</h3>',7),r=n("div",{class:"hint-container danger"},[n("p",{class:"hint-container-title"},"Warning"),n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{js:"",class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token function"},"calculateArea"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("width"),n("span",{class:"token punctuation"},","),a(" height")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("width "),n("span",{class:"token operator"},"<"),a(),n("span",{class:"token number"},"0"),a(),n("span",{class:"token operator"},"||"),a(" height "),n("span",{class:"token operator"},"<"),a(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token keyword"},"return"),a(" width "),n("span",{class:"token operator"},"*"),a(" height"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])])],-1),l=n("p",null,"In this example, the magic number -1 is used to represent an error condition. If the width or height of the rectangle is negative, the function returns -1 to indicate that the area cannot be calculated.",-1),p=n("p",null,"Instead of using a magic number, it would be better to use a named constant to represent the error value:",-1),d=n("h3",{id:"good-practise",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#good-practise","aria-hidden":"true"},"#"),a(" Good Practise")],-1),u=n("div",{class:"hint-container tip"},[n("p",{class:"hint-container-title"},"Tips"),n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{js:"",class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token function"},"calculateArea"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("width"),n("span",{class:"token punctuation"},","),a(" height")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token constant"},"IS_CALCULATEABLE"),a(),n("span",{class:"token operator"},"="),a(" width "),n("span",{class:"token operator"},"<"),a(),n("span",{class:"token number"},"0"),a(),n("span",{class:"token operator"},"||"),a(" height "),n("span",{class:"token operator"},"<"),a(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token constant"},"ERROR_VALUE"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token constant"},"IS_CALCULATEABLE"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token constant"},"ERROR_VALUE"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token keyword"},"return"),a(" width "),n("span",{class:"token operator"},"*"),a(" height"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])])],-1),h=[c,r,l,p,d,u];function m(k,g){return s(),t("div",null,h)}const f=e(o,[["render",m],["__file","magic.html.vue"]]);export{f as default};