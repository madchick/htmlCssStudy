(this.webpackJsonpgifmaker=this.webpackJsonpgifmaker||[]).push([[0],{21:function(t,e,c){},22:function(t,e,c){},43:function(t,e,c){"use strict";c.r(e);var r=c(0),j=c(1),b=c.n(j),n=c(15),s=c.n(n),a=(c(21),c(2)),i=c.n(a),O=c(7),u=c(3),x=(c(22),c(8)),o=Object(x.createFFmpeg)({log:!0});var f=function(){var t=Object(j.useState)(!1),e=Object(u.a)(t,2),c=e[0],b=e[1],n=Object(j.useState)(),s=Object(u.a)(n,2),a=s[0],f=s[1],l=Object(j.useState)(),p=Object(u.a)(l,2),d=p[0],h=p[1],g=Object(j.useState)("0"),v=Object(u.a)(g,2),m=v[0],w=v[1],S=Object(j.useState)("0"),F=Object(u.a)(S,2),k=F[0],y=F[1],C=function(){var t=Object(O.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.load();case 2:b(!0);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();Object(j.useEffect)((function(){C()}),[]);var L=function(){var t=Object(O.a)(i.a.mark((function t(){var e,c,r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=o,t.next=3,Object(x.fetchFile)(a);case 3:return t.t1=t.sent,t.t0.FS.call(t.t0,"writeFile","test.mp4",t.t1),e=Number(k)-Number(m),t.next=8,o.run("-i","test.mp4","-t",String(e),"-ss",m,"-f","gif","out.gif");case 8:c=o.FS("readFile","out.gif"),r=URL.createObjectURL(new Blob([c.buffer],{type:"image/gif"})),h(r);case 11:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return c?Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),"\ubc84\ud2bc\uc744 \ud074\ub9ad\ud558\uc5ec, PC\uc5d0 \uc800\uc7a5\ub41c \ub3d9\uc601\uc0c1\uc744 \uc120\ud0dd\ud574\uc8fc\uc138\uc694",Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)("input",{type:"file",onChange:function(t){var e;return f(null===(e=t.target.files)||void 0===e?void 0:e.item(0))}}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),a&&Object(r.jsx)("video",{controls:!0,width:"400",src:URL.createObjectURL(a)}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),"\uc2dc\uc791 : ",Object(r.jsx)("input",{type:"text",onChange:function(t){return w(t.target.value)}}),"\ucd08",Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),"\uc885\ub8cc : ",Object(r.jsx)("input",{type:"text",onChange:function(t){return y(t.target.value)}}),"\ucd08",Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)("button",{onClick:L,children:"GIF \ud30c\uc77c \ub9cc\ub4e4\uae30"}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),d&&Object(r.jsxs)("div",{children:["\ub9c8\uc6b0\uc2a4 \uc6b0\uce21\ubc84\ud2bc\uc73c\ub85c \uc800\uc7a5 \uac00\ub2a5\ud569\ub2c8\ub2e4",Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)("img",{alt:"",src:d,width:"400"})]}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{})]}):Object(r.jsxs)("div",{children:[Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsxs)("center",{children:[Object(r.jsx)("p",{children:"Loading..."}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),"\ud3f0\uc5d0\uc11c\ub294 \uc2e4\ud589\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4",Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),"PC\uc6a9 \ud06c\ub86c\uc5d0 \uc5e3\uc9c0 \ube0c\ub77c\uc6b0\uc800\uc5d0\uc11c \uc2e4\ud589 \uac00\ub2a5\ud569\ub2c8\ub2e4"]}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{})]})};s.a.render(Object(r.jsx)(b.a.StrictMode,{children:Object(r.jsx)(f,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.36755f67.chunk.js.map