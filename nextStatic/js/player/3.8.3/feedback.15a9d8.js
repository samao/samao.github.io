(this.webpackJsonp_name_=this.webpackJsonp_name_||[]).push([[10],{335:function(e,n,t){var a=t(374);"string"==typeof a&&(a=[[e.i,a,""]]);var o={attrs:{id:"qie-player-style"},singleton:!0,hmr:!0,transform:void 0,insertInto:void 0};t(15)(a,o);a.locals&&(e.exports=a.locals)},374:function(e,n,t){var a=t(14),o=t(26),r=t(375),c=t(376);n=a(!1);var i=o(r),l=o(c);n.push([e.i,"@keyframes popup--1Cqdc {\n  from {\n    top: -7px;\n    opacity: 0;\n    transform: scale(0.9) translateY(-100%);\n  }\n  to {\n    top: -10px;\n    opacity: 1;\n    transform: scale(1) translateY(-100%);\n  }\n}\n@keyframes preloader-progress--2zBcp {\n  0% {\n    left: 0;\n    opacity: 0;\n  }\n  25% {\n    opacity: 1;\n  }\n  75% {\n    opacity: 1;\n  }\n  100% {\n    left: calc(100% - 20px);\n    opacity: 0;\n  }\n}\n@keyframes route--VroNx {\n  form {\n    transform: translate(-50%, -50%) rotate(0deg);\n  }\n  to {\n    transform: translate(-50%, -50%) rotate(360deg);\n  }\n}\n.popup-animation--1XSga {\n  animation: popup--1Cqdc 300ms;\n}\n.feedback--2wBhm {\n  position: absolute;\n  width: 370px;\n  height: 450px;\n  border-radius: 5px;\n  background-color: #edeff0;\n  transform: translate(-50%, -50%);\n  top: 50%;\n  left: 50%;\n  padding: 20px;\n  box-sizing: border-box;\n  font-size: 12px;\n  color: #4a4a4a;\n  border: 1px solid #e6e6e6;\n}\n.feedback--2wBhm hr {\n  box-sizing: border-box;\n  margin: 5px 0;\n  border: none;\n  border-bottom: thin solid #c0c3cb;\n}\n.feedback--2wBhm .title--2pmUp {\n  font-size: 18px;\n  font-weight: bold;\n  line-height: 30px;\n  height: 30px;\n}\n.feedback--2wBhm .close-btn--28cYw {\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  width: 13px;\n  height: 13px;\n  background-image: url("+i+");\n  background-repeat: no-repeat;\n  background-position: center;\n  cursor: pointer;\n}\n.feedback--2wBhm .feedback-item--1dWAT {\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  width: 100%;\n  height: 30px;\n  margin: 4px 0;\n}\n.feedback--2wBhm .feedback-item--1dWAT > span {\n  width: 20%;\n  height: 30px;\n  display: inline-block;\n  text-align: right;\n  line-height: 30px;\n  border: none;\n}\n.feedback--2wBhm .feedback-item--1dWAT input[type='checkbox'] {\n  width: calc(80% - 20px);\n  height: 100%;\n  border: none;\n  opacity: 0;\n  margin: 0 0 0 10px;\n  padding: 0;\n}\n.feedback--2wBhm .feedback-item--1dWAT input[type='checkbox'] + span {\n  position: absolute;\n  display: inline-block;\n  width: calc(80% - 20px);\n  top: 0;\n  left: 20%;\n  margin: 0 10px;\n  padding-left: 5px;\n  pointer-events: none;\n  border: 1px solid #ccc;\n  border-radius: 3px;\n  box-sizing: border-box;\n  text-align: left;\n  background-color: #f4f6f9;\n  color: #999;\n}\n.feedback--2wBhm .feedback-item--1dWAT input[type='checkbox'] + span::after {\n  position: absolute;\n  content: ' ';\n  box-sizing: border-box;\n  line-height: 0;\n  right: 10px;\n  top: 10px;\n  width: 0;\n  height: 0;\n  border: 4px;\n  border-style: solid dashed dashed;\n  border-color: transparent #999 transparent transparent;\n  transition-duration: 300ms;\n  transition-property: transform;\n  transform-origin: right center;\n}\n.feedback--2wBhm .feedback-item--1dWAT input[type='checkbox'] + span + ul {\n  width: calc(80% - 20px);\n  left: 20%;\n  position: absolute;\n  display: none;\n  list-style: none;\n  margin: 0 10px;\n  padding: 0;\n  text-align: center;\n  z-index: 1000;\n  top: 100%;\n  border: 1px solid #e5e5e5;\n  border-top: none;\n  box-sizing: border-box;\n  opacity: 0 !important;\n}\n.feedback--2wBhm .feedback-item--1dWAT input[type='checkbox'] + span + ul li {\n  width: 100%;\n  height: 30px;\n  line-height: 30px;\n  background-color: white;\n  border-radius: 3px;\n}\n.feedback--2wBhm .feedback-item--1dWAT input[type='checkbox'] + span + ul li:not(:last-child) {\n  border-bottom: 1px solid #e6e6e6;\n}\n.feedback--2wBhm .feedback-item--1dWAT input[type='checkbox'] + span + ul li:hover {\n  background-color: #e3e9f0;\n}\n.feedback--2wBhm .feedback-item--1dWAT input[type='checkbox']:checked + span::after {\n  transform: rotate(-90deg);\n}\n.feedback--2wBhm .feedback-item--1dWAT input[type='checkbox']:checked + span + ul {\n  display: block;\n  opacity: 1 !important;\n  transition: opacity 3s;\n}\n.feedback--2wBhm .feedback-item--1dWAT input[type='text'] {\n  width: calc(80% - 20px);\n  height: 100%;\n  margin: 0 0 0 10px;\n  padding: 5px;\n  border: 1px solid #ccc;\n  border-radius: 3px;\n  background-color: #edeff0;\n  box-sizing: border-box;\n  outline: none;\n}\n.feedback--2wBhm .submit--do-q_ {\n  position: absolute;\n  background-color: #fd3f17;\n  font-size: 14px;\n  width: 100px;\n  height: 30px;\n  text-align: center;\n  line-height: 30px;\n  border-radius: 5px;\n  box-sizing: border-box;\n  color: white;\n  bottom: 10px;\n  left: calc(50% - 50px);\n  cursor: pointer;\n}\n.feedback--2wBhm .submit--do-q_:hover {\n  background-color: #df2802;\n}\n.feedback--2wBhm .upload--2Cz6L {\n  height: 65px;\n}\n.feedback--2wBhm .upload--2Cz6L .uploader--2KJnj {\n  position: relative;\n  width: calc(80% - 20px);\n  height: 100%;\n  margin: 0 10px;\n}\n.feedback--2wBhm .upload--2Cz6L .uploader--2KJnj ul {\n  position: absolute;\n  height: 100%;\n  padding: 0;\n  margin: 0;\n  top: 0;\n  left: 0;\n  list-style: none;\n}\n.feedback--2wBhm .upload--2Cz6L .uploader--2KJnj ul .disabled--197HB {\n  display: none;\n}\n.feedback--2wBhm .upload--2Cz6L .uploader--2KJnj ul li {\n  position: relative;\n  width: 70px;\n  height: 100%;\n  float: left;\n  box-sizing: border-box;\n}\n.feedback--2wBhm .upload--2Cz6L .uploader--2KJnj ul li:not(:last-child) {\n  margin-right: 15px;\n}\n.feedback--2wBhm .upload--2Cz6L .uploader--2KJnj ul li img {\n  width: 100%;\n  height: 100%;\n  padding: 1px;\n  background-color: #e6e6e6;\n  box-sizing: border-box;\n  border-radius: 3px;\n}\n.feedback--2wBhm .upload--2Cz6L .uploader--2KJnj ul li .clear-img--2zX3j {\n  width: 15px;\n  height: 15px;\n  right: 0;\n  top: 0;\n  background-color: black;\n  border-radius: 3px;\n}\n.feedback--2wBhm .upload--2Cz6L .uploader--2KJnj ul li input[type='file'] {\n  width: 70px;\n  height: 100%;\n  display: block;\n  margin: 0;\n  padding: 0;\n  outline: none;\n  border: none;\n  opacity: 0;\n  box-sizing: border-box;\n}\n.feedback--2wBhm .upload--2Cz6L .uploader--2KJnj ul li input[type='file'] + span {\n  position: absolute;\n  display: inline-block;\n  width: 70px;\n  height: 100%;\n  top: 0;\n  left: 0;\n  border: 1px dotted #ccc;\n  background-color: transparent;\n  background-image: url("+l+");\n  background-position: center;\n  background-repeat: no-repeat;\n  pointer-events: none;\n  box-sizing: border-box;\n  border-radius: 3px;\n}\n.feedback--2wBhm .upload--2Cz6L .uploader--2KJnj > span {\n  position: absolute;\n  display: block;\n  line-height: 20px;\n  width: calc(80% - 20px);\n  bottom: -28px;\n}\n.feedback--2wBhm .detail--2tb8d {\n  height: 80px;\n  margin: 4px 0;\n  padding: 0;\n}\n.feedback--2wBhm .detail--2tb8d textarea {\n  width: calc(80% - 20px);\n  height: 100%;\n  margin: 0 10px;\n  padding: 5px;\n  background-color: transparent;\n  border: 1px solid #ccc;\n  border-radius: 3px;\n  box-sizing: border-box;\n  font-size: 12px;\n  resize: none;\n  outline: none;\n}\n.qie-player--DOB69 .feedback-success--22xbm {\n  position: absolute;\n  width: 340px;\n  height: 180px;\n  border-radius: 3px;\n  background-color: #edeff0;\n  transform: translate(-50%, -50%);\n  top: 50%;\n  left: 50%;\n  padding: 20px;\n  line-height: 35px;\n  box-sizing: border-box;\n  color: #4a4a4a;\n  border: 1px solid #e6e6e6;\n}\n.qie-player--DOB69 .feedback-success--22xbm > span {\n  display: block;\n  font-size: 14px;\n  font-weight: bold;\n  border-bottom: 1px solid #999;\n}\n.qie-player--DOB69 .feedback-success--22xbm > div {\n  text-align: center;\n  color: #999;\n}\n.qie-player--DOB69 .feedback-success--22xbm .feedback-body--2wy6d {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  width: 100%;\n  height: 80px;\n  padding: 5px 0;\n}\n.qie-player--DOB69 .feedback-success--22xbm .feedback-body--2wy6d > p {\n  display: inline-block;\n  width: 100%;\n  flex: none;\n  color: black;\n}\n.qie-player--DOB69 .feedback-success--22xbm .feedback-body--2wy6d > p span {\n  color: #fd3f17;\n  margin-left: 5px;\n  -webkit-user-select: text;\n     -moz-user-select: text;\n          user-select: text;\n}\n.qie-player--DOB69 .feedback-success--22xbm .close-btn--28cYw {\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  border-bottom: none;\n  width: 13px;\n  height: 13px;\n  background-image: url("+i+");\n  background-repeat: no-repeat;\n  background-position: center;\n  cursor: pointer;\n}\n.qie-player--DOB69 .feedback-success--22xbm .ok-btn--s12a6 {\n  position: absolute;\n  display: inline;\n  padding: 5px 25px;\n  border-radius: 3px;\n  line-height: normal;\n  background-color: #fd3f17;\n  color: white;\n  left: 50%;\n  bottom: 15px;\n  transform: translateX(-50%);\n  cursor: pointer;\n}\n",""]),n.locals={popupAnimation:"popup-animation--1XSga",popup:"popup--1Cqdc",feedback:"feedback--2wBhm",title:"title--2pmUp",closeBtn:"close-btn--28cYw",feedbackItem:"feedback-item--1dWAT",submit:"submit--do-q_",upload:"upload--2Cz6L",uploader:"uploader--2KJnj",disabled:"disabled--197HB",clearImg:"clear-img--2zX3j",detail:"detail--2tb8d",qiePlayer:"qie-player--DOB69",feedbackSuccess:"feedback-success--22xbm",feedbackBody:"feedback-body--2wy6d",okBtn:"ok-btn--s12a6",preloaderProgress:"preloader-progress--2zBcp",route:"route--VroNx"},e.exports=n},375:function(e,n){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAA+ElEQVQokaWRwY3CMBBF59vaAyxSStgSIiGLEyGUQAdLCZSQDpYOgA7SAYm9XMIoglKQkDisknAhqwB2iMQcPfOe/cdEbxSY2TtfqnjQw0wpdeoCpXr/89lHJJRSJ0lycb5UMTN7r8BEZysSONxdZEzuJ2a/bRMkOlulv/z9/+xm05jcL6hYPka4RVsDiMOx2lhhm6DeiSS5CILhsTn7BDcFH0LO/8pibQOdMBGR1llYAomoqulkMkptM8J2yMxeCUQA5iUQuZb4BDczhmO1aftG4QLrjEEwPNYCY3Lfmrltq64+uoAuAbqCj4JBDzMiItrt8q9XkK2uL0mvFifbl+8AAAAASUVORK5CYII="},376:function(e,n){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAYAAACMRWrdAAAA50lEQVRoge3YwQ2CQBSE4XkvFkAJ2IEh3KUES6EESrAES9EzBFuwhG2A1YsmxMST7JIh852W0+x/4bCGDMZxPMYYWwCFu3dVVd1Sb+5SDwDANE1nMzsAQIzxAmCfetNTDwDAJ+qtzLGZJWwNCmOjMDYKY6MwNgpjozA2CmOjMDYKY6MwNpsNs9lj5mntyyzk6u6d9X1//3r324KHm1m59i0SKBxACyCsfZMFBXdvLMfSMAzP+Xdd18l3N/tXVBgbhbFRGBuFsVEYG4WxURgbhbFRGBuFsVHYn8KPczK5wj6PssHdmxyDL4f+J15xeFvtAAAAAElFTkSuQmCC"},479:function(e,n,t){"use strict";t.r(n);var a,o=t(1),r=t(7),c=t(4),i=t.n(c),l=function(e){var n=e.className,t=e.label,a=void 0===t?"":t,r=e.placeholder,c=void 0===r?"":r,i=e.options,l=e.checked,d=void 0!==l&&l,s=e.onChange,p=function(e){var n=e.nativeEvent.target.getAttribute("data-key");s(n)};return o.createElement("div",{className:n},o.createElement("span",null,a,":"),o.createElement("input",{type:"checkbox",checked:d,onChange:function(){s()}}),o.createElement("span",null,c),o.createElement("ul",null,i.map((function(e,n){return o.createElement("li",{key:n,"data-key":e,onClick:p},e)}))))},d=t(335),s=t.n(d),p=function(e){var n=e.result,t=e.onClose;return o.createElement("div",{className:s.a.feedbackSuccess},o.createElement("span",null,"\u95ee\u9898\u53cd\u9988"),o.createElement("div",{className:s.a.feedbackBody},n.code>0?o.createElement(o.Fragment,null,o.createElement("p",null,"\u8bf7\u8bb0\u4f4f\u60a8\u7684\u56de\u6267\u7801:",o.createElement("span",null,n.code)),o.createElement("div",null,"(\u7528\u4e8e\u67e5\u8be2\u5904\u7406\u8fdb\u5ea6,\u9700\u8981\u63d0\u4f9b\u56de\u6267\u7801\u7ed9\u5ba2\u670d)")):o.createElement("p",null,n.msg)),o.createElement("span",{className:s.a.closeBtn,onClick:t}),o.createElement("div",{className:s.a.okBtn,onClick:t},"\u786e\u5b9a"))},u=t(0),b=t(3),h=(a=function(e,n){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])})(e,n)},function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function t(){this.constructor=e}a(e,n),e.prototype=null===n?Object.create(n):(t.prototype=n.prototype,new t)}),m=function(e,n,t,a){return new(t||(t=Promise))((function(o,r){function c(e){try{l(a.next(e))}catch(e){r(e)}}function i(e){try{l(a.throw(e))}catch(e){r(e)}}function l(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(c,i)}l((a=a.apply(e,n||[])).next())}))},f=function(e,n){var t,a,o,r,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return r={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function i(i){return function(l){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;r&&(r=0,i[0]&&(c=0)),c;)try{if(t=1,a&&(o=2&i[0]?a.return:i[0]?a.throw||((o=a.return)&&o.call(a),0):a.next)&&!(o=o.call(a,i[1])).done)return o;switch(a=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return c.label++,{value:i[1],done:!1};case 5:c.label++,a=i[1],i=[0];continue;case 7:i=c.ops.pop(),c.trys.pop();continue;default:if(!(o=c.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){c=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){c.label=i[1];break}if(6===i[0]&&c.label<o[1]){c.label=o[1],o=i;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(i);break}o[2]&&c.ops.pop(),c.trys.pop();continue}i=n.call(e,c)}catch(e){i=[6,e],a=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}},g=function(e,n){var t="function"==typeof Symbol&&e[Symbol.iterator];if(!t)return e;var a,o,r=t.call(e),c=[];try{for(;(void 0===n||n-- >0)&&!(a=r.next()).done;)c.push(a.value)}catch(e){o={error:e}}finally{try{a&&!a.done&&(t=r.return)&&t.call(r)}finally{if(o)throw o.error}}return c},k=function(e,n,t){if(t||2===arguments.length)for(var a,o=0,r=n.length;o<r;o++)!a&&o in n||(a||(a=Array.prototype.slice.call(n,0,o)),a[o]=n[o]);return e.concat(a||Array.prototype.slice.call(n))},x=function(e){function n(n,t){var a=e.call(this,n,t)||this;return a.onResultClose=function(){a.props.dispatch({type:u.e.FEEDBACK_TOGGLE})},a.onFeedbackSubmit=function(){a.props.dispatch({type:u.e.FEEDBACK_SUBMIT,payload:a.state})},a.onContactChange=function(e){var n=e.target;n&&a.setState({contact:n.value})},a.onDesChange=function(e){var n=e.target;n&&a.setState({desc:n.value})},a.onClearImg=function(e){var n=e.target.getAttribute("data-image");a.setState((function(e){return{images:e.images.filter((function(e,t){return t.toString()!==n}))}}))},a.onImgSelect=function(e){var n=e.target.files;if(n&&n.length>0)for(var t=3-a.state.images.length,o=0;o<n.length;++o)o<t&&a.readImage(n.item(o)).then((function(e){a.setState((function(n){return{images:k(k([],g(n.images),!1),[e],!1)}}))})).catch((function(e){b.a.error("[@feedback]","\u52a0\u8f7d\u672c\u5730\u56fe\u7247\u9519\u8bef: ".concat(e))}))},a.readImage=function(e){return m(a,void 0,Promise,(function(){return f(this,(function(n){switch(n.label){case 0:return[4,new Promise((function(n,t){var a=new FileReader;a.addEventListener("load",(function e(){a.removeEventListener("load",e),"string"==typeof a.result?n(a.result):t("\u8bfb\u53d6\u6587\u4ef6\u65b9\u5f0f\u6709\u8bef")})),a.readAsDataURL(e)}))];case 1:return[2,n.sent()]}}))}))},a.onCloseHandler=function(){a.props.dispatch({type:u.e.FEEDBACK_CLOSE})},a.changeIssueType=function(e){a.setState((function(n){var t=n.issue,a=n.cdnType,o=n.occurredTimes;return{issue:{checked:!t.checked,value:e||t.value},cdnType:{checked:!0!=!t.checked&&a.checked,value:a.value},occurredTimes:{checked:!0!=!t.checked&&a.checked,value:o.value}}}))},a.changeCDNType=function(e){a.setState((function(n){var t=n.issue,a=n.cdnType,o=n.occurredTimes;return{issue:{checked:!0!=!a.checked&&t.checked,value:t.value},cdnType:{checked:!a.checked,value:e||a.value},occurredTimes:{checked:!0!=!a.checked&&o.checked,value:o.value}}}))},a.changeOccurredTimes=function(e){a.setState((function(n){var t=n.issue,a=n.cdnType,o=n.occurredTimes;return{issue:{checked:!0!=!o.checked&&t.checked,value:t.value},cdnType:{checked:!0!=!o.checked&&a.checked,value:a.value},occurredTimes:{checked:!o.checked,value:e||o.value}}}))},a.state={issue:{checked:!1,value:"\u8bf7\u9009\u62e9\u95ee\u9898\u7c7b\u578b"},cdnType:{checked:!1,value:"\u8bf7\u9009\u62e9\u8fd0\u8425\u5546"},occurredTimes:{checked:!1,value:"\u8bf7\u9009\u62e9\u95ee\u9898\u7c7b\u578b"},desc:"",contact:"",images:[]},a}return h(n,e),n.prototype.render=function(){return"result"===this.props.type?this.createFeedbackResult(this.props.info):this.createFeedView()},n.prototype.createFeedView=function(){var e=this.state,n=e.issue,t=e.cdnType,a=e.occurredTimes,r=i()({disabled:this.state.images.length>=3});return o.createElement("div",{className:s.a.feedback},o.createElement("span",{className:s.a.title},"\u95ee\u9898\u53cd\u9988"),o.createElement("span",{className:s.a.closeBtn,onClick:this.onCloseHandler}),o.createElement("hr",null),o.createElement(l,{checked:n.checked,onChange:this.changeIssueType,className:s.a.feedbackItem,label:"\u95ee\u9898\u7c7b\u578b",placeholder:n.value,options:["\u753b\u9762\u5361\u987f","\u65e0\u9650\u7f13\u51b2","\u4fe1\u53f7\u4e2d\u65ad","\u9ed1\u5c4f","\u58f0\u97f3\u95ee\u9898","\u623f\u95f4\u5173\u95ed"]}),o.createElement(l,{checked:t.checked,onChange:this.changeCDNType,className:s.a.feedbackItem,label:"\u8fd0\u8425\u5546",placeholder:t.value,options:["\u4e2d\u56fd\u7535\u4fe1","\u4e2d\u56fd\u8054\u901a","\u4e2d\u56fd\u79fb\u52a8","\u4e2d\u56fd\u94c1\u901a","\u957f\u57ce\u5bbd\u5e26","\u5176\u5b83(\u8bf7\u8865\u5145\u63cf\u8ff0)"]}),o.createElement(l,{checked:a.checked,onChange:this.changeOccurredTimes,className:s.a.feedbackItem,label:"\u9891\u53d1\u6b21\u6570",placeholder:a.value,options:["\u4e00\u6b21","\u4e8c\u6b21","\u4e09\u6b21\u4ee5\u4e0a"]}),o.createElement("div",{className:i()(s.a.feedbackItem,s.a.detail)},o.createElement("span",null,"\u95ee\u9898\u63cf\u8ff0:"),o.createElement("textarea",{maxLength:140,placeholder:"\u8bf7\u63cf\u8ff0\u60a8\u9047\u5230\u7684\u95ee\u9898",onChange:this.onDesChange})),o.createElement("div",{className:s.a.feedbackItem},o.createElement("span",null,"\u8054\u7cfb\u65b9\u5f0f:"),o.createElement("input",{maxLength:20,type:"text",placeholder:"QQ/\u5fae\u4fe1",onChange:this.onContactChange})),o.createElement("div",{className:i()(s.a.feedbackItem,s.a.upload)},o.createElement("span",null,"\u4e0a\u4f20\u622a\u56fe:"),o.createElement("div",{className:s.a.uploader},o.createElement("ul",null,o.createElement("li",{className:r},o.createElement("input",{type:"file",accept:"image/*",multiple:!0,onChange:this.onImgSelect}),o.createElement("span",null)),this.createImageViewer()),o.createElement("span",null,"\u6700\u591a\u53ef\u4ee5\u4e0a\u4f203\u5f20\u622a\u56fe"))),o.createElement("div",{className:s.a.submit,onClick:this.onFeedbackSubmit},"\u63d0\u4ea4"))},n.prototype.createFeedbackResult=function(e){return o.createElement(p,{onClose:this.onResultClose,result:e})},n.prototype.createImageViewer=function(){var e=this;if(this.state.images.length>0)return o.createElement(o.Fragment,null,this.state.images.map((function(n,t){return o.createElement("li",{key:t},o.createElement("img",{src:n,alt:"\u622a\u56fe".concat(t)}),o.createElement("span",{"data-image":t,className:"close-btn clear-img",onClick:e.onClearImg}))})))},n}(o.PureComponent);n.default=Object(r.b)()(x)}}]);