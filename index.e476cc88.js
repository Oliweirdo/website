!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);n(1);function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,u=!0,c=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return u=e.done,e},e:function(e){c=!0,i=e},f:function(){try{u||null==n.return||n.return()}finally{if(c)throw i}}}}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var i=document.querySelector(".hamburger"),u=document.querySelector(".nav-menu");i.addEventListener("click",(function(){i.classList.toggle("active"),u.classList.toggle("active")})),document.querySelectorAll(".nav-menu").forEach((function(e){return e.addEventListener("click",(function(){i.classList.remove("active"),u.classList.remove("active")}))})),document.getElementById("cards").onmousemove=function(e){var t,n=o(document.getElementsByClassName("card"));try{for(n.s();!(t=n.n()).done;){var r=t.value,a=r.getBoundingClientRect(),i=e.clientX-a.left,u=e.clientY-a.top;r.style.setProperty("--mouse-x","".concat(i,"px")),r.style.setProperty("--mouse-y","".concat(u,"px"))}}catch(e){n.e(e)}finally{n.f()}};var c=["Oliwia Matusik","frontend developer"],l=new(function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.el=t,this.chars="!<>-_\\/[]{}—=+*^?#________",this.update=this.update.bind(this)}var t,n,o;return t=e,(n=[{key:"setText",value:function(e){var t=this,n=this.el.innerText,r=Math.max(n.length,e.length),o=new Promise((function(e){return t.resolve=e}));this.queue=[];for(var a=0;a<r;a++){var i=n[a]||"",u=e[a]||"",c=Math.floor(40*Math.random()),l=c+Math.floor(40*Math.random());this.queue.push({from:i,to:u,start:c,end:l})}return cancelAnimationFrame(this.frameRequest),this.frame=0,this.update(),o}},{key:"update",value:function(){for(var e="",t=0,n=0,r=this.queue.length;n<r;n++){var o=this.queue[n],a=o.from,i=o.to,u=o.start,c=o.end,l=o.char;this.frame>=c?(t++,e+=i):this.frame>=u?((!l||Math.random()<.28)&&(l=this.randomChar(),this.queue[n].char=l),e+='<span class="dud">'.concat(l,"</span>")):e+=a}this.el.innerHTML=e,t===this.queue.length?this.resolve():(this.frameRequest=requestAnimationFrame(this.update),this.frame++)}},{key:"randomChar",value:function(){return this.chars[Math.floor(Math.random()*this.chars.length)]}}])&&r(t.prototype,n),o&&r(t,o),e}())(document.querySelector(".text")),s=0;!function e(){l.setText(c[s]).then((function(){setTimeout(e,1e3)})),s=(s+1)%c.length}()},function(e,t,n){}]);