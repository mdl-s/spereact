(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[104],{1134:function(e,t,r){"use strict";r.d(t,"a",(function(){return k}));var n=r(27),a=r(40),c=r(616),i=r(3),o=r(0),s=r(43),l=r(1097),d=r(31),u=r(7),p=r(1);var b=function(e){var t=Object(s.a)(),r=Object(u.d)(Object(d.c)(t.palette.primary.main));return Object(p.jsx)("div",{className:e.classes.header,children:e.header&&Object(p.jsx)(l.a,{theme:r,children:e.header})})},m=r(6),j=r(14),f=r(103),h=r(1118),x=r(1122);var O=function(e){var t=Object(s.a)(),r=Object(u.d)(Object(d.c)(t.palette.primary.main)),n=e.classes;return Object(p.jsxs)(p.Fragment,{children:[e.header&&Object(p.jsx)(l.a,{theme:r,children:Object(p.jsx)("div",{className:Object(i.a)(n.sidebarHeader,e.variant),children:e.header})}),e.content&&Object(p.jsx)(a.a,{className:n.sidebarContent,enable:e.innerScroll,children:e.content})]})};function g(e,t){var r=Object(o.useState)(!1),n=Object(j.a)(r,2),a=n[0],c=n[1],s=e.classes;Object(o.useImperativeHandle)(t,(function(){return{toggleSidebar:l}}));var l=function(){c(!a)};return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(h.a,{lgUp:"permanent"===e.variant,children:Object(p.jsx)(x.a,{variant:"temporary",anchor:e.position,open:a,onOpen:function(e){},onClose:function(e){return l()},disableSwipeToOpen:!0,classes:{root:Object(i.a)(s.sidebarWrapper,e.variant),paper:Object(i.a)(s.sidebar,e.variant,"left"===e.position?s.leftSidebar:s.rightSidebar)},ModalProps:{keepMounted:!0},container:e.rootRef.current,BackdropProps:{classes:{root:s.backdrop}},style:{position:"absolute"},children:Object(p.jsx)(O,Object(m.a)({},e))})}),"permanent"===e.variant&&Object(p.jsx)(h.a,{mdDown:!0,children:Object(p.jsx)(f.a,{variant:"permanent",className:Object(i.a)(s.sidebarWrapper,e.variant),open:a,classes:{paper:Object(i.a)(s.sidebar,e.variant,"left"===e.position?s.leftSidebar:s.rightSidebar)},children:Object(p.jsx)(O,Object(m.a)({},e))})})]})}var v=Object(o.forwardRef)(g),w=200,y=Object(c.a)((function(e){return{"@global":{"#fuse-main":{height:function(e){return e.innerScroll&&"100vh"}}},root:{display:"flex",flexDirection:"row",minWidth:0,minHeight:"100%",position:"relative",flex:"1 1 auto",height:"auto",backgroundColor:e.palette.background.default},innerScroll:{height:"100%"},topBg:{position:"absolute",left:0,right:0,top:0,height:w,background:"linear-gradient(to right, ".concat(e.palette.primary.dark," 0%, ").concat(e.palette.primary.main," 100%)"),backgroundSize:"cover",pointerEvents:"none"},contentWrapper:Object(n.a)({display:"flex",flexDirection:"column",padding:"0 3.2rem",flex:"1 1 100%",zIndex:2,maxWidth:"100%",minWidth:0,minHeight:0},e.breakpoints.down("xs"),{padding:"0 1.6rem"}),header:{height:136,minHeight:136,maxHeight:136,display:"flex",color:e.palette.primary.contrastText},headerSidebarToggleButton:{color:e.palette.primary.contrastText},contentCard:{display:"flex",flex:"1 1 100%",flexDirection:"column",backgroundColor:e.palette.background.paper,boxShadow:"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",minHeight:0,borderRadius:"20px 20px 0 0"},toolbar:{height:64,minHeight:64,display:"flex",alignItems:"center",borderBottom:"1px solid ".concat(e.palette.divider)},content:{flex:"1 1 auto",height:"100%",overflow:"auto","-webkit-overflow-scrolling":"touch"},sidebarWrapper:{position:"absolute",backgroundColor:"transparent",zIndex:5,overflow:"hidden","&.permanent":Object(n.a)({},e.breakpoints.up("lg"),{zIndex:1,position:"relative"})},sidebar:{position:"absolute","&.permanent":Object(n.a)({},e.breakpoints.up("lg"),{backgroundColor:"transparent",position:"relative",border:"none",overflow:"hidden"}),width:240,height:"100%"},leftSidebar:{},rightSidebar:{},sidebarHeader:{height:w,minHeight:w,color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.dark,"&.permanent":Object(n.a)({},e.breakpoints.up("lg"),{backgroundColor:"transparent"})},sidebarContent:Object(n.a)({display:"flex",flex:"1 1 auto",flexDirection:"column",backgroundColor:e.palette.background.default,color:e.palette.text.primary},e.breakpoints.up("lg"),{overflow:"auto","-webkit-overflow-scrolling":"touch"}),backdrop:{position:"absolute"}}})),S=Object(o.forwardRef)((function(e,t){var r=Object(o.useRef)(null),n=Object(o.useRef)(null),c=Object(o.useRef)(null),s=y(e),l=e.rightSidebarHeader||e.rightSidebarContent,d=e.leftSidebarHeader||e.leftSidebarContent;return Object(o.useImperativeHandle)(t,(function(){return{rootRef:c,toggleLeftSidebar:function(){r.current.toggleSidebar()},toggleRightSidebar:function(){n.current.toggleSidebar()}}})),Object(p.jsxs)("div",{className:Object(i.a)(s.root,e.innerScroll&&s.innerScroll),ref:c,children:[Object(p.jsx)("div",{className:s.topBg}),Object(p.jsxs)("div",{className:"flex container w-full",children:[d&&Object(p.jsx)(v,{position:"left",header:e.leftSidebarHeader,content:e.leftSidebarContent,variant:e.leftSidebarVariant||"permanent",innerScroll:e.innerScroll,classes:s,ref:r,rootRef:c}),Object(p.jsxs)("div",{className:Object(i.a)(s.contentWrapper,d&&(void 0===e.leftSidebarVariant||"permanent"===e.leftSidebarVariant)&&"lg:ltr:pl-0 lg:rtl:pr-0",l&&(void 0===e.rightSidebarVariant||"permanent"===e.rightSidebarVariant)&&"lg:pr-0"),children:[Object(p.jsx)(b,{header:e.header,classes:s}),Object(p.jsxs)("div",{className:Object(i.a)(s.contentCard,e.innerScroll&&"inner-scroll"),children:[e.contentToolbar&&Object(p.jsx)("div",{className:s.toolbar,children:e.contentToolbar}),e.content&&Object(p.jsx)(a.a,{className:s.content,enable:e.innerScroll,scrollToTopOnRouteChange:e.innerScroll,children:e.content})]})]}),l&&Object(p.jsx)(v,{position:"right",header:e.rightSidebarHeader,content:e.rightSidebarContent,variant:e.rightSidebarVariant||"permanent",innerScroll:e.innerScroll,classes:s,ref:n,rootRef:c})]})]})}));S.defaultProps={};var k=Object(o.memo)(S)},1175:function(e,t,r){"use strict";r.d(t,"b",(function(){return u})),r.d(t,"c",(function(){return p})),r.d(t,"d",(function(){return j})),r.d(t,"e",(function(){return h}));var n,a=r(27),c=r(16),i=r.n(c),o=r(35),s=r(19),l=r(49),d=r.n(l),u=Object(s.b)("eCommerceApp/orders/getOrders",Object(o.a)(i.a.mark((function e(){var t,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("/api/e-commerce-app/orders");case 2:return t=e.sent,e.next=5,t.data;case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})))),p=Object(s.b)("eCommerceApp/orders/removeOrders",function(){var e=Object(o.a)(i.a.mark((function e(t,r){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.dispatch,r.getState,e.next=3,d.a.post("/api/e-commerce-app/remove-orders",{orderIds:t});case 3:return e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()),b=Object(s.c)({}),m=b.getSelectors((function(e){return e.eCommerceApp.orders})),j=m.selectAll,f=(m.selectById,Object(s.d)({name:"eCommerceApp/orders",initialState:b.getInitialState({searchText:""}),reducers:{setOrdersSearchText:{reducer:function(e,t){e.searchText=t.payload},prepare:function(e){return{payload:e.target.value||""}}}},extraReducers:(n={},Object(a.a)(n,u.fulfilled,b.setAll),Object(a.a)(n,p.fulfilled,(function(e,t){return b.removeMany(e,t.payload)})),n)})),h=f.actions.setOrdersSearchText;t.a=f.reducer},1176:function(e,t,r){"use strict";r.d(t,"b",(function(){return u})),r.d(t,"c",(function(){return p})),r.d(t,"d",(function(){return j})),r.d(t,"e",(function(){return h}));var n,a=r(27),c=r(16),i=r.n(c),o=r(35),s=r(19),l=r(49),d=r.n(l),u=Object(s.b)("eCommerceApp/products/getProducts",Object(o.a)(i.a.mark((function e(){var t,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("/api/e-commerce-app/products");case 2:return t=e.sent,e.next=5,t.data;case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})))),p=Object(s.b)("eCommerceApp/products/removeProducts",function(){var e=Object(o.a)(i.a.mark((function e(t,r){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.dispatch,r.getState,e.next=3,d.a.post("/api/e-commerce-app/remove-products",{productIds:t});case 3:return e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()),b=Object(s.c)({}),m=b.getSelectors((function(e){return e.eCommerceApp.products})),j=m.selectAll,f=(m.selectById,Object(s.d)({name:"eCommerceApp/products",initialState:b.getInitialState({searchText:""}),reducers:{setProductsSearchText:{reducer:function(e,t){e.searchText=t.payload},prepare:function(e){return{payload:e.target.value||""}}}},extraReducers:(n={},Object(a.a)(n,u.fulfilled,b.setAll),Object(a.a)(n,p.fulfilled,(function(e,t){return b.removeMany(e,t.payload)})),n)})),h=f.actions.setProductsSearchText;t.a=f.reducer},1180:function(e,t,r){"use strict";r.d(t,"b",(function(){return b})),r.d(t,"d",(function(){return m})),r.d(t,"f",(function(){return j})),r.d(t,"c",(function(){return x})),r.d(t,"e",(function(){return O}));var n,a=r(27),c=r(6),i=r(16),o=r.n(i),s=r(35),l=r(19),d=r(49),u=r.n(d),p=r(52),b=Object(l.b)("eCommerceApp/product/getProduct",function(){var e=Object(s.a)(o.a.mark((function e(t){var r,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("/api/e-commerce-app/product",{params:t});case 2:return r=e.sent,e.next=5,r.data;case 5:return n=e.sent,e.abrupt("return",void 0===n?null:n);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),m=Object(l.b)("eCommerceApp/product/removeProduct",function(){var e=Object(s.a)(o.a.mark((function e(t,r){var n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.dispatch,n=r.getState,a=n().eCommerceApp.product.id,e.next=4,u.a.post("/api/e-commerce-app/remove-product",{id:a});case 4:return e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()),j=Object(l.b)("eCommerceApp/product/saveProduct",function(){var e=Object(s.a)(o.a.mark((function e(t,r){var n,a,i,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.dispatch,n=r.getState,a=n().eCommerceApp.product,e.next=4,u.a.post("/api/e-commerce-app/product/save",Object(c.a)(Object(c.a)({},a),t));case 4:return i=e.sent,e.next=7,i.data;case 7:return s=e.sent,e.abrupt("return",s);case 9:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()),f=Object(l.d)({name:"eCommerceApp/product",initialState:null,reducers:{resetProduct:function(){return null},newProduct:{reducer:function(e,t){return t.payload},prepare:function(e){return{payload:{id:p.a.generateGUID(),name:"",handle:"",description:"",categories:[],tags:[],images:[],priceTaxExcl:0,priceTaxIncl:0,taxRate:0,comparedPrice:0,quantity:0,sku:"",width:"",height:"",depth:"",weight:"",extraShippingFee:0,active:!0}}}}},extraReducers:(n={},Object(a.a)(n,b.fulfilled,(function(e,t){return t.payload})),Object(a.a)(n,j.fulfilled,(function(e,t){return t.payload})),Object(a.a)(n,m.fulfilled,(function(e,t){return null})),n)}),h=f.actions,x=h.newProduct,O=h.resetProduct;t.a=f.reducer},1193:function(e,t,r){"use strict";r.d(t,"b",(function(){return u})),r.d(t,"c",(function(){return m}));var n,a=r(27),c=r(16),i=r.n(c),o=r(35),s=r(19),l=r(49),d=r.n(l),u=Object(s.b)("eCommerceApp/order/getOrder",function(){var e=Object(o.a)(i.a.mark((function e(t){var r,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("/api/e-commerce-app/order",{params:t});case 2:return r=e.sent,e.next=5,r.data;case 5:return n=e.sent,e.abrupt("return",void 0===n?null:n);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),p=Object(s.b)("eCommerceApp/order/saveOrder",function(){var e=Object(o.a)(i.a.mark((function e(t){var r,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.post("/api/e-commerce-app/order/save",t);case 2:return r=e.sent,e.next=5,r.data;case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),b=Object(s.d)({name:"eCommerceApp/order",initialState:null,reducers:{resetOrder:function(){return null}},extraReducers:(n={},Object(a.a)(n,u.fulfilled,(function(e,t){return t.payload})),Object(a.a)(n,p.fulfilled,(function(e,t){return t.payload})),n)}),m=b.actions.resetOrder;t.a=b.reducer},1217:function(e,t,r){"use strict";var n=r(110),a=r(1193),c=r(1175),i=r(1180),o=r(1176),s=Object(n.c)({products:o.a,product:i.a,orders:c.a,order:a.a});t.a=s},2649:function(e,t,r){"use strict";r.r(t);var n=r(1134),a=r(134),c=r(1217),i=r(1095),o=r(1088),s=r(572),l=r(192),d=r(1097),u=r(193),p=r(1115),b=r(7),m=r(32),j=r(31),f=r(1176),h=r(1);var x=function(e){var t=Object(b.c)(),r=Object(b.d)((function(e){return e.eCommerceApp.products.searchText})),n=Object(b.d)(j.e);return Object(h.jsxs)("div",{className:"flex flex-1 w-full items-center justify-between",children:[Object(h.jsxs)("div",{className:"flex items-center",children:[Object(h.jsx)(o.a,{component:p.a.span,initial:{scale:0},animate:{scale:1,transition:{delay:.2}},className:"text-24 md:text-32",children:"shopping_basket"}),Object(h.jsx)(u.a,{component:p.a.span,initial:{x:-20},animate:{x:0,transition:{delay:.2}},delay:300,className:"hidden sm:flex text-16 md:text-24 mx-12 font-semibold",children:"Products"})]}),Object(h.jsx)("div",{className:"flex flex-1 items-center justify-center px-12",children:Object(h.jsx)(d.a,{theme:n,children:Object(h.jsxs)(l.a,{component:p.a.div,initial:{y:-20,opacity:0},animate:{y:0,opacity:1,transition:{delay:.2}},className:"flex items-center w-full max-w-512 px-8 py-4 rounded-16 shadow",children:[Object(h.jsx)(o.a,{color:"action",children:"search"}),Object(h.jsx)(s.a,{placeholder:"Search",className:"flex flex-1 mx-8",disableUnderline:!0,fullWidth:!0,value:r,inputProps:{"aria-label":"Search"},onChange:function(e){return t(Object(f.e)(e))}})]})})}),Object(h.jsx)(p.a.div,{initial:{opacity:0,x:20},animate:{opacity:1,x:0,transition:{delay:.2}},children:Object(h.jsxs)(i.a,{component:m.a,to:"/apps/e-commerce/products/new",className:"whitespace-nowrap",variant:"contained",color:"secondary",children:[Object(h.jsx)("span",{className:"hidden sm:flex",children:"Add New Product"}),Object(h.jsx)("span",{className:"flex sm:hidden",children:"New"})]})})]})},O=r(14),g=r(40),v=r(11),w=r(1159),y=r(1213),S=r(1216),k=r(1192),C=r(2454),N=r(1215),P=r(3),A=r(0),I=r(48),T=r(393),R=r(1031),H=r(1109),B=r(1101),W=r(544),q=r(1090),D=r(1035),M=r(616),z=r(1214),V=r(2657),E=r(1096),_=[{id:"image",align:"left",disablePadding:!0,label:"",sort:!1},{id:"name",align:"left",disablePadding:!1,label:"Name",sort:!0},{id:"categories",align:"left",disablePadding:!1,label:"Category",sort:!0},{id:"priceTaxIncl",align:"right",disablePadding:!1,label:"Price",sort:!0},{id:"quantity",align:"right",disablePadding:!1,label:"Quantity",sort:!0},{id:"active",align:"right",disablePadding:!1,label:"Active",sort:!0}],F=Object(M.a)((function(e){return{actionsButtonWrapper:{background:e.palette.background.paper}}}));var L=function(e){var t=F(e),r=e.selectedProductIds,n=r.length,a=Object(A.useState)(null),c=Object(O.a)(a,2),i=c[0],s=c[1],l=Object(b.c)();function d(){s(null)}return Object(h.jsx)(z.a,{children:Object(h.jsxs)(N.a,{className:"h-48 sm:h-64",children:[Object(h.jsxs)(k.a,{padding:"none",className:"w-40 md:w-64 text-center z-99",children:[Object(h.jsx)(w.a,{indeterminate:n>0&&n<e.rowCount,checked:0!==e.rowCount&&n===e.rowCount,onChange:e.onSelectAllClick}),n>0&&Object(h.jsxs)("div",{className:Object(P.a)("flex items-center justify-center absolute w-64 top-0 ltr:left-0 rtl:right-0 mx-56 h-64 z-10 border-b-1",t.actionsButtonWrapper),children:[Object(h.jsx)(R.a,{"aria-owns":i?"selectedProductsMenu":null,"aria-haspopup":"true",onClick:function(e){s(e.currentTarget)},children:Object(h.jsx)(o.a,{children:"more_horiz"})}),Object(h.jsx)(W.a,{id:"selectedProductsMenu",anchorEl:i,open:Boolean(i),onClose:d,children:Object(h.jsx)(D.a,{children:Object(h.jsxs)(q.a,{onClick:function(){l(Object(f.c)(r)),e.onMenuItemClick(),d()},children:[Object(h.jsx)(H.a,{className:"min-w-40",children:Object(h.jsx)(o.a,{children:"delete"})}),Object(h.jsx)(B.a,{primary:"Remove"})]})})})]})]}),_.map((function(t){return Object(h.jsx)(k.a,{className:"p-4 md:p-16",align:t.align,padding:t.disablePadding?"none":"default",sortDirection:e.order.id===t.id&&e.order.direction,children:t.sort&&Object(h.jsx)(E.a,{title:"Sort",placement:"right"===t.align?"bottom-end":"bottom-start",enterDelay:300,children:Object(h.jsx)(V.a,{active:e.order.id===t.id,direction:e.order.direction,onClick:(r=t.id,function(t){e.onRequestSort(t,r)}),className:"font-semibold",children:t.label})})},t.id);var r}),this)]})})};var U=Object(I.k)((function(e){var t=Object(b.c)(),r=Object(b.d)(f.d),n=Object(b.d)((function(e){return e.eCommerceApp.products.searchText})),a=Object(A.useState)(!0),c=Object(O.a)(a,2),i=c[0],s=c[1],l=Object(A.useState)([]),d=Object(O.a)(l,2),m=d[0],j=d[1],x=Object(A.useState)(r),I=Object(O.a)(x,2),R=I[0],H=I[1],B=Object(A.useState)(0),W=Object(O.a)(B,2),q=W[0],D=W[1],M=Object(A.useState)(10),z=Object(O.a)(M,2),V=z[0],E=z[1],_=Object(A.useState)({direction:"asc",id:null}),F=Object(O.a)(_,2),U=F[0],J=F[1];return Object(A.useEffect)((function(){t(Object(f.b)()).then((function(){return s(!1)}))}),[t]),Object(A.useEffect)((function(){0!==n.length?(H(v.a.filter(r,(function(e){return e.name.toLowerCase().includes(n.toLowerCase())}))),D(0)):H(r)}),[r,n]),i?Object(h.jsx)(T.a,{}):0===R.length?Object(h.jsx)(p.a.div,{initial:{opacity:0},animate:{opacity:1,transition:{delay:.1}},className:"flex flex-1 items-center justify-center h-full",children:Object(h.jsx)(u.a,{color:"textSecondary",variant:"h5",children:"There are no products!"})}):Object(h.jsxs)("div",{className:"w-full flex flex-col",children:[Object(h.jsx)(g.a,{className:"flex-grow overflow-x-auto",children:Object(h.jsxs)(y.a,{stickyHeader:!0,className:"min-w-xl","aria-labelledby":"tableTitle",children:[Object(h.jsx)(L,{selectedProductIds:m,order:U,onSelectAllClick:function(e){e.target.checked?j(R.map((function(e){return e.id}))):j([])},onRequestSort:function(e,t){var r=t,n="desc";U.id===t&&"desc"===U.direction&&(n="asc"),J({direction:n,id:r})},rowCount:R.length,onMenuItemClick:function(){j([])}}),Object(h.jsx)(S.a,{children:v.a.orderBy(R,[function(e){switch(U.id){case"categories":return e.categories[0];default:return e[U.id]}}],[U.direction]).slice(q*V,q*V+V).map((function(t){var r=-1!==m.indexOf(t.id);return Object(h.jsxs)(N.a,{className:"h-72 cursor-pointer",hover:!0,role:"checkbox","aria-checked":r,tabIndex:-1,selected:r,onClick:function(r){return n=t,void e.history.push("/apps/e-commerce/products/".concat(n.id,"/").concat(n.handle));var n},children:[Object(h.jsx)(k.a,{className:"w-40 md:w-64 text-center",padding:"none",children:Object(h.jsx)(w.a,{checked:r,onClick:function(e){return e.stopPropagation()},onChange:function(e){return function(e,t){var r=m.indexOf(t),n=[];-1===r?n=n.concat(m,t):0===r?n=n.concat(m.slice(1)):r===m.length-1?n=n.concat(m.slice(0,-1)):r>0&&(n=n.concat(m.slice(0,r),m.slice(r+1))),j(n)}(0,t.id)}})}),Object(h.jsx)(k.a,{className:"w-52 px-4 md:px-0",component:"th",scope:"row",padding:"none",children:t.images.length>0&&t.featuredImageId?Object(h.jsx)("img",{className:"w-full block rounded",src:v.a.find(t.images,{id:t.featuredImageId}).url,alt:t.name}):Object(h.jsx)("img",{className:"w-full block rounded",src:"assets/images/ecommerce/product-image-placeholder.png",alt:t.name})}),Object(h.jsx)(k.a,{className:"p-4 md:p-16",component:"th",scope:"row",children:t.name}),Object(h.jsx)(k.a,{className:"p-4 md:p-16 truncate",component:"th",scope:"row",children:t.categories.join(", ")}),Object(h.jsxs)(k.a,{className:"p-4 md:p-16",component:"th",scope:"row",align:"right",children:[Object(h.jsx)("span",{children:"$"}),t.priceTaxIncl]}),Object(h.jsxs)(k.a,{className:"p-4 md:p-16",component:"th",scope:"row",align:"right",children:[t.quantity,Object(h.jsx)("i",{className:Object(P.a)("inline-block w-8 h-8 rounded mx-8",t.quantity<=5&&"bg-red",t.quantity>5&&t.quantity<=25&&"bg-orange",t.quantity>25&&"bg-green")})]}),Object(h.jsx)(k.a,{className:"p-4 md:p-16",component:"th",scope:"row",align:"right",children:t.active?Object(h.jsx)(o.a,{className:"text-green text-20",children:"check_circle"}):Object(h.jsx)(o.a,{className:"text-red text-20",children:"remove_circle"})})]},t.id)}))})]})}),Object(h.jsx)(C.a,{className:"flex-shrink-0 border-t-1",component:"div",count:R.length,rowsPerPage:V,page:q,backIconButtonProps:{"aria-label":"Previous Page"},nextIconButtonProps:{"aria-label":"Next Page"},onChangePage:function(e,t){D(t)},onChangeRowsPerPage:function(e){E(e.target.value)}})]})}));t.default=Object(a.a)("eCommerceApp",c.a)((function(){return Object(h.jsx)(n.a,{classes:{content:"flex",contentCard:"overflow-hidden",header:"min-h-72 h-72 sm:h-136 sm:min-h-136"},header:Object(h.jsx)(x,{}),content:Object(h.jsx)(U,{}),innerScroll:!0})}))}}]);