(window.webpackJsonp_name_=window.webpackJsonp_name_||[]).push([[11],{375:function(n,e,o){var t=o(376);"string"==typeof t&&(t=[[n.i,t,""]]);o(5)(t,{attrs:{id:"player-style"},singleton:!0,hmr:!0,transform:void 0,insertInto:void 0}),t.locals&&(n.exports=t.locals)},376:function(n,e,o){(n.exports=o(4)(!1)).push([n.i,".video-info-layer {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.video-info-layer .video-info {\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  background-color: white;\n  width: 250px;\n  height: 150px;\n  border: 1px solid #ddd;\n  overflow: hidden;\n}\n.video-info-layer .video-info p {\n  display: inline-block;\n  line-height: 22px;\n  margin-bottom: 20px;\n  font-size: 13px;\n  pointer-events: none;\n}\n.video-info-layer .video-info .ok-btn {\n  position: absolute;\n  bottom: 10px;\n  width: 100px;\n  height: 24px;\n  line-height: 24px;\n  text-align: center;\n  background-color: #ddd;\n  border-radius: 3px;\n}\n.video-info-layer .video-info .ok-btn:hover {\n  background-color: #c4c4c4;\n}\n.video-info-layer .video-info .close-btn {\n  position: absolute;\n  right: 5px;\n  top: 5px;\n  padding: 3px;\n  background-color: #ddd;\n  font-size: 10px;\n  width: 12px;\n  height: 12px;\n  line-height: 12px;\n  text-align: center;\n  border-radius: 3px;\n}\n.video-info-layer .video-info .close-btn:hover {\n  background-color: #c4c4c4;\n}\n",""])},386:function(n,e,o){"use strict";o.r(e);var t,i=o(2),r=o(6),l=o(3),a=(o(375),t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,e){n.__proto__=e}||function(n,e){for(var o in e)e.hasOwnProperty(o)&&(n[o]=e[o])},function(n,e){function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),p=function(n){function e(){var e=null!==n&&n.apply(this,arguments)||this;return e.hidenInfoHandler=function(){(0,e.props.hideInfo)()},e}return a(e,n),e.prototype.shouldComponentUpdate=function(n){var e=n.width,o=n.height,t=n.quality;return e!==this.props.width||o!==this.props.height||t!==this.props.quality},e.prototype.render=function(){var n=this.props,e=n.width,o=n.height,t=n.quality;return i.createElement("div",{className:"video-info-layer"},i.createElement("div",{className:"video-info"},i.createElement("p",null,"当前视频信息：",i.createElement("br",null),"视频大小：",e+"x"+o," ",i.createElement("br",null),"源服务器：AcFun Server No.3 ",i.createElement("br",null),"清晰度：",t," ",i.createElement("br",null)),i.createElement("div",{className:"ok-btn",onClick:this.hidenInfoHandler},"确定"),i.createElement("div",{className:"close-btn",onClick:this.hidenInfoHandler},"x")))},e}(i.Component);e.default=Object(r.b)(null,(function(n){return{hideInfo:function(){n(l.k.toggledVideoInfo)}}}))(p)}}]);