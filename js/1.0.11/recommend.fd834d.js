(window.webpackJsonp_name_=window.webpackJsonp_name_||[]).push([[9],{381:function(n,e,t){var o=t(382);"string"==typeof o&&(o=[[n.i,o,""]]);t(5)(o,{attrs:{id:"player-style"},singleton:!0,hmr:!0,transform:void 0,insertInto:void 0}),o.locals&&(n.exports=o.locals)},382:function(n,e,t){var o=t(29);(n.exports=t(4)(!1)).push([n.i,"@keyframes scale-circle {\n  from {\n    width: 130px;\n    height: 130px;\n    opacity: 0.5;\n  }\n  to {\n    width: 110px;\n    height: 110px;\n    opacity: 0.8;\n  }\n}\n@-webkit-keyframes scale-circle {\n  from {\n    width: 130px;\n    height: 130px;\n    opacity: 0.5;\n  }\n  to {\n    width: 110px;\n    height: 110px;\n    opacity: 0.8;\n  }\n}\n@keyframes animate-out {\n  from {\n    -webkit-transform: scale(1, 1);\n            transform: scale(1, 1);\n    opacity: 0.6;\n  }\n  to {\n    -webkit-transform: scale(10, 10);\n            transform: scale(10, 10);\n    opacity: 0;\n  }\n}\n@-webkit-keyframes animate-out {\n  from {\n    -webkit-transform: scale(1, 1);\n            transform: scale(1, 1);\n    opacity: 0.6;\n  }\n  to {\n    -webkit-transform: scale(10, 10);\n            transform: scale(10, 10);\n    opacity: 0;\n  }\n}\n@keyframes preload-easeout {\n  from {\n    -webkit-transform: scale(1, 1);\n            transform: scale(1, 1);\n  }\n  to {\n    -webkit-transform: scale(0, 0);\n            transform: scale(0, 0);\n    opacity: 0;\n  }\n}\n@-webkit-keyframes preload-easeout {\n  from {\n    -webkit-transform: scale(1, 1);\n            transform: scale(1, 1);\n  }\n  to {\n    -webkit-transform: scale(0, 0);\n            transform: scale(0, 0);\n    opacity: 0;\n  }\n}\n@keyframes list-in {\n  from {\n    left: 100%;\n  }\n  to {\n    left: calc(100% - 280px);\n  }\n}\n@-webkit-keyframes list-in {\n  from {\n    left: 100%;\n  }\n  to {\n    left: calc(100% - 280px);\n  }\n}\n@keyframes roation {\n  from {\n    -webkit-transform: rotateY(180deg);\n            transform: rotateY(180deg);\n  }\n  to {\n    -webkit-transform: rotateY(0deg);\n            transform: rotateY(0deg);\n  }\n}\n@-webkit-keyframes roation {\n  from {\n    -webkit-transform: rotateY(180deg);\n            transform: rotateY(180deg);\n  }\n  to {\n    -webkit-transform: rotateY(0deg);\n            transform: rotateY(0deg);\n  }\n}\n@keyframes loading {\n  from {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@-webkit-keyframes loading {\n  from {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@keyframes scale {\n  0% {\n    width: 100%;\n    height: 100%;\n    opacity: 0.5;\n  }\n  100% {\n    width: 85%;\n    height: 85%;\n    opacity: 0.8;\n  }\n}\n@-webkit-keyframes scale {\n  0% {\n    width: 100%;\n    height: 100%;\n    opacity: 0.5;\n  }\n  100% {\n    width: 85%;\n    height: 85%;\n    opacity: 0.8;\n  }\n}\n@keyframes fadeout {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n@-webkit-keyframes fadeout {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n.recommend-container {\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n}\n.recommend-container .recommend-grid {\n  display: flex;\n  flex-wrap: wrap;\n  width: 490px;\n  height: 350px;\n}\n.recommend-container .recommend-grid .recommend-item {\n  position: relative;\n  width: 130px;\n  height: auto;\n  flex: auto;\n  margin: 0 13px;\n  box-sizing: border-box;\n}\n.recommend-container .recommend-grid .recommend-item a {\n  width: 100%;\n  text-decoration: none;\n  pointer-events: fill;\n  margin: 0;\n}\n.recommend-container .recommend-grid .recommend-item a > div {\n  width: 100%;\n  height: 80px;\n  background-color: #3b9bd8;\n  opacity: 0.5;\n}\n.recommend-container .recommend-grid .recommend-item a > div img {\n  width: 100%;\n  height: 100%;\n  border: 1px solid #222;\n  opacity: 0;\n}\n.recommend-container .recommend-grid .recommend-item a:hover > span {\n  color: #fd4c5b;\n}\n.recommend-container .recommend-grid .recommend-item .hiden {\n  opacity: 0;\n}\n.recommend-container .recommend-grid .recommend-item .loading {\n  position: absolute;\n  width: 30px;\n  height: 30px;\n  left: calc(50% - 15px);\n  top: calc((80px - 30px) * 0.5);\n  box-sizing: border-box;\n  border: 2px solid;\n  border-radius: 50%;\n  border-right-style: none;\n  border-top-style: none;\n  border-color: white;\n  -webkit-animation: loading 1s linear infinite;\n          animation: loading 1s linear infinite;\n}\n.recommend-container .recommend-grid .recommend-item .rotation {\n  animation: roation 1s;\n  -webkit-animation: roation 1s;\n  -moz-animation: roation 1s;\n  -o-animation: roation 1s;\n  background-color: white;\n  background-image: none;\n  opacity: 1;\n}\n.recommend-container .recommend-grid .recommend-item .rotation img {\n  opacity: 1;\n}\n.recommend-container .recommend-grid .recommend-item span {\n  display: block;\n  width: auto;\n  height: 30px;\n  line-height: 30px;\n  text-align: center;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  color: white;\n  margin-top: 0px;\n}\n.recommend-container .recommend-grid .recommend-item .goto-play {\n  position: absolute;\n  display: none;\n  width: 100%;\n  height: 80px;\n  top: 0;\n  background-image: url("+o(t(383))+");\n  background-position: center;\n  background-repeat: no-repeat;\n}\n.recommend-container .recommend-grid .recommend-item:hover .goto-play {\n  display: block;\n}\n.recommend-container .recommend-grid .recommend-item:hover .goto-play .bg {\n  width: 100%;\n  height: 100%;\n  background-color: white;\n  opacity: 0.2;\n}\n",""])},383:function(n,e){n.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAFKklEQVRYhdVZT0hjRxj/zct7L1GL2yxSdA9SzIqNsrBUPSgpFEyuSiHehIAHhaDoSS85efKWmwfBgyCUWhrQspSlXkoFKZG2FFS0xkNbdre7a4Nh1fx5edPDm0kmLy8xbp6u/mAYM2/m+37z+c287/secA9BqjyTbo2FNfRKD8ykpSrPqq2rF/SKsZINiMolYcxq/LYgEqQoki+Mc3JmwpIwZu5vCrqpBwDN6pksTOCEZRRJSwAcrHGIa+wCJ5cXeo3p0lFq8TLSnLAMQGW9DMApzLebtCb0GoCMaQwoWloCoHOSog9zwi5GthFAg/Cbz7GTcAZAGsAlgCyAc9McCcX/Qoly0R24dd0A3OFwuGtsbOyxx+Nxq6pqq29ns1k9kUgk19bWjpeWlg4BnAmP8zCsLKHoJiWHjlu9EUATgIcAWlZWVr4IBoNPKaUK29BNHMg8AD0Wi/02Pj7+M4A3AJJsA1nWNEZcd6D0xuDEGgF8HA6Hn0xPT3/JNtHExl030BoAKF6vtyWVSr2Jx+P/wXCVHGvc4hQANVtaZcQeAGjf2dn5yuv1egF8xDdECLH99qCUaozYxcHBwf7AwMA3AF7BsHYKJktbESjcHB0dHU0wfFshhDjZ5kAptfWNSAiRKKVZAHJXV1cLDOtzbg7TdKmS1WQAsqIoD4SFEqWUz7eVNKWUEkJ0SimRJMmJ8ndDGblKcDgcDolSygXLFmTrPZT8/uVuyqFyDlaLavFPqzl2v9o5eaUW2TUpZYdPjFMKsUlfX9+6x+P5enl5eTeZTJ5XklFFvwTD9bj8K12vbkslk8n86elpdm5ubi8QCDxbX1//I51OZ+uVWw3XJS1GfyLeAvjn+Pj4z4mJiR+DweB3W1tbRzDu2FrlVjx4VpPrgqIoFzDihiRrL7e3t/eCweD3oVDoWTwe/6teHWbYdZB4oJMU2suNjY29QCDw7czMzPP9/f0XNumyNY7IsHYOI2ZIAvgXQHJ1dXV3cHBwY2Zm5nkikXhdryK7gx8NpXHxOYzX8CWAi9XV1Ve9vb0/LC8v79aj5ENn3O8Fu4MfWeidMCJDFUYU1xgKhVonJyefdHd3P7JDiR1wwnALJ4rhpguAe2RkxDM1NfV5f39/ux2K7CLdAOPaA4qpmtvn8z2anZ3t9fv9HTbqql9QLpfjiYGbDbk4WZ/P96nL5VKrLH8vXJe0mBWLaAFw0draqi4sLPQPDw9/dk2yOoTE9SrUbWm32+0AoM7Pz/eMjo563W53U70yr0JNpFk6pMKIwMQKkLS4uPgUAPx+fzsMN7kOCpUjQghlsbtVXa8EtZDWLMYKxP1+/2Or8Rphnp+DdXmsBNVI5/P5vC5JhvsSQjSLdOu6JCuBmmTx0NbSzyuR1gBouVzuzOl0fsIW64QQDbiRxJYyF6S6rmeYvooH04q0Bpayn5ycnHu93gwAhfmbgxAiE2JveVooIWiHh4dvYdz55qIkR1mxhv9WAahOp1MeGhrqQLFQosPwu6zNjQdY76LR6E/xePwFioFWWbHGTJrCSC5lAEo8Hr/s7OyUe3p6HprIZmxuFwDSsVjs10gk8juM0PaCkeauUkYaKC+mUwDY3Nx8nUqlztra2mhzc7PmcDjOAbyzq2Wz2dTR0dHf0Wj0l0gksotiVemSbYgTLiuLiQV1FXej1JtG0XW4z1OwshgvpRKTIP43//dxsrdVVC+p34kLxFrGXfx8wQkXrGwmQAUBd+1DUcmr/V5/kuO4dx8/zfjQSW/FuOZ/mPQhvSqFrdAAAAAASUVORK5CYII="},396:function(n,e,t){"use strict";t.r(e);var o,r=t(2),i=t(6),a=t(12),m=t(75),c=t(34),d=(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,e){n.__proto__=e}||function(n,e){for(var t in e)e.hasOwnProperty(t)&&(n[t]=e[t])},function(n,e){function t(){this.constructor=n}o(n,e),n.prototype=null===e?Object.create(e):(t.prototype=e.prototype,new t)}),s=function(n){function e(e,t){var o=n.call(this,e,t)||this;return o.state={loaded:!1},o}return d(e,n),e.prototype.render=function(){var n=this,e=this.props,t=e.contentId,o=void 0===t?void 0:t,i=e.title,d=void 0===i?"暂无视频":i,s=e.titleImg,p=this.state.loaded,l=Object(c.a)({rotation:p});return r.createElement("div",{className:"recommend-item"},r.createElement("a",{href:o?m.a.HOST+"/v/"+o:"#",target:"_blank",rel:"noopener noreferrer"},r.createElement("div",{className:l},r.createElement("img",{src:s,onLoad:function(){a.b.debug("[@recommend-item]","图片加载成功"),n.setState({loaded:!0})}})),r.createElement("span",{title:d},d)),p?r.createElement("div",{className:"goto-play"},r.createElement("div",{className:"bg"})):r.createElement("div",{className:"loading"}))},e}(r.PureComponent),p=t(3),l=t(74),f=t(200),g=(t(381),function(){var n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,e){n.__proto__=e}||function(n,e){for(var t in e)e.hasOwnProperty(t)&&(n[t]=e[t])};return function(e,t){function o(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}}()),h=function(n){function e(){return null!==n&&n.apply(this,arguments)||this}return g(e,n),e.prototype.componentDidMount=function(){var n=this;0===this.props.recommend.length&&Object(l.d)(f.a.get("contentId")).then(function(e){var t=e.data.data.page.list;a.b.debug("[@recommend]","获取推荐视频成功"),(0,n.props.recommendReady)(t)}).catch(function(n){return a.b.error("[@recommend]","推荐报错："+n)})},e.prototype.createGrid=function(){var n=this.props.recommend;return r.createElement("div",{className:"recommend-grid"},n.map(function(n,e){var t=n.contentId,o=n.titleImg,i=n.title;return r.createElement(s,{key:e,contentId:t,titleImg:o,title:i})}))},e.prototype.render=function(){return r.createElement("div",{className:"recommend-container"},this.createGrid())},e}(r.Component);e.default=Object(i.b)(function(n){return{recommend:n.recommend}},function(n){return{recommendReady:function(e){n(Object(p.n)(e))}}})(h)}}]);