(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{193:function(t,e,n){var content=n(199);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("117550d2",content,!0,{sourceMap:!1})},194:function(t,e,n){var content=n(201);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("620635ff",content,!0,{sourceMap:!1})},195:function(t,e,n){"use strict";n(83),n(197);var r=n(203),o=n.n(r),c={props:{url:{type:String,required:!0},width:{type:Number,default:0}},data:function(){return{debounceTimer:null}},computed:{videoId:function(){return/v=.+$/.test(this.url)?this.url.match(/v=(.+)$/)[1]:this.url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/)[1]},videoWidth:function(){return this.width>0?this.width:this.$el.offsetWidth},videoHeight:function(){return this.width>0?9*this.width/16:this.$el.offsetHeight}},watch:{width:function(){this.changeYoutubeSize()}},mounted:function(){var t=this;this.loadYoutube(),setTimeout((function(){t.changeYoutubeSize()}),1e3)},methods:{loadYoutube:function(){this.videoId&&o()(this.$refs.player,{videoId:this.videoId,width:this.videoWidth,height:this.videoHeight})},changeYoutubeSize:function(){var t=this;clearTimeout(this.debounceTimer),this.debounceTimer=setTimeout((function(){var e=document.getElementById(t.videoId);e&&(e.setAttribute("width",t.videoWidth),e.setAttribute("height",t.videoHeight))}),200)}}},d=(n(198),n(11)),component=Object(d.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"media-youtube my-4"},[e("div",{staticClass:"youtube-wrapper"},[e("div",{ref:"player",staticClass:"youtube-player",attrs:{id:this.videoId}})])])}),[],!1,null,"831f7524",null);e.a=component.exports},196:function(t,e,n){"use strict";n(27),n(197);var r={props:{name:{type:String,default:""},transparent:{type:Boolean,default:!1},isFullPath:{type:Boolean,default:!1},center:{type:Boolean,default:!1},width:{type:Number,default:0,require:!1}},computed:{imageSrc:function(){return this.isFullPath?this.name:"/images".concat(this.$route.path,"/").concat(this.name)},imageWidth:function(){return this.width>0&&this.width},imageStyle:function(){return this.center?"margin-left: auto; margin-right: auto;":""}}},o=(n(200),n(11)),component=Object(o.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("img",{staticClass:"my-4",class:{"transparent-background":this.transparent},style:this.imageStyle,attrs:{src:this.imageSrc,width:this.imageWidth}})}),[],!1,null,"0e8f1c14",null);e.a=component.exports},198:function(t,e,n){"use strict";var r=n(193);n.n(r).a},199:function(t,e,n){(e=n(13)(!1)).push([t.i,".media-youtube[data-v-831f7524]{display:block}.youtube-wrapper[data-v-831f7524]{position:relative;height:0;padding-bottom:56.25%}.youtube-player iframe.workYoutube-player[data-v-831f7524]{position:absolute;top:0;left:0;width:100%;height:100%}",""]),t.exports=e},200:function(t,e,n){"use strict";var r=n(194);n.n(r).a},201:function(t,e,n){var r=n(13),o=n(112),c=n(202);e=r(!1);var d=o(c);e.push([t.i,".transparent-background[data-v-0e8f1c14]{background-image:url("+d+");background-size:25px 25px;margin:.5em 0}",""]),t.exports=e},202:function(t,e,n){t.exports=n.p+"img/transparent-background.38b30e9.jpg"},222:function(t,e,n){var content=n(295);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("573dfc35",content,!0,{sourceMap:!1})},223:function(t,e,n){var content=n(298);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("2074b0d4",content,!0,{sourceMap:!1})},294:function(t,e,n){"use strict";var r=n(222);n.n(r).a},295:function(t,e,n){(e=n(13)(!1)).push([t.i,".media-vimeo[data-v-3f156140]{display:block}",""]),t.exports=e},296:function(t,e,n){var map={"./2019-muztv-awards.md":[216,21],"./2019-pilot-edge-zenit.md":[217,22],"./2021-atv-rebranding.md":[218,23],"./2021-gh-selector.md":[219,24]};function r(t){if(!n.o(map,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=map[t],r=e[0];return n.e(e[1]).then((function(){return n.t(r,7)}))}r.keys=function(){return Object.keys(map)},r.id=296,t.exports=r},297:function(t,e,n){"use strict";var r=n(223);n.n(r).a},298:function(t,e,n){(e=n(13)(!1)).push([t.i,".project[data-v-55e5e990]{padding-left:5vw;padding-right:5vw}",""]),t.exports=e},334:function(t,e,n){"use strict";n.r(e);var r=n(196),o=(n(83),{props:{url:{type:String,required:!0}},computed:{videoId:function(){return/vimeo.com\/\d+$/.test(this.url)?this.url.match(/vimeo.com\/(\d+)$/)[1]:/\d+/.test(this.url)?this.url:""},videoUrl:function(){return"https://player.vimeo.com/video/".concat(this.videoId,"?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479")}}}),c=(n(294),n(11)),d=Object(c.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"media-vimeo my-4"},[e("div",{staticStyle:{padding:"56.25% 0 0 0",position:"relative"}},[e("iframe",{staticStyle:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"},attrs:{src:this.videoUrl,frameborder:"0",allow:"autoplay; fullscreen; picture-in-picture",allowfullscreen:"",title:"LogoTransformations"}})]),this._v(" "),e("script",{attrs:{src:"https://player.vimeo.com/api/player.js"}})])}),[],!1,null,"3f156140",null).exports,l=n(195),h={data:function(){return{slug:"",markdownContent:{},attributes:{},icons:[],date:""}},created:function(){var t=this;this.markdownContent=function(){return n(296)("./"+t.$route.params.slug+".md").then((function(e){t.attributes=e.attributes;var n=new Date(e.attributes.date);return t.date=n.toLocaleDateString("en-GB",{year:"numeric",month:"long",day:"numeric"}),{extends:e.vue.component,components:{MediaImage:r.a,MediaVimeo:d,MediaYoutube:l.a}}})).catch((function(t){console.log("ERROR in markdown parsing",t)}))}}},f=(n(297),Object(c.a)(h,(function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"project container mx-auto"},[e("header",{staticClass:"flex justify-center mb-8"},[e("h1",[this._v(this._s(this.attributes.title))])]),e(this.markdownContent,{tag:"component"})],1)}),[],!1,null,"55e5e990",null));e.default=f.exports}}]);