(this["webpackJsonpheroes-app"]=this["webpackJsonpheroes-app"]||[]).push([[0],{48:function(e,a,r){"use strict";r.r(a);var t=r(1),c=r(21),s=r.n(c),n=r(9),i=Object(t.createContext)(),l=r(4),o="[auth login]",h="[auth loguot]",j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case o:return Object(l.a)(Object(l.a)({},a.payload),{},{logged:!0});case h:return{logged:!1};default:return e}},d=r(5),b=r(2),u=r(0),m=function(e){var a=e.history,r=Object(t.useContext)(i).dispatch;return Object(u.jsxs)("div",{className:"container mt-4",children:[Object(u.jsx)("h1",{children:"Login"}),Object(u.jsx)("button",{className:"btn btn-primary",onClick:function(){var e=localStorage.getItem("lastPath")||"/";r({type:o,payload:{name:"Jgla",logged:!0}}),a.replace(e)},children:"Login"})]})},p=[{id:"dc-batman",superhero:"Batman",publisher:"DC Comics",alter_ego:"Bruce Wayne",first_appearance:"Detective Comics #27",characters:"Bruce Wayne"},{id:"dc-superman",superhero:"Superman",publisher:"DC Comics",alter_ego:"Kal-El",first_appearance:"Action Comics #1",characters:"Kal-El"},{id:"dc-flash",superhero:"Flash",publisher:"DC Comics",alter_ego:"Jay Garrick",first_appearance:"Flash Comics #1",characters:"Jay Garrick, Barry Allen, Wally West, Bart Allen"},{id:"dc-green",superhero:"Green Lantern",publisher:"DC Comics",alter_ego:"Alan Scott",first_appearance:"All-American Comics #16",characters:"Alan Scott, Hal Jordan, Guy Gardner, John Stewart, Kyle Raynor, Jade, Sinestro, Simon Baz"},{id:"dc-arrow",superhero:"Green Arrow",publisher:"DC Comics",alter_ego:"Oliver Queen",first_appearance:"More Fun Comics #73",characters:"Oliver Queen"},{id:"dc-wonder",superhero:"Wonder Woman",publisher:"DC Comics",alter_ego:"Princess Diana",first_appearance:"All Star Comics #8",characters:"Princess Diana"},{id:"dc-martian",superhero:"Martian Manhunter",publisher:"DC Comics",alter_ego:"J'onn J'onzz",first_appearance:"Detective Comics #225",characters:"Martian Manhunter"},{id:"dc-robin",superhero:"Robin/Nightwing",publisher:"DC Comics",alter_ego:"Dick Grayson",first_appearance:"Detective Comics #38",characters:"Dick Grayson"},{id:"dc-blue",superhero:"Blue Beetle",publisher:"DC Comics",alter_ego:"Dan Garret",first_appearance:"Mystery Men Comics #1",characters:"Dan Garret, Ted Kord, Jaime Reyes"},{id:"dc-black",superhero:"Black Canary",publisher:"DC Comics",alter_ego:"Dinah Drake",first_appearance:"Flash Comics #86",characters:"Dinah Drake, Dinah Lance"},{id:"marvel-spider",superhero:"Spider Man",publisher:"Marvel Comics",alter_ego:"Peter Parker",first_appearance:"Amazing Fantasy #15",characters:"Peter Parker"},{id:"marvel-captain",superhero:"Captain America",publisher:"Marvel Comics",alter_ego:"Steve Rogers",first_appearance:"Captain America Comics #1",characters:"Steve Rogers"},{id:"marvel-iron",superhero:"Iron Man",publisher:"Marvel Comics",alter_ego:"Tony Stark",first_appearance:"Tales of Suspense #39",characters:"Tony Stark"},{id:"marvel-thor",superhero:"Thor",publisher:"Marvel Comics",alter_ego:"Thor Odinson",first_appearance:"Journey into Myster #83",characters:"Thor Odinson"},{id:"marvel-hulk",superhero:"Hulk",publisher:"Marvel Comics",alter_ego:"Bruce Banner",first_appearance:"The Incredible Hulk #1",characters:"Bruce Banner"},{id:"marvel-wolverine",superhero:"Wolverine",publisher:"Marvel Comics",alter_ego:"James Howlett",first_appearance:"The Incredible Hulk #180",characters:"James Howlett"},{id:"marvel-daredevil",superhero:"Daredevil",publisher:"Marvel Comics",alter_ego:"Matthew Michael Murdock",first_appearance:"Daredevil #1",characters:"Matthew Michael Murdock"},{id:"marvel-hawkeye",superhero:"Hawkeye",publisher:"Marvel Comics",alter_ego:"Clinton Francis Barton",first_appearance:"Tales of Suspense #57",characters:"Clinton Francis Barton"},{id:"marvel-cyclops",superhero:"Cyclops",publisher:"Marvel Comics",alter_ego:"Scott Summers",first_appearance:"X-Men #1",characters:"Scott Summers"},{id:"marvel-silver",superhero:"Silver Surfer",publisher:"Marvel Comics",alter_ego:"Norrin Radd",first_appearance:"The Fantastic Four #48",characters:"Norrin Radd"}],O=function(e){var a=e.id,r=e.publisher,t=e.superhero,c=e.alter_ego,s=e.first_appearance,n=e.characters;return Object(u.jsx)("div",{className:"col-md-4 mt-4",children:Object(u.jsxs)("div",{className:"card ms-3",children:[Object(u.jsx)("img",{className:"card-img-top",src:"./heroe-app/assets/heroes/".concat(a,".jpg"),alt:r}),Object(u.jsxs)("div",{className:"card-body",children:[Object(u.jsxs)("h5",{className:"card-title",children:[" ",t," "]}),Object(u.jsx)("p",{className:"card-text",children:c}),c!==n&&Object(u.jsxs)("p",{className:"card-text",children:[" ",n," "]}),Object(u.jsxs)("p",{className:"card-text",children:[" ",Object(u.jsx)("small",{className:"text-muted",children:s})," "]}),Object(u.jsx)(d.b,{to:"./hero/".concat(a),children:"Mas..."})]})]})})},v=function(e){var a=e.publisher,r=Object(t.useMemo)((function(){return function(e){var a=["DC Comics","Marvel Comics"];if(!a.includes(e))throw new Error("Debe contener ".concat(a));return p.filter((function(a){return a.publisher===e}))}(a)}),[a]);return Object(u.jsx)("div",{className:"card-deck animate_animated animate__fadeOut",children:Object(u.jsx)("div",{className:"row no-gutters",children:r.map((function(e){return Object(u.jsx)(O,Object(l.a)({},e),e.id)}))})})},x=function(){var e=Object(t.useState)("Marvel Comics"),a=Object(n.a)(e,2),r=a[0];a[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"Marvel Screen"}),Object(u.jsx)(v,{publisher:r})]})},g=function(e){var a=e.history,r=Object(b.i)().heroeId,c=Object(t.useMemo)((function(){return e=r,p.find((function(a){return a.id===e}));var e}),[r]);if(!c)return console.log(c),Object(u.jsx)(b.a,{to:"/marvel"});var s=c.superhero,n=c.publisher,i=c.alter_ego,l=c.first_appearance,o=c.characters;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h1",{className:"mt-4",children:"Heroes Screen"}),Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"col-4",children:Object(u.jsx)("img",{src:"../assets/heroes/".concat(r,".jpg"),alt:s,className:"img-thumbnail animate_animated animate__fadeInLeft"})}),Object(u.jsxs)("div",{className:"col-8",children:[Object(u.jsxs)("h3",{children:[" ",s," "]}),Object(u.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(u.jsxs)("li",{className:"list-group-item",children:[Object(u.jsx)("b",{children:" Alter Ego : "}),i]}),Object(u.jsxs)("li",{className:"list-group-item",children:[Object(u.jsx)("b",{children:" Publisher : "}),n]}),Object(u.jsxs)("li",{className:"list-group-item",children:[Object(u.jsx)("b",{children:" Firts Appeareance : "}),l]})]}),Object(u.jsx)("h5",{className:"mt-4",children:"Characters"}),Object(u.jsxs)("p",{children:[" ",o," "]}),Object(u.jsx)("button",{className:"btn btn-outline-info",onClick:function(){console.log("aca"),a.length<=2?a.push("/"):a.goBack()},children:"Return"})]})]})]})},f=function(){var e=Object(t.useState)("DC Comics"),a=Object(n.a)(e,2),r=a[0];a[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:" DC Screen"}),Object(u.jsx)(v,{publisher:r})]})},C=function(){var e=Object(t.useContext)(i),a=e.user.name,r=e.dispatch,c=Object(b.g)();return Object(u.jsx)("nav",{className:"navbar navbar-dark bg-dark navbar-expand-sm",children:Object(u.jsxs)("div",{className:"container-fluid",children:[Object(u.jsx)(d.b,{className:"navbar-brand",to:"/",children:"Asociaciones"}),Object(u.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(u.jsx)("span",{className:"navbar-toggler-icon"})}),Object(u.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(u.jsxs)("ul",{className:"navbar-nav",children:[Object(u.jsx)("li",{className:"nav-item",children:Object(u.jsx)(d.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/marvel",children:"Marvel"})}),Object(u.jsx)("li",{className:"nav-item",children:Object(u.jsx)(d.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/dc",children:"DC"})}),Object(u.jsx)("li",{className:"nav-item",children:Object(u.jsx)(d.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/search",children:"Search"})})]})}),Object(u.jsxs)("form",{className:"d-flex",children:[Object(u.jsx)("div",{className:"mt-2",children:Object(u.jsxs)("span",{className:"text-primary",children:["User: ",a]})}),Object(u.jsx)("button",{className:"nav-item nav-link btn",onClick:function(){r({type:h,payload:{logged:!1}}),c.replace("/login")},type:"button",children:"Logout"})]})]})})},N=r(23),_=r.n(N),y=r(12),S=function(e){var a=e.history,r=Object(b.h)(),c=_.a.parse(r.search).q,s=void 0===c?"":c,i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=Object(t.useState)(e),r=Object(n.a)(a,2),c=r[0],s=r[1];return[c,function(e){var a=e.target;s(Object(l.a)(Object(l.a)({},c),{},Object(y.a)({},a.name,a.value)))},function(){s(e)}]}({heroSearch:s,heroPrueba:""}),o=Object(n.a)(i,2),h=o[0],j=o[1],d=h.heroSearch,m=Object(t.useState)({value:""}),v=Object(n.a)(m,2),x=(v[0],v[1],Object(t.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e?p.filter((function(a){return a.superhero.toLowerCase().includes(e.toLowerCase())})):p}(s)}),[s]));return Object(u.jsxs)("div",{className:"row mt-4",children:[Object(u.jsxs)("div",{className:"col-4",children:[Object(u.jsx)("h3",{children:"Search Form"}),Object(u.jsx)("hr",{}),Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),a.push("?q=".concat(d))},children:[Object(u.jsx)("input",{className:"form-control",name:"heroSearch",value:d,onChange:j,placeholder:"Find your Heroe"}),Object(u.jsx)("button",{className:"form-control btn mt-2  btn-block btn-outline-primary",type:"submit",children:"Search"})]})]}),Object(u.jsxs)("div",{className:"col-8",children:[Object(u.jsx)("h3",{children:"Result"}),Object(u.jsx)("hr",{}),Object(u.jsxs)("div",{className:"card-deck animate_animated animate__fadeOut",children:[Object(u.jsx)("div",{className:"row",children:0===x.length&&Object(u.jsx)("alert",{className:"alert alert-danger",children:" Hero not found "})}),Object(u.jsx)("div",{className:"row no-gutters",children:x.map((function(e){return Object(u.jsx)(O,Object(l.a)({},e),e.id)}))})]})]})]})},k=function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(C,{}),Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)(b.d,{children:[Object(u.jsx)(b.b,{exact:!0,path:"/marvel",component:x}),"//TODO ruta que recibe parametros",Object(u.jsx)(b.b,{exact:!0,path:"/hero/:heroeId",component:g}),Object(u.jsx)(b.b,{exact:!0,path:"/dc",component:f}),Object(u.jsx)(b.b,{exact:!0,path:"/hero/{$id}",component:f}),Object(u.jsx)(b.b,{exact:!0,path:"/search",component:S}),Object(u.jsx)(b.b,{exact:!0,path:"/",component:x})]})})]})},M=r(13),D=function(e){var a=e.isAuthenticated,r=e.component,t=Object(M.a)(e,["isAuthenticated","component"]);return localStorage.setItem("lastPath",t.location.pathname),Object(u.jsx)(b.b,Object(l.a)(Object(l.a)({},t),{},{component:function(e){return a?Object(u.jsx)(r,Object(l.a)({},e)):Object(u.jsx)(b.a,{to:"/login"})}}))},w=function(e){var a=e.isAuthenticated,r=e.component,t=Object(M.a)(e,["isAuthenticated","component"]);return Object(u.jsx)(b.b,Object(l.a)(Object(l.a)({},t),{},{component:function(e){return a?Object(u.jsx)(b.a,{to:"/"}):Object(u.jsx)(r,Object(l.a)({},e))}}))},A=function(){var e=Object(t.useContext)(i).user;return Object(u.jsx)(d.a,{children:Object(u.jsx)("div",{children:Object(u.jsxs)(b.d,{children:[Object(u.jsx)(w,{exact:!0,path:"/login",component:m,isAuthenticated:e.logged}),Object(u.jsx)(D,{path:"/",component:k,isAuthenticated:e.logged})]})})})},B=function(){return JSON.parse(localStorage.getItem("user"))||{loggued:!1}},J=function(){var e=Object(t.useReducer)(j,{},B),a=Object(n.a)(e,2),r=a[0],c=a[1];return Object(t.useEffect)((function(){localStorage.setItem("user",JSON.stringify(r))}),[r]),Object(u.jsx)(i.Provider,{value:{user:r,dispatch:c},children:Object(u.jsx)(A,{})})};s.a.render(Object(u.jsx)(J,{}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.9d5d83a3.chunk.js.map