"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;function _instanceof(t,r){if(r!=null&&typeof Symbol!=="undefined"&&r[Symbol.hasInstance]){return!!r[Symbol.hasInstance](t)}else{return t instanceof r}}function _toConsumableArray(t){return _arrayWithoutHoles(t)||_iterableToArray(t)||_unsupportedIterableToArray(t)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(t,r){if(!t)return;if(typeof t==="string")return _arrayLikeToArray(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);if(e==="Object"&&t.constructor)e=t.constructor.name;if(e==="Map"||e==="Set")return Array.from(t);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return _arrayLikeToArray(t,r)}function _iterableToArray(t){if(typeof Symbol!=="undefined"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function _arrayWithoutHoles(t){if(Array.isArray(t))return _arrayLikeToArray(t)}function _arrayLikeToArray(t,r){if(r==null||r>t.length)r=t.length;for(var e=0,n=new Array(r);e<r;e++){n[e]=t[e]}return n}var timer=0;function adjustColumnWidth(s){var t=s.querySelector("colgroup");var r=_toConsumableArray(t.querySelectorAll("col"));r.forEach(function(t){var r,e,n;var o=t.getAttribute("name");var a=[].concat(_toConsumableArray(s.querySelectorAll("td.".concat(o))),_toConsumableArray(s.querySelectorAll("th.".concat(o))));if((r=a[0])!==null&&r!==void 0&&(e=r.classList)!==null&&e!==void 0&&(n=e.contains)!==null&&n!==void 0&&n.call(e,"no-fix")){return}if(_instanceof(a,Array)&&a.length>1){adjustColumnWidth=function t(){};var l=a.map(function(t){var r;t.querySelectorAll(".cell").forEach(function(t){t.style.cssText+="white-space:nowrap !important";t.style.cssText+="width: auto !important";t.style.cssText+="display: inline-block !important"});return((r=t.querySelector(".cell"))===null||r===void 0?void 0:r.scrollWidth)||0});var i=Math.max.apply(Math,_toConsumableArray(l));var u=32;s.querySelectorAll("col[name=".concat(o,"]")).forEach(function(t){t.setAttribute("width",i+u);t.style.cssText+="width: ".concat(i+u,"px !important")})}else{timer=setTimeout(function(){adjustColumnWidth(s)},100)}})}var ssColumns={inserted:function t(r){adjustColumnWidth(r)},componentUpdated:function t(r){adjustColumnWidth(r)}};var install=function t(r){r.directive("ssColumns",ssColumns)};var _default={install:install};exports.default=_default;
