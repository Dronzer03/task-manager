(this["webpackJsonptask-manager"]=this["webpackJsonptask-manager"]||[]).push([[0],{20:function(e,t,c){},32:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},54:function(e,t,c){"use strict";c.r(t);var a=c(0),s=c.n(a),r=c(11),n=c.n(r),l=(c(32),c(10)),o=c.n(l),i=c(12),j=c(6),d=(c(34),c(35),c(2));c(20),c(37);var b=c(14),u=function(e){return Object(d.jsx)("td",{children:Object(d.jsx)("button",{className:"btn btn-primary",children:"Edit"})})};var m=function(e){var t=Object(a.useState)([]),c=Object(j.a)(t,2),s=c[0],r=c[1],n=e.authToken;Object(a.useEffect)((function(){l()}),[]);var l=function(){var e=Object(i.a)(o.a.mark((function e(){var t,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/tasks",{method:"GET",headers:{"Content-Type":"application/json",Authorization:n}});case 2:return t=e.sent,e.next=5,t.json();case 5:(c=e.sent).error?alert(c.error):r(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=Object(d.jsxs)(b.a,{data:s,children:[Object(d.jsx)(b.b,{field:"taskName",title:"Name"}),Object(d.jsx)(b.b,{field:"taskCategory",title:"Category"}),Object(d.jsx)(b.b,{field:"taskDescription",title:"Description"}),Object(d.jsx)(b.b,{field:"taskValues",title:"Actions",cell:u})]});return Object(d.jsxs)("div",{className:"tasks-page",children:[Object(d.jsxs)("div",{className:"row records",children:[Object(d.jsx)("div",{className:"col-md-3 col-sm-3 col-lg-3",children:Object(d.jsx)("label",{className:"records-label",children:"Records"})}),Object(d.jsx)("div",{className:"col-md-6 col-sm-6 col-lg-6"}),Object(d.jsx)("div",{className:"col-md-2 col-sm-2 col-lg-2",children:Object(d.jsx)("button",{className:"btn btn-primary record-button",onClick:function(){e.history.push("/create-task")},children:"Create a Record"})}),Object(d.jsx)("div",{className:"col-md-1 col-sm-1 col-lg-1",children:Object(d.jsx)("button",{className:"btn btn-primary",onClick:function(){e.handleLogout()},children:"Logout"})})]}),m]})},h=c(25),p=c(4);var x=function(e){var t=Object(a.useState)([]),c=Object(j.a)(t,2),s=c[0],r=c[1],n=Object(a.useState)(""),l=Object(j.a)(n,2),b=l[0],u=l[1],m=Object(a.useState)(""),h=Object(j.a)(m,2),p=h[0],x=h[1],O=Object(a.useState)(""),v=Object(j.a)(O,2),g=v[0],N=v[1],f=Object(a.useState)([]),k=Object(j.a)(f,2),y=k[0],w=k[1],C=Object(a.useState)(0),S=Object(j.a)(C,2),T=S[0],V=S[1],R=function(){var t=Object(i.a)(o.a.mark((function t(){var c,a,s,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""!=b&&""!=p&&""!=g){t.next=4;break}alert("Record Name, Category and Description are mandatory"),t.next=18;break;case 4:return(c={}).taskName=b,c.taskCategory=p,c.taskDesc=g,a=(a=JSON.parse(JSON.stringify(y))).filter((function(e){return""!==e.propName||""!==e.propValue})),c.taskValues=a,t.next=13,fetch("/tasks",{method:"POST",headers:{"Content-Type":"application/json",authToken:e.authToken},body:JSON.stringify(c)});case 13:return s=t.sent,t.next=16,s.json();case 16:(r=t.sent).error?alert(r.error):e.history.push("/tasks");case 18:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),A=function(e){e.target.value;var t=parseInt(e.target.id),c=y;"propName"==e.target.name?c[t].propName=e.target.value:(e.target.name="propValue")&&(c[t].propValue=e.target.value),w(c)};return Object(d.jsxs)("div",{className:"create-tasks-page",children:[Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-md-3 col-lg-3 col-sm-3",children:Object(d.jsx)("label",{className:"create-task-label",children:"Create Record"})}),Object(d.jsx)("div",{className:"col-md-7 col-lg-7 col-sm-7"}),Object(d.jsx)("div",{className:"col-md-2 col-sm-2 col-lg-2",children:Object(d.jsx)("button",{className:"btn btn-primary save-button",onClick:R,children:"Save"})})]}),Object(d.jsxs)("div",{className:"row create-task-input",children:[Object(d.jsx)("div",{className:"col-md-1 col-lg-1 col-sm-1"}),Object(d.jsxs)("div",{className:"col-md-10 col-lg-10 col-sm-10",children:[Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-md-2 col-sm-2 col-lg-2",children:Object(d.jsx)("label",{children:"Record Name"})}),Object(d.jsx)("div",{className:"col-md-3 col-sm-3 col-lg-3",children:Object(d.jsx)("input",{type:"text",onChange:function(e){return u(e.target.value)}})}),Object(d.jsx)("div",{className:"col-md-7 col-sm-7 col-lg-7"})]}),Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-md-2 col-sm-2 col-lg-2",children:Object(d.jsx)("label",{children:"Record Category"})}),Object(d.jsx)("div",{className:"col-md-3 col-sm-3 col-lg-3",children:Object(d.jsx)("input",{onChange:function(e){return x(e.target.value)},type:"text"})}),Object(d.jsx)("div",{className:"col-md-7 col-sm-7 col-lg-7"})]}),Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-md-2 col-sm-2 col-lg-2",children:Object(d.jsx)("label",{children:"Record Description"})}),Object(d.jsx)("div",{className:"col-md-3 col-sm-3 col-lg-3",children:Object(d.jsx)("input",{onChange:function(e){return N(e.target.value)},type:"text"})}),Object(d.jsx)("div",{className:"col-md-7 col-sm-7 col-lg-7"})]}),Object(d.jsx)("div",{children:Object(d.jsx)("label",{children:"Record Values:"})}),Object(d.jsxs)("div",{className:"values-table",children:[Object(d.jsxs)("table",{children:[Object(d.jsxs)("thead",{children:[Object(d.jsx)("th",{style:{width:"300px"},children:"Property Name"}),Object(d.jsx)("th",{style:{width:"600px"},children:"Property Value"})]}),Object(d.jsx)("tbody",{children:s})]}),Object(d.jsx)("button",{className:"btn btn-primary add-button",onClick:function(e){var t=T,c=s.concat(Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:Object(d.jsx)("input",{name:"propName",id:t,onChange:A,type:"text"})}),Object(d.jsx)("td",{children:Object(d.jsx)("input",{name:"propValue",id:t,onChange:A,type:"text",style:{width:"450px"}})})]}));r(c);var a=y;a.push({id:t,propName:"",propValue:""}),w(a),V(t+1)},children:"Add Row with TextBox"}),Object(d.jsx)("button",{className:"btn btn-primary add-area",onClick:function(e){var t=T,c=s.concat(Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:Object(d.jsx)("input",{name:"propName",id:t,onChange:A,type:"text"})}),Object(d.jsx)("td",{children:Object(d.jsx)("textarea",{name:"propValue",id:t,onChange:A,type:"text",style:{width:"450px"}})})]}));r(c);var a=y;a.push({id:t,propName:"",propValue:""}),w(a),V(t+1)},children:"Add Row with TextArea"})]})]}),Object(d.jsx)("div",{className:"col-md-1 col-sm-1 col-lg-1"})]})]})};var O=function(){return Object(d.jsx)("div",{children:Object(d.jsx)(h.a,{children:Object(d.jsxs)(p.c,{children:[Object(d.jsx)(p.a,{path:"/",exact:!0,component:m}),Object(d.jsx)(p.a,{path:"/tasks",exact:!0,component:m}),Object(d.jsx)(p.a,{path:"/create-task",exact:!0,component:x})]})})})};var v=function(){var e=Object(a.useState)({authToken:localStorage.getItem("authToken"),user:JSON.parse(localStorage.getItem("user"))}),t=Object(j.a)(e,2),c=t[0],s=t[1],r=function(){var e=Object(i.a)(o.a.mark((function e(){var t,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/users/logout",{method:"POST",headers:{"Content-Type":"application/json",authToken:localStorage.getItem("authToken")}});case 2:return t=e.sent,e.next=5,t.json();case 5:(c=e.sent).error?alert(c.error):n();case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),n=function(){localStorage.clear(),s({})};return c.authToken&&c.user&&(c.authToken,c.user),Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(O,{authToken:c.authToken,user:c.user,handleLogout:r})})};c(53);n.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(v,{})}),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.4f345c71.chunk.js.map