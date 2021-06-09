(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[151],{1159:function(e,a,t){"use strict";var c=t(2),o=t(9),n=t(0),r=(t(8),t(3)),i=t(227),s=t(93),l=Object(s.a)(n.createElement("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),d=Object(s.a)(n.createElement("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),m=t(34),b=Object(s.a)(n.createElement("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),j=t(13),u=t(10),p=n.createElement(d,null),f=n.createElement(l,null),x=n.createElement(b,null),h=n.forwardRef((function(e,a){var t=e.checkedIcon,s=void 0===t?p:t,l=e.classes,d=e.color,m=void 0===d?"secondary":d,b=e.icon,u=void 0===b?f:b,h=e.indeterminate,O=void 0!==h&&h,v=e.indeterminateIcon,y=void 0===v?x:v,w=e.inputProps,g=e.size,N=void 0===g?"medium":g,k=Object(o.a)(e,["checkedIcon","classes","color","icon","indeterminate","indeterminateIcon","inputProps","size"]),z=O?y:u,C=O?y:s;return n.createElement(i.a,Object(c.a)({type:"checkbox",classes:{root:Object(r.a)(l.root,l["color".concat(Object(j.a)(m))],O&&l.indeterminate),checked:l.checked,disabled:l.disabled},color:m,inputProps:Object(c.a)({"data-indeterminate":O},w),icon:n.cloneElement(z,{fontSize:void 0===z.props.fontSize&&"small"===N?N:z.props.fontSize}),checkedIcon:n.cloneElement(C,{fontSize:void 0===C.props.fontSize&&"small"===N?N:C.props.fontSize}),ref:a},k))}));a.a=Object(u.a)((function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},indeterminate:{},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(m.d)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(m.d)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}}}}),{name:"MuiCheckbox"})(h)},2591:function(e,a,t){"use strict";t.r(a);var c=t(6),o=t(1115),n=t(36),r=t(132),i=t(1095),s=t(1106),l=t(1113),d=t(1159),m=t(1105),b=t(1038),j=t(1092),u=t(616),p=t(1094),f=t(193),x=t(3),h=t(32),O=t(59),v=t(11),y=t(1),w=Object(u.a)((function(e){return{root:{}}})),g=O.d().shape({email:O.f().email("You must enter a valid email").required("You must enter a email"),password:O.f().required("Please enter your password.").min(8,"Password is too short - should be 8 chars minimum.")}),N={email:"",password:"",remember:!0};a.default=function(){var e=w(),a=Object(n.f)({mode:"onChange",defaultValues:N,resolver:Object(r.a)(g)}),t=a.control,u=a.formState,O=a.handleSubmit,k=a.reset,z=u.isValid,C=u.dirtyFields,E=u.errors;return Object(y.jsxs)("div",{className:Object(x.a)(e.root,"flex flex-col flex-auto p-16 sm:p-24 md:flex-row md:p-0 overflow-hidden"),children:[Object(y.jsxs)("div",{className:"flex flex-col flex-grow-0 items-center p-16 text-center md:p-128 md:items-start md:flex-shrink-0 md:flex-1 md:text-left",children:[Object(y.jsx)(o.a.div,{initial:{opacity:0,scale:.6},animate:{opacity:1,scale:1,transition:{delay:.1}},children:Object(y.jsx)("img",{className:"w-128 mb-32",src:"assets/images/logos/fuse.svg",alt:"logo"})}),Object(y.jsx)(o.a.div,{initial:{opacity:0,y:40},animate:{opacity:1,y:0,transition:{delay:.2}},children:Object(y.jsxs)(f.a,{className:"text-32 sm:text-44 font-semibold leading-tight",children:["Welcome ",Object(y.jsx)("br",{}),"to the ",Object(y.jsx)("br",{})," FUSE React!"]})}),Object(y.jsx)(o.a.div,{initial:{opacity:0},animate:{opacity:1,transition:{delay:.3}},children:Object(y.jsx)(f.a,{variant:"subtitle1",className:"mt-32 font-medium",children:"Powerful and professional admin template for Web Applications, CRM, CMS, Admin Panels and more."})})]}),Object(y.jsx)(s.a,{component:o.a.div,initial:{x:200},animate:{x:0},transition:{bounceDamping:0},className:"w-full max-w-400 mx-auto m-16 md:m-0 rounded-20 md:rounded-none",square:!0,layout:!0,children:Object(y.jsxs)(l.a,{className:"flex flex-col items-center justify-center p-16 sm:p-32 md:p-48 md:pt-128 ",children:[Object(y.jsx)(f.a,{variant:"h6",className:"mb-24 font-semibold text-18 sm:text-24",children:"Login to your account"}),Object(y.jsxs)("form",{name:"loginForm",noValidate:!0,className:"flex flex-col justify-center w-full",onSubmit:O((function(){k(N)})),children:[Object(y.jsx)(n.a,{name:"email",control:t,render:function(e){var a,t=e.field;return Object(y.jsx)(p.a,Object(c.a)(Object(c.a)({},t),{},{className:"mb-16",label:"Email",autoFocus:!0,type:"email",error:!!E.email,helperText:null===E||void 0===E||null===(a=E.email)||void 0===a?void 0:a.message,variant:"outlined",required:!0,fullWidth:!0}))}}),Object(y.jsx)(n.a,{name:"password",control:t,render:function(e){var a,t=e.field;return Object(y.jsx)(p.a,Object(c.a)(Object(c.a)({},t),{},{className:"mb-16",label:"Password",type:"password",error:!!E.password,helperText:null===E||void 0===E||null===(a=E.password)||void 0===a?void 0:a.message,variant:"outlined",required:!0,fullWidth:!0}))}}),Object(y.jsxs)("div",{className:"flex flex-col sm:flex-row items-center justify-center sm:justify-between",children:[Object(y.jsx)(n.a,{name:"remember",control:t,render:function(e){var a=e.field;return Object(y.jsx)(b.a,{children:Object(y.jsx)(j.a,{label:"Remember Me",control:Object(y.jsx)(d.a,Object(c.a)({},a))})})}}),Object(y.jsx)(h.a,{className:"font-normal",to:"/pages/auth/forgot-password-2",children:"Forgot Password?"})]}),Object(y.jsx)(i.a,{variant:"contained",color:"primary",className:"w-full mx-auto mt-16","aria-label":"LOG IN",disabled:v.a.isEmpty(C)||!z,type:"submit",children:"Login"})]}),Object(y.jsxs)("div",{className:"my-24 flex items-center justify-center",children:[Object(y.jsx)(m.a,{className:"w-32"}),Object(y.jsx)("span",{className:"mx-8 font-semibold",children:"OR"}),Object(y.jsx)(m.a,{className:"w-32"})]}),Object(y.jsx)(i.a,{variant:"contained",color:"secondary",size:"small",className:"w-192 mb-8",children:"Log in with Google"}),Object(y.jsx)(i.a,{variant:"contained",color:"primary",size:"small",className:"w-192",children:"Log in with Facebook"}),Object(y.jsxs)("div",{className:"flex flex-col items-center justify-center pt-32 pb-24",children:[Object(y.jsx)("span",{className:"font-normal",children:"Don't have an account?"}),Object(y.jsx)(h.a,{className:"font-normal",to:"/pages/auth/register-2",children:"Create an account"})]})]})})]})}}}]);