(this.webpackJsonpchatonline=this.webpackJsonpchatonline||[]).push([[0],{83:function(e,t,n){},84:function(e,t,n){},85:function(e,t,n){},95:function(e,t,n){},96:function(e,t,n){},97:function(e,t,n){},98:function(e,t,n){},99:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(14),s=n.n(i),o=(n(83),n(20)),r=(n(84),n(85),n(68)),l=n.n(r),d=n(139),u=n(140),j=n(134),b=n(130),h=n(5),p=Object(c.createContext)(),O=function(e){var t=e.reducer,n=e.initialState,a=e.children;return Object(h.jsx)(p.Provider,{value:Object(c.useReducer)(t,n),children:a})},f=function(){return Object(c.useContext)(p)},m=n(23),x="TOGGLE_MENU",v="SET_USER",g="SET_DARKMODE",_=function(e,t){switch(console.log(t),t.type){case x:return Object(m.a)(Object(m.a)({},e),{},{isopen:t.isopen});case v:return Object(m.a)(Object(m.a)({},e),{},{user:t.user});case g:return Object(m.a)(Object(m.a)({},e),{},{darkMode:t.darkMode});default:return e}},y=n(42),N=y.a.initializeApp({apiKey:"AIzaSyCx6B4YINVbxbyj439AgUfZfPnY3G8-PnA",authDomain:"chatonline-ff8d8.firebaseapp.com",projectId:"chatonline-ff8d8",storageBucket:"chatonline-ff8d8.appspot.com",messagingSenderId:"771792460102",appId:"1:771792460102:web:f263b446678408b53f6d47"}),C=y.a.auth(),k=new y.a.auth.GoogleAuthProvider,S=N.firestore(),B=function(){var e=f(),t=Object(o.a)(e,2),n=t[0],c=n.isopen,a=n.user,i=n.darkMode,s=t[1];return Object(h.jsxs)("div",{className:"header",children:[Object(h.jsxs)("div",{className:"header__left",children:[Object(h.jsx)(b.a,{onClick:function(){s({type:x,isopen:!c})},children:Object(h.jsx)(l.a,{fontSize:"large"})}),Object(h.jsx)("img",{src:"https://cdn.discordapp.com/attachments/706986996840792064/865347215307571221/emi.png",alt:"logo"})]}),Object(h.jsxs)("div",{className:"header__right",children:[Object(h.jsx)(d.a,{src:null===a||void 0===a?void 0:a.photoURL}),Object(h.jsx)(u.a,{checked:i,onChange:function(){s({type:g,darkMode:!i})}}),a&&Object(h.jsx)(j.a,{onClick:function(){C.signOut().then((function(e){return s({type:v,user:null})}))},variant:"contained",children:"Sign out"})]})]})},E=(n(95),function(){var e=f(),t=Object(o.a)(e,2),n=(t[0].user,t[1]);return Object(h.jsxs)("div",{className:"login",children:[Object(h.jsx)("h1",{children:"Welcom to our Blog App!"}),Object(h.jsx)(j.a,{variant:"contained",color:"primary",onClick:function(){C.signInWithPopup(k).then((function(e){return n({type:v,user:e.user})})).catch((function(e){return alert(e.message)}))},children:"Sign in with Google"})]})}),w=(n(96),function(){var e=Object(c.useState)(),t=Object(o.a)(e,2),n=t[0],a=t[1];Object(c.useEffect)((function(){navigator.geolocation.getCurrentPosition((function(e){console.log(e.coords.longitude,e.coords.latitude);var t="https://community-open-weather-map.p.rapidapi.com/forecast?units=metric&lat=".concat(e.coords.latitude,"&lon=").concat(e.coords.longitude);fetch(t,{method:"GET",headers:{"x-rapidapi-key":"8f33a2320emsh6677c393bf1ffb9p181350jsnce9b5344666a","x-rapidapi-host":"community-open-weather-map.p.rapidapi.com"}}).then((function(e){return e.json()})).then((function(e){return a(e)})).then((function(e){return console.log(e)}))}),(function(e){return console.log(e)}))}),[]);var i=f(),s=Object(o.a)(i,2),r=s[0].user;s[1];return Object(h.jsxs)("div",{className:"sidebar",children:[Object(h.jsxs)("div",{className:"sidebar__top",children:[Object(h.jsx)("h4",{children:null===n||void 0===n?void 0:n.city.name}),Object(h.jsx)("img",{src:"/icons/".concat(null===n||void 0===n?void 0:n.list[0].weather[0].icon,".png")}),Object(h.jsxs)("h1",{children:[Math.round(null===n||void 0===n?void 0:n.list[0].main.temp),"\xb0C "]})]}),Object(h.jsxs)("div",{className:"sidebar__bottom",children:[Object(h.jsx)("h4",{children:"Welcome"}),Object(h.jsx)("h4",{children:null===r||void 0===r?void 0:r.displayName})]})]})}),M=(n(97),n(98),n(69)),A=n.n(M),F=n(135),T=Object(c.forwardRef)((function(e,t){var n=e.id,c=e.title,a=e.text,i=e.isBlue,s=e.username,r=e.avatar,l=f(),u=Object(o.a)(l,2);u[0].user,u[1];return Object(h.jsxs)("div",{className:"post",ref:t,children:[Object(h.jsxs)("div",{className:"post__body",children:[Object(h.jsxs)("div",{className:"post__bodyLeft",children:[Object(h.jsx)(d.a,{className:"avatar",src:r}),Object(h.jsx)("h2",{children:c}),Object(h.jsx)("h4",{children:a})]}),Object(h.jsx)(b.a,{onClick:function(){S.collection("posts").doc(n).delete()},children:Object(h.jsx)(A.a,{})})]}),Object(h.jsxs)("div",{className:"post__icons",children:[Object(h.jsx)(b.a,{onClick:function(){var e=S.collection("posts").doc(n);e.get().then((function(t){return e.update({isBlue:!t.data().isBlue})}))},children:Object(h.jsx)(F.a,{color:i?"primary":""})}),s]})]})})),I=n(138),P=n(70),G=function(){var e=f(),t=Object(o.a)(e,2),n=t[0].user,a=(t[1],Object(c.useState)([])),i=Object(o.a)(a,2),s=i[0],r=i[1],l=Object(c.useState)({title:"",text:""}),d=Object(o.a)(l,2),u=d[0],j=d[1];Object(c.useEffect)((function(){S.collection("posts").orderBy("timestamp","desc").onSnapshot((function(e){return r(e.docs.map((function(e){return{id:e.id,data:e.data()}})))}))}),[]);return Object(h.jsxs)("div",{className:"main",children:[Object(h.jsx)("div",{className:"main__input",children:Object(h.jsxs)("form",{noValidate:!0,autoComplete:"off",children:[Object(h.jsxs)("div",{className:"main__inputForm",children:[Object(h.jsx)(I.a,{id:"standard-basic",label:"Title",value:u.title,onChange:function(e){return j(Object(m.a)(Object(m.a)({},u),{},{title:e.target.value}))}}),Object(h.jsx)(I.a,{className:"main__inputFormText",id:"outlined-basic",label:"Enter your post here ...",variant:"outlined",value:u.text,onChange:function(e){return j(Object(m.a)(Object(m.a)({},u),{},{text:e.target.value}))}})]}),Object(h.jsx)("button",{className:"button",type:"submit",onClick:function(e){e.preventDefault(),u.text?(S.collection("posts").add({title:u.title,text:u.text,username:null===n||void 0===n?void 0:n.displayName,avatar:null===n||void 0===n?void 0:n.photoURL,timestamp:y.a.firestore.FieldValue.serverTimestamp(),isBlue:!1}),j({title:"",text:""})):alert("Add your post")}})]})}),Object(h.jsx)("div",{className:"main__posts",children:Object(h.jsx)(P.a,{children:s.map((function(e){var t=e.id,n=e.data,c=n.title,a=n.text,i=n.isBlue,s=n.username,o=n.avatar;return Object(h.jsx)(T,{id:t,title:c,text:a,isBlue:i,username:s,avatar:o},t)}))})})]})},L=n(71),R=n(136),D=n(137);var U=function(){var e=f(),t=Object(o.a)(e,2),n=t[0],a=n.isopen,i=n.user,s=n.darkMode,r=t[1],l=Object(L.a)({palette:{type:s?"dark":"light"}});return Object(c.useEffect)((function(){C.onAuthStateChanged((function(e){e&&r({type:v,user:e})})),console.log(i)}),[]),Object(h.jsx)("div",{className:"app",children:i?Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(R.a,{theme:l,children:[Object(h.jsx)(D.a,{}),Object(h.jsx)(B,{}),Object(h.jsxs)("div",{className:"app__central ".concat(a?"displayed":""),children:[Object(h.jsx)(w,{}),Object(h.jsx)(G,{})]})]})}):Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(B,{}),Object(h.jsx)(E,{})]})})},z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,141)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),i(e),s(e)}))};s.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(O,{initialState:{isopen:!1,user:null,darkMode:!1},reducer:_,children:Object(h.jsx)(U,{})})}),document.getElementById("root")),z()}},[[99,1,2]]]);
//# sourceMappingURL=main.0a4b2e07.chunk.js.map