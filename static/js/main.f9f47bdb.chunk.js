(this["webpackJsonptaller-1"]=this["webpackJsonptaller-1"]||[]).push([[0],{101:function(e,t,a){},102:function(e,t,a){},103:function(e,t,a){},104:function(e,t,a){},105:function(e,t,a){},106:function(e,t,a){},107:function(e,t,a){},108:function(e,t,a){},109:function(e,t,a){},110:function(e,t,a){},111:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(33),c=a.n(i),r=(a(91),a(16)),o=a(9),l=a(35),j=a(14),d=(a(92),a(58)),u=(a(93),a(151)),m=a(152),b=a(1),h=function(e){var t=e.onCreate,a=e.addTagOption,s=e.tagOptions,i=Object(j.g)(),c=n.useState(!1),r=Object(o.a)(c,2),l=(r[0],r[1]),h=n.useState(""),O=Object(o.a)(h,2),p=O[0],x=O[1],g=n.useState(""),v=Object(o.a)(g,2),f=v[0],_=v[1],N=n.useState(""),w=Object(o.a)(N,2),C=w[0],y=w[1],S=n.useState(""),A=Object(o.a)(S,2),V=A[0],E=A[1],B=function(e){E(e.target.value),console.log(V)},T=[].map((function(e){return{label:e}})),k=n.useState(T),D=Object(o.a)(k,2),F=D[0],I=D[1],L=""!==p&&p.length>=5,M=""!==p&&p.length>=5;return Object(b.jsx)("section",{children:Object(b.jsxs)("form",{className:"AnimeForm",onSubmit:function(e){e.preventDefault(),l(!0);var a=F.map((function(e){return e.label}));if(L&&M){var n={id:Math.random(),name:p,cover:"".concat("/DangoTV","/images/Covers/")+C,description:f,status:V,tags:a,episodes:[]};t(n)}i.push("/")},children:[Object(b.jsx)("h2",{children:"Create AnimeObj"}),Object(b.jsxs)("label",{className:"input",children:["Name",Object(b.jsx)("input",{type:"text",onChange:function(e){x(e.target.value)},value:p,placeholder:"Name"})]}),Object(b.jsxs)("label",{className:"input",children:["Cover",Object(b.jsx)("input",{type:"text",onChange:function(e){y(e.target.value)},value:C,placeholder:"Cover"})]}),Object(b.jsxs)("label",{className:"input",children:["Description",Object(b.jsx)("textarea",{onChange:function(e){_(e.target.value)},value:f,placeholder:"Description",cols:30,rows:10})]}),Object(b.jsxs)("div",{className:"AnimeForm__Status",children:[Object(b.jsx)("p",{children:"Status"}),Object(b.jsxs)("div",{className:"AnimeForm__Status__inputContainer",children:[Object(b.jsxs)("div",{className:"input--radio",children:[Object(b.jsx)("input",{type:"radio",name:"status",value:"Finish",onChange:B}),Object(b.jsx)("label",{children:"Finish"})]}),Object(b.jsxs)("div",{className:"input--radio",children:[Object(b.jsx)("input",{type:"radio",name:"status",value:"In Broadcast",onChange:B}),Object(b.jsx)("label",{children:"In Broadcast"})]})]})]}),Object(b.jsx)(u.a,{multiple:!0,freeSolo:!0,disableClearable:!0,style:{width:"100%",margin:"16px"},id:"combo-box-demo",options:s,renderInput:function(e){return Object(b.jsx)(m.a,Object(d.a)(Object(d.a)({},e),{},{label:"Tags",placeholder:"Add a tag"}))},onChange:function(e,t){var n=t.map((function(e){if("string"===typeof e){var t={label:e};return a(t),t}return e}));I(n)},value:F,isOptionEqualToValue:function(e,t){return e.label===t.label}}),Object(b.jsx)("button",{children:"Create"})]})})},O=(a(101),function(e){var t=e.text,a=e.url;return Object(b.jsxs)("div",{className:"Title",children:[Object(b.jsx)("h2",{children:t}),Object(b.jsx)("a",{href:a,children:"See All"})]})}),p=a(48),x=(a(102),a(103),function(e){var t=e.text,a=e.url;return Object(b.jsx)(l.b,{className:"Link",activeClassName:"Link--active",to:a,children:t})}),g=(a(104),function(e){return Object(p.a)(e),Object(b.jsxs)("div",{className:"inputSearch",children:[Object(b.jsx)("input",{type:"text",placeholder:"What do you want to search?"}),Object(b.jsx)("span",{className:"inputSearch__Icon material-icons-round md-dark",children:"search"})]})}),v=function(e){Object(p.a)(e);var t=Object(j.g)();return Object(b.jsxs)("header",{className:"header",children:[Object(b.jsxs)("div",{className:"header__section",children:[Object(b.jsx)("img",{className:"header__logo",src:"".concat("/DangoTV","/images/General/logo.svg"),alt:"",onClick:function(){t.push("/")}}),Object(b.jsxs)("nav",{children:[Object(b.jsx)(x,{text:"Forms",url:"/Forms"}),Object(b.jsx)(x,{text:"Studios",url:"/Studios"})]})]}),Object(b.jsx)("div",{className:"header__section",children:Object(b.jsx)(g,{})})]})},f=(a(105),function(e){var t=e.animeList,a=n.useState(0),s=Object(o.a)(a,2),i=s[0],c=s[1],r=n.useState(t[0].name),l=Object(o.a)(r,2),j=l[0],d=l[1],u=n.useState(t[0].img),m=Object(o.a)(u,2),h=m[0],O=m[1],p={backgroundImage:"url(".concat(h,")")};return Object(b.jsxs)("article",{className:"Banner",style:p,children:[Object(b.jsx)("img",{src:"",alt:""}),Object(b.jsx)("h1",{className:"Banner__Name",children:j}),Object(b.jsx)("section",{className:"Banner__Btns",children:t.map((function(e,a,n){return Object(b.jsx)("div",{className:i===a?"Banner__BtnNav Banner__BtnNav--selected":"Banner__BtnNav",onClick:(s=a,function(){d(t[s].name),O(t[s].img),c(s)})},e.id);var s}))})]})}),_=(a(106),a(107),a(108),function(e){var t=e.id,a=e.name,n=e.cover,s=Object(j.g)();return Object(b.jsxs)("div",{className:"AnimeCard",onClick:function(){s.push("/anime-details/".concat(t))},children:[Object(b.jsx)("img",{className:"AnimeCard__img",src:n,alt:"anime cover"}),Object(b.jsx)("figcaption",{className:"AnimeCard__figcaption",children:Object(b.jsx)("p",{children:a})})]})}),N=(a(109),function(e){var t=e.id,a=e.anime,n=e.thumbnail,s=e.number,i=Object(j.g)();return Object(b.jsxs)("div",{className:"EpisodeCard",onClick:function(){i.push("/episode-details/".concat(t))},children:[Object(b.jsx)("img",{className:"EpisodeCard__img",src:n,alt:"episode cover"}),Object(b.jsxs)("figcaption",{className:"EpisodeCard__figcaption",children:[Object(b.jsx)("h1",{children:a}),Object(b.jsxs)("h2",{children:["Episode ",s]})]})]})}),w=function(e){var t=e.type,a=e.listAnime,n=e.listEpisode,s=e.withoutPadding;return Object(b.jsx)("section",{className:s?"gallery gallery--withoutPadding":"gallery",children:Object(b.jsx)("div",{className:"gallery__row",children:"Episode"===t&&void 0!==n?n.map((function(e){return Object(b.jsx)(N,{id:e.id,anime:e.animeName,thumbnail:e.thumbnail,number:e.number},e.id)})):"Anime"===t&&void 0!==a?a.map((function(e){return Object(b.jsx)(_,{id:e.id,name:e.name,cover:e.cover},e.id)})):"Error no se cargo la vista previa"})})},C=function(e){var t=e.list,a=Object(j.h)().id,n=parseFloat(a),s=t.find((function(e){return e.id===n}));return s?Object(b.jsxs)("article",{className:"AnimeView",children:[Object(b.jsxs)("section",{className:"AnimeView__Info",children:[Object(b.jsx)("img",{className:"AnimeView__Image",src:s.cover,alt:"Anime--Cover.png"}),Object(b.jsxs)("div",{className:"AnimeView__Data",children:[Object(b.jsx)("p",{className:"AnimeView__Name",children:s.name}),Object(b.jsx)("div",{className:"AnimeView__Tags",children:s.tags.map((function(e,t){return Object(b.jsx)("div",{className:"AnimeView__Tag",children:e},t)}))}),Object(b.jsx)("p",{className:"AnimeView__Description",children:s.description}),Object(b.jsx)("p",{className:"AnimeView__Status",children:s.status})]})]}),Object(b.jsxs)("section",{className:"AnimeView__Episodes",children:[Object(b.jsx)(O,{text:"Episodes",url:""}),Object(b.jsx)(w,{type:"Episode",listEpisode:s.episodes,withoutPadding:!0})]})]}):Object(b.jsx)(j.a,{to:"/404"})},y=a(19),S=a(72),A=Object(S.a)({palette:{primary:{main:"#c678dd"},secondary:{main:"#f44336"}}}),V=(a(110),function(e){var t=e.list,a=Object(j.h)().id,n=parseFloat(a),s=t.find((function(e){return e.id===n}));return s?Object(b.jsxs)("article",{className:"EpisodeView",children:[Object(b.jsxs)("section",{className:"EpisodeView__Content",children:[Object(b.jsxs)("div",{className:"EpisodeView__Info",children:[Object(b.jsx)("img",{src:"",alt:""}),Object(b.jsxs)("div",{className:"EpisodeView__Data",children:[Object(b.jsx)("p",{className:"EpisodeView__Anime",children:s.animeName}),Object(b.jsx)("p",{className:"EpisodeView__Name",children:s.name}),Object(b.jsx)("p",{className:"EpisodeView__Description",children:s.description}),Object(b.jsx)("p",{className:"EpisodeView__Date",children:s.date})]}),Object(b.jsx)("div",{className:"EpisodeView__Controllers",children:Object(b.jsx)("div",{})})]}),Object(b.jsx)("div",{className:"EpisodeView__Player",children:Object(b.jsx)("iframe",{src:"",frameBorder:"0"})})]}),Object(b.jsx)("hr",{}),Object(b.jsx)("section",{className:"EpisodeView__Adds"})]}):Object(b.jsx)(j.a,{to:"/404"})});var E=function(){var e=[{id:0,img:"".concat("/DangoTV","/images/Banners/banner-naruto.png"),name:"Boruto: Naruto Next Generations"},{id:1,img:"".concat("/DangoTV","/images/Banners/banner-naruto.png"),name:"Naruto"},{id:2,img:"".concat("/DangoTV","/images/Banners/banner-naruto.png"),name:"Jujutsu Kaisen"}],t=s.a.useState([{id:Math.random(),animeName:"Jujutsu Kaisen",number:1,name:"some name xd",description:"some description",date:"12-9-2021",thumbnail:"".concat("/DangoTV","/images/Thumbnails/jujutsu/jujutsu_episode_1.jpg"),videoUrl:"https://"}]),a=Object(o.a)(t,2),n=a[0],i=(a[1],s.a.useState([{id:Math.random(),name:"Jujutsu Kaisen",cover:"".concat("/DangoTV","/images/Covers/jujutsu-kaisen-cover.png"),description:"Yuji Itadori is a boy with tremendous physical strength, though he lives a completely ordinary high school life. \n               One day, to save a classmate who has been attacked by curses, he eats the finger of Ryomen Sukuna, taking the curse into his own soul. \n               From then on, he shares one body with Ryomen Sukuna. Guided by the most powerful of sorcerers, Satoru Gojo, Itadori is admitted to Tokyo Jujutsu High School, \n               an organization that fights the curses... and thus begins the heroic tale of a boy who became a curse to exorcise a curse, a life from which he could never turn back.",status:"Finish",tags:["Action","Shonen","Supernatural"],episodes:[n[0]]}])),c=Object(o.a)(i,2),d=c[0],u=c[1],m=s.a.useState([{label:"test 1"},{label:"test 2"},{label:"Animals"}]),p=Object(o.a)(m,2),x=p[0],g=p[1];return Object(b.jsx)(y.c,{theme:A,children:Object(b.jsxs)(l.a,{children:[Object(b.jsx)(v,{}),Object(b.jsxs)(j.d,{children:[Object(b.jsxs)(j.b,{exact:!0,path:"/",children:[Object(b.jsx)(f,{animeList:e}),Object(b.jsxs)("article",{className:"Main",children:[Object(b.jsxs)("section",{className:"Main__Content",children:[Object(b.jsx)(O,{text:"Latest Episodes",url:""}),Object(b.jsx)(w,{type:"Episode",listEpisode:n}),Object(b.jsx)(O,{text:"Latest Animes",url:""}),Object(b.jsx)(w,{type:"Anime",listAnime:d,withoutPadding:!0})]}),Object(b.jsx)("hr",{}),Object(b.jsx)("section",{className:"Main__News"})]})]}),Object(b.jsx)(j.b,{path:"/anime-details/:id",children:Object(b.jsx)(C,{list:d})}),Object(b.jsx)(j.b,{path:"/episode-details/:id",children:Object(b.jsx)(V,{list:n})}),Object(b.jsx)(j.b,{path:"/Forms",children:Object(b.jsx)(h,{onCreate:function(e){console.log("nuevo elemento!",e);var t=[].concat(Object(r.a)(d),[e]);u(t)},tagOptions:x,addTagOption:function(e){g([].concat(Object(r.a)(x),[e]))}})}),Object(b.jsx)(j.b,{path:"/Studios"})]})]})})},B=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,154)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,c=t.getTTFB;a(e),n(e),s(e),i(e),c(e)}))};c.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(E,{})}),document.getElementById("root")),B()},91:function(e,t,a){},92:function(e,t,a){},93:function(e,t,a){}},[[111,1,2]]]);
//# sourceMappingURL=main.f9f47bdb.chunk.js.map