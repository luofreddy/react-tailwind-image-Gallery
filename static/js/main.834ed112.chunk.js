(this["webpackJsonpreact-tailwind"]=this["webpackJsonpreact-tailwind"]||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),r=n(4),a=n.n(r),i=(n(9),n(2)),l=(n(10),n(0)),o=function(e){var t=e.image,n=t.tags.split(", ");return Object(l.jsxs)("div",{className:" max-w-sm rounded overflow-hidden shadow-lg",children:[Object(l.jsx)("img",{src:t.webformatURL,alt:"",className:"w-full"}),Object(l.jsx)("div",{className:"px-6 py-4",children:Object(l.jsxs)("div",{className:"font-bold text-purple-500 text-xl mb-2",children:["Photo by ",t.user]})}),Object(l.jsx)("div",{children:Object(l.jsxs)("ul",{children:[Object(l.jsxs)("li",{children:[Object(l.jsx)("strong",{className:"m-2",children:"Views: "}),t.views]}),Object(l.jsxs)("li",{children:[Object(l.jsx)("strong",{className:"m-2",children:"Downloads: "}),t.downloads]}),Object(l.jsxs)("li",{children:[Object(l.jsx)("strong",{className:"m-2",children:"Likes: "}),t.likes]})]})}),Object(l.jsx)("div",{className:"px-6 py-3",children:n.map((function(e,t){return Object(l.jsxs)("span",{className:"inline-block bg-gray-200 rounded-full px-3 py-1 \r text-sm font-semibold text-gray-700 mr-2 my-1 cursor-pointer",children:["#",e]},t)}))})]})},d=function(e){var t=e.setSearch,n=Object(c.useState)(),s=Object(i.a)(n,2),r=s[0],a=s[1];return Object(l.jsx)("div",{className:"max-w-sm rounded overflow-hidden my-10 mx-auto",children:Object(l.jsx)("form",{onSubmit:function(e){e.preventDefault(),t(r)},className:"w-full max-w-sm",children:Object(l.jsxs)("div",{className:"flex item-center border-b-2 border-blue-500 py-2",children:[Object(l.jsx)("input",{value:r,onChange:function(e){return a(e.target.value)},type:"text",className:" appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none",placeholder:"Search..."}),Object(l.jsx)("button",{className:"flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded",type:"submit",children:"Search"})]})})})};var b=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)(!0),a=Object(i.a)(r,2),b=a[0],u=a[1],j=Object(c.useState)("dog"),m=Object(i.a)(j,2),x=m[0],h=m[1];return Object(c.useEffect)((function(){fetch("https://pixabay.com/api/?key=".concat("22378908-1956b210019a109baa446ad38","&q=").concat(x,"&image_type=photo&pretty=true")).then((function(e){return e.json()})).then((function(e){s(e.hits),u(!1)})).catch((function(e){return console.log("Err :",e)}))}),[x]),console.log(x),Object(l.jsxs)("div",{className:"container mx-auto",children:[Object(l.jsx)(d,{setSearch:function(e){return h(e)}}),b?Object(l.jsx)("h1",{className:"text-6xl mx-auto text-center mt-32",children:"Loading..."}):Object(l.jsx)("div",{className:"grid grid-cols-3 gap-4",children:n.map((function(e){return Object(l.jsx)(o,{image:e,setTerm:h},e.id)}))})]})},u=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),r(e),a(e)}))};a.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(b,{})}),document.getElementById("root")),u()},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.834ed112.chunk.js.map