(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[96],{1134:function(e,t,r){"use strict";r.d(t,"a",(function(){return k}));var n=r(27),a=r(40),c=r(616),i=r(3),o=r(0),s=r(43),l=r(1097),d=r(31),u=r(7),p=r(1);var b=function(e){var t=Object(s.a)(),r=Object(u.d)(Object(d.c)(t.palette.primary.main));return Object(p.jsx)("div",{className:e.classes.header,children:e.header&&Object(p.jsx)(l.a,{theme:r,children:e.header})})},m=r(6),f=r(14),j=r(103),h=r(1118),x=r(1122);var O=function(e){var t=Object(s.a)(),r=Object(u.d)(Object(d.c)(t.palette.primary.main)),n=e.classes;return Object(p.jsxs)(p.Fragment,{children:[e.header&&Object(p.jsx)(l.a,{theme:r,children:Object(p.jsx)("div",{className:Object(i.a)(n.sidebarHeader,e.variant),children:e.header})}),e.content&&Object(p.jsx)(a.a,{className:n.sidebarContent,enable:e.innerScroll,children:e.content})]})};function g(e,t){var r=Object(o.useState)(!1),n=Object(f.a)(r,2),a=n[0],c=n[1],s=e.classes;Object(o.useImperativeHandle)(t,(function(){return{toggleSidebar:l}}));var l=function(){c(!a)};return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(h.a,{lgUp:"permanent"===e.variant,children:Object(p.jsx)(x.a,{variant:"temporary",anchor:e.position,open:a,onOpen:function(e){},onClose:function(e){return l()},disableSwipeToOpen:!0,classes:{root:Object(i.a)(s.sidebarWrapper,e.variant),paper:Object(i.a)(s.sidebar,e.variant,"left"===e.position?s.leftSidebar:s.rightSidebar)},ModalProps:{keepMounted:!0},container:e.rootRef.current,BackdropProps:{classes:{root:s.backdrop}},style:{position:"absolute"},children:Object(p.jsx)(O,Object(m.a)({},e))})}),"permanent"===e.variant&&Object(p.jsx)(h.a,{mdDown:!0,children:Object(p.jsx)(j.a,{variant:"permanent",className:Object(i.a)(s.sidebarWrapper,e.variant),open:a,classes:{paper:Object(i.a)(s.sidebar,e.variant,"left"===e.position?s.leftSidebar:s.rightSidebar)},children:Object(p.jsx)(O,Object(m.a)({},e))})})]})}var v=Object(o.forwardRef)(g),w=200,y=Object(c.a)((function(e){return{"@global":{"#fuse-main":{height:function(e){return e.innerScroll&&"100vh"}}},root:{display:"flex",flexDirection:"row",minWidth:0,minHeight:"100%",position:"relative",flex:"1 1 auto",height:"auto",backgroundColor:e.palette.background.default},innerScroll:{height:"100%"},topBg:{position:"absolute",left:0,right:0,top:0,height:w,background:"linear-gradient(to right, ".concat(e.palette.primary.dark," 0%, ").concat(e.palette.primary.main," 100%)"),backgroundSize:"cover",pointerEvents:"none"},contentWrapper:Object(n.a)({display:"flex",flexDirection:"column",padding:"0 3.2rem",flex:"1 1 100%",zIndex:2,maxWidth:"100%",minWidth:0,minHeight:0},e.breakpoints.down("xs"),{padding:"0 1.6rem"}),header:{height:136,minHeight:136,maxHeight:136,display:"flex",color:e.palette.primary.contrastText},headerSidebarToggleButton:{color:e.palette.primary.contrastText},contentCard:{display:"flex",flex:"1 1 100%",flexDirection:"column",backgroundColor:e.palette.background.paper,boxShadow:"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",minHeight:0,borderRadius:"20px 20px 0 0"},toolbar:{height:64,minHeight:64,display:"flex",alignItems:"center",borderBottom:"1px solid ".concat(e.palette.divider)},content:{flex:"1 1 auto",height:"100%",overflow:"auto","-webkit-overflow-scrolling":"touch"},sidebarWrapper:{position:"absolute",backgroundColor:"transparent",zIndex:5,overflow:"hidden","&.permanent":Object(n.a)({},e.breakpoints.up("lg"),{zIndex:1,position:"relative"})},sidebar:{position:"absolute","&.permanent":Object(n.a)({},e.breakpoints.up("lg"),{backgroundColor:"transparent",position:"relative",border:"none",overflow:"hidden"}),width:240,height:"100%"},leftSidebar:{},rightSidebar:{},sidebarHeader:{height:w,minHeight:w,color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.dark,"&.permanent":Object(n.a)({},e.breakpoints.up("lg"),{backgroundColor:"transparent"})},sidebarContent:Object(n.a)({display:"flex",flex:"1 1 auto",flexDirection:"column",backgroundColor:e.palette.background.default,color:e.palette.text.primary},e.breakpoints.up("lg"),{overflow:"auto","-webkit-overflow-scrolling":"touch"}),backdrop:{position:"absolute"}}})),S=Object(o.forwardRef)((function(e,t){var r=Object(o.useRef)(null),n=Object(o.useRef)(null),c=Object(o.useRef)(null),s=y(e),l=e.rightSidebarHeader||e.rightSidebarContent,d=e.leftSidebarHeader||e.leftSidebarContent;return Object(o.useImperativeHandle)(t,(function(){return{rootRef:c,toggleLeftSidebar:function(){r.current.toggleSidebar()},toggleRightSidebar:function(){n.current.toggleSidebar()}}})),Object(p.jsxs)("div",{className:Object(i.a)(s.root,e.innerScroll&&s.innerScroll),ref:c,children:[Object(p.jsx)("div",{className:s.topBg}),Object(p.jsxs)("div",{className:"flex container w-full",children:[d&&Object(p.jsx)(v,{position:"left",header:e.leftSidebarHeader,content:e.leftSidebarContent,variant:e.leftSidebarVariant||"permanent",innerScroll:e.innerScroll,classes:s,ref:r,rootRef:c}),Object(p.jsxs)("div",{className:Object(i.a)(s.contentWrapper,d&&(void 0===e.leftSidebarVariant||"permanent"===e.leftSidebarVariant)&&"lg:ltr:pl-0 lg:rtl:pr-0",l&&(void 0===e.rightSidebarVariant||"permanent"===e.rightSidebarVariant)&&"lg:pr-0"),children:[Object(p.jsx)(b,{header:e.header,classes:s}),Object(p.jsxs)("div",{className:Object(i.a)(s.contentCard,e.innerScroll&&"inner-scroll"),children:[e.contentToolbar&&Object(p.jsx)("div",{className:s.toolbar,children:e.contentToolbar}),e.content&&Object(p.jsx)(a.a,{className:s.content,enable:e.innerScroll,scrollToTopOnRouteChange:e.innerScroll,children:e.content})]})]}),l&&Object(p.jsx)(v,{position:"right",header:e.rightSidebarHeader,content:e.rightSidebarContent,variant:e.rightSidebarVariant||"permanent",innerScroll:e.innerScroll,classes:s,ref:n,rootRef:c})]})]})}));S.defaultProps={};var k=Object(o.memo)(S)},1175:function(e,t,r){"use strict";r.d(t,"b",(function(){return u})),r.d(t,"c",(function(){return p})),r.d(t,"d",(function(){return f})),r.d(t,"e",(function(){return h}));var n,a=r(27),c=r(16),i=r.n(c),o=r(35),s=r(19),l=r(49),d=r.n(l),u=Object(s.b)("eCommerceApp/orders/getOrders",Object(o.a)(i.a.mark((function e(){var t,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("/api/e-commerce-app/orders");case 2:return t=e.sent,e.next=5,t.data;case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})))),p=Object(s.b)("eCommerceApp/orders/removeOrders",function(){var e=Object(o.a)(i.a.mark((function e(t,r){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.dispatch,r.getState,e.next=3,d.a.post("/api/e-commerce-app/remove-orders",{orderIds:t});case 3:return e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()),b=Object(s.c)({}),m=b.getSelectors((function(e){return e.eCommerceApp.orders})),f=m.selectAll,j=(m.selectById,Object(s.d)({name:"eCommerceApp/orders",initialState:b.getInitialState({searchText:""}),reducers:{setOrdersSearchText:{reducer:function(e,t){e.searchText=t.payload},prepare:function(e){return{payload:e.target.value||""}}}},extraReducers:(n={},Object(a.a)(n,u.fulfilled,b.setAll),Object(a.a)(n,p.fulfilled,(function(e,t){return b.removeMany(e,t.payload)})),n)})),h=j.actions.setOrdersSearchText;t.a=j.reducer},1176:function(e,t,r){"use strict";r.d(t,"b",(function(){return u})),r.d(t,"c",(function(){return p})),r.d(t,"d",(function(){return f})),r.d(t,"e",(function(){return h}));var n,a=r(27),c=r(16),i=r.n(c),o=r(35),s=r(19),l=r(49),d=r.n(l),u=Object(s.b)("eCommerceApp/products/getProducts",Object(o.a)(i.a.mark((function e(){var t,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("/api/e-commerce-app/products");case 2:return t=e.sent,e.next=5,t.data;case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})))),p=Object(s.b)("eCommerceApp/products/removeProducts",function(){var e=Object(o.a)(i.a.mark((function e(t,r){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.dispatch,r.getState,e.next=3,d.a.post("/api/e-commerce-app/remove-products",{productIds:t});case 3:return e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()),b=Object(s.c)({}),m=b.getSelectors((function(e){return e.eCommerceApp.products})),f=m.selectAll,j=(m.selectById,Object(s.d)({name:"eCommerceApp/products",initialState:b.getInitialState({searchText:""}),reducers:{setProductsSearchText:{reducer:function(e,t){e.searchText=t.payload},prepare:function(e){return{payload:e.target.value||""}}}},extraReducers:(n={},Object(a.a)(n,u.fulfilled,b.setAll),Object(a.a)(n,p.fulfilled,(function(e,t){return b.removeMany(e,t.payload)})),n)})),h=j.actions.setProductsSearchText;t.a=j.reducer},1180:function(e,t,r){"use strict";r.d(t,"b",(function(){return b})),r.d(t,"d",(function(){return m})),r.d(t,"f",(function(){return f})),r.d(t,"c",(function(){return x})),r.d(t,"e",(function(){return O}));var n,a=r(27),c=r(6),i=r(16),o=r.n(i),s=r(35),l=r(19),d=r(49),u=r.n(d),p=r(52),b=Object(l.b)("eCommerceApp/product/getProduct",function(){var e=Object(s.a)(o.a.mark((function e(t){var r,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("/api/e-commerce-app/product",{params:t});case 2:return r=e.sent,e.next=5,r.data;case 5:return n=e.sent,e.abrupt("return",void 0===n?null:n);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),m=Object(l.b)("eCommerceApp/product/removeProduct",function(){var e=Object(s.a)(o.a.mark((function e(t,r){var n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.dispatch,n=r.getState,a=n().eCommerceApp.product.id,e.next=4,u.a.post("/api/e-commerce-app/remove-product",{id:a});case 4:return e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()),f=Object(l.b)("eCommerceApp/product/saveProduct",function(){var e=Object(s.a)(o.a.mark((function e(t,r){var n,a,i,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.dispatch,n=r.getState,a=n().eCommerceApp.product,e.next=4,u.a.post("/api/e-commerce-app/product/save",Object(c.a)(Object(c.a)({},a),t));case 4:return i=e.sent,e.next=7,i.data;case 7:return s=e.sent,e.abrupt("return",s);case 9:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()),j=Object(l.d)({name:"eCommerceApp/product",initialState:null,reducers:{resetProduct:function(){return null},newProduct:{reducer:function(e,t){return t.payload},prepare:function(e){return{payload:{id:p.a.generateGUID(),name:"",handle:"",description:"",categories:[],tags:[],images:[],priceTaxExcl:0,priceTaxIncl:0,taxRate:0,comparedPrice:0,quantity:0,sku:"",width:"",height:"",depth:"",weight:"",extraShippingFee:0,active:!0}}}}},extraReducers:(n={},Object(a.a)(n,b.fulfilled,(function(e,t){return t.payload})),Object(a.a)(n,f.fulfilled,(function(e,t){return t.payload})),Object(a.a)(n,m.fulfilled,(function(e,t){return null})),n)}),h=j.actions,x=h.newProduct,O=h.resetProduct;t.a=j.reducer},1193:function(e,t,r){"use strict";r.d(t,"b",(function(){return u})),r.d(t,"c",(function(){return m}));var n,a=r(27),c=r(16),i=r.n(c),o=r(35),s=r(19),l=r(49),d=r.n(l),u=Object(s.b)("eCommerceApp/order/getOrder",function(){var e=Object(o.a)(i.a.mark((function e(t){var r,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("/api/e-commerce-app/order",{params:t});case 2:return r=e.sent,e.next=5,r.data;case 5:return n=e.sent,e.abrupt("return",void 0===n?null:n);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),p=Object(s.b)("eCommerceApp/order/saveOrder",function(){var e=Object(o.a)(i.a.mark((function e(t){var r,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.post("/api/e-commerce-app/order/save",t);case 2:return r=e.sent,e.next=5,r.data;case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),b=Object(s.d)({name:"eCommerceApp/order",initialState:null,reducers:{resetOrder:function(){return null}},extraReducers:(n={},Object(a.a)(n,u.fulfilled,(function(e,t){return t.payload})),Object(a.a)(n,p.fulfilled,(function(e,t){return t.payload})),n)}),m=b.actions.resetOrder;t.a=b.reducer},1217:function(e,t,r){"use strict";var n=r(110),a=r(1193),c=r(1175),i=r(1180),o=r(1176),s=Object(n.c)({products:o.a,product:i.a,orders:c.a,order:a.a});t.a=s},1306:function(e,t,r){"use strict";var n=r(11),a=r(3),c=r(1),i=[{id:1,name:"Awaiting check payment",color:"bg-blue text-white"},{id:2,name:"Payment accepted",color:"bg-green text-white"},{id:3,name:"Preparing the order",color:"bg-orange text-black"},{id:4,name:"Shipped",color:"bg-purple text-white"},{id:5,name:"Delivered",color:"bg-green-700 text-white"},{id:6,name:"Canceled",color:"bg-pink text-white"},{id:7,name:"Refunded",color:"bg-red text-white"},{id:8,name:"Payment error",color:"bg-red-700 text-white"},{id:9,name:"On pre-order (paid)",color:"bg-purple-300 text-white"},{id:10,name:"Awaiting bank wire payment",color:"bg-blue text-white"},{id:11,name:"Awaiting PayPal payment",color:"bg-blue-700 text-white"},{id:12,name:"Remote payment accepted",color:"bg-green-800 text-white"},{id:13,name:"On pre-order (not paid)",color:"bg-purple-700 text-white"},{id:14,name:"Awaiting Cash-on-delivery payment",color:"bg-blue-800 text-white"}];t.a=function(e){return Object(c.jsx)("div",{className:Object(a.a)("inline text-12 font-semibold py-4 px-12 rounded-full truncate",n.a.find(i,{name:e.name}).color),children:e.name})}},2651:function(e,t,r){"use strict";r.r(t);var n=r(1134),a=r(134),c=r(1217),i=r(1088),o=r(572),s=r(192),l=r(1097),d=r(193),u=r(1115),p=r(7),b=r(31),m=r(1175),f=r(1);var j=function(e){var t=Object(p.c)(),r=Object(p.d)((function(e){return e.eCommerceApp.orders.searchText})),n=Object(p.d)(b.e);return Object(f.jsxs)("div",{className:"flex flex-1 w-full items-center justify-between",children:[Object(f.jsxs)("div",{className:"flex items-center",children:[Object(f.jsx)(i.a,{component:u.a.span,initial:{scale:0},animate:{scale:1,transition:{delay:.2}},className:"text-24 md:text-32",children:"receipt"}),Object(f.jsx)(d.a,{component:u.a.span,initial:{x:-20},animate:{x:0,transition:{delay:.2}},delay:300,className:"text-16 md:text-24 mx-12 font-semibold",children:"Orders"})]}),Object(f.jsx)("div",{className:"flex flex-1 items-center justify-center px-12",children:Object(f.jsx)(l.a,{theme:n,children:Object(f.jsxs)(s.a,{component:u.a.div,initial:{y:-20,opacity:0},animate:{y:0,opacity:1,transition:{delay:.2}},className:"flex items-center w-full max-w-512 px-8 py-4 rounded-16 shadow",children:[Object(f.jsx)(i.a,{color:"action",children:"search"}),Object(f.jsx)(o.a,{placeholder:"Search",className:"flex flex-1 mx-8",disableUnderline:!0,fullWidth:!0,value:r,inputProps:{"aria-label":"Search"},onChange:function(e){return t(Object(m.e)(e))}})]})})})]})},h=r(14),x=r(40),O=r(52),g=r(11),v=r(1159),w=r(1213),y=r(1216),S=r(1192),k=r(2454),C=r(1215),N=r(0),P=r(48),A=r(393),T=r(1306),R=r(1031),I=r(1109),H=r(1101),B=r(544),D=r(1090),W=r(1035),M=r(616),z=r(1214),V=r(2657),E=r(1096),q=r(3),F=[{id:"id",align:"left",disablePadding:!1,label:"ID",sort:!0},{id:"reference",align:"left",disablePadding:!1,label:"Reference",sort:!0},{id:"customer",align:"left",disablePadding:!1,label:"Customer",sort:!0},{id:"total",align:"right",disablePadding:!1,label:"Total",sort:!0},{id:"payment",align:"left",disablePadding:!1,label:"Payment",sort:!0},{id:"status",align:"left",disablePadding:!1,label:"Status",sort:!0},{id:"date",align:"left",disablePadding:!1,label:"Date",sort:!0}],U=Object(M.a)((function(e){return{actionsButtonWrapper:{background:e.palette.background.paper}}}));var J=function(e){var t=U(e),r=e.selectedOrderIds,n=r.length,a=Object(N.useState)(null),c=Object(h.a)(a,2),o=c[0],s=c[1],l=Object(p.c)();function d(){s(null)}return Object(f.jsx)(z.a,{children:Object(f.jsxs)(C.a,{className:"h-48 sm:h-64",children:[Object(f.jsxs)(S.a,{padding:"none",className:"w-40 md:w-64 text-center z-99",children:[Object(f.jsx)(v.a,{indeterminate:n>0&&n<e.rowCount,checked:0!==e.rowCount&&n===e.rowCount,onChange:e.onSelectAllClick}),n>0&&Object(f.jsxs)("div",{className:Object(q.a)("flex items-center justify-center absolute w-64 top-0 ltr:left-0 rtl:right-0 mx-56 h-64 z-10 border-b-1",t.actionsButtonWrapper),children:[Object(f.jsx)(R.a,{"aria-owns":o?"selectedOrdersMenu":null,"aria-haspopup":"true",onClick:function(e){s(e.currentTarget)},children:Object(f.jsx)(i.a,{children:"more_horiz"})}),Object(f.jsx)(B.a,{id:"selectedOrdersMenu",anchorEl:o,open:Boolean(o),onClose:d,children:Object(f.jsx)(W.a,{children:Object(f.jsxs)(D.a,{onClick:function(){l(Object(m.c)(r)),e.onMenuItemClick(),d()},children:[Object(f.jsx)(I.a,{className:"min-w-40",children:Object(f.jsx)(i.a,{children:"delete"})}),Object(f.jsx)(H.a,{primary:"Remove"})]})})})]})]}),F.map((function(t){return Object(f.jsx)(S.a,{className:"p-4 md:p-16",align:t.align,padding:t.disablePadding?"none":"default",sortDirection:e.order.id===t.id&&e.order.direction,children:t.sort&&Object(f.jsx)(E.a,{title:"Sort",placement:"right"===t.align?"bottom-end":"bottom-start",enterDelay:300,children:Object(f.jsx)(V.a,{active:e.order.id===t.id,direction:e.order.direction,onClick:(r=t.id,function(t){e.onRequestSort(t,r)}),className:"font-semibold",children:t.label})})},t.id);var r}),this)]})})};var G=Object(P.k)((function(e){var t=Object(p.c)(),r=Object(p.d)(m.d),n=Object(p.d)((function(e){return e.eCommerceApp.orders.searchText})),a=Object(N.useState)(!0),c=Object(h.a)(a,2),i=c[0],o=c[1],s=Object(N.useState)([]),l=Object(h.a)(s,2),b=l[0],j=l[1],P=Object(N.useState)(r),R=Object(h.a)(P,2),I=R[0],H=R[1],B=Object(N.useState)(0),D=Object(h.a)(B,2),W=D[0],M=D[1],z=Object(N.useState)(10),V=Object(h.a)(z,2),E=V[0],q=V[1],F=Object(N.useState)({direction:"asc",id:null}),U=Object(h.a)(F,2),G=U[0],L=U[1];return Object(N.useEffect)((function(){t(Object(m.b)()).then((function(){return o(!1)}))}),[t]),Object(N.useEffect)((function(){0!==n.length?(H(O.a.filterArrayByString(r,n)),M(0)):H(r)}),[r,n]),i?Object(f.jsx)(A.a,{}):0===I.length?Object(f.jsx)(u.a.div,{initial:{opacity:0},animate:{opacity:1,transition:{delay:.1}},className:"flex flex-1 items-center justify-center h-full",children:Object(f.jsx)(d.a,{color:"textSecondary",variant:"h5",children:"There are no orders!"})}):Object(f.jsxs)("div",{className:"w-full flex flex-col",children:[Object(f.jsx)(x.a,{className:"flex-grow overflow-x-auto",children:Object(f.jsxs)(w.a,{stickyHeader:!0,className:"min-w-xl","aria-labelledby":"tableTitle",children:[Object(f.jsx)(J,{selectedOrderIds:b,order:G,onSelectAllClick:function(e){e.target.checked?j(I.map((function(e){return e.id}))):j([])},onRequestSort:function(e,t){var r=t,n="desc";G.id===t&&"desc"===G.direction&&(n="asc"),L({direction:n,id:r})},rowCount:I.length,onMenuItemClick:function(){j([])}}),Object(f.jsx)(y.a,{children:g.a.orderBy(I,[function(e){switch(G.id){case"id":return parseInt(e.id,10);case"customer":return e.customer.firstName;case"payment":return e.payment.method;case"status":return e.status[0].name;default:return e[G.id]}}],[G.direction]).slice(W*E,W*E+E).map((function(t){var r=-1!==b.indexOf(t.id);return Object(f.jsxs)(C.a,{className:"h-72 cursor-pointer",hover:!0,role:"checkbox","aria-checked":r,tabIndex:-1,selected:r,onClick:function(r){return n=t,void e.history.push("/apps/e-commerce/orders/".concat(n.id));var n},children:[Object(f.jsx)(S.a,{className:"w-40 md:w-64 text-center",padding:"none",children:Object(f.jsx)(v.a,{checked:r,onClick:function(e){return e.stopPropagation()},onChange:function(e){return function(e,t){var r=b.indexOf(t),n=[];-1===r?n=n.concat(b,t):0===r?n=n.concat(b.slice(1)):r===b.length-1?n=n.concat(b.slice(0,-1)):r>0&&(n=n.concat(b.slice(0,r),b.slice(r+1))),j(n)}(0,t.id)}})}),Object(f.jsx)(S.a,{className:"p-4 md:p-16",component:"th",scope:"row",children:t.id}),Object(f.jsx)(S.a,{className:"p-4 md:p-16",component:"th",scope:"row",children:t.reference}),Object(f.jsx)(S.a,{className:"p-4 md:p-16 truncate",component:"th",scope:"row",children:"".concat(t.customer.firstName," ").concat(t.customer.lastName)}),Object(f.jsxs)(S.a,{className:"p-4 md:p-16",component:"th",scope:"row",align:"right",children:[Object(f.jsx)("span",{children:"$"}),t.total]}),Object(f.jsx)(S.a,{className:"p-4 md:p-16",component:"th",scope:"row",children:t.payment.method}),Object(f.jsx)(S.a,{className:"p-4 md:p-16",component:"th",scope:"row",children:Object(f.jsx)(T.a,{name:t.status[0].name})}),Object(f.jsx)(S.a,{className:"p-4 md:p-16",component:"th",scope:"row",children:t.date})]},t.id)}))})]})}),Object(f.jsx)(k.a,{className:"flex-shrink-0 border-t-1",component:"div",count:I.length,rowsPerPage:E,page:W,backIconButtonProps:{"aria-label":"Previous Page"},nextIconButtonProps:{"aria-label":"Next Page"},onChangePage:function(e,t){M(t)},onChangeRowsPerPage:function(e){q(e.target.value)}})]})}));t.default=Object(a.a)("eCommerceApp",c.a)((function(){return Object(f.jsx)(n.a,{classes:{content:"flex",contentCard:"overflow-hidden",header:"min-h-72 h-72 sm:h-136 sm:min-h-136"},header:Object(f.jsx)(j,{}),content:Object(f.jsx)(G,{}),innerScroll:!0})}))}}]);