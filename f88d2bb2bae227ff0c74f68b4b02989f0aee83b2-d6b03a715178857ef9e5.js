(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"8+s/":function(e,t,n){"use strict";n("sc67"),n("AqHK"),n("pJf4"),n("pS08"),n("R48M");var r,a=n("q1tI"),o=(r=a)&&"object"==typeof r&&"default"in r?r.default:r;function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var s,l=[];function u(){s=e(l.map((function(e){return e.props}))),f.canUseDOM?t(s):n&&(s=n(s))}var f=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return s},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=s;return s=void 0,l=[],e};var i=a.prototype;return i.UNSAFE_componentWillMount=function(){l.push(this),u()},i.componentDidUpdate=function(){u()},i.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),u()},i.render=function(){return o.createElement(r,this.props)},a}(a.PureComponent);return i(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),i(f,"canUseDOM",c),f}}},C9fy:function(e,t,n){var r=Date.prototype,a=r.toString,o=r.getTime;new Date(NaN)+""!="Invalid Date"&&n("IYdN")(r,"toString",(function(){var e=o.call(this);return e==e?a.call(this):"Invalid Date"}))},EH9Q:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"TheRoyalBuddhaTandoori.com","description":"The Royal Buddha Tandoori Moraira website","author":"@sandeshsth"}}}}')},"I/Ru":function(e,t,n){"use strict";var r=n("Wbzz"),a=n("q1tI"),o=n.n(a),i=(n("E5k/"),function(e){var t=e.children,n=e.icon,r=e.style,a=n.type,i=n.props,c={height:20,width:20,marginRight:5};return t?o.a.createElement("span",{style:Object.assign({},r)},o.a.createElement(a,Object.assign({},i,{style:c})),t):o.a.createElement(a,Object.assign({},i,{style:Object.assign(Object.assign({},c),r)}))}),c=function(e){var t=e.children;return o.a.createElement(i,{icon:o.a.createElement("img",{alt:"Facebook",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAACYklEQVQ4jb2TP2hTURTGv3vzqhRDaYutbWyNtYipxU0FFxcj6ipdHERwLNKhYKXg8JaiFJx0ENShgouICI4ODlEc6p8KUsQqQoiNTW3SkNqY93K/49C+5OUlsQjimQ68j9875/7uBf5xqT9+tUUP7Vs7aAz3lAEoY5JfUh3zsBX/Cjj8MN/JUmiC5AUR6SEFpEBEQEraUGa0WNPJ0fbclsChB4XjIB6R0rUJ8MP8fUaIkfRYd6IpcBP2jJRtW8C83qFhfHk8kqgDbqypPzaarHO7wuUjrTjcY2FbCHjyqYSplwUvkyk7biw/Gc0BgOUB6YSukGy45s0TYRyLtFQ2iYS1L8NuhPQEgMnqhLboAwOFbw0EoKtVYfZ8BwDgztw67r5fR6FEZNYMROhll/LF/ghsRQ0AsejP4UYwUrB7R/WY738o4muuHISBlF1hnRwCAA0A1KavmQDLp63oeBDWZxX7K2doCJFA4OTeFtw73VZzpV5f7AIA3Jot4Orz1ZofG0KqUoxJiaAmIE3fArCQdevEiTKpGinR3myKlF4vEG4Bom0hHNpp4UZ8Y9Jzj38gvWbwecXFatH4NuKiYw/2AUr0BlDRUGb8K+d/EXPfHSxk3cpk88su3i6WAjABoGYAJRUpAKDFmiYlEzxsiFSAlAbiIEsO9HSF4zXJ0facECMi4vguLegDBsUJpCSuGoE9sFoHBID0WHeChnFSMv6rUQEGJhNXxctTgy/8jBogACyPRxJlx40ZynWIpP1ATwCAay5CsSCsarlZ2aLPxrJHz+y3TgEat1+tPH1zKfrOE/Bf6jfqoGfDhy3C+QAAAABJRU5ErkJggg=="}),style:{color:"#3b5998"}},t)};c.defaultProps={children:""};var s=c,l=function(e){var t=e.children;return o.a.createElement(i,{icon:o.a.createElement("img",{alt:"Tripadvisor",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAADfElEQVQ4je2UTWxTBQDH/+9z3XttX/tKW9ey0XVfDJwCWSIsrmZFEkZijRchJCzEuJGgJgtqwuIF48EYdiAGDnIyRknGgQ11UyEzggZxTEwkhdV+rNnsB9t8o++9ruv79KwX9Ky/6z/53X5/4D8H8ZidBxAB4AawAWAZgPRvhX5BEN52cI4+WHYHYDsI2LZlgbQBm6aZxVqtlqvX65/VarUrAOy/CAVBeJ+iKNE0TYKk6YCu1w8ILsHqDNbkNxMO8elW2uFxklhXLaQKpv7OpY1HJdnp0TSNMgxTphlqplqt5kiQXsuyTJokye5oW/TFcrkMnuPBOXmYugHJJrlPfmakC9tXHADgaiRw8btGdYMQxfBWF8XxPFRV8aiyfJShGPi2+LC0vPQpQVHUIX/AP928bRteOnwEfbEYSsUivp+dxdyPt8BSdmXqjVX36Md29f6qyO8fHCSGhkfAMAw0TcP01CS+ufo5spk0VEU9QvTs2XWRJqjh0bExTF2+jEwqBcMwEAqHMTQygvNnzyLgqq8X1izn1mgbM/za6zg/Po7i8jI4pxP7+vtxeGgIp06cgK5p98gGpuGFnt278bBcRj6bxcD+ARw8eACmaWJyYgLPxuN4sCi7dcNkBhMJfHTuHDRNw97nB9Db14fZr7/Cw1IJT4RCsGFHyaqiePrjcaSSSTSFQhBX5rB37QqaIxHIlQpaIhFsbm5SBEHAt8UPSZKwvWcnbot/IKOtINDUhOszM/B4PAAAkmEZvVwsor2rC8VCAVrzM/jV3Q9FluEWBOQyGRi6Adu2cfPbWfiDQeQzOTwpufBUuAOqrED0+VCpPALDsmWSopm716a/RCweR9eOHZj64hqu3riH/GIOR48fRyqZhKPRAUVR8MudO3jl5ElUJAkPbszh+sQkOJ7DYCKBpXweuqbPETzPB6Pt7QuCIHhePnYMu3p7kUmn0d7ZiQvj45j/6bbBcxylKIrtdrkhiCI5evo0CoUCLNPEvlgMH5w5g1QyqS9msy0EAPA8H+zo7prUNut7WLaBFbxeQlpbBc0wKsfxr6YXFk6ZpqkKXu9Nt8s1RjN0Q6ApBJZlsFIqQ1Vkk2bY9+7Oz7/79/T4cDg8IPi8z+n1+v10Kn0JQN3pdHarqroOoCwIQltLa+uHXKNjJwiCNkzrd0VV3/otmfzhMb/wP/+QPwFPw3Wiu+KXgQAAAABJRU5ErkJggg=="}),style:{color:"#3b9874"}},t)};l.defaultProps={children:""};var u=l,f=n("wEa+"),p=n.n(f),d=n("Wmhb"),m=n.n(d),h=function(){return o.a.createElement("header",{className:m.a.root},o.a.createElement("nav",{className:"container"},o.a.createElement("div",{className:"row justify-content-center"},o.a.createElement(r.Link,{className:"col-auto order-md-2",to:"/"},o.a.createElement("img",{className:m.a.logo,src:p.a,alt:"The Royal Buddha Tandoori Logo",loading:"lazy"})),o.a.createElement("div",{className:"col-12 col-md row justify-content-center text-center align-items-center order-md-1"},o.a.createElement(r.Link,{className:"col",to:"/menu"},"Menu"),o.a.createElement(r.Link,{className:"col",to:"/catering"},"Catering"),o.a.createElement(r.Link,{className:"col",to:"/gallery"},"Gallery")),o.a.createElement("div",{className:"col-12 col-md row justify-content-center text-center align-items-center order-md-3 d-none d-md-flex"},o.a.createElement(r.Link,{className:"col",to:"/contact-us"},"Contact us"),o.a.createElement("a",{className:"col",href:"https://www.facebook.com/royalbuddhatandoori",rel:"noreferrer",target:"_blank"},o.a.createElement(s,null,"Facebook")),o.a.createElement("a",{className:"col",rel:"noreferrer",href:"https://www.tripadvisor.com/Restaurant_Review-g736284-d6914859-Reviews-The_Royal_Buddha_Tandoori-Moraira_Costa_Blanca_Province_of_Alicante_Valencian_Cou.html",target:"_blank"},o.a.createElement(u,null,"Tripadvisor"))))))};h.defaultProps={siteTitle:""};var y=h,g={hr:{margin:"1rem 0"},footer:{textAlign:"center",fontSize:12,paddingBottom:"1rem"}},b=function(e){var t=e.children;return o.a.createElement(o.a.Fragment,null,o.a.createElement(y,null),o.a.createElement("div",null,o.a.createElement("main",null,t),o.a.createElement("footer",{style:g.footer},o.a.createElement("hr",{style:g.hr,className:"d-md-none"}),o.a.createElement("nav",{className:"d-md-none row"},o.a.createElement(r.Link,{className:"col",to:"/contact-us"},"Contact us"),o.a.createElement("a",{className:"col",href:"https://www.facebook.com/royalbuddhatandoori",rel:"noreferrer",target:"_blank"},o.a.createElement(s,null,"Facebook")),o.a.createElement("a",{className:"col",rel:"noreferrer",href:"https://www.tripadvisor.com/Restaurant_Review-g736284-d6914859-Reviews-The_Royal_Buddha_Tandoori-Moraira_Costa_Blanca_Province_of_Alicante_Valencian_Cou.html",target:"_blank"},o.a.createElement(u,null,"Tripadvisor"))),o.a.createElement("hr",{style:g.hr}),"© Copyright ",(new Date).getFullYear(),"."," ","Made by ",o.a.createElement("a",{href:"https://sandeshshrestha.com"},"Sandesh Shrestha"))))};t.a=b},R48M:function(e,t,n){var r=n("P8UN");r(r.S+r.F*!n("QPJK"),"Object",{defineProperty:n("rjfK").f})},Wmhb:function(e,t,n){e.exports={root:"header-module--root--2pwHC",logo:"header-module--logo--U17LV"}},bmMU:function(e,t,n){"use strict";n("pJf4"),n("Ll4R"),n("q8oJ"),n("C9fy"),n("klQ5"),n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("MIFh");var r=Array.isArray,a=Object.keys,o=Object.prototype.hasOwnProperty,i="undefined"!=typeof Element;e.exports=function(e,t){try{return function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){var c,s,l,u=r(t),f=r(n);if(u&&f){if((s=t.length)!=n.length)return!1;for(c=s;0!=c--;)if(!e(t[c],n[c]))return!1;return!0}if(u!=f)return!1;var p=t instanceof Date,d=n instanceof Date;if(p!=d)return!1;if(p&&d)return t.getTime()==n.getTime();var m=t instanceof RegExp,h=n instanceof RegExp;if(m!=h)return!1;if(m&&h)return t.toString()==n.toString();var y=a(t);if((s=y.length)!==a(n).length)return!1;for(c=s;0!=c--;)if(!o.call(n,y[c]))return!1;if(i&&t instanceof Element&&n instanceof Element)return t===n;for(c=s;0!=c--;)if(!("_owner"===(l=y[c])&&t.$$typeof||e(t[l],n[l])))return!1;return!0}return t!=t&&n!=n}(e,t)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||-2146828260===n.number)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}}},jNNy:function(e,t,n){"use strict";var r=n("EH9Q"),a=n("q1tI"),o=n.n(a),i=n("qhky");function c(e){var t=e.description,n=e.lang,a=e.meta,c=e.title,s=r.data.site,l=t||s.siteMetadata.description;return o.a.createElement(i.a,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:c},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:l}].concat(a)},o.a.createElement("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css"}))}c.defaultProps={lang:"en",meta:[],description:""};var s=c;t.a=s},klQ5:function(e,t,n){var r=n("emib"),a=n("TUPI"),o=n("rjfK").f,i=n("chL8").f,c=n("mhTz"),s=n("lb9j"),l=r.RegExp,u=l,f=l.prototype,p=/a/g,d=/a/g,m=new l(p)!==p;if(n("QPJK")&&(!m||n("96qb")((function(){return d[n("sOol")("match")]=!1,l(p)!=p||l(d)==d||"/a/i"!=l(p,"i")})))){l=function(e,t){var n=this instanceof l,r=c(e),o=void 0===t;return!n&&r&&e.constructor===l&&o?e:a(m?new u(r&&!o?e.source:e,t):u((r=e instanceof l)?e.source:e,r&&o?s.call(e):t),n?this:f,l)};for(var h=function(e){e in l||o(l,e,{configurable:!0,get:function(){return u[e]},set:function(t){u[e]=t}})},y=i(u),g=0;y.length>g;)h(y[g++]);f.constructor=l,l.prototype=f,n("IYdN")(r,"RegExp",l)}n("to/b")("RegExp")},qhky:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return he}));n("wZFJ"),n("HQhv"),n("n7j8"),n("1dPr"),n("JHok"),n("OeI1"),n("MIFh"),n("sC2a"),n("sc67"),n("LagC"),n("pS08"),n("E5k/"),n("R48M"),n("m210"),n("4DPX"),n("U6Bt"),n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("AqHK");var r,a,o,i,c=n("17x9"),s=n.n(c),l=n("8+s/"),u=n.n(l),f=n("bmMU"),p=n.n(f),d=n("q1tI"),m=n.n(d),h=n("MgzW"),y=n.n(h),g="bodyAttributes",b="htmlAttributes",A="titleAttributes",w={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},T=(Object.keys(w).map((function(e){return w[e]})),"charset"),v="cssText",E="href",C="http-equiv",O="innerHTML",S="itemprop",P="name",k="property",j="rel",R="src",N="target",I={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},x="defaultTitle",B="defer",L="encodeSpecialCharacters",M="onChangeClientState",U="titleTemplate",q=Object.keys(I).reduce((function(e,t){return e[I[t]]=t,e}),{}),F=[w.NOSCRIPT,w.SCRIPT,w.STYLE],H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Q=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},D=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),J=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Y=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},K=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},z=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},_=function(e){var t=Z(e,w.TITLE),n=Z(e,U);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=Z(e,x);return t||r||void 0},W=function(e){return Z(e,M)||function(){}},G=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return J({},e,t)}),{})},X=function(e,t){return t.filter((function(e){return void 0!==e[w.BASE]})).map((function(e){return e[w.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var o=r[a].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},V=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+H(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var a={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),i=0;i<o.length;i++){var c=o[i],s=c.toLowerCase();-1===t.indexOf(s)||n===j&&"canonical"===e[n].toLowerCase()||s===j&&"stylesheet"===e[s].toLowerCase()||(n=s),-1===t.indexOf(c)||c!==O&&c!==v&&c!==S||(n=c)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][l]&&(a[n][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(a),i=0;i<o.length;i++){var c=o[i],s=y()({},r[c],a[c]);r[c]=s}return e}),[]).reverse()},Z=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},$=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){$(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:e.requestAnimationFrame||$,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,oe=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,s=e.onChangeClientState,l=e.scriptTags,u=e.styleTags,f=e.title,p=e.titleAttributes;se(w.BODY,r),se(w.HTML,a),ce(f,p);var d={baseTag:le(w.BASE,n),linkTags:le(w.LINK,o),metaTags:le(w.META,i),noscriptTags:le(w.NOSCRIPT,c),scriptTags:le(w.SCRIPT,l),styleTags:le(w.STYLE,u)},m={},h={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(h[e]=d[e].oldTags)})),t&&t(),s(e,m,h)},ie=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),se(w.TITLE,t)},se=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute("data-react-helmet"),a=r?r.split(","):[],o=[].concat(a),i=Object.keys(t),c=0;c<i.length;c++){var s=i[c],l=t[s]||"";n.getAttribute(s)!==l&&n.setAttribute(s,l),-1===a.indexOf(s)&&a.push(s);var u=o.indexOf(s);-1!==u&&o.splice(u,1)}for(var f=o.length-1;f>=0;f--)n.removeAttribute(o[f]);a.length===o.length?n.removeAttribute("data-react-helmet"):n.getAttribute("data-react-helmet")!==i.join(",")&&n.setAttribute("data-react-helmet",i.join(","))}},le=function(e,t){var n=document.head||document.querySelector(w.HEAD),r=n.querySelectorAll(e+"[data-react-helmet]"),a=Array.prototype.slice.call(r),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===O)n.innerHTML=t.innerHTML;else if(r===v)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute("data-react-helmet","true"),a.some((function(e,t){return i=t,n.isEqualNode(e)}))?a.splice(i,1):o.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:o}},ue=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[I[n]||n]=e[n],t}),t)},pe=function(e,t,n){switch(e){case w.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})["data-react-helmet"]=!0,a=fe(n,r),[m.a.createElement(w.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=ue(n),o=ie(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+z(o,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+z(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case g:case b:return{toComponent:function(){return fe(t)},toString:function(){return ue(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})["data-react-helmet"]=!0,r);return Object.keys(t).forEach((function(e){var n=I[e]||e;if(n===O||n===v){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),m.a.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===O||e===v)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+z(r[t],n)+'"';return e?e+" "+a:a}),""),o=r.innerHTML||r.cssText||"",i=-1===F.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}},de=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,s=e.scriptTags,l=e.styleTags,u=e.title,f=void 0===u?"":u,p=e.titleAttributes;return{base:pe(w.BASE,t,r),bodyAttributes:pe(g,n,r),htmlAttributes:pe(b,a,r),link:pe(w.LINK,o,r),meta:pe(w.META,i,r),noscript:pe(w.NOSCRIPT,c,r),script:pe(w.SCRIPT,s,r),style:pe(w.STYLE,l,r),title:pe(w.TITLE,{title:f,titleAttributes:p},r)}},me=u()((function(e){return{baseTag:X([E,N],e),bodyAttributes:G(g,e),defer:Z(e,B),encode:Z(e,L),htmlAttributes:G(b,e),linkTags:V(w.LINK,[j,E],e),metaTags:V(w.META,[P,T,C,k,S],e),noscriptTags:V(w.NOSCRIPT,[O],e),onChangeClientState:W(e),scriptTags:V(w.SCRIPT,[R,O],e),styleTags:V(w.STYLE,[v],e),title:_(e),titleAttributes:G(A,e)}}),(function(e){ae&&ne(ae),e.defer?ae=te((function(){oe(e,(function(){ae=null}))})):(oe(e),ae=null)}),de)((function(){return null})),he=(a=me,i=o=function(e){function t(){return Q(this,t),K(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case w.SCRIPT:case w.NOSCRIPT:return{innerHTML:t};case w.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,a=e.newChildProps,o=e.nestedChildren;return J({},r,((t={})[n.type]=[].concat(r[n.type]||[],[J({},a,this.mapNestedChildrenToProps(n,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,a=e.newProps,o=e.newChildProps,i=e.nestedChildren;switch(r.type){case w.TITLE:return J({},a,((t={})[r.type]=i,t.titleAttributes=J({},o),t));case w.BODY:return J({},a,{bodyAttributes:J({},o)});case w.HTML:return J({},a,{htmlAttributes:J({},o)})}return J({},a,((n={})[r.type]=J({},o),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=J({},t);return Object.keys(e).forEach((function(t){var r;n=J({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return m.a.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,o=a.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[q[n]||n]=e[n],t}),t)}(Y(a,["children"]));switch(n.warnOnInvalidChildren(e,o),e.type){case w.LINK:case w.META:case w.NOSCRIPT:case w.SCRIPT:case w.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:i,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=Y(e,["children"]),r=J({},n);return t&&(r=this.mapChildrenToProps(t,r)),m.a.createElement(a,r)},D(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(m.a.Component),o.propTypes={base:s.a.object,bodyAttributes:s.a.object,children:s.a.oneOfType([s.a.arrayOf(s.a.node),s.a.node]),defaultTitle:s.a.string,defer:s.a.bool,encodeSpecialCharacters:s.a.bool,htmlAttributes:s.a.object,link:s.a.arrayOf(s.a.object),meta:s.a.arrayOf(s.a.object),noscript:s.a.arrayOf(s.a.object),onChangeClientState:s.a.func,script:s.a.arrayOf(s.a.object),style:s.a.arrayOf(s.a.object),title:s.a.string,titleAttributes:s.a.object,titleTemplate:s.a.string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=a.peek,o.rewind=function(){var e=a.rewind();return e||(e=de({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);he.renderStatic=he.rewind}).call(this,n("yLpj"))},"wEa+":function(e,t,n){e.exports=n.p+"static/logo-9a79291ea735d974d719d990749c5704.jpg"},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"==typeof window&&(n=window)}e.exports=n}}]);
//# sourceMappingURL=f88d2bb2bae227ff0c74f68b4b02989f0aee83b2-d6b03a715178857ef9e5.js.map