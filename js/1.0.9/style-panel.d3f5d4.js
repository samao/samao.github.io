(window.webpackJsonp_name_=window.webpackJsonp_name_||[]).push([[2],{195:function(e,t,n){(e.exports=n(7)(!1)).push([e.i,".picker {\n  display: inline-flex;\n  flex: none;\n  width: calc(11px * 20);\n  margin-top: 10px;\n  margin-left: 45px;\n  flex-flow: row wrap;\n  background-color: black;\n  box-sizing: content-box;\n  border: 1px solid black;\n}\n.picker .piece {\n  box-sizing: border-box;\n  flex: auto;\n  width: 10px;\n  height: 10px;\n  margin: 0.5px;\n  border: 1px solid transparent;\n}\n.picker .piece:hover {\n  border: 1px solid white;\n}\n",""])},196:function(e,t,n){var o=n(195);"string"==typeof o&&(o=[[e.i,o,""]]);n(6)(o,{attrs:{id:"player-style"},singleton:!0,hmr:!0,transform:void 0,insertInto:void 0}),o.locals&&(e.exports=o.locals)},366:function(e,t,n){"use strict";n.r(t);var o,r,a=n(2),c=n(4),i=(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),p=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i(t,e),t.prototype.shouldComponentUpdate=function(e){var t=e.name,n=e.label,o=e.checked;return t!==this.props.name||n!==this.props.label||o!==this.props.checked},t.prototype.render=function(){var e=this.props,t=e.name,n=e.label,o=e.className,r=e.checked,c=void 0!==r&&r,i=e.data;return a.createElement("div",{className:o},a.createElement("input",{type:"radio",name:t,defaultChecked:c,value:i}),n&&0!==n.length?a.createElement("span",null,n):null)},t}(a.Component),l=n(3),u=n(23),s=function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),f=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.onChoose=function(e){var n=e.target;n&&(0,t.props.changeSize)(parseInt(n.value))},t}return s(t,e),t.prototype.shouldComponentUpdate=function(e){return e.size!==this.props.size},t.prototype.render=function(){var e=this.props.size;return a.createElement("div",{className:"danmu-size"},a.createElement("span",null,"字号"),a.createElement("div",{className:"selector",onClick:this.onChoose},a.createElement(p,{className:"group",name:"size",label:"大",checked:37===e,data:37}),a.createElement(p,{className:"group",name:"size",label:"中",checked:25===e,data:25}),a.createElement(p,{className:"group",name:"size",label:"小",checked:16===e,data:16})))},t}(a.Component),h=Object(c.b)(function(e){return{size:e.userOptions.size}},function(e){return{changeSize:function(t){u.a.set("danmu_size",t),e(l.d.changeStyle("size",t))}}})(f),m=function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),d=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return m(t,e),t.prototype.shouldComponentUpdate=function(e){var t=e.icon,n=e.label,o=e.checked;return t!==this.props.icon||n!==this.props.label||o!==this.props.checked},t.prototype.render=function(){var e=this.props,t=e.icon,n=e.label,o=e.userData,r=e.checked,c=void 0!==r&&r;return a.createElement("li",null,a.createElement("div",{className:"group"},a.createElement("input",{id:"top",type:"radio",defaultChecked:c,name:"mode",value:o}),a.createElement("label",{className:t})),a.createElement("label",null,n))},t}(a.Component),y=n(165),_=function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),v=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.onChoose=function(e){var n=e.target;n&&(0,t.props.changeMode)(n.value)},t}return _(t,e),t.prototype.shouldComponentUpdate=function(e){return e.mode!==this.props.mode},t.prototype.render=function(){var e=this.props.mode;return a.createElement("div",{className:"danmu-mode",onClick:this.onChoose},a.createElement("span",null,"模式"),a.createElement("ul",null,a.createElement(d,{icon:"top",label:"顶部",checked:e===y.a.TOP,userData:y.a.TOP}),a.createElement(d,{icon:"bottom",label:"底部",checked:e===y.a.BOTTOM,userData:y.a.BOTTOM}),a.createElement(d,{icon:"move",label:"滚动",checked:e===y.a.MOVE,userData:y.a.MOVE})))},t}(a.Component),b=Object(c.b)(function(e){return{mode:e.userOptions.mode}},function(e){return{changeMode:function(t){u.a.set("danmu_mode",t),e(l.d.changeStyle("mode",t))}}})(v),O=n(162),E=(n(196),function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}()),C=function(e){function t(t,n,o){var r=e.call(this,t,n)||this;return r.colors=o,r.ROW=20,r.COL=12,r.EXCEPT=2,r.BEGIN_MAP=[0,3355443,6710886,10066329,13421772,16777215,16711680,65280,255,16776960,65535,16711935],r.colors=r.createColors(),r}return E(t,e),t.prototype.createColors=function(){for(var e=[],t=0;t<this.ROW;++t)for(var n=0;n<this.COL;++n){var o;o=t>=this.EXCEPT?0+(t-this.EXCEPT)%6*13056+3342336*Math.floor((t-this.EXCEPT)/6)+n%6*51+10027008*Math.floor(n/6):(0==t?this.BEGIN_MAP[n]:0)+0,e[n*this.ROW+t]=Object(O.a)(o)}return e},t.prototype.render=function(){var e=this;return a.createElement("div",{className:"picker",onClick:function(t){var n=t.target;if(n&&n.classList.contains("piece")){var o=((n.style.backgroundColor||"rgb(255,255,255)").match(/\d+/gi)||["255","255","255"]).map(function(e){return parseInt(e)});(0,e.props.onChange)(o.reverse().reduce(function(e,t,n){return e|t<<8*n},0))}}},Array.from({length:this.ROW*this.COL}).map(function(t,n){return a.createElement("div",{className:"piece",key:n,style:{backgroundColor:e.colors[n]}})}))},t}(a.PureComponent),g=function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}();!function(e){e[e.ENTER=13]="ENTER",e[e.ESC=27]="ESC"}(r||(r={}));var k=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.onChange=function(e){var n=e.currentTarget;n&&0==n.value.replace(/[a-f]|[A-F]|[0-9]/gi,"").length&&t.tweenColor(parseInt(n.value,16))},t}return g(t,e),t.prototype.tweenColor=function(e){isNaN(e)&&(e=16777215),u.a.set("danmu_color",e),(0,this.props.changeColor)(e)},t.prototype.formatText=function(e){this.input&&(this.input.value=Object(O.a)(e,"").toUpperCase())},t.prototype.render=function(){var e=this,t=this.props.color;return a.createElement("div",{className:"danmu-color"},a.createElement("span",null,"颜色"),a.createElement("div",{className:"color-selected",style:{backgroundColor:Object(O.a)(t)}}),a.createElement("input",{ref:function(t){return e.input=t},type:"text",defaultValue:Object(O.a)(t,""),maxLength:6,onChange:this.onChange,onBlur:function(n){e.formatText(t)}}),a.createElement(C,{onChange:function(t){u.a.set("danmu_color",t),(0,e.props.changeColor)(t),e.formatText(t)}}))},t}(a.Component),w=Object(c.b)(function(e){return{color:e.userOptions.color}},function(e){return{changeColor:function(t){e(l.d.changeStyle("color",t))}}})(k),x=function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),P=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return x(t,e),t.prototype.render=function(){return a.createElement("div",{className:"style-panel"},a.createElement(h,null),a.createElement(b,null),a.createElement(w,null))},t}(a.PureComponent);t.default=P}}]);