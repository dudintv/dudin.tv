(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{202:function(t,e,r){var content=r(208);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(17).default)("d7e361c6",content,!0,{sourceMap:!1})},203:function(t,e,r){var content=r(210);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(17).default)("f4143e50",content,!0,{sourceMap:!1})},204:function(t,e,r){"use strict";r(206),r(123);var n=r(212),o=r.n(n),c={props:{url:{type:String,required:!0},width:{type:Number,default:0}},data:function(){return{debounceTimer:null}},computed:{videoId:function(){return/v=.+$/.test(this.url)?this.url.match(/v=(.+)$/)[1]:this.url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/)[1]},videoWidth:function(){return this.width>0?this.width:this.$el.offsetWidth},videoHeight:function(){return this.width>0?9*this.width/16:this.$el.offsetHeight}},watch:{width:function(){this.changeYoutubeSize()}},mounted:function(){var t=this;this.loadYoutube(),setTimeout((function(){t.changeYoutubeSize()}),1e3)},methods:{loadYoutube:function(){this.videoId&&o()(this.$refs.player,{videoId:this.videoId,width:this.videoWidth,height:this.videoHeight})},changeYoutubeSize:function(){var t=this;clearTimeout(this.debounceTimer),this.debounceTimer=setTimeout((function(){var e=document.getElementById(t.videoId);e&&(e.setAttribute("width",t.videoWidth),e.setAttribute("height",t.videoHeight))}),200)}}},d=(r(207),r(12)),component=Object(d.a)(c,(function(){var t=this._self._c;return t("div",{staticClass:"media-youtube my-4"},[t("div",{staticClass:"youtube-wrapper"},[t("div",{ref:"player",staticClass:"youtube-player",attrs:{id:this.videoId}})])])}),[],!1,null,"35f22485",null);e.a=component.exports},205:function(t,e,r){"use strict";r(206),r(27);var n={props:{name:{type:String,default:""},transparent:{type:Boolean,default:!1},isFullPath:{type:Boolean,default:!1},center:{type:Boolean,default:!1},width:{type:Number,default:0,require:!1}},computed:{imageSrc:function(){return this.isFullPath?this.name:"/images".concat(this.$route.path,"/").concat(this.name)},imageWidth:function(){return this.width>0&&this.width},imageStyle:function(){return this.center?"margin-left: auto; margin-right: auto;":""}}},o=(r(209),r(12)),component=Object(o.a)(n,(function(){var t=this;return(0,t._self._c)("img",{staticClass:"my-4",class:{"transparent-background":t.transparent},style:t.imageStyle,attrs:{src:t.imageSrc,width:t.imageWidth}})}),[],!1,null,"f68fb96c",null);e.a=component.exports},207:function(t,e,r){"use strict";r(202)},208:function(t,e,r){var n=r(16)(!1);n.push([t.i,".media-youtube[data-v-35f22485]{display:block}.youtube-wrapper[data-v-35f22485]{position:relative;height:0;padding-bottom:56.25%}.youtube-player iframe.workYoutube-player[data-v-35f22485]{position:absolute;top:0;left:0;width:100%;height:100%}",""]),t.exports=n},209:function(t,e,r){"use strict";r(203)},210:function(t,e,r){var n=r(16),o=r(124),c=r(211),d=n(!1),l=o(c);d.push([t.i,".transparent-background[data-v-f68fb96c]{background-image:url("+l+");background-size:25px 25px;margin:.5em 0}",""]),t.exports=d},211:function(t,e,r){t.exports=r.p+"img/transparent-background.b9de4bc.jpg"},254:function(t,e,r){var content=r(309);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(17).default)("b5cefd7e",content,!0,{sourceMap:!1})},255:function(t,e,r){var content=r(311);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(17).default)("e1b37d4c",content,!0,{sourceMap:!1})},256:function(t,e,r){var content=r(315);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(17).default)("9bb3499a",content,!0,{sourceMap:!1})},257:function(t,e,r){var content=r(317);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(17).default)("2dcdbf2a",content,!0,{sourceMap:!1})},258:function(t,e,r){var content=r(320);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(17).default)("3a28170e",content,!0,{sourceMap:!1})},308:function(t,e,r){"use strict";r(254)},309:function(t,e,r){var n=r(16)(!1);n.push([t.i,".file[data-v-3d2e5f79]{background:linear-gradient(180deg,hsla(0,0%,100%,.15),rgba(53,6,6,.15)),linear-gradient(108.04deg,#6c3392,#79071c);box-shadow:0 2px 8px rgba(0,0,0,.1);padding:.5rem 1rem;margin-bottom:1rem;color:#fff;display:inline-block}.download-icon[data-v-3d2e5f79]{display:inline;margin-right:.5rem}",""]),t.exports=n},310:function(t,e,r){"use strict";r(255)},311:function(t,e,r){var n=r(16)(!1);n.push([t.i,'.interface-description[data-v-265161c4]{position:relative;margin:4rem calc(-50vw + 50%);width:100vw;padding:0 2rem}.interface-description-container[data-v-265161c4]{max-width:1500px;margin:0 auto}.head-image[data-v-265161c4],.tail-image[data-v-265161c4]{width:100%;display:flex;justify-content:center;padding:0 4rem}.head-svg[data-v-265161c4],.tail-svg[data-v-265161c4]{height:100%}.content[data-v-265161c4]{width:100%;display:grid;grid-template-columns:auto 1fr;grid-template-rows:1fr;grid-template-areas:"interface description";justify-content:center;position:relative;z-index:20}.interface[data-v-265161c4]{grid-area:interface;background:linear-gradient(90deg,#7c7c7c 0,#5a5a5a);padding:2rem 0 2rem 2rem;justify-content:flex-end}.description[data-v-265161c4],.interface[data-v-265161c4]{display:flex;align-items:center}.description[data-v-265161c4]{grid-area:description;background:linear-gradient(130deg,#375a95,#244273);padding:1rem 2rem;flex-shrink:1;min-width:20rem}@media(max-width:1200px){.interface-description[data-v-265161c4]{padding:0}}@media(max-width:1024px){.content[data-v-265161c4]{grid-template-columns:1fr;grid-template-rows:auto 1fr;grid-template-areas:"interface" "description"}.interface[data-v-265161c4]{padding:2rem 2rem 0;justify-content:center;align-items:center}}',""]),t.exports=n},312:function(t,e,r){"use strict";r(313)("link",(function(t){return function(e){return t(this,"a","href",e)}}))},313:function(t,e,r){var n=r(3),o=r(8),c=r(36),d=/"/g,l=function(t,e,r,n){var o=String(c(t)),l="<"+e;return""!==r&&(l+=" "+r+'="'+String(n).replace(d,"&quot;")+'"'),l+">"+o+"</"+e+">"};t.exports=function(t,e){var r={};r[t]=e(l),n(n.P+n.F*o((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3})),"String",r)}},314:function(t,e,r){"use strict";r(256)},315:function(t,e,r){var n=r(16)(!1);n.push([t.i,".script-hero[data-v-6f919149]{display:flex;padding-right:1rem;margin-bottom:-7rem}.thumbnail[data-v-6f919149]{position:relative;top:-13rem;display:inline-block;padding-right:4rem}.thumbnail .thumbnail-image[data-v-6f919149]{position:absolute;top:14rem;left:12rem;transform:translateY(-50%) translateX(-50%)}@media(max-width:1024px){.script-hero[data-v-6f919149]{flex-direction:column;padding:0 4rem 0 1rem;margin-bottom:1rem}.thumbnail[data-v-6f919149]{top:-9rem}}@media(max-width:640px){.script-hero[data-v-6f919149]{padding:0}.thumbnail[data-v-6f919149]{top:-6rem;left:-2rem}.tip[data-v-6f919149]{display:none}}.content[data-v-6f919149]{position:relative;z-index:1000;top:-2rem}.scripts-and-category[data-v-6f919149]{font-size:.8rem;font-weight:700}.scripts-and-category .scripts[data-v-6f919149]{color:#c9b9f8}.scripts-and-category .category[data-v-6f919149]{color:#c488ed}.title[data-v-6f919149]{padding-top:1rem}.title .title-text[data-v-6f919149]{margin-right:1rem;min-width:7rem}.title .copy-code[data-v-6f919149]{position:relative;top:-4px}.buttons[data-v-6f919149]{margin-top:3rem}",""]),t.exports=n},316:function(t,e,r){"use strict";r(257)},317:function(t,e,r){var n=r(16)(!1);n.push([t.i,".bg[data-v-1a137a44]{background:#1e2e49;padding:2rem}details[data-v-1a137a44]{background:linear-gradient(95.16deg,#0f336f,#112545);border:1px dashed #405880;padding:0;margin-bottom:.3rem}details summary[data-v-1a137a44]{position:relative;padding:1rem;cursor:pointer;text-align:center;margin:0}details summary[data-v-1a137a44]:hover{background-color:hsla(0,0%,100%,.1)}details summary .title[data-v-1a137a44]{font-size:1.5rem;line-height:.5em}details .code[data-v-1a137a44]{padding:1rem}.tip[data-v-1a137a44]{display:block;color:hsla(0,0%,100%,.5);width:100%;text-align:center}.home-page[data-v-1a137a44]{transform:translateY(-50%)}",""]),t.exports=n},318:function(t,e,r){var map={"./9-part-texture.md":[223,25],"./ae-to-vizrt.md":[224,26],"./alpha-by-angle.md":[225,27],"./alpha-by-distance.md":[226,28],"./animated-omo.md":[227,29],"./anims-to-directors.md":[228,30],"./array-to-lines.md":[229,31],"./bg.md":[230,32],"./excel-parser.md":[231,33],"./flex-box.md":[232,34],"./json-parser.md":[233,35],"./multi-follow.md":[234,36],"./page-scroll.md":[235,37],"./plugin-omo.md":[236,38],"./random-position.md":[237,39],"./random-rotation.md":[238,40],"./random-scale.md":[239,41],"./temo-sprites.md":[240,42],"./time-omo.md":[241,43],"./tree-link.md":[242,44]};function n(t){if(!r.o(map,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=map[t],n=e[0];return r.e(e[1]).then((function(){return r.t(n,7)}))}n.keys=function(){return Object.keys(map)},n.id=318,t.exports=n},319:function(t,e,r){"use strict";r(258)},320:function(t,e,r){var n=r(16)(!1);n.push([t.i,".script-content[data-v-6bdc4a3d]{padding-left:5vw;padding-right:5vw}",""]),t.exports=n},341:function(t,e,r){"use strict";r.r(e);r(42),r(22),r(37),r(53),r(54);var n=r(25),o=r(4),c=(r(41),r(205)),d=r(204),l=(r(27),{props:{name:{type:String,default:""}},computed:{src:function(){return"/images".concat(this.$route.path,"/").concat(this.name)}}}),h=(r(308),r(12)),f=Object(h.a)(l,(function(){var t=this,e=t._self._c;return e("a",{staticClass:"file",attrs:{href:t.src}},[e("svg",{staticClass:"download-icon",attrs:{width:"14",height:"22",viewBox:"0 0 14 22",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M0 17.5H14V15.5H0V17.5ZM14 6.5H10V0.5H4V6.5H0L7 13.5L14 6.5Z",fill:"white"}})]),t._v(t._s(t.name))])}),[],!1,null,"3d2e5f79",null).exports,m={props:{image:{type:String,default:""}},computed:{src:function(){return"/images".concat(this.$route.path,"/").concat(this.image)}}},v=(r(310),Object(h.a)(m,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"interface-description"},[e("div",{staticClass:"interface-description-container"},[e("div",{staticClass:"head-image"},[e("svg",{staticClass:"head-svg",attrs:{width:"831",height:"75",viewBox:"0 0 831 75",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{staticClass:"head-path",attrs:{d:"M354.712 49.7283C246.838 3.55007 204.965 51.6352 89.7549 4.63478C46.1863 -13.1392 16.2228 22.3165 0 75H831C815.614 36.7859 777.103 16.2286 699.547 8.27721C586.448 -3.31826 462.586 95.9065 354.712 49.7283Z",fill:"url(#head_linear)"}}),t._v(" "),e("defs",[e("linearGradient",{attrs:{id:"head_linear",x1:"415.5",y1:"0",x2:"415.5",y2:"75",gradientUnits:"userSpaceOnUse"}},[e("stop",{attrs:{"stop-color":"#5B219B"}}),t._v(" "),e("stop",{attrs:{offset:"1","stop-color":"#183058"}})],1)],1)])]),e("div",{staticClass:"content"},[e("div",{staticClass:"interface"},[e("img",{attrs:{src:t.src}})]),e("div",{staticClass:"description"},[e("div",{staticClass:"slot"},[t._t("default")],2)])]),e("div",{staticClass:"tail-image"},[e("svg",{staticClass:"tail-svg",attrs:{width:"747",height:"54",viewBox:"0 0 747 54",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{staticClass:"tail-path",attrs:{d:"M211.5 46C313 60.9999 396 51.9999 518 36.4998C640 20.9998 702.5 66.7229 746.5 7.24792e-05L-4.6933e-06 0.00013774C18.5 36.4998 110 31 211.5 46Z",fill:"url(#tail_linear)"}}),t._v(" "),e("defs",[e("linearGradient",{attrs:{id:"tail_linear",x1:"379.5",y1:"54",x2:"379.5",y2:"3.39309e-05",gradientUnits:"userSpaceOnUse"}},[e("stop",{attrs:{"stop-color":"#5B219B"}}),t._v(" "),e("stop",{attrs:{offset:"1","stop-color":"#183058"}})],1)],1)])])])])}),[],!1,null,"265161c4",null).exports),w=(r(312),{components:{MediaImage:c.a},props:{attributes:{type:Object,default:function(){}},code:{type:String,default:function(){return""}}},data:function(){return{examples:[]}},computed:{gradColorBegin:function(){return this.attributes.category?this.$store.state.gradients[this.attributes.category][0]:""},gradColorEnd:function(){return this.attributes.category?this.$store.state.gradients[this.attributes.category][1]:""}},methods:{copyCode:function(){this.$store.dispatch("copyCode",{attributes:this.attributes})}}}),y=(r(314),Object(h.a)(w,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"script-hero"},[e("div",{staticClass:"thumbnail"},[e("div",{staticClass:"thumbnail-splash"},[e("svg",{attrs:{width:"376",height:"404",viewBox:"0 0 376 404",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M27.2905 0C27.2905 0 5.2906 204 138.791 163.5C272.291 123 381.291 146 375.791 286.5C370.291 427 193.79 428.5 83.2906 359C-27.358 289.406 -7.20937 112 27.2905 0Z",fill:"url(#paint0_linear)"}}),t._v(" "),e("defs",[e("linearGradient",{attrs:{id:"paint0_linear",x1:"31.7905",y1:"-4.99997",x2:"378.791",y2:"399",gradientUnits:"userSpaceOnUse"}},[e("stop",{attrs:{"stop-color":t.gradColorBegin}}),t._v(" "),e("stop",{attrs:{offset:"1","stop-color":t.gradColorEnd}})],1)],1)])]),e("media-image",{staticClass:"thumbnail-image",attrs:{name:"thumbnail.svg"}})],1),e("div",{staticClass:"content"},[e("div",{staticClass:"scripts-and-category"},[e("span",{staticClass:"scripts"},[t._v("scripts > ")]),e("span",{staticClass:"category",style:{color:t.gradColorBegin}},[t._v(t._s(t.attributes.category))])]),e("div",{staticClass:"title flex"},[e("h1",{staticClass:"title-text text-left"},[t._v(t._s(t.attributes.title))]),e("a",{staticClass:"red-button copy-code",on:{click:t.copyCode}},[e("svg",{staticClass:"icon svg-copy-icon",attrs:{width:"18",height:"22",viewBox:"0 0 18 22",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M13.2632 0.5H1.89474C0.847895 0.5 0 1.35432 0 2.40909V15.7727H1.89474V2.40909H13.2632V0.5ZM16.1053 4.31818H5.68421C4.63737 4.31818 3.78947 5.1725 3.78947 6.22727V19.5909C3.78947 20.6457 4.63737 21.5 5.68421 21.5H16.1053C17.1521 21.5 18 20.6457 18 19.5909V6.22727C18 5.1725 17.1521 4.31818 16.1053 4.31818ZM16.1053 19.5909H5.68421V6.22727H16.1053V19.5909Z",fill:"#E4D4E9"}})]),e("span",[t._v("Copy script")]),e("div",{staticClass:"tip"},[e("svg",{staticClass:"icon svg-tip-arrow",attrs:{width:"43",height:"56",viewBox:"0 0 43 56",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M11.6463 54.3536C11.8415 54.5488 12.1581 54.5488 12.3534 54.3536L15.5354 51.1716C15.7306 50.9763 15.7306 50.6597 15.5354 50.4645C15.3401 50.2692 15.0235 50.2692 14.8283 50.4645L11.9998 53.2929L9.1714 50.4645C8.97614 50.2692 8.65956 50.2692 8.4643 50.4645C8.26904 50.6597 8.26904 50.9763 8.4643 51.1716L11.6463 54.3536ZM37.9997 5.5C28.4987 5.5 21.8532 11.1704 17.6113 20.0342C13.3781 28.8796 11.4998 40.9644 11.4998 54L12.4998 54C12.4998 41.0356 14.3715 29.1204 18.5133 20.4658C22.6464 11.8296 29.0008 6.5 37.9997 6.5L37.9997 5.5Z",fill:"#C488ED"}})]),t._m(0)])])]),e("p",{staticClass:"description"},[t._v(t._s(t.attributes.description))]),e("div",{staticClass:"buttons"},[e("a",{staticClass:"red-button home-page",attrs:{href:"https://github.com/dudintv/vizartist-scripts/tree/master/".concat(t.attributes.path),target:"_blank"}},[e("svg",{staticClass:"icon svg-open-new-window",attrs:{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M16 16H2V2H9V0H2C0.89 0 0 0.9 0 2V16C0 17.1 0.89 18 2 18H16C17.1 18 18 17.1 18 16V9H16V16ZM11 0V2H14.59L4.76 11.83L6.17 13.24L16 3.41V7H18V0H11Z",fill:"white"}})]),e("span",[t._v("Script home page on GitHub")])]),t._l(t.examples,(function(r){return e("div",{staticClass:"example"},[e("a",{staticClass:"red-button example",attrs:{href:r.link}},[e("svg",{staticClass:"icon svg-download",attrs:{width:"14",height:"18",viewBox:"0 0 14 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M0 17.5H14V15.5H0V17.5ZM14 6.5H10V0.5H4V6.5H0L7 13.5L14 6.5Z",fill:"white"}})]),e("span",[t._v(t._s(r.name))])])])})),t.examples.length>0?e("span",{staticClass:"note"},[t._v("NOTE: The example scene may contain not the latest version of the script!")]):t._e()],2)])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"tip-text"},[e("strong",[t._v("One-click copying code.")]),e("br"),e("i",[t._v("Be sure, you always")]),e("br"),e("i",[t._v("get the latest version!")])])}],!1,null,"6f919149",null).exports),x=r(117),C=(r(129),r(130),r(131),{components:{VueCodeHighlight:x.a},props:{attributes:{type:Object,default:function(){}},code:{type:String,default:function(){return""}}}}),_=(r(316),Object(h.a)(C,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"cource-code"},[e("div",{staticClass:"bg"},[e("h2",{staticClass:"my-2"},[t._v("Source code")]),t.code?e("details",[t._m(0),e("div",{staticClass:"code"},[e("vue-code-highlight",{attrs:{language:"basic"}},[t._v(t._s(t.code))])],1)]):t._e(),t._m(1)]),e("a",{staticClass:"red-button home-page mx-auto",attrs:{href:"https://github.com/dudintv/vizartist-scripts/tree/master/".concat(t.attributes.path),target:"_blank"}},[e("svg",{staticClass:"icon svg-open-new-window",attrs:{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M16 16H2V2H9V0H2C0.89 0 0 0.9 0 2V16C0 17.1 0.89 18 2 18H16C17.1 18 18 17.1 18 16V9H16V16ZM11 0V2H14.59L4.76 11.83L6.17 13.24L16 3.41V7H18V0H11Z",fill:"white"}})]),e("span",[t._v("Script home page on GitHub")])])])}),[function(){var t=this._self._c;return t("summary",[t("span",{staticClass:"title"},[this._v("show source code")])])},function(){var t=this._self._c;return t("span",{staticClass:"tip"},[this._v("automatically pulls the latest version from my GitHub repository "),t("br"),t("br")])}],!1,null,"1a137a44",null).exports),H={data:function(){return{isThreejsLoaded:!1}},watch:{isThreejsLoaded:function(){this.startThreejs()}},mounted:function(){this.startThreejs()},methods:{startThreejs:function(){if(window.THREE){var t=window.THREE,e=new t.Scene,canvas=this.$refs.canvas,r=new t.WebGLRenderer({canvas:canvas,antialias:!0,alpha:!0}),n=800,o=300;r.setSize(n,o);var c=new t.BoxGeometry(3,.4,.04),d=new t.MeshBasicMaterial({color:43656}),l=new t.Mesh(c,d),h=new t.Mesh(c,d);l.position.y=.3,h.position.y=-.3,e.add(l),e.add(h);var f=new t.BoxGeometry(1.2,1.2,.04),m=new t.MeshBasicMaterial({color:43775}),v=new t.Mesh(f,m);e.add(v);var w=new t.PerspectiveCamera(45,n/o);w.position.z=3,e.add(w);!function n(){var o=(new t.Box3).setFromObject(l),c=(new t.Box3).setFromObject(h);v.position.x=Math.max(o.max.x,c.max.x)+v.geometry.parameters.width/2,r.render(e,w),window.requestAnimationFrame(n)}()}}},head:function(){var t=this;return{script:[{hid:"threejs",src:"https://unpkg.com/three@0.142.0/build/three.js",type:"module",defer:!0,callback:function(){console.log("------------\x3e THREE IS LOADED ;)"),t.isThreejsLoaded=!0}}]}}};function M(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function O(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?M(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):M(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var j={MultiFollow:Object(h.a)(H,(function(){var t=this._self._c;return t("div",[t("canvas",{ref:"canvas",staticStyle:{width:"100%",height:"100%"},attrs:{id:"multi-follow"}})])}),[],!1,null,"ef88687a",null).exports},k={components:{ScriptHero:y,SourceCode:_},data:function(){return{markdownContent:{},attributes:{},code:""}},computed:{ogPageUrl:function(){return"https://dudin.tv".concat(this.$route.path,"/")},ogImagePath:function(){return"".concat("https://dudin.tv","/images/scripts/").concat(this.$route.params.slug,"/opengraph.png")}},created:function(){var t=this;this.markdownContent=function(){return r(318)("./"+t.$route.params.slug+".md").then(function(){var e=Object(o.a)(regeneratorRuntime.mark((function e(r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.attributes=r.attributes,t.attributes.path&&t.attributes.file?fetch("https://raw.githubusercontent.com/dudintv/vizartist-scripts/master/".concat(t.attributes.path,"/").concat(t.attributes.file)).then((function(t){return t.text()})).then((function(code){t.code=code})):t.code="",e.abrupt("return",{extends:r.vue.component,components:O({InterfaceDescription:v,MediaImage:c.a,MediaYoutube:d.a,MediaFile:f},j)});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(t){console.log("ERROR in markdown parsing",t)}))}},head:function(){return{title:this.attributes.title,meta:[{hid:"og:site_name",property:"og:site_name",content:"dudin.tv"},{hid:"og:url",property:"og:url",content:this.ogPageUrl},{hid:"og:type",property:"og:type",content:"article"},{hid:"og:type",property:"article:author",content:"Dmitry Dudin"},{hid:"og:title",property:"og:title",content:this.attributes.title},{hid:"og:description",property:"og:description",content:this.attributes.description},{hid:"og:image",property:"og:image",content:this.ogImagePath},{hid:"og:image:alt",property:"og:image:alt",content:'"'.concat(this.attributes.title,'" script from Dmitry Dudin')},{hid:"og:image:width",property:"og:image:width",content:"1200"},{hid:"og:image:height",property:"og:image:height",content:"627"},{hid:"fb:app_id",property:"fb:app_id",content:"2634632720190560"}]}}},S=k,V=(r(319),Object(h.a)(S,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"script-content container mx-auto"},[e("ScriptHero",{attrs:{attributes:t.attributes,code:t.code}}),e(t.markdownContent,{tag:"component"}),e("SourceCode",{attrs:{attributes:t.attributes,code:t.code}})],1)}),[],!1,null,"6bdc4a3d",null));e.default=V.exports}}]);