(this["webpackJsonptaller-1"]=this["webpackJsonptaller-1"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),i=n(6),s=n.n(i),r=(n(12),n(7)),l=n(2),j=(n(13),n(14),n(15),n(0)),o=function(e){var t=e.text,n=e.active,a=e.url,c="Link";return n&&(c+=" Link--active"),Object(j.jsx)("a",{className:c,href:a,children:t})},u=n.p+"static/media/logo.172c94f6.svg",m=function(e){e.banner;return Object(j.jsx)("header",{className:"header",children:Object(j.jsxs)("div",{className:"header__section",children:[Object(j.jsx)("img",{className:"header__logo",src:u,alt:""}),Object(j.jsxs)("nav",{children:[Object(j.jsx)(o,{text:"Home",url:"",active:!0}),Object(j.jsx)(o,{text:"News",url:""}),Object(j.jsx)(o,{text:"Studios",url:""}),Object(j.jsx)(o,{text:"Social",url:""})]})]})})},d=(n(17),function(e){var t=e.name,n=e.imgUrl;return Object(j.jsxs)("div",{className:"AnimeCard",children:[Object(j.jsx)("img",{className:"AnimeCard__img",src:n,alt:"anime cover"}),Object(j.jsx)("figcaption",{className:"AnimeCard__figcaption",children:Object(j.jsx)("p",{children:t})})]})}),b=n.p+"static/media/jujutsu-kaisen-cover.49a2eef2.png",h=(n(18),function(e){var t=e.onCreate,n=a.useState(!1),c=Object(l.a)(n,2),i=(c[0],c[1]),s=a.useState(""),r=Object(l.a)(s,2),o=r[0],u=r[1],m=a.useState(""),d=Object(l.a)(m,2),b=d[0],h=d[1];return Object(j.jsxs)("form",{className:"AnimeForm",onSubmit:function(e){e.preventDefault(),i(!0),console.log("valid"),t({name:o,imgUrl:b})},children:[Object(j.jsx)("h2",{children:"Create animeCard"}),Object(j.jsxs)("label",{className:"input",children:["name",Object(j.jsx)("input",{type:"text",onChange:function(e){u(e.target.value)},value:o,placeholder:"Name"})]}),Object(j.jsxs)("label",{className:"input",children:["Image Url",Object(j.jsx)("input",{type:"text",onChange:function(e){h(e.target.value)},value:b,placeholder:"Image Url"})]}),Object(j.jsx)("button",{children:"Create"})]})});var x=function(){var e=c.a.useState([{id:Math.random(),name:"Jujutsu Kaisen",imgUrl:b}]),t=Object(l.a)(e,2),n=t[0],a=t[1];return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(m,{}),Object(j.jsxs)("main",{children:[Object(j.jsxs)("div",{className:"gallery__title",children:[Object(j.jsx)("h2",{children:"Latest Episodes"}),Object(j.jsx)("p",{children:"See All"})]}),Object(j.jsx)("section",{className:"gallery",children:Object(j.jsx)("div",{className:"gallery__row",children:n.map((function(e){return Object(j.jsx)(d,{name:e.name,imgUrl:e.imgUrl},e.id)}))})}),Object(j.jsx)(h,{onCreate:function(e){console.log("nuevo elemento!",e);var t=n.slice();t.push({id:Math.random(),name:e.name,imgUrl:b});[].concat(Object(r.a)(n),[{id:Math.random(),name:e.name,imgUrl:e.imgUrl}]);a(t)}})]})]})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),i(e),s(e)}))};s.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(x,{})}),document.getElementById("root")),O()}],[[19,1,2]]]);
//# sourceMappingURL=main.d9e4d888.chunk.js.map