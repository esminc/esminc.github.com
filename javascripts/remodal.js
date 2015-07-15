!function(t,n){"function"==typeof define&&define.amd?define(["jquery"],function(e){return n(t,e)}):"object"==typeof exports?n(t,require("jquery")):n(t,t.jQuery||t.Zepto)}(this,function(t,n){"use strict";function e(t){if(N&&"none"===t.css("animation-name")&&"none"===t.css("-webkit-animation-name")&&"none"===t.css("-moz-animation-name")&&"none"===t.css("-o-animation-name")&&"none"===t.css("-ms-animation-name"))return 0;var n,e,i,a,o=t.css("animation-duration")||t.css("-webkit-animation-duration")||t.css("-moz-animation-duration")||t.css("-o-animation-duration")||t.css("-ms-animation-duration")||"0s",s=t.css("animation-delay")||t.css("-webkit-animation-delay")||t.css("-moz-animation-delay")||t.css("-o-animation-delay")||t.css("-ms-animation-delay")||"0s",r=t.css("animation-iteration-count")||t.css("-webkit-animation-iteration-count")||t.css("-moz-animation-iteration-count")||t.css("-o-animation-iteration-count")||t.css("-ms-animation-iteration-count")||"1";for(o=o.split(", "),s=s.split(", "),r=r.split(", "),a=0,e=o.length,n=Number.NEGATIVE_INFINITY;e>a;a++)i=parseFloat(o[a])*parseInt(r[a],10)+parseFloat(s[a]),i>n&&(n=i);return i}function i(){if(n(document.body).height()<=n(window).height())return 0;var t,e,i=document.createElement("div"),a=document.createElement("div");return i.style.visibility="hidden",i.style.width="100px",document.body.appendChild(i),t=i.offsetWidth,i.style.overflow="scroll",a.style.width="100%",i.appendChild(a),e=a.offsetWidth,i.parentNode.removeChild(i),t-e}function a(){var t,e,a=n("html"),o=h+"-is-locked";a.hasClass(o)||(e=n(document.body),t=parseInt(e.css("padding-right"),10)+i(),e.css("padding-right",t+"px"),a.addClass(o))}function o(){var t,e,a=n("html"),o=h+"-is-locked";a.hasClass(o)&&(e=n(document.body),t=parseInt(e.css("padding-right"),10)-i(),e.css("padding-right",t+"px"),a.removeClass(o))}function s(t,n,e,i){t.$bg.removeClass(h+"-is-"+v.CLOSING+" "+h+"-is-"+v.OPENING+" "+h+"-is-"+v.CLOSED+" "+h+"-is-"+v.OPENED).addClass(h+"-is-"+n),t.$overlay.removeClass(h+"-is-"+v.CLOSING+" "+h+"-is-"+v.OPENING+" "+h+"-is-"+v.CLOSED+" "+h+"-is-"+v.OPENED).addClass(h+"-is-"+n),t.$wrapper.removeClass(h+"-is-"+v.CLOSING+" "+h+"-is-"+v.OPENING+" "+h+"-is-"+v.CLOSED+" "+h+"-is-"+v.OPENED).addClass(h+"-is-"+n),t.$modal.removeClass(h+"-is-"+v.CLOSING+" "+h+"-is-"+v.OPENING+" "+h+"-is-"+v.CLOSED+" "+h+"-is-"+v.OPENED).addClass(h+"-is-"+n),t.state=n,!e&&t.$modal.trigger({type:n,reason:i},[{reason:i}])}function r(t,i,a){var o=0,s=function(t){t.target===this&&o++},r=function(t){t.target===this&&0===--o&&(n.each(["$bg","$overlay","$wrapper","$modal"],function(t,n){a[n].off(g+" "+O)}),i())};n.each(["$bg","$overlay","$wrapper","$modal"],function(t,n){a[n].on(g,s).on(O,r)}),t(),0===e(a.$bg)&&0===e(a.$overlay)&&0===e(a.$wrapper)&&0===e(a.$modal)&&(n.each(["$bg","$overlay","$wrapper","$modal"],function(t,n){a[n].off(g+" "+O)}),i())}function c(t){t.state!==v.CLOSED&&(n.each(["$bg","$overlay","$wrapper","$modal"],function(n,e){t[e].off(g+" "+O)}),t.$bg.removeClass(t.settings.modifier),t.$overlay.removeClass(t.settings.modifier).hide(),t.$wrapper.hide(),o(),s(t,v.CLOSED,!0))}function d(t){var n,e,i,a,o={};for(t=t.replace(/\s*:\s*/g,":").replace(/\s*,\s*/g,","),n=t.split(","),a=0,e=n.length;e>a;a++)n[a]=n[a].split(":"),i=n[a][1],("string"==typeof i||i instanceof String)&&(i="true"===i||("false"===i?!1:i)),("string"==typeof i||i instanceof String)&&(i=isNaN(i)?i:+i),o[n[a][0]]=i;return o}function l(){var t,e,i=location.hash.replace("#","");if(i){try{e=n("[data-"+f+"-id="+i.replace(new RegExp("/","g"),"\\/")+"]")}catch(a){}e&&e.length&&(t=n[f].lookup[e.data(f)],t&&t.settings.hashTracking&&t.open())}else p&&p.state===v.OPENED&&p.settings.hashTracking&&p.close()}function m(t,e){var i=n(document.body),a=this;a.settings=n.extend({},C,e),a.index=n[f].lookup.push(a)-1,a.state=v.CLOSED,a.$overlay=n("."+h+"-overlay"),a.$overlay.length||(a.$overlay=n("<div>").addClass(h+"-overlay "+h+"-is-"+v.CLOSED).hide(),i.append(a.$overlay)),a.$bg=n("."+h+"-bg").addClass(h+"-is-"+v.CLOSED),a.$modal=t,a.$modal.addClass(h+"-is-initialized "+h+" "+a.settings.modifier+" "+h+"-is-"+v.CLOSED),a.$wrapper=n("<div>").addClass(h+"-wrapper "+a.settings.modifier+" "+h+"-is-"+v.CLOSED).hide().append(a.$modal),i.append(a.$wrapper),a.$wrapper.on("click."+h,"[data-"+f+'-action="close"]',function(t){t.preventDefault(),a.close()}),a.$wrapper.on("click."+h,"[data-"+f+'-action="cancel"]',function(t){t.preventDefault(),a.$modal.trigger(E.CANCELLATION),a.settings.closeOnCancel&&a.close(E.CANCELLATION)}),a.$wrapper.on("click."+h,"[data-"+f+'-action="confirm"]',function(t){t.preventDefault(),a.$modal.trigger(E.CONFIRMATION),a.settings.closeOnConfirm&&a.close(E.CONFIRMATION)}),a.$wrapper.on("click."+h,function(t){var e=n(t.target);e.hasClass(h+"-wrapper")&&a.settings.closeOnOutsideClick&&a.close()})}var p,u,f="remodal",h=t.REMODAL_GLOBALS&&t.REMODAL_GLOBALS.NAMESPACE||f,g=n.map(["animationstart","webkitAnimationStart","MSAnimationStart","oAnimationStart"],function(t){return t+"."+h}).join(" "),O=n.map(["animationend","webkitAnimationEnd","MSAnimationEnd","oAnimationEnd"],function(t){return t+"."+h}).join(" "),C=n.extend({hashTracking:!0,closeOnConfirm:!0,closeOnCancel:!0,closeOnEscape:!0,closeOnOutsideClick:!0,modifier:""},t.REMODAL_GLOBALS&&t.REMODAL_GLOBALS.DEFAULTS),v={CLOSING:"closing",CLOSED:"closed",OPENING:"opening",OPENED:"opened"},E={CONFIRMATION:"confirmation",CANCELLATION:"cancellation"},N=function(){var t=document.createElement("div").style;return void 0!==t.animationName||void 0!==t.WebkitAnimationName||void 0!==t.MozAnimationName||void 0!==t.msAnimationName||void 0!==t.OAnimationName}();m.prototype.open=function(){var t,e=this;e.state!==v.OPENING&&e.state!==v.CLOSING&&(t=e.$modal.attr("data-"+f+"-id"),t&&e.settings.hashTracking&&(u=n(window).scrollTop(),location.hash=t),p&&p!==e&&c(p),p=e,a(),e.$bg.addClass(e.settings.modifier),e.$overlay.addClass(e.settings.modifier).show(),e.$wrapper.show().scrollTop(0),r(function(){s(e,v.OPENING)},function(){s(e,v.OPENED)},e))},m.prototype.close=function(t){var e=this;e.state!==v.OPENING&&e.state!==v.CLOSING&&(e.settings.hashTracking&&e.$modal.attr("data-"+f+"-id")===location.hash.substr(1)&&(location.hash="",n(window).scrollTop(u)),r(function(){s(e,v.CLOSING,!1,t)},function(){e.$bg.removeClass(e.settings.modifier),e.$overlay.removeClass(e.settings.modifier).hide(),e.$wrapper.hide(),o(),s(e,v.CLOSED,!1,t)},e))},m.prototype.getState=function(){return this.state},m.prototype.destroy=function(){var t,e=n[f].lookup;c(this),this.$wrapper.remove(),delete e[this.index],t=n.grep(e,function(t){return!!t}).length,0===t&&(this.$overlay.remove(),this.$bg.removeClass(h+"-is-"+v.CLOSING+" "+h+"-is-"+v.OPENING+" "+h+"-is-"+v.CLOSED+" "+h+"-is-"+v.OPENED))},n[f]={lookup:[]},n.fn[f]=function(t){var e,i;return this.each(function(a,o){i=n(o),null==i.data(f)?(e=new m(i,t),i.data(f,e.index),e.settings.hashTracking&&i.attr("data-"+f+"-id")===location.hash.substr(1)&&e.open()):e=n[f].lookup[i.data(f)]}),e},n(document).ready(function(){n(document).on("click","[data-"+f+"-target]",function(t){t.preventDefault();var e=t.currentTarget,i=e.getAttribute("data-"+f+"-target"),a=n("[data-"+f+"-id="+i+"]");n[f].lookup[a.data(f)].open()}),n(document).find("."+h).each(function(t,e){var i=n(e),a=i.data(f+"-options");a?("string"==typeof a||a instanceof String)&&(a=d(a)):a={},i[f](a)}),n(document).on("keyup."+h,function(t){p&&p.settings.closeOnEscape&&p.state===v.OPENED&&27===t.keyCode&&p.close()}),n(window).on("hashchange."+h,l)})});