(self.webpackChunkmomentum_extension=self.webpackChunkmomentum_extension||[]).push([[206],{7788:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var a=function(t,e){var a,n=t[1]||"",o=t[3];if(!o)return n;if(e&&"function"==typeof btoa){var s=(a=o,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=o.sources.map((function(t){return"/*# sourceURL="+o.sourceRoot+t+" */"}));return[n].concat(i).concat([s]).join("\n")}return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+a+"}":a})).join("")},e.i=function(t,a){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},o=0;o<this.length;o++){var s=this[o][0];null!=s&&(n[s]=!0)}for(o=0;o<t.length;o++){var i=t[o];null!=i[0]&&n[i[0]]||(a&&!i[2]?i[2]=a:a&&(i[2]="("+i[2]+") and ("+a+")"),e.push(i))}},e}},8206:(t,e,a)=>{"use strict";a.r(e);var n=a(4525),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"fade",mode:"out-in"},on:{enter:t.onEnter}},[a("div",{key:t.background.id,staticClass:"app-container app-dash photo-info",class:{"show-hover":t.background.unsplash||t.admiring,"add-shadow":t.admiring,"show-anyway":t.admiring,"hotkey-hover":t.admiring},attrs:{"data-test":"background-info-container"},on:{mouseenter:t.admireOnHover,mouseleave:t.stopAdmire}},[a("div",{staticClass:"title",attrs:{"data-test":"background-info-title"}},[t._v(t._s(t.background.title))]),t._v(" "),a("div",{staticClass:"source"},[a("span",{staticClass:"source-link",attrs:{"data-test":"background-info-source-link","data-url":t.background.url},on:{click:t.clickSource}},[t._v(t._s(t.background.source))]),t._v(" "),a("span",{staticClass:"control control-heart",class:{active:t.background.fav},attrs:{"data-test":"control-fav"},on:{click:t.toggleFavorite}},[a("img",{staticClass:"icon icon-dash-heart-empty",attrs:{src:"img/icon-heart-empty.svg"}}),t._v(" "),a("img",{staticClass:"icon icon-dash-heart",attrs:{src:"img/icon-heart.svg"}})]),t._v(" "),a("span",{staticClass:"control control-skip",attrs:{title:"Skip Photo","data-test":"control-skip"},on:{click:t.skipBackground}},[a("span",{staticClass:"icon-container",class:{active:t.skipping},attrs:{"data-test":"control-skip-icon-container"}},[a("svg",{staticClass:"icon icon-skip",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 249.05 132.12"}},[a("circle",{attrs:{cx:"115.5",cy:"108.62",r:"23"}}),t._v(" "),a("path",{attrs:{d:"M291.5,281A22.5,22.5,0,1,1,269,303.5,22.52,22.52,0,0,1,291.5,281m0-1A23.5,23.5,0,1,0,315,303.5,23.5,23.5,0,0,0,291.5,280Z",transform:"translate(-176 -194.88)"}}),t._v(" "),a("path",{staticClass:"arrow",attrs:{d:"M399,257.5a135.18,135.18,0,0,0-41.16-42.17c-22.7-14.74-49.38-21.92-75.15-20.2a108.71,108.71,0,0,0-65.16,27c-19.91,17.5-33.76,41.79-41.18,72.19a13.52,13.52,0,0,0,9.92,16.32,13.66,13.66,0,0,0,3.21.38,13.51,13.51,0,0,0,13.11-10.3c6.07-24.92,17.1-44.54,32.76-58.31a82,82,0,0,1,49.13-20.32c20-1.33,40.81,4.32,58.65,15.9A108.07,108.07,0,0,1,374,268.51l-30,13.2,72.43,40.36,8.6-76Z",transform:"translate(-176 -194.88)"}})])])])])])])};o._withStripped=!0;const s={name:"BackgroundInfo",data:()=>({background:{id:"",title:"",source:"",fav:!1},skipping:!1,admireTimeoutId:null,admiring:!1}),created(){this.$e.listenTo(m.models.activeBackground,"background:successfullyLoaded",this.setActiveBackground),this.$e.listenTo(m,"photoDetailsChanged",this.updatePhotoDetails),this.$e.listenTo(m,"backgroundInfo:admire:start",this.admire),this.$e.listenTo(m,"backgroundInfo:admire:stop",this.stopAdmire),this.$e.listenTo(m,"globalEvent:windowBlur",this.stopAdmire),this.setActiveBackground()},mounted(){m.widgetManager.appReady("background-info")},destroyed(){this.$e.stopListening(m.models.activeBackground,"background:successfullyLoaded",this.setActiveBackground),this.$e.stopListening(m,"photoDetailsChanged",this.updatePhotoDetails),this.$e.stopListening(m,"backgroundInfo:admire:start",this.admire),this.$e.stopListening(m,"backgroundInfo:admire:stop",this.stopAdmire),this.$e.stopListening(m,"globalEvent:windowBlur",this.stopAdmire)},methods:{setActiveBackground(){const t=m.models.activeBackground.backgroundItem;t&&(this.background={id:t.get("_id")||t.get("id"),title:t.get("title"),source:t.get("source"),fav:t.get("is_favorite"),url:t.get("sourceUrl"),unsplash:t.get("sourceUrl")&&t.get("sourceUrl").includes("unsplash")})},updatePhotoDetails(t){t.id&&t.id===this.background.id&&(t.title&&""!==t.title&&(this.background.title=t.title),t.source&&""!==t.source&&(this.background.source=t.source))},toggleFavorite(){this.background.fav=!this.background.fav,m.models.backgroundManager.toggleFavorite(this.background.fav),m.sendEvent("Background",this.background.fav?"Favourite":"Unfavourite")},skipBackground(){if(!this.$plus)return m.cmd("modal.open","UPSELL_PHOTOS",{sourceEvent:"Dash: skip photo"}),void this.stopAdmire();this.skipping||(this.skipping=!0,m.models.backgroundManager.skipItem().finally((()=>{this.skipping=!1})),m.sendEvent("Background","Skip"))},clickSource(){this.background.url&&(m.usage.recordClick(m.models.activeBackground.backgroundItem,m.usage.types.PHOTO),window.open(this.background.url,"_blank"))},admire(){if(document.getElementsByClassName("apps")[0].classList.contains("hide-apps"))return;m.usage.recordAdmire(m.models.activeBackground.backgroundItem.id),this.admiring=!0,m.widgetManager.hideAppsExcept(".apps .background-info");const t=document.getElementsByClassName("background-overlay")[0];t.classList.add("slow"),t.classList.remove("show");try{this.background.unsplash?m.usage.recordStickyHover(this.background.id,m.usage.types.PHOTO):m.usage.recordHover(this.background.id,m.usage.types.PHOTO)}catch(t){console.error(t)}},admireOnHover(){document.getElementsByClassName("apps")[0].classList.contains("hide-apps")||(this.clearAdmireTimeout(),this.admireTimeoutId=setTimeout(this.admire,4e3))},stopAdmire(){if(this.clearAdmireTimeout(),!this.admiring)return;this.admiring=!1,m.widgetManager.showApps();const t=document.getElementsByClassName("background-overlay")[0];t.classList.remove("slow"),t.classList.add("show")},clearAdmireTimeout(){clearTimeout(this.admireTimeoutId)},onEnter(){m.widgetManager.setBottomSideWidth()}}};a(3554);var i=(0,a(1900).Z)(s,o,[],!1,null,"1040273e",null);i.options.__file="source/addins-vue/background-info/BackgroundInfo.vue";const r=i.exports,c=document.querySelector(".region.bottom-left"),d=document.createElement("div");c.appendChild(d),new n.Z({render:t=>t(r)}).$mount(d)},4525:(t,e,a)=>{"use strict";a.d(e,{Z:()=>c});var n=a(1238),o=a(1018),s=a(7366),i=a.n(s),r=a(2096);n.Z.use(o.Z,{name:"unreactive"}),n.Z.use(i()),n.Z.prototype.$e=r.Z,new n.Z({bb:()=>({conditionalFeatures:m.conditionalFeatures,teamInfo:m.models.teamInfo})}),n.Z.mixin({computed:{$plus:()=>m.conditionalFeatures.featureEnabled("plus"),$team:()=>m.conditionalFeatures.featureEnabled("team"),$admin:()=>m.models.teamInfo&&m.models.teamInfo.get("team")&&m.models.teamInfo.get("team").userIsAdmin}});const c=n.Z},7720:(t,e,a)=>{(t.exports=a(7788)(!1)).push([t.id,"\n.photo-info[data-v-1040273e] { height: 60px; min-width: 135px; display: inline-flex; flex-direction: column; justify-content: center; transition: all 0s var(--a-curve), opacity 1s var(--a-curve), transform 1s var(--a-curve);\n}\n.photo-info[data-v-1040273e]:before { transition: opacity 1s var(--a-curve); content: ''; opacity: 0;\n}\n.photo-info.add-shadow[data-v-1040273e]:before { left: -40px; opacity: 0.3;\n}\n.title[data-v-1040273e], .source[data-v-1040273e] { height: 18px; transition: all 0.3s ease;\n}\n.title[data-v-1040273e] { z-index: 2; opacity: 0.8; cursor: default; font-size: 0.8125rem; transform: translateZ(0) translateY(10px); white-space: nowrap;\n}\n.photo-info:hover .title[data-v-1040273e], .show-hover .title[data-v-1040273e] { transform: translateZ(0) translateY(0);\n}\n.hotkey-hover .title[data-v-1040273e] { transition-duration: 1s;\n}\n.source[data-v-1040273e] { display: flex; align-items: center; opacity: 0; font-size: 0.6875rem; transform: translateZ(0) translateY(-8px); white-space: nowrap;\n}\n.photo-info:hover .source[data-v-1040273e], .show-hover .source[data-v-1040273e] { opacity: 1; transform: translateZ(0) translateY(0);\n}\n.hotkey-hover .source[data-v-1040273e] { transition-duration: 0.8s;\n}\n.source-link[data-v-1040273e] { margin: -3px; margin-right: 0px; padding: 3px; opacity: 0.7; cursor: pointer; line-height: 20px; transition: all 0.2s var(--a-curve); vertical-align: top;\n}\n.source-link[data-v-1040273e]:hover { opacity: 0.9 !important;\n}\n.control[data-v-1040273e] { --size: 16px; height: var(--size); width: var(--size); padding: 0 1px; position: relative; display: inline-block; opacity: 0.7; box-sizing: content-box; cursor: pointer;\n}\n.control[data-v-1040273e]:hover, .control.active[data-v-1040273e] { opacity: 1;\n}\n.control .icon[data-v-1040273e] { --icon-size: 14px; height: var(--icon-size); width: var(--icon-size);\n}\n.show-hover.photo-info .control[data-v-1040273e] { opacity: 0;\n}\n.show-hover.photo-info:hover .control[data-v-1040273e] { opacity: 0.7;\n}\n.show-hover.photo-info .control[data-v-1040273e]:hover { opacity: 1;\n}\n.control-heart[data-v-1040273e] {\n}\n.control-heart .icon[data-v-1040273e] { position: absolute; top: 1px; left: 2px;\n}\n.control-skip[data-v-1040273e] {\n}\n.control-skip .icon-container[data-v-1040273e] { left: 2px;\n}\n",""])},3554:(t,e,a)=>{var n=a(7720);"string"==typeof n&&(n=[[t.id,n,""]]),n.locals&&(t.exports=n.locals),(0,a(1372).Z)("70453762",n,!1,{ssrId:!0})},1372:(t,e,a)=>{"use strict";function n(t,e){for(var a=[],n={},o=0;o<e.length;o++){var s=e[o],i=s[0],r={id:t+":"+o,css:s[1],media:s[2],sourceMap:s[3]};n[i]?n[i].parts.push(r):a.push(n[i]={id:i,parts:[r]})}return a}a.d(e,{Z:()=>h});var o="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!o)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var s={},i=o&&(document.head||document.getElementsByTagName("head")[0]),r=null,c=0,d=!1,l=function(){},u=null,p="data-vue-ssr-id",m="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function h(t,e,a,o){d=a,u=o||{};var i=n(t,e);return g(i),function(e){for(var a=[],o=0;o<i.length;o++){var r=i[o];(c=s[r.id]).refs--,a.push(c)}for(e?g(i=n(t,e)):i=[],o=0;o<a.length;o++){var c;if(0===(c=a[o]).refs){for(var d=0;d<c.parts.length;d++)c.parts[d]();delete s[c.id]}}}}function g(t){for(var e=0;e<t.length;e++){var a=t[e],n=s[a.id];if(n){n.refs++;for(var o=0;o<n.parts.length;o++)n.parts[o](a.parts[o]);for(;o<a.parts.length;o++)n.parts.push(f(a.parts[o]));n.parts.length>a.parts.length&&(n.parts.length=a.parts.length)}else{var i=[];for(o=0;o<a.parts.length;o++)i.push(f(a.parts[o]));s[a.id]={id:a.id,refs:1,parts:i}}}}function v(){var t=document.createElement("style");return t.type="text/css",i.appendChild(t),t}function f(t){var e,a,n=document.querySelector("style["+p+'~="'+t.id+'"]');if(n){if(d)return l;n.parentNode.removeChild(n)}if(m){var o=c++;n=r||(r=v()),e=y.bind(null,n,o,!1),a=y.bind(null,n,o,!0)}else n=v(),e=w.bind(null,n),a=function(){n.parentNode.removeChild(n)};return e(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;e(t=n)}else a()}}var k,b=(k=[],function(t,e){return k[t]=e,k.filter(Boolean).join("\n")});function y(t,e,a,n){var o=a?"":n.css;if(t.styleSheet)t.styleSheet.cssText=b(e,o);else{var s=document.createTextNode(o),i=t.childNodes;i[e]&&t.removeChild(i[e]),i.length?t.insertBefore(s,i[e]):t.appendChild(s)}}function w(t,e){var a=e.css,n=e.media,o=e.sourceMap;if(n&&t.setAttribute("media",n),u.ssrId&&t.setAttribute(p,e.id),o&&(a+="\n/*# sourceURL="+o.sources[0]+" */",a+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),t.styleSheet)t.styleSheet.cssText=a;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(a))}}}}]);