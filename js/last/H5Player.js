window.H5Player=function(e){function t(t){for(var n,a,l=t[0],c=t[1],s=t[3]||[],f=0,d=[];f<l.length;f++)a=l[f],o[a]&&d.push(o[a][0]),o[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);u&&u(t);var p=document.getElementsByTagName("head")[0];for(s.forEach(function(e){if(void 0===o[e]){o[e]=null;var t=document.createElement("link");i.nc&&t.setAttribute("nonce",i.nc),t.rel="prefetch",t.as="script",t.href=r(e),p.appendChild(t)}});d.length;)d.shift()()}var n={},o={9:0};function r(e){return i.p+""+({0:"ac-sdk",1:"face-text-panel",2:"style-panel",3:"filter-panel",4:"qualitys-panel",5:"volume-panel",6:"recommend",7:"danmu-list",8:"no-support"}[e]||e)+"."+{0:"b0b416",1:"a5d2aa",2:"19cf27",3:"5ee0b9",4:"1b7733",5:"e5cf4e",6:"b7ce06",7:"028299",8:"d40974"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise(function(t,r){n=o[e]=[t,r]});t.push(n[2]=a);var l,c=document.getElementsByTagName("head")[0],u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=r(e),l=function(t){u.onerror=u.onload=null,clearTimeout(s);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src,a=new Error("Loading chunk "+e+" failed.\n("+r+": "+i+")");a.type=r,a.request=i,n[1](a)}o[e]=void 0}};var s=setTimeout(function(){l({type:"timeout",target:u})},12e4);u.onerror=u.onload=l,c.appendChild(u)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="//www.youtu.tv/js/last/",i.oe=function(e){throw console.error(e),e};var a=window.webpackJsonp_name_=window.webpackJsonp_name_||[],l=a.push.bind(a);a.push=t,a=a.slice();for(var c=0;c<a.length;c++)t(a[c]);var u=l;return i(i.s=0)}([function(e,t,n){"use strict";n.r(t);var o,r,i=[],a=null;function l(e){var t=e.vid,n=e.el,r=e.options,l=void 0===r?{}:r,c=e.proxy,u=e.cb;if(!n)throw new ReferenceError("视频挂载dom为空, 无法播放！！！");if(!o)return console.log("[@compat]","SDK未就绪等待中..."),i.push({vid:t,el:n,options:l,proxy:c,cb:u}),void(n.innerHTML='<div style="font-size: 12px; font-weight: blod; color: white;width: 100%; height: 100%; position: relative; background: black;display:flex; justify-content: center; align-items: center"><span>AC娘梳妆中...</span></div>');if(a)n.innerHTML='<div style="font-size: 12px; font-weight: blod; color: white;width: 100%; height: 100%; position: relative; background: black;display:flex; justify-content: center; align-items: center"><span>目前不支持单页面多播放器</span></div>';else{console.log("[@compat]","播放视频: "+t);var s=Object.assign({debug:/debug=1/i.test(location.search),vid:"6048291",backgroundURL:"http://imgs.aixifan.com/content/2018_04_08/1523189114.png",autoplay:!0,type:"auto",loglevel:parseInt((location.search.match(/daddy=(\d)/i)||["0","1"])[1])},l,{vid:t,proxy:c,cb:u});a=o.createPlayer(n,s),s.cb&&s.cb.call(a)}}n.e(0).then(n.bind(null,1)).then(function(e){var t=e.default;console.log("[@compat]","SDK加载完毕"),o=t,r&&r(),i.length>0&&(i.forEach(function(e){l(e)}),i.length=0)}).catch(function(e){return console.log("[@compat]","Error",e)}),console.log("[@compat]","播放接口导出成功"),t.default={createPlayer:l,destroyPlayer:function(e){o.destroyPlayer(e),a=null},onReady:function(e){r=e,o&&e()}}}]).default;