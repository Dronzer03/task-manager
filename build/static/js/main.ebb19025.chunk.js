(this["webpackJsonptask-manager"]=this["webpackJsonptask-manager"]||[]).push([[0],{111:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),s=c(9),r=c.n(s),o=(c(50),c(12)),l=c.n(o),i=c(15),j=c(11),d=(c(52),c(53),c(2));var u=function(e){var t=Object(a.useState)(""),c=Object(j.a)(t,2),n=c[0],s=c[1],r=Object(a.useState)(""),o=Object(j.a)(r,2),l=o[0],i=o[1];return Object(d.jsxs)("div",{className:"login-page",children:[Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-sm-4 col-lg-4 col-md-4"}),Object(d.jsx)("div",{className:"title",children:"EasyMaintain Login"})]}),Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-sm-4 col-lg-4 col-md-4"}),Object(d.jsx)("label",{className:"col-sm-1 col-lg-1 col-md-1 labelClass",children:"UserName"}),Object(d.jsx)("div",{className:"col-sm-4 col-lg-4 col-md-4",children:Object(d.jsx)("input",{type:"text",placeholder:"Enter your username",onChange:function(e){s(e.target.value)}})})]}),Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-sm-4 col-lg-4 col-md-4"}),Object(d.jsx)("label",{className:"col-sm-1 col-lg-1 col-md-1 labelClass",children:"Password"}),Object(d.jsx)("div",{className:"col-sm-4 col-lg-4 col-md-4",children:Object(d.jsx)("input",{type:"password",placeholder:"Enter your password",onChange:function(e){i(e.target.value)}})})]}),Object(d.jsx)("div",{className:"row",children:Object(d.jsx)("div",{className:"col-sm-6 col-lg-6 col-md-6",children:Object(d.jsx)("button",{className:"btn btn-primary float-right login-btn",onClick:function(){""!=n&&""!=l?e.handleLogin({userName:n,password:l}):alert("All fields are compulsory!")},children:"Login"})})})]})};var b=function(e){return Object(d.jsx)("div",{children:Object(d.jsx)(u,{handleLogin:e.handleLogin})})},m=c(18),h=c(27),p=c(7),x=(c(30),n.a.createContext({authToken:"",user:{}}));var O=function(e){var t=Object(a.useState)([]),c=Object(j.a)(t,2),n=c[0],s=c[1],r=Object(a.useState)(""),o=Object(j.a)(r,2),u=o[0],b=o[1],m=Object(a.useState)(""),h=Object(j.a)(m,2),O=h[0],v=h[1],g=Object(a.useState)(""),f=Object(j.a)(g,2),N=f[0],k=f[1],y=Object(a.useState)([]),C=Object(j.a)(y,2),w=C[0],S=C[1],T=Object(a.useState)(0),V=Object(j.a)(T,2),R=V[0],L=V[1],I=Object(a.useContext)(x).authToken,E=Object(p.f)().taskId;Object(a.useEffect)((function(){E&&J()}),[]);var J=function(){var e=Object(i.a)(l.a.mark((function e(){var t,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/tasks/".concat(E),{method:"GET",headers:{"Content-Type":"application/json",authToken:I}});case 2:return t=e.sent,e.next=5,t.json();case 5:(c=e.sent).error?alert(c.error):(b(c.taskName),v(c.taskCategory),k(c.taskDescription),A(c.taskValues));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=function(e){for(var t=0,c=[],a=[];t<e.length;t++){var n=t;c=c.concat(Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:Object(d.jsx)("input",{name:"propName",id:n,value:e[t].propName,onChange:D,type:"text"})}),Object(d.jsx)("td",{children:Object(d.jsx)("input",{name:"propValue",id:n,value:e[t].propValue,onChange:D,type:"text",style:{width:"450px"}})}),Object(d.jsx)("td",{children:Object(d.jsx)("button",{className:"btn btn-primary",id:n,onClick:F,children:"Remove"})})]})),a.push({id:n,propName:e[t].propName,propValue:e[t].propName})}L(t),s(c),S(a)},P=function(){var t=Object(i.a)(l.a.mark((function t(){var c,a,n,s;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""!=u&&""!=O&&""!=N){t.next=4;break}alert("Record Name, Category and Description are mandatory"),t.next=24;break;case 4:if((c={}).taskName=u,c.taskCategory=O,c.taskDescription=N,a=(a=JSON.parse(JSON.stringify(w))).filter((function(e){return""!==e.propName||""!==e.propValue})),c.taskValues=a,!E){t.next=17;break}return t.next=14,fetch("/tasks/".concat(E),{method:"PATCH",headers:{"Content-Type":"application/json",authToken:I},body:JSON.stringify(c)});case 14:n=t.sent,t.next=20;break;case 17:return t.next=19,fetch("/tasks",{method:"POST",headers:{"Content-Type":"application/json",authToken:I},body:JSON.stringify(c)});case 19:n=t.sent;case 20:return t.next=22,n.json();case 22:(s=t.sent).error?alert(s.error):e.history.push("/tasks");case 24:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),D=function(e){e.target.value;var t=parseInt(e.target.id),c=w;"propName"==e.target.name?c[t].propName=e.target.value:(e.target.name="propValue")&&(c[t].propValue=e.target.value),S(c)},F=function(e){var t=parseInt(e.target.id),c=w;c=c.filter((function(e){return e.id!==t}));S(c)};return Object(d.jsxs)("div",{className:"create-tasks-page",children:[Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-md-3 col-lg-3 col-sm-3",children:Object(d.jsx)("label",{className:"create-task-label",children:"Create Record"})}),Object(d.jsx)("div",{className:"col-md-7 col-lg-7 col-sm-7"}),Object(d.jsx)("div",{className:"col-md-2 col-sm-2 col-lg-2",children:Object(d.jsx)("button",{className:"btn btn-primary save-button",onClick:P,children:"Save"})})]}),Object(d.jsxs)("div",{className:"row create-task-input",children:[Object(d.jsx)("div",{className:"col-md-1 col-lg-1 col-sm-1"}),Object(d.jsxs)("div",{className:"col-md-10 col-lg-10 col-sm-10",children:[Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-md-2 col-sm-2 col-lg-2",children:Object(d.jsx)("label",{children:"Record Name"})}),Object(d.jsx)("div",{className:"col-md-3 col-sm-3 col-lg-3",children:Object(d.jsx)("input",{type:"text",value:u,onChange:function(e){return b(e.target.value)}})}),Object(d.jsx)("div",{className:"col-md-7 col-sm-7 col-lg-7"})]}),Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-md-2 col-sm-2 col-lg-2",children:Object(d.jsx)("label",{children:"Record Category"})}),Object(d.jsx)("div",{className:"col-md-3 col-sm-3 col-lg-3",children:Object(d.jsx)("input",{value:O,onChange:function(e){return v(e.target.value)},type:"text"})}),Object(d.jsx)("div",{className:"col-md-7 col-sm-7 col-lg-7"})]}),Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-md-2 col-sm-2 col-lg-2",children:Object(d.jsx)("label",{children:"Record Description"})}),Object(d.jsx)("div",{className:"col-md-3 col-sm-3 col-lg-3",children:Object(d.jsx)("input",{value:N,onChange:function(e){return k(e.target.value)},type:"text"})}),Object(d.jsx)("div",{className:"col-md-7 col-sm-7 col-lg-7"})]}),Object(d.jsx)("div",{children:Object(d.jsx)("label",{children:"Record Values:"})}),Object(d.jsxs)("div",{className:"values-table",children:[Object(d.jsxs)("table",{children:[Object(d.jsxs)("thead",{children:[Object(d.jsx)("th",{style:{width:"300px"},children:"Property Name"}),Object(d.jsx)("th",{style:{width:"600px"},children:"Property Value"}),Object(d.jsx)("th",{style:{width:"300px"},children:"Action"})]}),Object(d.jsx)("tbody",{children:n})]}),Object(d.jsx)("button",{className:"btn btn-primary add-button",onClick:function(e){var t=R,c=n.concat(Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:Object(d.jsx)("input",{name:"propName",id:t,onChange:D,type:"text"})}),Object(d.jsx)("td",{children:Object(d.jsx)("input",{name:"propValue",id:t,onChange:D,type:"text",style:{width:"450px"}})}),Object(d.jsx)("td",{children:Object(d.jsx)("button",{className:"btn btn-primary",id:t,onClick:F,children:"Remove"})})]}));s(c);var a=w;a.push({id:t,propName:"",propValue:""}),S(a),L(t+1)},children:"Add Row with TextBox"}),Object(d.jsx)("button",{className:"btn btn-primary add-area",onClick:function(e){var t=R,c=n.concat(Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:Object(d.jsx)("input",{name:"propName",id:t,onChange:D,type:"text"})}),Object(d.jsx)("td",{children:Object(d.jsx)("textarea",{name:"propValue",id:t,onChange:D,type:"text",style:{width:"450px"}})}),Object(d.jsx)("td",{children:Object(d.jsx)("button",{className:"btn btn-primary",id:t,onClick:F,children:"Remove"})})]}));s(c);var a=w;a.push({id:t,propName:"",propValue:""}),S(a),L(t+1)},children:"Add Row with TextArea"})]})]}),Object(d.jsx)("div",{className:"col-md-1 col-sm-1 col-lg-1"})]})]})},v=(c(62),c(109),c(43)),g=c.n(v);var f=function(e){var t=Object(a.useState)([]),c=Object(j.a)(t,2),n=c[0],s=c[1],r=Object(a.useContext)(x),o=r.authToken;r.user,Object(a.useEffect)((function(){u()}),[]);var u=function(){var e=Object(i.a)(l.a.mark((function e(){var t,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/tasks",{method:"GET",headers:{"Content-Type":"application/json",authToken:o}});case 2:return t=e.sent,e.next=5,t.json();case 5:(c=e.sent).error?alert(c.error):s(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=n,m=[{dataField:"taskName",text:"Record Name"},{dataField:"taskCategory",text:"Category"},{dataField:"taskDescription",text:"Description"},{dataField:"taskValues",text:"Actions",formatter:function(t,c){return Object(d.jsx)("button",{className:"btn btn-primary",onClick:function(){return function(t){var c=t._id;e.history.push("/create-task/".concat(c))}(c)},children:"Edit"})}}];return Object(d.jsxs)("div",{className:"tasks-page",children:[Object(d.jsxs)("div",{className:"row records",children:[Object(d.jsx)("div",{className:"col-md-3 col-sm-3 col-lg-3",children:Object(d.jsx)("label",{className:"records-label",children:"Records"})}),Object(d.jsx)("div",{className:"col-md-5 col-sm-5 col-lg-5"}),Object(d.jsx)("div",{className:"col-md-3 col-sm-3 col-lg-3",children:Object(d.jsx)("button",{className:"btn btn-primary record-button",onClick:function(){e.history.push("/create-task")},children:"Create a Record"})}),Object(d.jsx)("div",{className:"col-md-1 col-sm-1 col-lg-1",children:Object(d.jsx)("button",{className:"btn btn-primary",onClick:function(){e.handleLogout()},children:"Logout"})})]}),Object(d.jsx)(g.a,{keyField:"_id",data:b,columns:m})]})};var N=function(e){var t=e.handleLogout;return Object(d.jsx)("div",{children:Object(d.jsx)(h.a,{children:Object(d.jsxs)(p.c,{children:[Object(d.jsx)(p.a,{path:"/",exact:!0,component:function(e){return Object(d.jsx)(f,Object(m.a)({handleLogout:t},e))}}),Object(d.jsx)(p.a,{path:"/tasks",exact:!0,component:function(e){return Object(d.jsx)(f,Object(m.a)({handleLogout:t},e))}}),Object(d.jsx)(p.a,{path:"/create-task",exact:!0,component:function(e){return Object(d.jsx)(O,Object(m.a)({},e))}}),Object(d.jsx)(p.a,{path:"/create-task/:taskId",exact:!0,component:function(e){return Object(d.jsx)(O,Object(m.a)({},e))}})]})})})};var k=function(){var e=Object(a.useState)({authToken:localStorage.getItem("authToken"),user:JSON.parse(localStorage.getItem("user"))}),t=Object(j.a)(e,2),c=t[0],n=t[1],s=function(){var e=Object(i.a)(l.a.mark((function e(t){var c,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/users/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 2:return c=e.sent,e.next=5,c.json();case 5:(a=e.sent).error?alert(a.error):u(a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r=function(){var e=Object(i.a)(l.a.mark((function e(){var t,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/users/logout",{method:"POST",headers:{"Content-Type":"application/json",authToken:localStorage.getItem("authToken")}});case 2:return t=e.sent,e.next=5,t.json();case 5:(c=e.sent).error?alert(c.error):o();case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){localStorage.clear(),n({})},u=function(e){localStorage.setItem("authToken",e.token),localStorage.setItem("user",JSON.stringify(e.user)),n({authToken:e.token,user:e.user})},m=c.authToken&&c.user?Object(d.jsx)(x.Provider,{value:c,children:Object(d.jsx)(N,{handleLogout:r})}):Object(d.jsx)(b,{handleLogin:s});return Object(d.jsx)("div",{className:"App",children:m})};c(107),c(108);r.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(k,{})}),document.getElementById("root"))},30:function(e,t,c){},50:function(e,t,c){},52:function(e,t,c){},53:function(e,t,c){}},[[111,1,2]]]);
//# sourceMappingURL=main.ebb19025.chunk.js.map