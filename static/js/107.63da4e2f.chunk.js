(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[107],{1126:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FrameContextConsumer=t.FrameContextProvider=t.FrameContext=void 0;var o,r=n(0),c=(o=r)&&o.__esModule?o:{default:o};var a=void 0,s=void 0;"undefined"!==typeof document&&(a=document),"undefined"!==typeof window&&(s=window);var i=t.FrameContext=c.default.createContext({document:a,window:s}),l=i.Provider,d=i.Consumer;t.FrameContextProvider=l,t.FrameContextConsumer=d},1127:function(e,t,n){"use strict";n.d(t,"a",(function(){return B}));var o=n(14),r=n(123),c=n(1098),a=n(1106),s=n(1088),i=n(1114),l=n(1116),d=n(3),u=n(0),h=n(12),j=n(6),p=n(29),f=n(30),m=n(57),b=n(58),x=n(1028),O=n(575),y=n(1085),v=n(1097),g=n(10),w=n(67),C=n(373),N=n(1128),D=n.n(N),_=n(1),M=Object(x.a)({productionPrefix:"iframe-"}),T=function(e){Object(m.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(p.a)(this,n);for(var o=arguments.length,r=new Array(o),c=0;c<o;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={ready:!1},e.handleRef=function(t){e.contentDocument=t?t.node.contentDocument:null},e.onContentDidMount=function(){e.setState({ready:!0,jss:Object(w.c)(Object(j.a)(Object(j.a)({},Object(O.a)()),{},{plugins:[].concat(Object(h.a)(Object(O.a)().plugins),[Object(C.a)()]),insertionPoint:e.contentDocument.querySelector("#jss-demo-insertion-point")})),sheetsManager:new Map,container:e.contentDocument.body})},e.onContentDidUpdate=function(){e.contentDocument.body.dir=e.props.theme.direction},e.renderHead=function(){return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)("style",{dangerouslySetInnerHTML:{__html:"\n                    html {\n                    font-size: 62.5%;\n                    font-family: Poppins, Roboto, Helvetica Neue, Arial, sans-serif;\n                    }\n                "}}),Object(_.jsx)("noscript",{id:"jss-demo-insertion-point"})]})},e}return Object(f.a)(n,[{key:"render",value:function(){var e=this.props,t=e.children,n=e.classes,o=e.theme;return Object(_.jsx)(D.a,{head:this.renderHead(),ref:this.handleRef,className:Object(d.a)(n.root,"shadow"),contentDidMount:this.onContentDidMount,contentDidUpdate:this.onContentDidUpdate,children:this.state.ready?Object(_.jsx)(y.b,{jss:this.state.jss,generateClassName:M,sheetsManager:this.state.sheetsManager,children:Object(_.jsx)(v.a,{theme:o,children:Object(u.cloneElement)(t,{container:this.state.container})})}):null})}}]),n}(u.Component),P=Object(g.a)((function(e){return{root:{backgroundColor:e.palette.background.default,flexGrow:1,height:400,border:"none"}}}),{withTheme:!0})(T);function k(e){var t=Object(u.useState)(e.currentTabIndex),n=Object(o.a)(t,2),h=n[0],j=n[1],p=e.component,f=e.raw,m=e.iframe,b=e.className;return Object(_.jsxs)(a.a,{className:Object(d.a)(b,"shadow"),children:[Object(_.jsx)(c.a,{position:"static",color:"default",className:"shadow-0",children:Object(_.jsxs)(l.a,{classes:{root:"border-b-1",flexContainer:"justify-end"},value:h,onChange:function(e,t){j(t)},children:[p&&Object(_.jsx)(i.a,{classes:{root:"min-w-64"},icon:Object(_.jsx)(s.a,{children:"remove_red_eye"})}),f&&Object(_.jsx)(i.a,{classes:{root:"min-w-64"},icon:Object(_.jsx)(s.a,{children:"code"})})]})}),Object(_.jsxs)("div",{className:"flex justify-center max-w-full",children:[Object(_.jsx)("div",{className:0===h?"flex flex-1 max-w-full":"hidden",children:p&&(m?Object(_.jsx)(P,{children:Object(_.jsx)(p,{})}):Object(_.jsx)("div",{className:"p-24 flex flex-1 justify-center max-w-full",children:Object(_.jsx)(p,{})}))}),Object(_.jsx)("div",{className:1===h?"flex flex-1":"hidden",children:f&&Object(_.jsx)("div",{className:"flex flex-1",children:Object(_.jsx)(r.a,{component:"pre",className:"language-javascript w-full",children:f.default})})})]})]})}k.defaultProps={currentTabIndex:0};var B=k},1128:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FrameContextConsumer=t.FrameContext=void 0;var o=n(1126);Object.defineProperty(t,"FrameContext",{enumerable:!0,get:function(){return o.FrameContext}}),Object.defineProperty(t,"FrameContextConsumer",{enumerable:!0,get:function(){return o.FrameContextConsumer}});var r,c=n(1129),a=(r=c)&&r.__esModule?r:{default:r};t.default=a.default},1129:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),c=n(0),a=u(c),s=u(n(23)),i=u(n(8)),l=n(1126),d=u(n(1130));function u(e){return e&&e.__esModule?e:{default:e}}var h=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var o=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return o.handleLoad=function(){o.forceUpdate()},o._isMounted=!1,o}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidMount",value:function(){this._isMounted=!0;var e=this.getDoc();e&&"complete"===e.readyState?this.forceUpdate():this.node.addEventListener("load",this.handleLoad)}},{key:"componentWillUnmount",value:function(){this._isMounted=!1,this.node.removeEventListener("load",this.handleLoad)}},{key:"getDoc",value:function(){return this.node?this.node.contentDocument:null}},{key:"getMountTarget",value:function(){var e=this.getDoc();return this.props.mountTarget?e.querySelector(this.props.mountTarget):e.body.children[0]}},{key:"renderFrameContents",value:function(){if(!this._isMounted)return null;var e=this.getDoc();if(!e)return null;var t=this.props.contentDidMount,n=this.props.contentDidUpdate,o=e.defaultView||e.parentView,r=a.default.createElement(d.default,{contentDidMount:t,contentDidUpdate:n},a.default.createElement(l.FrameContextProvider,{value:{document:e,window:o}},a.default.createElement("div",{className:"frame-content"},this.props.children)));e.body.children.length<1&&(e.open("text/html","replace"),e.write(this.props.initialContent),e.close());var c=this.getMountTarget();return[s.default.createPortal(this.props.head,this.getDoc().head),s.default.createPortal(r,c)]}},{key:"render",value:function(){var e=this,t=o({},this.props,{children:void 0});return delete t.head,delete t.initialContent,delete t.mountTarget,delete t.contentDidMount,delete t.contentDidUpdate,a.default.createElement("iframe",o({},t,{ref:function(t){e.node=t}}),this.renderFrameContents())}}]),t}(c.Component);h.propTypes={style:i.default.object,head:i.default.node,initialContent:i.default.string,mountTarget:i.default.string,contentDidMount:i.default.func,contentDidUpdate:i.default.func,children:i.default.oneOfType([i.default.element,i.default.arrayOf(i.default.element)])},h.defaultProps={style:{},head:null,children:void 0,mountTarget:void 0,contentDidMount:function(){},contentDidUpdate:function(){},initialContent:'<!DOCTYPE html><html><head></head><body><div class="frame-root"></div></body></html>'},t.default=h},1130:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=n(0),c=(a(r),a(n(8)));function a(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var l=function(e){function t(){return s(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"componentDidMount",value:function(){this.props.contentDidMount()}},{key:"componentDidUpdate",value:function(){this.props.contentDidUpdate()}},{key:"render",value:function(){return r.Children.only(this.props.children)}}]),t}(r.Component);l.propTypes={children:c.default.element.isRequired,contentDidMount:c.default.func.isRequired,contentDidUpdate:c.default.func.isRequired},t.default=l},2509:function(e,t,n){"use strict";n.r(t);n(1127);var o=n(123),r=n(1095),c=n(1088),a=n(193),s=n(616),i=n(1),l=Object(s.a)((function(e){return{layoutRoot:{"& .description":{marginBottom:16}}}}));t.default=function(e){return l(),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{className:"flex flex-1 flex-grow-0 items-center justify-end",children:Object(i.jsxs)(r.a,{className:"normal-case",variant:"outlined",component:"a",href:"https://material-ui.com/components/box",target:"_blank",role:"button",children:[Object(i.jsx)(c.a,{children:"link"}),Object(i.jsx)("span",{className:"mx-4",children:"Reference"})]})}),Object(i.jsx)(a.a,{className:"text-44 mt-32 mb-8",component:"h1",children:"Box"}),Object(i.jsx)(a.a,{className:"description",children:"The Box component serves as a wrapper component for most of the CSS utility needs."}),Object(i.jsxs)(a.a,{className:"mb-16",component:"div",children:["The Box component packages ",Object(i.jsx)("a",{href:"/system/basics/#all-inclusive",children:"all the style functions"})," that are exposed in ",Object(i.jsx)("code",{children:"@material-ui/system"}),". It's created using the ",Object(i.jsx)("a",{href:"/styles/api/#styled-style-function-component",children:Object(i.jsx)("code",{children:"styled()"})})," function of ",Object(i.jsx)("code",{children:"@material-ui/core/styles"}),"."]}),Object(i.jsx)(a.a,{className:"text-32 mt-32 mb-8",component:"h2",children:"Example"}),Object(i.jsxs)(a.a,{className:"mb-16",component:"div",children:[Object(i.jsx)("a",{href:"/system/palette/",children:"The palette"})," style function."]}),Object(i.jsx)(a.a,{className:"text-32 mt-32 mb-8",component:"h2",children:"Overriding Material-UI components"}),Object(i.jsxs)(a.a,{className:"mb-16",component:"div",children:["The Box component wraps your component. It creates a new DOM element, a ",Object(i.jsx)("code",{children:"<div>"})," by default that can be changed with the ",Object(i.jsx)("code",{children:"component"})," property. Let's say you want to use a ",Object(i.jsx)("code",{children:"<span>"})," instead:"]}),Object(i.jsx)(o.a,{component:"pre",className:"language-jsx",children:' \n<Box component="span" m={1}>\n  <Button />\n</Box>\n'}),Object(i.jsx)(a.a,{className:"mb-16",component:"div",children:"This works great when the changes can be isolated to a new DOM element. For instance, you can change the margin this way."}),Object(i.jsx)(a.a,{className:"mb-16",component:"div",children:"However, sometimes you have to target the underlying DOM element. For instance, you want to change the text color of the button. The Button component defines its own color. CSS inheritance doesn't help. To workaround the problem, you have two options:"}),Object(i.jsx)("ol",{children:Object(i.jsxs)("li",{children:["Use ",Object(i.jsx)("a",{href:"https://reactjs.org/docs/react-api.html#cloneelement",children:Object(i.jsx)("code",{children:"React.cloneElement()"})})]})}),Object(i.jsxs)(a.a,{className:"mb-16",component:"div",children:["The Box component has a ",Object(i.jsx)("code",{children:"clone"})," property to enable the usage of the clone element method of React."]}),Object(i.jsx)(o.a,{component:"pre",className:"language-jsx",children:' \n<Box color="text.primary" clone>\n  <Button />\n</Box>\n'}),Object(i.jsx)("ol",{start:"2",children:Object(i.jsx)("li",{children:"Use render props"})}),Object(i.jsxs)(a.a,{className:"mb-16",component:"div",children:["The Box children accepts a render props function. You can pull out the ",Object(i.jsx)("code",{children:"className"}),"."]}),Object(i.jsx)(o.a,{component:"pre",className:"language-jsx",children:' \n<Box color="text.primary">\n  {props => <Button {...props} />}\n</Box>\n'}),Object(i.jsx)("blockquote",{children:Object(i.jsx)(a.a,{className:"mb-16",component:"div",children:"\u26a0\ufe0f The CSS specificity relies on the import order. If you want the guarantee that the wrapped component's style will be overridden, you need to import the Box last."})}),Object(i.jsx)(a.a,{className:"text-32 mt-32 mb-8",component:"h2",children:"API"}),Object(i.jsx)(o.a,{component:"pre",className:"language-jsx",children:" \nimport Box from '@material-ui/core/Box';\n"}),Object(i.jsxs)("table",{children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{align:"left",children:"Name"}),Object(i.jsx)("th",{align:"left",children:"Type"}),Object(i.jsx)("th",{align:"left",children:"Default"}),Object(i.jsx)("th",{align:"left",children:"Description"})]})}),Object(i.jsxs)("tbody",{children:[Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{align:"left",children:Object(i.jsx)("span",{className:"prop-name required",children:"children\xa0*"})}),Object(i.jsx)("td",{align:"left",children:Object(i.jsxs)("span",{className:"prop-type",children:["union:\xa0node\xa0|",Object(i.jsx)("br",{}),"\xa0func",Object(i.jsx)("br",{})]})}),Object(i.jsx)("td",{align:"left"}),Object(i.jsx)("td",{align:"left",children:"Box render function or node."})]}),Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{align:"left",children:Object(i.jsx)("span",{className:"prop-name",children:"clone"})}),Object(i.jsx)("td",{align:"left",children:Object(i.jsx)("span",{className:"prop-type",children:"bool"})}),Object(i.jsx)("td",{align:"left",children:Object(i.jsx)("span",{className:"prop-default",children:"false"})}),Object(i.jsxs)("td",{align:"left",children:["If ",Object(i.jsx)("code",{children:"true"}),", the box will recycle its children DOM element. It's using ",Object(i.jsx)("code",{children:"React.cloneElement"})," internally."]})]}),Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{align:"left",children:Object(i.jsx)("span",{className:"prop-name",children:"component"})}),Object(i.jsx)("td",{align:"left",children:Object(i.jsxs)("span",{className:"prop-type",children:["union:\xa0string\xa0|",Object(i.jsx)("br",{}),"\xa0func\xa0|",Object(i.jsx)("br",{}),"\xa0object",Object(i.jsx)("br",{})]})}),Object(i.jsx)("td",{align:"left",children:Object(i.jsx)("span",{className:"prop-default",children:"'div'"})}),Object(i.jsx)("td",{align:"left",children:"The component used for the root node. Either a string to use a DOM element or a component."})]})]})]}),Object(i.jsxs)(a.a,{className:"mb-16",component:"div",children:["Any other properties supplied will be used by ",Object(i.jsx)("a",{href:"/system/basics/#all-inclusive",children:"the style functions"})," or spread to the root element."]})]})}}}]);