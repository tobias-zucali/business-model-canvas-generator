(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{172:function(e,n,t){e.exports=t(395)},393:function(e,n,t){},395:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),a=t(23),c=t.n(a),i=t(2),u=t(1),l=t(7),s=t(60),f=t.n(s),d=t(42),p=t.n(d),h=function(){return window.location.hash.substr(1)},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";window.location="#".concat(e)};var v=t(8),b=t(29),g=t(9),y=t(161),O=t.n(y),j=t(6),w=t.n(j),E=(t(41),t(13),t(18)),k=t.n(E),S=t(162),x=t.n(S);function C(e,n){return k()(e)?x()(O()(e),n,function(e,n){if(w()(e))return n}):void 0!==n?n:e}function I(e,n){return Object.keys(e).reduce(function(t,r){return Object(g.a)({},t,Object(b.a)({},r,n(r,e[r])))},{})}var P=t(163),R=t.n(P);function H(e,n){return e.map(function(e){return e&&e[n]})}function M(e,n,t){var r=t.key;if(w()(e)&&w()(n)){var o=H(e,r),a=H(n,r);return R()(o,a).map(function(t){return C(e[o.indexOf(t)],n[a.indexOf(t)])})}return p()(n)?e:n}var z=t(96),F=t.n(z),B=t(164),A=t.n(B),D=t(165),W=t.n(D);function L(e){var n=e.header,t=e.props,r=e.sections;return"# ".concat(n.value,"\n").concat(t.map(function(e){var n=e.key,t=e.value;return"".concat(n,":").concat(t?" ".concat(t):"")}).join("\n"),"\n\n").concat(r.map(function(e){var n=e.key,t=e.header,r=e.placeholder,o=e.content;return"## ".concat(t," {").concat(n,"}").concat(r?"\n[".concat(r,"]"):"").concat(o?"\n".concat(o):"","\n")}).join("\n"),"\n")}var T=t(101),V={log:console.log,warn:console.warn,error:console.error},K=t(97),U=t.n(K),Y=/^\s*#(?!#)\s*(.*)$/,N=/^\s*#(.*)$/,$=/^\s*(\S+)\s*:(.*)$/,q=/^\s*##([^{]*){([^}]*)}(.*)$/,_=/\[(.*)\S*\]/,J=/\s*\[(.*)/,G=/^\s*([^\]]*)]/;function Z(e){var n=e.split("\n"),t=function(e){var n=0;for(;n<e.length;){var t=e[n],r=t.match(Y);if(r){var o=Object(l.a)(r,2),a=o[1];return{header:{value:a.trim()},index:n}}n+=1}return{header:{value:""},index:-1}}(n),r=t.header,o=function(e,n){var t=n,r=[];for(;t<e.length;){var o=e[t],a=o.match($);if(a){var c=Object(l.a)(a,3),i=c[1],u=c[2];r.push({key:i.trim(),value:u.trim()})}else if(o.match(N))break;t+=1}return{props:r,lastIndex:t-1}}(n,t.index+1);return{header:r,props:o.props,sections:function(e,n){var t=n,r=[];for(;t<e.length;){var o=e[t],a=o.match(q);if(a){var c=Object(l.a)(a,4),i=c[1],u=c[2],s=c[3],f="".concat(i.trim()," ").concat(s.trim()).trim(),d=Q(e,t+1),p=d.placeholder,h=d.index;t=h+1||t+1;for(var m=[];t<e.length&&!(e[t+1]||"").match(q);)o=e[t],m.push(o),t+=1;r.push({key:u.trim(),header:f,placeholder:p,content:m.join("\n").trim()})}t+=1}return{sections:r}}(n,o.lastIndex+1).sections}}function Q(e,n){for(var t=n,r=[];t<e.length;){var o=e[t].trim();if(0===r.length){var a=o.match(_);if(a)return{placeholder:Object(l.a)(a,2)[1].trim(),index:t};var c=o.match(J);if(c){var i=Object(l.a)(c,2)[1];r.push(i.trim())}else if(""!==o)break}else if(r.length>0){var u=o.match(G);if(u){var s=Object(l.a)(u,2)[1];return r.push(s.trim()),{placeholder:r.join("\n"),index:t}}r.push(o)}t+=1}return{placeholder:"",index:-1}}function X(e,n){try{var t=Z(n),r=H(t.sections,{key:"key"}),o=H(e.sections,{key:"key"}),a=U.a.apply(void 0,[r].concat(Object(T.a)(o)));a.length>0&&(V.warn("Unexpected sections found:",a),a.forEach(function(e){delete t.sections[e]}));var c=H(t.sections,{key:"key"}),i=H(e.sections,{key:"key"}),u=U.a.apply(void 0,[c].concat(Object(T.a)(i)));return u.length>0&&(V.warn("Unexpected props found:",u),u.forEach(function(e){delete t.sections[e]})),t.sections=M(e.sections,t.sections,{key:"key"}),t.props=M(e.props,t.props,{key:"key"}),function e(n,t){var r=C(n,t);return k()(r)?I(r,function(r){return e(k()(n)?n[r]:void 0,k()(t)?t[r]:void 0)}):void 0!==t?t:n}(e,t)}catch(l){V.error("Parsing model failed"),V.error(l)}return e}var ee=A()(function(e){localStorage.setItem(e.localStorageKey,L(e)),localStorage.setItem("isInited","true")},250);var ne=function(e){var n=function(e){var n=e.model;if(!k()(n))throw new Error("Model must be provided: useMarkdownSync({ model })");var t,r=n,o=function(e){r=e,ee(e),t&&t(e)},a={loadFromFile:function(e){return new Promise(function(n,t){var r=new FileReader;r.onload=function(e){a.loadMarkdown(e.target.result),n()},r.onerror=t,r.readAsText(e)})},loadFromLocalStorage:function(){a.loadMarkdown(localStorage.getItem(n.localStorageKey))},loadMarkdown:function(e){e&&o(X(n,e))},saveAs:function(){var e=new Blob([L(r)],{type:"text/plain;charset=utf-8"}),n="business model canvas - ".concat(r.header.value.substr(0,20).replace(/[^a-zA-Z0-9]+/g," "),".txt");W.a.saveAs(e,n)},reset:function(){o(n)},setOnChange:function(e){t=e},removeOnChange:function(){t=null},get SECTION_KEYS(){return H(n.sections,"key")},get sections(){return r.sections},getSectionIndex:function(e){return F()(a.sections,["key",e])},getSection:function(e){return a.sections[a.getSectionIndex(e)]},updateSection:function(e,t){if(!k()(t))throw new Error("Invalid arguments for markdownSyncApi.updateSection(key: string, sectionUpdate: object)");var c=a.getSectionIndex(e);if(-1===c)throw new Error('Section with key "'.concat(e,'" not available in model'),n);var i=r.sections[c],u=Array.from(r.sections);u[c]=Object(g.a)({},i,t),o(Object(g.a)({},r,{sections:u}))},get header(){return r.header},updateHeader:function(e){if(!k()(e))throw new Error("Invalid arguments for markdownSyncApi.updateHeader(headerUpdate: object)");o(Object(g.a)({},r,{header:Object(g.a)({},r.header,e)}))},get PROP_KEYS(){return H(n.props,"key")},get props(){return r.props},getPropertyIndex:function(e){return F()(a.props,["key",e])},getProperty:function(e){return a.props[a.getPropertyIndex(e)]},updateProperty:function(e,t){if(!k()(t))throw new Error("Invalid arguments for markdownSyncApi.updateHeader(key: string, propertyUpdate: object)");var c=a.getPropertyIndex(e);if(-1===c)throw new Error('Property with key "'.concat(e,'" not available in model'),n);var i=r.props[c],u=Array.from(r.props);u[c]=Object(g.a)({},i,t),o(Object(g.a)({},r,{props:u}))}};return a}({model:e});return n.loadFromLocalStorage(),n};var te=t(21),re=t(98),oe=t(166),ae=t(167),ce=t.n(ae),ie=[],ue=function(e,n){ie.push({isFocusWithin:!1,ref:e,setIsFocusWithin:n}),1===Object.keys(ie).length&&(document.body.addEventListener("mousedown",se),document.body.addEventListener("keydown",se),document.body.addEventListener("keyup",se))},le=function(e){ce()(ie,function(n){return n.ref===e}),0===Object.keys(ie).length&&(document.body.removeEventListener("mousedown",se),document.body.removeEventListener("keydown",se),document.body.removeEventListener("keyup",se))},se=function(e){var n=e.target;ie=ie.map(function(e){var t=e.ref.current;if(!t)return e;var r=t.contains(n);return e.isFocusWithin===r?e:(e.setIsFocusWithin(r),Object(g.a)({},e,{isFocusWithin:r}))})};t(388);function fe(){var e=Object(i.a)(["\n  color: ",";\n  cursor: pointer;\n  fill: currentColor;\n  padding: 0.25em;\n  &:hover, &:focus {\n    background: #DDDDDD;\n  }\n  &:first-child {\n    padding-left: 0.4em;\n    border-top-left-radius: 0.75em;\n    border-bottom-left-radius: 0.75em;\n  }\n  &:last-child {\n    padding-left: 0.4em;\n    border-top-right-radius: 0.75em;\n    border-bottom-right-radius: 0.75em;\n  }\n"]);return fe=function(){return e},e}var de=Object(u.c)(function(e){var n=e.Icon,t=e.isActive,r=e.label,a=e.onToggle,c=e.style,i=Object(v.a)(e,["Icon","isActive","label","onToggle","style"]),u=function(e){e.preventDefault(),a(c)};return o.a.createElement(n,Object.assign({"aria-label":r,"aria-pressed":t,onKeyDown:function(e){" "!==e.key&&"Enter"!==e.key||u(e)},onMouseDown:u,role:"button",tabIndex:"0"},i))})(fe(),function(e){return e.isActive?"inherit":"#999999"});function pe(){var e=Object(i.a)(["\n  background: #EEEEEE;\n  border-radius: 0.75em;\n  display: flex;\n  margin-right: 0.5em;\n  margin-top: 0.25em;\n"]);return pe=function(){return e},e}var he=u.c.div(pe());function me(){return(me=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function ve(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var be=o.a.createElement("path",{d:"M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42zM10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3v-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z"}),ge=o.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),ye=function(e){var n=e.svgRef,t=ve(e,["svgRef"]);return o.a.createElement("svg",me({width:24,height:24,viewBox:"0 0 24 24",ref:n},t),be,ge)},Oe=o.a.forwardRef(function(e,n){return o.a.createElement(ye,me({svgRef:n},e))});t.p;function je(){return(je=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function we(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var Ee=o.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),ke=o.a.createElement("path",{d:"M9 4v3h5v12h3V7h5V4H9zm-6 8h3v7h3v-7h3V9H3v3z"}),Se=function(e){var n=e.svgRef,t=we(e,["svgRef"]);return o.a.createElement("svg",je({width:24,height:24,viewBox:"0 0 24 24",ref:n},t),Ee,ke)},xe=o.a.forwardRef(function(e,n){return o.a.createElement(Se,je({svgRef:n},e))});t.p;function Ce(){return(Ce=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function Ie(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var Pe=o.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),Re=o.a.createElement("path",{d:"M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4z"}),He=function(e){var n=e.svgRef,t=Ie(e,["svgRef"]);return o.a.createElement("svg",Ce({width:24,height:24,viewBox:"0 0 24 24",ref:n},t),Pe,Re)},Me=o.a.forwardRef(function(e,n){return o.a.createElement(He,Ce({svgRef:n},e))});t.p;function ze(){return(ze=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function Fe(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var Be=o.a.createElement("path",{d:"M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5zm0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z"}),Ae=o.a.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"}),De=function(e){var n=e.svgRef,t=Fe(e,["svgRef"]);return o.a.createElement("svg",ze({width:24,height:24,viewBox:"0 0 24 24",ref:n},t),Be,Ae)},We=o.a.forwardRef(function(e,n){return o.a.createElement(De,ze({svgRef:n},e))});t.p;function Le(){return(Le=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function Te(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var Ve=o.a.createElement("path",{d:"M2 17h2v.5H3v1h1v.5H2v1h3v-4H2v1zm1-9h1V4H2v1h1v3zm-1 3h1.8L2 13.1v.9h3v-1H3.2L5 10.9V10H2v1zm5-6v2h14V5H7zm0 14h14v-2H7v2zm0-6h14v-2H7v2z"}),Ke=o.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),Ue=function(e){var n=e.svgRef,t=Te(e,["svgRef"]);return o.a.createElement("svg",Le({width:24,height:24,viewBox:"0 0 24 24",ref:n},t),Ve,Ke)},Ye=o.a.forwardRef(function(e,n){return o.a.createElement(Ue,Le({svgRef:n},e))});t.p;function Ne(){return(Ne=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function $e(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var qe=o.a.createElement("path",{d:"M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"}),_e=o.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),Je=function(e){var n=e.svgRef,t=$e(e,["svgRef"]);return o.a.createElement("svg",Ne({width:24,height:24,viewBox:"0 0 24 24",ref:n},t),qe,_e)},Ge=o.a.forwardRef(function(e,n){return o.a.createElement(Je,Ne({svgRef:n},e))});t.p;function Ze(){return(Ze=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function Qe(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var Xe=o.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),en=o.a.createElement("path",{d:"M10 19h4v-3h-4v3zM5 4v3h5v3h4V7h5V4H5zM3 14h18v-2H3v2z"}),nn=function(e){var n=e.svgRef,t=Qe(e,["svgRef"]);return o.a.createElement("svg",Ze({width:24,height:24,viewBox:"0 0 24 24",ref:n},t),Xe,en)},tn=o.a.forwardRef(function(e,n){return o.a.createElement(nn,Ze({svgRef:n},e))});t.p;function rn(){return(rn=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function on(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var an=o.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),cn=o.a.createElement("path",{d:"M12 17c3.31 0 6-2.69 6-6V3h-2.5v8c0 1.93-1.57 3.5-3.5 3.5S8.5 12.93 8.5 11V3H6v8c0 3.31 2.69 6 6 6zm-7 2v2h14v-2H5z"}),un=function(e){var n=e.svgRef,t=on(e,["svgRef"]);return o.a.createElement("svg",rn({width:24,height:24,viewBox:"0 0 24 24",ref:n},t),an,cn)},ln=o.a.forwardRef(function(e,n){return o.a.createElement(un,rn({svgRef:n},e))}),sn=(t.p,[{label:"Header",style:"header-three",Icon:xe},{label:"Blockquote",style:"blockquote",Icon:Ge},{label:"UL",style:"unordered-list-item",Icon:We},{label:"OL",style:"ordered-list-item",Icon:Ye}]),fn=[{label:"Bold",style:"BOLD",Icon:Oe},{label:"Italic",style:"ITALIC",Icon:Me},{label:"Underline",style:"UNDERLINE",Icon:ln},{label:"Strikethrough",style:"STRIKETHROUGH",Icon:tn}];var dn=function(e){var n=e.editorState,t=e.onToggle,r=n.getSelection(),a=n.getCurrentContent().getBlockForKey(r.getStartKey()).getType();return o.a.createElement(he,null,sn.map(function(e){return o.a.createElement(de,Object.assign({isActive:e.style===a,key:e.label,onToggle:t},e))}))};var pn=function(e){var n=e.editorState,t=e.onToggle,r=n.getCurrentInlineStyle();return o.a.createElement(he,null,fn.map(function(e){return o.a.createElement(de,Object.assign({isActive:r.has(e.style),key:e.label,onToggle:t},e))}))};function hn(){var e=Object(i.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  visibility: ",";\n  z-index: 2;\n\n  @media print {\n    display: none;\n  }\n"]);return hn=function(){return e},e}var mn=u.c.div(hn(),function(e){return e.isVisible?"visible":"hidden"});var vn=function(e){var n=e.editorState,t=e.isVisible,r=e.onChange,a=Object(v.a)(e,["editorState","isVisible","onChange"]);return o.a.createElement(mn,Object.assign({isVisible:t},a),o.a.createElement(pn,{editorState:n,onToggle:function(e){r(te.RichUtils.toggleInlineStyle(n,e))}}),o.a.createElement(dn,{editorState:n,onToggle:function(e){r(te.RichUtils.toggleBlockType(n,e))}}))};function bn(){var e=Object(i.a)(["\n  .DraftEditor-root {\n    flex: 1;\n  }\n  .public-DraftEditorPlaceholder-inner {\n    @media print {\n      display: none;\n    }\n  }\n"]);return bn=function(){return e},e}function gn(){var e=Object(i.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return gn=function(){return e},e}var yn=u.c.div(gn()),On=Object(u.b)(bn());function jn(e){var n=e.editorState,t=e.isSimple,a=e.onChange,c=e.placeholder,i=Object(v.a)(e,["editorState","isSimple","onChange","placeholder"]),u=Object(r.useRef)(null),s=Object(r.useRef)(null),f=function(e){var n=Object(r.useState)(!1),t=Object(l.a)(n,2),o=t[0],a=t[1];return Object(r.useEffect)(function(){return ue(e,a),function(){le(e)}},[]),o}(s),d=Object(r.useCallback)(function(e){a(e)},[a]),p=Object(r.useCallback)(function(e,n){var t=te.RichUtils.handleKeyCommand(n,e);return t?(a(t),"handled"):"not-handled"},[a]);return o.a.createElement(yn,Object.assign({onClick:function(){u.current.focus()},ref:s},i),o.a.createElement(On,null),o.a.createElement(te.Editor,{editorState:n,handleKeyCommand:p,onChange:d,placeholder:c,ref:u}),!t&&o.a.createElement(vn,{editorState:n,isVisible:f,onChange:d}))}jn.createEditorStateFromMarkdown=function(e){return te.EditorState.createWithContent(Object(re.stateFromMarkdown)(e))},jn.updateEditorStateWithMarkdown=function(e,n){return te.EditorState.push(e,Object(re.stateFromMarkdown)(n))},jn.getMarkdownFromEditorState=function(e){return Object(oe.stateToMarkdown)(e.getCurrentContent())};var wn=jn,En=function(){return Boolean(document.fullscreenElement)},kn=function(){En()?document.exitFullscreen&&document.exitFullscreen():document.documentElement.requestFullscreen()};function Sn(){var e=Object(i.a)(["\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  line-height: inherit;\n  margin-top: -0.5em;\n  margin-right: 1px;\n  padding: 0.5em 1em;\n  position: relative;\n  text-transform: uppercase;\n\n  &:hover,\n  &:focus {\n    background: #DDDDDD;\n    outline: none;\n  }\n  &:last-child {\n    margin-right: -0.5em;\n  }\n  &:not(:last-child)::after {\n    background: currentColor;\n    bottom: 0.6em;\n    content: '';\n    position: absolute;\n    right: -1px;\n    top: 0.6em;\n    width: 1px;\n  }\n"]);return Sn=function(){return e},e}function xn(){var e=Object(i.a)(["\n  display: block;\n  position: absolute;\n  top: -9999px;\n  left: -9999px;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n"]);return xn=function(){return e},e}function Cn(){var e=Object(i.a)(["\n  background-color: ",";\n  padding: 0 0.5em;\n  text-align: right;\n\n  @media print {\n    display: none;\n  }\n"]);return Cn=function(){return e},e}var In=u.c.div(Cn(),function(e){return e.theme.pageBackground}),Pn=u.c.form(xn()),Rn=u.c.button(Sn());var Hn=function(e){var n=e.loadFromFile,t=e.onReset,a=e.onSaveAs,c=Object(v.a)(e,["loadFromFile","onReset","onSaveAs"]),i=Object(r.useRef)(),u=Object(r.useRef)(),s=Object(r.useCallback)(function(){window.confirm("Are you sure to reject all your changes?")&&t()},[t]),f=Object(r.useCallback)(function(){m("/")},[]),d=function(){var e=Object(r.useState)(En()),n=Object(l.a)(e,2),t=n[0],o=n[1];return Object(r.useEffect)(function(){var e=function(){return o(En())};return document.addEventListener("fullscreenchange",e),function(){document.removeEventListener("fullscreenchange",e)}},[o]),{isFullscreen:t,toggleFullscreen:kn}}(),p=d.isFullscreen,h=d.toggleFullscreen;return o.a.createElement(In,c,o.a.createElement(Rn,{onClick:h},p?"Exit full screen":"full screen"),o.a.createElement(Rn,{onClick:a},"Save to file"),o.a.createElement(Rn,{onClick:function(){return u.current.click()}},"Import from file",o.a.createElement(Pn,{ref:i},o.a.createElement("input",{accept:"text/plain, text/markdown","aria-hidden":!0,tabIndex:"-1",type:"file",onChange:function(e){var t=e.target;n(t.files[0]),i.current.reset()},ref:u}))),o.a.createElement(Rn,{onClick:s},"Create new canvas"),o.a.createElement(Rn,{onClick:window.print},"Print"),o.a.createElement(Rn,{"aria-label":"Help",onClick:f},"?"))};function Mn(){var e=Object(i.a)(["\n  border-left-style: solid;\n  bottom: ",";\n  left: 0;\n  top: ",";\n"]);return Mn=function(){return e},e}function zn(){var e=Object(i.a)(["\n  border-bottom-style: solid;\n  bottom: 0;\n  left: ",";\n  right: ",";\n"]);return zn=function(){return e},e}function Fn(){var e=Object(i.a)(["\n  border-right-style: solid;\n  bottom: ",";\n  right: 0;\n  top: ",";\n"]);return Fn=function(){return e},e}function Bn(){var e=Object(i.a)(["\n  border-top-style: solid;\n  left: ",";\n  right: ",";\n  top: 0;\n"]);return Bn=function(){return e},e}function An(){var e=Object(i.a)(["\n  position: absolute;\n  border-color: ",";\n  border-style: none;\n  border-width: 1px;\n\n  @media print {\n    border-width: 2px;\n  }\n"]);return An=function(){return e},e}var Dn=u.c.div(An(),function(e){return e.theme.borderColor}),Wn=Object(u.c)(Dn)(Bn(),"0.75em","0.75em"),Ln=Object(u.c)(Dn)(Fn(),"0.75em","0.75em"),Tn=Object(u.c)(Dn)(zn(),"0.75em","0.75em"),Vn=Object(u.c)(Dn)(Mn(),"0.75em","0.75em");var Kn=function(e){var n=e.top,t=e.right,r=e.bottom,a=e.left;return o.a.createElement(o.a.Fragment,null,n&&o.a.createElement(Wn,null),t&&o.a.createElement(Ln,null),r&&o.a.createElement(Tn,null),a&&o.a.createElement(Vn,null))};function Un(){var e=Object(i.a)(["\n  flex: 1;\n"]);return Un=function(){return e},e}function Yn(){var e=Object(i.a)(["\n  position: absolute;\n  width: 0;\n  height: 0;\n  overflow: hidden;\n  text-indent: -999;\n"]);return Yn=function(){return e},e}function Nn(){var e=Object(i.a)(["\n  font-size: 1.4em;\n  margin: 0 0 0.5rem 0;\n"]);return Nn=function(){return e},e}function $n(){var e=Object(i.a)(["\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  padding: 0.75rem;\n  position: relative;\n"]);return $n=function(){return e},e}var qn=u.c.article($n()),_n=u.c.h2(Nn()),Jn=u.c.h2(Yn()),Gn=Object(u.c)(wn)(Un());function Zn(e){var n=e.border,t=(e.content,e.editorState),r=e.header,a=e.isSimple,c=e.onChange,i=e.placeholder,u=Object(v.a)(e,["border","content","editorState","header","isSimple","onChange","placeholder"]);return o.a.createElement(qn,u,a?o.a.createElement(Jn,null,r):o.a.createElement(_n,null,r),o.a.createElement(Gn,{editorState:t,isSimple:a,onChange:function(e){c({content:wn.getMarkdownFromEditorState(e),editorState:e})},placeholder:i}),o.a.createElement(Kn,n))}Zn.defaultProps={border:[!1,!1,!1,!1]};var Qn=Zn;function Xn(){var e=Object(i.a)(["\n  flex: 1;\n"]);return Xn=function(){return e},e}function et(){var e=Object(i.a)(["\n  border: none;\n  display: block;\n  font-weight: inherit;\n  text-align: right;\n  width: 20em;\n"]);return et=function(){return e},e}function nt(){var e=Object(i.a)(["\n"]);return nt=function(){return e},e}function tt(){var e=Object(i.a)(["\n  border: none;\n  display: block;\n  font-weight: inherit;\n  width: 100%;\n"]);return tt=function(){return e},e}function rt(){var e=Object(i.a)(["\n  margin: 0;\n  flex: 1;\n"]);return rt=function(){return e},e}function ot(){var e=Object(i.a)(["\n  margin: 0.75em 0.75em 0 0.75em;\n  display: flex;\n"]);return ot=function(){return e},e}function at(){var e=Object(i.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return at=function(){return e},e}var ct=u.c.div(at()),it=u.c.div(ot()),ut=u.c.h1(rt()),lt=u.c.input(tt()),st=u.c.div(nt()),ft=u.c.input(et()),dt=Object(u.c)(Qn)(Xn());var pt=function(e){var n=e.getProperty,t=(e.gridArea,e.header),a=e.onHeaderChange,c=e.onPropertyChange,i=e.sectionProps,u=Object(v.a)(e,["getProperty","gridArea","header","onHeaderChange","onPropertyChange","sectionProps"]),l=Object(r.useCallback)(function(e){var n=e.target;a({value:n.value})},[a]),s=Object(r.useCallback)(function(e){var n=e.target;c("date",{value:n.value})},[c]),f=Object(r.useCallback)(function(e){var n=e.target;c("name",{value:n.value})},[c]);return o.a.createElement(ct,u,o.a.createElement(it,null,o.a.createElement(ut,null,o.a.createElement(lt,Object.assign({"aria-label":"Your Business",onChange:l,placeholder:"Your Business"},t))),o.a.createElement(st,null,o.a.createElement(ft,Object.assign({onChange:s},n("date"))),o.a.createElement(ft,Object.assign({onChange:f},n("name"))))),o.a.createElement(dt,Object.assign({isSimple:!0},i)))},ht={header:{value:"",placeholder:"Your Business"},localStorageKey:"businessModelCanvas",props:[{key:"date",placeholder:"Date",value:(new Date).toLocaleDateString()},{key:"name",placeholder:"Your Name",value:""}],sections:[{key:"purpose",border:{bottom:!0},content:"",header:"Purpose",isHeader:!0,placeholder:"Step 1:\nWhat is the business purpose?\nYou will need it to validate every single part of the model."},{key:"customer-segments",border:{left:!0},content:"",header:"Customer Segments",placeholder:"Step 2:\nWhich customers does your business try to serve?"},{key:"value-propositions",border:{right:!0,left:!0},content:"",header:"Value Propositions",placeholder:"Step 3:\nWhich products and services a business offers meet the needs of the customer segments?"},{key:"channels",border:{top:!0},content:"",header:"Channels",placeholder:"Step 4:\nWhich channels does your business use to deliver the value proposition to the customer segments"},{key:"customer-relationships",border:{},content:"",header:"Customer Relationships",placeholder:"Step 5:\nWhich type relationship does your business want to create with the customer segments"},{key:"revenue-streams",border:{top:!0},content:"",header:"Revenue Streams",placeholder:"Step 6:\nHow does your company make income from each customer segment?"},{key:"key-resources",border:{top:!0},content:"",header:"Key Resources",placeholder:"Step 7:\nWhich resources are necessary to create the value propositions?"},{key:"key-activities",border:{},content:"",header:"Key Activities",placeholder:"Step 8:\nWhat are the most important activities in executing the value propositions?"},{key:"key-partners",border:{right:!0},content:"",header:"Key Partners",placeholder:"Step 9:\nWhich buyer-supplier relationships can help you to focus on your core activity, optimise operations and reduce risks?"},{key:"cost-structure",border:{top:!0,right:!0},content:"",header:"Cost Structure",placeholder:"Step 10:\nWhat are the most important monetary consequences while operating under this business model?"}]};function mt(){var e=Object(i.a)(["\n  grid-area: menu;\n"]);return mt=function(){return e},e}function vt(){var e=Object(i.a)(["\n  grid-area: ",";\n"]);return vt=function(){return e},e}function bt(){var e=Object(i.a)(["\n  grid-area: ",";\n"]);return bt=function(){return e},e}function gt(){var e=Object(i.a)(["\n  background-color: ",";\n  border-color: ",';\n  border-style: solid;\n  border-width: 0.5em;\n  box-sizing: border-box;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;\n  grid-template-rows: auto 0.5fr 1fr 1fr 1fr;\n  grid-template-areas:\n    "menu menu menu menu menu menu menu menu menu menu"\n    "purpose purpose purpose purpose purpose purpose purpose purpose purpose purpose"\n    "key-partners key-partners key-activities key-activities value-propositions value-propositions customer-relationships customer-relationships customer-segments customer-segments"\n    "key-partners key-partners key-resources key-resources value-propositions value-propositions channels channels customer-segments customer-segments"\n    "cost-structure cost-structure cost-structure cost-structure cost-structure revenue-streams revenue-streams revenue-streams revenue-streams revenue-streams";\n  margin: auto;\n\n  height: 100%;\n  width: 100%;\n  @media screen {\n    min-width: 90em;\n    min-height: 60em;\n  }\n']);return gt=function(){return e},e}var yt=u.c.div(gt(),function(e){return e.theme.paperBackground},function(e){return e.theme.pageBackground}),Ot=Object(u.c)(Qn)(bt(),function(e){return e.gridArea}),jt=Object(u.c)(pt)(vt(),function(e){return e.gridArea}),wt=Object(u.c)(Hn)(mt()),Et=function(e){return e.reduce(function(e,n){return Object(g.a)({},e,Object(b.a)({},n.key,wn.createEditorStateFromMarkdown(n.content)))},{})};var kt=function(){var e=function(e){var n=e.model,t=Object(r.useMemo)(function(){return ne(n)},[]),o=Object(r.useState)(),a=Object(l.a)(o,2)[1];return Object(r.useEffect)(function(){return t.setOnChange(a),function(){t.removeOnChange()}}),t}({model:ht}),n=Object(r.useMemo)(function(){return Et(e.sections)},[]),t=Object(r.useState)(n),a=Object(l.a)(t,2),c=a[0],i=a[1],u=function(){var n=I(c,function(n,t){return wn.updateEditorStateWithMarkdown(t,e.getSection(n).content)});i(n)};return o.a.createElement(o.a.Fragment,null,o.a.createElement(yt,null,o.a.createElement(wt,{loadFromFile:function(n){e.loadFromFile(n).then(u)},onReset:function(){e.reset(),u()},onSaveAs:e.saveAs}),e.sections.map(function(n){var t=n.isHeader,r=n.key,a=Object(v.a)(n,["isHeader","key"]),u=Object(g.a)({editorState:c[r],isSimple:t,onChange:function(n){var t=n.content,o=n.editorState;e.updateSection(r,{content:t}),function(e,n){var t=Object(g.a)({},c,Object(b.a)({},e,n));i(t)}(r,o)}},a);return t?o.a.createElement(jt,{gridArea:r,header:e.header,key:r,onHeaderChange:e.updateHeader,onPropertyChange:e.updateProperty,getProperty:e.getProperty,sectionProps:u}):o.a.createElement(Ot,Object.assign({gridArea:r,key:r},u))})))},St=t(170);function xt(){var e=Object(i.a)(["\n  background-color: ",";\n  margin: 1em 1em 3em 1em;\n  max-width: calc(100% - 2em);\n  padding: 1em;\n  width: 50em;\n"]);return xt=function(){return e},e}function Ct(){var e=Object(i.a)(["\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  min-height: 100%;\n  width: 100%;\n"]);return Ct=function(){return e},e}var It=u.c.div(Ct()),Pt=u.c.div(xt(),function(e){return e.theme.paperBackground});var Rt=function(e){var n=e.children,t=Object(v.a)(e,["children"]);return o.a.createElement(It,t,o.a.createElement(Pt,null,n))};function Ht(){var e=Object(i.a)(["\n  font-family: 'Montserrat', sans-serif;\n  margin-bottom: 2em;\n"]);return Ht=function(){return e},e}function Mt(){var e=Object(i.a)(["\n  background: #37A51C;\n  border-radius: 0;\n  border: none;\n  color: #fff;\n  cursor: pointer;\n  font-family: 'Montserrat', sans-serif;\n  font-size: 16px;\n  font-weight: bold;\n  padding: 0.75em 2em;\n  text-transform: uppercase;\n"]);return Mt=function(){return e},e}function zt(){var e=Object(i.a)(["\n  color: inherit;\n"]);return zt=function(){return e},e}function Ft(){var e=Object(i.a)(["\n  margin-bottom: 0.5em;\n"]);return Ft=function(){return e},e}var Bt=u.c.li(Ft()),At=u.c.a.attrs({rel:"noopener noreferrer",target:"_blank"})(zt()),Dt=u.c.button(Mt()),Wt=u.c.p(Ht());var Lt=function(e){var n=Object(St.a)({},e);return o.a.createElement(Rt,n,o.a.createElement("h3",null,"Business Model Canvas"),o.a.createElement("h1",null,"Welcome!"),o.a.createElement("p",null,"On the next page you will have the possibility to fill out a canvas. Nothing of your data will be stored at or even sent to a server. This is great as nobody can misuse your data, but you have to take care on your own to store and reload it."),o.a.createElement("ul",null,o.a.createElement(Bt,null,"Your input is stored in the browsers ",o.a.createElement("strong",null,"local storage"),". This means it will persist if you reload the page or even close the browser and open it again. But it will not be available in another browser or another computer."),o.a.createElement(Bt,null,"You have the possibility to ",o.a.createElement("strong",null,"download your work as a simple, human readable text file")," (extended ",o.a.createElement(At,{href:"https://de.wikipedia.org/wiki/Markdown"},"markdown"),' syntax). Watch out for the "Save to file" button top right.'),o.a.createElement(Bt,null,"Your can edit the text file locally (if you want to) and ",o.a.createElement("strong",null,"load it again"),'. Watch out for the "Import from file" button top right.'),o.a.createElement(Bt,null,"This page is ",o.a.createElement("strong",null,"offline enabled"),". This means if you loaded the page once it will persist if you loose yor internet connection. You can even navigate to the url again and it will load without connection.")),o.a.createElement("p",null,"I hope this canvas is useful for you & I would appreciate your feedback via ",o.a.createElement(At,{href:"https://twitter.com/tobzuc"},"twitter")," or ",o.a.createElement(At,{href:"https://www.linkedin.com/in/tobias-zucali-3555b388/"},"linkedin"),"!"),o.a.createElement(Wt,null,"Tobias"),o.a.createElement(Dt,{onClick:function(){return m("/canvas")}},localStorage.getItem("isInited")?"Load canvas":"Create new canvas"))},Tt={pageBackground:"#EEEEEE",paperBackground:"#FFFFFF",borderColor:"#CCCCCC"};function Vt(){var e=Object(i.a)(["\n  BODY {\n    background-color: ",";\n    font-size: 14px;\n\n    @media (min-width: 1600px) {\n      font-size: 16px;\n    }\n    @media (min-width: 2000px) {\n      font-size: 18px;\n    }\n  }\n"]);return Vt=function(){return e},e}var Kt=Object(u.b)(Vt(),function(e){return e.theme.pageBackground}),Ut=[{url:"/canvas",Component:kt},{Component:Lt}];var Yt=function(){var e=function(e){var n=Object(r.useState)(Object(r.useMemo)(h,[])),t=Object(l.a)(n,2),o=t[0],a=t[1];return Object(r.useEffect)(function(){var e=function(){a(h())};return window.addEventListener("hashchange",e),function(){window.removeEventListener("hashchange",e)}}),Object(r.useMemo)(function(){var n,t=e.find(function(e){var t=e.url;return!!p()(t)||(f()(t)?(n=o.match(t),Boolean(n)):t===o)});return{match:n,push:m,route:t||{url:o}}},[e,o])}(Ut).route.Component;return o.a.createElement(u.a,{theme:Tt},o.a.createElement(o.a.Fragment,null,o.a.createElement(Kt,null),o.a.createElement(e,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(393),t(394);c.a.render(o.a.createElement(Yt,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[172,1,2]]]);
//# sourceMappingURL=main.2cf4f274.chunk.js.map