(this["webpackJsonpfiles-api-app"]=this["webpackJsonpfiles-api-app"]||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(7),s=n.n(a),r=n(6),i=n(2),o=(n(13),n(0)),u=function(e){var t=e.file;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("img",{className:"card__image",src:"images/file.svg"}),Object(o.jsx)("p",{children:"".concat(t.name.length>10?t.name.slice(0,10)+"...":t.name)})]})},l=n(8),j=n.n(l),b=(n(15),function(e){var t=e.files,n=Object(c.useState)(null),a=Object(i.a)(n,2),s=a[0],r=a[1],l=function(){r(null)};return Object(o.jsx)("ul",{className:"files-container",children:t.map((function(e){return Object(o.jsxs)("li",{className:"card",onMouseOver:function(){return t=e.file,void r(t);var t},onMouseLeave:l,children:[Object(o.jsx)(u,{file:e}),Object(o.jsxs)("span",{className:j()("card__details",{"card__details--active":s===e.file}),children:[Object(o.jsxs)("p",{children:["Name: ",e.name]}),Object(o.jsx)("hr",{}),Object(o.jsxs)("p",{children:["Size: ",e.size_now]}),Object(o.jsx)("hr",{}),Object(o.jsxs)("p",{children:["Edited: ",e.mtime]}),Object(o.jsx)("hr",{}),Object(o.jsxs)("p",{children:["Created: ",e.ctime]})]})]},e.file)}))})}),d=function(e){var t=e.split(" "),n=t[0].split(".").reverse().join("-").concat(["T"],t[1]);return new Date(n)},f=function(e){var t=e.split(" ");switch(t[1].toLowerCase()){case"mb":return 1024*+t[0];case"gb":return+t[0]/1e-6;default:return+t[0]}};n(16);var O=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(""),u=Object(i.a)(s,2),l=u[0],j=u[1],O=Object(c.useState)(!1),h=Object(i.a)(O,2),m=h[0],p=h[1],v=Object(c.useState)(""),x=Object(i.a)(v,2),g=x[0],w=x[1],_=Object(c.useState)([]),N=Object(i.a)(_,2),S=N[0],C=N[1];return Object(c.useEffect)((function(){fetch("http://fs.mh.net.ua/ajax/lsjson.php?dir=global/video&idu=1").then((function(e){return e.json()})).then((function(e){a(e),C(e)}))}),[]),Object(c.useMemo)((function(){var e=Object(r.a)(S);switch(l){case"name":e.sort((function(e,t){return e.name.localeCompare(t.name)}));break;case"size":e.sort((function(e,t){return f(e.size_now)-f(t.size_now)}));break;case"created":e.sort((function(e,t){return d(e.ctime)-d(t.ctime)}))}C(e)}),[n,l]),Object(c.useMemo)((function(){var e=n.filter((function(e){return e.name.toLowerCase().includes(g.toLowerCase())}));C(e)}),[g]),Object(o.jsxs)("div",{className:"App",children:[Object(o.jsxs)("div",{className:"header",children:[Object(o.jsxs)("select",{name:"sortBy",value:l,onChange:function(e){j(e.target.value),w(""),p(!1)},children:[Object(o.jsx)("option",{value:"",disabled:!0,children:"Sort by"}),Object(o.jsx)("option",{value:"name",children:"Name"}),Object(o.jsx)("option",{value:"size",children:"Size"}),Object(o.jsx)("option",{value:"created",children:"Created"})]}),Object(o.jsxs)("button",{type:"button",onClick:function(){var e=Object(r.a)(S).reverse();C(e),p((function(e){return!e}))},className:"header__button",children:[m?"Ascending order":"Descending order"," \u2192"]}),Object(o.jsx)("input",{type:"text",name:"searchQuery",value:g,onChange:function(e){w(e.target.value)},placeholder:"Search file by name"})]}),0===S.length?Object(o.jsx)("h2",{children:"No files were found..."}):Object(o.jsx)(b,{files:S})]})};s.a.render(Object(o.jsx)(O,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.cb401f5b.chunk.js.map