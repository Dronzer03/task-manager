(this["webpackJsonptask-manager"]=this["webpackJsonptask-manager"]||[]).push([[0],{111:function(e,t,c){"use strict";c.r(t);var a=c(0),s=c.n(a),n=c(9),r=c.n(n),l=(c(50),c(12)),o=c.n(l),i=c(15),d=c(11),j=(c(52),c(53),c(2));var u=function(e){var t=Object(a.useState)(""),c=Object(d.a)(t,2),s=c[0],n=c[1],r=Object(a.useState)(""),l=Object(d.a)(r,2),o=l[0],i=l[1];return Object(j.jsxs)("div",{className:"login-page col-md-12 col-sm-12 col-lg-12",children:[Object(j.jsxs)("div",{className:"row col-md-12 col-sm-12 col-lg-12",children:[Object(j.jsx)("div",{className:"col-sm-4 col-lg-4 col-md-4"}),Object(j.jsx)("div",{className:"title col-sm-4 col-lg-4 col-sm-4",children:"EasyMaintain Login"}),Object(j.jsx)("div",{className:"col-sm-4 col-lg-4 col-md-4"})]}),Object(j.jsxs)("div",{className:"row col-md-12 col-sm-12 col-lg-12",children:[Object(j.jsx)("div",{className:"col-sm-4 col-lg-4 col-md-4"}),Object(j.jsxs)("div",{className:"col-sm-4 col-lg-4 col-md-4 row",children:[Object(j.jsx)("div",{className:"col-sm-6 col-lg-6 col-md-6 fields",children:Object(j.jsx)("label",{className:"labelClass",children:"UserName"})}),Object(j.jsx)("div",{className:"col-sm-6 col-lg-6 col-md-6",children:Object(j.jsx)("input",{type:"text",placeholder:"Enter your username",onChange:function(e){n(e.target.value)}})})]}),Object(j.jsx)("div",{className:"col-sm-4 col-lg-4 col-md-4"})]}),Object(j.jsxs)("div",{className:"row col-md-12 col-sm-12 col-lg-12",children:[Object(j.jsx)("div",{className:"col-sm-4 col-lg-4 col-md-4"}),Object(j.jsxs)("div",{className:"col-sm-4 col-lg-4 col-md-4 row",children:[Object(j.jsx)("div",{className:"col-sm-6 col-lg-6 col-md-6 fields",children:Object(j.jsx)("label",{className:"labelClass",children:"Password"})}),Object(j.jsx)("div",{className:"col-sm-6 col-lg-6 col-md-6",children:Object(j.jsx)("input",{type:"password",placeholder:"Enter your password",onChange:function(e){i(e.target.value)}})})]})]}),Object(j.jsx)("div",{className:"col-md-12 col-sm-12 col-lg-12",children:Object(j.jsx)("div",{className:"login-div",children:Object(j.jsx)("button",{className:"btn btn-primary login-btn",onClick:function(){""!=s&&""!=o?e.handleLogin({userName:s,password:o}):alert("All fields are compulsory!")},children:"Login"})})}),Object(j.jsxs)("div",{className:"created-by col-md-12 col-sm-12 col-lg-12",children:["Created by Athang using MERN stack",Object(j.jsx)("br",{}),"Nothing to worry even if your Records are Athang ;)"]})]})};var b=function(e){return Object(j.jsx)("div",{children:Object(j.jsx)(u,{handleLogin:e.handleLogin})})},m=c(18),h=c(27),p=c(7),x=(c(30),s.a.createContext({authToken:"",user:{}}));var O=function(e){var t=Object(a.useState)([]),c=Object(d.a)(t,2),s=c[0],n=c[1],r=Object(a.useState)(""),l=Object(d.a)(r,2),u=l[0],b=l[1],m=Object(a.useState)(""),h=Object(d.a)(m,2),O=h[0],v=h[1],g=Object(a.useState)(""),f=Object(d.a)(g,2),N=f[0],k=f[1],y=Object(a.useState)([]),C=Object(d.a)(y,2),w=C[0],S=C[1],T=Object(a.useState)(0),R=Object(d.a)(T,2),V=R[0],L=R[1],E=Object(a.useContext)(x).authToken,A=Object(p.f)().taskId,I=Object(a.useRef)([w,s]);Object(a.useEffect)((function(){A&&J()}),[]),Object(a.useEffect)((function(){console.log(I.current),I.current=[w,s],console.log(I.current)}));var J=function(){var e=Object(i.a)(o.a.mark((function e(){var t,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/tasks/".concat(A),{method:"GET",headers:{"Content-Type":"application/json",authToken:E}});case 2:return t=e.sent,e.next=5,t.json();case 5:(c=e.sent).error?alert(c.error):(b(c.taskName),v(c.taskCategory),k(c.taskDescription),P(c.taskValues));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),P=function(e){for(var t=0,c=[],a=[];t<e.length;t++){var s=t;c=c.concat(Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:Object(j.jsx)("input",{name:"propName",id:s,defaultValue:e[t].propName,onChange:F,type:"text"})}),Object(j.jsx)("td",{children:Object(j.jsx)("input",{name:"propValue",id:s,defaultValue:e[t].propValue,onChange:F,type:"text",style:{width:"450px"}})}),Object(j.jsx)("td",{children:Object(j.jsx)("button",{id:s,className:"btn btn-primary",onClick:B,children:"Remove"})})]})),a.push({id:s,propName:e[t].propName,propValue:e[t].propName})}L(t),n(c),S(a)},D=function(){var t=Object(i.a)(o.a.mark((function t(){var c,a,s,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""!=u&&""!=O&&""!=N){t.next=4;break}alert("Record Name, Category and Description are mandatory"),t.next=24;break;case 4:if((c={}).taskName=u,c.taskCategory=O,c.taskDescription=N,a=(a=JSON.parse(JSON.stringify(I.current[0]))).filter((function(e){return""!==e.propName||""!==e.propValue})),c.taskValues=a,!A){t.next=17;break}return t.next=14,fetch("/tasks/".concat(A),{method:"PATCH",headers:{"Content-Type":"application/json",authToken:E},body:JSON.stringify(c)});case 14:s=t.sent,t.next=20;break;case 17:return t.next=19,fetch("/tasks",{method:"POST",headers:{"Content-Type":"application/json",authToken:E},body:JSON.stringify(c)});case 19:s=t.sent;case 20:return t.next=22,s.json();case 22:(n=t.sent).error?alert(n.error):e.history.push("/tasks");case 24:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),F=function(e){e.target.value;var t=parseInt(e.target.id),c=I.current[0];"propName"==e.target.name?c[t].propName=e.target.value:(e.target.name="propValue")&&(c[t].propValue=e.target.value),S(c)},B=function(e){var t=parseInt(e.target.id),c=I.current[0],a=I.current[1];c=c.filter((function(e){return e.id!==t})),a=a.filter((function(e){return e.props.children[0].props.children.props.id!==t})),S(c),n(a)};return Object(j.jsxs)("div",{className:"create-tasks-page",children:[Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-md-3 col-lg-3 col-sm-3",children:Object(j.jsx)("label",{className:"create-task-label",children:"Create Record"})}),Object(j.jsx)("div",{className:"col-md-6 col-lg-6 col-sm-6"}),Object(j.jsxs)("div",{className:"col-md-3 col-sm-3 col-lg-3",children:[Object(j.jsx)("button",{className:"btn btn-primary save-button",onClick:D,children:"Save"}),Object(j.jsx)("button",{className:"btn btn-primary save-button",onClick:function(t){e.history.push("/tasks")},children:"Back"})]})]}),Object(j.jsxs)("div",{className:"row create-task-input",children:[Object(j.jsx)("div",{className:"col-md-1 col-lg-1 col-sm-1"}),Object(j.jsxs)("div",{className:"col-md-10 col-lg-10 col-sm-10",children:[Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-md-2 col-sm-2 col-lg-2",children:Object(j.jsx)("label",{children:"Record Name"})}),Object(j.jsx)("div",{className:"col-md-3 col-sm-3 col-lg-3",children:Object(j.jsx)("input",{type:"text",value:u,onChange:function(e){return b(e.target.value)}})}),Object(j.jsx)("div",{className:"col-md-7 col-sm-7 col-lg-7"})]}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-md-2 col-sm-2 col-lg-2",children:Object(j.jsx)("label",{children:"Record Category"})}),Object(j.jsx)("div",{className:"col-md-3 col-sm-3 col-lg-3",children:Object(j.jsx)("input",{value:O,onChange:function(e){return v(e.target.value)},type:"text"})}),Object(j.jsx)("div",{className:"col-md-7 col-sm-7 col-lg-7"})]}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-md-2 col-sm-2 col-lg-2",children:Object(j.jsx)("label",{children:"Record Description"})}),Object(j.jsx)("div",{className:"col-md-3 col-sm-3 col-lg-3",children:Object(j.jsx)("input",{value:N,onChange:function(e){return k(e.target.value)},type:"text"})}),Object(j.jsx)("div",{className:"col-md-7 col-sm-7 col-lg-7"})]}),Object(j.jsx)("div",{children:Object(j.jsx)("label",{children:"Record Values:"})}),Object(j.jsxs)("div",{className:"values-table",children:[Object(j.jsxs)("table",{children:[Object(j.jsxs)("thead",{children:[Object(j.jsx)("th",{style:{width:"300px"},children:"Property Name"}),Object(j.jsx)("th",{style:{width:"600px"},children:"Property Value"}),Object(j.jsx)("th",{style:{width:"300px"},children:"Action"})]}),Object(j.jsx)("tbody",{children:s})]}),Object(j.jsx)("button",{className:"btn btn-primary add-button",onClick:function(e){var t=V,c=s.concat(Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:Object(j.jsx)("input",{name:"propName",id:t,onChange:F,type:"text"})}),Object(j.jsx)("td",{children:Object(j.jsx)("input",{name:"propValue",id:t,onChange:F,type:"text",style:{width:"450px"}})}),Object(j.jsx)("td",{children:Object(j.jsx)("button",{id:t,className:"btn btn-primary",onClick:B,children:"Remove"})})]}));n(c);var a=w;a.push({id:t,propName:"",propValue:""}),S(a),L(t+1)},children:"Add Row with TextBox"}),Object(j.jsx)("button",{className:"btn btn-primary add-area",onClick:function(e){var t=V,c=s.concat(Object(j.jsxs)("tr",{id:t,children:[Object(j.jsx)("td",{children:Object(j.jsx)("input",{name:"propName",id:t,onChange:F,type:"text"})}),Object(j.jsx)("td",{children:Object(j.jsx)("textarea",{name:"propValue",id:t,onChange:F,type:"text",style:{width:"450px"}})}),Object(j.jsx)("td",{children:Object(j.jsx)("button",{id:t,className:"btn btn-primary",onClick:B,children:"Remove"})})]}));n(c);var a=w;a.push({id:t,propName:"",propValue:""}),S(a),L(t+1)},children:"Add Row with TextArea"})]})]}),Object(j.jsx)("div",{className:"col-md-1 col-sm-1 col-lg-1"})]})]})},v=(c(62),c(109),c(43)),g=c.n(v);var f=function(e){var t=Object(a.useState)([]),c=Object(d.a)(t,2),s=c[0],n=c[1],r=Object(a.useContext)(x),l=r.authToken;r.user,Object(a.useEffect)((function(){u()}),[]);var u=function(){var e=Object(i.a)(o.a.mark((function e(){var t,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/tasks",{method:"GET",headers:{"Content-Type":"application/json",authToken:l}});case 2:return t=e.sent,e.next=5,t.json();case 5:(c=e.sent).error?alert(c.error):n(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=s,m=[{dataField:"taskName",text:"Record Name"},{dataField:"taskCategory",text:"Category"},{dataField:"taskDescription",text:"Description"},{dataField:"taskValues",text:"Actions",formatter:function(t,c){return Object(j.jsx)("button",{className:"btn btn-primary",onClick:function(){return function(t){var c=t._id;e.history.push("/create-task/".concat(c))}(c)},children:"Edit"})}}];return Object(j.jsxs)("div",{className:"tasks-page",children:[Object(j.jsxs)("div",{className:"row records",children:[Object(j.jsx)("div",{className:"col-md-3 col-sm-3 col-lg-3",children:Object(j.jsx)("label",{className:"records-label",children:"Records"})}),Object(j.jsx)("div",{className:"col-md-6 col-sm-6 col-lg-6"}),Object(j.jsxs)("div",{className:"col-md-3 col-sm-3 col-lg-3",children:[Object(j.jsx)("button",{className:"btn btn-primary record-button",onClick:function(){e.history.push("/create-task")},children:"Create a Record"}),Object(j.jsx)("button",{className:"btn btn-primary",onClick:function(){e.handleLogout()},children:"Logout"})]})]}),Object(j.jsx)(g.a,{keyField:"_id",data:b,columns:m})]})};var N=function(e){var t=e.handleLogout;return Object(j.jsx)("div",{children:Object(j.jsx)(h.a,{children:Object(j.jsxs)(p.c,{children:[Object(j.jsx)(p.a,{path:"/",exact:!0,component:function(e){return Object(j.jsx)(f,Object(m.a)({handleLogout:t},e))}}),Object(j.jsx)(p.a,{path:"/tasks",exact:!0,component:function(e){return Object(j.jsx)(f,Object(m.a)({handleLogout:t},e))}}),Object(j.jsx)(p.a,{path:"/create-task",exact:!0,component:function(e){return Object(j.jsx)(O,Object(m.a)({},e))}}),Object(j.jsx)(p.a,{path:"/create-task/:taskId",exact:!0,component:function(e){return Object(j.jsx)(O,Object(m.a)({},e))}})]})})})};var k=function(){var e=Object(a.useState)({authToken:localStorage.getItem("authToken"),user:JSON.parse(localStorage.getItem("user"))}),t=Object(d.a)(e,2),c=t[0],s=t[1],n=function(){var e=Object(i.a)(o.a.mark((function e(t){var c,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/users/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 2:return c=e.sent,e.next=5,c.json();case 5:(a=e.sent).error?alert(a.error):u(a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r=function(){var e=Object(i.a)(o.a.mark((function e(){var t,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/users/logout",{method:"POST",headers:{"Content-Type":"application/json",authToken:localStorage.getItem("authToken")}});case 2:return t=e.sent,e.next=5,t.json();case 5:(c=e.sent).error?alert(c.error):l();case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){localStorage.clear(),s({})},u=function(e){localStorage.setItem("authToken",e.token),localStorage.setItem("user",JSON.stringify(e.user)),s({authToken:e.token,user:e.user})},m=c.authToken&&c.user?Object(j.jsx)(x.Provider,{value:c,children:Object(j.jsx)(N,{handleLogout:r})}):Object(j.jsx)(b,{handleLogin:n});return Object(j.jsx)("div",{className:"App",children:m})};c(107),c(108);r.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(k,{})}),document.getElementById("root"))},30:function(e,t,c){},50:function(e,t,c){},52:function(e,t,c){},53:function(e,t,c){}},[[111,1,2]]]);
//# sourceMappingURL=main.22bc9b05.chunk.js.map