(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"8+s/":function(e,t,r){"use strict";r("sc67"),r("AqHK"),r("pJf4"),r("pS08"),r("R48M");var n,a=r("q1tI"),o=(n=a)&&"object"==typeof n&&"default"in n?n.default:n;function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var s,l=[];function u(){s=e(l.map((function(e){return e.props}))),f.canUseDOM?t(s):r&&(s=r(s))}var f=function(e){var t,r;function a(){return e.apply(this,arguments)||this}r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,a.peek=function(){return s},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=s;return s=void 0,l=[],e};var i=a.prototype;return i.UNSAFE_componentWillMount=function(){l.push(this),u()},i.componentDidUpdate=function(){u()},i.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),u()},i.render=function(){return o.createElement(n,this.props)},a}(a.PureComponent);return i(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),i(f,"canUseDOM",c),f}}},C9fy:function(e,t,r){var n=Date.prototype,a=n.toString,o=n.getTime;new Date(NaN)+""!="Invalid Date"&&r("IYdN")(n,"toString",(function(){var e=o.call(this);return e==e?a.call(this):"Invalid Date"}))},EH9Q:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"TheRoyalBuddhaTandoori.com","description":"The Royal Buddha Tandoori Moraira website","author":"@sandeshsth"}}}}')},"I/Ru":function(e,t,r){"use strict";var n=r("Wbzz"),a=r("q1tI"),o=r.n(a),i=(r("E5k/"),function(e){var t=e.children,r=e.icon,n=e.style,a=r.type,i=r.props,c={height:20,width:20,marginRight:5};return t?o.a.createElement("span",{style:Object.assign({display:"flex"},n)},o.a.createElement(a,Object.assign({},i,{style:c})),t):o.a.createElement(a,Object.assign({},i,{style:Object.assign(Object.assign({},c),n)}))}),c=function(e){var t=e.children;return o.a.createElement(i,{icon:o.a.createElement("img",{alt:"Facebook",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAACYklEQVQ4jb2TP2hTURTGv3vzqhRDaYutbWyNtYipxU0FFxcj6ipdHERwLNKhYKXg8JaiFJx0ENShgouICI4ODlEc6p8KUsQqQoiNTW3SkNqY93K/49C+5OUlsQjimQ68j9875/7uBf5xqT9+tUUP7Vs7aAz3lAEoY5JfUh3zsBX/Cjj8MN/JUmiC5AUR6SEFpEBEQEraUGa0WNPJ0fbclsChB4XjIB6R0rUJ8MP8fUaIkfRYd6IpcBP2jJRtW8C83qFhfHk8kqgDbqypPzaarHO7wuUjrTjcY2FbCHjyqYSplwUvkyk7biw/Gc0BgOUB6YSukGy45s0TYRyLtFQ2iYS1L8NuhPQEgMnqhLboAwOFbw0EoKtVYfZ8BwDgztw67r5fR6FEZNYMROhll/LF/ghsRQ0AsejP4UYwUrB7R/WY738o4muuHISBlF1hnRwCAA0A1KavmQDLp63oeBDWZxX7K2doCJFA4OTeFtw73VZzpV5f7AIA3Jot4Orz1ZofG0KqUoxJiaAmIE3fArCQdevEiTKpGinR3myKlF4vEG4Bom0hHNpp4UZ8Y9Jzj38gvWbwecXFatH4NuKiYw/2AUr0BlDRUGb8K+d/EXPfHSxk3cpk88su3i6WAjABoGYAJRUpAKDFmiYlEzxsiFSAlAbiIEsO9HSF4zXJ0facECMi4vguLegDBsUJpCSuGoE9sFoHBID0WHeChnFSMv6rUQEGJhNXxctTgy/8jBogACyPRxJlx40ZynWIpP1ATwCAay5CsSCsarlZ2aLPxrJHz+y3TgEat1+tPH1zKfrOE/Bf6jfqoGfDhy3C+QAAAABJRU5ErkJggg=="}),style:{color:"#3b5998"}},t)};c.defaultProps={children:""};var s=c,l=function(e){var t=e.children;return o.a.createElement(i,{icon:o.a.createElement("img",{alt:"Tripadvisor",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAADfElEQVQ4je2UTWxTBQDH/+9z3XttX/tKW9ey0XVfDJwCWSIsrmZFEkZijRchJCzEuJGgJgtqwuIF48EYdiAGDnIyRknGgQ11UyEzggZxTEwkhdV+rNnsB9t8o++9ruv79KwX9Ky/6z/53X5/4D8H8ZidBxAB4AawAWAZgPRvhX5BEN52cI4+WHYHYDsI2LZlgbQBm6aZxVqtlqvX65/VarUrAOy/CAVBeJ+iKNE0TYKk6YCu1w8ILsHqDNbkNxMO8elW2uFxklhXLaQKpv7OpY1HJdnp0TSNMgxTphlqplqt5kiQXsuyTJokye5oW/TFcrkMnuPBOXmYugHJJrlPfmakC9tXHADgaiRw8btGdYMQxfBWF8XxPFRV8aiyfJShGPi2+LC0vPQpQVHUIX/AP928bRteOnwEfbEYSsUivp+dxdyPt8BSdmXqjVX36Md29f6qyO8fHCSGhkfAMAw0TcP01CS+ufo5spk0VEU9QvTs2XWRJqjh0bExTF2+jEwqBcMwEAqHMTQygvNnzyLgqq8X1izn1mgbM/za6zg/Po7i8jI4pxP7+vtxeGgIp06cgK5p98gGpuGFnt278bBcRj6bxcD+ARw8eACmaWJyYgLPxuN4sCi7dcNkBhMJfHTuHDRNw97nB9Db14fZr7/Cw1IJT4RCsGFHyaqiePrjcaSSSTSFQhBX5rB37QqaIxHIlQpaIhFsbm5SBEHAt8UPSZKwvWcnbot/IKOtINDUhOszM/B4PAAAkmEZvVwsor2rC8VCAVrzM/jV3Q9FluEWBOQyGRi6Adu2cfPbWfiDQeQzOTwpufBUuAOqrED0+VCpPALDsmWSopm716a/RCweR9eOHZj64hqu3riH/GIOR48fRyqZhKPRAUVR8MudO3jl5ElUJAkPbszh+sQkOJ7DYCKBpXweuqbPETzPB6Pt7QuCIHhePnYMu3p7kUmn0d7ZiQvj45j/6bbBcxylKIrtdrkhiCI5evo0CoUCLNPEvlgMH5w5g1QyqS9msy0EAPA8H+zo7prUNut7WLaBFbxeQlpbBc0wKsfxr6YXFk6ZpqkKXu9Nt8s1RjN0Q6ApBJZlsFIqQ1Vkk2bY9+7Oz7/79/T4cDg8IPi8z+n1+v10Kn0JQN3pdHarqroOoCwIQltLa+uHXKNjJwiCNkzrd0VV3/otmfzhMb/wP/+QPwFPw3Wiu+KXgQAAAABJRU5ErkJggg=="}),style:{color:"#3b9874"}},t)};l.defaultProps={children:""};var u=l,f=r("wEa+"),p=r.n(f),d=r("Wmhb"),m=r.n(d),h=function(){return o.a.createElement("header",{className:m.a.root},o.a.createElement("nav",{className:"container"},o.a.createElement("div",{className:"row justify-content-center"},o.a.createElement(n.Link,{className:"col-auto order-md-2",to:"/"},o.a.createElement("img",{className:m.a.logo,src:p.a,alt:"The Royal Buddha Tandoori Logo",loading:"lazy"})),o.a.createElement("div",{className:"col-12 col-md row justify-content-center text-center align-items-center order-md-1"},o.a.createElement(n.Link,{className:"col",to:"/menu"},"Menu"),o.a.createElement(n.Link,{className:"col",to:"/catering"},"Catering"),o.a.createElement(n.Link,{className:"col",to:"/gallery"},"Gallery")),o.a.createElement("div",{className:"col-12 col-md row justify-content-center text-center align-items-center order-md-3 d-none d-md-flex"},o.a.createElement(n.Link,{className:"col",to:"/contact-us"},"Contact us"),o.a.createElement("a",{className:"col",href:"https://www.facebook.com/royalbuddhatandoori",rel:"noreferrer",target:"_blank"},o.a.createElement(s,null,"Facebook")),o.a.createElement("a",{className:"col",rel:"noreferrer",href:"https://www.tripadvisor.com/Restaurant_Review-g736284-d6914859-Reviews-The_Royal_Buddha_Tandoori-Moraira_Costa_Blanca_Province_of_Alicante_Valencian_Cou.html",target:"_blank"},o.a.createElement(u,null,"Tripadvisor"))))))};h.defaultProps={siteTitle:""};var y=h,g={hr:{margin:"0 0 1rem 0"},footer:{textAlign:"center",fontSize:12,paddingBottom:"1rem"}},b=function(e){var t=e.children;return o.a.createElement(o.a.Fragment,null,o.a.createElement(y,null),o.a.createElement("div",null,o.a.createElement("main",null,t),o.a.createElement("footer",{style:g.footer},o.a.createElement("hr",{style:g.hr}),o.a.createElement("nav",{className:"d-md-none"},o.a.createElement(n.Link,{to:"/contact-us"},"Contact us"),o.a.createElement("a",{href:"https://www.facebook.com/royalbuddhatandoori",rel:"noreferrer",target:"_blank"},o.a.createElement(s,null,"Facebook")),o.a.createElement("a",{rel:"noreferrer",href:"https://www.tripadvisor.com/Restaurant_Review-g736284-d6914859-Reviews-The_Royal_Buddha_Tandoori-Moraira_Costa_Blanca_Province_of_Alicante_Valencian_Cou.html",target:"_blank"},o.a.createElement(u,null,"Tripadvisor"))),o.a.createElement("hr",{style:g.hr}),"© Copyright ",(new Date).getFullYear(),"."," ","Made by ",o.a.createElement("a",{href:"https://sandeshshrestha.com"},"Sandesh Shrestha"))))};t.a=b},R48M:function(e,t,r){var n=r("P8UN");n(n.S+n.F*!r("QPJK"),"Object",{defineProperty:r("rjfK").f})},Wmhb:function(e,t,r){e.exports={root:"header-module--root--2pwHC",logo:"header-module--logo--U17LV"}},bmMU:function(e,t,r){"use strict";r("pJf4"),r("Ll4R"),r("q8oJ"),r("C9fy"),r("klQ5"),r("rzGZ"),r("Dq+y"),r("8npG"),r("Ggvi"),r("MIFh");var n=Array.isArray,a=Object.keys,o=Object.prototype.hasOwnProperty,i="undefined"!=typeof Element;e.exports=function(e,t){try{return function e(t,r){if(t===r)return!0;if(t&&r&&"object"==typeof t&&"object"==typeof r){var c,s,l,u=n(t),f=n(r);if(u&&f){if((s=t.length)!=r.length)return!1;for(c=s;0!=c--;)if(!e(t[c],r[c]))return!1;return!0}if(u!=f)return!1;var p=t instanceof Date,d=r instanceof Date;if(p!=d)return!1;if(p&&d)return t.getTime()==r.getTime();var m=t instanceof RegExp,h=r instanceof RegExp;if(m!=h)return!1;if(m&&h)return t.toString()==r.toString();var y=a(t);if((s=y.length)!==a(r).length)return!1;for(c=s;0!=c--;)if(!o.call(r,y[c]))return!1;if(i&&t instanceof Element&&r instanceof Element)return t===r;for(c=s;0!=c--;)if(!("_owner"===(l=y[c])&&t.$$typeof||e(t[l],r[l])))return!1;return!0}return t!=t&&r!=r}(e,t)}catch(r){if(r.message&&r.message.match(/stack|recursion/i)||-2146828260===r.number)return console.warn("Warning: react-fast-compare does not handle circular references.",r.name,r.message),!1;throw r}}},jNNy:function(e,t,r){"use strict";var n=r("EH9Q"),a=r("q1tI"),o=r.n(a),i=r("qhky");function c(e){var t=e.description,r=e.lang,a=e.meta,c=e.title,s=n.data.site,l=t||s.siteMetadata.description;return o.a.createElement(i.a,{htmlAttributes:{lang:r},title:c,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:c},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:l}].concat(a)},o.a.createElement("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css"}))}c.defaultProps={lang:"en",meta:[],description:""};var s=c;t.a=s},klQ5:function(e,t,r){var n=r("emib"),a=r("TUPI"),o=r("rjfK").f,i=r("chL8").f,c=r("mhTz"),s=r("lb9j"),l=n.RegExp,u=l,f=l.prototype,p=/a/g,d=/a/g,m=new l(p)!==p;if(r("QPJK")&&(!m||r("96qb")((function(){return d[r("sOol")("match")]=!1,l(p)!=p||l(d)==d||"/a/i"!=l(p,"i")})))){l=function(e,t){var r=this instanceof l,n=c(e),o=void 0===t;return!r&&n&&e.constructor===l&&o?e:a(m?new u(n&&!o?e.source:e,t):u((n=e instanceof l)?e.source:e,n&&o?s.call(e):t),r?this:f,l)};for(var h=function(e){e in l||o(l,e,{configurable:!0,get:function(){return u[e]},set:function(t){u[e]=t}})},y=i(u),g=0;y.length>g;)h(y[g++]);f.constructor=l,l.prototype=f,r("IYdN")(n,"RegExp",l)}r("to/b")("RegExp")},qhky:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return he}));r("wZFJ"),r("HQhv"),r("n7j8"),r("1dPr"),r("JHok"),r("OeI1"),r("MIFh"),r("sC2a"),r("sc67"),r("LagC"),r("pS08"),r("E5k/"),r("R48M"),r("m210"),r("4DPX"),r("U6Bt"),r("rzGZ"),r("Dq+y"),r("8npG"),r("Ggvi"),r("AqHK");var n,a,o,i,c=r("17x9"),s=r.n(c),l=r("8+s/"),u=r.n(l),f=r("bmMU"),p=r.n(f),d=r("q1tI"),m=r.n(d),h=r("MgzW"),y=r.n(h),g="bodyAttributes",b="htmlAttributes",A="titleAttributes",w={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},T=(Object.keys(w).map((function(e){return w[e]})),"charset"),v="cssText",E="href",C="http-equiv",O="innerHTML",S="itemprop",P="name",k="property",j="rel",R="src",N="target",I={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},x="defaultTitle",B="defer",L="encodeSpecialCharacters",M="onChangeClientState",U="titleTemplate",q=Object.keys(I).reduce((function(e,t){return e[I[t]]=t,e}),{}),F=[w.NOSCRIPT,w.SCRIPT,w.STYLE],H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Q=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},D=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),J=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Y=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},K=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},z=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},_=function(e){var t=Z(e,w.TITLE),r=Z(e,U);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=Z(e,x);return t||n||void 0},W=function(e){return Z(e,M)||function(){}},G=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return J({},e,t)}),{})},X=function(e,t){return t.filter((function(e){return void 0!==e[w.BASE]})).map((function(e){return e[w.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),a=0;a<n.length;a++){var o=n[a].toLowerCase();if(-1!==e.indexOf(o)&&r[o])return t.concat(r)}return t}),[])},V=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ne("Helmet: "+e+' should be of type "Array". Instead found type "'+H(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var a={};r.filter((function(e){for(var r=void 0,o=Object.keys(e),i=0;i<o.length;i++){var c=o[i],s=c.toLowerCase();-1===t.indexOf(s)||r===j&&"canonical"===e[r].toLowerCase()||s===j&&"stylesheet"===e[s].toLowerCase()||(r=s),-1===t.indexOf(c)||c!==O&&c!==v&&c!==S||(r=c)}if(!r||!e[r])return!1;var l=e[r].toLowerCase();return n[r]||(n[r]={}),a[r]||(a[r]={}),!n[r][l]&&(a[r][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(a),i=0;i<o.length;i++){var c=o[i],s=y()({},n[c],a[c]);n[c]=s}return e}),[]).reverse()},Z=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},$=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){$(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:e.requestAnimationFrame||$,re="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,ne=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,oe=function(e,t){var r=e.baseTag,n=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,s=e.onChangeClientState,l=e.scriptTags,u=e.styleTags,f=e.title,p=e.titleAttributes;se(w.BODY,n),se(w.HTML,a),ce(f,p);var d={baseTag:le(w.BASE,r),linkTags:le(w.LINK,o),metaTags:le(w.META,i),noscriptTags:le(w.NOSCRIPT,c),scriptTags:le(w.SCRIPT,l),styleTags:le(w.STYLE,u)},m={},h={};Object.keys(d).forEach((function(e){var t=d[e],r=t.newTags,n=t.oldTags;r.length&&(m[e]=r),n.length&&(h[e]=d[e].oldTags)})),t&&t(),s(e,m,h)},ie=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),se(w.TITLE,t)},se=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute("data-react-helmet"),a=n?n.split(","):[],o=[].concat(a),i=Object.keys(t),c=0;c<i.length;c++){var s=i[c],l=t[s]||"";r.getAttribute(s)!==l&&r.setAttribute(s,l),-1===a.indexOf(s)&&a.push(s);var u=o.indexOf(s);-1!==u&&o.splice(u,1)}for(var f=o.length-1;f>=0;f--)r.removeAttribute(o[f]);a.length===o.length?r.removeAttribute("data-react-helmet"):r.getAttribute("data-react-helmet")!==i.join(",")&&r.setAttribute("data-react-helmet",i.join(","))}},le=function(e,t){var r=document.head||document.querySelector(w.HEAD),n=r.querySelectorAll(e+"[data-react-helmet]"),a=Array.prototype.slice.call(n),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===O)r.innerHTML=t.innerHTML;else if(n===v)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[n]?"":t[n];r.setAttribute(n,c)}r.setAttribute("data-react-helmet","true"),a.some((function(e,t){return i=t,r.isEqualNode(e)}))?a.splice(i,1):o.push(r)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return r.appendChild(e)})),{oldTags:a,newTags:o}},ue=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[I[r]||r]=e[r],t}),t)},pe=function(e,t,r){switch(e){case w.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})["data-react-helmet"]=!0,a=fe(r,n),[m.a.createElement(w.TITLE,a,e)];var e,r,n,a},toString:function(){return function(e,t,r,n){var a=ue(r),o=ie(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+z(o,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+z(o,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case g:case b:return{toComponent:function(){return fe(t)},toString:function(){return ue(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,a=((n={key:r})["data-react-helmet"]=!0,n);return Object.keys(t).forEach((function(e){var r=I[e]||e;if(r===O||r===v){var n=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:n}}else a[r]=t[e]})),m.a.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var a=Object.keys(n).filter((function(e){return!(e===O||e===v)})).reduce((function(e,t){var a=void 0===n[t]?t:t+'="'+z(n[t],r)+'"';return e?e+" "+a:a}),""),o=n.innerHTML||n.cssText||"",i=-1===F.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,r)}}}},de=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,s=e.scriptTags,l=e.styleTags,u=e.title,f=void 0===u?"":u,p=e.titleAttributes;return{base:pe(w.BASE,t,n),bodyAttributes:pe(g,r,n),htmlAttributes:pe(b,a,n),link:pe(w.LINK,o,n),meta:pe(w.META,i,n),noscript:pe(w.NOSCRIPT,c,n),script:pe(w.SCRIPT,s,n),style:pe(w.STYLE,l,n),title:pe(w.TITLE,{title:f,titleAttributes:p},n)}},me=u()((function(e){return{baseTag:X([E,N],e),bodyAttributes:G(g,e),defer:Z(e,B),encode:Z(e,L),htmlAttributes:G(b,e),linkTags:V(w.LINK,[j,E],e),metaTags:V(w.META,[P,T,C,k,S],e),noscriptTags:V(w.NOSCRIPT,[O],e),onChangeClientState:W(e),scriptTags:V(w.SCRIPT,[R,O],e),styleTags:V(w.STYLE,[v],e),title:_(e),titleAttributes:G(A,e)}}),(function(e){ae&&re(ae),e.defer?ae=te((function(){oe(e,(function(){ae=null}))})):(oe(e),ae=null)}),de)((function(){return null})),he=(a=me,i=o=function(e){function t(){return Q(this,t),K(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case w.SCRIPT:case w.NOSCRIPT:return{innerHTML:t};case w.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,a=e.newChildProps,o=e.nestedChildren;return J({},n,((t={})[r.type]=[].concat(n[r.type]||[],[J({},a,this.mapNestedChildrenToProps(r,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,a=e.newProps,o=e.newChildProps,i=e.nestedChildren;switch(n.type){case w.TITLE:return J({},a,((t={})[n.type]=i,t.titleAttributes=J({},o),t));case w.BODY:return J({},a,{bodyAttributes:J({},o)});case w.HTML:return J({},a,{htmlAttributes:J({},o)})}return J({},a,((r={})[n.type]=J({},o),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=J({},t);return Object.keys(e).forEach((function(t){var n;r=J({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return m.a.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,o=a.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[q[r]||r]=e[r],t}),t)}(Y(a,["children"]));switch(r.warnOnInvalidChildren(e,o),e.type){case w.LINK:case w.META:case w.NOSCRIPT:case w.SCRIPT:case w.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:i,nestedChildren:o});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=Y(e,["children"]),n=J({},r);return t&&(n=this.mapChildrenToProps(t,n)),m.a.createElement(a,n)},D(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(m.a.Component),o.propTypes={base:s.a.object,bodyAttributes:s.a.object,children:s.a.oneOfType([s.a.arrayOf(s.a.node),s.a.node]),defaultTitle:s.a.string,defer:s.a.bool,encodeSpecialCharacters:s.a.bool,htmlAttributes:s.a.object,link:s.a.arrayOf(s.a.object),meta:s.a.arrayOf(s.a.object),noscript:s.a.arrayOf(s.a.object),onChangeClientState:s.a.func,script:s.a.arrayOf(s.a.object),style:s.a.arrayOf(s.a.object),title:s.a.string,titleAttributes:s.a.object,titleTemplate:s.a.string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=a.peek,o.rewind=function(){var e=a.rewind();return e||(e=de({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);he.renderStatic=he.rewind}).call(this,r("yLpj"))},"wEa+":function(e,t,r){e.exports=r.p+"static/logo-9a79291ea735d974d719d990749c5704.jpg"},yLpj:function(e,t){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(n){"object"==typeof window&&(r=window)}e.exports=r}}]);
//# sourceMappingURL=f88d2bb2bae227ff0c74f68b4b02989f0aee83b2-b889973a4e973df50f68.js.map