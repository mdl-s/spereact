(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[147],{1357:function(e,t,s){"use strict";s.d(t,"a",(function(){return j}));var a=s(14),c=s(193),n=s(3),r=s(598),i=s.n(r),l=s(0),o=s(1);function d(e){var t=e.onComplete,s=Object(l.useState)(i.a.isMoment(e.endDate)?e.endDate:i()(e.endDate)),r=Object(a.a)(s,1)[0],d=Object(l.useState)({days:0,hours:0,minutes:0,seconds:0}),j=Object(a.a)(d,2),u=j[0],m=j[1],b=Object(l.useRef)(),x=Object(l.useCallback)((function(){window.clearInterval(b.current),t&&t()}),[t]),h=Object(l.useCallback)((function(){var e=i()(),t=r.diff(e,"seconds");if(t<0)x();else{var s=i.a.duration(t,"seconds");m({days:s.asDays().toFixed(0),hours:s.hours(),minutes:s.minutes(),seconds:s.seconds()})}}),[x,r]);return Object(l.useEffect)((function(){return b.current=setInterval(h,1e3),function(){clearInterval(b.current)}}),[h]),Object(o.jsxs)("div",{className:Object(n.a)("flex items-center",e.className),children:[Object(o.jsxs)("div",{className:"flex flex-col items-center justify-center px-12",children:[Object(o.jsx)(c.a,{variant:"h4",className:"mb-4",children:u.days}),Object(o.jsx)(c.a,{variant:"caption",color:"textSecondary",children:"days"})]}),Object(o.jsxs)("div",{className:"flex flex-col items-center justify-center px-12",children:[Object(o.jsx)(c.a,{variant:"h4",className:"mb-4",children:u.hours}),Object(o.jsx)(c.a,{variant:"caption",color:"textSecondary",children:"hours"})]}),Object(o.jsxs)("div",{className:"flex flex-col items-center justify-center px-12",children:[Object(o.jsx)(c.a,{variant:"h4",className:"mb-4",children:u.minutes}),Object(o.jsx)(c.a,{variant:"caption",color:"textSecondary",children:"minutes"})]}),Object(o.jsxs)("div",{className:"flex flex-col items-center justify-center px-12",children:[Object(o.jsx)(c.a,{variant:"h4",className:"mb-4",children:u.seconds}),Object(o.jsx)(c.a,{variant:"caption",color:"textSecondary",children:"seconds"})]})]})}d.defaultProps={endDate:i()().add(15,"days")};var j=Object(l.memo)(d)},2488:function(e,t,s){"use strict";s.r(t);var a=s(1357),c=s(123),n=s(193),r=s(32),i=s(1);t.default=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(n.a,{variant:"h4",className:"mb-24",children:"FuseCountdown"}),Object(i.jsxs)(n.a,{className:"mb-16",component:"p",children:[Object(i.jsx)("code",{children:"FuseCountdown"})," is a custom-built Fuse component that allows you to create countdowns."]}),Object(i.jsx)(n.a,{className:"mt-32 mb-8",variant:"h5",children:"Usage"}),Object(i.jsx)(c.a,{component:"pre",className:"language-jsx",children:'\n                              <FuseCountdown endDate="2020-07-28" className="my-48"/>\n                            '}),Object(i.jsx)(n.a,{className:"mt-32 mb-8",variant:"h5",children:"Preview"}),Object(i.jsx)(a.a,{endDate:"2020-07-28",className:"my-48"}),Object(i.jsx)(n.a,{className:"mt-32 mb-8",variant:"h5",children:"Demos"}),Object(i.jsx)("ul",{children:Object(i.jsx)("li",{className:"mb-8",children:Object(i.jsx)(r.a,{to:"/pages/coming-soon",children:"Coming Soon"})})})]})}}}]);