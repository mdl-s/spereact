(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[103],{1134:function(e,t,r){"use strict";r.d(t,"a",(function(){return N}));var a=r(27),n=r(40),c=r(616),i=r(3),o=r(0),s=r(43),l=r(1097),d=r(31),u=r(7),p=r(1);var b=function(e){var t=Object(s.a)(),r=Object(u.d)(Object(d.c)(t.palette.primary.main));return Object(p.jsx)("div",{className:e.classes.header,children:e.header&&Object(p.jsx)(l.a,{theme:r,children:e.header})})},m=r(6),j=r(14),f=r(103),h=r(1118),x=r(1122);var O=function(e){var t=Object(s.a)(),r=Object(u.d)(Object(d.c)(t.palette.primary.main)),a=e.classes;return Object(p.jsxs)(p.Fragment,{children:[e.header&&Object(p.jsx)(l.a,{theme:r,children:Object(p.jsx)("div",{className:Object(i.a)(a.sidebarHeader,e.variant),children:e.header})}),e.content&&Object(p.jsx)(n.a,{className:a.sidebarContent,enable:e.innerScroll,children:e.content})]})};function v(e,t){var r=Object(o.useState)(!1),a=Object(j.a)(r,2),n=a[0],c=a[1],s=e.classes;Object(o.useImperativeHandle)(t,(function(){return{toggleSidebar:l}}));var l=function(){c(!n)};return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(h.a,{lgUp:"permanent"===e.variant,children:Object(p.jsx)(x.a,{variant:"temporary",anchor:e.position,open:n,onOpen:function(e){},onClose:function(e){return l()},disableSwipeToOpen:!0,classes:{root:Object(i.a)(s.sidebarWrapper,e.variant),paper:Object(i.a)(s.sidebar,e.variant,"left"===e.position?s.leftSidebar:s.rightSidebar)},ModalProps:{keepMounted:!0},container:e.rootRef.current,BackdropProps:{classes:{root:s.backdrop}},style:{position:"absolute"},children:Object(p.jsx)(O,Object(m.a)({},e))})}),"permanent"===e.variant&&Object(p.jsx)(h.a,{mdDown:!0,children:Object(p.jsx)(f.a,{variant:"permanent",className:Object(i.a)(s.sidebarWrapper,e.variant),open:n,classes:{paper:Object(i.a)(s.sidebar,e.variant,"left"===e.position?s.leftSidebar:s.rightSidebar)},children:Object(p.jsx)(O,Object(m.a)({},e))})})]})}var g=Object(o.forwardRef)(v),w=200,y=Object(c.a)((function(e){return{"@global":{"#fuse-main":{height:function(e){return e.innerScroll&&"100vh"}}},root:{display:"flex",flexDirection:"row",minWidth:0,minHeight:"100%",position:"relative",flex:"1 1 auto",height:"auto",backgroundColor:e.palette.background.default},innerScroll:{height:"100%"},topBg:{position:"absolute",left:0,right:0,top:0,height:w,background:"linear-gradient(to right, ".concat(e.palette.primary.dark," 0%, ").concat(e.palette.primary.main," 100%)"),backgroundSize:"cover",pointerEvents:"none"},contentWrapper:Object(a.a)({display:"flex",flexDirection:"column",padding:"0 3.2rem",flex:"1 1 100%",zIndex:2,maxWidth:"100%",minWidth:0,minHeight:0},e.breakpoints.down("xs"),{padding:"0 1.6rem"}),header:{height:136,minHeight:136,maxHeight:136,display:"flex",color:e.palette.primary.contrastText},headerSidebarToggleButton:{color:e.palette.primary.contrastText},contentCard:{display:"flex",flex:"1 1 100%",flexDirection:"column",backgroundColor:e.palette.background.paper,boxShadow:"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",minHeight:0,borderRadius:"20px 20px 0 0"},toolbar:{height:64,minHeight:64,display:"flex",alignItems:"center",borderBottom:"1px solid ".concat(e.palette.divider)},content:{flex:"1 1 auto",height:"100%",overflow:"auto","-webkit-overflow-scrolling":"touch"},sidebarWrapper:{position:"absolute",backgroundColor:"transparent",zIndex:5,overflow:"hidden","&.permanent":Object(a.a)({},e.breakpoints.up("lg"),{zIndex:1,position:"relative"})},sidebar:{position:"absolute","&.permanent":Object(a.a)({},e.breakpoints.up("lg"),{backgroundColor:"transparent",position:"relative",border:"none",overflow:"hidden"}),width:240,height:"100%"},leftSidebar:{},rightSidebar:{},sidebarHeader:{height:w,minHeight:w,color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.dark,"&.permanent":Object(a.a)({},e.breakpoints.up("lg"),{backgroundColor:"transparent"})},sidebarContent:Object(a.a)({display:"flex",flex:"1 1 auto",flexDirection:"column",backgroundColor:e.palette.background.default,color:e.palette.text.primary},e.breakpoints.up("lg"),{overflow:"auto","-webkit-overflow-scrolling":"touch"}),backdrop:{position:"absolute"}}})),S=Object(o.forwardRef)((function(e,t){var r=Object(o.useRef)(null),a=Object(o.useRef)(null),c=Object(o.useRef)(null),s=y(e),l=e.rightSidebarHeader||e.rightSidebarContent,d=e.leftSidebarHeader||e.leftSidebarContent;return Object(o.useImperativeHandle)(t,(function(){return{rootRef:c,toggleLeftSidebar:function(){r.current.toggleSidebar()},toggleRightSidebar:function(){a.current.toggleSidebar()}}})),Object(p.jsxs)("div",{className:Object(i.a)(s.root,e.innerScroll&&s.innerScroll),ref:c,children:[Object(p.jsx)("div",{className:s.topBg}),Object(p.jsxs)("div",{className:"flex container w-full",children:[d&&Object(p.jsx)(g,{position:"left",header:e.leftSidebarHeader,content:e.leftSidebarContent,variant:e.leftSidebarVariant||"permanent",innerScroll:e.innerScroll,classes:s,ref:r,rootRef:c}),Object(p.jsxs)("div",{className:Object(i.a)(s.contentWrapper,d&&(void 0===e.leftSidebarVariant||"permanent"===e.leftSidebarVariant)&&"lg:ltr:pl-0 lg:rtl:pr-0",l&&(void 0===e.rightSidebarVariant||"permanent"===e.rightSidebarVariant)&&"lg:pr-0"),children:[Object(p.jsx)(b,{header:e.header,classes:s}),Object(p.jsxs)("div",{className:Object(i.a)(s.contentCard,e.innerScroll&&"inner-scroll"),children:[e.contentToolbar&&Object(p.jsx)("div",{className:s.toolbar,children:e.contentToolbar}),e.content&&Object(p.jsx)(n.a,{className:s.content,enable:e.innerScroll,scrollToTopOnRouteChange:e.innerScroll,children:e.content})]})]}),l&&Object(p.jsx)(g,{position:"right",header:e.rightSidebarHeader,content:e.rightSidebarContent,variant:e.rightSidebarVariant||"permanent",innerScroll:e.innerScroll,classes:s,ref:a,rootRef:c})]})]})}));S.defaultProps={};var N=Object(o.memo)(S)},1175:function(e,t,r){"use strict";r.d(t,"b",(function(){return u})),r.d(t,"c",(function(){return p})),r.d(t,"d",(function(){return j})),r.d(t,"e",(function(){return h}));var a,n=r(27),c=r(16),i=r.n(c),o=r(35),s=r(19),l=r(49),d=r.n(l),u=Object(s.b)("eCommerceApp/orders/getOrders",Object(o.a)(i.a.mark((function e(){var t,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("/api/e-commerce-app/orders");case 2:return t=e.sent,e.next=5,t.data;case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})))),p=Object(s.b)("eCommerceApp/orders/removeOrders",function(){var e=Object(o.a)(i.a.mark((function e(t,r){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.dispatch,r.getState,e.next=3,d.a.post("/api/e-commerce-app/remove-orders",{orderIds:t});case 3:return e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()),b=Object(s.c)({}),m=b.getSelectors((function(e){return e.eCommerceApp.orders})),j=m.selectAll,f=(m.selectById,Object(s.d)({name:"eCommerceApp/orders",initialState:b.getInitialState({searchText:""}),reducers:{setOrdersSearchText:{reducer:function(e,t){e.searchText=t.payload},prepare:function(e){return{payload:e.target.value||""}}}},extraReducers:(a={},Object(n.a)(a,u.fulfilled,b.setAll),Object(n.a)(a,p.fulfilled,(function(e,t){return b.removeMany(e,t.payload)})),a)})),h=f.actions.setOrdersSearchText;t.a=f.reducer},1176:function(e,t,r){"use strict";r.d(t,"b",(function(){return u})),r.d(t,"c",(function(){return p})),r.d(t,"d",(function(){return j})),r.d(t,"e",(function(){return h}));var a,n=r(27),c=r(16),i=r.n(c),o=r(35),s=r(19),l=r(49),d=r.n(l),u=Object(s.b)("eCommerceApp/products/getProducts",Object(o.a)(i.a.mark((function e(){var t,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("/api/e-commerce-app/products");case 2:return t=e.sent,e.next=5,t.data;case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})))),p=Object(s.b)("eCommerceApp/products/removeProducts",function(){var e=Object(o.a)(i.a.mark((function e(t,r){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.dispatch,r.getState,e.next=3,d.a.post("/api/e-commerce-app/remove-products",{productIds:t});case 3:return e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()),b=Object(s.c)({}),m=b.getSelectors((function(e){return e.eCommerceApp.products})),j=m.selectAll,f=(m.selectById,Object(s.d)({name:"eCommerceApp/products",initialState:b.getInitialState({searchText:""}),reducers:{setProductsSearchText:{reducer:function(e,t){e.searchText=t.payload},prepare:function(e){return{payload:e.target.value||""}}}},extraReducers:(a={},Object(n.a)(a,u.fulfilled,b.setAll),Object(n.a)(a,p.fulfilled,(function(e,t){return b.removeMany(e,t.payload)})),a)})),h=f.actions.setProductsSearchText;t.a=f.reducer},1180:function(e,t,r){"use strict";r.d(t,"b",(function(){return b})),r.d(t,"d",(function(){return m})),r.d(t,"f",(function(){return j})),r.d(t,"c",(function(){return x})),r.d(t,"e",(function(){return O}));var a,n=r(27),c=r(6),i=r(16),o=r.n(i),s=r(35),l=r(19),d=r(49),u=r.n(d),p=r(52),b=Object(l.b)("eCommerceApp/product/getProduct",function(){var e=Object(s.a)(o.a.mark((function e(t){var r,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("/api/e-commerce-app/product",{params:t});case 2:return r=e.sent,e.next=5,r.data;case 5:return a=e.sent,e.abrupt("return",void 0===a?null:a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),m=Object(l.b)("eCommerceApp/product/removeProduct",function(){var e=Object(s.a)(o.a.mark((function e(t,r){var a,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.dispatch,a=r.getState,n=a().eCommerceApp.product.id,e.next=4,u.a.post("/api/e-commerce-app/remove-product",{id:n});case 4:return e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()),j=Object(l.b)("eCommerceApp/product/saveProduct",function(){var e=Object(s.a)(o.a.mark((function e(t,r){var a,n,i,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.dispatch,a=r.getState,n=a().eCommerceApp.product,e.next=4,u.a.post("/api/e-commerce-app/product/save",Object(c.a)(Object(c.a)({},n),t));case 4:return i=e.sent,e.next=7,i.data;case 7:return s=e.sent,e.abrupt("return",s);case 9:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()),f=Object(l.d)({name:"eCommerceApp/product",initialState:null,reducers:{resetProduct:function(){return null},newProduct:{reducer:function(e,t){return t.payload},prepare:function(e){return{payload:{id:p.a.generateGUID(),name:"",handle:"",description:"",categories:[],tags:[],images:[],priceTaxExcl:0,priceTaxIncl:0,taxRate:0,comparedPrice:0,quantity:0,sku:"",width:"",height:"",depth:"",weight:"",extraShippingFee:0,active:!0}}}}},extraReducers:(a={},Object(n.a)(a,b.fulfilled,(function(e,t){return t.payload})),Object(n.a)(a,j.fulfilled,(function(e,t){return t.payload})),Object(n.a)(a,m.fulfilled,(function(e,t){return null})),a)}),h=f.actions,x=h.newProduct,O=h.resetProduct;t.a=f.reducer},1193:function(e,t,r){"use strict";r.d(t,"b",(function(){return u})),r.d(t,"c",(function(){return m}));var a,n=r(27),c=r(16),i=r.n(c),o=r(35),s=r(19),l=r(49),d=r.n(l),u=Object(s.b)("eCommerceApp/order/getOrder",function(){var e=Object(o.a)(i.a.mark((function e(t){var r,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("/api/e-commerce-app/order",{params:t});case 2:return r=e.sent,e.next=5,r.data;case 5:return a=e.sent,e.abrupt("return",void 0===a?null:a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),p=Object(s.b)("eCommerceApp/order/saveOrder",function(){var e=Object(o.a)(i.a.mark((function e(t){var r,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.post("/api/e-commerce-app/order/save",t);case 2:return r=e.sent,e.next=5,r.data;case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),b=Object(s.d)({name:"eCommerceApp/order",initialState:null,reducers:{resetOrder:function(){return null}},extraReducers:(a={},Object(n.a)(a,u.fulfilled,(function(e,t){return t.payload})),Object(n.a)(a,p.fulfilled,(function(e,t){return t.payload})),a)}),m=b.actions.resetOrder;t.a=b.reducer},1217:function(e,t,r){"use strict";var a=r(110),n=r(1193),c=r(1175),i=r(1180),o=r(1176),s=Object(a.c)({products:o.a,product:i.a,orders:c.a,order:n.a});t.a=s},2646:function(e,t,r){"use strict";r.r(t);var a=r(6),n=r(14),c=r(393),i=r(1134),o=r(98),s=r(1095),l=r(1114),d=r(1116),u=r(193),p=r(134),b=r(1115),m=r(0),j=r(7),f=r(48),h=r(32),x=r(11),O=r(36),v=r(132),g=r(59),w=r(1180),y=r(1217),S=r(1088),N=r(43),C=r(1);var I=function(e){var t=Object(j.c)(),r=Object(O.g)(),a=r.formState,n=r.watch,c=r.getValues,i=a.isValid,o=a.dirtyFields,l=n("images",[]),d=n("featuredImageId"),p=n("name"),m=Object(N.a)(),v=Object(f.h)();return Object(C.jsxs)("div",{className:"flex flex-1 w-full items-center justify-between",children:[Object(C.jsxs)("div",{className:"flex flex-col items-start max-w-full min-w-0",children:[Object(C.jsx)(b.a.div,{initial:{x:20,opacity:0},animate:{x:0,opacity:1,transition:{delay:.3}},children:Object(C.jsxs)(u.a,{className:"flex items-center sm:mb-12",component:h.a,role:"button",to:"/apps/e-commerce/products",color:"inherit",children:[Object(C.jsx)(S.a,{className:"text-20",children:"ltr"===m.direction?"arrow_back":"arrow_forward"}),Object(C.jsx)("span",{className:"hidden sm:flex mx-4 font-medium",children:"Products"})]})}),Object(C.jsxs)("div",{className:"flex items-center max-w-full",children:[Object(C.jsx)(b.a.div,{className:"hidden sm:flex",initial:{scale:0},animate:{scale:1,transition:{delay:.3}},children:l.length>0&&d?Object(C.jsx)("img",{className:"w-32 sm:w-48 rounded",src:x.a.find(l,{id:d}).url,alt:p}):Object(C.jsx)("img",{className:"w-32 sm:w-48 rounded",src:"assets/images/ecommerce/product-image-placeholder.png",alt:p})}),Object(C.jsx)("div",{className:"flex flex-col min-w-0 mx-8 sm:mc-16",children:Object(C.jsxs)(b.a.div,{initial:{x:-20},animate:{x:0,transition:{delay:.3}},children:[Object(C.jsx)(u.a,{className:"text-16 sm:text-20 truncate font-semibold",children:p||"New Product"}),Object(C.jsx)(u.a,{variant:"caption",className:"font-medium",children:"Product Detail"})]})})]})]}),Object(C.jsxs)(b.a.div,{className:"flex",initial:{opacity:0,x:20},animate:{opacity:1,x:0,transition:{delay:.3}},children:[Object(C.jsx)(s.a,{className:"whitespace-nowrap mx-4",variant:"contained",color:"secondary",onClick:function(){t(Object(w.d)()).then((function(){v.push("/apps/e-commerce/products")}))},startIcon:Object(C.jsx)(S.a,{className:"hidden sm:flex",children:"delete"}),children:"Remove"}),Object(C.jsx)(s.a,{className:"whitespace-nowrap mx-4",variant:"contained",color:"secondary",disabled:x.a.isEmpty(o)||!i,onClick:function(){t(Object(w.f)(c()))},children:"Save"})]})]})},k=r(1094),P=r(2658);var T=function(e){var t=Object(O.g)(),r=t.control,n=t.formState.errors;return Object(C.jsxs)("div",{children:[Object(C.jsx)(O.a,{name:"name",control:r,render:function(e){var t,r=e.field;return Object(C.jsx)(k.a,Object(a.a)(Object(a.a)({},r),{},{className:"mt-8 mb-16",error:!!n.name,required:!0,helperText:null===n||void 0===n||null===(t=n.name)||void 0===t?void 0:t.message,label:"Name",autoFocus:!0,id:"name",variant:"outlined",fullWidth:!0}))}}),Object(C.jsx)(O.a,{name:"description",control:r,render:function(e){var t=e.field;return Object(C.jsx)(k.a,Object(a.a)(Object(a.a)({},t),{},{className:"mt-8 mb-16",id:"description",label:"Description",type:"text",multiline:!0,rows:5,variant:"outlined",fullWidth:!0}))}}),Object(C.jsx)(O.a,{name:"categories",control:r,defaultValue:[],render:function(e){var t=e.field,r=t.onChange,n=t.value;return Object(C.jsx)(P.a,{className:"mt-8 mb-16",multiple:!0,freeSolo:!0,options:[],value:n,onChange:function(e,t){r(t)},renderInput:function(e){return Object(C.jsx)(k.a,Object(a.a)(Object(a.a)({},e),{},{placeholder:"Select multiple categories",label:"Categories",variant:"outlined",InputLabelProps:{shrink:!0}}))}})}}),Object(C.jsx)(O.a,{name:"tags",control:r,defaultValue:[],render:function(e){var t=e.field,r=t.onChange,n=t.value;return Object(C.jsx)(P.a,{className:"mt-8 mb-16",multiple:!0,freeSolo:!0,options:[],value:n,onChange:function(e,t){r(t)},renderInput:function(e){return Object(C.jsx)(k.a,Object(a.a)(Object(a.a)({},e),{},{placeholder:"Select multiple tags",label:"Tags",variant:"outlined",InputLabelProps:{shrink:!0}}))}})}})]})};var A=function(e){var t=Object(O.g)().control;return Object(C.jsxs)("div",{children:[Object(C.jsx)(O.a,{name:"sku",control:t,render:function(e){var t=e.field;return Object(C.jsx)(k.a,Object(a.a)(Object(a.a)({},t),{},{className:"mt-8 mb-16",required:!0,label:"SKU",autoFocus:!0,id:"sku",variant:"outlined",fullWidth:!0}))}}),Object(C.jsx)(O.a,{name:"quantity",control:t,render:function(e){var t=e.field;return Object(C.jsx)(k.a,Object(a.a)(Object(a.a)({},t),{},{className:"mt-8 mb-16",label:"Quantity",id:"quantity",variant:"outlined",type:"number",fullWidth:!0}))}})]})},W=r(1112);var R=function(e){var t=Object(O.g)().control;return Object(C.jsxs)("div",{children:[Object(C.jsx)(O.a,{name:"priceTaxExcl",control:t,render:function(e){var t=e.field;return Object(C.jsx)(k.a,Object(a.a)(Object(a.a)({},t),{},{className:"mt-8 mb-16",label:"Tax Excluded Price",id:"priceTaxExcl",InputProps:{startAdornment:Object(C.jsx)(W.a,{position:"start",children:"$"})},type:"number",variant:"outlined",autoFocus:!0,fullWidth:!0}))}}),Object(C.jsx)(O.a,{name:"priceTaxIncl",control:t,render:function(e){var t=e.field;return Object(C.jsx)(k.a,Object(a.a)(Object(a.a)({},t),{},{className:"mt-8 mb-16",label:"Tax Included Price",id:"priceTaxIncl",InputProps:{startAdornment:Object(C.jsx)(W.a,{position:"start",children:"$"})},type:"number",variant:"outlined",fullWidth:!0}))}}),Object(C.jsx)(O.a,{name:"taxRate",control:t,render:function(e){var t=e.field;return Object(C.jsx)(k.a,Object(a.a)(Object(a.a)({},t),{},{className:"mt-8 mb-16",label:"Tax Rate",id:"taxRate",InputProps:{startAdornment:Object(C.jsx)(W.a,{position:"start",children:"$"})},type:"number",variant:"outlined",fullWidth:!0}))}}),Object(C.jsx)(O.a,{name:"comparedPrice",control:t,render:function(e){var t=e.field;return Object(C.jsx)(k.a,Object(a.a)(Object(a.a)({},t),{},{className:"mt-8 mb-16",label:"Compared Price",id:"comparedPrice",InputProps:{startAdornment:Object(C.jsx)(W.a,{position:"start",children:"$"})},type:"number",variant:"outlined",fullWidth:!0,helperText:"Add a compare price to show next to the real price"}))}})]})},F=r(16),H=r.n(F),V=r(12),D=r(35),E=r(183),B=r(616),$=r(3),q=r(52),U=Object(B.a)((function(e){return{productImageFeaturedStar:{position:"absolute",top:0,right:0,color:E.a[400],opacity:0},productImageUpload:{transitionProperty:"box-shadow",transitionDuration:e.transitions.duration.short,transitionTimingFunction:e.transitions.easing.easeInOut},productImageItem:{transitionProperty:"box-shadow",transitionDuration:e.transitions.duration.short,transitionTimingFunction:e.transitions.easing.easeInOut,"&:hover":{"& $productImageFeaturedStar":{opacity:.8}},"&.featured":{pointerEvents:"none",boxShadow:e.shadows[3],"& $productImageFeaturedStar":{opacity:1},"&:hover $productImageFeaturedStar":{opacity:1}}}}}));var z=function(e){var t=U(e),r=Object(O.g)(),a=r.control,n=r.watch,c=(r.setValue,n("images",[]));return Object(C.jsx)("div",{children:Object(C.jsxs)("div",{className:"flex justify-center sm:justify-start flex-wrap -mx-16",children:[Object(C.jsx)(O.a,{name:"images",control:a,defaultValue:[],render:function(e){var r=e.field,a=r.onChange,n=r.value;return Object(C.jsxs)("label",{htmlFor:"button-file",className:Object($.a)(t.productImageUpload,"flex items-center justify-center relative w-128 h-128 rounded-16 mx-12 mb-24 overflow-hidden cursor-pointer shadow hover:shadow-lg"),children:[Object(C.jsx)("input",{accept:"image/*",className:"hidden",id:"button-file",type:"file",onChange:function(){var e=Object(D.a)(H.a.mark((function e(t){var r,c;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=function(){return new Promise((function(e,r){var a=t.target.files[0];if(a){var n=new FileReader;n.onload=function(){e({id:q.a.generateGUID(),url:"data:".concat(a.type,";base64,").concat(btoa(n.result)),type:"image"})},n.onerror=r,n.readAsBinaryString(a)}}))},e.next=3,r();case 3:c=e.sent,a([c].concat(Object(V.a)(n)));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}),Object(C.jsx)(S.a,{fontSize:"large",color:"action",children:"cloud_upload"})]})}}),Object(C.jsx)(O.a,{name:"featuredImageId",control:a,defaultValue:"",render:function(e){var r=e.field,a=r.onChange,n=r.value;return c.map((function(e){return Object(C.jsxs)("div",{onClick:function(){return a(e.id)},onKeyDown:function(){return a(e.id)},role:"button",tabIndex:0,className:Object($.a)(t.productImageItem,"flex items-center justify-center relative w-128 h-128 rounded-16 mx-12 mb-24 overflow-hidden cursor-pointer outline-none shadow hover:shadow-lg",e.id===n&&"featured"),children:[Object(C.jsx)(S.a,{className:t.productImageFeaturedStar,children:"star"}),Object(C.jsx)("img",{className:"max-w-none w-auto h-full",src:e.url,alt:"product"})]},e.id)}))}})]})})};var M=function(e){var t=Object(O.g)().control;return Object(C.jsxs)("div",{children:[Object(C.jsxs)("div",{className:"flex -mx-4",children:[Object(C.jsx)(O.a,{name:"width",control:t,render:function(e){var t=e.field;return Object(C.jsx)(k.a,Object(a.a)(Object(a.a)({},t),{},{className:"mt-8 mb-16 mx-4",label:"Width",autoFocus:!0,id:"width",variant:"outlined",fullWidth:!0}))}}),Object(C.jsx)(O.a,{name:"height",control:t,render:function(e){var t=e.field;return Object(C.jsx)(k.a,Object(a.a)(Object(a.a)({},t),{},{className:"mt-8 mb-16 mx-4",label:"Height",id:"height",variant:"outlined",fullWidth:!0}))}}),Object(C.jsx)(O.a,{name:"depth",control:t,render:function(e){var t=e.field;return Object(C.jsx)(k.a,Object(a.a)(Object(a.a)({},t),{},{className:"mt-8 mb-16 mx-4",label:"Depth",id:"depth",variant:"outlined",fullWidth:!0}))}})]}),Object(C.jsx)(O.a,{name:"weight",control:t,render:function(e){var t=e.field;return Object(C.jsx)(k.a,Object(a.a)(Object(a.a)({},t),{},{className:"mt-8 mb-16",label:"Weight",id:"weight",variant:"outlined",fullWidth:!0}))}}),Object(C.jsx)(O.a,{name:"extraShippingFee",control:t,render:function(e){var t=e.field;return Object(C.jsx)(k.a,Object(a.a)(Object(a.a)({},t),{},{className:"mt-8 mb-16",label:"Extra Shipping Fee",id:"extraShippingFee",variant:"outlined",InputProps:{startAdornment:Object(C.jsx)(W.a,{position:"start",children:"$"})},fullWidth:!0}))}})]})},G=g.d().shape({name:g.f().required("You must enter a product name").min(5,"The product name must be at least 5 characters")});t.default=Object(p.a)("eCommerceApp",y.a)((function(e){var t=Object(j.c)(),r=Object(j.d)((function(e){return e.eCommerceApp.product})),p=Object(f.j)(),g=Object(m.useState)(0),y=Object(n.a)(g,2),S=y[0],N=y[1],k=Object(m.useState)(!1),P=Object(n.a)(k,2),W=P[0],F=P[1],H=Object(O.f)({mode:"onChange",defaultValues:{},resolver:Object(v.a)(G)}),V=H.reset,D=H.watch,E=(H.control,H.onChange,H.formState,D());return Object(o.b)((function(){"new"===p.productId?t(Object(w.c)()):t(Object(w.b)(p)).then((function(e){e.payload||F(!0)}))}),[t,p]),Object(m.useEffect)((function(){r&&V(r)}),[r,V]),Object(m.useEffect)((function(){return function(){t(Object(w.e)()),F(!1)}}),[t]),W?Object(C.jsxs)(b.a.div,{initial:{opacity:0},animate:{opacity:1,transition:{delay:.1}},className:"flex flex-col flex-1 items-center justify-center h-full",children:[Object(C.jsx)(u.a,{color:"textSecondary",variant:"h5",children:"There is no such product!"}),Object(C.jsx)(s.a,{className:"mt-24",component:h.a,variant:"outlined",to:"/apps/e-commerce/products",color:"inherit",children:"Go to Products Page"})]}):x.a.isEmpty(E)||r&&p.productId!==r.id&&"new"!==p.productId?Object(C.jsx)(c.a,{}):Object(C.jsx)(O.b,Object(a.a)(Object(a.a)({},H),{},{children:Object(C.jsx)(i.a,{classes:{toolbar:"p-0",header:"min-h-72 h-72 sm:h-136 sm:min-h-136"},header:Object(C.jsx)(I,{}),contentToolbar:Object(C.jsxs)(d.a,{value:S,onChange:function(e,t){N(t)},indicatorColor:"primary",textColor:"primary",variant:"scrollable",scrollButtons:"auto",classes:{root:"w-full h-64"},children:[Object(C.jsx)(l.a,{className:"h-64",label:"Basic Info"}),Object(C.jsx)(l.a,{className:"h-64",label:"Product Images"}),Object(C.jsx)(l.a,{className:"h-64",label:"Pricing"}),Object(C.jsx)(l.a,{className:"h-64",label:"Inventory"}),Object(C.jsx)(l.a,{className:"h-64",label:"Shipping"})]}),content:Object(C.jsxs)("div",{className:"p-16 sm:p-24 max-w-2xl",children:[Object(C.jsx)("div",{className:0!==S?"hidden":"",children:Object(C.jsx)(T,{})}),Object(C.jsx)("div",{className:1!==S?"hidden":"",children:Object(C.jsx)(z,{})}),Object(C.jsx)("div",{className:2!==S?"hidden":"",children:Object(C.jsx)(R,{})}),Object(C.jsx)("div",{className:3!==S?"hidden":"",children:Object(C.jsx)(A,{})}),Object(C.jsx)("div",{className:4!==S?"hidden":"",children:Object(C.jsx)(M,{})})]}),innerScroll:!0})}))}))}}]);