(this["webpackJsonptask-manager"]=this["webpackJsonptask-manager"]||[]).push([[0],{21:function(e,t,c){},33:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},55:function(e,t,c){"use strict";c.r(t);var a=c(0),s=c.n(a),n=c(11),r=c.n(n),l=(c(33),c(10)),o=c.n(l),i=c(12),j=c(6),d=(c(35),c(36),c(2));var b=function(e){var t=Object(a.useState)(""),c=Object(j.a)(t,2),s=c[0],n=c[1],r=Object(a.useState)(""),l=Object(j.a)(r,2),o=l[0],i=l[1];return Object(d.jsxs)("div",{className:"login-page",children:[Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-sm-4 col-lg-4 col-md-4"}),Object(d.jsx)("div",{className:"title",children:"EasyMaintain Login"})]}),Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-sm-4 col-lg-4 col-md-4"}),Object(d.jsx)("label",{className:"col-sm-1 col-lg-1 col-md-1 labelClass",children:"UserName"}),Object(d.jsx)("div",{className:"col-sm-4 col-lg-4 col-md-4",children:Object(d.jsx)("input",{type:"text",placeholder:"Enter your username",onChange:function(e){n(e.target.value)}})})]}),Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-sm-4 col-lg-4 col-md-4"}),Object(d.jsx)("label",{className:"col-sm-1 col-lg-1 col-md-1 labelClass",children:"Password"}),Object(d.jsx)("div",{className:"col-sm-4 col-lg-4 col-md-4",children:Object(d.jsx)("input",{type:"password",placeholder:"Enter your password",onChange:function(e){i(e.target.value)}})})]}),Object(d.jsx)("div",{className:"row",children:Object(d.jsx)("div",{className:"col-sm-6 col-lg-6 col-md-6",children:Object(d.jsx)("button",{className:"btn btn-primary float-right login-btn",onClick:function(){""!=s&&""!=o?e.handleLogin({userName:s,password:o}):alert("All fields are compulsory!")},children:"Login"})})})]})};var u=function(e){return Object(d.jsx)("div",{children:Object(d.jsx)(b,{handleLogin:e.handleLogin})})},m=c(20),h=c(26),O=c(4),x=(c(21),s.a.createContext({authToken:"",user:{}}));var p=function(e){var t=Object(a.useState)([]),c=Object(j.a)(t,2),s=c[0],n=c[1],r=Object(a.useState)(""),l=Object(j.a)(r,2),b=l[0],u=l[1],m=Object(a.useState)(""),h=Object(j.a)(m,2),O=h[0],p=h[1],g=Object(a.useState)(""),v=Object(j.a)(g,2),N=v[0],f=v[1],y=Object(a.useState)([]),k=Object(j.a)(y,2),w=k[0],C=k[1],S=Object(a.useState)(0),T=Object(j.a)(S,2),L=T[0],V=T[1],R=Object(a.useContext)(x).authToken,J=function(){var t=Object(i.a)(o.a.mark((function t(){var c,a,s,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""!=b&&""!=O&&""!=N){t.next=4;break}alert("Record Name, Category and Description are mandatory"),t.next=18;break;case 4:return(c={}).taskName=b,c.taskCategory=O,c.taskDescription=N,a=(a=JSON.parse(JSON.stringify(w))).filter((function(e){return""!==e.propName||""!==e.propValue})),c.taskValues=a,t.next=13,fetch("/tasks",{method:"POST",headers:{"Content-Type":"application/json",authToken:R},body:JSON.stringify(c)});case 13:return s=t.sent,t.next=16,s.json();case 16:(n=t.sent).error?alert(n.error):e.history.push("/tasks");case 18:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),E=function(e){e.target.value;var t=parseInt(e.target.id),c=w;"propName"==e.target.name?c[t].propName=e.target.value:(e.target.name="propValue")&&(c[t].propValue=e.target.value),C(c)};return Object(d.jsxs)("div",{className:"create-tasks-page",children:[Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-md-3 col-lg-3 col-sm-3",children:Object(d.jsx)("label",{className:"create-task-label",children:"Create Record"})}),Object(d.jsx)("div",{className:"col-md-7 col-lg-7 col-sm-7"}),Object(d.jsx)("div",{className:"col-md-2 col-sm-2 col-lg-2",children:Object(d.jsx)("button",{className:"btn btn-primary save-button",onClick:J,children:"Save"})})]}),Object(d.jsxs)("div",{className:"row create-task-input",children:[Object(d.jsx)("div",{className:"col-md-1 col-lg-1 col-sm-1"}),Object(d.jsxs)("div",{className:"col-md-10 col-lg-10 col-sm-10",children:[Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-md-2 col-sm-2 col-lg-2",children:Object(d.jsx)("label",{children:"Record Name"})}),Object(d.jsx)("div",{className:"col-md-3 col-sm-3 col-lg-3",children:Object(d.jsx)("input",{type:"text",onChange:function(e){return u(e.target.value)}})}),Object(d.jsx)("div",{className:"col-md-7 col-sm-7 col-lg-7"})]}),Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-md-2 col-sm-2 col-lg-2",children:Object(d.jsx)("label",{children:"Record Category"})}),Object(d.jsx)("div",{className:"col-md-3 col-sm-3 col-lg-3",children:Object(d.jsx)("input",{onChange:function(e){return p(e.target.value)},type:"text"})}),Object(d.jsx)("div",{className:"col-md-7 col-sm-7 col-lg-7"})]}),Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-md-2 col-sm-2 col-lg-2",children:Object(d.jsx)("label",{children:"Record Description"})}),Object(d.jsx)("div",{className:"col-md-3 col-sm-3 col-lg-3",children:Object(d.jsx)("input",{onChange:function(e){return f(e.target.value)},type:"text"})}),Object(d.jsx)("div",{className:"col-md-7 col-sm-7 col-lg-7"})]}),Object(d.jsx)("div",{children:Object(d.jsx)("label",{children:"Record Values:"})}),Object(d.jsxs)("div",{className:"values-table",children:[Object(d.jsxs)("table",{children:[Object(d.jsxs)("thead",{children:[Object(d.jsx)("th",{style:{width:"300px"},children:"Property Name"}),Object(d.jsx)("th",{style:{width:"600px"},children:"Property Value"})]}),Object(d.jsx)("tbody",{children:s})]}),Object(d.jsx)("button",{className:"btn btn-primary add-button",onClick:function(e){var t=L,c=s.concat(Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:Object(d.jsx)("input",{name:"propName",id:t,onChange:E,type:"text"})}),Object(d.jsx)("td",{children:Object(d.jsx)("input",{name:"propValue",id:t,onChange:E,type:"text",style:{width:"450px"}})})]}));n(c);var a=w;a.push({id:t,propName:"",propValue:""}),C(a),V(t+1)},children:"Add Row with TextBox"}),Object(d.jsx)("button",{className:"btn btn-primary add-area",onClick:function(e){var t=L,c=s.concat(Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:Object(d.jsx)("input",{name:"propName",id:t,onChange:E,type:"text"})}),Object(d.jsx)("td",{children:Object(d.jsx)("textarea",{name:"propValue",id:t,onChange:E,type:"text",style:{width:"450px"}})})]}));n(c);var a=w;a.push({id:t,propName:"",propValue:""}),C(a),V(t+1)},children:"Add Row with TextArea"})]})]}),Object(d.jsx)("div",{className:"col-md-1 col-sm-1 col-lg-1"})]})]})},g=(c(38),c(14)),v=function(e){return Object(d.jsx)("td",{children:Object(d.jsx)("button",{className:"btn btn-primary",onClick:function(){},children:"Edit"})})};var N=function(e){var t=Object(a.useState)([]),c=Object(j.a)(t,2),s=c[0],n=c[1],r=Object(a.useContext)(x),l=r.authToken;r.user,Object(a.useEffect)((function(){b()}),[]);var b=function(){var e=Object(i.a)(o.a.mark((function e(){var t,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/tasks",{method:"GET",headers:{"Content-Type":"application/json",authToken:l}});case 2:return t=e.sent,e.next=5,t.json();case 5:(c=e.sent).error?alert(c.error):n(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=Object(d.jsxs)(g.a,{data:s,children:[Object(d.jsx)(g.b,{field:"taskName",title:"Name"}),Object(d.jsx)(g.b,{field:"taskCategory",title:"Category"}),Object(d.jsx)(g.b,{field:"taskDescription",title:"Description"}),Object(d.jsx)(g.b,{field:"taskValues",title:"Actions",cell:v})]});return Object(d.jsxs)("div",{className:"tasks-page",children:[Object(d.jsxs)("div",{className:"row records",children:[Object(d.jsx)("div",{className:"col-md-3 col-sm-3 col-lg-3",children:Object(d.jsx)("label",{className:"records-label",children:"Records"})}),Object(d.jsx)("div",{className:"col-md-5 col-sm-5 col-lg-5"}),Object(d.jsx)("div",{className:"col-md-3 col-sm-3 col-lg-3",children:Object(d.jsx)("button",{className:"btn btn-primary record-button",onClick:function(){e.history.push("/create-task")},children:"Create a Record"})}),Object(d.jsx)("div",{className:"col-md-1 col-sm-1 col-lg-1",children:Object(d.jsx)("button",{className:"btn btn-primary",onClick:function(){e.handleLogout()},children:"Logout"})})]}),u]})};var f=function(e){var t=e.handleLogout;return Object(d.jsx)("div",{children:Object(d.jsx)(h.a,{children:Object(d.jsxs)(O.c,{children:[Object(d.jsx)(O.a,{path:"/",render:function(e){return Object(d.jsx)(N,Object(m.a)({handleLogout:t},e))}}),Object(d.jsx)(O.a,{path:"/tasks",render:function(e){return Object(d.jsx)(N,Object(m.a)({},e))}}),Object(d.jsx)(O.a,{path:"/create-task",exact:!0,component:p})]})})})};var y=function(){var e=Object(a.useState)({authToken:localStorage.getItem("authToken"),user:JSON.parse(localStorage.getItem("user"))}),t=Object(j.a)(e,2),c=t[0],s=t[1],n=function(){var e=Object(i.a)(o.a.mark((function e(t){var c,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/users/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 2:return c=e.sent,e.next=5,c.json();case 5:(a=e.sent).error?alert(a.error):b(a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r=function(){var e=Object(i.a)(o.a.mark((function e(){var t,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/users/logout",{method:"POST",headers:{"Content-Type":"application/json",authToken:localStorage.getItem("authToken")}});case 2:return t=e.sent,e.next=5,t.json();case 5:(c=e.sent).error?alert(c.error):l();case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){localStorage.clear(),s({})},b=function(e){localStorage.setItem("authToken",e.token),localStorage.setItem("user",JSON.stringify(e.user)),s({authToken:e.token,user:e.user})},m=c.authToken&&c.user?Object(d.jsx)(x.Provider,{value:c,children:Object(d.jsx)(f,{handleLogout:r})}):Object(d.jsx)(u,{handleLogin:n});return Object(d.jsx)("div",{className:"App",children:m})};c(54);r.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(y,{})}),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.e9f3debe.chunk.js.map