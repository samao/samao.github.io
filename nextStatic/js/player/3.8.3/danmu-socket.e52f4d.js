(this.webpackJsonp_name_=this.webpackJsonp_name_||[]).push([[7],{233:function(e,t,n){e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t,n){"use strict";var r;!function(e){e[e.OP_2=2]="OP_2",e[e.OP_3=3]="OP_3",e[e.OP_5=5]="OP_5",e[e.OP_7=7]="OP_7",e[e.OP_8=8]="OP_8",e[e.OP_9=9]="OP_9",e[e.OP_12=12]="OP_12",e[e.OP_13=13]="OP_13",e[e.OP_14=14]="OP_14",e[e.OP_15=15]="OP_15",e[e.OP_16=16]="OP_16",e[e.OP_17=17]="OP_17",e[e.OP_1000=1e3]="OP_1000",e[e.OP_1001=1001]="OP_1001",e[e.OP_1002=1002]="OP_1002",e[e.OP_1003=1003]="OP_1003",e[e.OP_1004=1004]="OP_1004",e[e.OP_1005=1005]="OP_1005",e[e.OP_1006=1006]="OP_1006",e[e.OP_2000=2e3]="OP_2000",e[e.OP_2001=2001]="OP_2001",e[e.OP_2002=2002]="OP_2002",e[e.OP_2003=2003]="OP_2003",e[e.OP_2004=2004]="OP_2004",e[e.OP_2005=2005]="OP_2005",e[e.OP_2006=2006]="OP_2006",e[e.OP_2007=2007]="OP_2007",e[e.OP_2009=2009]="OP_2009",e[e.OP_2010=2010]="OP_2010",e[e.OP_2011=2011]="OP_2011",e[e.OP_2012=2012]="OP_2012",e[e.OP_2013=2013]="OP_2013",e[e.OP_2019=2019]="OP_2019",e[e.OP_2020=2020]="OP_2020",e[e.OP_2021=2021]="OP_2021",e[e.OP_2022=2022]="OP_2022",e[e.OP_2023=2023]="OP_2023",e[e.OP_2024=2024]="OP_2024",e[e.OP_2046=2046]="OP_2046",e[e.OP_2099=2099]="OP_2099",e[e.OP_2101=2101]="OP_2101",e[e.OP_2201=2201]="OP_2201",e[e.OP_20000=2e4]="OP_20000",e[e.OP_20002=20002]="OP_20002",e[e.OP_20003=20003]="OP_20003",e[e.OP_20004=20004]="OP_20004",e[e.OP_20005=20005]="OP_20005",e[e.OP_20006=20006]="OP_20006",e[e.OP_20007=20007]="OP_20007",e[e.OP_20008=20008]="OP_20008",e[e.OP_20009=20009]="OP_20009",e[e.OP_20010=20010]="OP_20010",e[e.OP_20011=20011]="OP_20011",e[e.OP_20012=20012]="OP_20012",e[e.OP_20013=20013]="OP_20013",e[e.OP_20014=20014]="OP_20014",e[e.OP_20015=20015]="OP_20015",e[e.OP_20016=20016]="OP_20016",e[e.OP_20017=20017]="OP_20017",e[e.OP_20018=20018]="OP_20018",e[e.OP_20019=20019]="OP_20019",e[e.OP_20020=20020]="OP_20020",e[e.OP_20021=20021]="OP_20021",e[e.OP_20030=20030]="OP_20030",e[e.OP_22000=22e3]="OP_22000",e[e.OP_22001=22001]="OP_22001",e[e.OP_QIE_0=10000001]="OP_QIE_0",e[e.OP_QIE_1=10000002]="OP_QIE_1",e[e.OP_QIE_2=10000003]="OP_QIE_2",e[e.OP_QIE_3=10000004]="OP_QIE_3",e[e.OP_QIE_4=10000005]="OP_QIE_4"}(r||(r={})),t.a=r},function(e,t,n){"use strict";var r,o,a=n(3),i=n.n(a),c=function(){return(c=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},s={levels:{TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4},debug:console.debug,info:console.info,log:console.info,warn:console.warn,error:console.error,setLevel:function(){},disableAll:function(){},getLevelTag:function(){}};i.a&&i.a.getLogger("WEBSOCKET").setLevel((r=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,a=n.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(r=a.next()).done;)i.push(r.value)}catch(e){o={error:e}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(o)throw o.error}}return i}(location?location.search.match(/daddy=(\d+)/i)||["","3"]:[],2)[1],o=parseInt(void 0===r?"3":r,10),isNaN(o)?3:o));var _=void 0!==i.a?i.a.getLogger("WEBSOCKET"):s;t.a=c(c({},_),{log:_.info})},function(e,t,n){"use strict";var r;!function(e){e[e.ID_0=0]="ID_0",e[e.ID_4000=4e3]="ID_4000",e[e.ID_4001=4001]="ID_4001",e[e.ID_4002=4002]="ID_4002",e[e.ID_4003=4003]="ID_4003",e[e.ID_4004=4004]="ID_4004",e[e.ID_4005=4005]="ID_4005",e[e.ID_4006=4006]="ID_4006",e[e.ID_4007=4007]="ID_4007",e[e.ID_4008=4008]="ID_4008",e[e.ID_4009=4009]="ID_4009",e[e.ID_4100=4100]="ID_4100",e[e.ID_4101=4101]="ID_4101",e[e.ID_4102=4102]="ID_4102",e[e.ID_4210=4210]="ID_4210",e[e.ID_4211=4211]="ID_4211",e[e.ID_4212=4212]="ID_4212",e[e.ID_4213=4213]="ID_4213",e[e.ID_5000=5e3]="ID_5000"}(r||(r={}));var o,a=r,i=n(0);!function(e){e.OPEN="open",e.CLOSE="close",e.ERROR="error",e.MESSAGE="message"}(o||(o={}));var c,s=o,_=n(1),u=((c={})[a.ID_4000]="\u767b\u5f55\u8eab\u4efd\u5df2\u8fc7\u671f\uff0c\u8bf7\u91cd\u65b0\u767b\u5f55",c[a.ID_4001]="\u767b\u5f55\u8eab\u4efd\u5df2\u8fc7\u671f\uff0c\u8bf7\u91cd\u65b0\u767b\u5f55",c[a.ID_4002]="\u7528\u6237\u88ab\u5c01\u7981",c[a.ID_4003]="IP\u88ab\u5c01\u7981",c),l=function(){function e(e){var t=this;this.uri=e,this.send=function(e){t.websocket.send(e)},this.close=function(){t.websocket.close()},this.addEventListener=function(e,n){t.websocket.addEventListener(e,n)},this.removeEventListener=function(e,n){t.websocket.removeEventListener(e,n)},this.websocket=new WebSocket(e)}return Object.defineProperty(e.prototype,"binaryType",{set:function(e){this.websocket.binaryType=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"connected",{get:function(){return this.websocket.readyState===WebSocket.OPEN},enumerable:!0,configurable:!0}),e}(),d=_.a.info.bind(null,"[SocketIO]"),f=_.a.debug.bind(null,"[SocketIO]"),O=_.a.warn.bind(null,"[SocketIO]"),P="function"==typeof TextDecoder&&"function"==typeof TextEncoder,b=function(){function e(e,t,n,r,o){var c=this;void 0===o&&(o=!1),this.scheme=n,this.level=r,this._websocket=null,this._sequence=0,this._reconnectMax=10,this._reconnectTime=1,this.sendMsg=function(e){var t,n=e.op,r=e.body;if(null===(t=c._websocket)||void 0===t?void 0:t.connected){d("["+c.TAG+"\u53d1\u9001]: op:"+n+" body:"+r);var o=c.packet(n,r);c._websocket.send(o)}else O("["+c.TAG+"]: \u672a\u8fde\u63a5\u4e0d\u80fd\u53d1\u9001\u6d88\u606f")},this.close=function(){clearTimeout(c._reconnectInterval),clearInterval(c._heartbeatIntervar),[s.OPEN,s.CLOSE,s.ERROR,s.MESSAGE].forEach((function(e){c._websocket.removeEventListener(e,c.wsHandler)})),c._websocket.close(),c._websocket=null},this.connect=function(e,t){c._authVo.uid=e,c._authVo.token=t,c._reconnectMax=10,c._reconnectTime=1,c.reconnect()},this._callback=function(e){d(e)},this.initSocket=function(){if(P){var e=Number((new Date).getSeconds())%c._address.length,t=c._address[e]+"/sub";c._websocket=new l(t),c._websocket.binaryType="arraybuffer",[s.OPEN,s.CLOSE,s.ERROR,s.MESSAGE].forEach((function(e){c._websocket.addEventListener(e,c.wsHandler)}))}else O("\u6d4f\u89c8\u5668\u4e0d\u652f\u6301 TextDecoder")},this.reconnect=function(){if(c._reconnectMax<=0){d("["+c.TAG+"] \u91cd\u8fde\u6b21\u6570\u5df2\u5230\uff0c\u4e0d\u518d\u91cd\u65b0\u94fe\u63a5\u4e86");var e={op:i.a.OP_QIE_0,body:"\u5f39\u5e55\u670d\u52a1\u8fde\u63a5\u5931\u8d25"};c._callback(e)}else e={op:i.a.OP_QIE_2,body:"\u5f39\u5e55\u670d\u52a1\u8fde\u63a5\u4e2d..."},c._callback(e),d("["+c.TAG+"] \u91cd\u65b0\u94fe\u63a5\uff0c\u8fd8\u5269\u94fe\u63a5\u6b21\u6570"+c._reconnectMax+"\u6b21"),c._reconnectMax-=1,c._reconnectTime*=2,c.close(),c.initSocket()},this.wsHandler=function(e){switch(e.type){case s.OPEN:d("["+c.TAG+"] \u94fe\u63a5\u6210\u529f"),c._reconnectMax=10,c._reconnectTime=1,c.sendAuth();break;case s.CLOSE:d("["+c.TAG+"] \u94fe\u63a5\u5173\u95ed"),clearInterval(c._heartbeatIntervar),c._reconnectInterval=setTimeout(c.reconnect,1e3*c._reconnectTime);break;case s.ERROR:d("["+c.TAG+"] \u94fe\u63a5\u9519\u8bef");break;case s.MESSAGE:c.unpack(e.data)}},this.unpack=function(e){var t=new DataView(e,0),n=t.getInt32(0),r=t.getInt16(4),o=t.getInt16(6),a=t.getInt32(8),s=t.getInt32(12),_="";if(a===i.a.OP_9)for(var u=16;u<e.byteLength;u+=n)n=t.getInt32(0+u),r=t.getInt16(4+u),o=t.getInt16(6+u),a=t.getInt32(8+u),s=t.getInt32(12+u),_=c._decoder.decode(e.slice(r+u,n+u)),c.messagehandle(a,_,o,s);else _=c._decoder.decode(e.slice(r,n)),c.messagehandle(a,_,o,s)},this.packet=function(e,t){var n=c._encoder.encode(t),r=new ArrayBuffer(16),o=new DataView(r,0);o.setInt32(0,16+n.byteLength),o.setInt16(4,16),o.setInt16(6,1),o.setInt32(8,e),o.setInt32(12,c._sequence++);var a=new Uint8Array(r),i=new Uint8Array(n),s=new Uint8Array(r.byteLength+n.byteLength);return s.set(a,0),s.set(i,a.length),s},this.messagehandle=function(e,t,n,r){switch(e){case i.a.OP_3:break;case i.a.OP_8:d("["+c.TAG+"] \u8ba4\u8bc1\u8fd4\u56de"),c.revertAuth(t);break;default:f("["+c.TAG+"]: op:"+e+",body:"+t),c._callback({op:e,body:t})}},this.sendAuth=function(){var e=i.a.OP_7,t=JSON.stringify(c._authVo);c.sendMsg({op:e,body:t})},this.sendHeartbeat=function(){var e=i.a.OP_2;c.sendMsg({op:e,body:""})},this.revertAuth=function(e){var t=JSON.parse(e);if(t.status===a.ID_0)d("["+c.TAG+"] \u8ba4\u8bc1\u6210\u529f"),c.sendHeartbeat(),c._heartbeatIntervar=setInterval(c.sendHeartbeat,3e4),c._callback({op:i.a.OP_QIE_3,body:"\u5f39\u5e55\u670d\u52a1\u8fde\u63a5\u6210\u529f"});else{d("["+c.TAG+"] \u8ba4\u8bc1\u5931\u8d25");var n=t.status,r={op:i.a.OP_QIE_1,status:n,body:u[n]||"\u672a\u77e5\u9519\u8bef"};d("["+c.TAG+"] \u5931\u8d25\u6570\u636e, "+JSON.stringify(r)),c._callback(r)}},this.TAG=o?"WorkerSocket":"WebSocket",void 0!==r&&_.a.setLevel(r),this._address=e,this._authVo=t,P&&(this._decoder=new TextDecoder,this._encoder=new TextEncoder,this.initSocket())}return Object.defineProperty(e.prototype,"callback",{set:function(e){this._callback=e},enumerable:!0,configurable:!0}),e}();t.a=b},function(e,t,n){e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var r,o=function(){return(o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},a=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,a=n.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(r=a.next()).done;)i.push(r.value)}catch(e){o={error:e}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(o)throw o.error}}return i},i=function(e,t,n){if(n||2===arguments.length)for(var r,o=0,a=t.length;o<a;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))},c=("undefined"==typeof window?{}:window).log,s=void 0===c?{getLoggers:function(){return{}}}:c;!function(e){e[e.TRACE=0]="TRACE",e[e.DEBUG=1]="DEBUG",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR"}(r||(r={}));var _=s.getLoggers(),u=function(e){var t=a(e),n=t[0],r=t[1],o=t.slice(2),i=(new Date).toLocaleTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/,"$1");return"[".concat(i,"] ").concat(n," ").concat(r,": ").concat(o.join())},l=function(e){void 0===e&&(e="root");var t=this;this.name=e,this.levels=r,this.level=0,this.enabled=!0,this.trace=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];t.enabled&&t.level<=r.TRACE&&console.trace(u(i(["[TRACE]",t.name],a(e),!1)))},this.debug=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];t.enabled&&t.level<=r.DEBUG&&console.log(u(i(["[DEBUG]",t.name],a(e),!1)))},this.info=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];t.enabled&&t.level<=r.INFO&&console.log(u(i(["[INFO]",t.name],a(e),!1)))},this.warn=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];t.enabled&&t.level<=r.WARN&&console.warn(u(i(["[WARN]",t.name],a(e),!1)))},this.error=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];t.enabled&&t.level<=r.ERROR&&console.error(u(i(["[ERROR]",t.name],a(e),!1)))},this.setLevel=function(e){t.level=Math.max(Math.min(e,r.ERROR),r.TRACE)},this.getLevel=function(){return t.level},this.getLevelTag=function(){return t.levels[t.level]},this.enabledAll=function(e){void 0===e&&(e=!0),t.enabled=e},this.disableAll=function(e){void 0===e&&(e=!1),t.enabled=e}};t.default=o(o({},new l),{getLogger:function(e){return void 0===_[e]&&(_[e]=new l(e)),_[e]},getLoggers:function(){return _}})}]).default},function(e,t,n){function r(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.i=function(e){return e},n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n.oe=function(e){throw console.error(e),e};var r=n(n.s=ENTRY_MODULE);return r.default||r}function o(e){return(e+"").replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&")}function a(e,t,r){var a={};a[r]=[];var i=t.toString(),c=i.match(/^function\s?\w*\(\w+,\s*\w+,\s*(\w+)\)/);if(!c)return a;for(var s,_=c[1],u=new RegExp("(\\\\n|\\W)"+o(_)+"\\(\\s*(/\\*.*?\\*/)?\\s*.*?([\\.|\\-|\\+|\\w|/|@]+).*?\\)","g");s=u.exec(i);)"dll-reference"!==s[3]&&a[r].push(s[3]);for(u=new RegExp("\\("+o(_)+'\\("(dll-reference\\s([\\.|\\-|\\+|\\w|/|@]+))"\\)\\)\\(\\s*(/\\*.*?\\*/)?\\s*.*?([\\.|\\-|\\+|\\w|/|@]+).*?\\)',"g");s=u.exec(i);)e[s[2]]||(a[r].push(s[1]),e[s[2]]=n(s[1]).m),a[s[2]]=a[s[2]]||[],a[s[2]].push(s[4]);for(var l,d=Object.keys(a),f=0;f<d.length;f++)for(var O=0;O<a[d[f]].length;O++)l=a[d[f]][O],isNaN(1*l)||(a[d[f]][O]=1*a[d[f]][O]);return a}function i(e){return Object.keys(e).reduce((function(t,n){return t||e[n].length>0}),!1)}e.exports=function(e,t){t=t||{};var o={main:n.m},c=t.all?{main:Object.keys(o.main)}:function(e,t){for(var n={main:[t]},r={main:[]},o={main:{}};i(n);)for(var c=Object.keys(n),s=0;s<c.length;s++){var _=c[s],u=n[_].pop();if(o[_]=o[_]||{},!o[_][u]&&e[_][u]){o[_][u]=!0,r[_]=r[_]||[],r[_].push(u);for(var l=a(e,e[_][u],_),d=Object.keys(l),f=0;f<d.length;f++)n[d[f]]=n[d[f]]||[],n[d[f]]=n[d[f]].concat(l[d[f]])}}return r}(o,e),s="";Object.keys(c).filter((function(e){return"main"!==e})).forEach((function(e){for(var t=0;c[e][t];)t++;c[e].push(t),o[e][t]="(function(module, exports, __webpack_require__) { module.exports = __webpack_require__; })",s=s+"var "+e+" = ("+r.toString().replace("ENTRY_MODULE",JSON.stringify(t))+")({"+c[e].map((function(t){return JSON.stringify(t)+": "+o[e][t].toString()})).join(",")+"});\n"})),s=s+"new (("+r.toString().replace("ENTRY_MODULE",JSON.stringify(e))+")({"+c.main.map((function(e){return JSON.stringify(e)+": "+o.main[e].toString()})).join(",")+"}))(self);";var _=new window.Blob([s],{type:"text/javascript"});if(t.bare)return _;var u=(window.URL||window.webkitURL||window.mozURL||window.msURL).createObjectURL(_),l=new window.Worker(u);return l.objectURL=u,l}},function(e,t,n){"use strict";n.r(t);var r=n(2),o=n(0),a=n(4),i=n.n(a),c=n(1).a.debug.bind(null,"[SocketService]"),s=function(){function e(e,t,n,a,s){var _=this;if(void 0===s&&(s=!0),this.scheme=n,this.connect=function(e,t){_._worker?_._worker.postMessage({cmd:"connect",data:{uid:e,token:t}}):_._io.connect(e,t)},this.close=function(){_._worker?_._worker.postMessage({cmd:"close"}):_._io.close()},this.sendSuperBarrage=function(e){_._worker?_._worker.postMessage({cmd:"sendSuperBarrage",data:{op:e.op,body:JSON.stringify(e.body)}}):_._io.sendMsg({op:e.op,body:JSON.stringify(e.body)})},this.sendLuckDrawLottery=function(e){_._worker?_._worker.postMessage({cmd:"sendLuckDrawLottery",data:{op:e.op,body:JSON.stringify(e.body)}}):_._io.sendMsg({op:e.op,body:JSON.stringify(e.body)})},this.sendBarrage=function(e){_._worker?_._worker.postMessage({cmd:"sendBarrage",data:{op:o.a.OP_1000,body:JSON.stringify(e)}}):_._io.sendMsg({op:o.a.OP_1000,body:JSON.stringify(e)})},this.sendColorBarrage=function(e){_._worker?_._worker.postMessage({cmd:"sendColorBarrage",data:{op:o.a.OP_1001,body:JSON.stringify(e)}}):_._io.sendMsg({op:o.a.OP_1001,body:JSON.stringify(e)})},this.sendGift=function(e){_._worker?_._worker.postMessage({cmd:"sendGift",data:{op:o.a.OP_1002,body:JSON.stringify(e)}}):_._io.sendMsg({op:o.a.OP_1002,body:JSON.stringify(e)})},this.sendSwitchRoom=function(e){_._worker?_._worker.postMessage({cmd:"sendSwitchRoom",data:{op:o.a.OP_12,body:""+_.scheme+e}}):_._io.sendMsg({op:o.a.OP_12,body:""+_.scheme+e})},this.send=function(e){_._worker?_._worker.postMessage({cmd:"send",data:e}):_._io.sendMsg(e)},this.onWorkerHandler=function(e){if(e instanceof MessageEvent){var t=e.data,n=void 0===t?{msg:"NONE"}:t;switch(n.msg){case"callback":_._receiveFunc(n.data);break;case"destroyed":_._worker.terminate(),_._worker=null}}},c(JSON.stringify(t)),s&&"undefined"!=typeof Worker)try{this._worker=i()(6),this._worker.addEventListener("message",this.onWorkerHandler),this._worker.addEventListener("messageerror",this.onWorkerHandler),this._worker.addEventListener("error",this.onWorkerHandler),this._worker.postMessage({cmd:"init",data:{serverVo:e,userVo:t,scheme:n,level:a}})}catch(o){this._io=new r.a(e,t,n,a)}else this._io=new r.a(e,t,n,a)}return Object.defineProperty(e.prototype,"receiveFunc",{set:function(e){this._worker?this._receiveFunc=e:this._io.callback=e},enumerable:!0,configurable:!0}),e}();t.default=s},function(e,t,n){"use strict";n.r(t);var r=n(2);t.default=function(e){var t;function n(t){e.postMessage({msg:"callback",data:t})}e.addEventListener("message",(function(o){var a=o.data,i=a.cmd,c=a.data;switch(i){case"init":(t=new r.a(c.serverVo,c.userVo,c.scheme,c.level,!0)).callback=n;break;case"connect":t.connect(c.uid,c.token);break;case"close":t.close(),e.postMessage({msg:"destroyed"},"/");break;case"sendSuperBarrage":case"sendLuckDrawLottery":case"sendBarrage":case"sendColorBarrage":case"sendGift":case"sendSwitchRoom":case"send":t.sendMsg(c)}}))}.bind(self)}]).default},351:function(e,t,n){const r=n(233);e.exports=r.default||r}}]);