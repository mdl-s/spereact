(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[152],{1159:function(e,t,a){"use strict";var c=a(2),r=a(9),i=a(0),o=(a(8),a(3)),l=a(227),n=a(93),s=Object(n.a)(i.createElement("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),d=Object(n.a)(i.createElement("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),m=a(34),j=Object(n.a)(i.createElement("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),b=a(13),u=a(10),p=i.createElement(d,null),h=i.createElement(s,null),x=i.createElement(j,null),f=i.forwardRef((function(e,t){var a=e.checkedIcon,n=void 0===a?p:a,s=e.classes,d=e.color,m=void 0===d?"secondary":d,j=e.icon,u=void 0===j?h:j,f=e.indeterminate,O=void 0!==f&&f,v=e.indeterminateIcon,y=void 0===v?x:v,w=e.inputProps,g=e.size,N=void 0===g?"medium":g,k=Object(r.a)(e,["checkedIcon","classes","color","icon","indeterminate","indeterminateIcon","inputProps","size"]),S=O?y:u,z=O?y:n;return i.createElement(l.a,Object(c.a)({type:"checkbox",classes:{root:Object(o.a)(s.root,s["color".concat(Object(b.a)(m))],O&&s.indeterminate),checked:s.checked,disabled:s.disabled},color:m,inputProps:Object(c.a)({"data-indeterminate":O},w),icon:i.cloneElement(S,{fontSize:void 0===S.props.fontSize&&"small"===N?N:S.props.fontSize}),checkedIcon:i.cloneElement(z,{fontSize:void 0===z.props.fontSize&&"small"===N?N:z.props.fontSize}),ref:t},k))}));t.a=Object(u.a)((function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},indeterminate:{},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(m.d)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(m.d)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}}}}),{name:"MuiCheckbox"})(f)},2592:function(e,t,a){"use strict";a.r(t);var c=a(6),r=a(132),i=a(1115),o=a(36),l=a(1095),n=a(1106),s=a(1113),d=a(1159),m=a(1105),j=a(1038),b=a(1092),u=a(616),p=a(66),h=a(1094),x=a(193),f=a(3),O=a(32),v=a(59),y=a(11),w=a(1),g=Object(u.a)((function(e){return{root:{},leftSection:{},rightSection:{background:"linear-gradient(to right, ".concat(e.palette.primary.dark," 0%, ").concat(Object(p.darken)(e.palette.primary.dark,.5)," 100%)"),color:e.palette.primary.contrastText}}})),N=v.d().shape({email:v.f().email("You must enter a valid email").required("You must enter a email"),password:v.f().required("Please enter your password.").min(8,"Password is too short - should be 8 chars minimum.")}),k={email:"",password:"",remember:!0};t.default=function(){var e=g(),t=Object(o.f)({mode:"onChange",defaultValues:k,resolver:Object(r.a)(N)}),a=t.control,u=t.formState,p=t.handleSubmit,v=t.reset,S=u.isValid,z=u.dirtyFields,E=u.errors;return Object(w.jsx)("div",{className:Object(f.a)(e.root,"flex flex-col flex-auto items-center justify-center flex-shrink-0 p-16 md:p-24"),children:Object(w.jsxs)(i.a.div,{initial:{opacity:0,scale:.6},animate:{opacity:1,scale:1},className:"flex w-full max-w-400 md:max-w-3xl rounded-20 shadow-2xl overflow-hidden",children:[Object(w.jsxs)(n.a,{className:Object(f.a)(e.leftSection,"flex flex-col w-full max-w-sm items-center justify-center shadow-0"),square:!0,children:[Object(w.jsxs)(s.a,{className:"flex flex-col items-center justify-center w-full py-96 max-w-320",children:[Object(w.jsx)(i.a.div,{initial:{opacity:0},animate:{opacity:1,transition:{delay:.2}},children:Object(w.jsxs)("div",{className:"flex items-center mb-48",children:[Object(w.jsx)("img",{className:"logo-icon w-48",src:"assets/images/logos/fuse.svg",alt:"logo"}),Object(w.jsx)("div",{className:"border-l-1 mr-4 w-1 h-40"}),Object(w.jsxs)("div",{children:[Object(w.jsx)(x.a,{className:"text-24 font-semibold logo-text",color:"inherit",children:"FUSE"}),Object(w.jsx)(x.a,{className:"text-16 tracking-widest -mt-8 font-700",color:"textSecondary",children:"REACT"})]})]})}),Object(w.jsxs)("form",{name:"loginForm",noValidate:!0,className:"flex flex-col justify-center w-full",onSubmit:p((function(){v(k)})),children:[Object(w.jsx)(o.a,{name:"email",control:a,render:function(e){var t,a=e.field;return Object(w.jsx)(h.a,Object(c.a)(Object(c.a)({},a),{},{className:"mb-16",label:"Email",autoFocus:!0,type:"email",error:!!E.email,helperText:null===E||void 0===E||null===(t=E.email)||void 0===t?void 0:t.message,variant:"outlined",required:!0,fullWidth:!0}))}}),Object(w.jsx)(o.a,{name:"password",control:a,render:function(e){var t,a=e.field;return Object(w.jsx)(h.a,Object(c.a)(Object(c.a)({},a),{},{className:"mb-16",label:"Password",type:"password",error:!!E.password,helperText:null===E||void 0===E||null===(t=E.password)||void 0===t?void 0:t.message,variant:"outlined",required:!0,fullWidth:!0}))}}),Object(w.jsxs)("div",{className:"flex flex-col sm:flex-row items-center justify-center sm:justify-between",children:[Object(w.jsx)(o.a,{name:"remember",control:a,render:function(e){var t=e.field;return Object(w.jsx)(j.a,{children:Object(w.jsx)(b.a,{label:"Remember Me",control:Object(w.jsx)(d.a,Object(c.a)({},t))})})}}),Object(w.jsx)(O.a,{className:"font-normal",to:"/pages/auth/forgot-password-2",children:"Forgot Password?"})]}),Object(w.jsx)(l.a,{variant:"contained",color:"primary",className:"w-full mx-auto mt-16","aria-label":"LOG IN",disabled:y.a.isEmpty(z)||!S,type:"submit",children:"Login"})]}),Object(w.jsxs)("div",{className:"my-24 flex items-center justify-center",children:[Object(w.jsx)(m.a,{className:"w-32"}),Object(w.jsx)("span",{className:"mx-8 font-semibold",children:"OR"}),Object(w.jsx)(m.a,{className:"w-32"})]}),Object(w.jsx)(l.a,{variant:"outlined",color:"primary",size:"small",className:"w-192 mb-8",children:"Log in with Google"}),Object(w.jsx)(l.a,{variant:"outlined",color:"primary",size:"small",className:"w-192",children:"Log in with Facebook"})]}),Object(w.jsxs)("div",{className:"flex flex-col items-center justify-center pb-32",children:[Object(w.jsx)("span",{className:"font-normal",children:"Don't have an account?"}),Object(w.jsx)(O.a,{className:"font-normal",to:"/pages/auth/register-3",children:"Create an account"})]})]}),Object(w.jsx)("div",{className:Object(f.a)(e.rightSection,"hidden md:flex flex-1 items-center justify-center p-64"),children:Object(w.jsxs)("div",{className:"max-w-320",children:[Object(w.jsx)(i.a.div,{initial:{opacity:0,y:40},animate:{opacity:1,y:0,transition:{delay:.2}},children:Object(w.jsxs)(x.a,{color:"inherit",className:"text-32 sm:text-44 font-semibold leading-tight",children:["Welcome ",Object(w.jsx)("br",{}),"to the ",Object(w.jsx)("br",{})," FUSE React!"]})}),Object(w.jsx)(i.a.div,{initial:{opacity:0},animate:{opacity:1,transition:{delay:.3}},children:Object(w.jsx)(x.a,{variant:"subtitle1",color:"inherit",className:"mt-32 font-medium",children:"Powerful and professional admin template for Web Applications, CRM, CMS, Admin Panels and more."})})]})})]})})}}}]);