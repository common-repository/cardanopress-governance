!function(){var t={960:function(t,e,r){t.exports=r(410)},410:function(t){var e=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof y?e:y,a=Object.create(o.prototype),i=new k(n||[]);return a._invoke=function(t,e,r){var n=p;return function(o,a){if(n===h)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw a;return N()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=E(i,r);if(c){if(c===v)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===p)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var s=f(t,e,r);if("normal"===s.type){if(n=r.done?d:l,s.arg===v)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=d,r.method="throw",r.arg=s.arg)}}}(t,r,i),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var p="suspendedStart",l="suspendedYield",h="executing",d="completed",v={};function y(){}function g(){}function w(){}var m={};s(m,a,(function(){return this}));var x=Object.getPrototypeOf,b=x&&x(x(F([])));b&&b!==r&&n.call(b,a)&&(m=b);var L=w.prototype=y.prototype=Object.create(m);function P(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){function r(o,a,i,c){var s=f(t[o],t,a);if("throw"!==s.type){var u=s.arg,p=u.value;return p&&"object"==typeof p&&n.call(p,"__await")?e.resolve(p.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(p).then((function(t){u.value=t,i(u)}),(function(t){return r("throw",t,i,c)}))}c(s.arg)}var o;this._invoke=function(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}}function E(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,E(t,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=f(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,v;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function F(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:N}}function N(){return{value:e,done:!0}}return g.prototype=w,s(L,"constructor",w),s(w,"constructor",g),g.displayName=s(w,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,s(t,c,"GeneratorFunction")),t.prototype=Object.create(L),t},t.awrap=function(t){return{__await:t}},P(_.prototype),s(_.prototype,i,(function(){return this})),t.AsyncIterator=_,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new _(u(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},P(L),s(L,c,"Generator"),s(L,a,(function(){return this})),s(L,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=F,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(O),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var s=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(s&&u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:F(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=e}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var a=e[n]={exports:{}};return t[n](a,a.exports,r),a.exports}r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,{a:e}),e},r.d=function(t,e){for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},function(){"use strict";function t(t,e,r,n,o,a,i){try{var c=t[a](i),s=c.value}catch(t){return void r(t)}c.done?e(s):Promise.resolve(s).then(n,o)}function e(e){return function(){var r=this,n=arguments;return new Promise((function(o,a){var i=e.apply(r,n);function c(e){t(i,o,a,c,s,"next",e)}function s(e){t(i,o,a,c,s,"throw",e)}c(void 0)}))}}var n=r(960),o=r.n(n),a=window.cardanoPressGovernanceMessages||{voting:"",invalid:""},i=function(t,e){return(1+((t=100*parseFloat(t))+(e=parseFloat(e)))/1e6).toFixed(6)},c=function(){var t=e(o().mark((function t(e,r){var n,i;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("0"!==e){t.next=2;break}return t.abrupt("return",{success:!1,data:a.invalid});case 2:return t.next=4,s(e,r);case 4:if((n=t.sent).success){t.next=7;break}return t.abrupt("return",n);case 7:return t.next=9,u(e,r,n.data);case 9:if(!(i=t.sent).success){t.next=14;break}return t.next=13,f(e,r,i.data.transaction);case 13:return t.abrupt("return",t.sent);case 14:return t.abrupt("return",i);case 15:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}(),s=function(){var t=e(o().mark((function t(e,r){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(cardanoPress.ajaxUrl,{method:"POST",body:new URLSearchParams({_wpnonce:cardanoPress._nonce,action:"cp-governance_proposal_vote_verify",proposalId:e,optionValue:r})}).then((function(t){return t.json()}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}(),u=function(){var t=e(o().mark((function t(e,r,n){var a,c,s,u;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=i(e,r),t.prev=1,c=cardanoPress.api.adaToLovelace(a),t.next=5,cardanoPress.api.getConnectedWallet();case 5:return s=t.sent,t.next=8,s.getChangeAddress();case 8:return u=t.sent,n.votingFee.amount=cardanoPress.api.adaToLovelace(n.votingFee.amount),console.log([{address:u,amount:c},n.votingFee],[{address:u,amount:c},n.votingFee].filter((function(t){return t.amount&&t.address}))),t.next=13,cardanoPress.wallet.multisendTx([{address:u,amount:c},n.votingFee].filter((function(t){return t.amount&&t.address})));case 13:return t.abrupt("return",t.sent);case 16:return t.prev=16,t.t0=t.catch(1),t.abrupt("return",{success:!1,data:t.t0});case 19:case"end":return t.stop()}}),t,null,[[1,16]])})));return function(e,r,n){return t.apply(this,arguments)}}(),f=function(){var t=e(o().mark((function t(e,r,n){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(cardanoPress.ajaxUrl,{method:"POST",body:new URLSearchParams({_wpnonce:cardanoPress._nonce,action:"cp-governance_proposal_vote_complete",proposalId:e,optionValue:r,transaction:n})}).then((function(t){return t.json()}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,r,n){return t.apply(this,arguments)}}();window.addEventListener("alpine:init",(function(){var t=window.Alpine||{},r=window.cardanoPress||{};t.data("cardanoPressGovernance",(function(){return{isProcessing:!1,options:[],selected:"",voted:"",power:"",winner:"",init:function(){var t=this;return e(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.voted=t.$root.dataset.voted,t.power=parseInt(t.$root.dataset.power),t.selected=t.voted,t.options=JSON.parse(t.$root.dataset.options),t.$root.dataset.complete&&0!==Object.values(t.options).filter((function(t){return t>0})).length&&(t.winner=Object.keys(t.options).reduce((function(e,r){return t.options[e]>t.options[r]?e:r})),t.selected=t.winner),console.log("CardanoPress Governance ready!");case 6:case"end":return e.stop()}}),e)})))()},getData:function(t,e){void 0===e&&(e=!1);var r,n,o,a=this.options[t];return e?(r=a,o=this.options,n=Object.values(o).reduce((function(t,e){return t+e})),100*r/n||0).toFixed(2):a},isDisabled:function(t){return void 0===t&&(t=!1),!this.isConnected||!this.power||this.isProcessing||!!t&&!this.selected||!!this.voted},isWinner:function(t){return t===this.winner},hasVoted:function(t){return this.voted===t},handleVote:function(){var t=this;return e(o().mark((function e(){var n,i;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.api.addNotice({id:"proposalVote",type:"info",text:a.voting}),t.isProcessing=!0,n=t.$root.dataset.proposal||"0",e.next=5,c(n,t.selected);case 5:i=e.sent,r.api.removeNotice("proposalVote"),i.success?(t.options=i.data.data,t.voted=t.selected,r.api.addNotice({type:"info",text:i.data.message})):r.api.addNotice({type:"warning",text:i.data}),t.isProcessing=!1;case 9:case"end":return e.stop()}}),e)})))()}}}))}))}()}();