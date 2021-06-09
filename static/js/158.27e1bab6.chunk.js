(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[158],{2642:function(e,t,a){"use strict";a.r(t);var c,n,r=a(27),s=a(1098),o=a(1121),l=a(1095),i=a(103),d=a(1118),u=a(1088),b=a(1031),j=a(192),p=a(616),f=a(66),h=a(1122),x=a(1099),m=a(193),O=a(134),v=a(3),g=a(0),w=a(7),y=a(14),N=a(40),C=a(1094),k=a(402),S=a.n(k),I=a(16),A=a.n(I),R=a(35),L=a(19),P=a(49),T=a.n(P),M=Object(L.b)("chatApp/contacts/getContacts",function(){var e=Object(R.a)(A.a.mark((function e(t){var a,c;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.a.get("/api/chat/contacts",{params:t});case 2:return a=e.sent,e.next=5,a.data;case 5:return c=e.sent,e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),B=Object(L.c)({}),D=B.getSelectors((function(e){return e.chatApp.contacts})),U=D.selectAll,z=D.selectById,W=Object(L.d)({name:"chatApp/contacts",initialState:B.getInitialState({selectedContactId:null}),reducers:{setSelectedContactId:function(e,t){e.selectedContactId=t.payload},removeSelectedContactId:function(e,t){e.selectedContactId=null}},extraReducers:Object(r.a)({},M.fulfilled,B.setAll)}),E=W.actions,_=E.setSelectedContactId,H=(E.removeSelectedContactId,W.reducer),F=a(12),K=Object(L.d)({name:"chatApp/sidebars",initialState:{mobileChatsSidebarOpen:!1,userSidebarOpen:!1,contactSidebarOpen:!1},reducers:{openMobileChatsSidebar:function(e,t){e.mobileChatsSidebarOpen=!0},closeMobileChatsSidebar:function(e,t){e.mobileChatsSidebarOpen=!1},openUserSidebar:function(e,t){e.userSidebarOpen=!0},closeUserSidebar:function(e,t){e.userSidebarOpen=!1},openContactSidebar:function(e,t){e.contactSidebarOpen=!0},closeContactSidebar:function(e,t){e.contactSidebarOpen=!1}}}),J=K.actions,q=J.openMobileChatsSidebar,V=J.closeMobileChatsSidebar,G=J.openUserSidebar,Q=J.closeUserSidebar,X=J.openContactSidebar,Y=J.closeContactSidebar,Z=K.reducer,$=Object(L.b)("chatApp/user/getUserData",Object(R.a)(A.a.mark((function e(){var t,a;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.a.get("/api/chat/user");case 2:return t=e.sent,e.next=5,t.data;case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})))),ee=Object(L.b)("chatApp/user/updateUserData",function(){var e=Object(R.a)(A.a.mark((function e(t){var a,c;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.a.post("/api/chat/user/data",t);case 2:return a=e.sent,e.next=5,a.data;case 5:return c=e.sent,e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),te=Object(L.d)({name:"chatApp/user",initialState:null,reducers:{updateUserChatList:function(e,t){e.chatList=t.payload}},extraReducers:(c={},Object(r.a)(c,$.fulfilled,(function(e,t){return t.payload})),Object(r.a)(c,ee.fulfilled,(function(e,t){return t.payload})),c)}),ae=te.actions.updateUserChatList,ce=te.reducer,ne=Object(L.b)("chatApp/chat/getChat",function(){var e=Object(R.a)(A.a.mark((function e(t,a){var c,n,r,s,o,l,i,d,u;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.contactId,n=t.isMobile,r=a.dispatch,s=a.getState,o=s().chatApp.user.id,e.next=5,T.a.get("/api/chat/get-chat",{params:{contactId:c,userId:o}});case 5:return l=e.sent,e.next=8,l.data;case 8:return i=e.sent,d=i.chat,u=i.userChatList,r(_(c)),r(ae(u)),n&&r(V()),e.abrupt("return",d);case 15:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),re=Object(L.b)("chatApp/chat/sendMessage",function(){var e=Object(R.a)(A.a.mark((function e(t,a){var c,n,r,s,o,l,i,d;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.messageText,n=t.chatId,r=t.contactId,s=a.dispatch,a.getState,e.next=4,T.a.post("/api/chat/send-message",{chatId:n,messageText:c,contactId:r});case 4:return o=e.sent,e.next=7,o.data;case 7:return l=e.sent,i=l.message,d=l.userChatList,s(ae(d)),e.abrupt("return",i);case 12:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),se=Object(L.d)({name:"chatApp/chat",initialState:null,reducers:{removeChat:function(e,t){return t.payload}},extraReducers:(n={},Object(r.a)(n,ne.fulfilled,(function(e,t){return t.payload})),Object(r.a)(n,re.fulfilled,(function(e,t){e.dialog=[].concat(Object(F.a)(e.dialog),[t.payload])})),n)}).reducer,oe=a(1),le=Object(p.a)((function(e){return{messageRow:{"&.contact":{"& .bubble":{backgroundColor:e.palette.background.paper,color:e.palette.getContrastText(e.palette.background.paper),borderTopLeftRadius:5,borderBottomLeftRadius:5,borderTopRightRadius:20,borderBottomRightRadius:20,"& .time":{marginLeft:12}},"&.first-of-group":{"& .bubble":{borderTopLeftRadius:20}},"&.last-of-group":{"& .bubble":{borderBottomLeftRadius:20}}},"&.me":{paddingLeft:40,"& .avatar":{order:2,margin:"0 0 0 16px"},"& .bubble":{marginLeft:"auto",backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText,borderTopLeftRadius:20,borderBottomLeftRadius:20,borderTopRightRadius:5,borderBottomRightRadius:5,"& .time":{justifyContent:"flex-end",right:0,marginRight:12}},"&.first-of-group":{"& .bubble":{borderTopRightRadius:20}},"&.last-of-group":{"& .bubble":{borderBottomRightRadius:20}}},"&.contact + .me, &.me + .contact":{paddingTop:20,marginTop:20},"&.first-of-group":{"& .bubble":{borderTopLeftRadius:20,paddingTop:13}},"&.last-of-group":{"& .bubble":{borderBottomLeftRadius:20,paddingBottom:13,"& .time":{display:"flex"}}}}}}));var ie=function(e){var t=Object(w.c)(),a=Object(w.d)(U),c=Object(w.d)((function(e){return e.chatApp.contacts.selectedContactId})),n=Object(w.d)((function(e){return e.chatApp.chat})),r=Object(w.d)((function(e){return e.chatApp.user})),s=le(e),l=Object(g.useRef)(null),i=Object(g.useState)(""),d=Object(y.a)(i,2),p=d[0],f=d[1];function h(e,t){return e.who===c&&(n.dialog[t+1]&&n.dialog[t+1].who!==c||!n.dialog[t+1])}function x(e,t){return 0===t||n.dialog[t-1]&&n.dialog[t-1].who!==e.who}function O(e,t){return t===n.dialog.length-1||n.dialog[t+1]&&n.dialog[t+1].who!==e.who}return Object(g.useEffect)((function(){n&&(l.current.scrollTop=l.current.scrollHeight)}),[n]),Object(oe.jsxs)("div",{className:Object(v.a)("flex flex-col relative",e.className),children:[Object(oe.jsx)(N.a,{ref:l,className:"flex flex-1 flex-col overflow-y-auto",children:n&&n.dialog.length>0?Object(oe.jsx)("div",{className:"flex flex-col pt-16 px-16 ltr:pl-56 rtl:pr-56 pb-40",children:n.dialog.map((function(e,t){var c=e.who===r.id?r:a.find((function(t){return t.id===e.who}));return Object(oe.jsxs)("div",{className:Object(v.a)(s.messageRow,"flex flex-col flex-grow-0 flex-shrink-0 items-start justify-end relative px-16 pb-4",{me:e.who===r.id},{contact:e.who!==r.id},{"first-of-group":x(e,t)},{"last-of-group":O(e,t)},t+1===n.dialog.length&&"pb-96"),children:[h(e,t)&&Object(oe.jsx)(o.a,{className:"avatar absolute ltr:left-0 rtl:right-0 m-0 -mx-32",src:c.avatar}),Object(oe.jsxs)("div",{className:"bubble flex relative items-center justify-center p-12 max-w-full shadow",children:[Object(oe.jsx)("div",{className:"leading-tight whitespace-pre-wrap",children:e.message}),Object(oe.jsx)(m.a,{className:"time absolute hidden w-full text-11 mt-8 -mb-24 ltr:left-0 rtl:right-0 bottom-0 whitespace-nowrap",color:"textSecondary",children:S()(new Date(e.time),{addSuffix:!0})})]})]},e.time)}))}):Object(oe.jsxs)("div",{className:"flex flex-col flex-1",children:[Object(oe.jsx)("div",{className:"flex flex-col flex-1 items-center justify-center",children:Object(oe.jsx)(u.a,{className:"text-128",color:"disabled",children:"chat"})}),Object(oe.jsx)(m.a,{className:"px-16 pb-24 text-center",color:"textSecondary",children:"Start a conversation by typing your message below."})]})}),n&&Object(oe.jsx)("form",{onSubmit:function(e){e.preventDefault(),""!==p&&t(re({messageText:p,chatId:n.id,contactId:c})).then((function(){f("")}))},className:"absolute bottom-0 right-0 left-0 py-16 px-8",children:Object(oe.jsxs)(j.a,{className:"flex items-center relative rounded-24 shadow",children:[Object(oe.jsx)(C.a,{autoFocus:!1,id:"message-input",className:"flex-1",InputProps:{disableUnderline:!0,classes:{root:"flex flex-grow flex-shrink-0 mx-16 ltr:mr-48 rtl:ml-48 my-8",input:""},placeholder:"Type your message"},InputLabelProps:{shrink:!1,className:s.bootstrapFormLabel},onChange:function(e){f(e.target.value)},value:p}),Object(oe.jsx)(b.a,{className:"absolute ltr:right-0 rtl:left-0 top-0",type:"submit",children:Object(oe.jsx)(u.a,{className:"text-24",color:"action",children:"send"})})]})})]})},de=a(6),ue=a(52),be=a(572),je=a(1036),pe=a(1109),fe=a(1101),he=a(544),xe=a(1090),me=a(43),Oe=a(1044),ve=a(1115),ge=a(1037),we=a(164),ye=a.n(we);var Ne=function(e){switch(e.status){case"online":return Object(oe.jsx)(u.a,{className:"block text-16 text-green bg-white rounded-full",children:"check_circle"});case"away":return Object(oe.jsx)(u.a,{className:"block text-16 text-white bg-yellow-700 rounded-full",children:"access_time"});case"do-not-disturb":return Object(oe.jsx)(u.a,{className:"block text-16 text-red bg-white rounded-full",children:"remove_circle_outline"});case"offline":return Object(oe.jsx)(u.a,{className:"block text-16 text-grey-700 bg-white rounded-full",children:"not_interested"});default:return null}},Ce=Object(p.a)((function(e){return{contactListItem:{"&.active":{backgroundColor:e.palette.background.paper}},unreadBadge:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText}}}));var ke=function(e){var t=Ce(e);return Object(oe.jsxs)(ge.a,{button:!0,className:Object(v.a)(t.contactListItem,"px-16 py-12 min-h-92",{active:e.selectedContactId===e.contact.id}),onClick:function(){return e.onContactClick(e.contact.id)},children:[Object(oe.jsxs)("div",{className:"relative",children:[Object(oe.jsx)("div",{className:"absolute right-0 bottom-0 -m-4 z-10",children:Object(oe.jsx)(Ne,{status:e.contact.status})}),Object(oe.jsx)(o.a,{src:e.contact.avatar,alt:e.contact.name,children:e.contact.avatar&&""!==e.contact.avatar?"":e.contact.name[0]})]}),Object(oe.jsx)(fe.a,{classes:{root:"min-w-px px-16",primary:"font-medium text-14",secondary:"truncate"},primary:e.contact.name,secondary:e.contact.mood}),e.contact.chatId&&Object(oe.jsxs)("div",{className:"flex flex-col justify-center items-end",children:[e.contact.lastMessageTime&&Object(oe.jsx)(m.a,{className:"whitespace-nowrap mb-8 font-medium text-12",color:"textSecondary",children:ye()(new Date(e.contact.lastMessageTime),"PP")}),e.contact.unread&&Object(oe.jsx)("div",{className:Object(v.a)(t.unreadBadge,"flex items-center justify-center min-w-24 h-24 rounded-full font-medium text-12 text-center"),children:e.contact.unread})]})]})},Se=[{title:"Online",value:"online"},{title:"Away",value:"away"},{title:"Do not disturb",value:"do-not-disturb"},{title:"Offline",value:"offline"}];var Ie=function(e){var t=Object(w.c)(),a=Object(w.d)(U),c=Object(w.d)((function(e){return e.chatApp.user})),n=Object(me.a)(),r=Object(Oe.a)(n.breakpoints.down("md")),l=Object(g.useState)(""),i=Object(y.a)(l,2),d=i[0],p=i[1],f=Object(g.useState)(null),h=Object(y.a)(f,2),O=h[0],v=h[1],C=Object(g.useState)(null),k=Object(y.a)(C,2),S=k[0],I=k[1];function A(e){I(null)}function R(e){e.preventDefault(),e.stopPropagation(),v(e.currentTarget)}function L(e){p(e.target.value)}return Object(oe.jsxs)("div",{className:"flex flex-col flex-auto h-full",children:[Object(oe.jsxs)(s.a,{position:"static",color:"default",elevation:0,children:[Object(oe.jsxs)(x.a,{className:"flex justify-between items-center px-4",children:[c&&Object(oe.jsxs)("div",{className:"relative w-40 h-40 p-0 mx-12 cursor-pointer",onClick:function(){return t(G())},onKeyDown:function(){return t(G())},role:"button",tabIndex:0,children:[Object(oe.jsx)(o.a,{src:c.avatar,alt:c.name,className:"w-40 h-40",children:c.avatar&&""!==c.avatar?"":c.name[0]}),Object(oe.jsx)("div",{className:"absolute right-0 bottom-0 -m-4 z-10 cursor-pointer","aria-owns":O?"switch-menu":null,"aria-haspopup":"true",onClick:R,onKeyDown:R,role:"button",tabIndex:0,children:Object(oe.jsx)(Ne,{status:c.status})}),Object(oe.jsx)(he.a,{id:"status-switch",anchorEl:O,open:Boolean(O),onClose:function(e){e.preventDefault(),e.stopPropagation(),v(null)},children:Se.map((function(e){return Object(oe.jsxs)(xe.a,{onClick:function(a){return function(e,a){e.preventDefault(),e.stopPropagation(),t(ee(Object(de.a)(Object(de.a)({},c),{},{status:a}))),v(null)}(a,e.value)},children:[Object(oe.jsx)(pe.a,{className:"min-w-40",children:Object(oe.jsx)(Ne,{status:e.value})}),Object(oe.jsx)(fe.a,{primary:e.title})]},e.value)}))})]}),Object(oe.jsxs)("div",{children:[Object(oe.jsx)(b.a,{"aria-owns":S?"chats-more-menu":null,"aria-haspopup":"true",onClick:function(e){I(e.currentTarget)},children:Object(oe.jsx)(u.a,{children:"more_vert"})}),Object(oe.jsxs)(he.a,{id:"chats-more-menu",anchorEl:S,open:Boolean(S),onClose:A,children:[Object(oe.jsx)(xe.a,{onClick:A,children:"Profile"}),Object(oe.jsx)(xe.a,{onClick:A,children:"Logout"})]})]})]}),Object(g.useMemo)((function(){return Object(oe.jsx)(x.a,{className:"px-16",children:Object(oe.jsxs)(j.a,{className:"flex p-4 items-center w-full px-8 py-4 shadow",children:[Object(oe.jsx)(u.a,{color:"action",children:"search"}),Object(oe.jsx)(be.a,{placeholder:"Search or start new chat",className:"flex flex-1 px-8",disableUnderline:!0,fullWidth:!0,value:d,inputProps:{"aria-label":"Search"},onChange:L})]})})}),[d])]}),Object(oe.jsx)(N.a,{className:"overflow-y-auto flex-1",children:Object(oe.jsx)(je.a,{className:"w-full",children:Object(g.useMemo)((function(){function e(e,t){return 0===t.length?e:ue.a.filterArrayByString(e,t)}var n=a.length>0&&c&&c.chatList?c.chatList.map((function(e){return Object(de.a)(Object(de.a)({},e),a.find((function(t){return t.id===e.contactId})))})):[],s=e(Object(F.a)(a),d),o=e(Object(F.a)(n),d),l={hidden:{opacity:0,y:20},show:{opacity:1,y:0}};return Object(oe.jsxs)(ve.a.div,{className:"flex flex-col flex-shrink-0",variants:{show:{transition:{staggerChildren:.1}}},initial:"hidden",animate:"show",children:[o.length>0&&Object(oe.jsx)(ve.a.div,{variants:l,children:Object(oe.jsx)(m.a,{className:"font-medium text-20 px-16 py-24",color:"secondary",children:"Chats"})}),o.map((function(e){return Object(oe.jsx)(ve.a.div,{variants:l,children:Object(oe.jsx)(ke,{contact:e,onContactClick:function(e){return t(ne({contactId:e,isMobile:r}))}})},e.id)})),s.length>0&&Object(oe.jsx)(ve.a.div,{variants:l,children:Object(oe.jsx)(m.a,{className:"font-medium text-20 px-16 py-24",color:"secondary",children:"Contacts"})}),s.map((function(e){return Object(oe.jsx)(ve.a.div,{variants:l,children:Object(oe.jsx)(ke,{contact:e,onContactClick:function(e){return t(ne({contactId:e,isMobile:r}))}})},e.id)}))]})}),[a,c,d,t,r])})})]})};var Ae=function(e){var t=Object(w.c)(),a=Object(w.d)(U),c=Object(w.d)((function(e){return e.chatApp.contacts.selectedContactId})),n=a.find((function(e){return e.id===c}));return n?Object(oe.jsxs)("div",{className:"flex flex-col flex-auto h-full",children:[Object(oe.jsxs)(s.a,{position:"static",color:"primary",elevation:0,children:[Object(oe.jsxs)(x.a,{className:"flex justify-between items-center px-4",children:[Object(oe.jsx)(m.a,{className:"px-12",color:"inherit",variant:"subtitle1",children:"Contact Info"}),Object(oe.jsx)(b.a,{onClick:function(){return t(Y())},color:"inherit",children:Object(oe.jsx)(u.a,{children:"close"})})]}),Object(oe.jsxs)(x.a,{className:"flex flex-col justify-center items-center p-24",children:[Object(oe.jsx)(o.a,{src:n.avatar,alt:n.name,className:"w-96 h-96",children:n.avatar&&""!==n.avatar?"":n.name[0]}),Object(oe.jsx)(m.a,{color:"inherit",className:"mt-16",variant:"h6",children:n.name})]})]}),Object(oe.jsx)(N.a,{className:"overflow-y-auto flex-1 p-24",children:Object(oe.jsx)(C.a,{label:"Mood",className:"w-full",variant:"outlined",value:n.mood,margin:"normal",disabled:!0,multiline:!0})})]}):null},Re=a(110),Le=Object(Re.c)({sidebars:Z,user:ce,contacts:H,chat:se}),Pe=a(98),Te=a(1038),Me=a(1092),Be=a(1039),De=a(1117),Ue=a(1091),ze=a(36),We=a(11),Ee=[{title:"Online",value:"online"},{title:"Away",value:"away"},{title:"Do not disturb",value:"do-not-disturb"},{title:"Offline",value:"offline"}];var _e=function(e){var t=Object(w.c)(),a=Object(w.d)((function(e){return e.chatApp.user})),c=Object(ze.f)({defaultValues:a}),n=c.control,r=(c.handleSubmit,(0,c.watch)()),l=Object(Pe.a)((function(e){t(ee(e))}),500);return Object(g.useEffect)((function(){if(a){var e=Object(de.a)(Object(de.a)({},a),r);We.a.isEqual(a,e)||l(e)}}),[a,r,l]),Object(oe.jsxs)("div",{className:"flex flex-col flex-auto h-full",children:[Object(oe.jsxs)(s.a,{position:"static",color:"primary",elevation:0,children:[Object(oe.jsxs)(x.a,{className:"flex justify-between items-center px-4",children:[Object(oe.jsx)(m.a,{className:"px-12",color:"inherit",variant:"subtitle1",children:"User Info"}),Object(oe.jsx)(b.a,{onClick:function(){return t(Q())},color:"inherit",children:Object(oe.jsx)(u.a,{children:"close"})})]}),Object(oe.jsxs)(x.a,{className:"flex flex-col justify-center items-center p-24",children:[Object(oe.jsx)(o.a,{src:a.avatar,alt:a.name,className:"w-96 h-96",children:a.avatar&&""!==a.avatar?"":a.name[0]}),Object(oe.jsx)(m.a,{color:"inherit",className:"mt-16",variant:"h6",children:a.name})]})]}),Object(oe.jsx)(N.a,{className:"overflow-y-auto flex-1 p-24",children:Object(oe.jsxs)("form",{children:[Object(oe.jsx)(Te.a,{component:"fieldset",className:"w-full mb-16",children:Object(oe.jsx)(ze.a,{name:"mood",control:n,render:function(e){var t=e.field;return Object(oe.jsx)(C.a,Object(de.a)(Object(de.a)({},t),{},{label:"Mood",className:"w-full",margin:"normal",multiline:!0,variant:"outlined"}))}})}),Object(oe.jsxs)(Te.a,{component:"fieldset",className:"w-full mb-16",children:[Object(oe.jsx)(Be.a,{component:"legend",children:"Status"}),Object(oe.jsx)(ze.a,{name:"status",control:n,render:function(e){var t=e.field;return Object(oe.jsx)(Ue.a,Object(de.a)(Object(de.a)({},t),{},{"aria-label":"Status",name:"status",children:Ee.map((function(e){return Object(oe.jsx)(Me.a,{value:e.value,control:Object(oe.jsx)(De.a,{}),label:Object(oe.jsxs)("div",{className:"flex items-center",children:[Object(oe.jsx)(Ne,{status:e.value}),Object(oe.jsx)("span",{className:"mx-8",children:e.title})]})},e.value)}))}))}})]})]})})]})},He=Object(p.a)((function(e){var t;return{"@global":{"#fuse-main":{height:"100vh"}},root:{display:"flex",flexDirection:"row",minHeight:"100%",position:"relative",flex:"1 1 auto",height:"auto",backgroundColor:e.palette.background.default},topBg:{position:"absolute",left:0,right:0,top:0,height:200,backgroundImage:'url("../../assets/images/backgrounds/header-bg.png")',backgroundColor:e.palette.primary.dark,backgroundSize:"cover",pointerEvents:"none"},contentCardWrapper:(t={position:"relative",padding:24,maxWidth:1400,display:"flex",flexDirection:"column",flex:"1 0 auto",width:"100%",minWidth:"0",maxHeight:"100%",margin:"0 auto"},Object(r.a)(t,e.breakpoints.down("sm"),{padding:16}),Object(r.a)(t,e.breakpoints.down("xs"),{padding:12}),t),contentCard:{display:"flex",position:"relative",flex:"1 1 100%",flexDirection:"row",backgroundImage:'url("/assets/images/patterns/rain-grey.png")',backgroundColor:e.palette.background.paper,minHeight:0,overflow:"hidden"},drawerPaper:Object(r.a)({width:400,maxWidth:"100%",overflow:"hidden",height:"100%"},e.breakpoints.up("md"),{position:"relative"}),contentWrapper:{display:"flex",flexDirection:"column",flex:"1 1 100%",zIndex:10,background:"linear-gradient(to bottom, ".concat(Object(f.fade)(e.palette.background.paper,.8)," 0,").concat(Object(f.fade)(e.palette.background.paper,.6)," 20%,").concat(Object(f.fade)(e.palette.background.paper,.8),")")},content:{display:"flex",flex:"1 1 100%",minHeight:0}}}));t.default=Object(O.a)("chatApp",Le)((function(e){var t=Object(w.c)(),a=Object(w.d)((function(e){return e.chatApp.chat})),c=Object(w.d)((function(e){return e.chatApp.sidebars.mobileChatsSidebarOpen})),n=Object(w.d)((function(e){return e.chatApp.sidebars.userSidebarOpen})),r=Object(w.d)((function(e){return e.chatApp.sidebars.contactSidebarOpen})),p=Object(w.d)((function(e){return z(e,e.chatApp.contacts.selectedContactId)})),f=He(e);return Object(g.useEffect)((function(){t($()),t(M())}),[t]),Object(oe.jsxs)("div",{className:Object(v.a)(f.root),children:[Object(oe.jsx)("div",{className:f.topBg}),Object(oe.jsx)("div",{className:Object(v.a)(f.contentCardWrapper,"container"),children:Object(oe.jsxs)("div",{className:Object(v.a)(f.contentCard,"shadow rounded-20"),children:[Object(oe.jsx)(d.a,{mdUp:!0,children:Object(oe.jsx)(h.a,{className:"h-full absolute z-20",variant:"temporary",anchor:"left",open:c,onOpen:function(e){},onClose:function(){return t(V())},disableSwipeToOpen:!0,classes:{paper:Object(v.a)(f.drawerPaper,"absolute ltr:left-0 rtl:right-0")},style:{position:"absolute"},ModalProps:{keepMounted:!0,disablePortal:!0,BackdropProps:{classes:{root:"absolute"}}},children:Object(oe.jsx)(Ie,{})})}),Object(oe.jsx)(d.a,{smDown:!0,children:Object(oe.jsx)(i.a,{className:"h-full z-20",variant:"permanent",open:!0,classes:{paper:f.drawerPaper},children:Object(oe.jsx)(Ie,{})})}),Object(oe.jsx)(h.a,{className:"h-full absolute z-30",variant:"temporary",anchor:"left",open:n,onOpen:function(e){},onClose:function(){return t(Q())},classes:{paper:Object(v.a)(f.drawerPaper,"absolute left-0")},style:{position:"absolute"},ModalProps:{keepMounted:!1,disablePortal:!0,BackdropProps:{classes:{root:"absolute"}}},children:Object(oe.jsx)(_e,{})}),Object(oe.jsx)("main",{className:Object(v.a)(f.contentWrapper,"z-10"),children:a?Object(oe.jsxs)(oe.Fragment,{children:[Object(oe.jsx)(s.a,{className:"w-full",elevation:0,position:"static",children:Object(oe.jsxs)(x.a,{className:"px-16",children:[Object(oe.jsx)(b.a,{color:"inherit","aria-label":"Open drawer",onClick:function(){return t(q())},className:"flex md:hidden",children:Object(oe.jsx)(u.a,{children:"chat"})}),Object(oe.jsxs)("div",{className:"flex items-center cursor-pointer",onClick:function(){return t(X())},onKeyDown:function(){return t(X())},role:"button",tabIndex:0,children:[Object(oe.jsxs)("div",{className:"relative mx-8",children:[Object(oe.jsx)("div",{className:"absolute right-0 bottom-0 -m-4 z-10",children:Object(oe.jsx)(Ne,{status:p.status})}),Object(oe.jsx)(o.a,{src:p.avatar,alt:p.name,children:p.avatar&&""!==p.avatar?"":p.name[0]})]}),Object(oe.jsx)(m.a,{color:"inherit",className:"text-18 font-semibold px-4",children:p.name})]})]})}),Object(oe.jsx)("div",{className:f.content,children:Object(oe.jsx)(ie,{className:"flex flex-1 z-10"})})]}):Object(oe.jsxs)("div",{className:"flex flex-col flex-1 items-center justify-center p-24",children:[Object(oe.jsx)(j.a,{className:"rounded-full p-48 md:p-64 shadow-xl",children:Object(oe.jsx)(u.a,{className:"block text-48 md:text-64",color:"secondary",children:"chat"})}),Object(oe.jsx)(m.a,{variant:"h6",className:"mt-24 mb-12 text-32 font-700",children:"Chat App"}),Object(oe.jsx)(m.a,{className:"hidden md:flex px-16 pb-24 text-16 text-center",color:"textSecondary",children:"Select a contact to start a conversation!.."}),Object(oe.jsx)(l.a,{variant:"outlined",color:"primary",className:"flex md:hidden",onClick:function(){return t(q())},children:"Select a contact to start a conversation!.."})]})}),Object(oe.jsx)(h.a,{className:"h-full absolute z-30",variant:"temporary",anchor:"right",open:r,onOpen:function(e){},onClose:function(){return t(Y())},classes:{paper:Object(v.a)(f.drawerPaper,"absolute ltr:right-0 rtl:left-0")},style:{position:"absolute"},ModalProps:{keepMounted:!0,disablePortal:!0,BackdropProps:{classes:{root:"absolute"}}},children:Object(oe.jsx)(Ae,{})})]})})]})}))}}]);