(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[202],{2610:function(e,t,a){"use strict";a.r(t);var c=a(14),s=a(162),n=a(1095),l=a(178),r=a(179),i=a(1088),j=a(1031),h=a(572),d=a(192),m=a(616),o=a(43),x=a(1097),b=a(193),p=a(49),O=a.n(p),f=a(3),u=a(1115),N=a(0),v=a(1),w=Object(m.a)({title:{color:l.a[800]},url:{color:r.a[800]}});t.default=function(){var e=w(),t=Object(o.a)(),a=Object(N.useState)([]),l=Object(c.a)(a,2),r=l[0],m=l[1];Object(N.useEffect)((function(){O.a.get("/api/search").then((function(e){m(e.data)}))}),[]);var p={hidden:{opacity:0,y:40},show:{opacity:1,y:0}};return Object(v.jsx)(s.a,{header:Object(v.jsx)("div",{className:"flex flex-1 items-center p-16 sm:p-24 max-w-md",children:Object(v.jsx)(x.a,{theme:t,children:Object(v.jsxs)(d.a,{className:"flex items-center h-44 w-full px-16 rounded-16 shadow",children:[Object(v.jsx)(h.a,{placeholder:"Search...",disableUnderline:!0,fullWidth:!0,inputProps:{"aria-label":"Search"}}),Object(v.jsx)(i.a,{color:"action",children:"search"})]})})}),content:Object(v.jsxs)("div",{className:"p-16 pt-0 sm:p-24 sm:pt-0 max-w-md",children:[r.length>0&&Object(v.jsxs)(u.a.div,{variants:{show:{transition:{staggerChildren:.05}}},initial:"hidden",animate:"show",children:[Object(v.jsx)(u.a.div,{variants:p,children:Object(v.jsxs)(b.a,{color:"textSecondary",className:"text-13 mt-12 mb-24",children:[r.length," results"]})}),r.map((function(t){return Object(v.jsxs)(u.a.div,{variants:p,className:"mb-28",children:[Object(v.jsx)(b.a,{className:Object(f.a)(e.title,"text-18 cursor-pointer"),children:t.title}),Object(v.jsx)(b.a,{className:Object(f.a)(e.url),children:t.url}),Object(v.jsx)(b.a,{className:"text-13",children:t.excerpt})]},t.id)}))]}),Object(v.jsx)("div",{className:"flex justify-center mt-32",children:Object(v.jsxs)("div",{className:"flex item-center",children:[Object(v.jsx)(j.a,{className:"w-32",children:Object(v.jsx)(i.a,{className:"text-20",children:"ltr"===t.direction?"chevron_left":"chevron_right"})}),Object(v.jsx)(n.a,{className:"font-normal min-w-32 h-48 p-0 px-8",children:"1"}),Object(v.jsx)(n.a,{className:"font-normal min-w-32 h-48 p-0 px-8",children:"2"}),Object(v.jsx)(n.a,{className:"font-normal min-w-32 h-48 p-0 px-8",children:"3"}),Object(v.jsx)(n.a,{className:"font-normal min-w-32 h-48 p-0 px-8",children:"4"}),Object(v.jsx)(n.a,{className:"font-normal min-w-32 h-48 p-0 px-8",children:"5"}),Object(v.jsx)(j.a,{className:"w-32",children:Object(v.jsx)(i.a,{className:"text-20",children:"ltr"===t.direction?"chevron_right":"chevron_left"})})]})})]})})}}}]);