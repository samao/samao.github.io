(window.webpackJsonp_name_=window.webpackJsonp_name_||[]).push([[4],{393:function(e,t,n){"use strict";n.r(t);var o,r=n(2),a=n(6),c=n(173),u=n(3),i=n(15),p=(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),l=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.alphaChanage=function(e){(0,t.props.updateAlpha)(e)},t}return p(t,e),t.prototype.shouldComponentUpdate=function(e){return e.alpha!==this.props.alpha},t.prototype.mesureTips=function(){return{width:this._tips?this._tips.clientWidth:30}},t.prototype.render=function(){var e=this,t=this.props.alpha,n=void 0===t?100:t;return r.createElement("div",{className:"danmu-alpha"},r.createElement("div",{id:"danmu-label"},"不透明度"),r.createElement("div",{className:"slider"},r.createElement("span",{style:{left:"calc("+n+"% - "+this.mesureTips().width/2+"px)"},ref:function(t){return e._tips=t}},0|n,"%"),r.createElement(c.a,{defaultValue:0|n,trackStyle:{position:"absolute",backgroundColor:"red",height:6,borderRadius:"3px"},handleStyle:{position:"absolute",boxSizing:"border-box",borderColor:"blue",height:14,width:14,marginLeft:-7,marginTop:-4,backgroundColor:"white",borderRadius:"50%",border:"1px solid red"},railStyle:{position:"absolute",backgroundColor:"#999999",width:"100%",height:6,borderRadius:"3px"},onChange:this.alphaChanage})))},t}(r.Component),s=Object(a.b)((function(e){return{alpha:e.userOptions.alpha}}),(function(e){return{updateAlpha:function(t){e(u.d.changeStyle("alpha",t)),i.a.set("danmu_alpha",t)}}}))(l),d=function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),m=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return d(t,e),t.prototype.shouldComponentUpdate=function(e){var t=e.subtitleProtected,n=e.danmuMerged;return t!==this.props.subtitleProtected||n!==this.props.danmuMerged},t.prototype.render=function(){var e=this,t=this.props,n=t.subtitleProtected,o=void 0!==n&&n,a=t.danmuMerged,c=void 0!==a&&a;return r.createElement("div",{className:"danmu-merge"},r.createElement("div",{className:"merge-group"},r.createElement("input",{id:"danmu-blocked",type:"checkbox",checked:o,onChange:function(t){t.currentTarget&&(0,e.props.protectedChange)(!o)}}),r.createElement("span",null),r.createElement("label",{htmlFor:"danmu-blocked"},"防挡字幕")),r.createElement("div",{className:"merge-group"},r.createElement("input",{id:"danmu-merge",type:"checkbox",checked:c,onChange:function(t){t.currentTarget&&(0,e.props.changeMerged)(!c)}}),r.createElement("span",null),r.createElement("label",{htmlFor:"danmu-merge"},"合并重复弹幕")))},t}(r.Component),h=Object(a.b)((function(e){var t=e.userOptions;return{subtitleProtected:t.subtitleProtected,danmuMerged:t.danmuMerged}}),(function(e){return{protectedChange:function(t){e(u.d.changeStyle("subtitleProtected",t)),i.a.set("subtitle_protected",t)},changeMerged:function(t){e(u.d.changeMerged(t)),i.a.set("danmu_merged",t)}}}))(m),f=n(33),b=function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),y=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},g=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return b(t,e),t.prototype.shouldComponentUpdate=function(e){var t=e.danmuBlocked,n=t.top,o=t.bottom,r=t.move;return n!==this.props.danmuBlocked.top||o!==this.props.danmuBlocked.bottom||r!==this.props.danmuBlocked.move},t.prototype.render=function(){var e=this.props,t=e.changeBlock,n=e.danmuBlocked,o=n.top,a=void 0!==o&&o,c=n.bottom,u=void 0!==c&&c,i=n.move,p=void 0!==i&&i,l=Object(f.a)("danmu-top",{"top-hiden":a}),s=Object(f.a)("danmu-bottom",{"bottom-hiden":u}),d=Object(f.a)("danmu-move",{"move-hiden":p});return r.createElement("div",{className:"danmu-hiden"},r.createElement("div",{className:l,onClick:function(){t("top",!a)}},r.createElement("span",null,"顶端弹幕")),r.createElement("div",{className:s,onClick:function(){t("bottom",!u)}},r.createElement("span",null,"底部弹幕")),r.createElement("div",{className:d,onClick:function(){t("move",!p)}},r.createElement("span",null,"滚动弹幕")))},t}(r.Component),_=Object(a.b)((function(e){var t=e.userOptions.danmuBlocked;return{danmuBlocked:y({},t)}}),(function(e){return{changeBlock:function(t,n){var o=i.a.get("danmu_blocked");o[t]=n,i.a.set("danmu_blocked",o),e(u.d.danmuBlocked(t,n))}}}))(g),v=function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),O=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return v(t,e),t.prototype.render=function(){return r.createElement("div",{className:"filter-panel"},r.createElement(s,null),r.createElement(h,null),r.createElement(_,null))},t}(r.PureComponent);t.default=O}}]);