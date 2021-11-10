(this["webpackJsonptaller-1"]=this["webpackJsonptaller-1"]||[]).push([[0],{102:function(e,t,a){},103:function(e,t,a){},104:function(e,t,a){},105:function(e,t,a){},106:function(e,t,a){},107:function(e,t,a){},109:function(e,t,a){},110:function(e,t,a){},111:function(e,t,a){},112:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(33),c=a.n(i),o=(a(92),a(16)),r=a(7),l=(a(93),a(35)),d=a(14),u=(a(94),a(95),a(1)),j=function(e){var t=e.id,a=e.name,n=e.cover,s=Object(d.g)();return Object(u.jsxs)("div",{className:"AnimeCard",onClick:function(){s.push("/anime-details/".concat(t))},children:[Object(u.jsx)("img",{className:"AnimeCard__img",src:n,alt:"anime cover"}),Object(u.jsx)("figcaption",{className:"AnimeCard__figcaption",children:Object(u.jsx)("p",{children:a})})]})},b=(a(102),function(e){var t,a=e.episode,n=Object(d.g)();return Object(u.jsxs)("div",{className:"EpisodeCard",onClick:function(){n.push("/episode-details/".concat(a.id))},children:[Object(u.jsx)("img",{className:"EpisodeCard__img",src:a.thumbnail,alt:"episode cover"}),Object(u.jsxs)("figcaption",{className:"EpisodeCard__figcaption",children:[Object(u.jsx)("h1",{children:null===(t=a.anime)||void 0===t?void 0:t.name}),Object(u.jsxs)("h2",{children:["Episode ",a.number]})]})]})}),m=function(e){var t=e.type,a=e.listAnime,n=e.listEpisode,s=e.withoutPadding;return Object(u.jsx)("section",{className:s?"gallery gallery--withoutPadding":"gallery",children:Object(u.jsx)("div",{className:"gallery__row",children:"Episode"===t&&void 0!==n?n.map((function(e){return Object(u.jsx)(b,{episode:e},e.id)})):"Anime"===t&&void 0!==a?a.map((function(e){return Object(u.jsx)(j,{id:e.id,name:e.name,cover:e.cover},e.id)})):"Error no se cargo la vista previa"})})},h=(a(103),function(e){var t=e.text,a=e.url;return Object(u.jsxs)("div",{className:"Title",children:[Object(u.jsx)("h2",{children:t}),Object(u.jsx)("a",{href:a,children:"See All"})]})}),p=a(47),O=(a(104),a(105),function(e){var t=e.text,a=e.url;return Object(u.jsx)(l.b,{className:"Link",activeClassName:"Link--active",to:a,children:t})}),x=(a(106),function(e){return Object(p.a)(e),Object(u.jsxs)("div",{className:"inputSearch",children:[Object(u.jsx)("input",{type:"text",placeholder:"What do you want to search?"}),Object(u.jsx)("span",{className:"inputSearch__Icon material-icons-round md-dark",children:"search"})]})}),g=function(e){Object(p.a)(e);var t=Object(d.g)();return Object(u.jsxs)("header",{className:"header",children:[Object(u.jsxs)("div",{className:"header__section",children:[Object(u.jsx)("img",{className:"header__logo",src:"".concat("/DangoTV","/images/General/logo.svg"),alt:"",onClick:function(){t.push("/")}}),Object(u.jsxs)("nav",{children:[Object(u.jsx)(O,{text:"Forms",url:"/Forms"}),Object(u.jsx)(O,{text:"Studios",url:"/Studios"})]})]}),Object(u.jsx)("div",{className:"header__section",children:Object(u.jsx)(x,{})})]})},v=(a(107),function(e){var t=e.animeList,a=n.useState(0),s=Object(r.a)(a,2),i=s[0],c=s[1],o=n.useState(t[0].name),l=Object(r.a)(o,2),d=l[0],j=l[1],b=n.useState(t[0].img),m=Object(r.a)(b,2),h=m[0],p=m[1],O={backgroundImage:"url(".concat(h,")")};return Object(u.jsxs)("article",{className:"Banner",style:O,children:[Object(u.jsx)("img",{src:"",alt:""}),Object(u.jsx)("h1",{className:"Banner__Name",children:d}),Object(u.jsx)("section",{className:"Banner__Btns",children:t.map((function(e,a,n){return Object(u.jsx)("div",{className:i===a?"Banner__BtnNav Banner__BtnNav--selected":"Banner__BtnNav",onClick:(s=a,function(){j(t[s].name),p(t[s].img),c(s)})},e.id);var s}))})]})}),f=a(37),_=a(151),N=a(152),S=function(e){var t=e.onCreate,a=e.addTagOption,s=e.tagOptions,i=Object(d.g)(),c=n.useState(!1),o=Object(r.a)(c,2),l=(o[0],o[1]),j=n.useState(""),b=Object(r.a)(j,2),m=b[0],h=b[1],p=n.useState(""),O=Object(r.a)(p,2),x=O[0],g=O[1],v=n.useState(""),S=Object(r.a)(v,2),w=S[0],C=S[1],y=n.useState(""),V=Object(r.a)(y,2),A=V[0],B=V[1],E=function(e){B(e.target.value),console.log(A)},T=[].map((function(e){return{label:e}})),D=n.useState(T),I=Object(r.a)(D,2),k=I[0],P=I[1],F=""!==m&&m.length>=5,M=""!==m&&m.length>=5;return Object(u.jsx)("section",{children:Object(u.jsxs)("form",{className:"Form",onSubmit:function(e){e.preventDefault(),l(!0);var a=k.map((function(e){return e.label}));if(F&&M){var n={id:Math.random(),name:m,cover:"".concat("/DangoTV","/images/Covers/")+w,description:x,status:A,tags:a,episodes:[],studios:[]};t(n)}i.push("/")},children:[Object(u.jsx)("h2",{children:"Create AnimeObj"}),Object(u.jsxs)("label",{className:"input",children:["Name",Object(u.jsx)("input",{type:"text",onChange:function(e){h(e.target.value)},value:m,placeholder:"Name"})]}),Object(u.jsxs)("label",{className:"input",children:["Cover",Object(u.jsx)("input",{type:"text",onChange:function(e){C(e.target.value)},value:w,placeholder:"Cover"})]}),Object(u.jsxs)("label",{className:"input",children:["Description",Object(u.jsx)("textarea",{onChange:function(e){g(e.target.value)},value:x,placeholder:"Description",cols:30,rows:10})]}),Object(u.jsxs)("div",{className:"Form__Status",children:[Object(u.jsx)("p",{children:"Status"}),Object(u.jsxs)("div",{className:"Form__Status__inputContainer",children:[Object(u.jsxs)("div",{className:"input--radio",children:[Object(u.jsx)("input",{type:"radio",name:"status",value:"Finish",onChange:E}),Object(u.jsx)("label",{children:"Finish"})]}),Object(u.jsxs)("div",{className:"input--radio",children:[Object(u.jsx)("input",{type:"radio",name:"status",value:"In Broadcast",onChange:E}),Object(u.jsx)("label",{children:"In Broadcast"})]})]})]}),Object(u.jsx)(_.a,{multiple:!0,freeSolo:!0,disableClearable:!0,style:{width:"100%",margin:"16px"},id:"combo-box-demo",options:s,renderInput:function(e){return Object(u.jsx)(N.a,Object(f.a)(Object(f.a)({},e),{},{label:"Tags",placeholder:"Add a tag"}))},onChange:function(e,t){var n=t.map((function(e){if("string"===typeof e){var t={label:e};return a(t),t}return e}));P(n)},value:k,isOptionEqualToValue:function(e,t){return e.label===t.label}}),Object(u.jsx)("button",{className:"Btn",children:"Create Anime"})]})})},w=(a(109),function(e){var t=e.studioOptions,a=e.onCreate,s=Object(d.g)(),i=n.useState(""),c=Object(r.a)(i,2),o=c[0],l=c[1],j=n.useState(""),b=Object(r.a)(j,2),m=b[0],h=b[1],p=n.useState(""),O=Object(r.a)(p,2),x=O[0],g=O[1],v=n.useState(""),S=Object(r.a)(v,2),w=S[0],C=S[1],y=n.useState(""),V=Object(r.a)(y,2),A=V[0],B=V[1],E=n.useState(""),T=Object(r.a)(E,2),D=T[0],I=T[1],k=n.useState(.59),P=Object(r.a)(k,2),F=P[0],M=P[1],L=""!==o&&o.length>=5,q=""!==m,J=""!==x,G=""!==w,U=""!==A,K=""!==D,R=.59!==F;return Object(u.jsx)("section",{children:Object(u.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),L&&q&&J&&G&&U&&K&&R){var t={id:Math.random(),name:o,number:parseInt(m),description:x,date:w,thumbnail:A,videoUrl:D,anime:void 0,studio:void 0};a(t,F),s.push("/")}},children:[Object(u.jsx)("h2",{children:"Create EpisodeObj"}),Object(u.jsxs)("label",{className:"input",children:["Name",Object(u.jsx)("input",{type:"text",onChange:function(e){l(e.target.value)},value:o,placeholder:"Cover"})]}),Object(u.jsxs)("label",{className:"input",children:["Number",Object(u.jsx)("input",{type:"number",onChange:function(e){h(e.target.value)},value:m,placeholder:"Cover"})]}),Object(u.jsxs)("label",{className:"input",children:["Description",Object(u.jsx)("input",{type:"text",onChange:function(e){g(e.target.value)},value:x,placeholder:"Cover"})]}),Object(u.jsxs)("label",{className:"input",children:["Date",Object(u.jsx)("input",{type:"text",onChange:function(e){C(e.target.value)},value:w,placeholder:"Cover"})]}),Object(u.jsxs)("label",{className:"input",children:["Thumbnail",Object(u.jsx)("input",{type:"text",onChange:function(e){B(e.target.value)},value:A,placeholder:"Cover"})]}),Object(u.jsxs)("label",{className:"input",children:["VideoUrl",Object(u.jsx)("input",{type:"text",onChange:function(e){I(e.target.value)},value:D,placeholder:"Cover"})]}),Object(u.jsx)(_.a,{disableClearable:!0,style:{width:"100%",margin:"16px"},id:"combo-box-demo",options:t,getOptionLabel:function(e){return e.label},renderInput:function(e){return Object(u.jsx)(N.a,Object(f.a)(Object(f.a)({},e),{},{label:"Studios",placeholder:"Add a tag"}))},onChange:function(e,t){M(t.id)},isOptionEqualToValue:function(e,t){return e.label===t.label}}),Object(u.jsx)("button",{className:"Btn",children:"Create Episode"})]})})}),C=function(e){var t=e.list,a=e.studioOptions,n=e.onCreateEpisode,s=Object(d.h)().id,i=parseFloat(s),c=Object(d.g)(),o=function(e){return function(){c.push("/studio-details/".concat(e))}},r=t.find((function(e){return e.id===i}));return r?Object(u.jsxs)("article",{className:"AnimeView",children:[Object(u.jsxs)("section",{className:"AnimeView__Info",children:[Object(u.jsx)("img",{className:"AnimeView__Image",src:r.cover,alt:"Anime--Cover.png"}),Object(u.jsxs)("div",{className:"AnimeView__Data",children:[Object(u.jsx)("p",{className:"AnimeView__Name",children:r.name}),Object(u.jsx)("div",{className:"AnimeView__Tags",children:r.tags.map((function(e,t){return Object(u.jsx)("div",{className:"AnimeView__Tag",children:e},t)}))}),Object(u.jsx)("p",{className:"AnimeView__Description",children:r.description}),Object(u.jsxs)("p",{className:"AnimeView__Studios",children:[Object(u.jsx)("b",{children:" Studios: "}),r.studios.map((function(e){return Object(u.jsx)("span",{className:"color clickable",onClick:o(e.id),children:e.name},e.id)}))]}),Object(u.jsx)("p",{className:"AnimeView__Status",children:r.status})]})]}),Object(u.jsxs)("section",{className:"AnimeView__Episodes",children:[Object(u.jsx)(h,{text:"Episodes",url:""}),Object(u.jsx)(m,{type:"Episode",listEpisode:r.episodes,withoutPadding:!0}),Object(u.jsx)(O,{url:"/anime-details/".concat(i,"/new-episode"),text:"Add Episode"})]}),Object(u.jsx)(d.b,{path:"/anime-details/:id/new-episode",children:Object(u.jsx)(w,{onCreate:function(e,t){n(i,e,t)},studioOptions:a})})]}):Object(u.jsx)(d.a,{to:"/404"})},y=(a(110),function(e){var t,a=e.list,n=Object(d.h)().id,s=parseFloat(n),i=a.find((function(e){return e.id===s}));return i?Object(u.jsxs)("article",{className:"EpisodeView",children:[Object(u.jsxs)("section",{className:"EpisodeView__Content",children:[Object(u.jsxs)("div",{className:"EpisodeView__Info",children:[Object(u.jsx)("img",{src:i.thumbnail,alt:""}),Object(u.jsxs)("div",{className:"EpisodeView__Data",children:[Object(u.jsx)("p",{className:"EpisodeView__Anime",children:null===(t=i.anime)||void 0===t?void 0:t.name}),Object(u.jsxs)("p",{className:"EpisodeView__Name",children:['"',i.name,'"']}),Object(u.jsx)("p",{className:"EpisodeView__Description",children:i.description}),Object(u.jsx)("p",{className:"EpisodeView__Date",children:i.date})]})]}),Object(u.jsxs)("div",{className:"EpisodeView__Player",children:[Object(u.jsx)("div",{className:"EpisodeView__VideoContainer",children:Object(u.jsx)("iframe",{src:i.videoUrl,className:"EpisodeView__Video",allow:"autoplay"})}),Object(u.jsxs)("div",{className:"EpisodeView__Controllers",children:[Object(u.jsxs)("div",{className:"Btn--Icon Btn--Icon--left",children:[Object(u.jsx)("button",{className:"Btn",children:"Previous"}),Object(u.jsx)("img",{className:"Btn__Icon",src:"".concat("/DangoTV","/images/General/leftIcon.svg"),alt:""})]}),Object(u.jsxs)("div",{className:"Btn--Box",children:[Object(u.jsx)("button",{className:"Btn Btn--Box"}),Object(u.jsx)("img",{className:"Btn__Icon",src:"".concat("/DangoTV","/images/General/menuIcon.svg"),alt:""})]}),Object(u.jsxs)("div",{className:"Btn--Icon Btn--Icon--right",children:[Object(u.jsx)("button",{className:"Btn",children:"next"}),Object(u.jsx)("img",{className:"Btn__Icon",src:"".concat("/DangoTV","/images/General/rightIcon.svg"),alt:""})]})]})]})]}),Object(u.jsx)("hr",{}),Object(u.jsx)("section",{className:"EpisodeView__Adds"})]}):Object(u.jsx)(d.a,{to:"/404"})}),V=a(19),A=a(72),B=Object(A.a)({palette:{primary:{main:"#c678dd"},secondary:{main:"#f44336"}}}),E=(a(111),function(e){var t=e.listStudio,a=Object(d.h)().id,n=parseFloat(a),s=t.find((function(e){return e.id===n}));return s?Object(u.jsxs)("article",{className:"StudioView",children:[Object(u.jsxs)("section",{className:"StudioView__Info",children:[Object(u.jsx)("img",{className:"StudioView__Logo",src:s.logo,alt:""}),Object(u.jsx)("p",{className:"StudioView__Name",children:s.name}),Object(u.jsx)("p",{className:"StudioView__Description",children:s.description}),Object(u.jsxs)("p",{className:"StudioView__Date",children:[Object(u.jsx)("b",{children:" Founded:"})," ",s.date]}),Object(u.jsx)(h,{text:"Best Animes",url:""}),Object(u.jsx)(m,{type:"Anime",listAnime:[]})]}),Object(u.jsx)("hr",{}),Object(u.jsx)("section",{className:"StudioView__News"})]}):Object(u.jsx)(d.a,{to:"/404"})});var T=function(){var e=[{id:0,img:"".concat("/DangoTV","/images/Banners/banner-naruto.png"),name:"Boruto: Naruto Next Generations"},{id:1,img:"".concat("/DangoTV","/images/Banners/banner-naruto.png"),name:"Naruto"},{id:2,img:"".concat("/DangoTV","/images/Banners/banner-naruto.png"),name:"Jujutsu Kaisen"}],t=s.a.useState([{id:0,name:"Mappa",logo:"".concat("/DangoTV","/images/StudiosLogos/Mappa_Logo.svg"),description:'MAPPA Co, Ltd. (Japanese: \u682a\u5f0f\u4f1a\u793eMAPPA, Hepburn: Kabushiki-gaisha MAPPA) is a Japanese animation studio. The studio has produced anime works including Kids on the Slope, Terror in Resonance, Yuri!!! on Ice, In This Corner of the World, Kakegurui, Banana Fish, Zombieland Saga, Dororo, Dorohedoro, Jujutsu Kaisen and the final season of Attack on Titan.\n         "MAPPA" is an acronym for Maruyama Animation Produce Project Association. It was founded on June 14, 2011, by Masao Maruyama, a founder and former producer of Madhouse In April 2016, Maruyama resigned his position in the studio and founded a new studio, Studio M2',date:"October 1998"}]),a=Object(r.a)(t,2),n=a[0],i=(a[1],s.a.useState([{id:0,number:1,name:"Ryomen Sukuna",description:"Yuuji es un joven que posee un talism\xe1n muy poderoso y \xe9l ni siquiera es consciente de ello. Pero un d\xeda se topa con Fushiguro y su vida dar\xe1 un cambio radical.",date:"Oct 2, 2020",thumbnail:"".concat("/DangoTV","/images/Thumbnails/jujutsu/jujutsu_episode_1.jpg"),videoUrl:"https://drive.google.com/file/d/15mi9p2nT10lqj9qJEPHwhnFsGV0U9ohO/preview",anime:void 0,studio:n[0]},{id:1,number:2,name:"Por m\xed",description:"El hecho de comerse el dedo de Sukuna le supondr\xe1 un grave problema a Yuuji, puesto que ahora tienen que ejecutarlo. Pero tiene un modo temporal de salvarse.",date:"Oct 9, 2020",thumbnail:"".concat("/DangoTV","/images/Thumbnails/jujutsu/jujutsu_episode_2.jpg"),videoUrl:"https://drive.google.com/file/d/14tAZoa0yUvWWSKZVlB10SDZ3cvwR3gdn/preview",anime:void 0,studio:n[0]},{id:2,number:3,name:"Chica de acero",description:"Yuuji deber\xe1 demostrar que es apto para formar parte de la Preparatoria de Hechicer\xeda. Adem\xe1s, conocer\xe1n a la tercera integrante del equipo.",date:"Oct 16, 2020",thumbnail:"".concat("/DangoTV","/images/Thumbnails/jujutsu/jujutsu_episode_3.jpg"),videoUrl:"https://drive.google.com/file/d/1zOoi8-LnWdqh3WgsMrRDsLLri3H3CB9D/preview",anime:void 0,studio:n[0]}])),c=Object(r.a)(i,2),j=c[0],b=c[1],p=s.a.useState([{id:Math.random(),name:"Jujutsu Kaisen",cover:"".concat("/DangoTV","/images/Covers/jujutsu-kaisen-cover.png"),description:"Yuji Itadori is a boy with tremendous physical strength, though he lives a completely ordinary high school life. \n               One day, to save a classmate who has been attacked by curses, he eats the finger of Ryomen Sukuna, taking the curse into his own soul. \n               From then on, he shares one body with Ryomen Sukuna. Guided by the most powerful of sorcerers, Satoru Gojo, Itadori is admitted to Tokyo Jujutsu High School, \n               an organization that fights the curses... and thus begins the heroic tale of a boy who became a curse to exorcise a curse, a life from which he could never turn back.",status:"Finish",tags:["Action","Shonen","Supernatural"],episodes:[j[0],j[1],j[2]],studios:[n[0]]}]),O=Object(r.a)(p,2),x=O[0],f=O[1];j[0].anime=x[0],j[1].anime=x[0],j[2].anime=x[0];var _=s.a.useState([{label:"test 1"},{label:"test 2"},{label:"Animals"}]),N=Object(r.a)(_,2),w=N[0],A=N[1],T=n.map((function(e){return{label:e.name,id:e.id}})),D=s.a.useState(T),I=Object(r.a)(D,2),k=I[0];return I[1],Object(u.jsx)(V.c,{theme:B,children:Object(u.jsxs)(l.a,{children:[Object(u.jsx)(g,{}),Object(u.jsxs)(d.d,{children:[Object(u.jsxs)(d.b,{exact:!0,path:"/",children:[Object(u.jsx)(v,{animeList:e}),Object(u.jsxs)("article",{className:"Main",children:[Object(u.jsxs)("section",{className:"Main__Content",children:[Object(u.jsx)(h,{text:"Latest Episodes",url:""}),Object(u.jsx)(m,{type:"Episode",listEpisode:j}),Object(u.jsx)(h,{text:"Latest Animes",url:""}),Object(u.jsx)(m,{type:"Anime",listAnime:x,withoutPadding:!0})]}),Object(u.jsx)("hr",{}),Object(u.jsx)("section",{className:"Main__News"})]})]}),Object(u.jsx)(d.b,{path:"/anime-details/:id",children:Object(u.jsx)(C,{list:x,studioOptions:k,onCreateEpisode:function(e,t,a){console.log("nuevo elemento!",t);var s=x.findIndex((function(t){return t.id===e})),i=n.findIndex((function(e){return e.id===a}));t.anime=x[s],t.studio=n[i],console.log(t);var c=[].concat(Object(o.a)(j),[t]);b(c),x[s].episodes=[].concat(Object(o.a)(x[s].episodes),[t])}})}),Object(u.jsx)(d.b,{path:"/episode-details/:id",children:Object(u.jsx)(y,{list:j})}),Object(u.jsx)(d.b,{path:"/studio-details/:id",children:Object(u.jsx)(E,{listStudio:n,listAnime:[]})}),Object(u.jsx)(d.b,{path:"/Forms",children:Object(u.jsx)(S,{onCreate:function(e){console.log("nuevo elemento!",e);var t=[].concat(Object(o.a)(x),[e]);f(t)},tagOptions:w,addTagOption:function(e){A([].concat(Object(o.a)(w),[e]))}})}),Object(u.jsx)(d.b,{path:"/Studios",children:Object(u.jsx)(h,{text:"Studios",url:""})})]})]})})},D=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,154)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,c=t.getTTFB;a(e),n(e),s(e),i(e),c(e)}))};c.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(T,{})}),document.getElementById("root")),D()},92:function(e,t,a){},93:function(e,t,a){},94:function(e,t,a){},95:function(e,t,a){}},[[112,1,2]]]);
//# sourceMappingURL=main.b089aa69.chunk.js.map