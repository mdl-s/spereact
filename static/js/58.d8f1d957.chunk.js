(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[58],{1126:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FrameContextConsumer=t.FrameContextProvider=t.FrameContext=void 0;var o,a=n(0),r=(o=a)&&o.__esModule?o:{default:o};var l=void 0,c=void 0;"undefined"!==typeof document&&(l=document),"undefined"!==typeof window&&(c=window);var i=t.FrameContext=r.default.createContext({document:l,window:c}),s=i.Provider,d=i.Consumer;t.FrameContextProvider=s,t.FrameContextConsumer=d},1127:function(e,t,n){"use strict";n.d(t,"a",(function(){return D}));var o=n(14),a=n(123),r=n(1098),l=n(1106),c=n(1088),i=n(1114),s=n(1116),d=n(3),u=n(0),m=n(12),b=n(6),p=n(29),f=n(30),h=n(57),j=n(58),x=n(1028),O=n(575),v=n(1085),g=n(1097),y=n(10),C=n(67),w=n(373),R=n(1128),F=n.n(R),k=n(1),N=Object(x.a)({productionPrefix:"iframe-"}),P=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(p.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={ready:!1},e.handleRef=function(t){e.contentDocument=t?t.node.contentDocument:null},e.onContentDidMount=function(){e.setState({ready:!0,jss:Object(C.c)(Object(b.a)(Object(b.a)({},Object(O.a)()),{},{plugins:[].concat(Object(m.a)(Object(O.a)().plugins),[Object(w.a)()]),insertionPoint:e.contentDocument.querySelector("#jss-demo-insertion-point")})),sheetsManager:new Map,container:e.contentDocument.body})},e.onContentDidUpdate=function(){e.contentDocument.body.dir=e.props.theme.direction},e.renderHead=function(){return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)("style",{dangerouslySetInnerHTML:{__html:"\n                    html {\n                    font-size: 62.5%;\n                    font-family: Poppins, Roboto, Helvetica Neue, Arial, sans-serif;\n                    }\n                "}}),Object(k.jsx)("noscript",{id:"jss-demo-insertion-point"})]})},e}return Object(f.a)(n,[{key:"render",value:function(){var e=this.props,t=e.children,n=e.classes,o=e.theme;return Object(k.jsx)(F.a,{head:this.renderHead(),ref:this.handleRef,className:Object(d.a)(n.root,"shadow"),contentDidMount:this.onContentDidMount,contentDidUpdate:this.onContentDidUpdate,children:this.state.ready?Object(k.jsx)(v.b,{jss:this.state.jss,generateClassName:N,sheetsManager:this.state.sheetsManager,children:Object(k.jsx)(g.a,{theme:o,children:Object(u.cloneElement)(t,{container:this.state.container})})}):null})}}]),n}(u.Component),S=Object(y.a)((function(e){return{root:{backgroundColor:e.palette.background.default,flexGrow:1,height:400,border:"none"}}}),{withTheme:!0})(P);function L(e){var t=Object(u.useState)(e.currentTabIndex),n=Object(o.a)(t,2),m=n[0],b=n[1],p=e.component,f=e.raw,h=e.iframe,j=e.className;return Object(k.jsxs)(l.a,{className:Object(d.a)(j,"shadow"),children:[Object(k.jsx)(r.a,{position:"static",color:"default",className:"shadow-0",children:Object(k.jsxs)(s.a,{classes:{root:"border-b-1",flexContainer:"justify-end"},value:m,onChange:function(e,t){b(t)},children:[p&&Object(k.jsx)(i.a,{classes:{root:"min-w-64"},icon:Object(k.jsx)(c.a,{children:"remove_red_eye"})}),f&&Object(k.jsx)(i.a,{classes:{root:"min-w-64"},icon:Object(k.jsx)(c.a,{children:"code"})})]})}),Object(k.jsxs)("div",{className:"flex justify-center max-w-full",children:[Object(k.jsx)("div",{className:0===m?"flex flex-1 max-w-full":"hidden",children:p&&(h?Object(k.jsx)(S,{children:Object(k.jsx)(p,{})}):Object(k.jsx)("div",{className:"p-24 flex flex-1 justify-center max-w-full",children:Object(k.jsx)(p,{})}))}),Object(k.jsx)("div",{className:1===m?"flex flex-1":"hidden",children:f&&Object(k.jsx)("div",{className:"flex flex-1",children:Object(k.jsx)(a.a,{component:"pre",className:"language-javascript w-full",children:f.default})})})]})]})}L.defaultProps={currentTabIndex:0};var D=L},1128:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FrameContextConsumer=t.FrameContext=void 0;var o=n(1126);Object.defineProperty(t,"FrameContext",{enumerable:!0,get:function(){return o.FrameContext}}),Object.defineProperty(t,"FrameContextConsumer",{enumerable:!0,get:function(){return o.FrameContextConsumer}});var a,r=n(1129),l=(a=r)&&a.__esModule?a:{default:a};t.default=l.default},1129:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=n(0),l=u(r),c=u(n(23)),i=u(n(8)),s=n(1126),d=u(n(1130));function u(e){return e&&e.__esModule?e:{default:e}}var m=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var o=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return o.handleLoad=function(){o.forceUpdate()},o._isMounted=!1,o}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"componentDidMount",value:function(){this._isMounted=!0;var e=this.getDoc();e&&"complete"===e.readyState?this.forceUpdate():this.node.addEventListener("load",this.handleLoad)}},{key:"componentWillUnmount",value:function(){this._isMounted=!1,this.node.removeEventListener("load",this.handleLoad)}},{key:"getDoc",value:function(){return this.node?this.node.contentDocument:null}},{key:"getMountTarget",value:function(){var e=this.getDoc();return this.props.mountTarget?e.querySelector(this.props.mountTarget):e.body.children[0]}},{key:"renderFrameContents",value:function(){if(!this._isMounted)return null;var e=this.getDoc();if(!e)return null;var t=this.props.contentDidMount,n=this.props.contentDidUpdate,o=e.defaultView||e.parentView,a=l.default.createElement(d.default,{contentDidMount:t,contentDidUpdate:n},l.default.createElement(s.FrameContextProvider,{value:{document:e,window:o}},l.default.createElement("div",{className:"frame-content"},this.props.children)));e.body.children.length<1&&(e.open("text/html","replace"),e.write(this.props.initialContent),e.close());var r=this.getMountTarget();return[c.default.createPortal(this.props.head,this.getDoc().head),c.default.createPortal(a,r)]}},{key:"render",value:function(){var e=this,t=o({},this.props,{children:void 0});return delete t.head,delete t.initialContent,delete t.mountTarget,delete t.contentDidMount,delete t.contentDidUpdate,l.default.createElement("iframe",o({},t,{ref:function(t){e.node=t}}),this.renderFrameContents())}}]),t}(r.Component);m.propTypes={style:i.default.object,head:i.default.node,initialContent:i.default.string,mountTarget:i.default.string,contentDidMount:i.default.func,contentDidUpdate:i.default.func,children:i.default.oneOfType([i.default.element,i.default.arrayOf(i.default.element)])},m.defaultProps={style:{},head:null,children:void 0,mountTarget:void 0,contentDidMount:function(){},contentDidUpdate:function(){},initialContent:'<!DOCTYPE html><html><head></head><body><div class="frame-root"></div></body></html>'},t.default=m},1130:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=n(0),r=(l(a),l(n(8)));function l(e){return e&&e.__esModule?e:{default:e}}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var s=function(e){function t(){return c(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"componentDidMount",value:function(){this.props.contentDidMount()}},{key:"componentDidUpdate",value:function(){this.props.contentDidUpdate()}},{key:"render",value:function(){return a.Children.only(this.props.children)}}]),t}(a.Component);s.propTypes={children:r.default.element.isRequired,contentDidMount:r.default.func.isRequired,contentDidUpdate:r.default.func.isRequired},t.default=s},2121:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var o=n(14),a=n(0),r=n(1117),l=n(1091),c=n(1092),i=n(1038),s=n(1039),d=n(1);function u(){var e=Object(a.useState)("female"),t=Object(o.a)(e,2),n=t[0],u=t[1];return Object(d.jsxs)(i.a,{component:"fieldset",children:[Object(d.jsx)(s.a,{component:"legend",children:"Gender"}),Object(d.jsxs)(l.a,{"aria-label":"gender",name:"gender1",value:n,onChange:function(e){u(e.target.value)},children:[Object(d.jsx)(c.a,{value:"female",control:Object(d.jsx)(r.a,{}),label:"Female"}),Object(d.jsx)(c.a,{value:"male",control:Object(d.jsx)(r.a,{}),label:"Male"}),Object(d.jsx)(c.a,{value:"other",control:Object(d.jsx)(r.a,{}),label:"Other"}),Object(d.jsx)(c.a,{value:"disabled",disabled:!0,control:Object(d.jsx)(r.a,{}),label:"(Disabled option)"})]})]})}},2122:function(e,t,n){"use strict";n.r(t),t.default='import { useState } from \'react\';\nimport Radio from \'@material-ui/core/Radio\';\nimport RadioGroup from \'@material-ui/core/RadioGroup\';\nimport FormControlLabel from \'@material-ui/core/FormControlLabel\';\nimport FormControl from \'@material-ui/core/FormControl\';\nimport FormLabel from \'@material-ui/core/FormLabel\';\n\nexport default function RadioButtonsGroup() {\n  const [value, setValue] = useState(\'female\');\n\n  const handleChange = (event) => {\n    setValue(event.target.value);\n  };\n\n  return (\n    <FormControl component="fieldset">\n      <FormLabel component="legend">Gender</FormLabel>\n      <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>\n        <FormControlLabel value="female" control={<Radio />} label="Female" />\n        <FormControlLabel value="male" control={<Radio />} label="Male" />\n        <FormControlLabel value="other" control={<Radio />} label="Other" />\n        <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" />\n      </RadioGroup>\n    </FormControl>\n  );\n}\n'},2123:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var o=n(14),a=n(6),r=n(0),l=n(10),c=n(179),i=n(1117),s=n(1),d=Object(l.a)({root:{color:c.a[400],"&$checked":{color:c.a[600]}},checked:{}})((function(e){return Object(s.jsx)(i.a,Object(a.a)({color:"default"},e))}));function u(){var e=Object(r.useState)("a"),t=Object(o.a)(e,2),n=t[0],a=t[1],l=function(e){a(e.target.value)};return Object(s.jsxs)("div",{children:[Object(s.jsx)(i.a,{checked:"a"===n,onChange:l,value:"a",name:"radio-button-demo",inputProps:{"aria-label":"A"}}),Object(s.jsx)(i.a,{checked:"b"===n,onChange:l,value:"b",name:"radio-button-demo",inputProps:{"aria-label":"B"}}),Object(s.jsx)(d,{checked:"c"===n,onChange:l,value:"c",name:"radio-button-demo",inputProps:{"aria-label":"C"}}),Object(s.jsx)(i.a,{checked:"d"===n,onChange:l,value:"d",color:"default",name:"radio-button-demo",inputProps:{"aria-label":"D"}}),Object(s.jsx)(i.a,{checked:"e"===n,onChange:l,value:"e",color:"default",name:"radio-button-demo",inputProps:{"aria-label":"E"},size:"small"})]})}},2124:function(e,t,n){"use strict";n.r(t),t.default="import { useState } from 'react';\nimport { withStyles } from '@material-ui/core/styles';\nimport { green } from '@material-ui/core/colors';\nimport Radio from '@material-ui/core/Radio';\n\nconst GreenRadio = withStyles({\n  root: {\n    color: green[400],\n    '&$checked': {\n      color: green[600],\n    },\n  },\n  checked: {},\n})((props) => <Radio color=\"default\" {...props} />);\n\nexport default function RadioButtons() {\n  const [selectedValue, setSelectedValue] = useState('a');\n\n  const handleChange = (event) => {\n    setSelectedValue(event.target.value);\n  };\n\n  return (\n    <div>\n      <Radio\n        checked={selectedValue === 'a'}\n        onChange={handleChange}\n        value=\"a\"\n        name=\"radio-button-demo\"\n        inputProps={{ 'aria-label': 'A' }}\n      />\n      <Radio\n        checked={selectedValue === 'b'}\n        onChange={handleChange}\n        value=\"b\"\n        name=\"radio-button-demo\"\n        inputProps={{ 'aria-label': 'B' }}\n      />\n      <GreenRadio\n        checked={selectedValue === 'c'}\n        onChange={handleChange}\n        value=\"c\"\n        name=\"radio-button-demo\"\n        inputProps={{ 'aria-label': 'C' }}\n      />\n      <Radio\n        checked={selectedValue === 'd'}\n        onChange={handleChange}\n        value=\"d\"\n        color=\"default\"\n        name=\"radio-button-demo\"\n        inputProps={{ 'aria-label': 'D' }}\n      />\n      <Radio\n        checked={selectedValue === 'e'}\n        onChange={handleChange}\n        value=\"e\"\n        color=\"default\"\n        name=\"radio-button-demo\"\n        inputProps={{ 'aria-label': 'E' }}\n        size=\"small\"\n      />\n    </div>\n  );\n}\n"},2125:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));var o=n(1117),a=n(1091),r=n(1092),l=n(1038),c=n(1039),i=n(1);function s(){return Object(i.jsxs)(l.a,{component:"fieldset",children:[Object(i.jsx)(c.a,{component:"legend",children:"labelPlacement"}),Object(i.jsxs)(a.a,{row:!0,"aria-label":"position",name:"position",defaultValue:"top",children:[Object(i.jsx)(r.a,{value:"top",control:Object(i.jsx)(o.a,{color:"primary"}),label:"Top",labelPlacement:"top"}),Object(i.jsx)(r.a,{value:"start",control:Object(i.jsx)(o.a,{color:"primary"}),label:"Start",labelPlacement:"start"}),Object(i.jsx)(r.a,{value:"bottom",control:Object(i.jsx)(o.a,{color:"primary"}),label:"Bottom",labelPlacement:"bottom"}),Object(i.jsx)(r.a,{value:"end",control:Object(i.jsx)(o.a,{color:"primary"}),label:"End"})]})]})}},2126:function(e,t,n){"use strict";n.r(t),t.default='import Radio from \'@material-ui/core/Radio\';\nimport RadioGroup from \'@material-ui/core/RadioGroup\';\nimport FormControlLabel from \'@material-ui/core/FormControlLabel\';\nimport FormControl from \'@material-ui/core/FormControl\';\nimport FormLabel from \'@material-ui/core/FormLabel\';\n\nexport default function FormControlLabelPlacement() {\n  return (\n    <FormControl component="fieldset">\n      <FormLabel component="legend">labelPlacement</FormLabel>\n      <RadioGroup row aria-label="position" name="position" defaultValue="top">\n        <FormControlLabel\n          value="top"\n          control={<Radio color="primary" />}\n          label="Top"\n          labelPlacement="top"\n        />\n        <FormControlLabel\n          value="start"\n          control={<Radio color="primary" />}\n          label="Start"\n          labelPlacement="start"\n        />\n        <FormControlLabel\n          value="bottom"\n          control={<Radio color="primary" />}\n          label="Bottom"\n          labelPlacement="bottom"\n        />\n        <FormControlLabel value="end" control={<Radio color="primary" />} label="End" />\n      </RadioGroup>\n    </FormControl>\n  );\n}\n'},2127:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return f}));var o=n(14),a=n(0),r=n(616),l=n(1117),c=n(1091),i=n(1092),s=n(1038),d=n(1042),u=n(1039),m=n(1095),b=n(1),p=Object(r.a)((function(e){return{formControl:{margin:e.spacing(3)},button:{margin:e.spacing(1,1,0,0)}}}));function f(){var e=p(),t=Object(a.useState)(""),n=Object(o.a)(t,2),r=n[0],f=n[1],h=Object(a.useState)(!1),j=Object(o.a)(h,2),x=j[0],O=j[1],v=Object(a.useState)("Choose wisely"),g=Object(o.a)(v,2),y=g[0],C=g[1];return Object(b.jsx)("form",{onSubmit:function(e){e.preventDefault(),"best"===r?(C("You got it!"),O(!1)):"worst"===r?(C("Sorry, wrong answer!"),O(!0)):(C("Please select an option."),O(!0))},children:Object(b.jsxs)(s.a,{component:"fieldset",error:x,className:e.formControl,children:[Object(b.jsx)(u.a,{component:"legend",children:"Pop quiz: Material-UI is..."}),Object(b.jsxs)(c.a,{"aria-label":"quiz",name:"quiz",value:r,onChange:function(e){f(e.target.value),C(" "),O(!1)},children:[Object(b.jsx)(i.a,{value:"best",control:Object(b.jsx)(l.a,{}),label:"The best!"}),Object(b.jsx)(i.a,{value:"worst",control:Object(b.jsx)(l.a,{}),label:"The worst."})]}),Object(b.jsx)(d.a,{children:y}),Object(b.jsx)(m.a,{type:"submit",variant:"outlined",color:"primary",className:e.button,children:"Check Answer"})]})})}},2128:function(e,t,n){"use strict";n.r(t),t.default="import { useState } from 'react';\nimport { makeStyles } from '@material-ui/core/styles';\nimport Radio from '@material-ui/core/Radio';\nimport RadioGroup from '@material-ui/core/RadioGroup';\nimport FormControlLabel from '@material-ui/core/FormControlLabel';\nimport FormControl from '@material-ui/core/FormControl';\nimport FormHelperText from '@material-ui/core/FormHelperText';\nimport FormLabel from '@material-ui/core/FormLabel';\nimport Button from '@material-ui/core/Button';\n\nconst useStyles = makeStyles((theme) => ({\n  formControl: {\n    margin: theme.spacing(3),\n  },\n  button: {\n    margin: theme.spacing(1, 1, 0, 0),\n  },\n}));\n\nexport default function ErrorRadios() {\n  const classes = useStyles();\n  const [value, setValue] = useState('');\n  const [error, setError] = useState(false);\n  const [helperText, setHelperText] = useState('Choose wisely');\n\n  const handleRadioChange = (event) => {\n    setValue(event.target.value);\n    setHelperText(' ');\n    setError(false);\n  };\n\n  const handleSubmit = (event) => {\n    event.preventDefault();\n\n    if (value === 'best') {\n      setHelperText('You got it!');\n      setError(false);\n    } else if (value === 'worst') {\n      setHelperText('Sorry, wrong answer!');\n      setError(true);\n    } else {\n      setHelperText('Please select an option.');\n      setError(true);\n    }\n  };\n\n  return (\n    <form onSubmit={handleSubmit}>\n      <FormControl component=\"fieldset\" error={error} className={classes.formControl}>\n        <FormLabel component=\"legend\">Pop quiz: Material-UI is...</FormLabel>\n        <RadioGroup aria-label=\"quiz\" name=\"quiz\" value={value} onChange={handleRadioChange}>\n          <FormControlLabel value=\"best\" control={<Radio />} label=\"The best!\" />\n          <FormControlLabel value=\"worst\" control={<Radio />} label=\"The worst.\" />\n        </RadioGroup>\n        <FormHelperText>{helperText}</FormHelperText>\n        <Button type=\"submit\" variant=\"outlined\" color=\"primary\" className={classes.button}>\n          Check Answer\n        </Button>\n      </FormControl>\n    </form>\n  );\n}\n"},2129:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return p}));var o=n(6),a=n(3),r=n(616),l=n(1117),c=n(1091),i=n(1092),s=n(1038),d=n(1039),u=n(1),m=Object(r.a)({root:{"&:hover":{backgroundColor:"transparent"}},icon:{borderRadius:"50%",width:16,height:16,boxShadow:"inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",backgroundColor:"#f5f8fa",backgroundImage:"linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))","$root.Mui-focusVisible &":{outline:"2px auto rgba(19,124,189,.6)",outlineOffset:2},"input:hover ~ &":{backgroundColor:"#ebf1f5"},"input:disabled ~ &":{boxShadow:"none",background:"rgba(206,217,224,.5)"}},checkedIcon:{backgroundColor:"#137cbd",backgroundImage:"linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))","&:before":{display:"block",width:16,height:16,backgroundImage:"radial-gradient(#fff,#fff 28%,transparent 32%)",content:'""'},"input:hover ~ &":{backgroundColor:"#106ba3"}}});function b(e){var t=m();return Object(u.jsx)(l.a,Object(o.a)({className:t.root,disableRipple:!0,color:"default",checkedIcon:Object(u.jsx)("span",{className:Object(a.a)(t.icon,t.checkedIcon)}),icon:Object(u.jsx)("span",{className:t.icon})},e))}function p(){return Object(u.jsxs)(s.a,{component:"fieldset",children:[Object(u.jsx)(d.a,{component:"legend",children:"Gender"}),Object(u.jsxs)(c.a,{defaultValue:"female","aria-label":"gender",name:"customized-radios",children:[Object(u.jsx)(i.a,{value:"female",control:Object(u.jsx)(b,{}),label:"Female"}),Object(u.jsx)(i.a,{value:"male",control:Object(u.jsx)(b,{}),label:"Male"}),Object(u.jsx)(i.a,{value:"other",control:Object(u.jsx)(b,{}),label:"Other"}),Object(u.jsx)(i.a,{value:"disabled",disabled:!0,control:Object(u.jsx)(b,{}),label:"(Disabled option)"})]})]})}},2130:function(e,t,n){"use strict";n.r(t),t.default="import clsx from 'clsx';\nimport { makeStyles } from '@material-ui/core/styles';\nimport Radio from '@material-ui/core/Radio';\nimport RadioGroup from '@material-ui/core/RadioGroup';\nimport FormControlLabel from '@material-ui/core/FormControlLabel';\nimport FormControl from '@material-ui/core/FormControl';\nimport FormLabel from '@material-ui/core/FormLabel';\n\nconst useStyles = makeStyles({\n  root: {\n    '&:hover': {\n      backgroundColor: 'transparent',\n    },\n  },\n  icon: {\n    borderRadius: '50%',\n    width: 16,\n    height: 16,\n    boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',\n    backgroundColor: '#f5f8fa',\n    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',\n    '$root.Mui-focusVisible &': {\n      outline: '2px auto rgba(19,124,189,.6)',\n      outlineOffset: 2,\n    },\n    'input:hover ~ &': {\n      backgroundColor: '#ebf1f5',\n    },\n    'input:disabled ~ &': {\n      boxShadow: 'none',\n      background: 'rgba(206,217,224,.5)',\n    },\n  },\n  checkedIcon: {\n    backgroundColor: '#137cbd',\n    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',\n    '&:before': {\n      display: 'block',\n      width: 16,\n      height: 16,\n      backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',\n      content: '\"\"',\n    },\n    'input:hover ~ &': {\n      backgroundColor: '#106ba3',\n    },\n  },\n});\n\n// Inspired by blueprintjs\nfunction StyledRadio(props) {\n  const classes = useStyles();\n\n  return (\n    <Radio\n      className={classes.root}\n      disableRipple\n      color=\"default\"\n      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}\n      icon={<span className={classes.icon} />}\n      {...props}\n    />\n  );\n}\n\nexport default function CustomizedRadios() {\n  return (\n    <FormControl component=\"fieldset\">\n      <FormLabel component=\"legend\">Gender</FormLabel>\n      <RadioGroup defaultValue=\"female\" aria-label=\"gender\" name=\"customized-radios\">\n        <FormControlLabel value=\"female\" control={<StyledRadio />} label=\"Female\" />\n        <FormControlLabel value=\"male\" control={<StyledRadio />} label=\"Male\" />\n        <FormControlLabel value=\"other\" control={<StyledRadio />} label=\"Other\" />\n        <FormControlLabel\n          value=\"disabled\"\n          disabled\n          control={<StyledRadio />}\n          label=\"(Disabled option)\"\n        />\n      </RadioGroup>\n    </FormControl>\n  );\n}\n"},2541:function(e,t,n){"use strict";n.r(t);var o=n(1127),a=n(123),r=n(1095),l=n(1088),c=n(193),i=n(616),s=n(1),d=Object(i.a)((function(e){return{layoutRoot:{"& .description":{marginBottom:16}}}}));t.default=function(e){return d(),Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("div",{className:"flex flex-1 flex-grow-0 items-center justify-end",children:Object(s.jsxs)(r.a,{className:"normal-case",variant:"outlined",component:"a",href:"https://material-ui.com/components/radio-buttons",target:"_blank",role:"button",children:[Object(s.jsx)(l.a,{children:"link"}),Object(s.jsx)("span",{className:"mx-4",children:"Reference"})]})}),Object(s.jsx)(c.a,{className:"text-44 mt-32 mb-8",component:"h1",children:"Radio"}),Object(s.jsx)(c.a,{className:"description",children:"Radio buttons allow the user to select one option from a set."}),Object(s.jsxs)(c.a,{className:"mb-16",component:"div",children:["Use ",Object(s.jsx)("a",{href:"https://material.io/design/components/selection-controls.html#radio-buttons",children:"radio buttons"})," when the user needs to see all available options. If available options can be collapsed, consider using a dropdown menu because it uses less space."]}),Object(s.jsx)(c.a,{className:"mb-16",component:"div",children:"Radio buttons should have the most commonly used option selected by default."}),Object(s.jsx)(c.a,{className:"text-32 mt-32 mb-8",component:"h2",children:"RadioGroup"}),Object(s.jsxs)(c.a,{className:"mb-16",component:"div",children:[Object(s.jsx)("code",{children:"RadioGroup"})," is a helpful wrapper used to group ",Object(s.jsx)("code",{children:"Radio"})," components that provides an easier API, and proper keyboard accessibility to the group."]}),Object(s.jsx)(c.a,{className:"mb-16",component:"div",children:Object(s.jsx)(o.a,{className:"my-24",iframe:!1,component:n(2121).default,raw:n(2122)})}),Object(s.jsxs)(c.a,{className:"mb-16",component:"div",children:["To lay out the buttons horizontally, set the ",Object(s.jsx)("code",{children:"row"})," prop: ",Object(s.jsx)("code",{children:"<RadioGroup row />"}),"."]}),Object(s.jsx)(c.a,{className:"text-32 mt-32 mb-8",component:"h2",children:"Standalone radio buttons"}),Object(s.jsxs)(c.a,{className:"mb-16",component:"div",children:[Object(s.jsx)("code",{children:"Radio"})," can also be used standalone, without the RadioGroup wrapper."]}),Object(s.jsx)(c.a,{className:"mb-16",component:"div",children:Object(s.jsx)(o.a,{className:"my-24",iframe:!1,component:n(2123).default,raw:n(2124)})}),Object(s.jsx)(c.a,{className:"text-32 mt-32 mb-8",component:"h2",children:"Label placement"}),Object(s.jsxs)(c.a,{className:"mb-16",component:"div",children:["You can change the placement of the label with the ",Object(s.jsx)("code",{children:"FormControlLabel"})," component's ",Object(s.jsx)("code",{children:"labelPlacement"})," prop:"]}),Object(s.jsx)(c.a,{className:"mb-16",component:"div",children:Object(s.jsx)(o.a,{className:"my-24",iframe:!1,component:n(2125).default,raw:n(2126)})}),Object(s.jsx)(c.a,{className:"text-32 mt-32 mb-8",component:"h2",children:"Show error"}),Object(s.jsx)(c.a,{className:"mb-16",component:"div",children:"In general, radio buttons should have a value selected by default. If this is not the case, you can display an error if no value is selected when the form is submitted:"}),Object(s.jsx)(c.a,{className:"mb-16",component:"div",children:Object(s.jsx)(o.a,{className:"my-24",iframe:!1,component:n(2127).default,raw:n(2128)})}),Object(s.jsx)(c.a,{className:"text-32 mt-32 mb-8",component:"h2",children:"Customized radios"}),Object(s.jsxs)(c.a,{className:"mb-16",component:"div",children:["Here is an example of customizing the component. You can learn more about this in the",Object(s.jsx)("a",{href:"/customization/components/",children:"overrides documentation page"}),"."]}),Object(s.jsx)(c.a,{className:"mb-16",component:"div",children:Object(s.jsx)(o.a,{className:"my-24",iframe:!1,component:n(2129).default,raw:n(2130)})}),Object(s.jsx)(c.a,{className:"text-32 mt-32 mb-8",component:"h2",children:"When to use"}),Object(s.jsx)("ul",{children:Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"https://www.nngroup.com/articles/checkboxes-vs-radio-buttons/",children:"Checkboxes vs. Radio Buttons"})})}),Object(s.jsx)(c.a,{className:"text-32 mt-32 mb-8",component:"h2",children:"Accessibility"}),Object(s.jsxs)(c.a,{className:"mb-16",component:"div",children:["(WAI-ARIA: ",Object(s.jsx)("a",{href:"https://www.w3.org/TR/wai-aria-practices/#radiobutton",children:"https://www.w3.org/TR/wai-aria-practices/#radiobutton"}),")"]}),Object(s.jsxs)("ul",{children:[Object(s.jsxs)("li",{children:["All form controls should have labels, and this includes radio buttons, checkboxes, and switches. In most cases, this is done by using the ",Object(s.jsx)("code",{children:"<label>"})," element (",Object(s.jsx)("a",{href:"/api/form-control-label/",children:"FormControlLabel"}),")."]}),Object(s.jsxs)("li",{children:["When a label can't be used, it's necessary to add an attribute directly to the input component. In this case, you can apply the additional attribute (e.g. ",Object(s.jsx)("code",{children:"aria-label"}),", ",Object(s.jsx)("code",{children:"aria-labelledby"}),", ",Object(s.jsx)("code",{children:"title"}),") via the ",Object(s.jsx)("code",{children:"inputProps"})," property."]})]}),Object(s.jsx)(a.a,{component:"pre",className:"language-jsx",children:" \n<RadioButton\n  value=\"radioA\"\n  inputProps={{ 'aria-label': 'Radio A' \n/>\n"})]})}}}]);