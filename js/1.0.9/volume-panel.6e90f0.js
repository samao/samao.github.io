(window.webpackJsonp_name_=window.webpackJsonp_name_||[]).push([[5],{370:function(e,o,t){"use strict";t.r(o);var n,r=t(2),i=t(4),a=t(101),u=t(3),l=t(23),p=(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,o){e.__proto__=o}||function(e,o){for(var t in o)o.hasOwnProperty(t)&&(e[t]=o[t])},function(e,o){function t(){this.constructor=e}n(e,o),e.prototype=null===o?Object.create(o):(t.prototype=o.prototype,new t)}),s=function(e){function o(){var o=null!==e&&e.apply(this,arguments)||this;return o.volumeChanage=function(e){(0,o.props.onChangeVolume)(e)},o}return p(o,e),o.prototype.shouldComponentUpdate=function(e){return e.volume!==this.props.volume},o.prototype.render=function(){var e=this.props.volume;return r.createElement("div",{className:"volume-panel",onClick:function(e){return e.stopPropagation()}},r.createElement("span",null,e),r.createElement("div",{className:"volume-slider"},r.createElement(a.a,{style:{position:"relative",width:6,top:3,height:"90%"},defaultValue:e,vertical:!0,trackStyle:{position:"absolute",backgroundColor:"red",height:"100%",width:6,borderRadius:"3px"},handleStyle:{position:"absolute",boxSizing:"border-box",height:14,width:14,marginLeft:-4,marginBottom:-7,backgroundColor:"white",borderRadius:"50%",border:"1px solid red"},railStyle:{position:"absolute",backgroundColor:"#999999",width:6,height:"100%",borderRadius:"3px"},onChange:this.volumeChanage})))},o}(r.Component);o.default=Object(i.b)(function(e){return{volume:e.volume.value}},function(e){return{onChangeVolume:function(o){e(Object(u.w)(o)),l.a.set("video_volume",o)}}})(s)}}]);