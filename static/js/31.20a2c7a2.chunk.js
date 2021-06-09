(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[31],{1049:function(e,n,t){"use strict";function o(e,n,t,o,a){return null}t.d(n,"a",(function(){return o}))},1050:function(e,n,t){"use strict";t.r(n),t.d(n,"capitalize",(function(){return o.a})),t.d(n,"createChainedFunction",(function(){return a.a})),t.d(n,"createSvgIcon",(function(){return r.a})),t.d(n,"debounce",(function(){return c.a})),t.d(n,"deprecatedPropType",(function(){return l})),t.d(n,"isMuiElement",(function(){return i.a})),t.d(n,"ownerDocument",(function(){return s.a})),t.d(n,"ownerWindow",(function(){return d.a})),t.d(n,"requirePropFactory",(function(){return u.a})),t.d(n,"setRef",(function(){return b.a})),t.d(n,"unsupportedProp",(function(){return h.a})),t.d(n,"useControlled",(function(){return m.a})),t.d(n,"useEventCallback",(function(){return p.a})),t.d(n,"useForkRef",(function(){return f.a})),t.d(n,"unstable_useId",(function(){return j.a})),t.d(n,"useIsFocusVisible",(function(){return x.a}));var o=t(13),a=t(85),r=t(93),c=t(105);function l(e,n){return function(){return null}}var i=t(158),s=t(47),d=t(159),u=t(1131),b=t(96),h=t(1049),m=t(112),p=t(39),f=t(26),j=t(222),x=t(157)},1124:function(e,n,t){var o=t(375).default;function a(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return a=function(){return e},e}e.exports=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!==typeof e)return{default:e};var n=a();if(n&&n.has(e))return n.get(e);var t={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in e)if(Object.prototype.hasOwnProperty.call(e,c)){var l=r?Object.getOwnPropertyDescriptor(e,c):null;l&&(l.get||l.set)?Object.defineProperty(t,c,l):t[c]=e[c]}return t.default=e,n&&n.set(e,t),t},e.exports.default=e.exports,e.exports.__esModule=!0},1125:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return o.createSvgIcon}});var o=t(1050)},1126:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.FrameContextConsumer=n.FrameContextProvider=n.FrameContext=void 0;var o,a=t(0),r=(o=a)&&o.__esModule?o:{default:o};var c=void 0,l=void 0;"undefined"!==typeof document&&(c=document),"undefined"!==typeof window&&(l=window);var i=n.FrameContext=r.default.createContext({document:c,window:l}),s=i.Provider,d=i.Consumer;n.FrameContextProvider=s,n.FrameContextConsumer=d},1127:function(e,n,t){"use strict";t.d(n,"a",(function(){return M}));var o=t(14),a=t(123),r=t(1098),c=t(1106),l=t(1088),i=t(1114),s=t(1116),d=t(3),u=t(0),b=t(12),h=t(6),m=t(29),p=t(30),f=t(57),j=t(58),x=t(1028),k=t(575),O=t(1085),C=t(1097),v=t(10),g=t(67),y=t(373),w=t(1128),F=t.n(w),P=t(1),L=Object(x.a)({productionPrefix:"iframe-"}),S=function(e){Object(f.a)(t,e);var n=Object(j.a)(t);function t(){var e;Object(m.a)(this,t);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(e=n.call.apply(n,[this].concat(a))).state={ready:!1},e.handleRef=function(n){e.contentDocument=n?n.node.contentDocument:null},e.onContentDidMount=function(){e.setState({ready:!0,jss:Object(g.c)(Object(h.a)(Object(h.a)({},Object(k.a)()),{},{plugins:[].concat(Object(b.a)(Object(k.a)().plugins),[Object(y.a)()]),insertionPoint:e.contentDocument.querySelector("#jss-demo-insertion-point")})),sheetsManager:new Map,container:e.contentDocument.body})},e.onContentDidUpdate=function(){e.contentDocument.body.dir=e.props.theme.direction},e.renderHead=function(){return Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)("style",{dangerouslySetInnerHTML:{__html:"\n                    html {\n                    font-size: 62.5%;\n                    font-family: Poppins, Roboto, Helvetica Neue, Arial, sans-serif;\n                    }\n                "}}),Object(P.jsx)("noscript",{id:"jss-demo-insertion-point"})]})},e}return Object(p.a)(t,[{key:"render",value:function(){var e=this.props,n=e.children,t=e.classes,o=e.theme;return Object(P.jsx)(F.a,{head:this.renderHead(),ref:this.handleRef,className:Object(d.a)(t.root,"shadow"),contentDidMount:this.onContentDidMount,contentDidUpdate:this.onContentDidUpdate,children:this.state.ready?Object(P.jsx)(O.b,{jss:this.state.jss,generateClassName:L,sheetsManager:this.state.sheetsManager,children:Object(P.jsx)(C.a,{theme:o,children:Object(u.cloneElement)(n,{container:this.state.container})})}):null})}}]),t}(u.Component),N=Object(v.a)((function(e){return{root:{backgroundColor:e.palette.background.default,flexGrow:1,height:400,border:"none"}}}),{withTheme:!0})(S);function _(e){var n=Object(u.useState)(e.currentTabIndex),t=Object(o.a)(n,2),b=t[0],h=t[1],m=e.component,p=e.raw,f=e.iframe,j=e.className;return Object(P.jsxs)(c.a,{className:Object(d.a)(j,"shadow"),children:[Object(P.jsx)(r.a,{position:"static",color:"default",className:"shadow-0",children:Object(P.jsxs)(s.a,{classes:{root:"border-b-1",flexContainer:"justify-end"},value:b,onChange:function(e,n){h(n)},children:[m&&Object(P.jsx)(i.a,{classes:{root:"min-w-64"},icon:Object(P.jsx)(l.a,{children:"remove_red_eye"})}),p&&Object(P.jsx)(i.a,{classes:{root:"min-w-64"},icon:Object(P.jsx)(l.a,{children:"code"})})]})}),Object(P.jsxs)("div",{className:"flex justify-center max-w-full",children:[Object(P.jsx)("div",{className:0===b?"flex flex-1 max-w-full":"hidden",children:m&&(f?Object(P.jsx)(N,{children:Object(P.jsx)(m,{})}):Object(P.jsx)("div",{className:"p-24 flex flex-1 justify-center max-w-full",children:Object(P.jsx)(m,{})}))}),Object(P.jsx)("div",{className:1===b?"flex flex-1":"hidden",children:p&&Object(P.jsx)("div",{className:"flex flex-1",children:Object(P.jsx)(a.a,{component:"pre",className:"language-javascript w-full",children:p.default})})})]})]})}_.defaultProps={currentTabIndex:0};var M=_},1128:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.FrameContextConsumer=n.FrameContext=void 0;var o=t(1126);Object.defineProperty(n,"FrameContext",{enumerable:!0,get:function(){return o.FrameContext}}),Object.defineProperty(n,"FrameContextConsumer",{enumerable:!0,get:function(){return o.FrameContextConsumer}});var a,r=t(1129),c=(a=r)&&a.__esModule?a:{default:a};n.default=c.default},1129:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},a=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}(),r=t(0),c=u(r),l=u(t(23)),i=u(t(8)),s=t(1126),d=u(t(1130));function u(e){return e&&e.__esModule?e:{default:e}}var b=function(e){function n(e,t){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);var o=function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!==typeof n&&"function"!==typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e,t));return o.handleLoad=function(){o.forceUpdate()},o._isMounted=!1,o}return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,e),a(n,[{key:"componentDidMount",value:function(){this._isMounted=!0;var e=this.getDoc();e&&"complete"===e.readyState?this.forceUpdate():this.node.addEventListener("load",this.handleLoad)}},{key:"componentWillUnmount",value:function(){this._isMounted=!1,this.node.removeEventListener("load",this.handleLoad)}},{key:"getDoc",value:function(){return this.node?this.node.contentDocument:null}},{key:"getMountTarget",value:function(){var e=this.getDoc();return this.props.mountTarget?e.querySelector(this.props.mountTarget):e.body.children[0]}},{key:"renderFrameContents",value:function(){if(!this._isMounted)return null;var e=this.getDoc();if(!e)return null;var n=this.props.contentDidMount,t=this.props.contentDidUpdate,o=e.defaultView||e.parentView,a=c.default.createElement(d.default,{contentDidMount:n,contentDidUpdate:t},c.default.createElement(s.FrameContextProvider,{value:{document:e,window:o}},c.default.createElement("div",{className:"frame-content"},this.props.children)));e.body.children.length<1&&(e.open("text/html","replace"),e.write(this.props.initialContent),e.close());var r=this.getMountTarget();return[l.default.createPortal(this.props.head,this.getDoc().head),l.default.createPortal(a,r)]}},{key:"render",value:function(){var e=this,n=o({},this.props,{children:void 0});return delete n.head,delete n.initialContent,delete n.mountTarget,delete n.contentDidMount,delete n.contentDidUpdate,c.default.createElement("iframe",o({},n,{ref:function(n){e.node=n}}),this.renderFrameContents())}}]),n}(r.Component);b.propTypes={style:i.default.object,head:i.default.node,initialContent:i.default.string,mountTarget:i.default.string,contentDidMount:i.default.func,contentDidUpdate:i.default.func,children:i.default.oneOfType([i.default.element,i.default.arrayOf(i.default.element)])},b.defaultProps={style:{},head:null,children:void 0,mountTarget:void 0,contentDidMount:function(){},contentDidUpdate:function(){},initialContent:'<!DOCTYPE html><html><head></head><body><div class="frame-root"></div></body></html>'},n.default=b},1130:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}(),a=t(0),r=(c(a),c(t(8)));function c(e){return e&&e.__esModule?e:{default:e}}function l(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function i(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!==typeof n&&"function"!==typeof n?e:n}var s=function(e){function n(){return l(this,n),i(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,e),o(n,[{key:"componentDidMount",value:function(){this.props.contentDidMount()}},{key:"componentDidUpdate",value:function(){this.props.contentDidUpdate()}},{key:"render",value:function(){return a.Children.only(this.props.children)}}]),n}(a.Component);s.propTypes={children:r.default.element.isRequired,contentDidMount:r.default.func.isRequired,contentDidUpdate:r.default.func.isRequired},n.default=s},1131:function(e,n,t){"use strict";function o(e){return function(){return null}}t.d(n,"a",(function(){return o}))},1159:function(e,n,t){"use strict";var o=t(2),a=t(9),r=t(0),c=(t(8),t(3)),l=t(227),i=t(93),s=Object(i.a)(r.createElement("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),d=Object(i.a)(r.createElement("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),u=t(34),b=Object(i.a)(r.createElement("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),h=t(13),m=t(10),p=r.createElement(d,null),f=r.createElement(s,null),j=r.createElement(b,null),x=r.forwardRef((function(e,n){var t=e.checkedIcon,i=void 0===t?p:t,s=e.classes,d=e.color,u=void 0===d?"secondary":d,b=e.icon,m=void 0===b?f:b,x=e.indeterminate,k=void 0!==x&&x,O=e.indeterminateIcon,C=void 0===O?j:O,v=e.inputProps,g=e.size,y=void 0===g?"medium":g,w=Object(a.a)(e,["checkedIcon","classes","color","icon","indeterminate","indeterminateIcon","inputProps","size"]),F=k?C:m,P=k?C:i;return r.createElement(l.a,Object(o.a)({type:"checkbox",classes:{root:Object(c.a)(s.root,s["color".concat(Object(h.a)(u))],k&&s.indeterminate),checked:s.checked,disabled:s.disabled},color:u,inputProps:Object(o.a)({"data-indeterminate":k},v),icon:r.cloneElement(F,{fontSize:void 0===F.props.fontSize&&"small"===y?y:F.props.fontSize}),checkedIcon:r.cloneElement(P,{fontSize:void 0===P.props.fontSize&&"small"===y?y:P.props.fontSize}),ref:n},w))}));n.a=Object(m.a)((function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},indeterminate:{},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(u.d)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(u.d)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}}}}),{name:"MuiCheckbox"})(x)},1168:function(e,n,t){"use strict";var o=t(576),a=t(1124);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(t(0)),c=(0,o(t(1125)).default)(r.createElement("path",{d:"M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"}),"Favorite");n.default=c},1336:function(e,n,t){"use strict";var o=t(576),a=t(1124);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(t(0)),c=(0,o(t(1125)).default)(r.createElement("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank");n.default=c},1337:function(e,n,t){"use strict";var o=t(576),a=t(1124);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(t(0)),c=(0,o(t(1125)).default)(r.createElement("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox");n.default=c},1839:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return l}));var o=t(14),a=t(0),r=t(1159),c=t(1);function l(){var e=Object(a.useState)(!0),n=Object(o.a)(e,2),t=n[0],l=n[1];return Object(c.jsxs)("div",{children:[Object(c.jsx)(r.a,{checked:t,onChange:function(e){l(e.target.checked)},inputProps:{"aria-label":"primary checkbox"}}),Object(c.jsx)(r.a,{defaultChecked:!0,color:"primary",inputProps:{"aria-label":"secondary checkbox"}}),Object(c.jsx)(r.a,{inputProps:{"aria-label":"uncontrolled-checkbox"}}),Object(c.jsx)(r.a,{disabled:!0,inputProps:{"aria-label":"disabled checkbox"}}),Object(c.jsx)(r.a,{disabled:!0,checked:!0,inputProps:{"aria-label":"disabled checked checkbox"}}),Object(c.jsx)(r.a,{defaultChecked:!0,indeterminate:!0,inputProps:{"aria-label":"indeterminate checkbox"}}),Object(c.jsx)(r.a,{defaultChecked:!0,color:"default",inputProps:{"aria-label":"checkbox with default color"}}),Object(c.jsx)(r.a,{defaultChecked:!0,size:"small",inputProps:{"aria-label":"checkbox with small size"}})]})}},1840:function(e,n,t){"use strict";t.r(n),n.default="import { useState } from 'react';\nimport Checkbox from '@material-ui/core/Checkbox';\n\nexport default function Checkboxes() {\n  const [checked, setChecked] = useState(true);\n\n  const handleChange = (event) => {\n    setChecked(event.target.checked);\n  };\n\n  return (\n    <div>\n      <Checkbox\n        checked={checked}\n        onChange={handleChange}\n        inputProps={{ 'aria-label': 'primary checkbox' }}\n      />\n      <Checkbox\n        defaultChecked\n        color=\"primary\"\n        inputProps={{ 'aria-label': 'secondary checkbox' }}\n      />\n      <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />\n      <Checkbox disabled inputProps={{ 'aria-label': 'disabled checkbox' }} />\n      <Checkbox disabled checked inputProps={{ 'aria-label': 'disabled checked checkbox' }} />\n      <Checkbox\n        defaultChecked\n        indeterminate\n        inputProps={{ 'aria-label': 'indeterminate checkbox' }}\n      />\n      <Checkbox\n        defaultChecked\n        color=\"default\"\n        inputProps={{ 'aria-label': 'checkbox with default color' }}\n      />\n      <Checkbox\n        defaultChecked\n        size=\"small\"\n        inputProps={{ 'aria-label': 'checkbox with small size' }}\n      />\n    </div>\n  );\n}\n"},1841:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return v}));var o=t(27),a=t(14),r=t(6),c=t(0),l=t(10),i=t(179),s=t(1040),d=t(1092),u=t(1159),b=t(1336),h=t.n(b),m=t(1337),p=t.n(m),f=t(1168),j=t.n(f),x=t(1842),k=t.n(x),O=t(1),C=Object(l.a)({root:{color:i.a[400],"&$checked":{color:i.a[600]}},checked:{}})((function(e){return Object(O.jsx)(u.a,Object(r.a)({color:"default"},e))}));function v(){var e=Object(c.useState)({checkedA:!0,checkedB:!0,checkedF:!0,checkedG:!0}),n=Object(a.a)(e,2),t=n[0],l=n[1],i=function(e){l(Object(r.a)(Object(r.a)({},t),{},Object(o.a)({},e.target.name,e.target.checked)))};return Object(O.jsxs)(s.a,{row:!0,children:[Object(O.jsx)(d.a,{control:Object(O.jsx)(u.a,{checked:t.checkedA,onChange:i,name:"checkedA"}),label:"Secondary"}),Object(O.jsx)(d.a,{control:Object(O.jsx)(u.a,{checked:t.checkedB,onChange:i,name:"checkedB",color:"primary"}),label:"Primary"}),Object(O.jsx)(d.a,{control:Object(O.jsx)(u.a,{name:"checkedC"}),label:"Uncontrolled"}),Object(O.jsx)(d.a,{disabled:!0,control:Object(O.jsx)(u.a,{name:"checkedD"}),label:"Disabled"}),Object(O.jsx)(d.a,{disabled:!0,control:Object(O.jsx)(u.a,{checked:!0,name:"checkedE"}),label:"Disabled"}),Object(O.jsx)(d.a,{control:Object(O.jsx)(u.a,{checked:t.checkedF,onChange:i,name:"checkedF",indeterminate:!0}),label:"Indeterminate"}),Object(O.jsx)(d.a,{control:Object(O.jsx)(C,{checked:t.checkedG,onChange:i,name:"checkedG"}),label:"Custom color"}),Object(O.jsx)(d.a,{control:Object(O.jsx)(u.a,{icon:Object(O.jsx)(k.a,{}),checkedIcon:Object(O.jsx)(j.a,{}),name:"checkedH"}),label:"Custom icon"}),Object(O.jsx)(d.a,{control:Object(O.jsx)(u.a,{icon:Object(O.jsx)(h.a,{fontSize:"small"}),checkedIcon:Object(O.jsx)(p.a,{fontSize:"small"}),name:"checkedI"}),label:"Custom size"})]})}},1842:function(e,n,t){"use strict";var o=t(576),a=t(1124);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(t(0)),c=(0,o(t(1125)).default)(r.createElement("path",{d:"M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"}),"FavoriteBorder");n.default=c},1843:function(e,n,t){"use strict";t.r(n),n.default='import { useState } from \'react\';\nimport { withStyles } from \'@material-ui/core/styles\';\nimport { green } from \'@material-ui/core/colors\';\nimport FormGroup from \'@material-ui/core/FormGroup\';\nimport FormControlLabel from \'@material-ui/core/FormControlLabel\';\nimport Checkbox from \'@material-ui/core/Checkbox\';\nimport CheckBoxOutlineBlankIcon from \'@material-ui/icons/CheckBoxOutlineBlank\';\nimport CheckBoxIcon from \'@material-ui/icons/CheckBox\';\nimport Favorite from \'@material-ui/icons/Favorite\';\nimport FavoriteBorder from \'@material-ui/icons/FavoriteBorder\';\n\nconst GreenCheckbox = withStyles({\n  root: {\n    color: green[400],\n    \'&$checked\': {\n      color: green[600],\n    },\n  },\n  checked: {},\n})((props) => <Checkbox color="default" {...props} />);\n\nexport default function CheckboxLabels() {\n  const [state, setState] = useState({\n    checkedA: true,\n    checkedB: true,\n    checkedF: true,\n    checkedG: true,\n  });\n\n  const handleChange = (event) => {\n    setState({ ...state, [event.target.name]: event.target.checked });\n  };\n\n  return (\n    <FormGroup row>\n      <FormControlLabel\n        control={<Checkbox checked={state.checkedA} onChange={handleChange} name="checkedA" />}\n        label="Secondary"\n      />\n      <FormControlLabel\n        control={\n          <Checkbox\n            checked={state.checkedB}\n            onChange={handleChange}\n            name="checkedB"\n            color="primary"\n          />\n        }\n        label="Primary"\n      />\n      <FormControlLabel control={<Checkbox name="checkedC" />} label="Uncontrolled" />\n      <FormControlLabel disabled control={<Checkbox name="checkedD" />} label="Disabled" />\n      <FormControlLabel disabled control={<Checkbox checked name="checkedE" />} label="Disabled" />\n      <FormControlLabel\n        control={\n          <Checkbox\n            checked={state.checkedF}\n            onChange={handleChange}\n            name="checkedF"\n            indeterminate\n          />\n        }\n        label="Indeterminate"\n      />\n      <FormControlLabel\n        control={<GreenCheckbox checked={state.checkedG} onChange={handleChange} name="checkedG" />}\n        label="Custom color"\n      />\n      <FormControlLabel\n        control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}\n        label="Custom icon"\n      />\n      <FormControlLabel\n        control={\n          <Checkbox\n            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}\n            checkedIcon={<CheckBoxIcon fontSize="small" />}\n            name="checkedI"\n          />\n        }\n        label="Custom size"\n      />\n    </FormGroup>\n  );\n}\n'},1844:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return f}));var o=t(27),a=t(6),r=t(14),c=t(0),l=t(616),i=t(1039),s=t(1038),d=t(1040),u=t(1092),b=t(1042),h=t(1159),m=t(1),p=Object(l.a)((function(e){return{root:{display:"flex"},formControl:{margin:e.spacing(3)}}}));function f(){var e=p(),n=Object(c.useState)({gilad:!0,jason:!1,antoine:!1}),t=Object(r.a)(n,2),l=t[0],f=t[1],j=function(e){f(Object(a.a)(Object(a.a)({},l),{},Object(o.a)({},e.target.name,e.target.checked)))},x=l.gilad,k=l.jason,O=l.antoine,C=2!==[x,k,O].filter((function(e){return e})).length;return Object(m.jsxs)("div",{className:e.root,children:[Object(m.jsxs)(s.a,{component:"fieldset",className:e.formControl,children:[Object(m.jsx)(i.a,{component:"legend",children:"Assign responsibility"}),Object(m.jsxs)(d.a,{children:[Object(m.jsx)(u.a,{control:Object(m.jsx)(h.a,{checked:x,onChange:j,name:"gilad"}),label:"Gilad Gray"}),Object(m.jsx)(u.a,{control:Object(m.jsx)(h.a,{checked:k,onChange:j,name:"jason"}),label:"Jason Killian"}),Object(m.jsx)(u.a,{control:Object(m.jsx)(h.a,{checked:O,onChange:j,name:"antoine"}),label:"Antoine Llorca"})]}),Object(m.jsx)(b.a,{children:"Be careful"})]}),Object(m.jsxs)(s.a,{required:!0,error:C,component:"fieldset",className:e.formControl,children:[Object(m.jsx)(i.a,{component:"legend",children:"Pick two"}),Object(m.jsxs)(d.a,{children:[Object(m.jsx)(u.a,{control:Object(m.jsx)(h.a,{checked:x,onChange:j,name:"gilad"}),label:"Gilad Gray"}),Object(m.jsx)(u.a,{control:Object(m.jsx)(h.a,{checked:k,onChange:j,name:"jason"}),label:"Jason Killian"}),Object(m.jsx)(u.a,{control:Object(m.jsx)(h.a,{checked:O,onChange:j,name:"antoine"}),label:"Antoine Llorca"})]}),Object(m.jsx)(b.a,{children:"You can display an error"})]})]})}},1845:function(e,n,t){"use strict";t.r(n),n.default='import { useState } from \'react\';\nimport { makeStyles } from \'@material-ui/core/styles\';\nimport FormLabel from \'@material-ui/core/FormLabel\';\nimport FormControl from \'@material-ui/core/FormControl\';\nimport FormGroup from \'@material-ui/core/FormGroup\';\nimport FormControlLabel from \'@material-ui/core/FormControlLabel\';\nimport FormHelperText from \'@material-ui/core/FormHelperText\';\nimport Checkbox from \'@material-ui/core/Checkbox\';\n\nconst useStyles = makeStyles((theme) => ({\n  root: {\n    display: \'flex\',\n  },\n  formControl: {\n    margin: theme.spacing(3),\n  },\n}));\n\nexport default function CheckboxesGroup() {\n  const classes = useStyles();\n  const [state, setState] = useState({\n    gilad: true,\n    jason: false,\n    antoine: false,\n  });\n\n  const handleChange = (event) => {\n    setState({ ...state, [event.target.name]: event.target.checked });\n  };\n\n  const { gilad, jason, antoine } = state;\n  const error = [gilad, jason, antoine].filter((v) => v).length !== 2;\n\n  return (\n    <div className={classes.root}>\n      <FormControl component="fieldset" className={classes.formControl}>\n        <FormLabel component="legend">Assign responsibility</FormLabel>\n        <FormGroup>\n          <FormControlLabel\n            control={<Checkbox checked={gilad} onChange={handleChange} name="gilad" />}\n            label="Gilad Gray"\n          />\n          <FormControlLabel\n            control={<Checkbox checked={jason} onChange={handleChange} name="jason" />}\n            label="Jason Killian"\n          />\n          <FormControlLabel\n            control={<Checkbox checked={antoine} onChange={handleChange} name="antoine" />}\n            label="Antoine Llorca"\n          />\n        </FormGroup>\n        <FormHelperText>Be careful</FormHelperText>\n      </FormControl>\n      <FormControl required error={error} component="fieldset" className={classes.formControl}>\n        <FormLabel component="legend">Pick two</FormLabel>\n        <FormGroup>\n          <FormControlLabel\n            control={<Checkbox checked={gilad} onChange={handleChange} name="gilad" />}\n            label="Gilad Gray"\n          />\n          <FormControlLabel\n            control={<Checkbox checked={jason} onChange={handleChange} name="jason" />}\n            label="Jason Killian"\n          />\n          <FormControlLabel\n            control={<Checkbox checked={antoine} onChange={handleChange} name="antoine" />}\n            label="Antoine Llorca"\n          />\n        </FormGroup>\n        <FormHelperText>You can display an error</FormHelperText>\n      </FormControl>\n    </div>\n  );\n}\n'},1846:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return s}));var o=t(1159),a=t(1040),r=t(1092),c=t(1038),l=t(1039),i=t(1);function s(){return Object(i.jsxs)(c.a,{component:"fieldset",children:[Object(i.jsx)(l.a,{component:"legend",children:"Label Placement"}),Object(i.jsxs)(a.a,{"aria-label":"position",row:!0,children:[Object(i.jsx)(r.a,{value:"top",control:Object(i.jsx)(o.a,{color:"primary"}),label:"Top",labelPlacement:"top"}),Object(i.jsx)(r.a,{value:"start",control:Object(i.jsx)(o.a,{color:"primary"}),label:"Start",labelPlacement:"start"}),Object(i.jsx)(r.a,{value:"bottom",control:Object(i.jsx)(o.a,{color:"primary"}),label:"Bottom",labelPlacement:"bottom"}),Object(i.jsx)(r.a,{value:"end",control:Object(i.jsx)(o.a,{color:"primary"}),label:"End",labelPlacement:"end"})]})]})}},1847:function(e,n,t){"use strict";t.r(n),n.default='import Checkbox from \'@material-ui/core/Checkbox\';\nimport FormGroup from \'@material-ui/core/FormGroup\';\nimport FormControlLabel from \'@material-ui/core/FormControlLabel\';\nimport FormControl from \'@material-ui/core/FormControl\';\nimport FormLabel from \'@material-ui/core/FormLabel\';\n\nexport default function FormControlLabelPosition() {\n  return (\n    <FormControl component="fieldset">\n      <FormLabel component="legend">Label Placement</FormLabel>\n      <FormGroup aria-label="position" row>\n        <FormControlLabel\n          value="top"\n          control={<Checkbox color="primary" />}\n          label="Top"\n          labelPlacement="top"\n        />\n        <FormControlLabel\n          value="start"\n          control={<Checkbox color="primary" />}\n          label="Start"\n          labelPlacement="start"\n        />\n        <FormControlLabel\n          value="bottom"\n          control={<Checkbox color="primary" />}\n          label="Bottom"\n          labelPlacement="bottom"\n        />\n        <FormControlLabel\n          value="end"\n          control={<Checkbox color="primary" />}\n          label="End"\n          labelPlacement="end"\n        />\n      </FormGroup>\n    </FormControl>\n  );\n}\n'},1848:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return d}));var o=t(6),a=t(3),r=t(616),c=t(1159),l=t(1),i=Object(r.a)({root:{"&:hover":{backgroundColor:"transparent"}},icon:{borderRadius:3,width:16,height:16,boxShadow:"inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",backgroundColor:"#f5f8fa",backgroundImage:"linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))","$root.Mui-focusVisible &":{outline:"2px auto rgba(19,124,189,.6)",outlineOffset:2},"input:hover ~ &":{backgroundColor:"#ebf1f5"},"input:disabled ~ &":{boxShadow:"none",background:"rgba(206,217,224,.5)"}},checkedIcon:{backgroundColor:"#137cbd",backgroundImage:"linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))","&:before":{display:"block",width:16,height:16,backgroundImage:"url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",content:'""'},"input:hover ~ &":{backgroundColor:"#106ba3"}}});function s(e){var n=i();return Object(l.jsx)(c.a,Object(o.a)({className:n.root,disableRipple:!0,color:"default",checkedIcon:Object(l.jsx)("span",{className:Object(a.a)(n.icon,n.checkedIcon)}),icon:Object(l.jsx)("span",{className:n.icon}),inputProps:{"aria-label":"decorative checkbox"}},e))}function d(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(s,{}),Object(l.jsx)(s,{defaultChecked:!0}),Object(l.jsx)(s,{disabled:!0})]})}},1849:function(e,n,t){"use strict";t.r(n),n.default="import clsx from 'clsx';\nimport { makeStyles } from '@material-ui/core/styles';\nimport Checkbox from '@material-ui/core/Checkbox';\n\nconst useStyles = makeStyles({\n  root: {\n    '&:hover': {\n      backgroundColor: 'transparent',\n    },\n  },\n  icon: {\n    borderRadius: 3,\n    width: 16,\n    height: 16,\n    boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',\n    backgroundColor: '#f5f8fa',\n    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',\n    '$root.Mui-focusVisible &': {\n      outline: '2px auto rgba(19,124,189,.6)',\n      outlineOffset: 2,\n    },\n    'input:hover ~ &': {\n      backgroundColor: '#ebf1f5',\n    },\n    'input:disabled ~ &': {\n      boxShadow: 'none',\n      background: 'rgba(206,217,224,.5)',\n    },\n  },\n  checkedIcon: {\n    backgroundColor: '#137cbd',\n    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',\n    '&:before': {\n      display: 'block',\n      width: 16,\n      height: 16,\n      backgroundImage:\n        \"url(\\\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath\" +\n        \" fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 \" +\n        \"1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\\\")\",\n      content: '\"\"',\n    },\n    'input:hover ~ &': {\n      backgroundColor: '#106ba3',\n    },\n  },\n});\n\n// Inspired by blueprintjs\nfunction StyledCheckbox(props) {\n  const classes = useStyles();\n\n  return (\n    <Checkbox\n      className={classes.root}\n      disableRipple\n      color=\"default\"\n      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}\n      icon={<span className={classes.icon} />}\n      inputProps={{ 'aria-label': 'decorative checkbox' }}\n      {...props}\n    />\n  );\n}\n\nexport default function CustomizedCheckbox() {\n  return (\n    <div>\n      <StyledCheckbox />\n      <StyledCheckbox defaultChecked />\n      <StyledCheckbox disabled />\n    </div>\n  );\n}\n"},2516:function(e,n,t){"use strict";t.r(n);var o=t(1127),a=t(123),r=t(1095),c=t(1088),l=t(193),i=t(616),s=t(1),d=Object(i.a)((function(e){return{layoutRoot:{"& .description":{marginBottom:16}}}}));n.default=function(e){return d(),Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("div",{className:"flex flex-1 flex-grow-0 items-center justify-end",children:Object(s.jsxs)(r.a,{className:"normal-case",variant:"outlined",component:"a",href:"https://material-ui.com/components/checkboxes",target:"_blank",role:"button",children:[Object(s.jsx)(c.a,{children:"link"}),Object(s.jsx)("span",{className:"mx-4",children:"Reference"})]})}),Object(s.jsx)(l.a,{className:"text-44 mt-32 mb-8",component:"h1",children:"Checkbox"}),Object(s.jsx)(l.a,{className:"description",children:"Checkboxes allow the user to select one or more items from a set."}),Object(s.jsxs)(l.a,{className:"mb-16",component:"div",children:[Object(s.jsx)("a",{href:"https://material.io/design/components/selection-controls.html#checkboxes",children:"Checkboxes"})," can be used to turn an option on or off."]}),Object(s.jsx)(l.a,{className:"mb-16",component:"div",children:"If you have multiple options appearing in a list, you can preserve space by using checkboxes instead of on/off switches. If you have a single option, avoid using a checkbox and use an on/off switch instead."}),Object(s.jsx)(l.a,{className:"text-32 mt-32 mb-8",component:"h2",children:"Basic checkboxes"}),Object(s.jsx)(l.a,{className:"mb-16",component:"div",children:Object(s.jsx)(o.a,{className:"my-24",iframe:!1,component:t(1839).default,raw:t(1840)})}),Object(s.jsx)(l.a,{className:"text-32 mt-32 mb-8",component:"h2",children:"Checkbox with FormControlLabel"}),Object(s.jsxs)(l.a,{className:"mb-16",component:"div",children:[Object(s.jsx)("code",{children:"Checkbox"})," can be provided with a label thanks to the ",Object(s.jsx)("code",{children:"FormControlLabel"})," component."]}),Object(s.jsx)(l.a,{className:"mb-16",component:"div",children:Object(s.jsx)(o.a,{className:"my-24",iframe:!1,component:t(1841).default,raw:t(1843)})}),Object(s.jsx)(l.a,{className:"text-32 mt-32 mb-8",component:"h2",children:"Checkboxes with FormGroup"}),Object(s.jsxs)(l.a,{className:"mb-16",component:"div",children:[Object(s.jsx)("code",{children:"FormGroup"})," is a helpful wrapper used to group selection controls components that provides an easier API."]}),Object(s.jsx)(l.a,{className:"mb-16",component:"div",children:Object(s.jsx)(o.a,{className:"my-24",iframe:!1,component:t(1844).default,raw:t(1845)})}),Object(s.jsx)(l.a,{className:"text-32 mt-32 mb-8",component:"h2",children:"Label placement"}),Object(s.jsx)(l.a,{className:"mb-16",component:"div",children:"You can change the placement of the label:"}),Object(s.jsx)(l.a,{className:"mb-16",component:"div",children:Object(s.jsx)(o.a,{className:"my-24",iframe:!1,component:t(1846).default,raw:t(1847)})}),Object(s.jsx)(l.a,{className:"text-32 mt-32 mb-8",component:"h2",children:"Customized checkbox"}),Object(s.jsxs)(l.a,{className:"mb-16",component:"div",children:["Here is an example of customizing the component. You can learn more about this in the",Object(s.jsx)("a",{href:"/customization/components/",children:"overrides documentation page"}),"."]}),Object(s.jsx)(l.a,{className:"mb-16",component:"div",children:Object(s.jsx)(o.a,{className:"my-24",iframe:!1,component:t(1848).default,raw:t(1849)})}),Object(s.jsxs)(l.a,{className:"mb-16",component:"div",children:["\ud83c\udfa8 If you are looking for inspiration, you can check ",Object(s.jsx)("a",{href:"https://mui-treasury.com/styles/checkbox",children:"MUI Treasury's customization examples"}),"."]}),Object(s.jsx)(l.a,{className:"text-32 mt-32 mb-8",component:"h2",children:"When to use"}),Object(s.jsxs)("ul",{children:[Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"https://www.nngroup.com/articles/checkboxes-vs-radio-buttons/",children:"Checkboxes vs. Radio Buttons"})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"https://uxplanet.org/checkbox-vs-toggle-switch-7fc6e83f10b8",children:"Checkboxes vs. Switches"})})]}),Object(s.jsx)(l.a,{className:"text-32 mt-32 mb-8",component:"h2",children:"Accessibility"}),Object(s.jsxs)(l.a,{className:"mb-16",component:"div",children:["(WAI-ARIA: ",Object(s.jsx)("a",{href:"https://www.w3.org/TR/wai-aria-practices/#checkbox",children:"https://www.w3.org/TR/wai-aria-practices/#checkbox"}),")"]}),Object(s.jsxs)("ul",{children:[Object(s.jsxs)("li",{children:["All form controls should have labels, and this includes radio buttons, checkboxes, and switches. In most cases, this is done by using the ",Object(s.jsx)("code",{children:"<label>"})," element (",Object(s.jsx)("a",{href:"/api/form-control-label/",children:"FormControlLabel"}),")."]}),Object(s.jsxs)("li",{children:["When a label can't be used, it's necessary to add an attribute directly to the input component. In this case, you can apply the additional attribute (e.g. ",Object(s.jsx)("code",{children:"aria-label"}),", ",Object(s.jsx)("code",{children:"aria-labelledby"}),", ",Object(s.jsx)("code",{children:"title"}),") via the ",Object(s.jsx)("code",{children:"inputProps"})," property."]})]}),Object(s.jsx)(a.a,{component:"pre",className:"language-jsx",children:" \n<Checkbox\n  value=\"checkedA\"\n  inputProps={{ 'aria-label': 'Checkbox A' \n/>\n"})]})}}}]);