"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[605],{2605:function(e,a,n){n.r(a),n.d(a,{default:function(){return S}});var t=n(2791),r=n(1413),i=n(5984),o=n(158),l=n(854),s={email:"",password:""},u={email:{label:"Email",name:"email",type:"email",placeholder:"Enter user email",required:!0},password:{label:"Password",name:"password",type:"password",placeholder:"Enter user password (min 6 symbols)",required:!0}},c="LoginForm_Form__WD3dS",d="LoginForm_Section__dxiQ4",m="LoginForm_Button__eFwye",h="LoginForm_SubTitle__fwhwk",f="LoginForm_TextField__DcZfc",p=n(184),_=function(e){var a=e.onSubmit,n=(0,o.Z)({initialState:s,onSubmit:a}),_=n.state,x=n.handleChange,v=n.handleSubmit,g=(0,t.useMemo)((function(){return(0,i.x0)()}),[]),b=(0,t.useMemo)((function(){return(0,i.x0)()}),[]),S=_.email,w=_.password;return(0,p.jsx)("div",{className:d,children:(0,p.jsxs)("form",{className:c,onSubmit:v,children:[(0,p.jsx)("h2",{className:h,children:"Please, Log In"}),(0,p.jsx)(l.Z,(0,r.Z)({id:g,value:S,className:f,handleChange:x},u.email)),(0,p.jsx)(l.Z,(0,r.Z)({id:b,value:w,className:f,handleChange:x},u.password)),(0,p.jsx)("button",{className:m,children:"Login"})]})})},x=_;_.defaultProps={onSubmit:function(){}};var v="LoginPage_Container__q8qjM",g=n(9434),b=n(8724);function S(){var e=(0,g.I0)();return(0,p.jsx)("div",{className:v,children:(0,p.jsx)(x,{onSubmit:function(a){e((0,b.x4)(a))}})})}},854:function(e,a,n){n.d(a,{Z:function(){return s}});var t="text-field_formGroup__5OJow",r="text-field_field__0xPaa",i="text-field_label__CMPtS",o=n(184),l=function(e){var a=e.id,n=e.label,l=e.value,s=e.name,u=e.handleChange,c=e.type,d=e.checked,m=e.className,h=e.placeholder,f=e.required,p=e.pattern,_=m?"".concat(r," ").concat(m):r;return(0,o.jsxs)("div",{className:t,children:[n&&(0,o.jsx)("label",{htmlFor:a,className:i,children:n}),(0,o.jsx)("input",{id:a,value:l,checked:d,name:s,onChange:u,type:c,className:_,placeholder:h,required:f,pattern:p})]})},s=l;l.defaultProps={type:"text",required:!1}},158:function(e,a,n){var t=n(4942),r=n(1413),i=n(885),o=n(2791);a.Z=function(e){var a=e.initialState,n=e.onSubmit,l=(0,o.useState)((0,r.Z)({},a)),s=(0,i.Z)(l,2),u=s[0],c=s[1];return{state:u,setState:c,handleChange:function(e){var a=e.target,n=a.value,i=a.name,o=a.type,l=a.checked,s="checkbox"===o?l:n;c((function(e){return(0,r.Z)((0,r.Z)({},e),{},(0,t.Z)({},i,s))}))},handleSubmit:function(e){e.preventDefault(),n((0,r.Z)({},u)),c((0,r.Z)({},a))}}}},5984:function(e,a,n){n.d(a,{x0:function(){return t}});var t=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,a="",n=crypto.getRandomValues(new Uint8Array(e));e--;){var t=63&n[e];a+=t<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t<63?"_":"-"}return a}}}]);
//# sourceMappingURL=605.7acffc5c.chunk.js.map