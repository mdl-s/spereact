(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[87],{1132:function(t,e,n){"use strict";var a=n(0),o=a.createContext();e.a=o},1141:function(t,e,n){"use strict";var a=n(0),o=a.createContext();e.a=o},1192:function(t,e,n){"use strict";var a=n(9),o=n(2),i=n(0),r=(n(8),n(3)),s=n(10),c=n(13),l=n(34),d=n(1141),m=n(1132),p=i.forwardRef((function(t,e){var n,s,l=t.align,p=void 0===l?"inherit":l,u=t.classes,h=t.className,g=t.component,j=t.padding,f=t.scope,b=t.size,x=t.sortDirection,O=t.variant,v=Object(a.a)(t,["align","classes","className","component","padding","scope","size","sortDirection","variant"]),C=i.useContext(d.a),y=i.useContext(m.a),N=y&&"head"===y.variant;g?(s=g,n=N?"columnheader":"cell"):s=N?"th":"td";var R=f;!R&&N&&(R="col");var k=j||(C&&C.padding?C.padding:"default"),A=b||(C&&C.size?C.size:"medium"),w=O||y&&y.variant,U=null;return x&&(U="asc"===x?"ascending":"descending"),i.createElement(s,Object(o.a)({ref:e,className:Object(r.a)(u.root,u[w],h,"inherit"!==p&&u["align".concat(Object(c.a)(p))],"default"!==k&&u["padding".concat(Object(c.a)(k))],"medium"!==A&&u["size".concat(Object(c.a)(A))],"head"===w&&C&&C.stickyHeader&&u.stickyHeader),"aria-sort":U,role:n,scope:R},v))}));e.a=Object(s.a)((function(t){return{root:Object(o.a)({},t.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:"1px solid\n    ".concat("light"===t.palette.type?Object(l.i)(Object(l.d)(t.palette.divider,1),.88):Object(l.a)(Object(l.d)(t.palette.divider,1),.68)),textAlign:"left",padding:16}),head:{color:t.palette.text.primary,lineHeight:t.typography.pxToRem(24),fontWeight:t.typography.fontWeightMedium},body:{color:t.palette.text.primary},footer:{color:t.palette.text.secondary,lineHeight:t.typography.pxToRem(21),fontSize:t.typography.pxToRem(12)},sizeSmall:{padding:"6px 24px 6px 16px","&:last-child":{paddingRight:16},"&$paddingCheckbox":{width:24,padding:"0 12px 0 16px","&:last-child":{paddingLeft:12,paddingRight:16},"& > *":{padding:0}}},paddingCheckbox:{width:48,padding:"0 0 0 4px","&:last-child":{paddingLeft:0,paddingRight:4}},paddingNone:{padding:0,"&:last-child":{padding:0}},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right",flexDirection:"row-reverse"},alignJustify:{textAlign:"justify"},stickyHeader:{position:"sticky",top:0,left:0,zIndex:2,backgroundColor:t.palette.background.default}}}),{name:"MuiTableCell"})(p)},1213:function(t,e,n){"use strict";var a=n(9),o=n(2),i=n(0),r=(n(8),n(3)),s=n(10),c=n(1141),l="table",d=i.forwardRef((function(t,e){var n=t.classes,s=t.className,d=t.component,m=void 0===d?l:d,p=t.padding,u=void 0===p?"default":p,h=t.size,g=void 0===h?"medium":h,j=t.stickyHeader,f=void 0!==j&&j,b=Object(a.a)(t,["classes","className","component","padding","size","stickyHeader"]),x=i.useMemo((function(){return{padding:u,size:g,stickyHeader:f}}),[u,g,f]);return i.createElement(c.a.Provider,{value:x},i.createElement(m,Object(o.a)({role:m===l?null:"table",ref:e,className:Object(r.a)(n.root,s,f&&n.stickyHeader)},b)))}));e.a=Object(s.a)((function(t){return{root:{display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":Object(o.a)({},t.typography.body2,{padding:t.spacing(2),color:t.palette.text.secondary,textAlign:"left",captionSide:"bottom"})},stickyHeader:{borderCollapse:"separate"}}}),{name:"MuiTable"})(d)},1214:function(t,e,n){"use strict";var a=n(2),o=n(9),i=n(0),r=(n(8),n(3)),s=n(10),c=n(1132),l={variant:"head"},d="thead",m=i.forwardRef((function(t,e){var n=t.classes,s=t.className,m=t.component,p=void 0===m?d:m,u=Object(o.a)(t,["classes","className","component"]);return i.createElement(c.a.Provider,{value:l},i.createElement(p,Object(a.a)({className:Object(r.a)(n.root,s),ref:e,role:p===d?null:"rowgroup"},u)))}));e.a=Object(s.a)({root:{display:"table-header-group"}},{name:"MuiTableHead"})(m)},1215:function(t,e,n){"use strict";var a=n(2),o=n(9),i=n(0),r=(n(8),n(3)),s=n(10),c=n(1132),l=n(34),d=i.forwardRef((function(t,e){var n=t.classes,s=t.className,l=t.component,d=void 0===l?"tr":l,m=t.hover,p=void 0!==m&&m,u=t.selected,h=void 0!==u&&u,g=Object(o.a)(t,["classes","className","component","hover","selected"]),j=i.useContext(c.a);return i.createElement(d,Object(a.a)({ref:e,className:Object(r.a)(n.root,s,j&&{head:n.head,footer:n.footer}[j.variant],p&&n.hover,h&&n.selected),role:"tr"===d?null:"row"},g))}));e.a=Object(s.a)((function(t){return{root:{color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,"&$hover:hover":{backgroundColor:t.palette.action.hover},"&$selected, &$selected:hover":{backgroundColor:Object(l.d)(t.palette.secondary.main,t.palette.action.selectedOpacity)}},selected:{},hover:{},head:{},footer:{}}}),{name:"MuiTableRow"})(d)},1216:function(t,e,n){"use strict";var a=n(2),o=n(9),i=n(0),r=(n(8),n(3)),s=n(10),c=n(1132),l={variant:"body"},d="tbody",m=i.forwardRef((function(t,e){var n=t.classes,s=t.className,m=t.component,p=void 0===m?d:m,u=Object(o.a)(t,["classes","className","component"]);return i.createElement(c.a.Provider,{value:l},i.createElement(p,Object(a.a)({className:Object(r.a)(n.root,s),ref:e,role:p===d?null:"rowgroup"},u)))}));e.a=Object(s.a)({root:{display:"table-row-group"}},{name:"MuiTableBody"})(m)},1317:function(t,e,n){"use strict";n.r(e),e.default="import '@fake-db';\nimport FuseAuthorization from '@fuse/core/FuseAuthorization';\nimport FuseLayout from '@fuse/core/FuseLayout';\nimport FuseTheme from '@fuse/core/FuseTheme';\nimport history from '@history';\nimport { createGenerateClassName, jssPreset, StylesProvider } from '@material-ui/core/styles';\nimport { MuiPickersUtilsProvider } from '@material-ui/pickers';\nimport { create } from 'jss';\nimport jssExtend from 'jss-plugin-extend';\nimport rtl from 'jss-rtl';\nimport Provider from 'react-redux/es/components/Provider';\nimport { Router } from 'react-router-dom';\nimport { SnackbarProvider } from 'notistack';\nimport DateFnsUtils from '@date-io/date-fns';\nimport AppContext from './AppContext';\nimport { Auth } from './auth';\nimport routes from './fuse-configs/routesConfig';\nimport store from './store';\n\nconst jss = create({\n\t...jssPreset(),\n\tplugins: [...jssPreset().plugins, jssExtend(), rtl()],\n\tinsertionPoint: document.getElementById('jss-insertion-point')\n});\n\nconst generateClassName = createGenerateClassName({ disableGlobal: true });\n\nconst App = () => {\n\treturn (\n\t\t<AppContext.Provider\n\t\t\tvalue={{\n\t\t\t\troutes\n\t\t\t}}\n\t\t>\n\t\t\t<StylesProvider jss={jss} generateClassName={generateClassName}>\n\t\t\t\t<Provider store={store}>\n\t\t\t\t\t<MuiPickersUtilsProvider utils={DateFnsUtils}>\n\t\t\t\t\t\t<Auth>\n\t\t\t\t\t\t\t<Router history={history}>\n\t\t\t\t\t\t\t\t<FuseAuthorization>\n\t\t\t\t\t\t\t\t\t<FuseTheme>\n\t\t\t\t\t\t\t\t\t\t<SnackbarProvider\n\t\t\t\t\t\t\t\t\t\t\tmaxSnack={5}\n\t\t\t\t\t\t\t\t\t\t\tanchorOrigin={{\n\t\t\t\t\t\t\t\t\t\t\t\tvertical: 'bottom',\n\t\t\t\t\t\t\t\t\t\t\t\thorizontal: 'right'\n\t\t\t\t\t\t\t\t\t\t\t}}\n\t\t\t\t\t\t\t\t\t\t\tclasses={{\n\t\t\t\t\t\t\t\t\t\t\t\tcontainerRoot: 'bottom-0 right-0 mb-52 md:mb-68 mr-8 lg:mr-80 z-99'\n\t\t\t\t\t\t\t\t\t\t\t}}\n\t\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t\t\t<FuseLayout />\n\t\t\t\t\t\t\t\t\t\t</SnackbarProvider>\n\t\t\t\t\t\t\t\t\t</FuseTheme>\n\t\t\t\t\t\t\t\t</FuseAuthorization>\n\t\t\t\t\t\t\t</Router>\n\t\t\t\t\t\t</Auth>\n\t\t\t\t\t</MuiPickersUtilsProvider>\n\t\t\t\t</Provider>\n\t\t\t</StylesProvider>\n\t\t</AppContext.Provider>\n\t);\n};\n\nexport default App;\n"},1578:function(t,e,n){"use strict";n.r(e),e.default="import { authRoles } from 'app/auth';\nimport AdminRoleExample from './AdminRoleExample';\n\nconst AdminRoleExampleConfig = {\n\tsettings: {\n\t\tlayout: {\n\t\t\tconfig: {}\n\t\t}\n\t},\n\tauth: authRoles.admin, // ['admin']\n\troutes: [\n\t\t{\n\t\t\tpath: '/auth/admin-role-example',\n\t\t\tcomponent: AdminRoleExample\n\t\t}\n\t]\n};\n\nexport default AdminRoleExampleConfig;\n"},2482:function(t,e,n){"use strict";n.r(e);var a=n(123),o=n(192),i=n(1213),r=n(1216),s=n(1192),c=n(1214),l=n(1215),d=n(193),m=n(1);e.default=function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(d.a,{variant:"h4",className:"mb-24",children:"FuseAuthorization"}),Object(m.jsxs)(d.a,{className:"mb-16",component:"p",children:[Object(m.jsx)("code",{children:"FuseAuthorization"})," is the authorization component of the Fuse React. It restricts unauthorized user access by looking at ",Object(m.jsx)("b",{children:"route configs"})," and ",Object(m.jsx)("b",{children:"user.role"}),"."]}),Object(m.jsx)(d.a,{className:"mt-32 mb-8",variant:"h5",children:"Setup"}),Object(m.jsx)(d.a,{className:"mb-16",component:"p",children:"The component should wraps the FuseTheme component."}),Object(m.jsx)(d.a,{className:"inline-block mb-8 italic",component:"code",children:"src/app/App.js"}),Object(m.jsx)(a.a,{component:"pre",className:"language-jsx",children:n(1317)}),Object(m.jsx)(d.a,{className:"mt-32 mb-8",variant:"h5",children:"Configuration"}),Object(m.jsx)(d.a,{className:"mt-32 mb-8",variant:"h6",children:"Route Configuration:"}),Object(m.jsxs)(d.a,{className:"mb-16",component:"p",children:["You need to define authorization (auth) in the ",Object(m.jsx)("b",{children:"route config files"})," to control the access via permission roles."]}),Object(m.jsx)(d.a,{className:"mt-32 mb-8",variant:"subtitle2",children:"Example Usage:"}),Object(m.jsx)(d.a,{className:"inline-block mb-8 italic",component:"code",children:"src/app/main/auth/admin-role-example/AdminRoleExampleConfig.js"}),Object(m.jsx)(a.a,{component:"pre",className:"language-jsx",children:n(1578)}),Object(m.jsx)(d.a,{className:"my-16",component:"p",children:"You can also give different auth values for individual routes with writing auth value inside the route object."}),Object(m.jsx)(o.a,{className:"max-w-md my-16",children:Object(m.jsxs)(i.a,{children:[Object(m.jsx)(c.a,{children:Object(m.jsxs)(l.a,{children:[Object(m.jsx)(s.a,{className:"font-semibold text-14",children:"Authorization Role (auth) options"}),Object(m.jsx)(s.a,{})]})}),Object(m.jsxs)(r.a,{children:[Object(m.jsxs)(l.a,{children:[Object(m.jsx)(s.a,{children:Object(m.jsx)("code",{children:"null"})}),Object(m.jsx)(s.a,{children:"Do not check, allow everyone"})]}),Object(m.jsxs)(l.a,{children:[Object(m.jsx)(s.a,{children:Object(m.jsx)("code",{children:"[]"})}),Object(m.jsx)(s.a,{children:"Only guest allowed"})]}),Object(m.jsxs)(l.a,{children:[Object(m.jsx)(s.a,{children:Object(m.jsx)("code",{children:"[admin,user]"})}),Object(m.jsx)(s.a,{children:"Only 'admin' and 'user' roles are allowed"})]})]})]})}),Object(m.jsx)(d.a,{className:"mt-48 mb-8",variant:"h6",children:"User.role Configuration:"}),Object(m.jsxs)(d.a,{className:"mb-16",component:"p",children:["User ",Object(m.jsx)("b",{children:"role"})," and ",Object(m.jsx)("b",{children:"data"})," are stored at ",Object(m.jsx)("b",{children:"auth.user"})," in the redux store."]}),Object(m.jsx)(d.a,{className:"mb-16",component:"p",children:"After successful login user.role will be updated and the FuseAuthorization automatically redirects the authorized user."}),Object(m.jsx)(d.a,{className:"inline-block mb-8 italic",component:"code",children:"src/app/auth/store/reducers/user.reducer.js (initial user state)"}),Object(m.jsx)(a.a,{component:"pre",className:"language-js",children:"  \n\t\t\t\t  \tconst initialState = {\n\t\t\t\t\t\trole: [],//guest\n\t\t\t\t\t\tdata: {\n\t\t\t\t\t\t\t'displayName': 'John Doe',\n\t\t\t\t\t\t\t'photoURL'   : 'assets/images/avatars/Velazquez.jpg',\n\t\t\t\t\t\t\t'email'      : 'johndoe@withinpixels.com',\n\t\t\t\t\t\t\tshortcuts    : [\n\t\t\t\t\t\t\t\t'calendar',\n\t\t\t\t\t\t\t\t'mail',\n\t\t\t\t\t\t\t\t'contacts',\n\t\t\t\t\t\t\t\t'todo'\n\t\t\t\t\t\t\t]\n\t\t\t\t\t\t}\n\t\t\t\t\t};\n\t\t\t\t "}),Object(m.jsx)(o.a,{className:"max-w-md my-16",children:Object(m.jsxs)(i.a,{children:[Object(m.jsx)(c.a,{children:Object(m.jsxs)(l.a,{children:[Object(m.jsx)(s.a,{className:"font-semibold text-14",children:"User Role options"}),Object(m.jsx)(s.a,{})]})}),Object(m.jsxs)(r.a,{children:[Object(m.jsxs)(l.a,{children:[Object(m.jsxs)(s.a,{children:[Object(m.jsx)("code",{children:"null"})," or ",Object(m.jsx)("code",{children:"undefined"})," or ",Object(m.jsx)("code",{children:"[]"})]}),Object(m.jsx)(s.a,{children:"Guest"})]}),Object(m.jsxs)(l.a,{children:[Object(m.jsxs)(s.a,{children:[Object(m.jsx)("code",{children:"['admin','user']"})," (array)"]}),Object(m.jsx)(s.a,{children:"User has roles 'admin' and 'user'"})]}),Object(m.jsxs)(l.a,{children:[Object(m.jsxs)(s.a,{children:[Object(m.jsx)("code",{children:'"admin"'})," (string)"]}),Object(m.jsx)(s.a,{children:"User has 'admin' role"})]})]})]})}),Object(m.jsx)(d.a,{className:"mt-48 mb-8",variant:"h6",children:"Navigation Item Configuration:"}),Object(m.jsxs)(d.a,{className:"mb-16",component:"p",children:["You can control the navigation ",Object(m.jsx)("b",{children:"item/group/collapse"})," visibility by adding ",Object(m.jsx)("b",{children:"auth"}),"property in ",Object(m.jsx)("code",{children:"src/app/fuse-configs/NavigationConfig.js"}),"."]}),Object(m.jsx)(d.a,{className:"mt-32 mb-8",variant:"subtitle2",children:"Example Usage:"}),Object(m.jsx)(a.a,{component:"pre",className:"language-js",children:"\n\t\t\t\t\t {\n\t\t\t\t\t\t'id'   : 'only-admin-navigation-item',\n\t\t\t\t\t\t'title': 'Nav item only for Admin',\n\t\t\t\t\t\t'type' : 'item',\n\t\t\t\t\t\t'auth' : authRoles.admin,//['admin']\n\t\t\t\t\t\t'url'  : '/auth/admin-role-example',\n\t\t\t\t\t\t'icon' : 'verified_user'\n\t\t\t\t\t  },\n\t\t\t\t"}),Object(m.jsx)(d.a,{className:"mt-48 mb-4",variant:"h5",children:"Making the the whole app auth protected:"}),Object(m.jsx)(d.a,{className:"mb-12",variant:"subtitle2",children:"On routesConfig.js file"}),Object(m.jsxs)(d.a,{className:"mb-16",component:"p",children:["If you don't want to set auth on every page config;",Object(m.jsx)("br",{}),"You can give default auth role value in the ",Object(m.jsx)("code",{children:"src/app/fuse-configs/routesConfig.js"}),"file,",Object(m.jsx)("br",{}),"Set defaultAuth paramater",Object(m.jsx)("code",{children:"FuseUtils.generateRoutesFromConfigs(routeConfigs, ['admin','staff','user'])"}),",",Object(m.jsx)("br",{}),"The individual route configs which has auth option won't be overridden,",Object(m.jsx)("br",{}),"With this configuration below, makes ",Object(m.jsx)("b",{children:"whole app"})," auth protected by default:"]}),Object(m.jsx)(a.a,{component:"pre",className:"language-js",children:"\n\t\t\t\t\timport {Redirect} from 'react-router-dom';\n\t\t\t\t\timport FuseUtils from '@fuse/utils';\n\t\t\t\t\timport {appsConfigs} from 'app/main/apps/appsConfigs';\n\t\t\t\t\timport {pagesConfigs} from 'app/main/pages/pagesConfigs';\n\t\t\t\t\timport {authRoleExamplesConfigs} from 'app/main/auth/authRoleExamplesConfigs';\n\t\t\t\t\timport {UserInterfaceConfig} from 'app/main/user-interface/UserInterfaceConfig';\n\t\t\t\t\timport {DocumentationConfig} from 'app/main/documentation/DocumentationConfig';\n\t\t\t\t\timport {LoginConfig} from 'app/main/login/LoginConfig';\n\t\t\t\t\timport {RegisterConfig} from 'app/main/register/RegisterConfig';\n\t\t\t\t\timport {LogoutConfig} from 'app/main/logout/LogoutConfig';\n\t\t\t\t\timport {CallbackConfig} from 'app/main/callback/CallbackConfig';\n\t\t\t\t\t\n\t\t\t\t\tconst routeConfigs = [\n\t\t\t\t\t\t...appsConfigs,\n\t\t\t\t\t\t...pagesConfigs,\n\t\t\t\t\t\t...authRoleExamplesConfigs,\n\t\t\t\t\t\tUserInterfaceConfig,\n\t\t\t\t\t\tDocumentationConfig,\n\t\t\t\t\t\tLogoutConfig,\n\t\t\t\t\t\tLoginConfig,\n\t\t\t\t\t\tRegisterConfig,\n\t\t\t\t\t\tLogoutConfig,\n\t\t\t\t\t\tCallbackConfig,\n\t\t\t\t\t];\n\t\t\t\t\t\n\t\t\t\t\tconst routes = [\n\t\t\t\t\t\t...FuseUtils.generateRoutesFromConfigs(routeConfigs, ['admin','staff','user']),\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\tpath     : '/',\n\t\t\t\t\t\t\texact    : true,\n\t\t\t\t\t\t\tcomponent: () => <Redirect to=\"/apps/dashboards/analytics\"/>\n\t\t\t\t\t\t},\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\tcomponent: () => <Redirect to=\"/pages/errors/error-404\"/>\n\t\t\t\t\t\t}\n\t\t\t\t\t];\n\t\t\t\t\t\n\t\t\t\t\texport default routes;\n\t\t\t\t"}),Object(m.jsx)(d.a,{className:"mt-48 mb-4",variant:"h5",children:"Allow everyone(guest,user) for accessing root (/) page as a landing page"}),Object(m.jsxs)(d.a,{className:"mb-16",component:"p",children:["After configuring to make whole app protected as above, we need to set ",Object(m.jsx)("code",{children:"auth:null"})," at the route: ",Object(m.jsx)("code",{children:"/"})," to make it accessible for everyone.",Object(m.jsx)("br",{}),"If you redirect the main route (/), also make sure to set the redirected route config",Object(m.jsx)("code",{children:"auth:null"}),"."]}),Object(m.jsx)(a.a,{component:"pre",className:"language-js",children:"\n\t\t\t\t\timport {Redirect} from 'react-router-dom';\n\t\t\t\t\timport FuseUtils from '@fuse/utils';\n\t\t\t\t\timport {appsConfigs} from 'app/main/apps/appsConfigs';\n\t\t\t\t\timport {pagesConfigs} from 'app/main/pages/pagesConfigs';\n\t\t\t\t\timport {authRoleExamplesConfigs} from 'app/main/auth/authRoleExamplesConfigs';\n\t\t\t\t\timport {UserInterfaceConfig} from 'app/main/user-interface/UserInterfaceConfig';\n\t\t\t\t\timport {DocumentationConfig} from 'app/main/documentation/DocumentationConfig';\n\t\t\t\t\timport {LoginConfig} from 'app/main/login/LoginConfig';\n\t\t\t\t\timport {RegisterConfig} from 'app/main/register/RegisterConfig';\n\t\t\t\t\timport {LogoutConfig} from 'app/main/logout/LogoutConfig';\n\t\t\t\t\timport {CallbackConfig} from 'app/main/callback/CallbackConfig';\n\t\t\t\t\t\n\t\t\t\t\tconst routeConfigs = [\n\t\t\t\t\t\t...appsConfigs,\n\t\t\t\t\t\t...pagesConfigs,\n\t\t\t\t\t\t...authRoleExamplesConfigs,\n\t\t\t\t\t\tUserInterfaceConfig,\n\t\t\t\t\t\tDocumentationConfig,\n\t\t\t\t\t\tLogoutConfig,\n\t\t\t\t\t\tLoginConfig,\n\t\t\t\t\t\tRegisterConfig,\n\t\t\t\t\t\tLogoutConfig,\n\t\t\t\t\t\tCallbackConfig\n\t\t\t\t\t];\n\t\t\t\t\t\n\t\t\t\t\tconst routes = [\n\t\t\t\t\t\t//if you want to make whole app auth protected by default change defaultAuth for example:\n\t\t\t\t\t\t// ...FuseUtils.generateRoutesFromConfigs(routeConfigs, ['admin','staff','user']),\n\t\t\t\t\t\t// The individual route configs which has auth option won't be overridden.\n\t\t\t\t\t\t...FuseUtils.generateRoutesFromConfigs(routeConfigs, ['admin', 'staff', 'user']),\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\tpath     : '/',\n\t\t\t\t\t\t\texact    : true,\n\t\t\t\t\t\t\tauth     : null,\n\t\t\t\t\t\t\tcomponent: LandingPage\n\t\t\t\t\t\t},\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\tcomponent: () => <Redirect to=\"/pages/errors/error-404\"/>\n\t\t\t\t\t\t}\n\t\t\t\t\t];\n\t\t\t\t\t\n\t\t\t\t\texport default routes;\n\t\t\t\t"}),Object(m.jsx)(d.a,{className:"mt-48 mb-4",variant:"h5",children:"Redirect the logged-in user to a specific route depending on his role"}),Object(m.jsxs)(d.a,{className:"mb-16",component:"p",children:["Before dispatching ",Object(m.jsx)("b",{children:"SET_USER_DATA"})," action you can set redirectUrl on"]}),Object(m.jsx)(d.a,{className:"inline-block mb-8 italic",component:"code",children:"src/app/auth/store/userSlice.js"}),Object(m.jsx)(a.a,{component:"pre",className:"language-js",children:"\n\t\t\t\t\texport const setUserData = user => async (dispatch, getState) => {\n\t\t\t\t\t\t/*\n\t\t\t\t\t\t\tYou can redirect the logged-in user to a specific route depending on his role\n\t\t\t\t\t\t */\n\t\t\t\t\t\t\n\t\t\t\t\t\thistory.location.state = {\n\t\t\t\t\t\t\tredirectUrl: user.redirectUrl // for example 'apps/academy'\n\t\t\t\t\t\t};\n\t\t\t\t\t\t\n\t\t\t\t\t\t/*\n\t\t\t\t\t\t\tSet User Settings\n\t\t\t\t\t\t*/\n\t\t\t\t\t\tdispatch(setDefaultSettings(user.data.settings));\n\t\t\t\t\t\t\n\t\t\t\t\t\tdispatch(setUser(user));\n\t\t\t\t\t};\n\t\t\t\t"}),Object(m.jsx)(d.a,{className:"mt-48 mb-4",variant:"h5",children:"Uncaught Error: Maximum update depth exceeded: Infinite loops"}),Object(m.jsxs)(d.a,{className:"mb-16",component:"p",children:["If you are getting this error, make sure authenticated user has rights to access main route ",Object(m.jsx)("b",{children:'"/"'}),"or it's redirected route path."]}),Object(m.jsxs)(d.a,{className:"mb-16",component:"p",children:["After successful login, every authenticated user should be able to access to main route path ",Object(m.jsx)("b",{children:'"/"'})," ","or redirected route path."]})]})}}}]);