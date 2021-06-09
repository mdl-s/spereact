(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[159],{2643:function(e,t,s){"use strict";s.r(t);var a=s(193),c=s(134),i=s(0),r=s(7),l=s(11),n=s(1115),o=s(110),d=s(27),j=s(16),m=s.n(j),x=s(35),h=s(19),b=s(49),p=s.n(b),O=Object(h.b)("analyticsDashboardApp/widgets/getWidgets",Object(x.a)(m.a.mark((function e(){var t,s;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("/api/analytics-dashboard-app/widgets");case 2:return t=e.sent,e.next=5,t.data;case 5:return s=e.sent,e.abrupt("return",s);case 7:case"end":return e.stop()}}),e)})))),f=Object(h.c)({}),u=f.getSelectors((function(e){return e.analyticsDashboardApp.widgets})),v=u.selectEntities,w=(u.selectById,Object(h.d)({name:"analyticsDashboardApp/widgets",initialState:f.getInitialState({}),reducers:{},extraReducers:Object(d.a)({},O.fulfilled,f.setAll)}).reducer),N=Object(o.c)({widgets:w}),g=s(14),y=s(1105),S=s(66),k=s(616),W=s(43),T=s(1097),C=s(1114),_=s(1116),A=s(3),D=s(1156),I=s.n(D),P=s(31),R=s(1),z=Object(k.a)((function(e){return{root:{background:"linear-gradient(to right, ".concat(e.palette.primary.dark," 0%, ").concat(e.palette.primary.main," 100%)"),color:e.palette.primary.contrastText}}}));function B(e){var t=z(e),s=Object(W.a)(),c=Object(r.d)(Object(P.c)(s.palette.primary.main)),o=l.a.merge({},e.data),d=Object(i.useState)(2),j=Object(g.a)(d,2),m=j[0],x=j[1],h=o.series[Object.keys(o.series)[m]];return l.a.setWith(o,"options.fill.colors",[s.palette.secondary.main]),l.a.setWith(o,"options.markers.colors",[s.palette.secondary.main]),l.a.setWith(o,"options.stroke.colors",[s.palette.primary.contrastText]),l.a.setWith(o,"options.markers.strokeColors",[s.palette.primary.contrastText]),l.a.setWith(o,"options.grid.borderColor",Object(S.fade)(s.palette.primary.contrastText,.3)),Object(R.jsx)(T.a,{theme:c,children:Object(R.jsxs)("div",{className:Object(A.a)(t.root),children:[Object(R.jsxs)("div",{className:"container relative p-16 sm:p-24 flex flex-col sm:flex-row justify-between items-center",children:[Object(R.jsx)(n.a.div,{initial:{opacity:0},animate:{opacity:1},children:Object(R.jsxs)("div",{className:"flex flex-col items-center sm:items-start mb-16 sm:mb-0",children:[Object(R.jsx)(a.a,{className:"h2 font-medium",color:"textPrimary",children:"Visitors"}),Object(R.jsx)(a.a,{className:"h5",color:"textSecondary",children:"Unique visitors by month"})]})}),Object(R.jsx)("div",{className:"flex flex-row items-center",children:Object(R.jsx)(_.a,{value:m,onChange:function(e,t){return x(t)},indicatorColor:"secondary",textColor:"inherit",variant:"scrollable",scrollButtons:"off",className:"w-full -mx-4 min-h-40",classes:{indicator:"flex justify-center bg-transparent w-full h-full"},TabIndicatorProps:{children:Object(R.jsx)(y.a,{className:"w-full h-full rounded-full opacity-50"})},children:Object.keys(o.series).map((function(e){return Object(R.jsx)(C.a,{className:"text-14 font-semibold min-h-40 min-w-64 mx-4 capitalize",disableRipple:!0,label:e},e)}))})})]}),Object(R.jsx)("div",{className:"container relative h-200 sm:h-256 pb-16",children:Object(R.jsx)(I.a,{options:o.options,series:h,type:o.options.chart.type,height:o.options.chart.height})})]})})}var E=Object(i.memo)(B),H=s(1106),V=s(1088);var J=function(e){var t=Object(W.a)(),s=l.a.merge({},e.data);return l.a.setWith(s,"options.colors",[t.palette.primary.main]),Object(R.jsxs)(H.a,{className:"w-full rounded-20 shadow",children:[Object(R.jsxs)("div",{className:"p-20 pb-0",children:[Object(R.jsx)(a.a,{className:"h3 font-medium",children:"Conversion"}),Object(R.jsxs)("div",{className:"flex flex-row flex-wrap items-center mt-12",children:[Object(R.jsx)(a.a,{className:"text-48 font-semibold leading-none tracking-tighter",children:s.conversion.value}),Object(R.jsxs)("div",{className:"flex flex-col mx-8",children:[s.conversion.ofTarget>0&&Object(R.jsx)(V.a,{className:"text-green text-20",children:"trending_up"}),s.conversion.ofTarget<0&&Object(R.jsx)(V.a,{className:"text-red text-20",children:"trending_down"}),Object(R.jsxs)("div",{className:"flex items-center",children:[Object(R.jsxs)(a.a,{className:"font-semibold",color:"textSecondary",children:[s.conversion.ofTarget,"%"]}),Object(R.jsx)(a.a,{className:"whitespace-nowrap mx-4",color:"textSecondary",children:"of target"})]})]})]})]}),Object(R.jsx)("div",{className:"h-96 w-100-p",children:Object(R.jsx)(I.a,{options:s.options,series:s.series,type:s.options.chart.type,height:s.options.chart.height})})]})};function L(e){var t=Object(W.a)(),s=l.a.merge({},e.data);return l.a.setWith(s,"options.colors",[t.palette.secondary.main]),Object(R.jsxs)(H.a,{className:"w-full rounded-20 shadow",children:[Object(R.jsxs)("div",{className:"p-20 pb-0",children:[Object(R.jsx)(a.a,{className:"h3 font-medium",children:"Impressions"}),Object(R.jsxs)("div",{className:"flex flex-row flex-wrap items-center mt-12",children:[Object(R.jsx)(a.a,{className:"text-48 font-semibold leading-none tracking-tighter",children:s.impressions.value}),Object(R.jsxs)("div",{className:"flex flex-col mx-8",children:[s.impressions.ofTarget>0&&Object(R.jsx)(V.a,{className:"text-green text-20",children:"trending_up"}),s.impressions.ofTarget<0&&Object(R.jsx)(V.a,{className:"text-red text-20",children:"trending_down"}),Object(R.jsxs)("div",{className:"flex items-center",children:[Object(R.jsxs)(a.a,{className:"font-semibold",color:"textSecondary",children:[s.impressions.ofTarget,"%"]}),Object(R.jsx)(a.a,{className:"whitespace-nowrap mx-4",color:"textSecondary",children:"of target"})]})]})]})]}),Object(R.jsx)("div",{className:"h-96 w-100-p",children:Object(R.jsx)(I.a,{options:s.options,series:s.series,type:s.options.chart.type,height:s.options.chart.height})})]})}var U=Object(i.memo)(L);function q(e){var t=Object(W.a)(),s=l.a.merge({},e.data);return l.a.setWith(s,"options.colors",[t.palette.error.main]),Object(R.jsxs)(H.a,{className:"w-full rounded-20 shadow",children:[Object(R.jsxs)("div",{className:"p-20 pb-0",children:[Object(R.jsx)(a.a,{className:"h3 font-medium",children:"Visits"}),Object(R.jsxs)("div",{className:"flex flex-row flex-wrap items-center mt-12",children:[Object(R.jsx)(a.a,{className:"text-48 font-semibold leading-none tracking-tighter",children:s.visits.value}),Object(R.jsxs)("div",{className:"flex flex-col mx-8",children:[s.visits.ofTarget>0&&Object(R.jsx)(V.a,{className:"text-green text-20",children:"trending_up"}),s.visits.ofTarget<0&&Object(R.jsx)(V.a,{className:"text-red text-20",children:"trending_down"}),Object(R.jsxs)("div",{className:"flex items-center",children:[Object(R.jsxs)(a.a,{className:"font-semibold",color:"textSecondary",children:[s.visits.ofTarget,"%"]}),Object(R.jsx)(a.a,{className:"whitespace-nowrap mx-4",color:"textSecondary",children:"of target"})]})]})]})]}),Object(R.jsx)("div",{className:"h-96 w-100-p",children:Object(R.jsx)(I.a,{options:s.options,series:s.series,type:s.options.chart.type,height:s.options.chart.height})})]})}var G=Object(i.memo)(q);function K(e){var t=Object(W.a)(),s=Object(i.useState)(0),c=Object(g.a)(s,2),r=c[0],n=c[1],o=l.a.merge({},e.data),d=o.series[Object.keys(o.series)[r]];return l.a.setWith(o,"options.colors",[t.palette.secondary.main,t.palette.primary.main]),Object(R.jsxs)(H.a,{className:"w-full rounded-20 shadow",children:[Object(R.jsxs)("div",{className:"relative p-20 flex flex-row items-center justify-between",children:[Object(R.jsx)("div",{className:"flex flex-col",children:Object(R.jsx)(a.a,{className:"h3 sm:h2 font-medium",children:"Visitors & Page views"})}),Object(R.jsx)("div",{className:"flex flex-row items-center",children:Object(R.jsx)(_.a,{value:r,onChange:function(e,t){return n(t)},indicatorColor:"secondary",textColor:"inherit",variant:"scrollable",scrollButtons:"off",className:"w-full px-24 -mx-4 min-h-40",classes:{indicator:"flex justify-center bg-transparent w-full h-full"},TabIndicatorProps:{children:Object(R.jsx)(y.a,{className:"w-full h-full rounded-full opacity-50"})},children:Object.keys(o.series).map((function(e){return Object(R.jsx)(C.a,{className:"text-14 font-semibold min-h-40 min-w-64 mx-4 capitalize",disableRipple:!0,label:e},e)}))})})]}),Object(R.jsx)("div",{className:"relative h-200 sm:h-320 sm:pb-16",children:Object(R.jsx)(I.a,{options:o.options,series:d,type:o.options.chart.type,height:o.options.chart.height})})]})}var M=Object(i.memo)(K),Z=s(1096),F=s(1358);function Q(e){return Object(R.jsx)(Z.a,{title:e.text,placement:"top",children:Object(R.jsx)(V.a,{className:"text-red",children:"place"})})}var X=function(e){return Object(R.jsx)(H.a,{className:"w-full h-512 rounded-20 shadow",children:Object(R.jsx)(F.a,{bootstrapURLKeys:{key:""},defaultZoom:1,defaultCenter:[17.308688,7.03125],options:{styles:e.data.styles},children:e.data.markers.map((function(e){return Object(R.jsx)(Q,{text:e.label,lat:e.lat,lng:e.lng},e.label)}))})})},Y=s(1095),$=s(1038),ee=s(1090),te=s(1047);function se(e){var t=Object(W.a)(),s=Object(i.useState)("Today"),c=Object(g.a)(s,2),r=c[0],n=c[1],o=l.a.merge({},e.data);return l.a.setWith(o,"options.theme.monochrome.color",t.palette.primary.main),Object(R.jsxs)(H.a,{className:"w-full rounded-20 shadow p-20",children:[Object(R.jsx)("div",{className:"pb-24",children:Object(R.jsx)(a.a,{className:"h3 font-medium",children:"Sessions by device"})}),Object(R.jsx)("div",{className:"h-256 relative",children:Object(R.jsx)(I.a,{options:o.options,series:o.series[r][0].data,type:o.options.chart.type,height:o.options.chart.height})}),Object(R.jsx)("div",{className:"mb-24 flex flex-row items-center justify-center",children:o.options.labels.map((function(e,t){return Object(R.jsxs)("div",{className:"px-16 flex flex-col items-center",children:[Object(R.jsx)(a.a,{className:"h4 font-semibold",color:"textSecondary",children:e}),Object(R.jsxs)(a.a,{className:"text-18 font-semibold py-8",children:[o.series[r][0].data[t],"%"]}),Object(R.jsxs)("div",{className:"flex flex-row items-start justify-center",children:[o.series[r][0].change[t]<0&&Object(R.jsx)(V.a,{className:"text-18 text-red",children:"arrow_downward"}),o.series[r][0].change[t]>0&&Object(R.jsx)(V.a,{className:"text-18 text-green",children:"arrow_upward"}),Object(R.jsxs)(a.a,{className:"h5 px-4 font-semibold",color:"textSecondary",children:[o.series[r][0].change[t],"%"]})]})]},e)}))}),Object(R.jsxs)("div",{className:"flex flex-row items-center justify-between",children:[Object(R.jsx)("div",{children:Object(R.jsx)($.a,{className:"",variant:"filled",children:Object(R.jsx)(te.a,{classes:{select:"py-8"},value:r,onChange:function(e){return n(e.target.value)},children:Object.keys(o.series).map((function(e){return Object(R.jsx)(ee.a,{value:e,children:e},e)}))})})}),Object(R.jsx)(Y.a,{size:"small",children:"Overview"})]})]})}var ae=Object(i.memo)(se),ce=s(1098),ie=s(1031);function re(e){var t=Object(W.a)(),s=Object(i.useState)(0),c=Object(g.a)(s,2),r=c[0],n=c[1],o=l.a.merge({},e.data);return l.a.setWith(o,"options.colors",[t.palette.secondary.main]),l.a.setWith(o,"options.markers.strokeColor",t.palette.background.default),Object(R.jsxs)(H.a,{className:"w-full rounded-20 shadow",children:[Object(R.jsxs)(ce.a,{position:"static",elevation:0,children:[Object(R.jsxs)("div",{className:"px-8 py-20 flex flex-row items-start justify-between",children:[Object(R.jsxs)("div",{className:"px-12",children:[Object(R.jsx)(a.a,{className:"h3 font-medium mb-4",children:"Sales"}),Object(R.jsx)(a.a,{className:"h5",color:"inherit",children:"Lifetime sum of your sales"})]}),Object(R.jsx)("div",{className:"-mt-12",children:Object(R.jsx)(ie.a,{"aria-label":"more",color:"inherit",children:Object(R.jsx)(V.a,{children:"more_vert"})})})]}),Object(R.jsxs)("div",{className:"p-16 pt-8 flex flex-row items-end",children:[Object(R.jsx)(a.a,{className:"text-44 font-semibold leading-none",color:"inherit",children:o.today}),Object(R.jsxs)("div",{className:"flex flex-col mx-8",children:[o.change.value>0&&Object(R.jsx)(V.a,{className:"text-green text-20",children:"trending_up"}),o.change.value<0&&Object(R.jsx)(V.a,{className:"text-red text-20",children:"trending_down"}),Object(R.jsx)(a.a,{className:"font-semibold",color:"textSecondary",children:"".concat(o.change.value,"(").concat(o.change.percentage,"%)")})]})]}),Object(R.jsxs)(_.a,{value:r,onChange:function(e,t){return n(t)},variant:"fullWidth",children:[Object(R.jsx)(C.a,{label:"1Day",className:"min-w-0"}),Object(R.jsx)(C.a,{label:"1Week",className:"min-w-0"}),Object(R.jsx)(C.a,{label:"1Month",className:"min-w-0"})]})]}),Object(R.jsx)("div",{className:"py-16 h-200",children:Object(R.jsx)(I.a,{options:o.options,series:o.series[r],type:o.options.chart.type,height:o.options.chart.height})})]})}var le=Object(i.memo)(re);function ne(e){return Object(R.jsxs)(H.a,{className:"w-full rounded-20 shadow",children:[Object(R.jsxs)("div",{className:"px-8 py-20 flex flex-row items-start justify-between",children:[Object(R.jsx)(a.a,{className:"h3 font-medium px-12",children:"Top campaigns"}),Object(R.jsx)("div",{className:"-mt-12",children:Object(R.jsx)(ie.a,{"aria-label":"more",children:Object(R.jsx)(V.a,{children:"more_vert"})})})]}),Object(R.jsxs)("table",{className:"simple clickable",children:[Object(R.jsx)("thead",{children:Object(R.jsxs)("tr",{children:[Object(R.jsx)("th",{"aria-label":"title"}),Object(R.jsx)("th",{className:"text-right",children:Object(R.jsx)(a.a,{color:"textSecondary",className:"font-semibold",children:"Clicks"})}),Object(R.jsx)("th",{className:"text-right",children:Object(R.jsx)(a.a,{color:"textSecondary",className:"font-semibold",children:"Conv"})})]})}),Object(R.jsx)("tbody",{children:e.data.rows.map((function(e){return Object(R.jsxs)("tr",{children:[Object(R.jsx)("td",{className:"font-semibold",children:e.title}),Object(R.jsx)("td",{className:"text-right",children:e.clicks}),Object(R.jsx)("td",{className:"text-right",children:e.conversion})]},e.title)}))})]}),Object(R.jsx)(y.a,{className:"card-divider w-full"}),Object(R.jsx)("div",{className:"p-20 flex flex-row items-center",children:Object(R.jsx)(Y.a,{variant:"outlined",children:"Go to campaigns"})})]})}var oe=Object(i.memo)(ne);t.default=Object(c.a)("analyticsDashboardApp",N)((function(){var e=Object(r.c)(),t=Object(r.d)(v);if(Object(i.useEffect)((function(){e(O())}),[e]),l.a.isEmpty(t))return null;var s={hidden:{opacity:0,y:20},show:{opacity:1,y:0}};return Object(R.jsxs)("div",{className:"w-full",children:[Object(R.jsx)(E,{data:t.widget1}),Object(R.jsxs)(n.a.div,{className:"flex flex-col md:flex-row sm:p-8 container",variants:{show:{transition:{staggerChildren:.06}}},initial:"hidden",animate:"show",children:[Object(R.jsxs)("div",{className:"flex flex-1 flex-col min-w-0 pt-16",children:[Object(R.jsx)(a.a,{component:n.a.div,variants:s,className:"px-16 pb-8 text-18 font-normal",color:"textSecondary",children:"How are your active users trending over time?"}),Object(R.jsxs)("div",{className:"flex flex-col sm:flex sm:flex-row pb-32",children:[Object(R.jsx)(n.a.div,{variants:s,className:"widget flex w-full sm:w-1/3 p-16",children:Object(R.jsx)(J,{data:t.widget2})}),Object(R.jsx)(n.a.div,{variants:s,className:"widget flex w-full sm:w-1/3 p-16",children:Object(R.jsx)(U,{data:t.widget3})}),Object(R.jsx)(n.a.div,{variants:s,className:"widget w-full sm:w-1/3 p-16",children:Object(R.jsx)(G,{data:t.widget4})})]}),Object(R.jsx)(a.a,{component:n.a.div,variants:s,className:"px-16 pb-8 text-18 font-normal",color:"textSecondary",children:"How many pages your users visit?"}),Object(R.jsx)(n.a.div,{variants:s,className:"widget w-full p-16 pb-48",children:Object(R.jsx)(M,{data:t.widget5})}),Object(R.jsx)(a.a,{component:n.a.div,variants:s,className:"px-16 pb-8 text-18 font-normal",color:"textSecondary",children:"Where are your users?"}),Object(R.jsx)(n.a.div,{variants:s,className:"widget w-full p-16 pb-32",children:Object(R.jsx)(X,{data:t.widget6})})]}),Object(R.jsxs)("div",{className:"flex flex-wrap w-full md:w-320 pt-16",children:[Object(R.jsxs)("div",{className:"mb-32 w-full sm:w-1/2 md:w-full",children:[Object(R.jsx)(a.a,{component:n.a.div,variants:s,className:"px-16 pb-8 text-18 font-normal",color:"textSecondary",children:"What are your top devices?"}),Object(R.jsx)(n.a.div,{variants:s,className:"widget w-full p-16",children:Object(R.jsx)(ae,{data:t.widget7})})]}),Object(R.jsxs)("div",{className:"mb-32 w-full sm:w-1/2 md:w-full",children:[Object(R.jsx)(a.a,{component:n.a.div,variants:s,className:"px-16 pb-8 text-18 font-normal",color:"textSecondary",children:"How are your sales?"}),Object(R.jsx)(n.a.div,{variants:s,className:"widget w-full p-16",children:Object(R.jsx)(le,{data:t.widget8})})]}),Object(R.jsxs)("div",{className:"mb-32 w-full sm:w-1/2 md:w-full",children:[Object(R.jsx)(a.a,{component:n.a.div,variants:s,className:"px-16 pb-8 text-18 font-normal lg:pt-0",color:"textSecondary",children:"What are your top campaigns?"}),Object(R.jsx)(n.a.div,{variants:s,className:"widget w-full p-16",children:Object(R.jsx)(oe,{data:t.widget9})})]})]})]})]})}))}}]);