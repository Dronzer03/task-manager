(this["webpackJsonptask-manager"]=this["webpackJsonptask-manager"]||[]).push([[0],{111:function(e,t,a){"use strict";a.r(t);var c=a(0),s=a.n(c),n=a(9),r=a.n(n),o=(a(50),a(12)),l=a.n(o),i=a(15),j=a(11),d=(a(52),a(53),a(2));var u=function(e){var t=Object(c.useState)(""),a=Object(j.a)(t,2),s=a[0],n=a[1],r=Object(c.useState)(""),o=Object(j.a)(r,2),l=o[0],i=o[1];return Object(d.jsxs)("div",{className:"login-page",children:[Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-sm-4 col-lg-4 col-md-4"}),Object(d.jsx)("div",{className:"title",children:"EasyMaintain Login"})]}),Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-sm-4 col-lg-4 col-md-4"}),Object(d.jsx)("label",{className:"col-sm-1 col-lg-1 col-md-1 labelClass",children:"UserName"}),Object(d.jsx)("div",{className:"col-sm-4 col-lg-4 col-md-4",children:Object(d.jsx)("input",{type:"text",placeholder:"Enter your username",onChange:function(e){n(e.target.value)}})})]}),Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-sm-4 col-lg-4 col-md-4"}),Object(d.jsx)("label",{className:"col-sm-1 col-lg-1 col-md-1 labelClass",children:"Password"}),Object(d.jsx)("div",{className:"col-sm-4 col-lg-4 col-md-4",children:Object(d.jsx)("input",{type:"password",placeholder:"Enter your password",onChange:function(e){i(e.target.value)}})})]}),Object(d.jsx)("div",{className:"row",children:Object(d.jsx)("div",{className:"col-sm-6 col-lg-6 col-md-6",children:Object(d.jsx)("button",{className:"btn btn-primary float-right login-btn",onClick:function(){""!=s&&""!=l?e.handleLogin({userName:s,password:l}):alert("All fields are compulsory!")},children:"Login"})})})]})};var b=function(e){return Object(d.jsx)("div",{children:Object(d.jsx)(u,{handleLogin:e.handleLogin})})},m=a(18),h=a(27),p=a(7),x=(a(30),s.a.createContext({authToken:"",user:{}}));var O=function(e){var t=Object(c.useState)([]),a=Object(j.a)(t,2),s=a[0],n=a[1],r=Object(c.useState)(""),o=Object(j.a)(r,2),u=o[0],b=o[1],m=Object(c.useState)(""),h=Object(j.a)(m,2),O=h[0],v=h[1],g=Object(c.useState)(""),f=Object(j.a)(g,2),N=f[0],k=f[1],y=Object(c.useState)([]),C=Object(j.a)(y,2),w=C[0],S=C[1],T=Object(c.useState)(0),V=Object(j.a)(T,2),L=V[0],J=V[1],R=Object(c.useContext)(x).authToken,E=Object(p.f)().taskId;Object(c.useEffect)((function(){E&&I()}),[]);var I=function(){var e=Object(i.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/tasks/".concat(E),{method:"GET",headers:{"Content-Type":"application/json",authToken:R}});case 2:return t=e.sent,e.next=5,t.json();case 5:(a=e.sent).error?alert(a.error):(b(a.taskName),v(a.taskCategory),k(a.taskDescription),P(a.taskValues));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),P=function(e){for(var t=0,a=[];t<e.length;t++){var c=t;a=a.concat(Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:Object(d.jsx)("input",{name:"propName",id:c,value:e[t].name,onChange:D,type:"text"})}),Object(d.jsx)("td",{children:Object(d.jsx)("input",{name:"propValue",id:c,value:e[t].value,onChange:D,type:"text",style:{width:"450px"}})})]}))}J(t),n(a);for(var s=0;s<e.length;s++){var r=s,o=JSON.parse(JSON.stringify(w));o.push({id:r,propName:e[s].name,propValue:e[s].value}),S(o)}},A=function(){var t=Object(i.a)(l.a.mark((function t(){var a,c,s,n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""!=u&&""!=O&&""!=N){t.next=4;break}alert("Record Name, Category and Description are mandatory"),t.next=24;break;case 4:if((a={}).taskName=u,a.taskCategory=O,a.taskDescription=N,c=(c=JSON.parse(JSON.stringify(w))).filter((function(e){return""!==e.propName||""!==e.propValue})),a.taskValues=c,!E){t.next=17;break}return t.next=14,fetch("/tasks/".concat(E),{method:"PATCH",headers:{"Content-Type":"application/json",authToken:R},body:JSON.stringify(a)});case 14:s=t.sent,t.next=20;break;case 17:return t.next=19,fetch("/tasks",{method:"POST",headers:{"Content-Type":"application/json",authToken:R},body:JSON.stringify(a)});case 19:s=t.sent;case 20:return t.next=22,s.json();case 22:(n=t.sent).error?alert(n.error):e.history.push("/tasks");case 24:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),D=function(e){e.target.value;var t=parseInt(e.target.id),a=w;"propName"==e.target.name?a[t].propName=e.target.value:(e.target.name="propValue")&&(a[t].propValue=e.target.value),S(a)};return Object(d.jsxs)("div",{className:"create-tasks-page",children:[Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-md-3 col-lg-3 col-sm-3",children:Object(d.jsx)("label",{className:"create-task-label",children:"Create Record"})}),Object(d.jsx)("div",{className:"col-md-7 col-lg-7 col-sm-7"}),Object(d.jsx)("div",{className:"col-md-2 col-sm-2 col-lg-2",children:Object(d.jsx)("button",{className:"btn btn-primary save-button",onClick:A,children:"Save"})})]}),Object(d.jsxs)("div",{className:"row create-task-input",children:[Object(d.jsx)("div",{className:"col-md-1 col-lg-1 col-sm-1"}),Object(d.jsxs)("div",{className:"col-md-10 col-lg-10 col-sm-10",children:[Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-md-2 col-sm-2 col-lg-2",children:Object(d.jsx)("label",{children:"Record Name"})}),Object(d.jsx)("div",{className:"col-md-3 col-sm-3 col-lg-3",children:Object(d.jsx)("input",{type:"text",value:u,onChange:function(e){return b(e.target.value)}})}),Object(d.jsx)("div",{className:"col-md-7 col-sm-7 col-lg-7"})]}),Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-md-2 col-sm-2 col-lg-2",children:Object(d.jsx)("label",{children:"Record Category"})}),Object(d.jsx)("div",{className:"col-md-3 col-sm-3 col-lg-3",children:Object(d.jsx)("input",{value:O,onChange:function(e){return v(e.target.value)},type:"text"})}),Object(d.jsx)("div",{className:"col-md-7 col-sm-7 col-lg-7"})]}),Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-md-2 col-sm-2 col-lg-2",children:Object(d.jsx)("label",{children:"Record Description"})}),Object(d.jsx)("div",{className:"col-md-3 col-sm-3 col-lg-3",children:Object(d.jsx)("input",{value:N,onChange:function(e){return k(e.target.value)},type:"text"})}),Object(d.jsx)("div",{className:"col-md-7 col-sm-7 col-lg-7"})]}),Object(d.jsx)("div",{children:Object(d.jsx)("label",{children:"Record Values:"})}),Object(d.jsxs)("div",{className:"values-table",children:[Object(d.jsxs)("table",{children:[Object(d.jsxs)("thead",{children:[Object(d.jsx)("th",{style:{width:"300px"},children:"Property Name"}),Object(d.jsx)("th",{style:{width:"600px"},children:"Property Value"})]}),Object(d.jsx)("tbody",{children:s})]}),Object(d.jsx)("button",{className:"btn btn-primary add-button",onClick:function(e){var t=L,a=s.concat(Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:Object(d.jsx)("input",{name:"propName",id:t,onChange:D,type:"text"})}),Object(d.jsx)("td",{children:Object(d.jsx)("input",{name:"propValue",id:t,onChange:D,type:"text",style:{width:"450px"}})})]}));n(a);var c=w;c.push({id:t,propName:"",propValue:""}),S(c),J(t+1)},children:"Add Row with TextBox"}),Object(d.jsx)("button",{className:"btn btn-primary add-area",onClick:function(e){var t=L,a=s.concat(Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:Object(d.jsx)("input",{name:"propName",id:t,onChange:D,type:"text"})}),Object(d.jsx)("td",{children:Object(d.jsx)("textarea",{name:"propValue",id:t,onChange:D,type:"text",style:{width:"450px"}})})]}));n(a);var c=w;c.push({id:t,propName:"",propValue:""}),S(c),J(t+1)},children:"Add Row with TextArea"})]})]}),Object(d.jsx)("div",{className:"col-md-1 col-sm-1 col-lg-1"})]})]})},v=(a(62),a(109),a(43)),g=a.n(v);var f=function(e){var t=Object(c.useState)([]),a=Object(j.a)(t,2),s=a[0],n=a[1],r=Object(c.useContext)(x),o=r.authToken;r.user,Object(c.useEffect)((function(){u()}),[]);var u=function(){var e=Object(i.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/tasks",{method:"GET",headers:{"Content-Type":"application/json",authToken:o}});case 2:return t=e.sent,e.next=5,t.json();case 5:(a=e.sent).error?alert(a.error):n(a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=s,m=[{dataField:"taskName",text:"Record Name"},{dataField:"taskCategory",text:"Category"},{dataField:"taskDescription",text:"Description"},{dataField:"taskValues",text:"Actions",formatter:function(t,a){return Object(d.jsx)("button",{className:"btn btn-primary",onClick:function(){return function(t){var a=t._id;e.history.push("/create-task/".concat(a))}(a)},children:"Edit"})}}];return Object(d.jsxs)("div",{className:"tasks-page",children:[Object(d.jsxs)("div",{className:"row records",children:[Object(d.jsx)("div",{className:"col-md-3 col-sm-3 col-lg-3",children:Object(d.jsx)("label",{className:"records-label",children:"Records"})}),Object(d.jsx)("div",{className:"col-md-5 col-sm-5 col-lg-5"}),Object(d.jsx)("div",{className:"col-md-3 col-sm-3 col-lg-3",children:Object(d.jsx)("button",{className:"btn btn-primary record-button",onClick:function(){e.history.push("/create-task")},children:"Create a Record"})}),Object(d.jsx)("div",{className:"col-md-1 col-sm-1 col-lg-1",children:Object(d.jsx)("button",{className:"btn btn-primary",onClick:function(){e.handleLogout()},children:"Logout"})})]}),Object(d.jsx)(g.a,{keyField:"_id",data:b,columns:m})]})};var N=function(e){var t=e.handleLogout;return Object(d.jsx)("div",{children:Object(d.jsx)(h.a,{children:Object(d.jsxs)(p.c,{children:[Object(d.jsx)(p.a,{path:"/",exact:!0,component:function(e){return Object(d.jsx)(f,Object(m.a)({handleLogout:t},e))}}),Object(d.jsx)(p.a,{path:"/tasks",exact:!0,component:function(e){return Object(d.jsx)(f,Object(m.a)({handleLogout:t},e))}}),Object(d.jsx)(p.a,{path:"/create-task",exact:!0,component:function(e){return Object(d.jsx)(O,Object(m.a)({},e))}}),Object(d.jsx)(p.a,{path:"/create-task/:taskId",exact:!0,component:function(e){return Object(d.jsx)(O,Object(m.a)({},e))}})]})})})};var k=function(){var e=Object(c.useState)({authToken:localStorage.getItem("authToken"),user:JSON.parse(localStorage.getItem("user"))}),t=Object(j.a)(e,2),a=t[0],s=t[1],n=function(){var e=Object(i.a)(l.a.mark((function e(t){var a,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/users/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 2:return a=e.sent,e.next=5,a.json();case 5:(c=e.sent).error?alert(c.error):u(c);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r=function(){var e=Object(i.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/users/logout",{method:"POST",headers:{"Content-Type":"application/json",authToken:localStorage.getItem("authToken")}});case 2:return t=e.sent,e.next=5,t.json();case 5:(a=e.sent).error?alert(a.error):o();case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){localStorage.clear(),s({})},u=function(e){localStorage.setItem("authToken",e.token),localStorage.setItem("user",JSON.stringify(e.user)),s({authToken:e.token,user:e.user})},m=a.authToken&&a.user?Object(d.jsx)(x.Provider,{value:a,children:Object(d.jsx)(N,{handleLogout:r})}):Object(d.jsx)(b,{handleLogin:n});return Object(d.jsx)("div",{className:"App",children:m})};a(107),a(108);r.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(k,{})}),document.getElementById("root"))},30:function(e,t,a){},50:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){}},[[111,1,2]]]);
//# sourceMappingURL=main.02cc25ae.chunk.js.map