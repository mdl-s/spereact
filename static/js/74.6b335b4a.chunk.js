(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[74],{1127:function(e,n,a){"use strict";a.d(n,"a",(function(){return k}));var t=a(14),i=a(123),o=a(1098),r=a(1106),c=a(1088),s=a(1114),l=a(1116),d=a(3),m=a(0),b=a(12),u=a(6),j=a(29),p=a(30),h=a(57),x=a(58),f=a(1028),v=a(575),O=a(1085),g=a(1097),y=a(10),N=a(67),I=a(373),w=a(1128),T=a.n(w),E=a(1),F=Object(f.a)({productionPrefix:"iframe-"}),A=function(e){Object(h.a)(a,e);var n=Object(x.a)(a);function a(){var e;Object(j.a)(this,a);for(var t=arguments.length,i=new Array(t),o=0;o<t;o++)i[o]=arguments[o];return(e=n.call.apply(n,[this].concat(i))).state={ready:!1},e.handleRef=function(n){e.contentDocument=n?n.node.contentDocument:null},e.onContentDidMount=function(){e.setState({ready:!0,jss:Object(N.c)(Object(u.a)(Object(u.a)({},Object(v.a)()),{},{plugins:[].concat(Object(b.a)(Object(v.a)().plugins),[Object(I.a)()]),insertionPoint:e.contentDocument.querySelector("#jss-demo-insertion-point")})),sheetsManager:new Map,container:e.contentDocument.body})},e.onContentDidUpdate=function(){e.contentDocument.body.dir=e.props.theme.direction},e.renderHead=function(){return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)("style",{dangerouslySetInnerHTML:{__html:"\n                    html {\n                    font-size: 62.5%;\n                    font-family: Poppins, Roboto, Helvetica Neue, Arial, sans-serif;\n                    }\n                "}}),Object(E.jsx)("noscript",{id:"jss-demo-insertion-point"})]})},e}return Object(p.a)(a,[{key:"render",value:function(){var e=this.props,n=e.children,a=e.classes,t=e.theme;return Object(E.jsx)(T.a,{head:this.renderHead(),ref:this.handleRef,className:Object(d.a)(a.root,"shadow"),contentDidMount:this.onContentDidMount,contentDidUpdate:this.onContentDidUpdate,children:this.state.ready?Object(E.jsx)(O.b,{jss:this.state.jss,generateClassName:F,sheetsManager:this.state.sheetsManager,children:Object(E.jsx)(g.a,{theme:t,children:Object(m.cloneElement)(n,{container:this.state.container})})}):null})}}]),a}(m.Component),C=Object(y.a)((function(e){return{root:{backgroundColor:e.palette.background.default,flexGrow:1,height:400,border:"none"}}}),{withTheme:!0})(A);function S(e){var n=Object(m.useState)(e.currentTabIndex),a=Object(t.a)(n,2),b=a[0],u=a[1],j=e.component,p=e.raw,h=e.iframe,x=e.className;return Object(E.jsxs)(r.a,{className:Object(d.a)(x,"shadow"),children:[Object(E.jsx)(o.a,{position:"static",color:"default",className:"shadow-0",children:Object(E.jsxs)(l.a,{classes:{root:"border-b-1",flexContainer:"justify-end"},value:b,onChange:function(e,n){u(n)},children:[j&&Object(E.jsx)(s.a,{classes:{root:"min-w-64"},icon:Object(E.jsx)(c.a,{children:"remove_red_eye"})}),p&&Object(E.jsx)(s.a,{classes:{root:"min-w-64"},icon:Object(E.jsx)(c.a,{children:"code"})})]})}),Object(E.jsxs)("div",{className:"flex justify-center max-w-full",children:[Object(E.jsx)("div",{className:0===b?"flex flex-1 max-w-full":"hidden",children:j&&(h?Object(E.jsx)(C,{children:Object(E.jsx)(j,{})}):Object(E.jsx)("div",{className:"p-24 flex flex-1 justify-center max-w-full",children:Object(E.jsx)(j,{})}))}),Object(E.jsx)("div",{className:1===b?"flex flex-1":"hidden",children:p&&Object(E.jsx)("div",{className:"flex flex-1",children:Object(E.jsx)(i.a,{component:"pre",className:"language-javascript w-full",children:p.default})})})]})]})}S.defaultProps={currentTabIndex:0};var k=S},1167:function(e,n,a){"use strict";var t=a(576),i=a(1124);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=i(a(0)),r=(0,t(a(1125)).default)(o.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");n.default=r},1168:function(e,n,a){"use strict";var t=a(576),i=a(1124);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=i(a(0)),r=(0,t(a(1125)).default)(o.createElement("path",{d:"M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"}),"Favorite");n.default=r},1334:function(e,n,a){"use strict";var t=a(2),i=a(68),o=a(9),r=a(0),c=(a(8),a(286)),s=a(60),l=a(43),d=a(74),m=a(26),b={entering:{transform:"none"},entered:{transform:"none"}},u={enter:s.b.enteringScreen,exit:s.b.leavingScreen},j=r.forwardRef((function(e,n){var a=e.children,s=e.disableStrictModeCompat,j=void 0!==s&&s,p=e.in,h=e.onEnter,x=e.onEntered,f=e.onEntering,v=e.onExit,O=e.onExited,g=e.onExiting,y=e.style,N=e.timeout,I=void 0===N?u:N,w=e.TransitionComponent,T=void 0===w?c.a:w,E=Object(o.a)(e,["children","disableStrictModeCompat","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"]),F=Object(l.a)(),A=F.unstable_strictMode&&!j,C=r.useRef(null),S=Object(m.a)(a.ref,n),k=Object(m.a)(A?C:void 0,S),P=function(e){return function(n,a){if(e){var t=A?[C.current,n]:[n,a],o=Object(i.a)(t,2),r=o[0],c=o[1];void 0===c?e(r):e(r,c)}}},M=P(f),z=P((function(e,n){Object(d.b)(e);var a=Object(d.a)({style:y,timeout:I},{mode:"enter"});e.style.webkitTransition=F.transitions.create("transform",a),e.style.transition=F.transitions.create("transform",a),h&&h(e,n)})),B=P(x),D=P(g),R=P((function(e){var n=Object(d.a)({style:y,timeout:I},{mode:"exit"});e.style.webkitTransition=F.transitions.create("transform",n),e.style.transition=F.transitions.create("transform",n),v&&v(e)})),_=P(O);return r.createElement(T,Object(t.a)({appear:!0,in:p,nodeRef:A?C:void 0,onEnter:z,onEntered:B,onEntering:M,onExit:R,onExited:_,onExiting:D,timeout:I},E),(function(e,n){return r.cloneElement(a,Object(t.a)({style:Object(t.a)({transform:"scale(0)",visibility:"exited"!==e||p?void 0:"hidden"},b[e],y,a.props.style),ref:k},n))}))}));n.a=j},1432:function(e,n,a){"use strict";var t=a(576),i=a(1124);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=i(a(0)),r=(0,t(a(1125)).default)(o.createElement("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");n.default=r},1433:function(e,n,a){"use strict";var t=a(576),i=a(1124);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=i(a(0)),r=(0,t(a(1125)).default)(o.createElement("path",{d:"M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"}),"Navigation");n.default=r},1935:function(e,n,a){"use strict";a.r(n),a.d(n,"default",(function(){return p}));var t=a(616),i=a(1100),o=a(1167),r=a.n(o),c=a(1432),s=a.n(c),l=a(1168),d=a.n(l),m=a(1433),b=a.n(m),u=a(1),j=Object(t.a)((function(e){return{root:{"& > *":{margin:e.spacing(1)}},extendedIcon:{marginRight:e.spacing(1)}}}));function p(){var e=j();return Object(u.jsxs)("div",{className:e.root,children:[Object(u.jsx)(i.a,{color:"primary","aria-label":"add",children:Object(u.jsx)(r.a,{})}),Object(u.jsx)(i.a,{color:"secondary","aria-label":"edit",children:Object(u.jsx)(s.a,{})}),Object(u.jsxs)(i.a,{variant:"extended",children:[Object(u.jsx)(b.a,{className:e.extendedIcon}),"Navigate"]}),Object(u.jsx)(i.a,{disabled:!0,"aria-label":"like",children:Object(u.jsx)(d.a,{})})]})}},1936:function(e,n,a){"use strict";a.r(n),n.default="import { makeStyles } from '@material-ui/core/styles';\nimport Fab from '@material-ui/core/Fab';\nimport AddIcon from '@material-ui/icons/Add';\nimport EditIcon from '@material-ui/icons/Edit';\nimport FavoriteIcon from '@material-ui/icons/Favorite';\nimport NavigationIcon from '@material-ui/icons/Navigation';\n\nconst useStyles = makeStyles((theme) => ({\n  root: {\n    '& > *': {\n      margin: theme.spacing(1),\n    },\n  },\n  extendedIcon: {\n    marginRight: theme.spacing(1),\n  },\n}));\n\nexport default function FloatingActionButtons() {\n  const classes = useStyles();\n\n  return (\n    <div className={classes.root}>\n      <Fab color=\"primary\" aria-label=\"add\">\n        <AddIcon />\n      </Fab>\n      <Fab color=\"secondary\" aria-label=\"edit\">\n        <EditIcon />\n      </Fab>\n      <Fab variant=\"extended\">\n        <NavigationIcon className={classes.extendedIcon} />\n        Navigate\n      </Fab>\n      <Fab disabled aria-label=\"like\">\n        <FavoriteIcon />\n      </Fab>\n    </div>\n  );\n}\n"},1937:function(e,n,a){"use strict";a.r(n),a.d(n,"default",(function(){return m}));var t=a(616),i=a(1100),o=a(1167),r=a.n(o),c=a(1433),s=a.n(c),l=a(1),d=Object(t.a)((function(e){return{margin:{margin:e.spacing(1)},extendedIcon:{marginRight:e.spacing(1)}}}));function m(){var e=d();return Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{children:[Object(l.jsx)(i.a,{size:"small",color:"secondary","aria-label":"add",className:e.margin,children:Object(l.jsx)(r.a,{})}),Object(l.jsx)(i.a,{size:"medium",color:"secondary","aria-label":"add",className:e.margin,children:Object(l.jsx)(r.a,{})}),Object(l.jsx)(i.a,{color:"secondary","aria-label":"add",className:e.margin,children:Object(l.jsx)(r.a,{})})]}),Object(l.jsxs)("div",{children:[Object(l.jsxs)(i.a,{variant:"extended",size:"small",color:"primary","aria-label":"add",className:e.margin,children:[Object(l.jsx)(s.a,{className:e.extendedIcon}),"Extended"]}),Object(l.jsxs)(i.a,{variant:"extended",size:"medium",color:"primary","aria-label":"add",className:e.margin,children:[Object(l.jsx)(s.a,{className:e.extendedIcon}),"Extended"]}),Object(l.jsxs)(i.a,{variant:"extended",color:"primary","aria-label":"add",className:e.margin,children:[Object(l.jsx)(s.a,{className:e.extendedIcon}),"Extended"]})]})]})}},1938:function(e,n,a){"use strict";a.r(n),n.default='import { makeStyles } from \'@material-ui/core/styles\';\nimport Fab from \'@material-ui/core/Fab\';\nimport AddIcon from \'@material-ui/icons/Add\';\nimport NavigationIcon from \'@material-ui/icons/Navigation\';\n\nconst useStyles = makeStyles((theme) => ({\n  margin: {\n    margin: theme.spacing(1),\n  },\n  extendedIcon: {\n    marginRight: theme.spacing(1),\n  },\n}));\n\nexport default function FloatingActionButtonSize() {\n  const classes = useStyles();\n\n  return (\n    <div>\n      <div>\n        <Fab size="small" color="secondary" aria-label="add" className={classes.margin}>\n          <AddIcon />\n        </Fab>\n        <Fab size="medium" color="secondary" aria-label="add" className={classes.margin}>\n          <AddIcon />\n        </Fab>\n        <Fab color="secondary" aria-label="add" className={classes.margin}>\n          <AddIcon />\n        </Fab>\n      </div>\n      <div>\n        <Fab\n          variant="extended"\n          size="small"\n          color="primary"\n          aria-label="add"\n          className={classes.margin}\n        >\n          <NavigationIcon className={classes.extendedIcon} />\n          Extended\n        </Fab>\n        <Fab\n          variant="extended"\n          size="medium"\n          color="primary"\n          aria-label="add"\n          className={classes.margin}\n        >\n          <NavigationIcon className={classes.extendedIcon} />\n          Extended\n        </Fab>\n        <Fab variant="extended" color="primary" aria-label="add" className={classes.margin}>\n          <NavigationIcon className={classes.extendedIcon} />\n          Extended\n        </Fab>\n      </div>\n    </div>\n  );\n}\n'},1939:function(e,n,a){"use strict";a.r(n),a.d(n,"default",(function(){return C}));var t=a(14),i=a(6),o=a(226),r=a(0),c=a(3),s=a(1265),l=a.n(s),d=a(616),m=a(43),b=a(1098),u=a(1116),j=a(1114),p=a(193),h=a(1334),x=a(1100),f=a(1167),v=a.n(f),O=a(1432),g=a.n(O),y=a(1335),N=a.n(y),I=a(179),w=a(1295),T=a(1);function E(e){var n=e.children,a=e.value,t=e.index,r=Object(o.a)(e,["children","value","index"]);return Object(T.jsx)(p.a,Object(i.a)(Object(i.a)({component:"div",role:"tabpanel",hidden:a!==t,id:"action-tabpanel-".concat(t),"aria-labelledby":"action-tab-".concat(t)},r),{},{children:a===t&&Object(T.jsx)(w.a,{p:3,children:n})}))}function F(e){return{id:"action-tab-".concat(e),"aria-controls":"action-tabpanel-".concat(e)}}var A=Object(d.a)((function(e){return{root:{backgroundColor:e.palette.background.paper,width:500,position:"relative",minHeight:200},fab:{position:"absolute",bottom:e.spacing(2),right:e.spacing(2)},fabGreen:{color:e.palette.common.white,backgroundColor:I.a[500],"&:hover":{backgroundColor:I.a[600]}}}}));function C(){var e=A(),n=Object(m.a)(),a=Object(r.useState)(0),o=Object(t.a)(a,2),s=o[0],d=o[1],p={enter:n.transitions.duration.enteringScreen,exit:n.transitions.duration.leavingScreen},f=[{color:"primary",className:e.fab,icon:Object(T.jsx)(v.a,{}),label:"Add"},{color:"secondary",className:e.fab,icon:Object(T.jsx)(g.a,{}),label:"Edit"},{color:"inherit",className:Object(c.a)(e.fab,e.fabGreen),icon:Object(T.jsx)(N.a,{}),label:"Expand"}];return Object(T.jsxs)("div",{className:e.root,children:[Object(T.jsx)(b.a,{position:"static",color:"default",children:Object(T.jsxs)(u.a,{value:s,onChange:function(e,n){d(n)},indicatorColor:"primary",textColor:"primary",variant:"fullWidth","aria-label":"action tabs example",children:[Object(T.jsx)(j.a,Object(i.a)({label:"Item One"},F(0))),Object(T.jsx)(j.a,Object(i.a)({label:"Item Two"},F(1))),Object(T.jsx)(j.a,Object(i.a)({label:"Item Three"},F(2)))]})}),Object(T.jsxs)(l.a,{axis:"rtl"===n.direction?"x-reverse":"x",index:s,onChangeIndex:function(e){d(e)},children:[Object(T.jsx)(E,{value:s,index:0,dir:n.direction,children:"Item One"}),Object(T.jsx)(E,{value:s,index:1,dir:n.direction,children:"Item Two"}),Object(T.jsx)(E,{value:s,index:2,dir:n.direction,children:"Item Three"})]}),f.map((function(e,n){return Object(T.jsx)(h.a,{in:s===n,timeout:p,style:{transitionDelay:"".concat(s===n?p.exit:0,"ms")},unmountOnExit:!0,children:Object(T.jsx)(x.a,{"aria-label":e.label,className:e.className,color:e.color,children:e.icon})},e.color)}))]})}},1940:function(e,n,a){"use strict";a.r(n),n.default="import { useState } from 'react';\nimport PropTypes from 'prop-types';\nimport clsx from 'clsx';\nimport SwipeableViews from 'react-swipeable-views';\nimport { makeStyles, useTheme } from '@material-ui/core/styles';\nimport AppBar from '@material-ui/core/AppBar';\nimport Tabs from '@material-ui/core/Tabs';\nimport Tab from '@material-ui/core/Tab';\nimport Typography from '@material-ui/core/Typography';\nimport Zoom from '@material-ui/core/Zoom';\nimport Fab from '@material-ui/core/Fab';\nimport AddIcon from '@material-ui/icons/Add';\nimport EditIcon from '@material-ui/icons/Edit';\nimport UpIcon from '@material-ui/icons/KeyboardArrowUp';\nimport { green } from '@material-ui/core/colors';\nimport Box from '@material-ui/core/Box';\n\nfunction TabPanel(props) {\n  const { children, value, index, ...other } = props;\n\n  return (\n    <Typography\n      component=\"div\"\n      role=\"tabpanel\"\n      hidden={value !== index}\n      id={`action-tabpanel-${index}`}\n      aria-labelledby={`action-tab-${index}`}\n      {...other}\n    >\n      {value === index && <Box p={3}>{children}</Box>}\n    </Typography>\n  );\n}\n\nTabPanel.propTypes = {\n  children: PropTypes.node,\n  index: PropTypes.any.isRequired,\n  value: PropTypes.any.isRequired,\n};\n\nfunction a11yProps(index) {\n  return {\n    id: `action-tab-${index}`,\n    'aria-controls': `action-tabpanel-${index}`,\n  };\n}\n\nconst useStyles = makeStyles((theme) => ({\n  root: {\n    backgroundColor: theme.palette.background.paper,\n    width: 500,\n    position: 'relative',\n    minHeight: 200,\n  },\n  fab: {\n    position: 'absolute',\n    bottom: theme.spacing(2),\n    right: theme.spacing(2),\n  },\n  fabGreen: {\n    color: theme.palette.common.white,\n    backgroundColor: green[500],\n    '&:hover': {\n      backgroundColor: green[600],\n    },\n  },\n}));\n\nexport default function FloatingActionButtonZoom() {\n  const classes = useStyles();\n  const theme = useTheme();\n  const [value, setValue] = useState(0);\n\n  const handleChange = (event, newValue) => {\n    setValue(newValue);\n  };\n\n  const handleChangeIndex = (index) => {\n    setValue(index);\n  };\n\n  const transitionDuration = {\n    enter: theme.transitions.duration.enteringScreen,\n    exit: theme.transitions.duration.leavingScreen,\n  };\n\n  const fabs = [\n    {\n      color: 'primary',\n      className: classes.fab,\n      icon: <AddIcon />,\n      label: 'Add',\n    },\n    {\n      color: 'secondary',\n      className: classes.fab,\n      icon: <EditIcon />,\n      label: 'Edit',\n    },\n    {\n      color: 'inherit',\n      className: clsx(classes.fab, classes.fabGreen),\n      icon: <UpIcon />,\n      label: 'Expand',\n    },\n  ];\n\n  return (\n    <div className={classes.root}>\n      <AppBar position=\"static\" color=\"default\">\n        <Tabs\n          value={value}\n          onChange={handleChange}\n          indicatorColor=\"primary\"\n          textColor=\"primary\"\n          variant=\"fullWidth\"\n          aria-label=\"action tabs example\"\n        >\n          <Tab label=\"Item One\" {...a11yProps(0)} />\n          <Tab label=\"Item Two\" {...a11yProps(1)} />\n          <Tab label=\"Item Three\" {...a11yProps(2)} />\n        </Tabs>\n      </AppBar>\n      <SwipeableViews\n        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}\n        index={value}\n        onChangeIndex={handleChangeIndex}\n      >\n        <TabPanel value={value} index={0} dir={theme.direction}>\n          Item One\n        </TabPanel>\n        <TabPanel value={value} index={1} dir={theme.direction}>\n          Item Two\n        </TabPanel>\n        <TabPanel value={value} index={2} dir={theme.direction}>\n          Item Three\n        </TabPanel>\n      </SwipeableViews>\n      {fabs.map((fab, index) => (\n        <Zoom\n          key={fab.color}\n          in={value === index}\n          timeout={transitionDuration}\n          style={{\n            transitionDelay: `${value === index ? transitionDuration.exit : 0}ms`,\n          }}\n          unmountOnExit\n        >\n          <Fab aria-label={fab.label} className={fab.className} color={fab.color}>\n            {fab.icon}\n          </Fab>\n        </Zoom>\n      ))}\n    </div>\n  );\n}\n"},2524:function(e,n,a){"use strict";a.r(n);var t=a(1127),i=(a(123),a(1095)),o=a(1088),r=a(193),c=a(616),s=a(1),l=Object(c.a)((function(e){return{layoutRoot:{"& .description":{marginBottom:16}}}}));n.default=function(e){return l(),Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("div",{className:"flex flex-1 flex-grow-0 items-center justify-end",children:Object(s.jsxs)(i.a,{className:"normal-case",variant:"outlined",component:"a",href:"https://material-ui.com/components/floating-action-button",target:"_blank",role:"button",children:[Object(s.jsx)(o.a,{children:"link"}),Object(s.jsx)("span",{className:"mx-4",children:"Reference"})]})}),Object(s.jsx)(r.a,{className:"text-44 mt-32 mb-8",component:"h1",children:"Floating action button"}),Object(s.jsx)(r.a,{className:"description",children:"A floating action button (FAB) performs the primary, or most common, action on a screen."}),Object(s.jsx)(r.a,{className:"text-32 mt-32 mb-8",component:"h2",children:"Floating Action Button"}),Object(s.jsxs)(r.a,{className:"mb-16",component:"div",children:["A ",Object(s.jsx)("a",{href:"https://material.io/design/components/buttons-floating-action-button.html",children:"floating action button"}),"appears in front of all screen content, typically as a circular shape with an icon in its center. FABs come in two types: regular, and extended."]}),Object(s.jsx)(r.a,{className:"mb-16",component:"div",children:"Only use a FAB if it is the most suitable way to present a screen\u2019s primary action."}),Object(s.jsx)(r.a,{className:"mb-16",component:"div",children:"Only one floating action button is recommended per screen to represent the most common action."}),Object(s.jsx)(r.a,{className:"mb-16",component:"div",children:Object(s.jsx)(t.a,{className:"my-24",iframe:!1,component:a(1935).default,raw:a(1936)})}),Object(s.jsx)(r.a,{className:"text-32 mt-32 mb-8",component:"h2",children:"Size"}),Object(s.jsxs)(r.a,{className:"mb-16",component:"div",children:["Use the ",Object(s.jsx)("code",{children:"size"})," prop for larger or smaller floating action buttons."]}),Object(s.jsx)(r.a,{className:"mb-16",component:"div",children:Object(s.jsx)(t.a,{className:"my-24",iframe:!1,component:a(1937).default,raw:a(1938)})}),Object(s.jsx)(r.a,{className:"text-32 mt-32 mb-8",component:"h2",children:"Animation"}),Object(s.jsx)(r.a,{className:"mb-16",component:"div",children:"The floating action button animates onto the screen as an expanding piece of material, by default."}),Object(s.jsx)(r.a,{className:"mb-16",component:"div",children:"A floating action button that spans multiple lateral screens (such as tabbed screens) should briefly disappear, then reappear if its action changes."}),Object(s.jsxs)(r.a,{className:"mb-16",component:"div",children:["The Zoom transition can be used to achieve this. Note that since both the exiting and entering animations are triggered at the same time, we use ",Object(s.jsx)("code",{children:"enterDelay"})," to allow the outgoing Floating Action Button's animation to finish before the new one enters."]}),Object(s.jsx)(r.a,{className:"mb-16",component:"div",children:Object(s.jsx)(t.a,{className:"my-24",iframe:!1,component:a(1939).default,raw:a(1940)})})]})}}}]);