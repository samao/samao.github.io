window.H5Player=function(e){function n(n){for(var t,i,c=n[0],l=n[1],f=n[3]||[],s=0,d=[];s<c.length;s++)i=c[s],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(t in l)Object.prototype.hasOwnProperty.call(l,t)&&(e[t]=l[t]);for(u&&u(n),f.forEach((function(e){if(void 0===o[e]){o[e]=null;var n=document.createElement("link");a.nc&&n.setAttribute("nonce",a.nc),n.rel="prefetch",n.as="script",n.href=r(e),document.head.appendChild(n)}}));d.length;)d.shift()()}var t={},o={0:0};function r(e){return a.p+""+({1:"ac-sdk",2:"danmu-list",3:"face-text-panel",4:"filter-panel",5:"hls-kernel",6:"monitor",7:"no-support",8:"qualitys-panel",9:"recommend",10:"style-panel",11:"video-info",12:"volume-panel"}[e]||e)+"."+{1:"26ec81",2:"4ffade",3:"9b59b6",4:"fa9677",5:"632a0d",6:"c79233",7:"03a094",8:"b9f864",9:"563a9a",10:"fb7373",11:"4ebb8b",12:"61382b"}[e]+".js"}function a(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.e=function(e){var n=[],t=o[e];if(0!==t)if(t)n.push(t[2]);else{var i=new Promise((function(n,r){t=o[e]=[n,r]}));n.push(t[2]=i);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,a.nc&&l.setAttribute("nonce",a.nc),l.src=r(e);var u=new Error;c=function(n){l.onerror=l.onload=null,clearTimeout(f);var t=o[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;u.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",u.name="ChunkLoadError",u.type=r,u.request=a,t[1](u)}o[e]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(n)},a.m=e,a.c=t,a.d=function(e,n,t){a.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,n){if(1&n&&(e=a(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)a.d(t,o,function(n){return e[n]}.bind(null,o));return t},a.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(n,"a",n),n},a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},a.p="//www.youtu.tv/js/1.0.17/",a.oe=function(e){throw console.error(e),e};var i=window.webpackJsonp_name_=window.webpackJsonp_name_||[],c=i.push.bind(i);i.push=n,i=i.slice();for(var l=0;l<i.length;l++)n(i[l]);var u=c;return a(a.s=0)}([function(e,n,t){"use strict";t.r(n);var o,r,a=[],i=null;function c(e){return'<div style="font-size: 12px; font-weight: blod; color: white;width: 100%; height: 100%; position: relative; background: black;display:flex; justify-content: center; align-items: center"><span>'+e+"</span></div>"}function l(e){var n=e.vid,t=e.el,r=e.options,l=void 0===r?{}:r,u=e.proxy,f=e.cb,s=e.backgroundURL,d=e.type,p=void 0===d?"auto":d,h=e.kernel;if(!t)throw new ReferenceError("视频挂载dom为空, 无法播放！！！");if(!o)return console.log("[@compat]","SDK未就绪等待中..."),a.push({vid:n,el:t,options:l,proxy:u,cb:f,backgroundURL:s,type:p,kernel:h}),void(t.innerHTML=c("AC娘梳妆中..."));if(i)t.innerHTML=c("目前不支持单页面多播放器");else{console.log("[@compat]","播放视频: "+n);var b=Object.assign({debug:/debug=1/i.test(location.search),vid:"6048291",backgroundURL:"http://imgs.aixifan.com/content/2018_04_08/1523189114.png",autoplay:!0,type:"auto",loglevel:parseInt((location.search.match(/daddy=(\d)/i)||["0","1"])[1])},l,{vid:n,proxy:u,cb:f,backgroundURL:s,type:p,kernel:h});i=o.createPlayer(t,b),b.cb&&b.cb.call(i)}}t.e(1).then(t.bind(null,1)).then((function(e){var n=e.default;console.log("[@compat]","SDK加载完毕"),o=n,r&&r(),a.length>0&&(a.forEach((function(e){l(e)})),a.length=0)})).catch((function(e){console.log("[@compat]","Error",e),a.length>0&&a.forEach((function(e){e.el.innerHTML=c("网络较差,请手动刷新页面")}))})),console.log("[@compat]","播放接口导出成功"),n.default={version:"1.0.17",createPlayer:l,destroyPlayer:function(e){o.destroyPlayer(e),i=null},onReady:function(e){r=e,o&&e()},change:function(e){o.change(e)},settingSync:function(e,n){o.set(e,n)}}}]).default;