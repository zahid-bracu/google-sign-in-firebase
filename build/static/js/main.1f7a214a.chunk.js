(this.webpackJsonpapp41=this.webpackJsonpapp41||[]).push([[0],{38:function(e,t,a){e.exports=a(58)},43:function(e,t,a){},44:function(e,t,a){},52:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(10),r=a.n(i),o=(a(43),a(36)),c=(a(44),a(12)),s=(a(45),a(47),{apiKey:"AIzaSyAnbTwUAwlMzqyyvApaBdD-a1IB3TT3yag",authDomain:"ema-john-simple-8df68.firebaseapp.com",databaseURL:"https://ema-john-simple-8df68.firebaseio.com",projectId:"ema-john-simple-8df68",storageBucket:"ema-john-simple-8df68.appspot.com",messagingSenderId:"303926532311",appId:"1:303926532311:web:e4ac326e7b0c2c600c7892"}),m=(a(51),a(63)),u=a(60),h=a(33),p=a(61),d=(a(52),function(e){var t=e.info,a=t.name,n=t.photo,i=t.email,r=t.creates,o=t.lastOnline;return l.a.createElement(m.a,{className:"",style:{width:"28rem",padding:"15px 20px"}},l.a.createElement(m.a.Img,{variant:"top",src:n,className:"d-block mx-auto",style:{width:"150px",borderRadius:"50%"}}),l.a.createElement(m.a.Body,null,l.a.createElement(m.a.Title,null,a),l.a.createElement(m.a.Text,null,l.a.createElement("h5",null,i))),l.a.createElement(u.a,{className:"list-group-flush"},l.a.createElement(h.a,null," ",l.a.createElement("h5",null,"Creation Time : ")," ",r," "),l.a.createElement(h.a,null," ",l.a.createElement("h5",null,"Last Online : ")," ",o," ")),l.a.createElement(m.a.Body,{className:"text-center"},l.a.createElement(m.a.Link,{target:"_blank",href:"https://portfolio-zahid-bracu.netlify.app/"},"Portfolio"),l.a.createElement(m.a.Link,{target:"_blank",href:"https://github.com/zahid-bracu"},"Github")),l.a.createElement(p.a,{className:"btn btn-lg btn-danger btn-signout",onClick:function(){return e.signOut()}},"Sign Out"))}),g=a(62),f=a(64),E=function(){return l.a.createElement(g.a,{bg:"dark",variant:"dark"},l.a.createElement(g.a.Brand,{href:"#home"}," ",l.a.createElement("img",{src:"https://i.ibb.co/H2ytkTL/kisspng-google-logo-business-microsoft-windows-operating-system-5b5cb99edbaff2-003672981532803486899.png",style:{width:"45px"}})," "),l.a.createElement(g.a.Collapse,{id:"responsive-navbar-nav"},l.a.createElement(f.a,{className:"mr-auto"},l.a.createElement(f.a.Link,{href:"#home",active:!0},"Home"),l.a.createElement(f.a.Link,{href:"https://portfolio-zahid-bracu.netlify.app/",active:!0},"Portfolio"),l.a.createElement(f.a.Link,{href:"https://github.com/zahid-bracu",active:!0},"Github"))))},b=function(){return l.a.createElement("div",{className:"text-center"},l.a.createElement("h5",null," Copyright 2020, Zahid's Programming Initiative"),l.a.createElement("p",null,"zahid.mym@gmail.com"))};c.initializeApp(s);var v=function(){var e=new c.auth.GoogleAuthProvider,t=Object(n.useState)({name:"",photo:"",email:"",creates:"",lastOnline:"",state:!1}),a=Object(o.a)(t,2),i=a[0],r=a[1];return!0===i.state?l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"App"},l.a.createElement(E,null),l.a.createElement("h4",{id:"h4-text",className:"text-success"},"Your are successfully Signed In"),l.a.createElement(d,{signOut:function(){!0===i.state&&c.auth().signOut().then((function(){r({name:"",photo:"",email:"",creates:"",lastOnline:"",state:!1})})).catch((function(e){}))},info:i})),l.a.createElement(b,null)):l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"App"},l.a.createElement(E,null),l.a.createElement("h4",{id:"h4-text"},"Press the Button Below to Sign in Using your Google Account"),l.a.createElement("button",{id:"btn-signin",className:"btn btn-success",onClick:function(){c.auth().signInWithPopup(e).then((function(e){console.log(e.user);var t=e.user,a=t.displayName,n=t.photoURL,l=t.email,i=e.user.metadata.creationTime,o=e.user.metadata.lastSignInTime;r({name:a,photo:n,email:l,creates:i,lastOnline:o,state:!0})}))}},"Sign In")),l.a.createElement(b,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[38,1,2]]]);
//# sourceMappingURL=main.1f7a214a.chunk.js.map