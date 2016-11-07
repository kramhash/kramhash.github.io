/*! modernizr 3.2.0 (Custom Build) | MIT *
 * http://modernizr.com/download/?-getusermedia-inlinesvg-localstorage-requestanimationframe-svg-svgfilters-touchevents-userdata-shiv !*/
!function(e,t,n){function r(e){var t=S.className,n=E._config.classPrefix||"";if(w&&(t=t.baseVal),E._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}E._config.enableClasses&&(t+=" "+n+e.join(" "+n),w?S.className.baseVal=t:S.className=t)}function o(e,t){return typeof e===t}function a(){var e,t,n,r,a,i,s;for(var l in y)if(y.hasOwnProperty(l)){if(e=[],t=y[l],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(r=o(t.fn,"function")?t.fn():t.fn,a=0;a<e.length;a++)i=e[a],s=i.split("."),1===s.length?E[s[0]]=r:(!E[s[0]]||E[s[0]]instanceof Boolean||(E[s[0]]=new Boolean(E[s[0]])),E[s[0]][s[1]]=r),g.push((r?"":"no-")+s.join("-"))}}function i(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):w?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function s(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function l(){var e=t.body;return e||(e=i(w?"svg":"body"),e.fake=!0),e}function c(e,n,r,o){var a,s,c,u,f="modernizr",d=i("div"),p=l();if(parseInt(r,10))for(;r--;)c=i("div"),c.id=o?o[r]:f+(r+1),d.appendChild(c);return a=i("style"),a.type="text/css",a.id="s"+f,(p.fake?p:d).appendChild(a),p.appendChild(d),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(t.createTextNode(e)),d.id=f,p.fake&&(p.style.background="",p.style.overflow="hidden",u=S.style.overflow,S.style.overflow="hidden",S.appendChild(p)),s=n(d,e),p.fake?(p.parentNode.removeChild(p),S.style.overflow=u,S.offsetHeight):d.parentNode.removeChild(d),!!s}function u(e,t){return function(){return e.apply(t,arguments)}}function f(e,t,n){var r;for(var a in e)if(e[a]in t)return n===!1?e[a]:(r=t[e[a]],o(r,"function")?u(r,n||t):r);return!1}function d(e,t){return!!~(""+e).indexOf(t)}function p(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function m(t,r){var o=t.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(p(t[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var a=[];o--;)a.push("("+p(t[o])+":"+r+")");return a=a.join(" or "),c("@supports ("+a+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return n}function h(e,t,r,a){function l(){u&&(delete j.style,delete j.modElem)}if(a=o(a,"undefined")?!1:a,!o(r,"undefined")){var c=m(e,r);if(!o(c,"undefined"))return c}for(var u,f,p,h,v,g=["modernizr","tspan"];!j.style;)u=!0,j.modElem=i(g.shift()),j.style=j.modElem.style;for(p=e.length,f=0;p>f;f++)if(h=e[f],v=j.style[h],d(h,"-")&&(h=s(h)),j.style[h]!==n){if(a||o(r,"undefined"))return l(),"pfx"==t?h:!0;try{j.style[h]=r}catch(y){}if(j.style[h]!=v)return l(),"pfx"==t?h:!0}return l(),!1}function v(e,t,n,r,a){var i=e.charAt(0).toUpperCase()+e.slice(1),s=(e+" "+_.join(i+" ")+i).split(" ");return o(t,"string")||o(t,"undefined")?h(s,t,r,a):(s=(e+" "+z.join(i+" ")+i).split(" "),f(s,t,n))}var g=[],y=[],C={_version:"3.2.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){y.push({name:e,fn:t,options:n})},addAsyncTest:function(e){y.push({name:null,fn:e})}},E=function(){};E.prototype=C,E=new E,E.addTest("svg",!!t.createElementNS&&!!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect),E.addTest("localstorage",function(){var e="modernizr";try{return localStorage.setItem(e,e),localStorage.removeItem(e),!0}catch(t){return!1}}),E.addTest("svgfilters",function(){var t=!1;try{t="SVGFEColorMatrixElement"in e&&2==SVGFEColorMatrixElement.SVG_FECOLORMATRIX_TYPE_SATURATE}catch(n){}return t});var S=t.documentElement,w="svg"===S.nodeName.toLowerCase();w||!function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=C.elements;return"string"==typeof e?e.split(" "):e}function o(e,t){var n=C.elements;"string"!=typeof n&&(n=n.join(" ")),"string"!=typeof e&&(e=e.join(" ")),C.elements=n+" "+e,c(t)}function a(e){var t=y[e[v]];return t||(t={},g++,e[v]=g,y[g]=t),t}function i(e,n,r){if(n||(n=t),f)return n.createElement(e);r||(r=a(n));var o;return o=r.cache[e]?r.cache[e].cloneNode():h.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),!o.canHaveChildren||m.test(e)||o.tagUrn?o:r.frag.appendChild(o)}function s(e,n){if(e||(e=t),f)return e.createDocumentFragment();n=n||a(e);for(var o=n.frag.cloneNode(),i=0,s=r(),l=s.length;l>i;i++)o.createElement(s[i]);return o}function l(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return C.shivMethods?i(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-:]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(C,t.frag)}function c(e){e||(e=t);var r=a(e);return!C.shivCSS||u||r.hasCSS||(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),f||l(e,r),e}var u,f,d="3.7.3",p=e.html5||{},m=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,h=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,v="_html5shiv",g=0,y={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",u="hidden"in e,f=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){u=!0,f=!0}}();var C={elements:p.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:d,shivCSS:p.shivCSS!==!1,supportsUnknownElements:f,shivMethods:p.shivMethods!==!1,type:"default",shivDocument:c,createElement:i,createDocumentFragment:s,addElements:o};e.html5=C,c(t),"object"==typeof module&&module.exports&&(module.exports=C)}("undefined"!=typeof e?e:this,t);var x=C._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):[];C._prefixes=x,E.addTest("userdata",!!i("div").addBehavior),E.addTest("inlinesvg",function(){var e=i("div");return e.innerHTML="<svg/>","http://www.w3.org/2000/svg"==("undefined"!=typeof SVGRect&&e.firstChild&&e.firstChild.namespaceURI)});var b=C.testStyles=c;E.addTest("touchevents",function(){var n;if("ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch)n=!0;else{var r=["@media (",x.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");b(r,function(e){n=9===e.offsetTop})}return n});var T="Moz O ms Webkit",_=C._config.usePrefixes?T.split(" "):[];C._cssomPrefixes=_;var N=function(t){var r,o=x.length,a=e.CSSRule;if("undefined"==typeof a)return n;if(!t)return!1;if(t=t.replace(/^@/,""),r=t.replace(/-/g,"_").toUpperCase()+"_RULE",r in a)return"@"+t;for(var i=0;o>i;i++){var s=x[i],l=s.toUpperCase()+"_"+r;if(l in a)return"@-"+s.toLowerCase()+"-"+t}return!1};C.atRule=N;var z=C._config.usePrefixes?T.toLowerCase().split(" "):[];C._domPrefixes=z;var F={elem:i("modernizr")};E._q.push(function(){delete F.elem});var j={style:F.elem.style};E._q.unshift(function(){delete j.style}),C.testAllProps=v;var M=C.prefixed=function(e,t,n){return 0===e.indexOf("@")?N(e):(-1!=e.indexOf("-")&&(e=s(e)),t?v(e,t,n):v(e,"pfx"))};E.addTest("requestanimationframe",!!M("requestAnimationFrame",e),{aliases:["raf"]}),E.addTest("getusermedia",!!M("getUserMedia",navigator)),a(),r(g),delete C.addTest,delete C.addAsyncTest;for(var k=0;k<E._q.length;k++)E._q[k]();e.Modernizr=E}(window,document),function(){Modernizr.touchevents===!0?/sp\/?(faq.html|store.html)?$/.test(location.href)===!1&&(console.log("goto sp"),location.replace("sp/")):/sp\/?(index.html)?$/.test(location.href)===!0&&location.replace("../")}.call(this);