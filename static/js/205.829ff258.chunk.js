(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[205],{2613:function(e,t,c){"use strict";c.r(t);var a=c(14),s=c(162),n=c(1095),l=c(1088),r=c(572),i=c(192),o=c(43),j=c(1097),f=c(193),m=c(49),u=c.n(m),x=c(0),d=c(1);t.default=function(){var e=Object(o.a)(),t=Object(x.useState)(""),c=Object(a.a)(t,2),m=c[0],h=c[1],b=Object(x.useState)(null),O=Object(a.a)(b,2),p=O[0],N=O[1],v=Object(x.useState)(null),w=Object(a.a)(v,2),g=w[0],y=w[1];function S(e){h(e.target.value)}return Object(x.useEffect)((function(){u.a.get("/api/icons").then((function(e){N(e.data)}))}),[]),Object(x.useEffect)((function(){y(m.length>0?p.filter((function(e){if(e.name.includes(m))return!0;for(var t=0;t<e.tags.length;t+=1){if(e.tags[t].includes(m))return!0}return!1})):p)}),[p,m]),Object(d.jsx)(s.a,{classes:{content:"flex"},header:Object(d.jsxs)("div",{className:"flex flex-wrap flex-1 items-center justify-between p-12 md:p-24",children:[Object(d.jsxs)("div",{className:"flex flex-col w-full sm:w-auto",children:[Object(d.jsxs)("div",{className:"flex items-center mb-4",children:[Object(d.jsx)(l.a,{className:"text-18",color:"action",children:"home"}),Object(d.jsx)(l.a,{className:"text-16",color:"action",children:"chevron_right"}),Object(d.jsx)(f.a,{color:"textSecondary",className:"font-medium",children:"User Interface"})]}),Object(d.jsx)(f.a,{variant:"h6",className:"text-18 sm:text-24 font-semibold",children:"Icons"})]}),Object(d.jsx)("div",{className:"flex flex-1 items-center justify-center w-full sm:w-auto sm:px-12",children:Object(d.jsx)(j.a,{theme:e,children:Object(d.jsxs)(i.a,{className:"flex items-center min-w-full sm:min-w-0 w-full max-w-512 px-12 py-4 rounded-16 shdaow",children:[Object(d.jsx)(l.a,{color:"action",children:"search"}),Object(x.useMemo)((function(){return Object(d.jsx)(r.a,{placeholder:"Search...",className:"flex flex-1 px-8",disableUnderline:!0,fullWidth:!0,value:m,onChange:S,inputProps:{"aria-label":"Search"}})}),[m])]})})}),Object(d.jsxs)(n.a,{className:"ml-8 sm:ml-0",variant:"outlined",component:"a",href:"https://material.io/icons/",target:"_blank",role:"button",color:"default",children:[Object(d.jsx)(l.a,{children:"link"}),Object(d.jsx)("span",{className:"mx-4 hidden sm:flex",children:"Reference"})]})]}),content:Object(d.jsx)("div",{className:"py-24 max-w-2xl mx-auto",children:Object(x.useMemo)((function(){return g&&(g.length>0?Object(d.jsx)("div",{className:"flex flex-wrap justify-center",children:g.map((function(e){return Object(d.jsxs)("div",{className:"w-1/3 h-128 p-8 sm:w-160 sm:p-16 flex flex-col items-center justify-center",children:[Object(d.jsx)(l.a,{className:"text-48",color:"action",children:e.name}),Object(d.jsx)(f.a,{variant:"caption",className:"mt-4",children:e.name})]},e.name)}))}):Object(d.jsx)("div",{className:"flex flex-auto items-center justify-center w-full h-full",children:Object(d.jsx)(f.a,{color:"textSecondary",variant:"h5",children:"No results!"})}))}),[g])})})}}}]);