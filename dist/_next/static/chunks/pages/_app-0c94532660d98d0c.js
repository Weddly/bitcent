(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{8417:function(e,t,r){"use strict";r.d(t,{Z:function(){return q}});var n=function(){function e(e){var t=this;this._insertTag=function(e){var r;r=0===t.tags.length?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling,t.container.insertBefore(e,r),t.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){if(this.ctr%(this.isSpeedy?65e3:1)==0){var t;this._insertTag(((t=document.createElement("style")).setAttribute("data-emotion",this.key),void 0!==this.nonce&&t.setAttribute("nonce",this.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t))}var r=this.tags[this.tags.length-1];if(this.isSpeedy){var n=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(r);try{n.insertRule(e,n.cssRules.length)}catch(e){}}else r.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach(function(e){return e.parentNode&&e.parentNode.removeChild(e)}),this.tags=[],this.ctr=0},e}(),i=Math.abs,s=String.fromCharCode,a=Object.assign;function o(e,t,r){return e.replace(t,r)}function l(e,t){return e.indexOf(t)}function u(e,t){return 0|e.charCodeAt(t)}function c(e,t,r){return e.slice(t,r)}function h(e){return e.length}function d(e,t){return t.push(e),e}var f=1,p=1,m=0,g=0,y=0,v="";function w(e,t,r,n,i,s,a){return{value:e,root:t,parent:r,type:n,props:i,children:s,line:f,column:p,length:a,return:""}}function b(e,t){return a(w("",null,null,"",null,null,0),e,{length:-e.length},t)}function E(){return y=g<m?u(v,g++):0,p++,10===y&&(p=1,f++),y}function I(){return u(v,g)}function _(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function T(e){return f=p=1,m=h(v=e),g=0,[]}function S(e){var t,r;return(t=g-1,r=function e(t){for(;E();)switch(y){case t:return g;case 34:case 39:34!==t&&39!==t&&e(y);break;case 40:41===t&&e(t);break;case 92:E()}return g}(91===e?e+2:40===e?e+1:e),c(v,t,r)).trim()}var k="-ms-",C="-moz-",A="-webkit-",N="comm",R="rule",D="decl",O="@keyframes";function P(e,t){for(var r="",n=e.length,i=0;i<n;i++)r+=t(e[i],i,e,t)||"";return r}function x(e,t,r,n){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case D:return e.return=e.return||e.value;case N:return"";case O:return e.return=e.value+"{"+P(e.children,n)+"}";case R:e.value=e.props.join(",")}return h(r=P(e.children,n))?e.return=e.value+"{"+r+"}":""}function L(e,t,r,n,s,a,l,u,h,d,f){for(var p=s-1,m=0===s?a:[""],g=m.length,y=0,v=0,b=0;y<n;++y)for(var E=0,I=c(e,p+1,p=i(v=l[y])),_=e;E<g;++E)(_=(v>0?m[E]+" "+I:o(I,/&\f/g,m[E])).trim())&&(h[b++]=_);return w(e,t,r,0===s?R:u,h,d,f)}function M(e,t,r,n){return w(e,t,r,D,c(e,0,n),c(e,n+1,-1),n)}var F=function(e,t,r){for(var n=0,i=0;n=i,i=I(),38===n&&12===i&&(t[r]=1),!_(i);)E();return c(v,e,g)},U=function(e,t){var r=-1,n=44;do switch(_(n)){case 0:38===n&&12===I()&&(t[r]=1),e[r]+=F(g-1,t,r);break;case 2:e[r]+=S(n);break;case 4:if(44===n){e[++r]=58===I()?"&\f":"",t[r]=e[r].length;break}default:e[r]+=s(n)}while(n=E());return e},V=function(e,t){var r;return r=U(T(e),t),v="",r},j=new WeakMap,$=function(e){if("rule"===e.type&&e.parent&&!(e.length<1)){for(var t=e.value,r=e.parent,n=e.column===r.column&&e.line===r.line;"rule"!==r.type;)if(!(r=r.parent))return;if((1!==e.props.length||58===t.charCodeAt(0)||j.get(r))&&!n){j.set(e,!0);for(var i=[],s=V(t,i),a=r.props,o=0,l=0;o<s.length;o++)for(var u=0;u<a.length;u++,l++)e.props[l]=i[o]?s[o].replace(/&\f/g,a[u]):a[u]+" "+s[o]}}},z=function(e){if("decl"===e.type){var t=e.value;108===t.charCodeAt(0)&&98===t.charCodeAt(2)&&(e.return="",e.value="")}},B=[function(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case D:e.return=function e(t,r){switch(45^u(t,0)?(((r<<2^u(t,0))<<2^u(t,1))<<2^u(t,2))<<2^u(t,3):0){case 5103:return A+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return A+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return A+t+C+t+k+t+t;case 6828:case 4268:return A+t+k+t+t;case 6165:return A+t+k+"flex-"+t+t;case 5187:return A+t+o(t,/(\w+).+(:[^]+)/,A+"box-$1$2"+k+"flex-$1$2")+t;case 5443:return A+t+k+"flex-item-"+o(t,/flex-|-self/,"")+t;case 4675:return A+t+k+"flex-line-pack"+o(t,/align-content|flex-|-self/,"")+t;case 5548:return A+t+k+o(t,"shrink","negative")+t;case 5292:return A+t+k+o(t,"basis","preferred-size")+t;case 6060:return A+"box-"+o(t,"-grow","")+A+t+k+o(t,"grow","positive")+t;case 4554:return A+o(t,/([^-])(transform)/g,"$1"+A+"$2")+t;case 6187:return o(o(o(t,/(zoom-|grab)/,A+"$1"),/(image-set)/,A+"$1"),t,"")+t;case 5495:case 3959:return o(t,/(image-set\([^]*)/,A+"$1$`$1");case 4968:return o(o(t,/(.+:)(flex-)?(.*)/,A+"box-pack:$3"+k+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+A+t+t;case 4095:case 3583:case 4068:case 2532:return o(t,/(.+)-inline(.+)/,A+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(h(t)-1-r>6)switch(u(t,r+1)){case 109:if(45!==u(t,r+4))break;case 102:return o(t,/(.+:)(.+)-([^]+)/,"$1"+A+"$2-$3$1"+C+(108==u(t,r+3)?"$3":"$2-$3"))+t;case 115:return~l(t,"stretch")?e(o(t,"stretch","fill-available"),r)+t:t}break;case 4949:if(115!==u(t,r+1))break;case 6444:switch(u(t,h(t)-3-(~l(t,"!important")&&10))){case 107:return o(t,":",":"+A)+t;case 101:return o(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+A+(45===u(t,14)?"inline-":"")+"box$3$1"+A+"$2$3$1"+k+"$2box$3")+t}break;case 5936:switch(u(t,r+11)){case 114:return A+t+k+o(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return A+t+k+o(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return A+t+k+o(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return A+t+k+t+t}return t}(e.value,e.length);break;case O:return P([b(e,{value:o(e.value,"@","@"+A)})],n);case R:if(e.length)return e.props.map(function(t){var r;switch(r=t,(r=/(::plac\w+|:read-\w+)/.exec(r))?r[0]:r){case":read-only":case":read-write":return P([b(e,{props:[o(t,/:(read-\w+)/,":"+C+"$1")]})],n);case"::placeholder":return P([b(e,{props:[o(t,/:(plac\w+)/,":"+A+"input-$1")]}),b(e,{props:[o(t,/:(plac\w+)/,":"+C+"$1")]}),b(e,{props:[o(t,/:(plac\w+)/,k+"input-$1")]})],n)}return""}).join("")}}],q=function(e){var t,r,i,a,m,b=e.key;if("css"===b){var k=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(k,function(e){-1!==e.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(e),e.setAttribute("data-s",""))})}var C=e.stylisPlugins||B,A={},R=[];a=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+b+' "]'),function(e){for(var t=e.getAttribute("data-emotion").split(" "),r=1;r<t.length;r++)A[t[r]]=!0;R.push(e)});var D=(r=(t=[$,z].concat(C,[x,(i=function(e){m.insert(e)},function(e){!e.root&&(e=e.return)&&i(e)})])).length,function(e,n,i,s){for(var a="",o=0;o<r;o++)a+=t[o](e,n,i,s)||"";return a}),O=function(e){var t,r;return P((r=function e(t,r,n,i,a,m,b,T,k){for(var C,A=0,R=0,D=b,O=0,P=0,x=0,F=1,U=1,V=1,j=0,$="",z=a,B=m,q=i,H=$;U;)switch(x=j,j=E()){case 40:if(108!=x&&58==u(H,D-1)){-1!=l(H+=o(S(j),"&","&\f"),"&\f")&&(V=-1);break}case 34:case 39:case 91:H+=S(j);break;case 9:case 10:case 13:case 32:H+=function(e){for(;y=I();)if(y<33)E();else break;return _(e)>2||_(y)>3?"":" "}(x);break;case 92:H+=function(e,t){for(var r;--t&&E()&&!(y<48)&&!(y>102)&&(!(y>57)||!(y<65))&&(!(y>70)||!(y<97)););return r=g+(t<6&&32==I()&&32==E()),c(v,e,r)}(g-1,7);continue;case 47:switch(I()){case 42:case 47:d(w(C=function(e,t){for(;E();)if(e+y===57)break;else if(e+y===84&&47===I())break;return"/*"+c(v,t,g-1)+"*"+s(47===e?e:E())}(E(),g),r,n,N,s(y),c(C,2,-2),0),k);break;default:H+="/"}break;case 123*F:T[A++]=h(H)*V;case 125*F:case 59:case 0:switch(j){case 0:case 125:U=0;case 59+R:-1==V&&(H=o(H,/\f/g,"")),P>0&&h(H)-D&&d(P>32?M(H+";",i,n,D-1):M(o(H," ","")+";",i,n,D-2),k);break;case 59:H+=";";default:if(d(q=L(H,r,n,A,R,a,T,$,z=[],B=[],D),m),123===j){if(0===R)e(H,r,q,q,z,m,D,T,B);else switch(99===O&&110===u(H,3)?100:O){case 100:case 108:case 109:case 115:e(t,q,q,i&&d(L(t,q,q,0,0,a,T,$,a,z=[],D),B),a,B,D,T,i?z:B);break;default:e(H,q,q,q,[""],B,0,T,B)}}}A=R=P=0,F=V=1,$=H="",D=b;break;case 58:D=1+h(H),P=x;default:if(F<1){if(123==j)--F;else if(125==j&&0==F++&&125==(y=g>0?u(v,--g):0,p--,10===y&&(p=1,f--),y))continue}switch(H+=s(j),j*F){case 38:V=R>0?1:(H+="\f",-1);break;case 44:T[A++]=(h(H)-1)*V,V=1;break;case 64:45===I()&&(H+=S(E())),O=I(),R=D=h($=H+=function(e){for(;!_(I());)E();return c(v,e,g)}(g)),j++;break;case 45:45===x&&2==h(H)&&(F=0)}}return m}("",null,null,null,[""],t=T(t=e),0,[0],t),v="",r),D)},F={key:b,sheet:new n({key:b,container:a,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:A,registered:{},insert:function(e,t,r,n){m=r,O(e?e+"{"+t.styles+"}":t.styles),n&&(F.inserted[t.name]=!0)}};return F.sheet.hydrate(R),F}},7906:function(e,t,r){"use strict";r.d(t,{O:function(){return p}});var n,i,s={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},a=/[A-Z]|^ms/g,o=/_EMO_([^_]+?)_([^]*?)_EMO_/g,l=function(e){return 45===e.charCodeAt(1)},u=function(e){return null!=e&&"boolean"!=typeof e},c=(n=Object.create(null),function(e){return void 0===n[e]&&(n[e]=l(e)?e:e.replace(a,"-$&").toLowerCase()),n[e]}),h=function(e,t){switch(e){case"animation":case"animationName":if("string"==typeof t)return t.replace(o,function(e,t,r){return i={name:t,styles:r,next:i},t})}return 1===s[e]||l(e)||"number"!=typeof t||0===t?t:t+"px"};function d(e,t,r){if(null==r)return"";if(void 0!==r.__emotion_styles)return r;switch(typeof r){case"boolean":return"";case"object":if(1===r.anim)return i={name:r.name,styles:r.styles,next:i},r.name;if(void 0!==r.styles){var n=r.next;if(void 0!==n)for(;void 0!==n;)i={name:n.name,styles:n.styles,next:i},n=n.next;return r.styles+";"}return function(e,t,r){var n="";if(Array.isArray(r))for(var i=0;i<r.length;i++)n+=d(e,t,r[i])+";";else for(var s in r){var a=r[s];if("object"!=typeof a)null!=t&&void 0!==t[a]?n+=s+"{"+t[a]+"}":u(a)&&(n+=c(s)+":"+h(s,a)+";");else if(Array.isArray(a)&&"string"==typeof a[0]&&(null==t||void 0===t[a[0]]))for(var o=0;o<a.length;o++)u(a[o])&&(n+=c(s)+":"+h(s,a[o])+";");else{var l=d(e,t,a);switch(s){case"animation":case"animationName":n+=c(s)+":"+l+";";break;default:n+=s+"{"+l+"}"}}}return n}(e,t,r);case"function":if(void 0!==e){var s=i,a=r(e);return i=s,d(e,t,a)}}if(null==t)return r;var o=t[r];return void 0!==o?o:r}var f=/label:\s*([^\s;\n{]+)\s*(;|$)/g,p=function(e,t,r){if(1===e.length&&"object"==typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var n,s=!0,a="";i=void 0;var o=e[0];null==o||void 0===o.raw?(s=!1,a+=d(r,t,o)):a+=o[0];for(var l=1;l<e.length;l++)a+=d(r,t,e[l]),s&&(a+=o[l]);f.lastIndex=0;for(var u="";null!==(n=f.exec(a));)u+="-"+n[1];return{name:function(e){for(var t,r=0,n=0,i=e.length;i>=4;++n,i-=4)t=(65535&(t=255&e.charCodeAt(n)|(255&e.charCodeAt(++n))<<8|(255&e.charCodeAt(++n))<<16|(255&e.charCodeAt(++n))<<24))*1540483477+((t>>>16)*59797<<16),t^=t>>>24,r=(65535&t)*1540483477+((t>>>16)*59797<<16)^(65535&r)*1540483477+((r>>>16)*59797<<16);switch(i){case 3:r^=(255&e.charCodeAt(n+2))<<16;case 2:r^=(255&e.charCodeAt(n+1))<<8;case 1:r^=255&e.charCodeAt(n),r=(65535&r)*1540483477+((r>>>16)*59797<<16)}return r^=r>>>13,(((r=(65535&r)*1540483477+((r>>>16)*59797<<16))^r>>>15)>>>0).toString(36)}(a)+u,styles:a,next:i}}},444:function(e,t,r){"use strict";function n(e,t,r){var n="";return r.split(" ").forEach(function(r){void 0!==e[r]?t.push(e[r]+";"):n+=r+" "}),n}r.d(t,{My:function(){return s},fp:function(){return n}});var i=function(e,t,r){var n=e.key+"-"+t.name;!1===r&&void 0===e.registered[n]&&(e.registered[n]=t.styles)},s=function(e,t,r){i(e,t,r);var n=e.key+"-"+t.name;if(void 0===e.inserted[t.name]){var s=t;do e.insert(t===s?"."+n:"",s,e.sheet,!0),s=s.next;while(void 0!==s)}}},6803:function(e,t,r){"use strict";r.d(t,{Me:function(){return eS},N4:function(){return eT},T1:function(){return e_},O2:function(){return eI},rZ:function(){return eE}});var n,i=r(7294),s=r.t(i,2),a=r(8417);function o(){return(o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var l=function(e){var t=new WeakMap;return function(r){if(t.has(r))return t.get(r);var n=e(r);return t.set(r,n),n}},u=r(7906),c=!!s.useInsertionEffect&&s.useInsertionEffect||i.useLayoutEffect,h=i.createContext("undefined"!=typeof HTMLElement?(0,a.Z)({key:"css"}):null);h.Provider;var d=i.createContext({}),f=l(function(e){return l(function(t){return"function"==typeof t?t(e):o({},e,t)})}),p=function(e){var t=i.useContext(d);return e.theme!==t&&(t=f(t)(e.theme)),i.createElement(d.Provider,{value:t},e.children)},m=r(444);r(8679);var g=(n=function(e,t){var r=e.styles,n=(0,u.O)([r],void 0,i.useContext(d)),s=i.useRef();return c(function(){var e=t.key+"-global",r=new t.sheet.constructor({key:e,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),i=!1,a=document.querySelector('style[data-emotion="'+e+" "+n.name+'"]');return t.sheet.tags.length&&(r.before=t.sheet.tags[0]),null!==a&&(i=!0,a.setAttribute("data-emotion",e),r.hydrate([a])),s.current=[r,i],function(){r.flush()}},[t]),c(function(){var e=s.current,r=e[0];if(e[1]){e[1]=!1;return}if(void 0!==n.next&&(0,m.My)(t,n.next,!0),r.tags.length){var i=r.tags[r.tags.length-1].nextElementSibling;r.before=i,r.flush()}t.insert("",n,r,!1)},[t,n.name]),null},(0,i.forwardRef)(function(e,t){return n(e,(0,i.useContext)(h),t)}));let y={dark:["#C1C2C5","#A6A7AB","#909296","#5c5f66","#373A40","#2C2E33","#25262b","#1A1B1E","#141517","#101113"],gray:["#f8f9fa","#f1f3f5","#e9ecef","#dee2e6","#ced4da","#adb5bd","#868e96","#495057","#343a40","#212529"],red:["#fff5f5","#ffe3e3","#ffc9c9","#ffa8a8","#ff8787","#ff6b6b","#fa5252","#f03e3e","#e03131","#c92a2a"],pink:["#fff0f6","#ffdeeb","#fcc2d7","#faa2c1","#f783ac","#f06595","#e64980","#d6336c","#c2255c","#a61e4d"],grape:["#f8f0fc","#f3d9fa","#eebefa","#e599f7","#da77f2","#cc5de8","#be4bdb","#ae3ec9","#9c36b5","#862e9c"],violet:["#f3f0ff","#e5dbff","#d0bfff","#b197fc","#9775fa","#845ef7","#7950f2","#7048e8","#6741d9","#5f3dc4"],indigo:["#edf2ff","#dbe4ff","#bac8ff","#91a7ff","#748ffc","#5c7cfa","#4c6ef5","#4263eb","#3b5bdb","#364fc7"],blue:["#e7f5ff","#d0ebff","#a5d8ff","#74c0fc","#4dabf7","#339af0","#228be6","#1c7ed6","#1971c2","#1864ab"],cyan:["#e3fafc","#c5f6fa","#99e9f2","#66d9e8","#3bc9db","#22b8cf","#15aabf","#1098ad","#0c8599","#0b7285"],teal:["#e6fcf5","#c3fae8","#96f2d7","#63e6be","#38d9a9","#20c997","#12b886","#0ca678","#099268","#087f5b"],green:["#ebfbee","#d3f9d8","#b2f2bb","#8ce99a","#69db7c","#51cf66","#40c057","#37b24d","#2f9e44","#2b8a3e"],lime:["#f4fce3","#e9fac8","#d8f5a2","#c0eb75","#a9e34b","#94d82d","#82c91e","#74b816","#66a80f","#5c940d"],yellow:["#fff9db","#fff3bf","#ffec99","#ffe066","#ffd43b","#fcc419","#fab005","#f59f00","#f08c00","#e67700"],orange:["#fff4e6","#ffe8cc","#ffd8a8","#ffc078","#ffa94d","#ff922b","#fd7e14","#f76707","#e8590c","#d9480f"]};var v=Object.defineProperty,w=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable,I=(e,t,r)=>t in e?v(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,_=(e,t)=>{for(var r in t||(t={}))b.call(t,r)&&I(e,r,t[r]);if(w)for(var r of w(t))E.call(t,r)&&I(e,r,t[r]);return e};function T(e){return t=>"number"==typeof e.primaryShade?e.primaryShade:e.primaryShade[t||e.colorScheme]}function S(e){let t=T(e);return(r,n,i=!0,s=!0)=>{if("string"==typeof r&&r.includes(".")){let[t,i]=r.split("."),a=parseInt(i,10);if(t in e.colors&&a>=0&&a<10)return e.colors[t]["number"!=typeof n||s?a:n]}let a="number"==typeof n?n:t();return r in e.colors?e.colors[r][a]:i?e.colors[e.primaryColor][a]:r}}function k(e){let t="";for(let r=1;r<e.length-1;r+=1)t+=`${e[r]} ${r/(e.length-1)*100}%, `;return`${e[0]} 0%, ${t}${e[e.length-1]} 100%`}function C(e){let t=S(e),r=T(e);return n=>{let i={from:(null==n?void 0:n.from)||e.defaultGradient.from,to:(null==n?void 0:n.to)||e.defaultGradient.to,deg:(null==n?void 0:n.deg)||e.defaultGradient.deg};return`linear-gradient(${i.deg}deg, ${t(i.from,r(),!1)} 0%, ${t(i.to,r(),!1)} 100%)`}}var A=r(58);function N(e){return/^#?([0-9A-F]{3}){1,2}$/i.test(e)?function(e){let t=e.replace("#","");if(3===t.length){let e=t.split("");t=[e[0],e[0],e[1],e[1],e[2],e[2]].join("")}let r=parseInt(t,16);return{r:r>>16&255,g:r>>8&255,b:255&r,a:1}}(e):e.startsWith("rgb")?function(e){let[t,r,n,i]=e.replace(/[^0-9,.]/g,"").split(",").map(Number);return{r:t,g:r,b:n,a:i||1}}(e):{r:0,g:0,b:0,a:1}}function R(e,t){if("string"!=typeof e||t>1||t<0)return"rgba(0, 0, 0, 1)";if(e.startsWith("var(--"))return e;let{r,g:n,b:i}=N(e);return`rgba(${r}, ${n}, ${i}, ${t})`}var D=r(6768);let O={fontStyles:function(e){return()=>({fontFamily:e.fontFamily||"sans-serif"})},themeColor:S,focusStyles:function(e){return t=>({WebkitTapHighlightColor:"transparent",[t||"&:focus"]:_({},"always"===e.focusRing||"auto"===e.focusRing?e.focusRingStyles.styles(e):e.focusRingStyles.resetStyles(e)),[t?t.replace(":focus",":focus:not(:focus-visible)"):"&:focus:not(:focus-visible)"]:_({},"auto"===e.focusRing||"never"===e.focusRing?e.focusRingStyles.resetStyles(e):null)})},linearGradient:function(e,...t){return`linear-gradient(${e}deg, ${k(t)})`},radialGradient:function(...e){return`radial-gradient(circle, ${k(e)})`},smallerThan:A.I4,largerThan:A.u4,rgba:R,cover:function(e=0){return{position:"absolute",top:(0,D.h)(e),right:(0,D.h)(e),left:(0,D.h)(e),bottom:(0,D.h)(e)}},darken:function(e,t){if("string"==typeof e&&e.startsWith("var(--"))return e;let{r,g:n,b:i,a:s}=N(e),a=1-t,o=e=>Math.round(e*a);return`rgba(${o(r)}, ${o(n)}, ${o(i)}, ${s})`},lighten:function(e,t){if("string"==typeof e&&e.startsWith("var(--"))return e;let{r,g:n,b:i,a:s}=N(e),a=e=>Math.round(e+(255-e)*t);return`rgba(${a(r)}, ${a(n)}, ${a(i)}, ${s})`},radius:function(e){return t=>{if("number"==typeof t)return(0,D.h)(t);let r="number"==typeof e.defaultRadius?e.defaultRadius:e.radius[e.defaultRadius]||e.defaultRadius;return e.radius[t]||t||r}},variant:function(e){let t=S(e),r=T(e),n=C(e);return({variant:i,color:s,gradient:a,primaryFallback:o})=>{let l=function(e,t){if("string"==typeof e&&e.includes(".")){let[r,n]=e.split("."),i=parseInt(n,10);if(r in t.colors&&i>=0&&i<10)return{isSplittedColor:!0,key:r,shade:i}}return{isSplittedColor:!1}}(s,e);switch(i){case"light":return{border:"transparent",background:R(t(s,"dark"===e.colorScheme?8:0,o,!1),"dark"===e.colorScheme?.2:1),color:"dark"===s?"dark"===e.colorScheme?e.colors.dark[0]:e.colors.dark[9]:t(s,"dark"===e.colorScheme?2:r("light")),hover:R(t(s,"dark"===e.colorScheme?7:1,o,!1),"dark"===e.colorScheme?.25:.65)};case"subtle":return{border:"transparent",background:"transparent",color:"dark"===s?"dark"===e.colorScheme?e.colors.dark[0]:e.colors.dark[9]:t(s,"dark"===e.colorScheme?2:r("light")),hover:R(t(s,"dark"===e.colorScheme?8:0,o,!1),"dark"===e.colorScheme?.2:1)};case"outline":return{border:t(s,"dark"===e.colorScheme?5:r("light")),background:"transparent",color:t(s,"dark"===e.colorScheme?5:r("light")),hover:"dark"===e.colorScheme?R(t(s,5,o,!1),.05):R(t(s,0,o,!1),.35)};case"default":return{border:"dark"===e.colorScheme?e.colors.dark[4]:e.colors.gray[4],background:"dark"===e.colorScheme?e.colors.dark[6]:e.white,color:"dark"===e.colorScheme?e.white:e.black,hover:"dark"===e.colorScheme?e.colors.dark[5]:e.colors.gray[0]};case"white":return{border:"transparent",background:e.white,color:t(s,r()),hover:null};case"transparent":return{border:"transparent",color:"dark"===s?"dark"===e.colorScheme?e.colors.dark[0]:e.colors.dark[9]:t(s,"dark"===e.colorScheme?2:r("light")),background:"transparent",hover:null};case"gradient":return{background:n(a),color:e.white,border:"transparent",hover:null};default:{let n=r(),i=l.isSplittedColor?l.shade:n,a=l.isSplittedColor?l.key:s;return{border:"transparent",background:t(a,i,o),color:e.white,hover:t(a,9===i?8:i+1)}}}}},primaryShade:T,hover:function(e){return{"@media (hover: hover)":{"&:hover":e},"@media (hover: none)":{"&:active":e}}},gradient:C,primaryColor:function(e){return t=>{let r=T(e)(t);return e.colors[e.primaryColor][r]}},placeholderStyles:function(e){return()=>({userSelect:"none",color:"dark"===e.colorScheme?e.colors.dark[3]:e.colors.gray[5]})},dimmed:function(e){return()=>"dark"===e.colorScheme?e.colors.dark[2]:e.colors.gray[6]}};var P=Object.defineProperty,x=Object.defineProperties,L=Object.getOwnPropertyDescriptors,M=Object.getOwnPropertySymbols,F=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable,V=(e,t,r)=>t in e?P(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,j=(e,t)=>{for(var r in t||(t={}))F.call(t,r)&&V(e,r,t[r]);if(M)for(var r of M(t))U.call(t,r)&&V(e,r,t[r]);return e},$=(e,t)=>x(e,L(t));function z(e){return $(j({},e),{fn:{fontStyles:O.fontStyles(e),themeColor:O.themeColor(e),focusStyles:O.focusStyles(e),largerThan:O.largerThan(e),smallerThan:O.smallerThan(e),radialGradient:O.radialGradient,linearGradient:O.linearGradient,gradient:O.gradient(e),rgba:O.rgba,cover:O.cover,lighten:O.lighten,darken:O.darken,primaryShade:O.primaryShade(e),radius:O.radius(e),variant:O.variant(e),hover:O.hover,primaryColor:O.primaryColor(e),placeholderStyles:O.placeholderStyles(e),dimmed:O.dimmed(e)}})}Object.keys(y);let B=z({dir:"ltr",primaryShade:{light:6,dark:8},focusRing:"auto",loader:"oval",colorScheme:"light",white:"#fff",black:"#000",defaultRadius:"sm",transitionTimingFunction:"ease",colors:y,lineHeight:1.55,fontFamily:"-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",fontFamilyMonospace:"ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",primaryColor:"blue",respectReducedMotion:!0,cursorType:"default",defaultGradient:{from:"indigo",to:"cyan",deg:45},shadows:{xs:"0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.05), 0 0.0625rem 0.125rem rgba(0, 0, 0, 0.1)",sm:"0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 0.625rem 0.9375rem -0.3125rem, rgba(0, 0, 0, 0.04) 0 0.4375rem 0.4375rem -0.3125rem",md:"0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 1.25rem 1.5625rem -0.3125rem, rgba(0, 0, 0, 0.04) 0 0.625rem 0.625rem -0.3125rem",lg:"0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 1.75rem 1.4375rem -0.4375rem, rgba(0, 0, 0, 0.04) 0 0.75rem 0.75rem -0.4375rem",xl:"0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 2.25rem 1.75rem -0.4375rem, rgba(0, 0, 0, 0.04) 0 1.0625rem 1.0625rem -0.4375rem"},fontSizes:{xs:"0.75rem",sm:"0.875rem",md:"1rem",lg:"1.125rem",xl:"1.25rem"},radius:{xs:"0.125rem",sm:"0.25rem",md:"0.5rem",lg:"1rem",xl:"2rem"},spacing:{xs:"0.625rem",sm:"0.75rem",md:"1rem",lg:"1.25rem",xl:"1.5rem"},breakpoints:{xs:"36em",sm:"48em",md:"62em",lg:"75em",xl:"88em"},headings:{fontFamily:"-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",fontWeight:700,sizes:{h1:{fontSize:"2.125rem",lineHeight:1.3,fontWeight:void 0},h2:{fontSize:"1.625rem",lineHeight:1.35,fontWeight:void 0},h3:{fontSize:"1.375rem",lineHeight:1.4,fontWeight:void 0},h4:{fontSize:"1.125rem",lineHeight:1.45,fontWeight:void 0},h5:{fontSize:"1rem",lineHeight:1.5,fontWeight:void 0},h6:{fontSize:"0.875rem",lineHeight:1.5,fontWeight:void 0}}},other:{},components:{},activeStyles:{transform:"translateY(0.0625rem)"},datesLocale:"en",globalStyles:void 0,focusRingStyles:{styles:e=>({outlineOffset:"0.125rem",outline:`0.125rem solid ${e.colors[e.primaryColor]["dark"===e.colorScheme?7:5]}`}),resetStyles:()=>({outline:"none"}),inputStyles:e=>({outline:"none",borderColor:e.colors[e.primaryColor]["object"==typeof e.primaryShade?e.primaryShade[e.colorScheme]:e.primaryShade]})}});var q=Object.defineProperty,H=Object.defineProperties,G=Object.getOwnPropertyDescriptors,K=Object.getOwnPropertySymbols,W=Object.prototype.hasOwnProperty,Q=Object.prototype.propertyIsEnumerable,X=(e,t,r)=>t in e?q(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,J=(e,t)=>{for(var r in t||(t={}))W.call(t,r)&&X(e,r,t[r]);if(K)for(var r of K(t))Q.call(t,r)&&X(e,r,t[r]);return e},Y=(e,t)=>H(e,G(t));function Z({theme:e}){return i.createElement(g,{styles:{"*, *::before, *::after":{boxSizing:"border-box"},html:{colorScheme:"dark"===e.colorScheme?"dark":"light"},body:Y(J({},e.fn.fontStyles()),{backgroundColor:"dark"===e.colorScheme?e.colors.dark[7]:e.white,color:"dark"===e.colorScheme?e.colors.dark[0]:e.black,lineHeight:e.lineHeight,fontSize:e.fontSizes.md,WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale"})}})}function ee(e,t,r,n=D.h){Object.keys(t).forEach(i=>{e[`--mantine-${r}-${i}`]=n(t[i])})}function et({theme:e}){let t={"--mantine-color-white":e.white,"--mantine-color-black":e.black,"--mantine-transition-timing-function":e.transitionTimingFunction,"--mantine-line-height":`${e.lineHeight}`,"--mantine-font-family":e.fontFamily,"--mantine-font-family-monospace":e.fontFamilyMonospace,"--mantine-font-family-headings":e.headings.fontFamily,"--mantine-heading-font-weight":`${e.headings.fontWeight}`};ee(t,e.shadows,"shadow"),ee(t,e.fontSizes,"font-size"),ee(t,e.radius,"radius"),ee(t,e.spacing,"spacing"),ee(t,e.breakpoints,"breakpoints",D.em),Object.keys(e.colors).forEach(r=>{e.colors[r].forEach((e,n)=>{t[`--mantine-color-${r}-${n}`]=e})});let r=e.headings.sizes;return Object.keys(r).forEach(e=>{t[`--mantine-${e}-font-size`]=r[e].fontSize,t[`--mantine-${e}-line-height`]=`${r[e].lineHeight}`}),i.createElement(g,{styles:{":root":t}})}var er=Object.defineProperty,en=Object.defineProperties,ei=Object.getOwnPropertyDescriptors,es=Object.getOwnPropertySymbols,ea=Object.prototype.hasOwnProperty,eo=Object.prototype.propertyIsEnumerable,el=(e,t,r)=>t in e?er(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,eu=(e,t)=>{for(var r in t||(t={}))ea.call(t,r)&&el(e,r,t[r]);if(es)for(var r of es(t))eo.call(t,r)&&el(e,r,t[r]);return e},ec=(e,t)=>en(e,ei(t)),eh=r(6896);let ed={html:{fontFamily:"sans-serif",lineHeight:"1.15",textSizeAdjust:"100%"},body:{margin:0},"article, aside, footer, header, nav, section, figcaption, figure, main":{display:"block"},h1:{fontSize:"2em"},hr:{boxSizing:"content-box",height:0,overflow:"visible"},pre:{fontFamily:"monospace, monospace",fontSize:"1em"},a:{background:"transparent",textDecorationSkip:"objects"},"a:active, a:hover":{outlineWidth:0},"abbr[title]":{borderBottom:"none",textDecoration:"underline"},"b, strong":{fontWeight:"bolder"},"code, kbp, samp":{fontFamily:"monospace, monospace",fontSize:"1em"},dfn:{fontStyle:"italic"},mark:{backgroundColor:"#ff0",color:"#000"},small:{fontSize:"80%"},"sub, sup":{fontSize:"75%",lineHeight:0,position:"relative",verticalAlign:"baseline"},sup:{top:"-0.5em"},sub:{bottom:"-0.25em"},"audio, video":{display:"inline-block"},"audio:not([controls])":{display:"none",height:0},img:{borderStyle:"none",verticalAlign:"middle"},"svg:not(:root)":{overflow:"hidden"},"button, input, optgroup, select, textarea":{fontFamily:"sans-serif",fontSize:"100%",lineHeight:"1.15",margin:0},"button, input":{overflow:"visible"},"button, select":{textTransform:"none"},"button, [type=reset], [type=submit]":{WebkitAppearance:"button"},"button::-moz-focus-inner, [type=button]::-moz-focus-inner, [type=reset]::-moz-focus-inner, [type=submit]::-moz-focus-inner":{borderStyle:"none",padding:0},"button:-moz-focusring, [type=button]:-moz-focusring, [type=reset]:-moz-focusring, [type=submit]:-moz-focusring":{outline:`${(0,D.h)(1)} dotted ButtonText`},legend:{boxSizing:"border-box",color:"inherit",display:"table",maxWidth:"100%",padding:0,whiteSpace:"normal"},progress:{display:"inline-block",verticalAlign:"baseline"},textarea:{overflow:"auto"},"[type=checkbox], [type=radio]":{boxSizing:"border-box",padding:0},"[type=number]::-webkit-inner-spin-button, [type=number]::-webkit-outer-spin-button":{height:"auto"},"[type=search]":{appearance:"none"},"[type=search]::-webkit-search-cancel-button, [type=search]::-webkit-search-decoration":{appearance:"none"},"::-webkit-file-upload-button":{appearance:"button",font:"inherit"},"details, menu":{display:"block"},summary:{display:"list-item"},canvas:{display:"inline-block"},template:{display:"none"}};function ef(){return i.createElement(g,{styles:ed})}var ep=Object.defineProperty,em=Object.getOwnPropertySymbols,eg=Object.prototype.hasOwnProperty,ey=Object.prototype.propertyIsEnumerable,ev=(e,t,r)=>t in e?ep(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,ew=(e,t)=>{for(var r in t||(t={}))eg.call(t,r)&&ev(e,r,t[r]);if(em)for(var r of em(t))ey.call(t,r)&&ev(e,r,t[r]);return e};let eb=(0,i.createContext)({theme:B});function eE(){var e;return(null==(e=(0,i.useContext)(eb))?void 0:e.theme)||B}function eI(e){let t=eE(),r=e=>{var r,n,i,s;return{styles:(null==(r=t.components[e])?void 0:r.styles)||{},classNames:(null==(n=t.components[e])?void 0:n.classNames)||{},variants:null==(i=t.components[e])?void 0:i.variants,sizes:null==(s=t.components[e])?void 0:s.sizes}};return Array.isArray(e)?e.map(r):[r(e)]}function e_(){var e;return null==(e=(0,i.useContext)(eb))?void 0:e.emotionCache}function eT(e,t,r){var n;let i=eE(),s=null==(n=i.components[e])?void 0:n.defaultProps,a="function"==typeof s?s(i):s;return ew(ew(ew({},t),a),(0,eh.L)(r))}function eS({theme:e,emotionCache:t,withNormalizeCSS:r=!1,withGlobalStyles:n=!1,withCSSVariables:s=!1,inherit:a=!1,children:o}){let l=(0,i.useContext)(eb),u=z(function(e,t){var r;if(!t)return e;let n=Object.keys(e).reduce((r,n)=>{if("headings"===n&&t.headings){let n=t.headings.sizes?Object.keys(e.headings.sizes).reduce((r,n)=>(r[n]=eu(eu({},e.headings.sizes[n]),t.headings.sizes[n]),r),{}):e.headings.sizes;return ec(eu({},r),{headings:ec(eu(eu({},e.headings),t.headings),{sizes:n})})}if("breakpoints"===n&&t.breakpoints){let n=eu(eu({},e.breakpoints),t.breakpoints);return ec(eu({},r),{breakpoints:Object.fromEntries(Object.entries(n).sort((e,t)=>(0,A.oI)(e[1])-(0,A.oI)(t[1])))})}return r[n]="object"==typeof t[n]?eu(eu({},e[n]),t[n]):"number"==typeof t[n]||"boolean"==typeof t[n]||"function"==typeof t[n]?t[n]:t[n]||e[n],r},{});if((null==t?void 0:t.fontFamily)&&!(null==(r=null==t?void 0:t.headings)?void 0:r.fontFamily)&&(n.headings.fontFamily=t.fontFamily),!(n.primaryColor in n.colors))throw Error("MantineProvider: Invalid theme.primaryColor, it accepts only key of theme.colors, learn more – https://mantine.dev/theming/colors/#primary-color");return n}(B,a?ew(ew({},l.theme),e):e));return i.createElement(p,{theme:u},i.createElement(eb.Provider,{value:{theme:u,emotionCache:t}},r&&i.createElement(ef,null),n&&i.createElement(Z,{theme:u}),s&&i.createElement(et,{theme:u}),"function"==typeof u.globalStyles&&i.createElement(g,{styles:u.globalStyles(u)}),o))}eS.displayName="@mantine/core/MantineProvider"},58:function(e,t,r){"use strict";r.d(t,{I4:function(){return o},oI:function(){return s},u4:function(){return a}});var n=r(6768),i=r(4258);function s(e){return"number"==typeof e?e:"string"==typeof e&&e.includes("rem")?16*Number(e.replace("rem","")):"string"==typeof e&&e.includes("em")?16*Number(e.replace("em","")):Number(e)}function a(e){return t=>`@media (min-width: ${(0,n.em)(s((0,i.a)({size:t,sizes:e.breakpoints})))})`}function o(e){return t=>`@media (max-width: ${(0,n.em)(s((0,i.a)({size:t,sizes:e.breakpoints}))-1)})`}},6896:function(e,t,r){"use strict";function n(e){return Object.keys(e).reduce((t,r)=>(void 0!==e[r]&&(t[r]=e[r]),t),{})}r.d(t,{L:function(){return n}})},4258:function(e,t,r){"use strict";r.d(t,{a:function(){return i}});var n=r(6768);function i({size:e,sizes:t,units:r}){return e in t?t[e]:"number"==typeof e?"em"===r?(0,n.em)(e):(0,n.h)(e):e||t.md}},6768:function(e,t,r){"use strict";function n(e){return t=>{if("number"==typeof t)return`${t/16}${e}`;if("string"==typeof t){let r=t.replace("px","");if(!Number.isNaN(Number(r)))return`${Number(r)/16}${e}`}return t}}r.d(t,{em:function(){return s},h:function(){return i}});let i=n("rem"),s=n("em")},8679:function(e,t,r){"use strict";var n=r(9864),i={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},s={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},o={};function l(e){return n.isMemo(e)?a:o[e.$$typeof]||i}o[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},o[n.Memo]=a;var u=Object.defineProperty,c=Object.getOwnPropertyNames,h=Object.getOwnPropertySymbols,d=Object.getOwnPropertyDescriptor,f=Object.getPrototypeOf,p=Object.prototype;e.exports=function e(t,r,n){if("string"!=typeof r){if(p){var i=f(r);i&&i!==p&&e(t,i,n)}var a=c(r);h&&(a=a.concat(h(r)));for(var o=l(t),m=l(r),g=0;g<a.length;++g){var y=a[g];if(!s[y]&&!(n&&n[y])&&!(m&&m[y])&&!(o&&o[y])){var v=d(r,y);try{u(t,y,v)}catch(e){}}}}return t}},3454:function(e,t,r){"use strict";var n,i;e.exports=(null==(n=r.g.process)?void 0:n.env)&&"object"==typeof(null==(i=r.g.process)?void 0:i.env)?r.g.process:r(7663)},6840:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(9212)}])},3936:function(e,t,r){"use strict";r.d(t,{H:function(){return o}});var n=r(5893),i=r(9449),s=r(7294);let a=(0,s.createContext)({loading:!0,user:null,loginGoogle:async()=>null,logout:async()=>{},updateUser:async()=>{}});function o(e){let[t,r]=(0,s.useState)(!0),[o,l]=(0,s.useState)(null);async function u(e){if(o&&o.email!==e.email)return h();o&&e&&o.email===e.email&&(await i.Z.user.save(e),l(e))}async function c(){let e=await i.Z.user.loginGoogle();return l(e),e}async function h(){await i.Z.user.logout(),l(null)}return(0,s.useEffect)(()=>{let e=i.Z.user.authMonitoring(e=>{l(e),r(!1)});return()=>e()},[]),(0,n.jsx)(a.Provider,{value:{loading:t,user:o,loginGoogle:c,logout:h,updateUser:u},children:e.children})}t.Z=a},9449:function(e,t,r){"use strict";let n,i;r.d(t,{Z:function(){return dM}});var s,a,o,l,u,c,h,d,f=r(3454);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let p=function(e){let t=[],r=0;for(let n=0;n<e.length;n++){let i=e.charCodeAt(n);i<128?t[r++]=i:i<2048?(t[r++]=i>>6|192,t[r++]=63&i|128):(64512&i)==55296&&n+1<e.length&&(64512&e.charCodeAt(n+1))==56320?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++n)),t[r++]=i>>18|240,t[r++]=i>>12&63|128,t[r++]=i>>6&63|128,t[r++]=63&i|128):(t[r++]=i>>12|224,t[r++]=i>>6&63|128,t[r++]=63&i|128)}return t},m=function(e){let t=[],r=0,n=0;for(;r<e.length;){let i=e[r++];if(i<128)t[n++]=String.fromCharCode(i);else if(i>191&&i<224){let s=e[r++];t[n++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){let s=e[r++],a=e[r++],o=e[r++],l=((7&i)<<18|(63&s)<<12|(63&a)<<6|63&o)-65536;t[n++]=String.fromCharCode(55296+(l>>10)),t[n++]=String.fromCharCode(56320+(1023&l))}else{let s=e[r++],a=e[r++];t[n++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&a)}}return t.join("")},g={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();let r=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let t=0;t<e.length;t+=3){let i=e[t],s=t+1<e.length,a=s?e[t+1]:0,o=t+2<e.length,l=o?e[t+2]:0,u=i>>2,c=(3&i)<<4|a>>4,h=(15&a)<<2|l>>6,d=63&l;o||(d=64,s||(h=64)),n.push(r[u],r[c],r[h],r[d])}return n.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(p(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):m(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();let r=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let t=0;t<e.length;){let i=r[e.charAt(t++)],s=t<e.length,a=s?r[e.charAt(t)]:0;++t;let o=t<e.length,l=o?r[e.charAt(t)]:64;++t;let u=t<e.length,c=u?r[e.charAt(t)]:64;if(++t,null==i||null==a||null==l||null==c)throw new y;let h=i<<2|a>>4;if(n.push(h),64!==l){let e=a<<4&240|l>>2;if(n.push(e),64!==c){let e=l<<6&192|c;n.push(e)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class y extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}let v=function(e){let t=p(e);return g.encodeByteArray(t,!0)},w=function(e){return v(e).replace(/\./g,"")},b=function(e){try{return g.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null},E=()=>/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==r.g)return r.g;throw Error("Unable to locate global object.")})().__FIREBASE_DEFAULTS__,I=()=>{if(void 0===f||void 0===f.env)return;let e=f.env.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},_=()=>{let e;if("undefined"==typeof document)return;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}let t=e&&b(e[1]);return t&&JSON.parse(t)},T=()=>{try{return E()||I()||_()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},S=e=>{var t,r;return null===(r=null===(t=T())||void 0===t?void 0:t.emulatorHosts)||void 0===r?void 0:r[e]},k=e=>{let t=S(e);if(!t)return;let r=t.lastIndexOf(":");if(r<=0||r+1===t.length)throw Error(`Invalid host ${t} with no separate hostname and port!`);let n=parseInt(t.substring(r+1),10);return"["===t[0]?[t.substring(1,r-1),n]:[t.substring(0,r),n]},C=()=>{var e;return null===(e=T())||void 0===e?void 0:e.config},A=e=>{var t;return null===(t=T())||void 0===t?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}class D extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name="FirebaseError",Object.setPrototypeOf(this,D.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,O.prototype.create)}}class O{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){let r=t[0]||{},n=`${this.service}/${e}`,i=this.errors[e],s=i?i.replace(P,(e,t)=>{let n=r[t];return null!=n?String(n):`<${t}?>`}):"Error",a=`${this.serviceName}: ${s} (${n}).`,o=new D(n,a,r);return o}}let P=/\{\$([^}]+)}/g;function x(e,t){if(e===t)return!0;let r=Object.keys(e),n=Object.keys(t);for(let i of r){if(!n.includes(i))return!1;let r=e[i],s=t[i];if(L(r)&&L(s)){if(!x(r,s))return!1}else if(r!==s)return!1}for(let e of n)if(!r.includes(e))return!1;return!0}function L(e){return null!==e&&"object"==typeof e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(e){let t=[];for(let[r,n]of Object.entries(e))Array.isArray(n)?n.forEach(e=>{t.push(encodeURIComponent(r)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(r)+"="+encodeURIComponent(n));return t.length?"&"+t.join("&"):""}function F(e){let t={},r=e.replace(/^\?/,"").split("&");return r.forEach(e=>{if(e){let[r,n]=e.split("=");t[decodeURIComponent(r)]=decodeURIComponent(n)}}),t}function U(e){let t=e.indexOf("?");if(!t)return"";let r=e.indexOf("#",t);return e.substring(t,r>0?r:void 0)}class V{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let n;if(void 0===e&&void 0===t&&void 0===r)throw Error("Missing Observer.");void 0===(n=!function(e,t){if("object"!=typeof e||null===e)return!1;for(let r of t)if(r in e&&"function"==typeof e[r])return!0;return!1}(e,["next","error","complete"])?{next:e,error:t,complete:r}:e).next&&(n.next=j),void 0===n.error&&(n.error=j),void 0===n.complete&&(n.complete=j);let i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?n.error(this.finalError):n.complete()}catch(e){}}),this.observers.push(n),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function j(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(e){return e&&e._delegate?e._delegate:e}class z{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let B="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let e=new N;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{let r=this.getOrInitializeService({instanceIdentifier:t});r&&e.resolve(r)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;let r=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),n=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(e){if(n)return null;throw e}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if("EAGER"===e.instantiationMode)try{this.getOrInitializeService({instanceIdentifier:B})}catch(e){}for(let[e,t]of this.instancesDeferred.entries()){let r=this.normalizeInstanceIdentifier(e);try{let e=this.getOrInitializeService({instanceIdentifier:r});t.resolve(e)}catch(e){}}}}clearInstance(e=B){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=B){return this.instances.has(e)}getOptions(e=B){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let n=this.getOrInitializeService({instanceIdentifier:r,options:t});for(let[e,t]of this.instancesDeferred.entries()){let i=this.normalizeInstanceIdentifier(e);r===i&&t.resolve(n)}return n}onInit(e,t){var r;let n=this.normalizeInstanceIdentifier(t),i=null!==(r=this.onInitCallbacks.get(n))&&void 0!==r?r:new Set;i.add(e),this.onInitCallbacks.set(n,i);let s=this.instances.get(n);return s&&e(s,n),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){let r=this.onInitCallbacks.get(t);if(r)for(let n of r)try{n(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:e===B?void 0:e,options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch(e){}return r||null}normalizeInstanceIdentifier(e=B){return this.component?this.component.multipleInstances?e:B:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){let t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new q(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let G=[];(eU=eV||(eV={}))[eU.DEBUG=0]="DEBUG",eU[eU.VERBOSE=1]="VERBOSE",eU[eU.INFO=2]="INFO",eU[eU.WARN=3]="WARN",eU[eU.ERROR=4]="ERROR",eU[eU.SILENT=5]="SILENT";let K={debug:eV.DEBUG,verbose:eV.VERBOSE,info:eV.INFO,warn:eV.WARN,error:eV.ERROR,silent:eV.SILENT},W=eV.INFO,Q={[eV.DEBUG]:"log",[eV.VERBOSE]:"log",[eV.INFO]:"info",[eV.WARN]:"warn",[eV.ERROR]:"error"},X=(e,t,...r)=>{if(t<e.logLevel)return;let n=new Date().toISOString(),i=Q[t];if(i)console[i](`[${n}]  ${e.name}:`,...r);else throw Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class J{constructor(e){this.name=e,this._logLevel=W,this._logHandler=X,this._userLogHandler=null,G.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in eV))throw TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?K[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,eV.DEBUG,...e),this._logHandler(this,eV.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,eV.VERBOSE,...e),this._logHandler(this,eV.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,eV.INFO,...e),this._logHandler(this,eV.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,eV.WARN,...e),this._logHandler(this,eV.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,eV.ERROR,...e),this._logHandler(this,eV.ERROR,...e)}}let Y=(e,t)=>t.some(t=>e instanceof t),Z=new WeakMap,ee=new WeakMap,et=new WeakMap,er=new WeakMap,en=new WeakMap,ei={get(e,t,r){if(e instanceof IDBTransaction){if("done"===t)return ee.get(e);if("objectStoreNames"===t)return e.objectStoreNames||et.get(e);if("store"===t)return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return es(e[t])},set:(e,t,r)=>(e[t]=r,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function es(e){var t;if(e instanceof IDBRequest)return function(e){let t=new Promise((t,r)=>{let n=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(es(e.result)),n()},s=()=>{r(e.error),n()};e.addEventListener("success",i),e.addEventListener("error",s)});return t.then(t=>{t instanceof IDBCursor&&Z.set(t,e)}).catch(()=>{}),en.set(t,e),t}(e);if(er.has(e))return er.get(e);let r="function"==typeof(t=e)?t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(i||(i=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(ea(this),e),es(Z.get(this))}:function(...e){return es(t.apply(ea(this),e))}:function(e,...r){let n=t.call(ea(this),e,...r);return et.set(n,e.sort?e.sort():[e]),es(n)}:(t instanceof IDBTransaction&&function(e){if(ee.has(e))return;let t=new Promise((t,r)=>{let n=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),n()},s=()=>{r(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)});ee.set(e,t)}(t),Y(t,n||(n=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])))?new Proxy(t,ei):t;return r!==e&&(er.set(e,r),en.set(r,e)),r}let ea=e=>en.get(e),eo=["get","getKey","getAll","getAllKeys","count"],el=["put","add","delete","clear"],eu=new Map;function ec(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t))return;if(eu.get(t))return eu.get(t);let r=t.replace(/FromIndex$/,""),n=t!==r,i=el.includes(r);if(!(r in(n?IDBIndex:IDBObjectStore).prototype)||!(i||eo.includes(r)))return;let s=async function(e,...t){let s=this.transaction(e,i?"readwrite":"readonly"),a=s.store;return n&&(a=a.index(t.shift())),(await Promise.all([a[r](...t),i&&s.done]))[0]};return eu.set(t,s),s}ei={...eF=ei,get:(e,t,r)=>ec(e,t)||eF.get(e,t,r),has:(e,t)=>!!ec(e,t)||eF.has(e,t)};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(e){this.container=e}getPlatformInfoString(){let e=this.container.getProviders();return e.map(e=>{if(!function(e){let t=e.getComponent();return(null==t?void 0:t.type)==="VERSION"}(e))return null;{let t=e.getImmediate();return`${t.library}/${t.version}`}}).filter(e=>e).join(" ")}}let ed="@firebase/app",ef="0.9.9",ep=new J("@firebase/app"),em="[DEFAULT]",eg={[ed]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},ey=new Map,ev=new Map;function ew(e){let t=e.name;if(ev.has(t))return ep.debug(`There were multiple attempts to register component ${t}.`),!1;for(let r of(ev.set(t,e),ey.values()))!function(e,t){try{e.container.addComponent(t)}catch(r){ep.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,r)}}(r,e);return!0}function eb(e,t){let r=e.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),e.container.getProvider(t)}let eE=new O("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eI{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new z("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw eE.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let e_="9.21.0";function eT(e,t={}){let r=e;if("object"!=typeof t){let e=t;t={name:e}}let n=Object.assign({name:em,automaticDataCollectionEnabled:!1},t),i=n.name;if("string"!=typeof i||!i)throw eE.create("bad-app-name",{appName:String(i)});if(r||(r=C()),!r)throw eE.create("no-options");let s=ey.get(i);if(s){if(x(r,s.options)&&x(n,s.config))return s;throw eE.create("duplicate-app",{appName:i})}let a=new H(i);for(let e of ev.values())a.addComponent(e);let o=new eI(r,n,a);return ey.set(i,o),o}function eS(e=em){let t=ey.get(e);if(!t&&e===em)return eT();if(!t)throw eE.create("no-app",{appName:e});return t}function ek(e,t,r){var n;let i=null!==(n=eg[e])&&void 0!==n?n:e;r&&(i+=`-${r}`);let s=i.match(/\s|\//),a=t.match(/\s|\//);if(s||a){let e=[`Unable to register library "${i}" with version "${t}":`];s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),ep.warn(e.join(" "));return}ew(new z(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}let eC="firebase-heartbeat-store",eA=null;function eN(){return eA||(eA=(function(e,t,{blocked:r,upgrade:n,blocking:i,terminated:s}={}){let a=indexedDB.open(e,1),o=es(a);return n&&a.addEventListener("upgradeneeded",e=>{n(es(a.result),e.oldVersion,e.newVersion,es(a.transaction),e)}),r&&a.addEventListener("blocked",e=>r(e.oldVersion,e.newVersion,e)),o.then(e=>{s&&e.addEventListener("close",()=>s()),i&&e.addEventListener("versionchange",e=>i(e.oldVersion,e.newVersion,e))}).catch(()=>{}),o})("firebase-heartbeat-database",0,{upgrade:(e,t)=>{0===t&&e.createObjectStore(eC)}}).catch(e=>{throw eE.create("idb-open",{originalErrorMessage:e.message})})),eA}async function eR(e){try{let t=await eN();return t.transaction(eC).objectStore(eC).get(eO(e))}catch(e){if(e instanceof D)ep.warn(e.message);else{let t=eE.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});ep.warn(t.message)}}}async function eD(e,t){try{let r=await eN(),n=r.transaction(eC,"readwrite"),i=n.objectStore(eC);return await i.put(t,eO(e)),n.done}catch(e){if(e instanceof D)ep.warn(e.message);else{let t=eE.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});ep.warn(t.message)}}}function eO(e){return`${e.name}!${e.options.appId}`}class eP{constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new eL(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){let e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),r=ex();return(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(e=>e.date===r))?void 0:(this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{let t=new Date(e.date).valueOf(),r=Date.now();return r-t<=2592e6}),this._storage.overwrite(this._heartbeatsCache))}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";let e=ex(),{heartbeatsToSend:t,unsentEntries:r}=function(e,t=1024){let r=[],n=e.slice();for(let i of e){let e=r.find(e=>e.agent===i.agent);if(e){if(e.dates.push(i.date),eM(r)>t){e.dates.pop();break}}else if(r.push({agent:i.agent,dates:[i.date]}),eM(r)>t){r.pop();break}n=n.slice(1)}return{heartbeatsToSend:r,unsentEntries:n}}(this._heartbeatsCache.heartbeats),n=w(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),n}}function ex(){let e=new Date;return e.toISOString().substring(0,10)}class eL{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!function(){try{return"object"==typeof indexedDB}catch(e){return!1}}()&&new Promise((e,t)=>{try{let r=!0,n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=()=>{i.result.close(),r||self.indexedDB.deleteDatabase(n),e(!0)},i.onupgradeneeded=()=>{r=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}).then(()=>!0).catch(()=>!1)}async read(){let e=await this._canUseIndexedDBPromise;if(!e)return{heartbeats:[]};{let e=await eR(this.app);return e||{heartbeats:[]}}}async overwrite(e){var t;let r=await this._canUseIndexedDBPromise;if(r){let r=await this.read();return eD(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;let r=await this._canUseIndexedDBPromise;if(r){let r=await this.read();return eD(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}}}function eM(e){return w(JSON.stringify({version:2,heartbeats:e})).length}ew(new z("platform-logger",e=>new eh(e),"PRIVATE")),ew(new z("heartbeat",e=>new eP(e),"PRIVATE")),ek(ed,ef,""),ek(ed,ef,"esm2017"),ek("fire-js","");var eF,eU,eV,ej,e$="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},ez={},eB=eB||{},eq=e$||self;function eH(){}function eG(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function eK(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function eW(e,t,r){return e.call.apply(e.bind,arguments)}function eQ(e,t,r){if(!e)throw Error();if(2<arguments.length){var n=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,n),e.apply(t,r)}}return function(){return e.apply(t,arguments)}}function eX(e,t,r){return(eX=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?eW:eQ).apply(null,arguments)}function eJ(e,t){var r=Array.prototype.slice.call(arguments,1);return function(){var t=r.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function eY(e,t){function r(){}r.prototype=t.prototype,e.$=t.prototype,e.prototype=new r,e.prototype.constructor=e,e.ac=function(e,r,n){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[r].apply(e,i)}}function eZ(){this.s=this.s,this.o=this.o}eZ.prototype.s=!1,eZ.prototype.ra=function(){this.s||(this.s=!0,this.N())},eZ.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};let e0=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"==typeof e)return"string"!=typeof t||1!=t.length?-1:e.indexOf(t,0);for(let r=0;r<e.length;r++)if(r in e&&e[r]===t)return r;return -1};function e1(e){let t=e.length;if(0<t){let r=Array(t);for(let n=0;n<t;n++)r[n]=e[n];return r}return[]}function e2(e,t){for(let t=1;t<arguments.length;t++){let r=arguments[t];if(eG(r)){let t=e.length||0,n=r.length||0;e.length=t+n;for(let i=0;i<n;i++)e[t+i]=r[i]}else e.push(r)}}function e9(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}e9.prototype.h=function(){this.defaultPrevented=!0};var e4=function(){if(!eq.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{eq.addEventListener("test",eH,t),eq.removeEventListener("test",eH,t)}catch(e){}return e}();function e5(e){return/^[\s\xa0]*$/.test(e)}var e6=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function e3(e,t){return e<t?-1:e>t?1:0}function e7(){var e=eq.navigator;return e&&(e=e.userAgent)?e:""}function e8(e){return -1!=e7().indexOf(e)}function te(e){return te[" "](e),e}function tt(e,t,r){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:e[t]=r(t)}te[" "]=eH;var tr=e8("Opera"),tn=e8("Trident")||e8("MSIE"),ti=e8("Edge"),ts=ti||tn,ta=e8("Gecko")&&!(-1!=e7().toLowerCase().indexOf("webkit")&&!e8("Edge"))&&!(e8("Trident")||e8("MSIE"))&&!e8("Edge"),to=-1!=e7().toLowerCase().indexOf("webkit")&&!e8("Edge");function tl(){var e=eq.document;return e?e.documentMode:void 0}e:{var tu,tc="",th=(tu=e7(),ta?/rv:([^\);]+)(\)|;)/.exec(tu):ti?/Edge\/([\d\.]+)/.exec(tu):tn?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(tu):to?/WebKit\/(\S+)/.exec(tu):tr?/(?:Version)[ \/]?(\S+)/.exec(tu):void 0);if(th&&(tc=th?th[1]:""),tn){var td=tl();if(null!=td&&td>parseFloat(tc)){o=String(td);break e}}o=tc}var tf={},tp=eq.document&&tn&&(tl()||parseInt(o,10))||void 0;function tm(e,t){if(e9.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var r=this.type=e.type,n=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(ta){e:{try{te(t.nodeName);var i=!0;break e}catch(e){}i=!1}i||(t=null)}}else"mouseover"==r?t=e.fromElement:"mouseout"==r&&(t=e.toElement);this.relatedTarget=t,n?(this.clientX=void 0!==n.clientX?n.clientX:n.pageX,this.clientY=void 0!==n.clientY?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:tg[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&tm.$.h.call(this)}}eY(tm,e9);var tg={2:"touch",3:"pen",4:"mouse"};tm.prototype.h=function(){tm.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var ty="closure_listenable_"+(1e6*Math.random()|0),tv=0;function tw(e,t,r,n,i){this.listener=e,this.proxy=null,this.src=t,this.type=r,this.capture=!!n,this.la=i,this.key=++tv,this.fa=this.ia=!1}function tb(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function tE(e,t,r){for(let n in e)t.call(r,e[n],n,e)}function tI(e){let t={};for(let r in e)t[r]=e[r];return t}let t_="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function tT(e,t){let r,n;for(let t=1;t<arguments.length;t++){for(r in n=arguments[t])e[r]=n[r];for(let t=0;t<t_.length;t++)r=t_[t],Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}}function tS(e){this.src=e,this.g={},this.h=0}function tk(e,t){var r=t.type;if(r in e.g){var n,i=e.g[r],s=e0(i,t);(n=0<=s)&&Array.prototype.splice.call(i,s,1),n&&(tb(t),0==e.g[r].length&&(delete e.g[r],e.h--))}}function tC(e,t,r,n){for(var i=0;i<e.length;++i){var s=e[i];if(!s.fa&&s.listener==t&&!!r==s.capture&&s.la==n)return i}return -1}tS.prototype.add=function(e,t,r,n,i){var s=e.toString();(e=this.g[s])||(e=this.g[s]=[],this.h++);var a=tC(e,t,n,i);return -1<a?(t=e[a],r||(t.ia=!1)):((t=new tw(t,this.src,s,!!n,i)).ia=r,e.push(t)),t};var tA="closure_lm_"+(1e6*Math.random()|0),tN={};function tR(e,t,r,n,i,s){if(!t)throw Error("Invalid event type");var a=eK(i)?!!i.capture:!!i,o=tx(e);if(o||(e[tA]=o=new tS(e)),(r=o.add(t,r,n,a,s)).proxy)return r;if(n=function e(t){return tP.call(e.src,e.listener,t)},r.proxy=n,n.src=e,n.listener=r,e.addEventListener)e4||(i=a),void 0===i&&(i=!1),e.addEventListener(t.toString(),n,i);else if(e.attachEvent)e.attachEvent(tO(t.toString()),n);else if(e.addListener&&e.removeListener)e.addListener(n);else throw Error("addEventListener and attachEvent are unavailable.");return r}function tD(e){if("number"!=typeof e&&e&&!e.fa){var t=e.src;if(t&&t[ty])tk(t.i,e);else{var r=e.type,n=e.proxy;t.removeEventListener?t.removeEventListener(r,n,e.capture):t.detachEvent?t.detachEvent(tO(r),n):t.addListener&&t.removeListener&&t.removeListener(n),(r=tx(t))?(tk(r,e),0==r.h&&(r.src=null,t[tA]=null)):tb(e)}}}function tO(e){return e in tN?tN[e]:tN[e]="on"+e}function tP(e,t){if(e.fa)e=!0;else{t=new tm(t,this);var r=e.listener,n=e.la||e.src;e.ia&&tD(e),e=r.call(n,t)}return e}function tx(e){return(e=e[tA])instanceof tS?e:null}var tL="__closure_events_fn_"+(1e9*Math.random()>>>0);function tM(e){return"function"==typeof e?e:(e[tL]||(e[tL]=function(t){return e.handleEvent(t)}),e[tL])}function tF(){eZ.call(this),this.i=new tS(this),this.S=this,this.J=null}function tU(e,t){var r,n=e.J;if(n)for(r=[];n;n=n.J)r.push(n);if(e=e.S,n=t.type||t,"string"==typeof t)t=new e9(t,e);else if(t instanceof e9)t.target=t.target||e;else{var i=t;tT(t=new e9(n,e),i)}if(i=!0,r)for(var s=r.length-1;0<=s;s--){var a=t.g=r[s];i=tV(a,n,!0,t)&&i}if(i=tV(a=t.g=e,n,!0,t)&&i,i=tV(a,n,!1,t)&&i,r)for(s=0;s<r.length;s++)i=tV(a=t.g=r[s],n,!1,t)&&i}function tV(e,t,r,n){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var a=t[s];if(a&&!a.fa&&a.capture==r){var o=a.listener,l=a.la||a.src;a.ia&&tk(e.i,a),i=!1!==o.call(l,n)&&i}}return i&&!n.defaultPrevented}eY(tF,eZ),tF.prototype[ty]=!0,tF.prototype.removeEventListener=function(e,t,r,n){!function e(t,r,n,i,s){if(Array.isArray(r))for(var a=0;a<r.length;a++)e(t,r[a],n,i,s);else(i=eK(i)?!!i.capture:!!i,n=tM(n),t&&t[ty])?(t=t.i,(r=String(r).toString())in t.g&&-1<(n=tC(a=t.g[r],n,i,s))&&(tb(a[n]),Array.prototype.splice.call(a,n,1),0==a.length&&(delete t.g[r],t.h--))):t&&(t=tx(t))&&(r=t.g[r.toString()],t=-1,r&&(t=tC(r,n,i,s)),(n=-1<t?r[t]:null)&&tD(n))}(this,e,t,r,n)},tF.prototype.N=function(){if(tF.$.N.call(this),this.i){var e,t=this.i;for(e in t.g){for(var r=t.g[e],n=0;n<r.length;n++)tb(r[n]);delete t.g[e],t.h--}}this.J=null},tF.prototype.O=function(e,t,r,n){return this.i.add(String(e),t,!1,r,n)},tF.prototype.P=function(e,t,r,n){return this.i.add(String(e),t,!0,r,n)};var tj=eq.JSON.stringify,t$=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new tz,e=>e.reset());class tz{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function tB(e,t){var r;u||(r=eq.Promise.resolve(void 0),u=function(){r.then(tG)}),tq||(u(),tq=!0),tH.add(e,t)}var tq=!1,tH=new class{constructor(){this.h=this.g=null}add(e,t){let r=t$.get();r.set(e,t),this.h?this.h.next=r:this.g=r,this.h=r}};function tG(){let e;for(;e=null,(t=tH).g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),r=e;){try{r.h.call(r.g)}catch(e){!function(e){eq.setTimeout(()=>{throw e},0)}(e)}var t,r,n=t$;n.j(r),100>n.h&&(n.h++,r.next=n.g,n.g=r)}tq=!1}function tK(e,t){tF.call(this),this.h=e||1,this.g=t||eq,this.j=eX(this.qb,this),this.l=Date.now()}function tW(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}function tQ(e,t,r){if("function"==typeof e)r&&(e=eX(e,r));else if(e&&"function"==typeof e.handleEvent)e=eX(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:eq.setTimeout(e,t||0)}eY(tK,tF),(ej=tK.prototype).ga=!1,ej.T=null,ej.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),tU(this,"tick"),this.ga&&(tW(this),this.start()))}},ej.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},ej.N=function(){tK.$.N.call(this),tW(this),delete this.g};class tX extends eZ{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:function e(t){t.g=tQ(()=>{t.g=null,t.i&&(t.i=!1,e(t))},t.j);let r=t.h;t.h=null,t.m.apply(null,r)}(this)}N(){super.N(),this.g&&(eq.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function tJ(e){eZ.call(this),this.h=e,this.g={}}eY(tJ,eZ);var tY=[];function tZ(e,t,r,n){Array.isArray(r)||(r&&(tY[0]=r.toString()),r=tY);for(var i=0;i<r.length;i++){var s=function e(t,r,n,i,s){if(i&&i.once)return function e(t,r,n,i,s){if(Array.isArray(r)){for(var a=0;a<r.length;a++)e(t,r[a],n,i,s);return null}return n=tM(n),t&&t[ty]?t.P(r,n,eK(i)?!!i.capture:!!i,s):tR(t,r,n,!0,i,s)}(t,r,n,i,s);if(Array.isArray(r)){for(var a=0;a<r.length;a++)e(t,r[a],n,i,s);return null}return n=tM(n),t&&t[ty]?t.O(r,n,eK(i)?!!i.capture:!!i,s):tR(t,r,n,!1,i,s)}(t,r[i],n||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function t0(e){tE(e.g,function(e,t){this.g.hasOwnProperty(t)&&tD(e)},e),e.g={}}function t1(){this.g=!0}function t2(e,t,r,n){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var r=JSON.parse(t);if(r){for(e=0;e<r.length;e++)if(Array.isArray(r[e])){var n=r[e];if(!(2>n.length)){var i=n[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var a=1;a<i.length;a++)i[a]=""}}}}return tj(r)}catch(e){return t}}(e,r)+(n?" "+n:"")})}tJ.prototype.N=function(){tJ.$.N.call(this),t0(this)},tJ.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},t1.prototype.Ea=function(){this.g=!1},t1.prototype.info=function(){};var t9={},t4=null;function t5(){return t4=t4||new tF}function t6(e){e9.call(this,t9.Ta,e)}function t3(e){let t=t5();tU(t,new t6(t))}function t7(e,t){e9.call(this,t9.STAT_EVENT,e),this.stat=t}function t8(e){let t=t5();tU(t,new t7(t,e))}function re(e,t){e9.call(this,t9.Ua,e),this.size=t}function rt(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return eq.setTimeout(function(){e()},t)}t9.Ta="serverreachability",eY(t6,e9),t9.STAT_EVENT="statevent",eY(t7,e9),t9.Ua="timingevent",eY(re,e9);var rr={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},rn={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function ri(){}function rs(e){return e.h||(e.h=e.i())}function ra(){}ri.prototype.h=null;var ro={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function rl(){e9.call(this,"d")}function ru(){e9.call(this,"c")}function rc(){}function rh(e,t,r,n){this.l=e,this.j=t,this.m=r,this.W=n||1,this.U=new tJ(this),this.P=rf,e=ts?125:void 0,this.V=new tK(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.aa=-1,this.J=!1,this.O=0,this.M=null,this.ca=this.K=this.ba=this.S=!1,this.h=new rd}function rd(){this.i=null,this.g="",this.h=!1}eY(rl,e9),eY(ru,e9),eY(rc,ri),rc.prototype.g=function(){return new XMLHttpRequest},rc.prototype.i=function(){return{}},c=new rc;var rf=45e3,rp={},rm={};function rg(e,t,r){e.L=1,e.v=rx(rN(t)),e.s=r,e.S=!0,ry(e,null)}function ry(e,t){e.G=Date.now(),rb(e),e.A=rN(e.v);var r=e.A,n=e.W;Array.isArray(n)||(n=[String(n)]),rK(r.i,"t",n),e.C=0,r=e.l.I,e.h=new rd,e.g=nM(e.l,r?t:null,!e.s),0<e.O&&(e.M=new tX(eX(e.Pa,e,e.g),e.O)),tZ(e.U,e.g,"readystatechange",e.nb),t=e.I?tI(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),t3(),function(e,t,r,n,i,s){e.info(function(){if(e.g){if(s)for(var a="",o=s.split("&"),l=0;l<o.length;l++){var u=o[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");a=2<=h.length&&"type"==h[1]?a+(c+"=")+u+"&":a+(c+"=redacted&")}}else a=null}else a=s;return"XMLHTTP REQ ("+n+") [attempt "+i+"]: "+t+"\n"+r+"\n"+a})}(e.j,e.u,e.A,e.m,e.W,e.s)}function rv(e){return!!e.g&&"GET"==e.u&&2!=e.L&&e.l.Ha}function rw(e,t,r){let n=!0,i;for(;!e.J&&e.C<r.length;)if((i=function(e,t){var r=e.C,n=t.indexOf("\n",r);return -1==n?rm:isNaN(r=Number(t.substring(r,n)))?rp:(n+=1)+r>t.length?rm:(t=t.substr(n,r),e.C=n+r,t)}(e,r))==rm){4==t&&(e.o=4,t8(14),n=!1),t2(e.j,e.m,null,"[Incomplete Response]");break}else if(i==rp){e.o=4,t8(15),t2(e.j,e.m,r,"[Invalid Chunk]"),n=!1;break}else t2(e.j,e.m,i,null),rS(e,i);rv(e)&&i!=rm&&i!=rp&&(e.h.g="",e.C=0),4!=t||0!=r.length||e.h.h||(e.o=1,t8(16),n=!1),e.i=e.i&&n,n?0<r.length&&!e.ca&&(e.ca=!0,(t=e.l).g==e&&t.ca&&!t.L&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+r.length),nA(t),t.L=!0,t8(11))):(t2(e.j,e.m,r,"[Invalid Chunked Response]"),rT(e),r_(e))}function rb(e){e.Y=Date.now()+e.P,rE(e,e.P)}function rE(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=rt(eX(e.lb,e),t)}function rI(e){e.B&&(eq.clearTimeout(e.B),e.B=null)}function r_(e){0==e.l.H||e.J||nD(e.l,e)}function rT(e){rI(e);var t=e.M;t&&"function"==typeof t.ra&&t.ra(),e.M=null,tW(e.V),t0(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.ra())}function rS(e,t){try{var r=e.l;if(0!=r.H&&(r.g==e||r0(r.h,e))){if(!e.K&&r0(r.h,e)&&3==r.H){try{var n=r.Ja.g.parse(t)}catch(e){n=null}if(Array.isArray(n)&&3==n.length){var i=n;if(0==i[0]){e:if(!r.u){if(r.g){if(r.g.G+3e3<e.G)nR(r),nb(r);else break e}nC(r),t8(18)}}else r.Fa=i[1],0<r.Fa-r.V&&37500>i[2]&&r.M&&0==r.A&&!r.v&&(r.v=rt(eX(r.ib,r),6e3));if(1>=rZ(r.h)&&r.na){try{r.na()}catch(e){}r.na=void 0}}else nP(r,11)}else if((e.K||r.g==e)&&nR(r),!e5(t))for(i=r.Ja.g.parse(t),t=0;t<i.length;t++){let o=i[t];if(r.V=o[0],o=o[1],2==r.H){if("c"==o[0]){r.J=o[1],r.oa=o[2];let t=o[3];null!=t&&(r.qa=t,r.j.info("VER="+r.qa));let i=o[4];null!=i&&(r.Ga=i,r.j.info("SVER="+r.Ga));let l=o[5];null!=l&&"number"==typeof l&&0<l&&(n=1.5*l,r.K=n,r.j.info("backChannelRequestTimeoutMs_="+n)),n=r;let u=e.g;if(u){let e=u.g?u.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=n.h;s.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(r1(s,s.h),s.h=null))}if(n.F){let e=u.g?u.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(n.Da=e,rP(n.G,n.F,e))}}if(r.H=3,r.l&&r.l.Ba(),r.ca&&(r.S=Date.now()-e.G,r.j.info("Handshake RTT: "+r.S+"ms")),(n=r).wa=nL(n,n.I?n.oa:null,n.Y),e.K){r2(n.h,e);var a=n.K;a&&e.setTimeout(a),e.B&&(rI(e),rb(e)),n.g=e}else nk(n);0<r.i.length&&nI(r)}else"stop"!=o[0]&&"close"!=o[0]||nP(r,7)}else 3==r.H&&("stop"==o[0]||"close"==o[0]?"stop"==o[0]?nP(r,7):nw(r):"noop"!=o[0]&&r.l&&r.l.Aa(o),r.A=0)}}t3(4)}catch(e){}}function rk(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(eG(e)||"string"==typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var r=function(e){if(e.sa&&"function"==typeof e.sa)return e.sa();if(!e.Z||"function"!=typeof e.Z){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if(eG(e)||"string"==typeof e){var t=[];e=e.length;for(var r=0;r<e;r++)t.push(r);return t}for(let n in t=[],r=0,e)t[r++]=n;return t}}}(e),n=function(e){if(e.Z&&"function"==typeof e.Z)return e.Z();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if(eG(e)){for(var t=[],r=e.length,n=0;n<r;n++)t.push(e[n]);return t}for(n in t=[],r=0,e)t[r++]=e[n];return t}(e),i=n.length,s=0;s<i;s++)t.call(void 0,n[s],r&&r[s],e)}(ej=rh.prototype).setTimeout=function(e){this.P=e},ej.nb=function(e){e=e.target;let t=this.M;t&&3==nf(e)?t.l():this.Pa(e)},ej.Pa=function(e){try{if(e==this.g)e:{let c=nf(this.g);var t=this.g.Ia();let h=this.g.da();if(!(3>c)&&(3!=c||ts||this.g&&(this.h.h||this.g.ja()||np(this.g)))){this.J||4!=c||7==t||(8==t||0>=h?t3(3):t3(2)),rI(this);var r=this.g.da();this.aa=r;t:if(rv(this)){var n=np(this.g);e="";var i=n.length,s=4==nf(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){rT(this),r_(this);var a="";break t}this.h.i=new eq.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(n[t],{stream:s&&t==i-1});n.splice(0,i),this.h.g+=e,this.C=0,a=this.h.g}else a=this.g.ja();if(this.i=200==r,function(e,t,r,n,i,s,a){e.info(function(){return"XMLHTTP RESP ("+n+") [ attempt "+i+"]: "+t+"\n"+r+"\n"+s+" "+a})}(this.j,this.u,this.A,this.m,this.W,c,r),this.i){if(this.ba&&!this.K){t:{if(this.g){var o,l=this.g;if((o=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!e5(o)){var u=o;break t}}u=null}if(r=u)t2(this.j,this.m,r,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,rS(this,r);else{this.i=!1,this.o=3,t8(12),rT(this),r_(this);break e}}this.S?(rw(this,c,a),ts&&this.i&&3==c&&(tZ(this.U,this.V,"tick",this.mb),this.V.start())):(t2(this.j,this.m,a,null),rS(this,a)),4==c&&rT(this),this.i&&!this.J&&(4==c?nD(this.l,this):(this.i=!1,rb(this)))}else 400==r&&0<a.indexOf("Unknown SID")?(this.o=3,t8(12)):(this.o=0,t8(13)),rT(this),r_(this)}}}catch(e){}finally{}},ej.mb=function(){if(this.g){var e=nf(this.g),t=this.g.ja();this.C<t.length&&(rI(this),rw(this,e,t),this.i&&4!=e&&rb(this))}},ej.cancel=function(){this.J=!0,rT(this)},ej.lb=function(){this.B=null;let e=Date.now();0<=e-this.Y?(function(e,t){e.info(function(){return"TIMEOUT: "+t})}(this.j,this.A),2!=this.L&&(t3(),t8(17)),rT(this),this.o=2,r_(this)):rE(this,this.Y-e)};var rC=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function rA(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof rA){this.h=void 0!==t?t:e.h,rR(this,e.j),this.s=e.s,this.g=e.g,rD(this,e.m),this.l=e.l,t=e.i;var r=new rB;r.i=t.i,t.g&&(r.g=new Map(t.g),r.h=t.h),rO(this,r),this.o=e.o}else e&&(r=String(e).match(rC))?(this.h=!!t,rR(this,r[1]||"",!0),this.s=rL(r[2]||""),this.g=rL(r[3]||"",!0),rD(this,r[4]),this.l=rL(r[5]||"",!0),rO(this,r[6]||"",!0),this.o=rL(r[7]||"")):(this.h=!!t,this.i=new rB(null,this.h))}function rN(e){return new rA(e)}function rR(e,t,r){e.j=r?rL(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function rD(e,t){if(t){if(isNaN(t=Number(t))||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function rO(e,t,r){var n,i;t instanceof rB?(e.i=t,n=e.i,(i=e.h)&&!n.j&&(rq(n),n.i=null,n.g.forEach(function(e,t){var r=t.toLowerCase();t!=r&&(rH(this,t),rK(this,r,e))},n)),n.j=i):(r||(t=rM(t,r$)),e.i=new rB(t,e.h))}function rP(e,t,r){e.i.set(t,r)}function rx(e){return rP(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function rL(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function rM(e,t,r){return"string"==typeof e?(e=encodeURI(e).replace(t,rF),r&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function rF(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}rA.prototype.toString=function(){var e=[],t=this.j;t&&e.push(rM(t,rU,!0),":");var r=this.g;return(r||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(rM(t,rU,!0),"@"),e.push(encodeURIComponent(String(r)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(r=this.m)&&e.push(":",String(r))),(r=this.l)&&(this.g&&"/"!=r.charAt(0)&&e.push("/"),e.push(rM(r,"/"==r.charAt(0)?rj:rV,!0))),(r=this.i.toString())&&e.push("?",r),(r=this.o)&&e.push("#",rM(r,rz)),e.join("")};var rU=/[#\/\?@]/g,rV=/[#\?:]/g,rj=/[#\?]/g,r$=/[#\?@]/g,rz=/#/g;function rB(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function rq(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var r=0;r<e.length;r++){var n=e[r].indexOf("="),i=null;if(0<=n){var s=e[r].substring(0,n);i=e[r].substring(n+1)}else s=e[r];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(e.i,function(t,r){e.add(decodeURIComponent(t.replace(/\+/g," ")),r)}))}function rH(e,t){rq(e),t=rW(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function rG(e,t){return rq(e),t=rW(e,t),e.g.has(t)}function rK(e,t,r){rH(e,t),0<r.length&&(e.i=null,e.g.set(rW(e,t),e1(r)),e.h+=r.length)}function rW(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}(ej=rB.prototype).add=function(e,t){rq(this),this.i=null,e=rW(this,e);var r=this.g.get(e);return r||this.g.set(e,r=[]),r.push(t),this.h+=1,this},ej.forEach=function(e,t){rq(this),this.g.forEach(function(r,n){r.forEach(function(r){e.call(t,r,n,this)},this)},this)},ej.sa=function(){rq(this);let e=Array.from(this.g.values()),t=Array.from(this.g.keys()),r=[];for(let n=0;n<t.length;n++){let i=e[n];for(let e=0;e<i.length;e++)r.push(t[n])}return r},ej.Z=function(e){rq(this);let t=[];if("string"==typeof e)rG(this,e)&&(t=t.concat(this.g.get(rW(this,e))));else{e=Array.from(this.g.values());for(let r=0;r<e.length;r++)t=t.concat(e[r])}return t},ej.set=function(e,t){return rq(this),this.i=null,rG(this,e=rW(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},ej.get=function(e,t){return e&&0<(e=this.Z(e)).length?String(e[0]):t},ej.toString=function(){if(this.i)return this.i;if(!this.g)return"";let e=[],t=Array.from(this.g.keys());for(var r=0;r<t.length;r++){var n=t[r];let s=encodeURIComponent(String(n)),a=this.Z(n);for(n=0;n<a.length;n++){var i=s;""!==a[n]&&(i+="="+encodeURIComponent(String(a[n]))),e.push(i)}}return this.i=e.join("&")};var rQ=class{constructor(e,t){this.h=e,this.g=t}};function rX(e){this.l=e||rJ,e=eq.PerformanceNavigationTiming?0<(e=eq.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):!!(eq.g&&eq.g.Ka&&eq.g.Ka()&&eq.g.Ka().ec),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var rJ=10;function rY(e){return!!e.h||!!e.g&&e.g.size>=e.j}function rZ(e){return e.h?1:e.g?e.g.size:0}function r0(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function r1(e,t){e.g?e.g.add(t):e.h=t}function r2(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function r9(e){if(null!=e.h)return e.i.concat(e.h.F);if(null!=e.g&&0!==e.g.size){let t=e.i;for(let r of e.g.values())t=t.concat(r.F);return t}return e1(e.i)}function r4(){}function r5(){this.g=new r4}function r6(e,t,r,n,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(n)}catch(e){}}function r3(e){this.l=e.fc||null,this.j=e.ob||!1}function r7(e,t){tF.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=r8,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}rX.prototype.cancel=function(){if(this.i=r9(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(let e of this.g.values())e.cancel();this.g.clear()}},r4.prototype.stringify=function(e){return eq.JSON.stringify(e,void 0)},r4.prototype.parse=function(e){return eq.JSON.parse(e,void 0)},eY(r3,ri),r3.prototype.g=function(){return new r7(this.l,this.j)},r3.prototype.i=(s={},function(){return s}),eY(r7,tF);var r8=0;function ne(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}function nt(e){e.readyState=4,e.l=null,e.j=null,e.A=null,nr(e)}function nr(e){e.onreadystatechange&&e.onreadystatechange.call(e)}(ej=r7.prototype).open=function(e,t){if(this.readyState!=r8)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,nr(this)},ej.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;let t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||eq).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))},ej.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,nt(this)),this.readyState=r8},ej.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,nr(this)),this.g&&(this.readyState=3,nr(this),this.g))){if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(void 0!==eq.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;ne(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))}},ej.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?nt(this):nr(this),3==this.readyState&&ne(this)}},ej.Za=function(e){this.g&&(this.response=this.responseText=e,nt(this))},ej.Ya=function(e){this.g&&(this.response=e,nt(this))},ej.ka=function(){this.g&&nt(this)},ej.setRequestHeader=function(e,t){this.v.append(e,t)},ej.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},ej.getAllResponseHeaders=function(){if(!this.h)return"";let e=[],t=this.h.entries();for(var r=t.next();!r.done;)e.push((r=r.value)[0]+": "+r[1]),r=t.next();return e.join("\r\n")},Object.defineProperty(r7.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var nn=eq.JSON.parse;function ni(e){tF.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=ns,this.L=this.M=!1}eY(ni,tF);var ns="",na=/^https?$/i,no=["POST","PUT"];function nl(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,nu(e),nh(e)}function nu(e){e.F||(e.F=!0,tU(e,"complete"),tU(e,"error"))}function nc(e){if(e.h&&void 0!==eB&&(!e.C[1]||4!=nf(e)||2!=e.da())){if(e.v&&4==nf(e))tQ(e.La,0,e);else if(tU(e,"readystatechange"),4==nf(e)){e.h=!1;try{let o=e.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t,r,n=!0;break e;default:n=!1}if(!(t=n)){if(r=0===o){var i=String(e.I).match(rC)[1]||null;if(!i&&eq.self&&eq.self.location){var s=eq.self.location.protocol;i=s.substr(0,s.length-1)}r=!na.test(i?i.toLowerCase():"")}t=r}if(t)tU(e,"complete"),tU(e,"success");else{e.m=6;try{var a=2<nf(e)?e.g.statusText:""}catch(e){a=""}e.j=a+" ["+e.da()+"]",nu(e)}}finally{nh(e)}}}}function nh(e,t){if(e.g){nd(e);let r=e.g,n=e.C[0]?eH:null;e.g=null,e.C=null,t||tU(e,"ready");try{r.onreadystatechange=n}catch(e){}}}function nd(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(eq.clearTimeout(e.A),e.A=null)}function nf(e){return e.g?e.g.readyState:0}function np(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case ns:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function nm(e){let t="";return tE(e,function(e,r){t+=r+":"+e+"\r\n"}),t}function ng(e,t,r){e:{for(n in r){var n=!1;break e}n=!0}n||(r=nm(r),"string"==typeof e?null!=r&&encodeURIComponent(String(r)):rP(e,t,r))}function ny(e,t,r){return r&&r.internalChannelParams&&r.internalChannelParams[e]||t}function nv(e){this.Ga=0,this.i=[],this.j=new t1,this.oa=this.wa=this.G=this.Y=this.g=this.Da=this.F=this.ma=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=ny("failFast",!1,e),this.M=this.v=this.u=this.m=this.l=null,this.aa=!0,this.ta=this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=ny("baseRetryDelayMs",5e3,e),this.hb=ny("retryDelaySeedMs",1e4,e),this.eb=ny("forwardChannelMaxRetries",2,e),this.xa=ny("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.dc||!1,this.K=void 0,this.I=e&&e.supportsCrossDomainXhr||!1,this.J="",this.h=new rX(e&&e.concurrentRequestLimit),this.Ja=new r5,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.j.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.na=void 0,this.S=0,this.L=!1,this.pa=this.B=null}function nw(e){if(nE(e),3==e.H){var t=e.W++,r=rN(e.G);rP(r,"SID",e.J),rP(r,"RID",t),rP(r,"TYPE","terminate"),nT(e,r),(t=new rh(e,e.j,t,void 0)).L=2,t.v=rx(rN(r)),r=!1,eq.navigator&&eq.navigator.sendBeacon&&(r=eq.navigator.sendBeacon(t.v.toString(),"")),!r&&eq.Image&&((new Image).src=t.v,r=!0),r||(t.g=nM(t.l,null),t.g.ha(t.v)),t.G=Date.now(),rb(t)}nx(e)}function nb(e){e.g&&(nA(e),e.g.cancel(),e.g=null)}function nE(e){nb(e),e.u&&(eq.clearTimeout(e.u),e.u=null),nR(e),e.h.cancel(),e.m&&("number"==typeof e.m&&eq.clearTimeout(e.m),e.m=null)}function nI(e){rY(e.h)||e.m||(e.m=!0,tB(e.Na,e),e.C=0)}function n_(e,t){var r;r=t?t.m:e.W++;let n=rN(e.G);rP(n,"SID",e.J),rP(n,"RID",r),rP(n,"AID",e.V),nT(e,n),e.o&&e.s&&ng(n,e.o,e.s),r=new rh(e,e.j,r,e.C+1),null===e.o&&(r.I=e.s),t&&(e.i=t.F.concat(e.i)),t=nS(e,r,1e3),r.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),r1(e.h,r),rg(r,n,t)}function nT(e,t){e.ma&&tE(e.ma,function(e,r){rP(t,r,e)}),e.l&&rk({},function(e,r){rP(t,r,e)})}function nS(e,t,r){r=Math.min(e.i.length,r);var n=e.l?eX(e.l.Va,e.l,e):null;e:{var i=e.i;let t=-1;for(;;){let e=["count="+r];-1==t?0<r?(t=i[0].h,e.push("ofs="+t)):t=0:e.push("ofs="+t);let s=!0;for(let a=0;a<r;a++){let r=i[a].h,o=i[a].g;if(0>(r-=t))t=Math.max(0,i[a].h-100),s=!1;else try{!function(e,t,r){let n=r||"";try{rk(e,function(e,r){let i=e;eK(e)&&(i=tj(e)),t.push(n+r+"="+encodeURIComponent(i))})}catch(e){throw t.push(n+"type="+encodeURIComponent("_badmap")),e}}(o,e,"req"+r+"_")}catch(e){n&&n(o)}}if(s){n=e.join("&");break e}}}return e=e.i.splice(0,r),t.F=e,n}function nk(e){e.g||e.u||(e.ba=1,tB(e.Ma,e),e.A=0)}function nC(e){return!e.g&&!e.u&&!(3<=e.A)&&(e.ba++,e.u=rt(eX(e.Ma,e),nO(e,e.A)),e.A++,!0)}function nA(e){null!=e.B&&(eq.clearTimeout(e.B),e.B=null)}function nN(e){e.g=new rh(e,e.j,"rpc",e.ba),null===e.o&&(e.g.I=e.s),e.g.O=0;var t=rN(e.wa);rP(t,"RID","rpc"),rP(t,"SID",e.J),rP(t,"CI",e.M?"0":"1"),rP(t,"AID",e.V),rP(t,"TYPE","xmlhttp"),nT(e,t),e.o&&e.s&&ng(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var r=e.g;e=e.oa,r.L=1,r.v=rx(rN(t)),r.s=null,r.S=!0,ry(r,e)}function nR(e){null!=e.v&&(eq.clearTimeout(e.v),e.v=null)}function nD(e,t){var r=null;if(e.g==t){nR(e),nA(e),e.g=null;var n=2}else{if(!r0(e.h,t))return;r=t.F,r2(e.h,t),n=1}if(0!=e.H){if(e.ta=t.aa,t.i){if(1==n){r=t.s?t.s.length:0,t=Date.now()-t.G;var i,s,a=e.C;tU(n=t5(),new re(n,r)),nI(e)}else nk(e)}else if(3==(a=t.o)||0==a&&0<e.ta||!(1==n&&(i=e,s=t,!(rZ(i.h)>=i.h.j-(i.m?1:0))&&(i.m?(i.i=s.F.concat(i.i),!0):1!=i.H&&2!=i.H&&!(i.C>=(i.cb?0:i.eb))&&(i.m=rt(eX(i.Na,i,s),nO(i,i.C)),i.C++,!0)))||2==n&&nC(e)))switch(r&&0<r.length&&((t=e.h).i=t.i.concat(r)),a){case 1:nP(e,5);break;case 4:nP(e,10);break;case 3:nP(e,6);break;default:nP(e,2)}}}function nO(e,t){let r=e.ab+Math.floor(Math.random()*e.hb);return e.l||(r*=2),r*t}function nP(e,t){if(e.j.info("Error code "+t),2==t){var r=null;e.l&&(r=null);var n=eX(e.pb,e);r||(r=new rA("//www.google.com/images/cleardot.gif"),eq.location&&"http"==eq.location.protocol||rR(r,"https"),rx(r)),function(e,t){let r=new t1;if(eq.Image){let n=new Image;n.onload=eJ(r6,r,n,"TestLoadImage: loaded",!0,t),n.onerror=eJ(r6,r,n,"TestLoadImage: error",!1,t),n.onabort=eJ(r6,r,n,"TestLoadImage: abort",!1,t),n.ontimeout=eJ(r6,r,n,"TestLoadImage: timeout",!1,t),eq.setTimeout(function(){n.ontimeout&&n.ontimeout()},1e4),n.src=e}else t(!1)}(r.toString(),n)}else t8(2);e.H=0,e.l&&e.l.za(t),nx(e),nE(e)}function nx(e){if(e.H=0,e.pa=[],e.l){let t=r9(e.h);(0!=t.length||0!=e.i.length)&&(e2(e.pa,t),e2(e.pa,e.i),e.h.i.length=0,e1(e.i),e.i.length=0),e.l.ya()}}function nL(e,t,r){var n=r instanceof rA?rN(r):new rA(r,void 0);if(""!=n.g)t&&(n.g=t+"."+n.g),rD(n,n.m);else{var i=eq.location;n=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new rA(null,void 0);n&&rR(s,n),t&&(s.g=t),i&&rD(s,i),r&&(s.l=r),n=s}return r=e.F,t=e.Da,r&&t&&rP(n,r,t),rP(n,"VER",e.qa),nT(e,n),n}function nM(e,t,r){if(t&&!e.I)throw Error("Can't create secondary domain capable XhrIo object.");return(t=new ni(r&&e.Ha&&!e.va?new r3({ob:!0}):e.va)).Oa(e.I),t}function nF(){}function nU(){if(tn&&!(10<=Number(tp)))throw Error("Environmental error: no available transport.")}function nV(e,t){tF.call(this),this.g=new nv(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!e5(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!e5(t)&&(this.g.F=t,null!==(e=this.h)&&t in e&&t in(e=this.h)&&delete e[t]),this.j=new nz(this)}function nj(e){rl.call(this);var t=e.__sm__;if(t){e:{for(let r in t){e=r;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function n$(){ru.call(this),this.status=1}function nz(e){this.g=e}function nB(){this.blockSize=-1,this.blockSize=64,this.g=[,,,,],this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function nq(e,t,r){r||(r=0);var n=Array(16);if("string"==typeof t)for(var i=0;16>i;++i)n[i]=t.charCodeAt(r++)|t.charCodeAt(r++)<<8|t.charCodeAt(r++)<<16|t.charCodeAt(r++)<<24;else for(i=0;16>i;++i)n[i]=t[r++]|t[r++]<<8|t[r++]<<16|t[r++]<<24;t=e.g[0],r=e.g[1],i=e.g[2];var s=e.g[3],a=t+(s^r&(i^s))+n[0]+3614090360&4294967295;a=s+(i^(t=r+(a<<7&4294967295|a>>>25))&(r^i))+n[1]+3905402710&4294967295,a=i+(r^(s=t+(a<<12&4294967295|a>>>20))&(t^r))+n[2]+606105819&4294967295,a=r+(t^(i=s+(a<<17&4294967295|a>>>15))&(s^t))+n[3]+3250441966&4294967295,a=t+(s^(r=i+(a<<22&4294967295|a>>>10))&(i^s))+n[4]+4118548399&4294967295,a=s+(i^(t=r+(a<<7&4294967295|a>>>25))&(r^i))+n[5]+1200080426&4294967295,a=i+(r^(s=t+(a<<12&4294967295|a>>>20))&(t^r))+n[6]+2821735955&4294967295,a=r+(t^(i=s+(a<<17&4294967295|a>>>15))&(s^t))+n[7]+4249261313&4294967295,a=t+(s^(r=i+(a<<22&4294967295|a>>>10))&(i^s))+n[8]+1770035416&4294967295,a=s+(i^(t=r+(a<<7&4294967295|a>>>25))&(r^i))+n[9]+2336552879&4294967295,a=i+(r^(s=t+(a<<12&4294967295|a>>>20))&(t^r))+n[10]+4294925233&4294967295,a=r+(t^(i=s+(a<<17&4294967295|a>>>15))&(s^t))+n[11]+2304563134&4294967295,a=t+(s^(r=i+(a<<22&4294967295|a>>>10))&(i^s))+n[12]+1804603682&4294967295,a=s+(i^(t=r+(a<<7&4294967295|a>>>25))&(r^i))+n[13]+4254626195&4294967295,a=i+(r^(s=t+(a<<12&4294967295|a>>>20))&(t^r))+n[14]+2792965006&4294967295,a=r+(t^(i=s+(a<<17&4294967295|a>>>15))&(s^t))+n[15]+1236535329&4294967295,r=i+(a<<22&4294967295|a>>>10),a=t+(i^s&(r^i))+n[1]+4129170786&4294967295,t=r+(a<<5&4294967295|a>>>27),a=s+(r^i&(t^r))+n[6]+3225465664&4294967295,s=t+(a<<9&4294967295|a>>>23),a=i+(t^r&(s^t))+n[11]+643717713&4294967295,i=s+(a<<14&4294967295|a>>>18),a=r+(s^t&(i^s))+n[0]+3921069994&4294967295,r=i+(a<<20&4294967295|a>>>12),a=t+(i^s&(r^i))+n[5]+3593408605&4294967295,t=r+(a<<5&4294967295|a>>>27),a=s+(r^i&(t^r))+n[10]+38016083&4294967295,s=t+(a<<9&4294967295|a>>>23),a=i+(t^r&(s^t))+n[15]+3634488961&4294967295,i=s+(a<<14&4294967295|a>>>18),a=r+(s^t&(i^s))+n[4]+3889429448&4294967295,r=i+(a<<20&4294967295|a>>>12),a=t+(i^s&(r^i))+n[9]+568446438&4294967295,t=r+(a<<5&4294967295|a>>>27),a=s+(r^i&(t^r))+n[14]+3275163606&4294967295,s=t+(a<<9&4294967295|a>>>23),a=i+(t^r&(s^t))+n[3]+4107603335&4294967295,i=s+(a<<14&4294967295|a>>>18),a=r+(s^t&(i^s))+n[8]+1163531501&4294967295,r=i+(a<<20&4294967295|a>>>12),a=t+(i^s&(r^i))+n[13]+2850285829&4294967295,t=r+(a<<5&4294967295|a>>>27),a=s+(r^i&(t^r))+n[2]+4243563512&4294967295,s=t+(a<<9&4294967295|a>>>23),a=i+(t^r&(s^t))+n[7]+1735328473&4294967295,i=s+(a<<14&4294967295|a>>>18),a=r+(s^t&(i^s))+n[12]+2368359562&4294967295,a=t+((r=i+(a<<20&4294967295|a>>>12))^i^s)+n[5]+4294588738&4294967295,a=s+((t=r+(a<<4&4294967295|a>>>28))^r^i)+n[8]+2272392833&4294967295,a=i+((s=t+(a<<11&4294967295|a>>>21))^t^r)+n[11]+1839030562&4294967295,a=r+((i=s+(a<<16&4294967295|a>>>16))^s^t)+n[14]+4259657740&4294967295,a=t+((r=i+(a<<23&4294967295|a>>>9))^i^s)+n[1]+2763975236&4294967295,a=s+((t=r+(a<<4&4294967295|a>>>28))^r^i)+n[4]+1272893353&4294967295,a=i+((s=t+(a<<11&4294967295|a>>>21))^t^r)+n[7]+4139469664&4294967295,a=r+((i=s+(a<<16&4294967295|a>>>16))^s^t)+n[10]+3200236656&4294967295,a=t+((r=i+(a<<23&4294967295|a>>>9))^i^s)+n[13]+681279174&4294967295,a=s+((t=r+(a<<4&4294967295|a>>>28))^r^i)+n[0]+3936430074&4294967295,a=i+((s=t+(a<<11&4294967295|a>>>21))^t^r)+n[3]+3572445317&4294967295,a=r+((i=s+(a<<16&4294967295|a>>>16))^s^t)+n[6]+76029189&4294967295,a=t+((r=i+(a<<23&4294967295|a>>>9))^i^s)+n[9]+3654602809&4294967295,a=s+((t=r+(a<<4&4294967295|a>>>28))^r^i)+n[12]+3873151461&4294967295,a=i+((s=t+(a<<11&4294967295|a>>>21))^t^r)+n[15]+530742520&4294967295,a=r+((i=s+(a<<16&4294967295|a>>>16))^s^t)+n[2]+3299628645&4294967295,r=i+(a<<23&4294967295|a>>>9),a=t+(i^(r|~s))+n[0]+4096336452&4294967295,t=r+(a<<6&4294967295|a>>>26),a=s+(r^(t|~i))+n[7]+1126891415&4294967295,s=t+(a<<10&4294967295|a>>>22),a=i+(t^(s|~r))+n[14]+2878612391&4294967295,i=s+(a<<15&4294967295|a>>>17),a=r+(s^(i|~t))+n[5]+4237533241&4294967295,r=i+(a<<21&4294967295|a>>>11),a=t+(i^(r|~s))+n[12]+1700485571&4294967295,t=r+(a<<6&4294967295|a>>>26),a=s+(r^(t|~i))+n[3]+2399980690&4294967295,s=t+(a<<10&4294967295|a>>>22),a=i+(t^(s|~r))+n[10]+4293915773&4294967295,i=s+(a<<15&4294967295|a>>>17),a=r+(s^(i|~t))+n[1]+2240044497&4294967295,r=i+(a<<21&4294967295|a>>>11),a=t+(i^(r|~s))+n[8]+1873313359&4294967295,t=r+(a<<6&4294967295|a>>>26),a=s+(r^(t|~i))+n[15]+4264355552&4294967295,s=t+(a<<10&4294967295|a>>>22),a=i+(t^(s|~r))+n[6]+2734768916&4294967295,i=s+(a<<15&4294967295|a>>>17),a=r+(s^(i|~t))+n[13]+1309151649&4294967295,r=i+(a<<21&4294967295|a>>>11),a=t+(i^(r|~s))+n[4]+4149444226&4294967295,t=r+(a<<6&4294967295|a>>>26),a=s+(r^(t|~i))+n[11]+3174756917&4294967295,s=t+(a<<10&4294967295|a>>>22),a=i+(t^(s|~r))+n[2]+718787259&4294967295,i=s+(a<<15&4294967295|a>>>17),a=r+(s^(i|~t))+n[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(a<<21&4294967295|a>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+s&4294967295}function nH(e,t){this.h=t;for(var r=[],n=!0,i=e.length-1;0<=i;i--){var s=0|e[i];n&&s==t||(r[i]=s,n=!1)}this.g=r}(ej=ni.prototype).Oa=function(e){this.M=e},ej.ha=function(e,t,r,n){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():c.g(),this.C=this.u?rs(this.u):rs(c),this.g.onreadystatechange=eX(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(e){nl(this,e);return}if(e=r||"",r=new Map(this.headers),n){if(Object.getPrototypeOf(n)===Object.prototype)for(var i in n)r.set(i,n[i]);else if("function"==typeof n.keys&&"function"==typeof n.get)for(let e of n.keys())r.set(e,n.get(e));else throw Error("Unknown input type for opt_headers: "+String(n))}for(let[s,a]of(n=Array.from(r.keys()).find(e=>"content-type"==e.toLowerCase()),i=eq.FormData&&e instanceof eq.FormData,!(0<=e0(no,t))||n||i||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),r))this.g.setRequestHeader(s,a);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{var s;nd(this),0<this.B&&((this.L=(s=this.g,tn&&tt(tf,9,function(){let e=0,t=e6(String(o)).split("."),r=e6("9").split("."),n=Math.max(t.length,r.length);for(let a=0;0==e&&a<n;a++){var i=t[a]||"",s=r[a]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==i[0].length&&0==s[0].length)break;e=e3(0==i[1].length?0:parseInt(i[1],10),0==s[1].length?0:parseInt(s[1],10))||e3(0==i[2].length,0==s[2].length)||e3(i[2],s[2]),i=i[3],s=s[3]}while(0==e)}return 0<=e})&&"number"==typeof s.timeout&&void 0!==s.ontimeout))?(this.g.timeout=this.B,this.g.ontimeout=eX(this.ua,this)):this.A=tQ(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(e){nl(this,e)}},ej.ua=function(){void 0!==eB&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,tU(this,"timeout"),this.abort(8))},ej.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,tU(this,"complete"),tU(this,"abort"),nh(this))},ej.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),nh(this,!0)),ni.$.N.call(this)},ej.La=function(){this.s||(this.G||this.v||this.l?nc(this):this.kb())},ej.kb=function(){nc(this)},ej.da=function(){try{return 2<nf(this)?this.g.status:-1}catch(e){return -1}},ej.ja=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},ej.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),nn(t)}},ej.Ia=function(){return this.m},ej.Sa=function(){return"string"==typeof this.j?this.j:String(this.j)},(ej=nv.prototype).qa=8,ej.H=1,ej.Na=function(e){if(this.m){if(this.m=null,1==this.H){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;let i=new rh(this,this.j,e,void 0),s=this.s;if(this.U&&(s?tT(s=tI(s),this.U):s=this.U),null!==this.o||this.O||(i.I=s,s=null),this.P)e:{for(var t=0,r=0;r<this.i.length;r++){t:{var n=this.i[r];if("__data__"in n.g&&"string"==typeof(n=n.g.__data__)){n=n.length;break t}n=void 0}if(void 0===n)break;if(4096<(t+=n)){t=r;break e}if(4096===t||r===this.i.length-1){t=r+1;break e}}t=1e3}else t=1e3;t=nS(this,i,t),rP(r=rN(this.G),"RID",e),rP(r,"CVER",22),this.F&&rP(r,"X-HTTP-Session-Id",this.F),nT(this,r),s&&(this.O?t="headers="+encodeURIComponent(String(nm(s)))+"&"+t:this.o&&ng(r,this.o,s)),r1(this.h,i),this.bb&&rP(r,"TYPE","init"),this.P?(rP(r,"$req",t),rP(r,"SID","null"),i.ba=!0,rg(i,r,null)):rg(i,r,t),this.H=2}}else 3==this.H&&(e?n_(this,e):0==this.i.length||rY(this.h)||n_(this))}},ej.Ma=function(){if(this.u=null,nN(this),this.ca&&!(this.L||null==this.g||0>=this.S)){var e=2*this.S;this.j.info("BP detection timer enabled: "+e),this.B=rt(eX(this.jb,this),e)}},ej.jb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.M=!1,this.L=!0,t8(10),nb(this),nN(this))},ej.ib=function(){null!=this.v&&(this.v=null,nb(this),nC(this),t8(19))},ej.pb=function(e){e?(this.j.info("Successfully pinged google.com"),t8(2)):(this.j.info("Failed to ping google.com"),t8(1))},(ej=nF.prototype).Ba=function(){},ej.Aa=function(){},ej.za=function(){},ej.ya=function(){},ej.Va=function(){},nU.prototype.g=function(e,t){return new nV(e,t)},eY(nV,tF),nV.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.I=!0);var e=this.g,t=this.l,r=this.h||void 0;t8(0),e.Y=t,e.ma=r||{},e.M=e.aa,e.G=nL(e,null,e.Y),nI(e)},nV.prototype.close=function(){nw(this.g)},nV.prototype.u=function(e){var t=this.g;if("string"==typeof e){var r={};r.__data__=e,e=r}else this.v&&((r={}).__data__=tj(e),e=r);t.i.push(new rQ(t.fb++,e)),3==t.H&&nI(t)},nV.prototype.N=function(){this.g.l=null,delete this.j,nw(this.g),delete this.g,nV.$.N.call(this)},eY(nj,rl),eY(n$,ru),eY(nz,nF),nz.prototype.Ba=function(){tU(this.g,"a")},nz.prototype.Aa=function(e){tU(this.g,new nj(e))},nz.prototype.za=function(e){tU(this.g,new n$)},nz.prototype.ya=function(){tU(this.g,"b")},eY(nB,function(){this.blockSize=-1}),nB.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},nB.prototype.j=function(e,t){void 0===t&&(t=e.length);for(var r=t-this.blockSize,n=this.m,i=this.h,s=0;s<t;){if(0==i)for(;s<=r;)nq(this,e,s),s+=this.blockSize;if("string"==typeof e){for(;s<t;)if(n[i++]=e.charCodeAt(s++),i==this.blockSize){nq(this,n),i=0;break}}else for(;s<t;)if(n[i++]=e[s++],i==this.blockSize){nq(this,n),i=0;break}}this.h=i,this.i+=t},nB.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var r=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=255&r,r/=256;for(this.j(e),e=Array(16),t=r=0;4>t;++t)for(var n=0;32>n;n+=8)e[r++]=this.g[t]>>>n&255;return e};var nG={};function nK(e){return -128<=e&&128>e?tt(nG,e,function(e){return new nH([0|e],0>e?-1:0)}):new nH([0|e],0>e?-1:0)}function nW(e){if(isNaN(e)||!isFinite(e))return nX;if(0>e)return n1(nW(-e));for(var t=[],r=1,n=0;e>=r;n++)t[n]=e/r|0,r*=nQ;return new nH(t,0)}var nQ=4294967296,nX=nK(0),nJ=nK(1),nY=nK(16777216);function nZ(e){if(0!=e.h)return!1;for(var t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function n0(e){return -1==e.h}function n1(e){for(var t=e.g.length,r=[],n=0;n<t;n++)r[n]=~e.g[n];return new nH(r,~e.h).add(nJ)}function n2(e,t){return e.add(n1(t))}function n9(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function n4(e,t){this.g=e,this.h=t}function n5(e,t){if(nZ(t))throw Error("division by zero");if(nZ(e))return new n4(nX,nX);if(n0(e))return t=n5(n1(e),t),new n4(n1(t.g),n1(t.h));if(n0(t))return t=n5(e,n1(t)),new n4(n1(t.g),t.h);if(30<e.g.length){if(n0(e)||n0(t))throw Error("slowDivide_ only works with positive integers.");for(var r=nJ,n=t;0>=n.X(e);)r=n6(r),n=n6(n);var i=n3(r,1),s=n3(n,1);for(n=n3(n,2),r=n3(r,2);!nZ(n);){var a=s.add(n);0>=a.X(e)&&(i=i.add(r),s=a),n=n3(n,1),r=n3(r,1)}return t=n2(e,i.R(t)),new n4(i,t)}for(i=nX;0<=e.X(t);){for(n=48>=(n=Math.ceil(Math.log(r=Math.max(1,Math.floor(e.ea()/t.ea())))/Math.LN2))?1:Math.pow(2,n-48),a=(s=nW(r)).R(t);n0(a)||0<a.X(e);)r-=n,a=(s=nW(r)).R(t);nZ(s)&&(s=nJ),i=i.add(s),e=n2(e,a)}return new n4(i,e)}function n6(e){for(var t=e.g.length+1,r=[],n=0;n<t;n++)r[n]=e.D(n)<<1|e.D(n-1)>>>31;return new nH(r,e.h)}function n3(e,t){var r=t>>5;t%=32;for(var n=e.g.length-r,i=[],s=0;s<n;s++)i[s]=0<t?e.D(s+r)>>>t|e.D(s+r+1)<<32-t:e.D(s+r);return new nH(i,e.h)}(ej=nH.prototype).ea=function(){if(n0(this))return-n1(this).ea();for(var e=0,t=1,r=0;r<this.g.length;r++){var n=this.D(r);e+=(0<=n?n:nQ+n)*t,t*=nQ}return e},ej.toString=function(e){if(2>(e=e||10)||36<e)throw Error("radix out of range: "+e);if(nZ(this))return"0";if(n0(this))return"-"+n1(this).toString(e);for(var t=nW(Math.pow(e,6)),r=this,n="";;){var i=n5(r,t).g,s=((0<(r=n2(r,i.R(t))).g.length?r.g[0]:r.h)>>>0).toString(e);if(nZ(r=i))return s+n;for(;6>s.length;)s="0"+s;n=s+n}},ej.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h},ej.X=function(e){return n0(e=n2(this,e))?-1:nZ(e)?0:1},ej.abs=function(){return n0(this)?n1(this):this},ej.add=function(e){for(var t=Math.max(this.g.length,e.g.length),r=[],n=0,i=0;i<=t;i++){var s=n+(65535&this.D(i))+(65535&e.D(i)),a=(s>>>16)+(this.D(i)>>>16)+(e.D(i)>>>16);n=a>>>16,s&=65535,a&=65535,r[i]=a<<16|s}return new nH(r,-2147483648&r[r.length-1]?-1:0)},ej.R=function(e){if(nZ(this)||nZ(e))return nX;if(n0(this))return n0(e)?n1(this).R(n1(e)):n1(n1(this).R(e));if(n0(e))return n1(this.R(n1(e)));if(0>this.X(nY)&&0>e.X(nY))return nW(this.ea()*e.ea());for(var t=this.g.length+e.g.length,r=[],n=0;n<2*t;n++)r[n]=0;for(n=0;n<this.g.length;n++)for(var i=0;i<e.g.length;i++){var s=this.D(n)>>>16,a=65535&this.D(n),o=e.D(i)>>>16,l=65535&e.D(i);r[2*n+2*i]+=a*l,n9(r,2*n+2*i),r[2*n+2*i+1]+=s*l,n9(r,2*n+2*i+1),r[2*n+2*i+1]+=a*o,n9(r,2*n+2*i+1),r[2*n+2*i+2]+=s*o,n9(r,2*n+2*i+2)}for(n=0;n<t;n++)r[n]=r[2*n+1]<<16|r[2*n];for(n=t;n<2*t;n++)r[n]=0;return new nH(r,0)},ej.gb=function(e){return n5(this,e).h},ej.and=function(e){for(var t=Math.max(this.g.length,e.g.length),r=[],n=0;n<t;n++)r[n]=this.D(n)&e.D(n);return new nH(r,this.h&e.h)},ej.or=function(e){for(var t=Math.max(this.g.length,e.g.length),r=[],n=0;n<t;n++)r[n]=this.D(n)|e.D(n);return new nH(r,this.h|e.h)},ej.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),r=[],n=0;n<t;n++)r[n]=this.D(n)^e.D(n);return new nH(r,this.h^e.h)},nU.prototype.createWebChannel=nU.prototype.g,nV.prototype.send=nV.prototype.u,nV.prototype.open=nV.prototype.m,nV.prototype.close=nV.prototype.close,rr.NO_ERROR=0,rr.TIMEOUT=8,rr.HTTP_ERROR=6,rn.COMPLETE="complete",ra.EventType=ro,ro.OPEN="a",ro.CLOSE="b",ro.ERROR="c",ro.MESSAGE="d",tF.prototype.listen=tF.prototype.O,ni.prototype.listenOnce=ni.prototype.P,ni.prototype.getLastError=ni.prototype.Sa,ni.prototype.getLastErrorCode=ni.prototype.Ia,ni.prototype.getStatus=ni.prototype.da,ni.prototype.getResponseJson=ni.prototype.Wa,ni.prototype.getResponseText=ni.prototype.ja,ni.prototype.send=ni.prototype.ha,ni.prototype.setWithCredentials=ni.prototype.Oa,nB.prototype.digest=nB.prototype.l,nB.prototype.reset=nB.prototype.reset,nB.prototype.update=nB.prototype.j,nH.prototype.add=nH.prototype.add,nH.prototype.multiply=nH.prototype.R,nH.prototype.modulo=nH.prototype.gb,nH.prototype.compare=nH.prototype.X,nH.prototype.toNumber=nH.prototype.ea,nH.prototype.toString=nH.prototype.toString,nH.prototype.getBits=nH.prototype.D,nH.fromNumber=nW,nH.fromString=function e(t,r){if(0==t.length)throw Error("number format error: empty string");if(2>(r=r||10)||36<r)throw Error("radix out of range: "+r);if("-"==t.charAt(0))return n1(e(t.substring(1),r));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=nW(Math.pow(r,8)),i=nX,s=0;s<t.length;s+=8){var a=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+a),r);8>a?(a=nW(Math.pow(r,a)),i=i.R(a).add(nW(o))):i=(i=i.R(n)).add(nW(o))}return i};var n7=ez.createWebChannelTransport=function(){return new nU},n8=ez.getStatEventTarget=function(){return t5()},ie=ez.ErrorCode=rr,it=ez.EventType=rn,ir=ez.Event=t9,ii=ez.Stat={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},is=ez.FetchXmlHttpFactory=r3,ia=ez.WebChannel=ra,io=ez.XhrIo=ni,il=ez.Md5=nB,iu=ez.Integer=nH;r(3454);let ic="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ih.UNAUTHENTICATED=new ih(null),ih.GOOGLE_CREDENTIALS=new ih("google-credentials-uid"),ih.FIRST_PARTY=new ih("first-party-uid"),ih.MOCK_USER=new ih("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let id="9.21.0",ip=new J("@firebase/firestore");function im(){return ip.logLevel}function ig(e,...t){if(ip.logLevel<=eV.DEBUG){let r=t.map(iw);ip.debug(`Firestore (${id}): ${e}`,...r)}}function iy(e,...t){if(ip.logLevel<=eV.ERROR){let r=t.map(iw);ip.error(`Firestore (${id}): ${e}`,...r)}}function iv(e,...t){if(ip.logLevel<=eV.WARN){let r=t.map(iw);ip.warn(`Firestore (${id}): ${e}`,...r)}}function iw(e){if("string"==typeof e)return e;try{return JSON.stringify(e)}catch(t){return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ib(e="Unexpected state"){let t=`FIRESTORE (${id}) INTERNAL ASSERTION FAILED: `+e;throw iy(t),Error(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let iE={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class iI extends D{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i_{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iT{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class iS{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(ih.UNAUTHENTICATED))}shutdown(){}}class ik{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class iC{constructor(e){this.t=e,this.currentUser=ih.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let r=this.i,n=e=>this.i!==r?(r=this.i,t(e)):Promise.resolve(),i=new i_;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new i_,e.enqueueRetryable(()=>n(this.currentUser))};let s=()=>{let t=i;e.enqueueRetryable(async()=>{await t.promise,await n(this.currentUser)})},a=e=>{ig("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(e=>a(e)),setTimeout(()=>{if(!this.auth){let e=this.t.getImmediate({optional:!0});e?a(e):(ig("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new i_)}},0),s()}getToken(){let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(ig("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?("string"==typeof t.accessToken||ib(),new iT(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){let e=this.auth&&this.auth.getUid();return null===e||"string"==typeof e||ib(),new ih(e)}}class iA{constructor(e,t,r){this.h=e,this.l=t,this.m=r,this.type="FirstParty",this.user=ih.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);let e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class iN{constructor(e,t,r){this.h=e,this.l=t,this.m=r}getToken(){return Promise.resolve(new iA(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable(()=>t(ih.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class iR{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class iD{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,t){let r=e=>{null!=e.error&&ig("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);let r=e.token!==this.T;return this.T=e.token,ig("FirebaseAppCheckTokenProvider",`Received ${r?"new":"existing"} token.`),r?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>r(t))};let n=e=>{ig("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.I.onInit(e=>n(e)),setTimeout(()=>{if(!this.appCheck){let e=this.I.getImmediate({optional:!0});e?n(e):ig("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?("string"==typeof e.token||ib(),this.T=e.token,new iR(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iO{static A(){let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length,r="";for(;r.length<20;){let n=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){let t="undefined"!=typeof self&&(self.crypto||self.msCrypto),r=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(r);else for(let t=0;t<e;t++)r[t]=Math.floor(256*Math.random());return r}(40);for(let i=0;i<n.length;++i)r.length<20&&n[i]<t&&(r+=e.charAt(n[i]%e.length))}return r}}function iP(e,t){return e<t?-1:e>t?1:0}function ix(e,t,r){return e.length===t.length&&e.every((e,n)=>r(e,t[n]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iL{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0||t>=1e9)throw new iI(iE.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800||e>=253402300800)throw new iI(iE.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return iL.fromMillis(Date.now())}static fromDate(e){return iL.fromMillis(e.getTime())}static fromMillis(e){let t=Math.floor(e/1e3);return new iL(t,Math.floor(1e6*(e-1e3*t)))}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?iP(this.nanoseconds,e.nanoseconds):iP(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){let e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iM{constructor(e){this.timestamp=e}static fromTimestamp(e){return new iM(e)}static min(){return new iM(new iL(0,0))}static max(){return new iM(new iL(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iF{constructor(e,t,r){void 0===t?t=0:t>e.length&&ib(),void 0===r?r=e.length-t:r>e.length-t&&ib(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return 0===iF.comparator(this,e)}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof iF?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let r=Math.min(e.length,t.length);for(let n=0;n<r;n++){let r=e.get(n),i=t.get(n);if(r<i)return -1;if(r>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class iU extends iF{construct(e,t,r){return new iU(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){let t=[];for(let r of e){if(r.indexOf("//")>=0)throw new iI(iE.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(e=>e.length>0))}return new iU(t)}static emptyPath(){return new iU([])}}let iV=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ij extends iF{construct(e,t,r){return new ij(e,t,r)}static isValidIdentifier(e){return iV.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ij.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new ij(["__name__"])}static fromServerFormat(e){let t=[],r="",n=0,i=()=>{if(0===r.length)throw new iI(iE.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""},s=!1;for(;n<e.length;){let t=e[n];if("\\"===t){if(n+1===e.length)throw new iI(iE.INVALID_ARGUMENT,"Path has trailing escape character: "+e);let t=e[n+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new iI(iE.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=t,n+=2}else"`"===t?(s=!s,n++):"."!==t||s?(r+=t,n++):(i(),n++)}if(i(),s)throw new iI(iE.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ij(t)}static emptyPath(){return new ij([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i${constructor(e){this.path=e}static fromPath(e){return new i$(iU.fromString(e))}static fromName(e){return new i$(iU.fromString(e).popFirst(5))}static empty(){return new i$(iU.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===iU.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return iU.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new i$(new iU(e.slice()))}}class iz{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new iz(iM.min(),i$.empty(),-1)}static max(){return new iz(iM.max(),i$.empty(),-1)}}class iB{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iq(e){if(e.code!==iE.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==e.message)throw e;ig("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iH{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ib(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new iH((r,n)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(r,n)},this.catchCallback=e=>{this.wrapFailure(t,e).next(r,n)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{let t=e();return t instanceof iH?t:iH.resolve(t)}catch(e){return iH.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):iH.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):iH.reject(t)}static resolve(e){return new iH((t,r)=>{t(e)})}static reject(e){return new iH((t,r)=>{r(e)})}static waitFor(e){return new iH((t,r)=>{let n=0,i=0,s=!1;e.forEach(e=>{++n,e.next(()=>{++i,s&&i===n&&t()},e=>r(e))}),s=!0,i===n&&t()})}static or(e){let t=iH.resolve(!1);for(let r of e)t=t.next(e=>e?iH.resolve(e):r());return t}static forEach(e,t){let r=[];return e.forEach((e,n)=>{r.push(t.call(this,e,n))}),this.waitFor(r)}static mapArray(e,t){return new iH((r,n)=>{let i=e.length,s=Array(i),a=0;for(let o=0;o<i;o++){let l=o;t(e[l]).next(e=>{s[l]=e,++a===i&&r(s)},e=>n(e))}})}static doWhile(e,t){return new iH((r,n)=>{let i=()=>{!0===e()?t().next(()=>{i()},n):r()};i()})}}function iG(e){return"IndexedDbTransactionError"===e.name}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iK{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ot(e),this.ut=e=>t.writeSequenceNumber(e))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){let e=++this.previousValue;return this.ut&&this.ut(e),e}}function iW(e){return 0===e&&1/e==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iQ(e){let t=0;for(let r in e)Object.prototype.hasOwnProperty.call(e,r)&&t++;return t}function iX(e,t){for(let r in e)Object.prototype.hasOwnProperty.call(e,r)&&t(r,e[r])}function iJ(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}iK.ct=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iY{constructor(e,t){this.comparator=e,this.root=t||i0.EMPTY}insert(e,t){return new iY(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,i0.BLACK,null,null))}remove(e){return new iY(this.comparator,this.root.remove(e,this.comparator).copy(null,null,i0.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){let r=this.comparator(e,t.key);if(0===r)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){let n=this.comparator(e,r.key);if(0===n)return t+r.left.size;n<0?r=r.left:(t+=r.left.size+1,r=r.right)}return -1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){let e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new iZ(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new iZ(this.root,e,this.comparator,!1)}getReverseIterator(){return new iZ(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new iZ(this.root,e,this.comparator,!0)}}class iZ{constructor(e,t,r,n){this.isReverse=n,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&n&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class i0{constructor(e,t,r,n,i){this.key=e,this.value=t,this.color=null!=r?r:i0.RED,this.left=null!=n?n:i0.EMPTY,this.right=null!=i?i:i0.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,n,i){return new i0(null!=e?e:this.key,null!=t?t:this.value,null!=r?r:this.color,null!=n?n:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let n=this,i=r(e,n.key);return(n=i<0?n.copy(null,null,null,n.left.insert(e,t,r),null):0===i?n.copy(null,t,null,null,null):n.copy(null,null,null,null,n.right.insert(e,t,r))).fixUp()}removeMin(){if(this.left.isEmpty())return i0.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),(e=e.copy(null,null,null,e.left.removeMin(),null)).fixUp()}remove(e,t){let r,n=this;if(0>t(e,n.key))n.left.isEmpty()||n.left.isRed()||n.left.left.isRed()||(n=n.moveRedLeft()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed()&&(n=n.rotateRight()),n.right.isEmpty()||n.right.isRed()||n.right.left.isRed()||(n=n.moveRedRight()),0===t(e,n.key)){if(n.right.isEmpty())return i0.EMPTY;r=n.right.min(),n=n.copy(r.key,r.value,null,null,n.right.removeMin())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight())).rotateLeft()).colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=(e=e.rotateRight()).colorFlip()),e}rotateLeft(){let e=this.copy(null,null,i0.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,i0.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){let e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ib();let e=this.left.check();if(e!==this.right.check())throw ib();return e+(this.isRed()?0:1)}}i0.EMPTY=null,i0.RED=!0,i0.BLACK=!1,i0.EMPTY=new class{constructor(){this.size=0}get key(){throw ib()}get value(){throw ib()}get color(){throw ib()}get left(){throw ib()}get right(){throw ib()}copy(e,t,r,n,i){return this}insert(e,t,r){return new i0(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i1{constructor(e){this.comparator=e,this.data=new iY(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){let r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){let n=r.getNext();if(this.comparator(n.key,e[1])>=0)return;t(n.key)}}forEachWhile(e,t){let r;for(r=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new i2(this.data.getIterator())}getIteratorFrom(e){return new i2(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof i1)||this.size!==e.size)return!1;let t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){let e=t.getNext().key,n=r.getNext().key;if(0!==this.comparator(e,n))return!1}return!0}toArray(){let e=[];return this.forEach(t=>{e.push(t)}),e}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){let t=new i1(this.comparator);return t.data=e,t}}class i2{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i9{constructor(e){this.fields=e,e.sort(ij.comparator)}static empty(){return new i9([])}unionWith(e){let t=new i1(ij.comparator);for(let e of this.fields)t=t.add(e);for(let r of e)t=t.add(r);return new i9(t.toArray())}covers(e){for(let t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return ix(this.fields,e.fields,(e,t)=>e.isEqual(t))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i4 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i5{constructor(e){this.binaryString=e}static fromBase64String(e){let t=function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new i4("Invalid base64 string: "+e):e}}(e);return new i5(t)}static fromUint8Array(e){let t=function(e){let t="";for(let r=0;r<e.length;++r)t+=String.fromCharCode(e[r]);return t}(e);return new i5(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return btoa(this.binaryString)}toUint8Array(){return function(e){let t=new Uint8Array(e.length);for(let r=0;r<e.length;r++)t[r]=e.charCodeAt(r);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return iP(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}i5.EMPTY_BYTE_STRING=new i5("");let i6=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function i3(e){if(e||ib(),"string"==typeof e){let t=0,r=i6.exec(e);if(r||ib(),r[1]){let e=r[1];t=Number(e=(e+"000000000").substr(0,9))}let n=new Date(e);return{seconds:Math.floor(n.getTime()/1e3),nanos:t}}return{seconds:i7(e.seconds),nanos:i7(e.nanos)}}function i7(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function i8(e){return"string"==typeof e?i5.fromBase64String(e):i5.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function se(e){var t,r;return"server_timestamp"===(null===(r=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===r?void 0:r.stringValue)}function st(e){let t=e.mapValue.fields.__previous_value__;return se(t)?st(t):t}function sr(e){let t=i3(e.mapValue.fields.__local_write_time__.timestampValue);return new iL(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e,t,r,n,i,s,a,o){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=n,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=a,this.useFetchStreams=o}}class si{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new si("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof si&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ss={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function sa(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?se(e)?4:sw(e)?9007199254740991:10:ib()}function so(e,t){if(e===t)return!0;let r=sa(e);if(r!==sa(t))return!1;switch(r){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return sr(e).isEqual(sr(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;let r=i3(e.timestampValue),n=i3(t.timestampValue);return r.seconds===n.seconds&&r.nanos===n.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return i8(e.bytesValue).isEqual(i8(t.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return i7(e.geoPointValue.latitude)===i7(t.geoPointValue.latitude)&&i7(e.geoPointValue.longitude)===i7(t.geoPointValue.longitude);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return i7(e.integerValue)===i7(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){let r=i7(e.doubleValue),n=i7(t.doubleValue);return r===n?iW(r)===iW(n):isNaN(r)&&isNaN(n)}return!1}(e,t);case 9:return ix(e.arrayValue.values||[],t.arrayValue.values||[],so);case 10:return function(e,t){let r=e.mapValue.fields||{},n=t.mapValue.fields||{};if(iQ(r)!==iQ(n))return!1;for(let e in r)if(r.hasOwnProperty(e)&&(void 0===n[e]||!so(r[e],n[e])))return!1;return!0}(e,t);default:return ib()}}function sl(e,t){return void 0!==(e.values||[]).find(e=>so(e,t))}function su(e,t){if(e===t)return 0;let r=sa(e),n=sa(t);if(r!==n)return iP(r,n);switch(r){case 0:case 9007199254740991:return 0;case 1:return iP(e.booleanValue,t.booleanValue);case 2:return function(e,t){let r=i7(e.integerValue||e.doubleValue),n=i7(t.integerValue||t.doubleValue);return r<n?-1:r>n?1:r===n?0:isNaN(r)?isNaN(n)?0:-1:1}(e,t);case 3:return sc(e.timestampValue,t.timestampValue);case 4:return sc(sr(e),sr(t));case 5:return iP(e.stringValue,t.stringValue);case 6:return function(e,t){let r=i8(e),n=i8(t);return r.compareTo(n)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){let r=e.split("/"),n=t.split("/");for(let e=0;e<r.length&&e<n.length;e++){let t=iP(r[e],n[e]);if(0!==t)return t}return iP(r.length,n.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){let r=iP(i7(e.latitude),i7(t.latitude));return 0!==r?r:iP(i7(e.longitude),i7(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){let r=e.values||[],n=t.values||[];for(let e=0;e<r.length&&e<n.length;++e){let t=su(r[e],n[e]);if(t)return t}return iP(r.length,n.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===ss.mapValue&&t===ss.mapValue)return 0;if(e===ss.mapValue)return 1;if(t===ss.mapValue)return -1;let r=e.fields||{},n=Object.keys(r),i=t.fields||{},s=Object.keys(i);n.sort(),s.sort();for(let e=0;e<n.length&&e<s.length;++e){let t=iP(n[e],s[e]);if(0!==t)return t;let a=su(r[n[e]],i[s[e]]);if(0!==a)return a}return iP(n.length,s.length)}(e.mapValue,t.mapValue);default:throw ib()}}function sc(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return iP(e,t);let r=i3(e),n=i3(t),i=iP(r.seconds,n.seconds);return 0!==i?i:iP(r.nanos,n.nanos)}function sh(e){var t,r;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){let t=i3(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?i8(e.bytesValue).toBase64():"referenceValue"in e?(r=e.referenceValue,i$.fromName(r).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",r=!0;for(let n of e.values||[])r?r=!1:t+=",",t+=sh(n);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){let t=Object.keys(e.fields||{}).sort(),r="{",n=!0;for(let i of t)n?n=!1:r+=",",r+=`${i}:${sh(e.fields[i])}`;return r+"}"}(e.mapValue):ib()}function sd(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function sf(e){return!!e&&"integerValue"in e}function sp(e){return!!e&&"arrayValue"in e}function sm(e){return!!e&&"nullValue"in e}function sg(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function sy(e){return!!e&&"mapValue"in e}function sv(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){let t={mapValue:{fields:{}}};return iX(e.mapValue.fields,(e,r)=>t.mapValue.fields[e]=sv(r)),t}if(e.arrayValue){let t={arrayValue:{values:[]}};for(let r=0;r<(e.arrayValue.values||[]).length;++r)t.arrayValue.values[r]=sv(e.arrayValue.values[r]);return t}return Object.assign({},e)}function sw(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sb{constructor(e){this.value=e}static empty(){return new sb({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(!sy(t=(t.mapValue.fields||{})[e.get(r)]))return null;return(t=(t.mapValue.fields||{})[e.lastSegment()])||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=sv(t)}setAll(e){let t=ij.emptyPath(),r={},n=[];e.forEach((e,i)=>{if(!t.isImmediateParentOf(i)){let e=this.getFieldsMap(t);this.applyChanges(e,r,n),r={},n=[],t=i.popLast()}e?r[i.lastSegment()]=sv(e):n.push(i.lastSegment())});let i=this.getFieldsMap(t);this.applyChanges(i,r,n)}delete(e){let t=this.field(e.popLast());sy(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return so(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let n=t.mapValue.fields[e.get(r)];sy(n)&&n.mapValue.fields||(n={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=n),t=n}return t.mapValue.fields}applyChanges(e,t,r){for(let n of(iX(t,(t,r)=>e[t]=r),r))delete e[n]}clone(){return new sb(sv(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sE{constructor(e,t,r,n,i,s,a){this.key=e,this.documentType=t,this.version=r,this.readTime=n,this.createTime=i,this.data=s,this.documentState=a}static newInvalidDocument(e){return new sE(e,0,iM.min(),iM.min(),iM.min(),sb.empty(),0)}static newFoundDocument(e,t,r,n){return new sE(e,1,t,iM.min(),r,n,0)}static newNoDocument(e,t){return new sE(e,2,t,iM.min(),iM.min(),sb.empty(),0)}static newUnknownDocument(e,t){return new sE(e,3,t,iM.min(),iM.min(),sb.empty(),2)}convertToFoundDocument(e,t){return this.createTime.isEqual(iM.min())&&(2===this.documentType||0===this.documentType)&&(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=sb.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=sb.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=iM.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof sE&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new sE(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sI{constructor(e,t){this.position=e,this.inclusive=t}}function s_(e,t,r){let n=0;for(let i=0;i<e.position.length;i++){let s=t[i],a=e.position[i];if(n=s.field.isKeyField()?i$.comparator(i$.fromName(a.referenceValue),r.key):su(a,r.data.field(s.field)),"desc"===s.dir&&(n*=-1),0!==n)break}return n}function sT(e,t){if(null===e)return null===t;if(null===t||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let r=0;r<e.position.length;r++)if(!so(e.position[r],t.position[r]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sS{constructor(e,t="asc"){this.field=e,this.dir=t}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sk{}class sC extends sk{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,r):new sD(e,t,r):"array-contains"===t?new sL(e,r):"in"===t?new sM(e,r):"not-in"===t?new sF(e,r):"array-contains-any"===t?new sU(e,r):new sC(e,t,r)}static createKeyFieldInFilter(e,t,r){return"in"===t?new sO(e,r):new sP(e,r)}matches(e){let t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(su(t,this.value)):null!==t&&sa(this.value)===sa(t)&&this.matchesComparison(su(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return ib()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class sA extends sk{constructor(e,t){super(),this.filters=e,this.op=t,this.ht=null}static create(e,t){return new sA(e,t)}matches(e){return sN(this)?void 0===this.filters.find(t=>!t.matches(e)):void 0!==this.filters.find(t=>t.matches(e))}getFlattenedFilters(){return null!==this.ht||(this.ht=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){let e=this.lt(e=>e.isInequality());return null!==e?e.field:null}lt(e){for(let t of this.getFlattenedFilters())if(e(t))return t;return null}}function sN(e){return"and"===e.op}function sR(e){for(let t of e.filters)if(t instanceof sA)return!1;return!0}class sD extends sC{constructor(e,t,r){super(e,t,r),this.key=i$.fromName(r.referenceValue)}matches(e){let t=i$.comparator(e.key,this.key);return this.matchesComparison(t)}}class sO extends sC{constructor(e,t){super(e,"in",t),this.keys=sx("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class sP extends sC{constructor(e,t){super(e,"not-in",t),this.keys=sx("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function sx(e,t){var r;return((null===(r=t.arrayValue)||void 0===r?void 0:r.values)||[]).map(e=>i$.fromName(e.referenceValue))}class sL extends sC{constructor(e,t){super(e,"array-contains",t)}matches(e){let t=e.data.field(this.field);return sp(t)&&sl(t.arrayValue,this.value)}}class sM extends sC{constructor(e,t){super(e,"in",t)}matches(e){let t=e.data.field(this.field);return null!==t&&sl(this.value.arrayValue,t)}}class sF extends sC{constructor(e,t){super(e,"not-in",t)}matches(e){if(sl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let t=e.data.field(this.field);return null!==t&&!sl(this.value.arrayValue,t)}}class sU extends sC{constructor(e,t){super(e,"array-contains-any",t)}matches(e){let t=e.data.field(this.field);return!(!sp(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>sl(this.value.arrayValue,e))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sV{constructor(e,t=null,r=[],n=[],i=null,s=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=n,this.limit=i,this.startAt=s,this.endAt=a,this.ft=null}}function sj(e,t=null,r=[],n=[],i=null,s=null,a=null){return new sV(e,t,r,n,i,s,a)}function s$(e){let t=e;if(null===t.ft){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:"+t.filters.map(e=>(function e(t){if(t instanceof sC)return t.field.canonicalString()+t.op.toString()+sh(t.value);if(sR(t)&&sN(t))return t.filters.map(t=>e(t)).join(",");{let r=t.filters.map(t=>e(t)).join(",");return`${t.op}(${r})`}})(e)).join(",")+"|ob:"+t.orderBy.map(e=>e.field.canonicalString()+e.dir).join(","),null==t.limit||(e+="|l:"+t.limit),t.startAt&&(e+="|lb:"+(t.startAt.inclusive?"b:":"a:")+t.startAt.position.map(e=>sh(e)).join(",")),t.endAt&&(e+="|ub:"+(t.endAt.inclusive?"a:":"b:")+t.endAt.position.map(e=>sh(e)).join(",")),t.ft=e}return t.ft}function sz(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<e.orderBy.length;i++){var r,n;if(r=e.orderBy[i],n=t.orderBy[i],!(r.dir===n.dir&&r.field.isEqual(n.field)))return!1}if(e.filters.length!==t.filters.length)return!1;for(let r=0;r<e.filters.length;r++)if(!function e(t,r){return t instanceof sC?r instanceof sC&&t.op===r.op&&t.field.isEqual(r.field)&&so(t.value,r.value):t instanceof sA?r instanceof sA&&t.op===r.op&&t.filters.length===r.filters.length&&t.filters.reduce((t,n,i)=>t&&e(n,r.filters[i]),!0):void ib()}(e.filters[r],t.filters[r]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!sT(e.startAt,t.startAt)&&sT(e.endAt,t.endAt)}function sB(e){return i$.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sq{constructor(e,t=null,r=[],n=[],i=null,s="F",a=null,o=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=n,this.limit=i,this.limitType=s,this.startAt=a,this.endAt=o,this.dt=null,this._t=null,this.startAt,this.endAt}}function sH(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function sG(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function sK(e){for(let t of e.filters){let e=t.getFirstInequalityField();if(null!==e)return e}return null}function sW(e){return null!==e.collectionGroup}function sQ(e){let t=e;if(null===t.dt){t.dt=[];let e=sK(t),r=sG(t);if(null!==e&&null===r)e.isKeyField()||t.dt.push(new sS(e)),t.dt.push(new sS(ij.keyField(),"asc"));else{let e=!1;for(let r of t.explicitOrderBy)t.dt.push(r),r.field.isKeyField()&&(e=!0);if(!e){let e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.dt.push(new sS(ij.keyField(),e))}}}return t.dt}function sX(e){let t=e;if(!t._t){if("F"===t.limitType)t._t=sj(t.path,t.collectionGroup,sQ(t),t.filters,t.limit,t.startAt,t.endAt);else{let e=[];for(let r of sQ(t)){let t="desc"===r.dir?"asc":"desc";e.push(new sS(r.field,t))}let r=t.endAt?new sI(t.endAt.position,t.endAt.inclusive):null,n=t.startAt?new sI(t.startAt.position,t.startAt.inclusive):null;t._t=sj(t.path,t.collectionGroup,e,t.filters,t.limit,r,n)}}return t._t}function sJ(e,t){t.getFirstInequalityField(),sK(e);let r=e.filters.concat([t]);return new sq(e.path,e.collectionGroup,e.explicitOrderBy.slice(),r,e.limit,e.limitType,e.startAt,e.endAt)}function sY(e,t,r){return new sq(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,r,e.startAt,e.endAt)}function sZ(e,t){return sz(sX(e),sX(t))&&e.limitType===t.limitType}function s0(e){return`${s$(sX(e))}|lt:${e.limitType}`}function s1(e){var t;let r;return`Query(target=${r=(t=sX(e)).path.canonicalString(),null!==t.collectionGroup&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(e=>(function e(t){return t instanceof sC?`${t.field.canonicalString()} ${t.op} ${sh(t.value)}`:t instanceof sA?t.op.toString()+" {"+t.getFilters().map(e).join(" ,")+"}":"Filter"})(e)).join(", ")}]`),null==t.limit||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(e=>`${e.field.canonicalString()} (${e.dir})`).join(", ")}]`),t.startAt&&(r+=", startAt: "+(t.startAt.inclusive?"b:":"a:")+t.startAt.position.map(e=>sh(e)).join(",")),t.endAt&&(r+=", endAt: "+(t.endAt.inclusive?"a:":"b:")+t.endAt.position.map(e=>sh(e)).join(",")),`Target(${r})`}; limitType=${e.limitType})`}function s2(e,t){return t.isFoundDocument()&&function(e,t){let r=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(r):i$.isDocumentKey(e.path)?e.path.isEqual(r):e.path.isImmediateParentOf(r)}(e,t)&&function(e,t){for(let r of sQ(e))if(!r.field.isKeyField()&&null===t.data.field(r.field))return!1;return!0}(e,t)&&function(e,t){for(let r of e.filters)if(!r.matches(t))return!1;return!0}(e,t)&&(!e.startAt||!!function(e,t,r){let n=s_(e,t,r);return e.inclusive?n<=0:n<0}(e.startAt,sQ(e),t))&&(!e.endAt||!!function(e,t,r){let n=s_(e,t,r);return e.inclusive?n>=0:n>0}(e.endAt,sQ(e),t))}function s9(e){return(t,r)=>{let n=!1;for(let i of sQ(e)){let e=function(e,t,r){let n=e.field.isKeyField()?i$.comparator(t.key,r.key):function(e,t,r){let n=t.data.field(e),i=r.data.field(e);return null!==n&&null!==i?su(n,i):ib()}(e.field,t,r);switch(e.dir){case"asc":return n;case"desc":return -1*n;default:return ib()}}(i,t,r);if(0!==e)return e;n=n||i.field.isKeyField()}return 0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s4{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){let t=this.mapKeyFn(e),r=this.inner[t];if(void 0!==r){for(let[t,n]of r)if(this.equalsFn(t,e))return n}}has(e){return void 0!==this.get(e)}set(e,t){let r=this.mapKeyFn(e),n=this.inner[r];if(void 0===n)return this.inner[r]=[[e,t]],void this.innerSize++;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return void(n[r]=[e,t]);n.push([e,t]),this.innerSize++}delete(e){let t=this.mapKeyFn(e),r=this.inner[t];if(void 0===r)return!1;for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return 1===r.length?delete this.inner[t]:r.splice(n,1),this.innerSize--,!0;return!1}forEach(e){iX(this.inner,(t,r)=>{for(let[t,n]of r)e(t,n)})}isEmpty(){return iJ(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let s5=new iY(i$.comparator),s6=new iY(i$.comparator);function s3(...e){let t=s6;for(let r of e)t=t.insert(r.key,r);return t}function s7(e){let t=s6;return e.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function s8(){return new s4(e=>e.toString(),(e,t)=>e.isEqual(t))}let ae=new iY(i$.comparator),at=new i1(i$.comparator);function ar(...e){let t=at;for(let r of e)t=t.add(r);return t}let an=new i1(iP);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ai(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:iW(t)?"-0":t}}function as(e){return{integerValue:""+e}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{constructor(){this._=void 0}}function ao(e,t){return e instanceof af?sf(t)||t&&"doubleValue"in t?t:{integerValue:0}:null}class al extends aa{}class au extends aa{constructor(e){super(),this.elements=e}}function ac(e,t){let r=am(t);for(let t of e.elements)r.some(e=>so(e,t))||r.push(t);return{arrayValue:{values:r}}}class ah extends aa{constructor(e){super(),this.elements=e}}function ad(e,t){let r=am(t);for(let t of e.elements)r=r.filter(e=>!so(e,t));return{arrayValue:{values:r}}}class af extends aa{constructor(e,t){super(),this.serializer=e,this.wt=t}}function ap(e){return i7(e.integerValue||e.doubleValue)}function am(e){return sp(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}class ag{constructor(e,t){this.version=e,this.transformResults=t}}class ay{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new ay}static exists(e){return new ay(void 0,e)}static updateTime(e){return new ay(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function av(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class aw{}function ab(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new aA(e.key,ay.none()):new a_(e.key,e.data,ay.none());{let r=e.data,n=sb.empty(),i=new i1(ij.comparator);for(let e of t.fields)if(!i.has(e)){let t=r.field(e);null===t&&e.length>1&&(e=e.popLast(),t=r.field(e)),null===t?n.delete(e):n.set(e,t),i=i.add(e)}return new aT(e.key,n,new i9(i.toArray()),ay.none())}}function aE(e,t,r,n){return e instanceof a_?function(e,t,r,n){if(!av(e.precondition,t))return r;let i=e.value.clone(),s=aC(e.fieldTransforms,n,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,r,n):e instanceof aT?function(e,t,r,n){if(!av(e.precondition,t))return r;let i=aC(e.fieldTransforms,n,t),s=t.data;return(s.setAll(aS(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===r)?null:r.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map(e=>e.field))}(e,t,r,n):av(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):r}function aI(e,t){var r,n;return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(r=e.fieldTransforms,n=t.fieldTransforms,!!(void 0===r&&void 0===n||!(!r||!n)&&ix(r,n,(e,t)=>{var r,n;return e.field.isEqual(t.field)&&(r=e.transform,n=t.transform,r instanceof au&&n instanceof au||r instanceof ah&&n instanceof ah?ix(r.elements,n.elements,so):r instanceof af&&n instanceof af?so(r.wt,n.wt):r instanceof al&&n instanceof al)})))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class a_ extends aw{constructor(e,t,r,n=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=n,this.type=0}getFieldMask(){return null}}class aT extends aw{constructor(e,t,r,n,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=n,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function aS(e){let t=new Map;return e.fieldMask.fields.forEach(r=>{if(!r.isEmpty()){let n=e.data.field(r);t.set(r,n)}}),t}function ak(e,t,r){var n;let i=new Map;e.length===r.length||ib();for(let s=0;s<r.length;s++){let a=e[s],o=a.transform,l=t.data.field(a.field);i.set(a.field,(n=r[s],o instanceof au?ac(o,l):o instanceof ah?ad(o,l):n))}return i}function aC(e,t,r){let n=new Map;for(let i of e){let e=i.transform,s=r.data.field(i.field);n.set(i.field,e instanceof al?function(e,t){let r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&se(t)&&(t=st(t)),t&&(r.fields.__previous_value__=t),{mapValue:r}}(t,s):e instanceof au?ac(e,s):e instanceof ah?ad(e,s):function(e,t){let r=ao(e,t),n=ap(r)+ap(e.wt);return sf(r)&&sf(e.wt)?as(n):ai(e.serializer,n)}(e,s))}return n}class aA extends aw{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class aN extends aw{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aR{constructor(e,t,r,n){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=n}applyToRemoteDocument(e,t){let r=t.mutationResults;for(let t=0;t<this.mutations.length;t++){let i=this.mutations[t];if(i.key.isEqual(e.key)){var n;n=r[t],i instanceof a_?function(e,t,r){let n=e.value.clone(),i=ak(e.fieldTransforms,t,r.transformResults);n.setAll(i),t.convertToFoundDocument(r.version,n).setHasCommittedMutations()}(i,e,n):i instanceof aT?function(e,t,r){if(!av(e.precondition,t))return void t.convertToUnknownDocument(r.version);let n=ak(e.fieldTransforms,t,r.transformResults),i=t.data;i.setAll(aS(e)),i.setAll(n),t.convertToFoundDocument(r.version,i).setHasCommittedMutations()}(i,e,n):function(e,t,r){t.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}}}applyToLocalView(e,t){for(let r of this.baseMutations)r.key.isEqual(e.key)&&(t=aE(r,e,t,this.localWriteTime));for(let r of this.mutations)r.key.isEqual(e.key)&&(t=aE(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){let r=s8();return this.mutations.forEach(n=>{let i=e.get(n.key),s=i.overlayedDocument,a=this.applyToLocalView(s,i.mutatedFields);a=t.has(n.key)?null:a;let o=ab(s,a);null!==o&&r.set(n.key,o),s.isValidDocument()||s.convertToNoDocument(iM.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),ar())}isEqual(e){return this.batchId===e.batchId&&ix(this.mutations,e.mutations,(e,t)=>aI(e,t))&&ix(this.baseMutations,e.baseMutations,(e,t)=>aI(e,t))}}class aD{constructor(e,t,r,n){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=n}static from(e,t,r){e.mutations.length===r.length||ib();let n=ae,i=e.mutations;for(let e=0;e<i.length;e++)n=n.insert(i[e].key,r[e].version);return new aD(e,t,r,n)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aO{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aP{constructor(e,t){this.count=e,this.unchangedNames=t}}function ax(e){if(void 0===e)return iy("GRPC error has no .code"),iE.UNKNOWN;switch(e){case h.OK:return iE.OK;case h.CANCELLED:return iE.CANCELLED;case h.UNKNOWN:return iE.UNKNOWN;case h.DEADLINE_EXCEEDED:return iE.DEADLINE_EXCEEDED;case h.RESOURCE_EXHAUSTED:return iE.RESOURCE_EXHAUSTED;case h.INTERNAL:return iE.INTERNAL;case h.UNAVAILABLE:return iE.UNAVAILABLE;case h.UNAUTHENTICATED:return iE.UNAUTHENTICATED;case h.INVALID_ARGUMENT:return iE.INVALID_ARGUMENT;case h.NOT_FOUND:return iE.NOT_FOUND;case h.ALREADY_EXISTS:return iE.ALREADY_EXISTS;case h.PERMISSION_DENIED:return iE.PERMISSION_DENIED;case h.FAILED_PRECONDITION:return iE.FAILED_PRECONDITION;case h.ABORTED:return iE.ABORTED;case h.OUT_OF_RANGE:return iE.OUT_OF_RANGE;case h.UNIMPLEMENTED:return iE.UNIMPLEMENTED;case h.DATA_LOSS:return iE.DATA_LOSS;default:return ib()}}(d=h||(h={}))[d.OK=0]="OK",d[d.CANCELLED=1]="CANCELLED",d[d.UNKNOWN=2]="UNKNOWN",d[d.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",d[d.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",d[d.NOT_FOUND=5]="NOT_FOUND",d[d.ALREADY_EXISTS=6]="ALREADY_EXISTS",d[d.PERMISSION_DENIED=7]="PERMISSION_DENIED",d[d.UNAUTHENTICATED=16]="UNAUTHENTICATED",d[d.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",d[d.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",d[d.ABORTED=10]="ABORTED",d[d.OUT_OF_RANGE=11]="OUT_OF_RANGE",d[d.UNIMPLEMENTED=12]="UNIMPLEMENTED",d[d.INTERNAL=13]="INTERNAL",d[d.UNAVAILABLE=14]="UNAVAILABLE",d[d.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aL{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return aM}static getOrCreateInstance(){return null===aM&&(aM=new aL),aM}onExistenceFilterMismatch(e){let t=Symbol();return this.onExistenceFilterMismatchCallbacks.set(t,e),()=>this.onExistenceFilterMismatchCallbacks.delete(t)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(t=>t(e))}}let aM=null,aF=new iu([4294967295,4294967295],0);function aU(e){let t=(new TextEncoder).encode(e),r=new il;return r.update(t),new Uint8Array(r.digest())}function aV(e){let t=new DataView(e.buffer),r=t.getUint32(0,!0),n=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new iu([r,n],0),new iu([i,s],0)]}class aj{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new a$(`Invalid padding: ${t}`);if(r<0||e.length>0&&0===this.hashCount)throw new a$(`Invalid hash count: ${r}`);if(0===e.length&&0!==t)throw new a$(`Invalid padding when bitmap length is 0: ${t}`);this.yt=8*e.length-t,this.It=iu.fromNumber(this.yt)}Tt(e,t,r){let n=e.add(t.multiply(iu.fromNumber(r)));return 1===n.compare(aF)&&(n=new iu([n.getBits(0),n.getBits(1)],0)),n.modulo(this.It).toNumber()}Et(e){return 0!=(this.bitmap[Math.floor(e/8)]&1<<e%8)}At(e){if(0===this.yt)return!1;let t=aU(e),[r,n]=aV(t);for(let e=0;e<this.hashCount;e++){let t=this.Tt(r,n,e);if(!this.Et(t))return!1}return!0}static create(e,t,r){let n=new Uint8Array(Math.ceil(e/8)),i=new aj(n,e%8==0?0:8-e%8,t);return r.forEach(e=>i.insert(e)),i}insert(e){if(0===this.yt)return;let t=aU(e),[r,n]=aV(t);for(let e=0;e<this.hashCount;e++){let t=this.Tt(r,n,e);this.Rt(t)}}Rt(e){this.bitmap[Math.floor(e/8)]|=1<<e%8}}class a$ extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class az{constructor(e,t,r,n,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=n,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){let n=new Map;return n.set(e,aB.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new az(iM.min(),n,new iY(iP),s5,ar())}}class aB{constructor(e,t,r,n,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=n,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new aB(r,t,ar(),ar(),ar())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aq{constructor(e,t,r,n){this.vt=e,this.removedTargetIds=t,this.key=r,this.Pt=n}}class aH{constructor(e,t){this.targetId=e,this.bt=t}}class aG{constructor(e,t,r=i5.EMPTY_BYTE_STRING,n=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=n}}class aK{constructor(){this.Vt=0,this.St=aX(),this.Dt=i5.EMPTY_BYTE_STRING,this.Ct=!1,this.xt=!0}get current(){return this.Ct}get resumeToken(){return this.Dt}get Nt(){return 0!==this.Vt}get kt(){return this.xt}Mt(e){e.approximateByteSize()>0&&(this.xt=!0,this.Dt=e)}Ot(){let e=ar(),t=ar(),r=ar();return this.St.forEach((n,i)=>{switch(i){case 0:e=e.add(n);break;case 2:t=t.add(n);break;case 1:r=r.add(n);break;default:ib()}}),new aB(this.Dt,this.Ct,e,t,r)}$t(){this.xt=!1,this.St=aX()}Ft(e,t){this.xt=!0,this.St=this.St.insert(e,t)}Bt(e){this.xt=!0,this.St=this.St.remove(e)}Lt(){this.Vt+=1}qt(){this.Vt-=1}Ut(){this.xt=!0,this.Ct=!0}}class aW{constructor(e){this.Kt=e,this.Gt=new Map,this.Qt=s5,this.jt=aQ(),this.zt=new iY(iP)}Wt(e){for(let t of e.vt)e.Pt&&e.Pt.isFoundDocument()?this.Ht(t,e.Pt):this.Jt(t,e.key,e.Pt);for(let t of e.removedTargetIds)this.Jt(t,e.key,e.Pt)}Yt(e){this.forEachTarget(e,t=>{let r=this.Xt(t);switch(e.state){case 0:this.Zt(t)&&r.Mt(e.resumeToken);break;case 1:r.qt(),r.Nt||r.$t(),r.Mt(e.resumeToken);break;case 2:r.qt(),r.Nt||this.removeTarget(t);break;case 3:this.Zt(t)&&(r.Ut(),r.Mt(e.resumeToken));break;case 4:this.Zt(t)&&(this.te(t),r.Mt(e.resumeToken));break;default:ib()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Gt.forEach((e,r)=>{this.Zt(r)&&t(r)})}ee(e){var t;let r=e.targetId,n=e.bt.count,i=this.ne(r);if(i){let s=i.target;if(sB(s)){if(0===n){let e=new i$(s.path);this.Jt(r,e,sE.newNoDocument(e,iM.min()))}else 1===n||ib()}else{let i=this.se(r);if(i!==n){let n=this.ie(e,i);0!==n&&(this.te(r),this.zt=this.zt.insert(r,2===n?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch")),null===(t=aL.instance)||void 0===t||t.notifyOnExistenceFilterMismatch(function(e,t,r){var n,i,s,a,o,l;let u={localCacheCount:t,existenceFilterCount:r.count},c=r.unchangedNames;return c&&(u.bloomFilter={applied:0===e,hashCount:null!==(n=null==c?void 0:c.hashCount)&&void 0!==n?n:0,bitmapLength:null!==(a=null===(s=null===(i=null==c?void 0:c.bits)||void 0===i?void 0:i.bitmap)||void 0===s?void 0:s.length)&&void 0!==a?a:0,padding:null!==(l=null===(o=null==c?void 0:c.bits)||void 0===o?void 0:o.padding)&&void 0!==l?l:0}),u}(n,i,e.bt))}}}}ie(e,t){let r,n;let{unchangedNames:i,count:s}=e.bt;if(!i||!i.bits)return 1;let{bits:{bitmap:a="",padding:o=0},hashCount:l=0}=i;try{r=i8(a).toUint8Array()}catch(e){if(e instanceof i4)return iv("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw e}try{n=new aj(r,o,l)}catch(e){return iv(e instanceof a$?"BloomFilter error: ":"Applying bloom filter failed: ",e),1}return 0===n.yt?1:s!==t-this.re(e.targetId,n)?2:0}re(e,t){let r=this.Kt.getRemoteKeysForTarget(e),n=0;return r.forEach(r=>{let i=this.Kt.oe(),s=`projects/${i.projectId}/databases/${i.database}/documents/${r.path.canonicalString()}`;t.At(s)||(this.Jt(e,r,null),n++)}),n}ue(e){let t=new Map;this.Gt.forEach((r,n)=>{let i=this.ne(n);if(i){if(r.current&&sB(i.target)){let t=new i$(i.target.path);null!==this.Qt.get(t)||this.ce(n,t)||this.Jt(n,t,sE.newNoDocument(t,e))}r.kt&&(t.set(n,r.Ot()),r.$t())}});let r=ar();this.jt.forEach((e,t)=>{let n=!0;t.forEachWhile(e=>{let t=this.ne(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(n=!1,!1)}),n&&(r=r.add(e))}),this.Qt.forEach((t,r)=>r.setReadTime(e));let n=new az(e,t,this.zt,this.Qt,r);return this.Qt=s5,this.jt=aQ(),this.zt=new iY(iP),n}Ht(e,t){if(!this.Zt(e))return;let r=this.ce(e,t.key)?2:0;this.Xt(e).Ft(t.key,r),this.Qt=this.Qt.insert(t.key,t),this.jt=this.jt.insert(t.key,this.ae(t.key).add(e))}Jt(e,t,r){if(!this.Zt(e))return;let n=this.Xt(e);this.ce(e,t)?n.Ft(t,1):n.Bt(t),this.jt=this.jt.insert(t,this.ae(t).delete(e)),r&&(this.Qt=this.Qt.insert(t,r))}removeTarget(e){this.Gt.delete(e)}se(e){let t=this.Xt(e).Ot();return this.Kt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Lt(e){this.Xt(e).Lt()}Xt(e){let t=this.Gt.get(e);return t||(t=new aK,this.Gt.set(e,t)),t}ae(e){let t=this.jt.get(e);return t||(t=new i1(iP),this.jt=this.jt.insert(e,t)),t}Zt(e){let t=null!==this.ne(e);return t||ig("WatchChangeAggregator","Detected inactive target",e),t}ne(e){let t=this.Gt.get(e);return t&&t.Nt?null:this.Kt.he(e)}te(e){this.Gt.set(e,new aK),this.Kt.getRemoteKeysForTarget(e).forEach(t=>{this.Jt(e,t,null)})}ce(e,t){return this.Kt.getRemoteKeysForTarget(e).has(t)}}function aQ(){return new iY(i$.comparator)}function aX(){return new iY(i$.comparator)}let aJ={asc:"ASCENDING",desc:"DESCENDING"},aY={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},aZ={and:"AND",or:"OR"};class a0{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function a1(e,t){return e.useProto3Json||null==t?t:{value:t}}function a2(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function a9(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function a4(e){return e||ib(),iM.fromTimestamp(function(e){let t=i3(e);return new iL(t.seconds,t.nanos)}(e))}function a5(e,t){return new iU(["projects",e.projectId,"databases",e.database]).child("documents").child(t).canonicalString()}function a6(e){let t=iU.fromString(e);return os(t)||ib(),t}function a3(e,t){return a5(e.databaseId,t.path)}function a7(e,t){let r=a6(t);if(r.get(1)!==e.databaseId.projectId)throw new iI(iE.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+r.get(1)+" vs "+e.databaseId.projectId);if(r.get(3)!==e.databaseId.database)throw new iI(iE.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+r.get(3)+" vs "+e.databaseId.database);return new i$(ot(r))}function a8(e,t){return a5(e.databaseId,t)}function oe(e){return new iU(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function ot(e){return e.length>4&&"documents"===e.get(4)||ib(),e.popFirst(5)}function or(e,t,r){return{name:a3(e,t),fields:r.value.mapValue.fields}}function on(e){return{fieldPath:e.canonicalString()}}function oi(e){return ij.fromServerFormat(e.fieldPath)}function os(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(e,t,r,n,i=iM.min(),s=iM.min(),a=i5.EMPTY_BYTE_STRING,o=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=n,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=a,this.expectedCount=o}withSequenceNumber(e){return new oa(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new oa(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new oa(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new oa(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(e){this.le=e}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(){}_e(e,t){this.we(e,t),t.me()}we(e,t){if("nullValue"in e)this.ge(t,5);else if("booleanValue"in e)this.ge(t,10),t.ye(e.booleanValue?1:0);else if("integerValue"in e)this.ge(t,15),t.ye(i7(e.integerValue));else if("doubleValue"in e){let r=i7(e.doubleValue);isNaN(r)?this.ge(t,13):(this.ge(t,15),iW(r)?t.ye(0):t.ye(r))}else if("timestampValue"in e){let r=e.timestampValue;this.ge(t,20),"string"==typeof r?t.pe(r):(t.pe(`${r.seconds||""}`),t.ye(r.nanos||0))}else if("stringValue"in e)this.Ie(e.stringValue,t),this.Te(t);else if("bytesValue"in e)this.ge(t,30),t.Ee(i8(e.bytesValue)),this.Te(t);else if("referenceValue"in e)this.Ae(e.referenceValue,t);else if("geoPointValue"in e){let r=e.geoPointValue;this.ge(t,45),t.ye(r.latitude||0),t.ye(r.longitude||0)}else"mapValue"in e?sw(e)?this.ge(t,Number.MAX_SAFE_INTEGER):(this.Re(e.mapValue,t),this.Te(t)):"arrayValue"in e?(this.ve(e.arrayValue,t),this.Te(t)):ib()}Ie(e,t){this.ge(t,25),this.Pe(e,t)}Pe(e,t){t.pe(e)}Re(e,t){let r=e.fields||{};for(let e of(this.ge(t,55),Object.keys(r)))this.Ie(e,t),this.we(r[e],t)}ve(e,t){let r=e.values||[];for(let e of(this.ge(t,50),r))this.we(e,t)}Ae(e,t){this.ge(t,37),i$.fromName(e).path.forEach(e=>{this.ge(t,60),this.Pe(e,t)})}ge(e,t){e.ye(t)}Te(e){e.ye(2)}}ol.be=new ol;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou{constructor(){this.sn=new oc}addToCollectionParentIndex(e,t){return this.sn.add(t),iH.resolve()}getCollectionParents(e,t){return iH.resolve(this.sn.getEntries(t))}addFieldIndex(e,t){return iH.resolve()}deleteFieldIndex(e,t){return iH.resolve()}getDocumentsMatchingTarget(e,t){return iH.resolve(null)}getIndexType(e,t){return iH.resolve(0)}getFieldIndexes(e,t){return iH.resolve([])}getNextCollectionGroupToUpdate(e){return iH.resolve(null)}getMinOffset(e,t){return iH.resolve(iz.min())}getMinOffsetFromCollectionGroup(e,t){return iH.resolve(iz.min())}updateCollectionGroup(e,t,r){return iH.resolve()}updateIndexEntries(e,t){return iH.resolve()}}class oc{constructor(){this.index={}}add(e){let t=e.lastSegment(),r=e.popLast(),n=this.index[t]||new i1(iU.comparator),i=!n.has(r);return this.index[t]=n.add(r),i}has(e){let t=e.lastSegment(),r=e.popLast(),n=this.index[t];return n&&n.has(r)}getEntries(e){return(this.index[e]||new i1(iU.comparator)).toArray()}}new Uint8Array(0);class oh{constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new oh(e,oh.DEFAULT_COLLECTION_PERCENTILE,oh.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */oh.DEFAULT_COLLECTION_PERCENTILE=10,oh.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,oh.DEFAULT=new oh(41943040,oh.DEFAULT_COLLECTION_PERCENTILE,oh.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),oh.DISABLED=new oh(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class od{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static Nn(){return new od(0)}static kn(){return new od(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{constructor(){this.changes=new s4(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,sE.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();let r=this.changes.get(t);return void 0!==r?iH.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class op{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class om{constructor(e,t,r,n){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=n}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(n=>(r=n,this.remoteDocumentCache.getEntry(e,t))).next(e=>(null!==r&&aE(r.mutation,e,i9.empty(),iL.now()),e))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.getLocalViewOfDocuments(e,t,ar()).next(()=>t))}getLocalViewOfDocuments(e,t,r=ar()){let n=s8();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,r).next(e=>{let t=s3();return e.forEach((e,r)=>{t=t.insert(e,r.overlayedDocument)}),t}))}getOverlayedDocuments(e,t){let r=s8();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,ar()))}populateOverlays(e,t,r){let n=[];return r.forEach(e=>{t.has(e)||n.push(e)}),this.documentOverlayCache.getOverlays(e,n).next(e=>{e.forEach((e,r)=>{t.set(e,r)})})}computeViews(e,t,r,n){let i=s5,s=s8(),a=s8();return t.forEach((e,t)=>{let a=r.get(t.key);n.has(t.key)&&(void 0===a||a.mutation instanceof aT)?i=i.insert(t.key,t):void 0!==a?(s.set(t.key,a.mutation.getFieldMask()),aE(a.mutation,t,a.mutation.getFieldMask(),iL.now())):s.set(t.key,i9.empty())}),this.recalculateAndSaveOverlays(e,i).next(e=>(e.forEach((e,t)=>s.set(e,t)),t.forEach((e,t)=>{var r;return a.set(e,new op(t,null!==(r=s.get(e))&&void 0!==r?r:null))}),a))}recalculateAndSaveOverlays(e,t){let r=s8(),n=new iY((e,t)=>e-t),i=ar();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>{for(let i of e)i.keys().forEach(e=>{let s=t.get(e);if(null===s)return;let a=r.get(e)||i9.empty();a=i.applyToLocalView(s,a),r.set(e,a);let o=(n.get(i.batchId)||ar()).add(e);n=n.insert(i.batchId,o)})}).next(()=>{let s=[],a=n.getReverseIterator();for(;a.hasNext();){let n=a.getNext(),o=n.key,l=n.value,u=s8();l.forEach(e=>{if(!i.has(e)){let n=ab(t.get(e),r.get(e));null!==n&&u.set(e,n),i=i.add(e)}}),s.push(this.documentOverlayCache.saveOverlays(e,o,u))}return iH.waitFor(s)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.recalculateAndSaveOverlays(e,t))}getDocumentsMatchingQuery(e,t,r){return i$.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):sW(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r):this.getDocumentsMatchingCollectionQuery(e,t,r)}getNextDocuments(e,t,r,n){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,n).next(i=>{let s=n-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,n-i.size):iH.resolve(s8()),a=-1,o=i;return s.next(t=>iH.forEach(t,(t,r)=>(a<r.largestBatchId&&(a=r.largestBatchId),i.get(t)?iH.resolve():this.remoteDocumentCache.getEntry(e,t).next(e=>{o=o.insert(t,e)}))).next(()=>this.populateOverlays(e,t,i)).next(()=>this.computeViews(e,o,t,ar())).next(e=>({batchId:a,changes:s7(e)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new i$(t)).next(e=>{let t=s3();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}getDocumentsMatchingCollectionGroupQuery(e,t,r){let n=t.collectionGroup,i=s3();return this.indexManager.getCollectionParents(e,n).next(s=>iH.forEach(s,s=>{var a;let o=(a=s.child(n),new sq(a,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt));return this.getDocumentsMatchingCollectionQuery(e,o,r).next(e=>{e.forEach((e,t)=>{i=i.insert(e,t)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,t,r){let n;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(i=>(n=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,n))).next(e=>{n.forEach((t,r)=>{let n=r.getKey();null===e.get(n)&&(e=e.insert(n,sE.newInvalidDocument(n)))});let r=s3();return e.forEach((e,i)=>{let s=n.get(e);void 0!==s&&aE(s.mutation,i,i9.empty(),iL.now()),s2(t,i)&&(r=r.insert(e,i))}),r})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class og{constructor(e){this.serializer=e,this.us=new Map,this.cs=new Map}getBundleMetadata(e,t){return iH.resolve(this.us.get(t))}saveBundleMetadata(e,t){return this.us.set(t.id,{id:t.id,version:t.version,createTime:a4(t.createTime)}),iH.resolve()}getNamedQuery(e,t){return iH.resolve(this.cs.get(t))}saveNamedQuery(e,t){return this.cs.set(t.name,{name:t.name,query:function(e){let t=function(e){var t,r,n,i,s,a,o,l;let u,c=function(e){let t=a6(e);return 4===t.length?iU.emptyPath():ot(t)}(e.parent),h=e.structuredQuery,d=h.from?h.from.length:0,f=null;if(d>0){1===d||ib();let e=h.from[0];e.allDescendants?f=e.collectionId:c=c.child(e.collectionId)}let p=[];h.where&&(p=function(e){var t;let r=function e(t){return void 0!==t.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":let t=oi(e.unaryFilter.field);return sC.create(t,"==",{doubleValue:NaN});case"IS_NULL":let r=oi(e.unaryFilter.field);return sC.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let n=oi(e.unaryFilter.field);return sC.create(n,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let i=oi(e.unaryFilter.field);return sC.create(i,"!=",{nullValue:"NULL_VALUE"});default:return ib()}}(t):void 0!==t.fieldFilter?sC.create(oi(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ib()}}(t.fieldFilter.op),t.fieldFilter.value):void 0!==t.compositeFilter?sA.create(t.compositeFilter.filters.map(t=>e(t)),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return ib()}}(t.compositeFilter.op)):ib()}(e);return r instanceof sA&&sR(t=r)&&sN(t)?r.getFilters():[r]}(h.where));let m=[];h.orderBy&&(m=h.orderBy.map(e=>new sS(oi(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))));let g=null;h.limit&&(g=null==(u="object"==typeof(t=h.limit)?t.value:t)?null:u);let y=null;h.startAt&&(y=function(e){let t=!!e.before,r=e.values||[];return new sI(r,t)}(h.startAt));let v=null;return h.endAt&&(v=function(e){let t=!e.before,r=e.values||[];return new sI(r,t)}(h.endAt)),r=c,n=f,i=m,s=p,a=g,o=y,l=v,new sq(r,n,i,s,a,"F",o,l)}({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?sY(t,t.limit,"L"):t}(t.bundledQuery),readTime:a4(t.readTime)}),iH.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oy{constructor(){this.overlays=new iY(i$.comparator),this.hs=new Map}getOverlay(e,t){return iH.resolve(this.overlays.get(t))}getOverlays(e,t){let r=s8();return iH.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&r.set(t,e)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((r,n)=>{this.de(e,t,n)}),iH.resolve()}removeOverlaysForBatchId(e,t,r){let n=this.hs.get(r);return void 0!==n&&(n.forEach(e=>this.overlays=this.overlays.remove(e)),this.hs.delete(r)),iH.resolve()}getOverlaysForCollection(e,t,r){let n=s8(),i=t.length+1,s=new i$(t.child("")),a=this.overlays.getIteratorFrom(s);for(;a.hasNext();){let e=a.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>r&&n.set(e.getKey(),e)}return iH.resolve(n)}getOverlaysForCollectionGroup(e,t,r,n){let i=new iY((e,t)=>e-t),s=this.overlays.getIterator();for(;s.hasNext();){let e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>r){let t=i.get(e.largestBatchId);null===t&&(t=s8(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}let a=s8(),o=i.getIterator();for(;o.hasNext()&&(o.getNext().value.forEach((e,t)=>a.set(e,t)),!(a.size()>=n)););return iH.resolve(a)}de(e,t,r){let n=this.overlays.get(r.key);if(null!==n){let e=this.hs.get(n.largestBatchId).delete(r.key);this.hs.set(n.largestBatchId,e)}this.overlays=this.overlays.insert(r.key,new aO(t,r));let i=this.hs.get(t);void 0===i&&(i=ar(),this.hs.set(t,i)),this.hs.set(t,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ov{constructor(){this.ls=new i1(ow.fs),this.ds=new i1(ow._s)}isEmpty(){return this.ls.isEmpty()}addReference(e,t){let r=new ow(e,t);this.ls=this.ls.add(r),this.ds=this.ds.add(r)}ws(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.gs(new ow(e,t))}ys(e,t){e.forEach(e=>this.removeReference(e,t))}ps(e){let t=new i$(new iU([])),r=new ow(t,e),n=new ow(t,e+1),i=[];return this.ds.forEachInRange([r,n],e=>{this.gs(e),i.push(e.key)}),i}Is(){this.ls.forEach(e=>this.gs(e))}gs(e){this.ls=this.ls.delete(e),this.ds=this.ds.delete(e)}Ts(e){let t=new i$(new iU([])),r=new ow(t,e),n=new ow(t,e+1),i=ar();return this.ds.forEachInRange([r,n],e=>{i=i.add(e.key)}),i}containsKey(e){let t=new ow(e,0),r=this.ls.firstAfterOrEqual(t);return null!==r&&e.isEqual(r.key)}}class ow{constructor(e,t){this.key=e,this.Es=t}static fs(e,t){return i$.comparator(e.key,t.key)||iP(e.Es,t.Es)}static _s(e,t){return iP(e.Es,t.Es)||i$.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ob{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.As=1,this.Rs=new i1(ow.fs)}checkEmpty(e){return iH.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,r,n){let i=this.As;this.As++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let s=new aR(i,t,r,n);for(let t of(this.mutationQueue.push(s),n))this.Rs=this.Rs.add(new ow(t.key,i)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return iH.resolve(s)}lookupMutationBatch(e,t){return iH.resolve(this.vs(t))}getNextMutationBatchAfterBatchId(e,t){let r=this.Ps(t+1),n=r<0?0:r;return iH.resolve(this.mutationQueue.length>n?this.mutationQueue[n]:null)}getHighestUnacknowledgedBatchId(){return iH.resolve(0===this.mutationQueue.length?-1:this.As-1)}getAllMutationBatches(e){return iH.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){let r=new ow(t,0),n=new ow(t,Number.POSITIVE_INFINITY),i=[];return this.Rs.forEachInRange([r,n],e=>{let t=this.vs(e.Es);i.push(t)}),iH.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new i1(iP);return t.forEach(e=>{let t=new ow(e,0),n=new ow(e,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([t,n],e=>{r=r.add(e.Es)})}),iH.resolve(this.bs(r))}getAllMutationBatchesAffectingQuery(e,t){let r=t.path,n=r.length+1,i=r;i$.isDocumentKey(i)||(i=i.child(""));let s=new ow(new i$(i),0),a=new i1(iP);return this.Rs.forEachWhile(e=>{let t=e.key.path;return!!r.isPrefixOf(t)&&(t.length===n&&(a=a.add(e.Es)),!0)},s),iH.resolve(this.bs(a))}bs(e){let t=[];return e.forEach(e=>{let r=this.vs(e);null!==r&&t.push(r)}),t}removeMutationBatch(e,t){0===this.Vs(t.batchId,"removed")||ib(),this.mutationQueue.shift();let r=this.Rs;return iH.forEach(t.mutations,n=>{let i=new ow(n.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,n.key)}).next(()=>{this.Rs=r})}Dn(e){}containsKey(e,t){let r=new ow(t,0),n=this.Rs.firstAfterOrEqual(r);return iH.resolve(t.isEqual(n&&n.key))}performConsistencyCheck(e){return this.mutationQueue.length,iH.resolve()}Vs(e,t){return this.Ps(e)}Ps(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}vs(e){let t=this.Ps(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oE{constructor(e){this.Ss=e,this.docs=new iY(i$.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){let r=t.key,n=this.docs.get(r),i=n?n.size:0,s=this.Ss(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){let t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){let r=this.docs.get(t);return iH.resolve(r?r.document.mutableCopy():sE.newInvalidDocument(t))}getEntries(e,t){let r=s5;return t.forEach(e=>{let t=this.docs.get(e);r=r.insert(e,t?t.document.mutableCopy():sE.newInvalidDocument(e))}),iH.resolve(r)}getDocumentsMatchingQuery(e,t,r,n){let i=s5,s=t.path,a=new i$(s.child("")),o=this.docs.getIteratorFrom(a);for(;o.hasNext();){let{key:e,value:{document:a}}=o.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||0>=function(e,t){let r=e.readTime.compareTo(t.readTime);return 0!==r?r:0!==(r=i$.comparator(e.documentKey,t.documentKey))?r:iP(e.largestBatchId,t.largestBatchId)}(new iz(a.readTime,a.key,-1),r)||(n.has(a.key)||s2(t,a))&&(i=i.insert(a.key,a.mutableCopy()))}return iH.resolve(i)}getAllFromCollectionGroup(e,t,r,n){ib()}Ds(e,t){return iH.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new oI(this)}getSize(e){return iH.resolve(this.size)}}class oI extends of{constructor(e){super(),this.rs=e}applyChanges(e){let t=[];return this.changes.forEach((r,n)=>{n.isValidDocument()?t.push(this.rs.addEntry(e,n)):this.rs.removeEntry(r)}),iH.waitFor(t)}getFromCache(e,t){return this.rs.getEntry(e,t)}getAllFromCache(e,t){return this.rs.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o_{constructor(e){this.persistence=e,this.Cs=new s4(e=>s$(e),sz),this.lastRemoteSnapshotVersion=iM.min(),this.highestTargetId=0,this.xs=0,this.Ns=new ov,this.targetCount=0,this.ks=od.Nn()}forEachTarget(e,t){return this.Cs.forEach((e,r)=>t(r)),iH.resolve()}getLastRemoteSnapshotVersion(e){return iH.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return iH.resolve(this.xs)}allocateTargetId(e){return this.highestTargetId=this.ks.next(),iH.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.xs&&(this.xs=t),iH.resolve()}$n(e){this.Cs.set(e.target,e);let t=e.targetId;t>this.highestTargetId&&(this.ks=new od(t),this.highestTargetId=t),e.sequenceNumber>this.xs&&(this.xs=e.sequenceNumber)}addTargetData(e,t){return this.$n(t),this.targetCount+=1,iH.resolve()}updateTargetData(e,t){return this.$n(t),iH.resolve()}removeTargetData(e,t){return this.Cs.delete(t.target),this.Ns.ps(t.targetId),this.targetCount-=1,iH.resolve()}removeTargets(e,t,r){let n=0,i=[];return this.Cs.forEach((s,a)=>{a.sequenceNumber<=t&&null===r.get(a.targetId)&&(this.Cs.delete(s),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),n++)}),iH.waitFor(i).next(()=>n)}getTargetCount(e){return iH.resolve(this.targetCount)}getTargetData(e,t){let r=this.Cs.get(t)||null;return iH.resolve(r)}addMatchingKeys(e,t,r){return this.Ns.ws(t,r),iH.resolve()}removeMatchingKeys(e,t,r){this.Ns.ys(t,r);let n=this.persistence.referenceDelegate,i=[];return n&&t.forEach(t=>{i.push(n.markPotentiallyOrphaned(e,t))}),iH.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Ns.ps(t),iH.resolve()}getMatchingKeysForTargetId(e,t){let r=this.Ns.Ts(t);return iH.resolve(r)}containsKey(e,t){return iH.resolve(this.Ns.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oT{constructor(e,t){var r;this.Ms={},this.overlays={},this.Os=new iK(0),this.$s=!1,this.$s=!0,this.referenceDelegate=e(this),this.Fs=new o_(this),this.indexManager=new ou,this.remoteDocumentCache=(r=e=>this.referenceDelegate.Bs(e),new oE(r)),this.serializer=new oo(t),this.Ls=new og(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.$s=!1,Promise.resolve()}get started(){return this.$s}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new oy,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Ms[e.toKey()];return r||(r=new ob(t,this.referenceDelegate),this.Ms[e.toKey()]=r),r}getTargetCache(){return this.Fs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ls}runTransaction(e,t,r){ig("MemoryPersistence","Starting transaction:",e);let n=new oS(this.Os.next());return this.referenceDelegate.qs(),r(n).next(e=>this.referenceDelegate.Us(n).next(()=>e)).toPromise().then(e=>(n.raiseOnCommittedEvent(),e))}Ks(e,t){return iH.or(Object.values(this.Ms).map(r=>()=>r.containsKey(e,t)))}}class oS extends iB{constructor(e){super(),this.currentSequenceNumber=e}}class ok{constructor(e){this.persistence=e,this.Gs=new ov,this.Qs=null}static js(e){return new ok(e)}get zs(){if(this.Qs)return this.Qs;throw ib()}addReference(e,t,r){return this.Gs.addReference(r,t),this.zs.delete(r.toString()),iH.resolve()}removeReference(e,t,r){return this.Gs.removeReference(r,t),this.zs.add(r.toString()),iH.resolve()}markPotentiallyOrphaned(e,t){return this.zs.add(t.toString()),iH.resolve()}removeTarget(e,t){this.Gs.ps(t.targetId).forEach(e=>this.zs.add(e.toString()));let r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.zs.add(e.toString()))}).next(()=>r.removeTargetData(e,t))}qs(){this.Qs=new Set}Us(e){let t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return iH.forEach(this.zs,r=>{let n=i$.fromPath(r);return this.Ws(e,n).next(e=>{e||t.removeEntry(n,iM.min())})}).next(()=>(this.Qs=null,t.apply(e)))}updateLimboDocument(e,t){return this.Ws(e,t).next(e=>{e?this.zs.delete(t.toString()):this.zs.add(t.toString())})}Bs(e){return 0}Ws(e,t){return iH.or([()=>iH.resolve(this.Gs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ks(e,t)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oC{constructor(e,t,r,n){this.targetId=e,this.fromCache=t,this.$i=r,this.Fi=n}static Bi(e,t){let r=ar(),n=ar();for(let e of t.docChanges)switch(e.type){case 0:r=r.add(e.doc.key);break;case 1:n=n.add(e.doc.key)}return new oC(e,t.fromCache,r,n)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oA{constructor(){this.Li=!1}initialize(e,t){this.qi=e,this.indexManager=t,this.Li=!0}getDocumentsMatchingQuery(e,t,r,n){return this.Ui(e,t).next(i=>i||this.Ki(e,t,n,r)).next(r=>r||this.Gi(e,t))}Ui(e,t){if(sH(t))return iH.resolve(null);let r=sX(t);return this.indexManager.getIndexType(e,r).next(n=>0===n?null:(null!==t.limit&&1===n&&(r=sX(t=sY(t,null,"F"))),this.indexManager.getDocumentsMatchingTarget(e,r).next(n=>{let i=ar(...n);return this.qi.getDocuments(e,i).next(n=>this.indexManager.getMinOffset(e,r).next(r=>{let s=this.Qi(t,n);return this.ji(t,s,i,r.readTime)?this.Ui(e,sY(t,null,"F")):this.zi(e,s,t,r)}))})))}Ki(e,t,r,n){return sH(t)||n.isEqual(iM.min())?this.Gi(e,t):this.qi.getDocuments(e,r).next(i=>{let s=this.Qi(t,i);return this.ji(t,s,r,n)?this.Gi(e,t):(im()<=eV.DEBUG&&ig("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),s1(t)),this.zi(e,s,t,function(e,t){let r=e.toTimestamp().seconds,n=e.toTimestamp().nanoseconds+1,i=iM.fromTimestamp(1e9===n?new iL(r+1,0):new iL(r,n));return new iz(i,i$.empty(),-1)}(n,0)))})}Qi(e,t){let r=new i1(s9(e));return t.forEach((t,n)=>{s2(e,n)&&(r=r.add(n))}),r}ji(e,t,r,n){if(null===e.limit)return!1;if(r.size!==t.size)return!0;let i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(n)>0)}Gi(e,t){return im()<=eV.DEBUG&&ig("QueryEngine","Using full collection scan to execute query:",s1(t)),this.qi.getDocumentsMatchingQuery(e,t,iz.min())}zi(e,t,r,n){return this.qi.getDocumentsMatchingQuery(e,r,n).next(e=>(t.forEach(t=>{e=e.insert(t.key,t)}),e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oN{constructor(e,t,r,n){this.persistence=e,this.Wi=t,this.serializer=n,this.Hi=new iY(iP),this.Ji=new s4(e=>s$(e),sz),this.Yi=new Map,this.Xi=e.getRemoteDocumentCache(),this.Fs=e.getTargetCache(),this.Ls=e.getBundleCache(),this.Zi(r)}Zi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new om(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Wi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Hi))}}async function oR(e,t){return await e.persistence.runTransaction("Handle user change","readonly",r=>{let n;return e.mutationQueue.getAllMutationBatches(r).next(i=>(n=i,e.Zi(t),e.mutationQueue.getAllMutationBatches(r))).next(t=>{let i=[],s=[],a=ar();for(let e of n)for(let t of(i.push(e.batchId),e.mutations))a=a.add(t.key);for(let e of t)for(let t of(s.push(e.batchId),e.mutations))a=a.add(t.key);return e.localDocuments.getDocuments(r,a).next(e=>({tr:e,removedBatchIds:i,addedBatchIds:s}))})})}function oD(e){return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Fs.getLastRemoteSnapshotVersion(t))}async function oO(e,t,r){let n=e,i=n.Hi.get(t);try{r||await n.persistence.runTransaction("Release target",r?"readwrite":"readwrite-primary",e=>n.persistence.referenceDelegate.removeTarget(e,i))}catch(e){if(!iG(e))throw e;ig("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}n.Hi=n.Hi.remove(t),n.Ji.delete(i.target)}function oP(e,t,r){let n=iM.min(),i=ar();return e.persistence.runTransaction("Execute query","readonly",s=>(function(e,t,r){let n=e.Ji.get(r);return void 0!==n?iH.resolve(e.Hi.get(n)):e.Fs.getTargetData(t,r)})(e,s,sX(t)).next(t=>{if(t)return n=t.lastLimboFreeSnapshotVersion,e.Fs.getMatchingKeysForTargetId(s,t.targetId).next(e=>{i=e})}).next(()=>e.Wi.getDocumentsMatchingQuery(s,t,r?n:iM.min(),r?i:ar())).next(r=>{var n;let s;return n=t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2)),s=e.Yi.get(n)||iM.min(),r.forEach((e,t)=>{t.readTime.compareTo(s)>0&&(s=t.readTime)}),e.Yi.set(n,s),{documents:r,sr:i}}))}class ox{constructor(){this.activeTargetIds=an}hr(e){this.activeTargetIds=this.activeTargetIds.add(e)}lr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ar(){let e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class oL{constructor(){this.Wr=new ox,this.Hr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e){return this.Wr.hr(e),this.Hr[e]||"not-current"}updateQueryState(e,t,r){this.Hr[e]=t}removeLocalQueryTarget(e){this.Wr.lr(e)}isLocalQueryTarget(e){return this.Wr.activeTargetIds.has(e)}clearQueryState(e){delete this.Hr[e]}getAllActiveQueryTargets(){return this.Wr.activeTargetIds}isActiveQueryTarget(e){return this.Wr.activeTargetIds.has(e)}start(){return this.Wr=new ox,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oM{Jr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oF{constructor(){this.Yr=()=>this.Xr(),this.Zr=()=>this.eo(),this.no=[],this.so()}Jr(e){this.no.push(e)}shutdown(){window.removeEventListener("online",this.Yr),window.removeEventListener("offline",this.Zr)}so(){window.addEventListener("online",this.Yr),window.addEventListener("offline",this.Zr)}Xr(){for(let e of(ig("ConnectivityMonitor","Network connectivity changed: AVAILABLE"),this.no))e(0)}eo(){for(let e of(ig("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE"),this.no))e(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oU=null;function oV(){return null===oU?oU=268435456+Math.round(2147483648*Math.random()):oU++,"0x"+oU.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oj={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o${constructor(e){this.io=e.io,this.ro=e.ro}oo(e){this.uo=e}co(e){this.ao=e}onMessage(e){this.ho=e}close(){this.ro()}send(e){this.io(e)}lo(){this.uo()}fo(e){this.ao(e)}_o(e){this.ho(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oz="WebChannelConnection";class oB extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;let t=e.ssl?"https":"http";this.wo=t+"://"+e.host,this.mo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get yo(){return!1}po(e,t,r,n,i){let s=oV(),a=this.Io(e,t);ig("RestConnection",`Sending RPC '${e}' ${s}:`,a,r);let o={};return this.To(o,n,i),this.Eo(e,a,o,r).then(t=>(ig("RestConnection",`Received RPC '${e}' ${s}: `,t),t),t=>{throw iv("RestConnection",`RPC '${e}' ${s} failed with error: `,t,"url: ",a,"request:",r),t})}Ao(e,t,r,n,i,s){return this.po(e,t,r,n,i)}To(e,t,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+id,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,r)=>e[r]=t),r&&r.headers.forEach((t,r)=>e[r]=t)}Io(e,t){let r=oj[e];return`${this.wo}/v1/${t}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}Eo(e,t,r,n){let i=oV();return new Promise((s,a)=>{let o=new io;o.setWithCredentials(!0),o.listenOnce(it.COMPLETE,()=>{try{switch(o.getLastErrorCode()){case ie.NO_ERROR:let t=o.getResponseJson();ig(oz,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(t)),s(t);break;case ie.TIMEOUT:ig(oz,`RPC '${e}' ${i} timed out`),a(new iI(iE.DEADLINE_EXCEEDED,"Request time out"));break;case ie.HTTP_ERROR:let r=o.getStatus();if(ig(oz,`RPC '${e}' ${i} failed with status:`,r,"response text:",o.getResponseText()),r>0){let e=o.getResponseJson();Array.isArray(e)&&(e=e[0]);let t=null==e?void 0:e.error;if(t&&t.status&&t.message){let e=function(e){let t=e.toLowerCase().replace(/_/g,"-");return Object.values(iE).indexOf(t)>=0?t:iE.UNKNOWN}(t.status);a(new iI(e,t.message))}else a(new iI(iE.UNKNOWN,"Server responded with status "+o.getStatus()))}else a(new iI(iE.UNAVAILABLE,"Connection failed."));break;default:ib()}}finally{ig(oz,`RPC '${e}' ${i} completed.`)}});let l=JSON.stringify(n);ig(oz,`RPC '${e}' ${i} sending request:`,n),o.send(t,"POST",l,r,15)})}Ro(e,t,r){let n=oV(),i=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=n7(),a=n8(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new is({})),this.To(o.initMessageHeaders,t,r),o.encodeInitMessageHeaders=!0;let l=i.join("");ig(oz,`Creating RPC '${e}' stream ${n}: ${l}`,o);let u=s.createWebChannel(l,o),c=!1,d=!1,f=new o$({io:t=>{d?ig(oz,`Not sending because RPC '${e}' stream ${n} is closed:`,t):(c||(ig(oz,`Opening RPC '${e}' stream ${n} transport.`),u.open(),c=!0),ig(oz,`RPC '${e}' stream ${n} sending:`,t),u.send(t))},ro:()=>u.close()}),p=(e,t,r)=>{e.listen(t,e=>{try{r(e)}catch(e){setTimeout(()=>{throw e},0)}})};return p(u,ia.EventType.OPEN,()=>{d||ig(oz,`RPC '${e}' stream ${n} transport opened.`)}),p(u,ia.EventType.CLOSE,()=>{d||(d=!0,ig(oz,`RPC '${e}' stream ${n} transport closed`),f.fo())}),p(u,ia.EventType.ERROR,t=>{d||(d=!0,iv(oz,`RPC '${e}' stream ${n} transport errored:`,t),f.fo(new iI(iE.UNAVAILABLE,"The operation could not be completed")))}),p(u,ia.EventType.MESSAGE,t=>{var r;if(!d){let i=t.data[0];i||ib();let s=i.error||(null===(r=i[0])||void 0===r?void 0:r.error);if(s){ig(oz,`RPC '${e}' stream ${n} received error:`,s);let t=s.status,r=function(e){let t=h[e];if(void 0!==t)return ax(t)}(t),i=s.message;void 0===r&&(r=iE.INTERNAL,i="Unknown error status: "+t+" with message "+s.message),d=!0,f.fo(new iI(r,i)),u.close()}else ig(oz,`RPC '${e}' stream ${n} received:`,i),f._o(i)}}),p(a,ir.STAT_EVENT,t=>{t.stat===ii.PROXY?ig(oz,`RPC '${e}' stream ${n} detected buffering proxy`):t.stat===ii.NOPROXY&&ig(oz,`RPC '${e}' stream ${n} detected no buffering proxy`)}),setTimeout(()=>{f.lo()},0),f}}function oq(){return"undefined"!=typeof document?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oH(e){return new a0(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oG{constructor(e,t,r=1e3,n=1.5,i=6e4){this.si=e,this.timerId=t,this.vo=r,this.Po=n,this.bo=i,this.Vo=0,this.So=null,this.Do=Date.now(),this.reset()}reset(){this.Vo=0}Co(){this.Vo=this.bo}xo(e){this.cancel();let t=Math.floor(this.Vo+this.No()),r=Math.max(0,Date.now()-this.Do),n=Math.max(0,t-r);n>0&&ig("ExponentialBackoff",`Backing off for ${n} ms (base delay: ${this.Vo} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.So=this.si.enqueueAfterDelay(this.timerId,n,()=>(this.Do=Date.now(),e())),this.Vo*=this.Po,this.Vo<this.vo&&(this.Vo=this.vo),this.Vo>this.bo&&(this.Vo=this.bo)}ko(){null!==this.So&&(this.So.skipDelay(),this.So=null)}cancel(){null!==this.So&&(this.So.cancel(),this.So=null)}No(){return(Math.random()-.5)*this.Vo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oK{constructor(e,t,r,n,i,s,a,o){this.si=e,this.Mo=r,this.Oo=n,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=a,this.listener=o,this.state=0,this.$o=0,this.Fo=null,this.Bo=null,this.stream=null,this.Lo=new oG(e,t)}qo(){return 1===this.state||5===this.state||this.Uo()}Uo(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Ko()}async stop(){this.qo()&&await this.close(0)}Go(){this.state=0,this.Lo.reset()}Qo(){this.Uo()&&null===this.Fo&&(this.Fo=this.si.enqueueAfterDelay(this.Mo,6e4,()=>this.jo()))}zo(e){this.Wo(),this.stream.send(e)}async jo(){if(this.Uo())return this.close(0)}Wo(){this.Fo&&(this.Fo.cancel(),this.Fo=null)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}async close(e,t){this.Wo(),this.Ho(),this.Lo.cancel(),this.$o++,4!==e?this.Lo.reset():t&&t.code===iE.RESOURCE_EXHAUSTED?(iy(t.toString()),iy("Using maximum backoff delay to prevent overloading the backend."),this.Lo.Co()):t&&t.code===iE.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Jo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.co(t)}Jo(){}auth(){this.state=1;let e=this.Yo(this.$o),t=this.$o;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([e,r])=>{this.$o===t&&this.Xo(e,r)},t=>{e(()=>{let e=new iI(iE.UNKNOWN,"Fetching auth token failed: "+t.message);return this.Zo(e)})})}Xo(e,t){let r=this.Yo(this.$o);this.stream=this.tu(e,t),this.stream.oo(()=>{r(()=>(this.state=2,this.Bo=this.si.enqueueAfterDelay(this.Oo,1e4,()=>(this.Uo()&&(this.state=3),Promise.resolve())),this.listener.oo()))}),this.stream.co(e=>{r(()=>this.Zo(e))}),this.stream.onMessage(e=>{r(()=>this.onMessage(e))})}Ko(){this.state=5,this.Lo.xo(async()=>{this.state=0,this.start()})}Zo(e){return ig("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Yo(e){return t=>{this.si.enqueueAndForget(()=>this.$o===e?t():(ig("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class oW extends oK{constructor(e,t,r,n,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,n,s),this.serializer=i}tu(e,t){return this.connection.Ro("Listen",e,t)}onMessage(e){this.Lo.reset();let t=function(e,t){let r;if("targetChange"in t){var n,i;t.targetChange;let s="NO_CHANGE"===(n=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===n?1:"REMOVE"===n?2:"CURRENT"===n?3:"RESET"===n?4:ib(),a=t.targetChange.targetIds||[],o=(i=t.targetChange.resumeToken,e.useProto3Json?(void 0===i||"string"==typeof i||ib(),i5.fromBase64String(i||"")):(void 0===i||i instanceof Uint8Array||ib(),i5.fromUint8Array(i||new Uint8Array))),l=t.targetChange.cause,u=l&&function(e){let t=void 0===e.code?iE.UNKNOWN:ax(e.code);return new iI(t,e.message||"")}(l);r=new aG(s,a,o,u||null)}else if("documentChange"in t){t.documentChange;let n=t.documentChange;n.document,n.document.name,n.document.updateTime;let i=a7(e,n.document.name),s=a4(n.document.updateTime),a=n.document.createTime?a4(n.document.createTime):iM.min(),o=new sb({mapValue:{fields:n.document.fields}}),l=sE.newFoundDocument(i,s,a,o),u=n.targetIds||[],c=n.removedTargetIds||[];r=new aq(u,c,l.key,l)}else if("documentDelete"in t){t.documentDelete;let n=t.documentDelete;n.document;let i=a7(e,n.document),s=n.readTime?a4(n.readTime):iM.min(),a=sE.newNoDocument(i,s),o=n.removedTargetIds||[];r=new aq([],o,a.key,a)}else if("documentRemove"in t){t.documentRemove;let n=t.documentRemove;n.document;let i=a7(e,n.document),s=n.removedTargetIds||[];r=new aq([],s,i,null)}else{if(!("filter"in t))return ib();{t.filter;let e=t.filter;e.targetId;let{count:n=0,unchangedNames:i}=e,s=new aP(n,i),a=e.targetId;r=new aH(a,s)}}return r}(this.serializer,e),r=function(e){if(!("targetChange"in e))return iM.min();let t=e.targetChange;return t.targetIds&&t.targetIds.length?iM.min():t.readTime?a4(t.readTime):iM.min()}(e);return this.listener.eu(t,r)}nu(e){let t={};t.database=oe(this.serializer),t.addTarget=function(e,t){let r;let n=t.target;if((r=sB(n)?{documents:{documents:[a8(e,n.path)]}}:{query:function(e,t){var r,n;let i={structuredQuery:{}},s=t.path;null!==t.collectionGroup?(i.parent=a8(e,s),i.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i.parent=a8(e,s.popLast()),i.structuredQuery.from=[{collectionId:s.lastSegment()}]);let a=function(e){if(0!==e.length)return function e(t){return t instanceof sC?function(e){if("=="===e.op){if(sg(e.value))return{unaryFilter:{field:on(e.field),op:"IS_NAN"}};if(sm(e.value))return{unaryFilter:{field:on(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(sg(e.value))return{unaryFilter:{field:on(e.field),op:"IS_NOT_NAN"}};if(sm(e.value))return{unaryFilter:{field:on(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:on(e.field),op:aY[e.op],value:e.value}}}(t):t instanceof sA?function(t){let r=t.getFilters().map(t=>e(t));return 1===r.length?r[0]:{compositeFilter:{op:aZ[t.op],filters:r}}}(t):ib()}(sA.create(e,"and"))}(t.filters);a&&(i.structuredQuery.where=a);let o=function(e){if(0!==e.length)return e.map(e=>({field:on(e.field),direction:aJ[e.dir]}))}(t.orderBy);o&&(i.structuredQuery.orderBy=o);let l=a1(e,t.limit);return null!==l&&(i.structuredQuery.limit=l),t.startAt&&(i.structuredQuery.startAt={before:(r=t.startAt).inclusive,values:r.position}),t.endAt&&(i.structuredQuery.endAt={before:!(n=t.endAt).inclusive,values:n.position}),i}(e,n)}).targetId=t.targetId,t.resumeToken.approximateByteSize()>0){r.resumeToken=a9(e,t.resumeToken);let n=a1(e,t.expectedCount);null!==n&&(r.expectedCount=n)}else if(t.snapshotVersion.compareTo(iM.min())>0){r.readTime=a2(e,t.snapshotVersion.toTimestamp());let n=a1(e,t.expectedCount);null!==n&&(r.expectedCount=n)}return r}(this.serializer,e);let r=function(e,t){let r=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ib()}}(t.purpose);return null==r?null:{"goog-listen-tags":r}}(this.serializer,e);r&&(t.labels=r),this.zo(t)}su(e){let t={};t.database=oe(this.serializer),t.removeTarget=e,this.zo(t)}}class oQ extends oK{constructor(e,t,r,n,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,n,s),this.serializer=i,this.iu=!1}get ru(){return this.iu}start(){this.iu=!1,this.lastStreamToken=void 0,super.start()}Jo(){this.iu&&this.ou([])}tu(e,t){return this.connection.Ro("Write",e,t)}onMessage(e){var t,r;if(e.streamToken||ib(),this.lastStreamToken=e.streamToken,this.iu){this.Lo.reset();let n=(t=e.writeResults,r=e.commitTime,t&&t.length>0?(void 0!==r||ib(),t.map(e=>{let t;return(t=e.updateTime?a4(e.updateTime):a4(r)).isEqual(iM.min())&&(t=a4(r)),new ag(t,e.transformResults||[])})):[]),i=a4(e.commitTime);return this.listener.uu(i,n)}return e.writeResults&&0!==e.writeResults.length&&ib(),this.iu=!0,this.listener.cu()}au(){let e={};e.database=oe(this.serializer),this.zo(e)}ou(e){let t={streamToken:this.lastStreamToken,writes:e.map(e=>(function(e,t){var r;let n;if(t instanceof a_)n={update:or(e,t.key,t.value)};else if(t instanceof aA)n={delete:a3(e,t.key)};else if(t instanceof aT)n={update:or(e,t.key,t.data),updateMask:function(e){let t=[];return e.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}(t.fieldMask)};else{if(!(t instanceof aN))return ib();n={verify:a3(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(e=>(function(e,t){let r=t.transform;if(r instanceof al)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(r instanceof au)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:r.elements}};if(r instanceof ah)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:r.elements}};if(r instanceof af)return{fieldPath:t.field.canonicalString(),increment:r.wt};throw ib()})(0,e))),t.precondition.isNone||(n.currentDocument=void 0!==(r=t.precondition).updateTime?{updateTime:a2(e,r.updateTime.toTimestamp())}:void 0!==r.exists?{exists:r.exists}:ib()),n})(this.serializer,e))};this.zo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oX extends class{}{constructor(e,t,r,n){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=n,this.hu=!1}lu(){if(this.hu)throw new iI(iE.FAILED_PRECONDITION,"The client has already been terminated.")}po(e,t,r){return this.lu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([n,i])=>this.connection.po(e,t,r,n,i)).catch(e=>{throw"FirebaseError"===e.name?(e.code===iE.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new iI(iE.UNKNOWN,e.toString())})}Ao(e,t,r,n){return this.lu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Ao(e,t,r,i,s,n)).catch(e=>{throw"FirebaseError"===e.name?(e.code===iE.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new iI(iE.UNKNOWN,e.toString())})}terminate(){this.hu=!0}}class oJ{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.du=0,this._u=null,this.wu=!0}mu(){0===this.du&&(this.gu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.yu("Backend didn't respond within 10 seconds."),this.gu("Offline"),Promise.resolve())))}pu(e){"Online"===this.state?this.gu("Unknown"):(this.du++,this.du>=1&&(this.Iu(),this.yu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.gu("Offline")))}set(e){this.Iu(),this.du=0,"Online"===e&&(this.wu=!1),this.gu(e)}gu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}yu(e){let t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.wu?(iy(t),this.wu=!1):ig("OnlineStateTracker",t)}Iu(){null!==this._u&&(this._u.cancel(),this._u=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oY{constructor(e,t,r,n,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Tu=[],this.Eu=new Map,this.Au=new Set,this.Ru=[],this.vu=i,this.vu.Jr(e=>{r.enqueueAndForget(async()=>{o3(this)&&(ig("RemoteStore","Restarting streams for network reachability change."),await async function(e){e.Au.add(4),await o0(e),e.Pu.set("Unknown"),e.Au.delete(4),await oZ(e)}(this))})}),this.Pu=new oJ(r,n)}}async function oZ(e){if(o3(e))for(let t of e.Ru)await t(!0)}async function o0(e){for(let t of e.Ru)await t(!1)}function o1(e,t){e.Eu.has(t.targetId)||(e.Eu.set(t.targetId,t),o6(e)?o5(e):ld(e).Uo()&&o9(e,t))}function o2(e,t){let r=ld(e);e.Eu.delete(t),r.Uo()&&o4(e,t),0===e.Eu.size&&(r.Uo()?r.Qo():o3(e)&&e.Pu.set("Unknown"))}function o9(e,t){if(e.bu.Lt(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(iM.min())>0){let r=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(r)}ld(e).nu(t)}function o4(e,t){e.bu.Lt(t),ld(e).su(t)}function o5(e){e.bu=new aW({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),he:t=>e.Eu.get(t)||null,oe:()=>e.datastore.serializer.databaseId}),ld(e).start(),e.Pu.mu()}function o6(e){return o3(e)&&!ld(e).qo()&&e.Eu.size>0}function o3(e){return 0===e.Au.size}async function o7(e){e.Eu.forEach((t,r)=>{o9(e,t)})}async function o8(e,t){e.bu=void 0,o6(e)?(e.Pu.pu(t),o5(e)):e.Pu.set("Unknown")}async function le(e,t,r){if(e.Pu.set("Online"),t instanceof aG&&2===t.state&&t.cause)try{await async function(e,t){let r=t.cause;for(let n of t.targetIds)e.Eu.has(n)&&(await e.remoteSyncer.rejectListen(n,r),e.Eu.delete(n),e.bu.removeTarget(n))}(e,t)}catch(r){ig("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await lt(e,r)}else if(t instanceof aq?e.bu.Wt(t):t instanceof aH?e.bu.ee(t):e.bu.Yt(t),!r.isEqual(iM.min()))try{let t=await oD(e.localStore);r.compareTo(t)>=0&&await function(e,t){let r=e.bu.ue(t);return r.targetChanges.forEach((r,n)=>{if(r.resumeToken.approximateByteSize()>0){let i=e.Eu.get(n);i&&e.Eu.set(n,i.withResumeToken(r.resumeToken,t))}}),r.targetMismatches.forEach((t,r)=>{let n=e.Eu.get(t);if(!n)return;e.Eu.set(t,n.withResumeToken(i5.EMPTY_BYTE_STRING,n.snapshotVersion)),o4(e,t);let i=new oa(n.target,t,r,n.sequenceNumber);o9(e,i)}),e.remoteSyncer.applyRemoteEvent(r)}(e,r)}catch(t){ig("RemoteStore","Failed to raise snapshot:",t),await lt(e,t)}}async function lt(e,t,r){if(!iG(t))throw t;e.Au.add(1),await o0(e),e.Pu.set("Offline"),r||(r=()=>oD(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{ig("RemoteStore","Retrying IndexedDB access"),await r(),e.Au.delete(1),await oZ(e)})}function lr(e,t){return t().catch(r=>lt(e,r,t))}async function ln(e){let t=lf(e),r=e.Tu.length>0?e.Tu[e.Tu.length-1].batchId:-1;for(;o3(e)&&e.Tu.length<10;)try{let n=await function(e,t){return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(void 0===t&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}(e.localStore,r);if(null===n){0===e.Tu.length&&t.Qo();break}r=n.batchId,function(e,t){e.Tu.push(t);let r=lf(e);r.Uo()&&r.ru&&r.ou(t.mutations)}(e,n)}catch(t){await lt(e,t)}li(e)&&ls(e)}function li(e){return o3(e)&&!lf(e).qo()&&e.Tu.length>0}function ls(e){lf(e).start()}async function la(e){lf(e).au()}async function lo(e){let t=lf(e);for(let r of e.Tu)t.ou(r.mutations)}async function ll(e,t,r){let n=e.Tu.shift(),i=aD.from(n,t,r);await lr(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await ln(e)}async function lu(e,t){t&&lf(e).ru&&await async function(e,t){var r;if(function(e){switch(e){default:return ib();case iE.CANCELLED:case iE.UNKNOWN:case iE.DEADLINE_EXCEEDED:case iE.RESOURCE_EXHAUSTED:case iE.INTERNAL:case iE.UNAVAILABLE:case iE.UNAUTHENTICATED:return!1;case iE.INVALID_ARGUMENT:case iE.NOT_FOUND:case iE.ALREADY_EXISTS:case iE.PERMISSION_DENIED:case iE.FAILED_PRECONDITION:case iE.ABORTED:case iE.OUT_OF_RANGE:case iE.UNIMPLEMENTED:case iE.DATA_LOSS:return!0}}(r=t.code)&&r!==iE.ABORTED){let r=e.Tu.shift();lf(e).Go(),await lr(e,()=>e.remoteSyncer.rejectFailedWrite(r.batchId,t)),await ln(e)}}(e,t),li(e)&&ls(e)}async function lc(e,t){e.asyncQueue.verifyOperationInProgress(),ig("RemoteStore","RemoteStore received new credentials");let r=o3(e);e.Au.add(3),await o0(e),r&&e.Pu.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.Au.delete(3),await oZ(e)}async function lh(e,t){t?(e.Au.delete(2),await oZ(e)):t||(e.Au.add(2),await o0(e),e.Pu.set("Unknown"))}function ld(e){var t,r,n;return e.Vu||(e.Vu=(t=e.datastore,r=e.asyncQueue,n={oo:o7.bind(null,e),co:o8.bind(null,e),eu:le.bind(null,e)},t.lu(),new oW(r,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,n)),e.Ru.push(async t=>{t?(e.Vu.Go(),o6(e)?o5(e):e.Pu.set("Unknown")):(await e.Vu.stop(),e.bu=void 0)})),e.Vu}function lf(e){var t,r,n;return e.Su||(e.Su=(t=e.datastore,r=e.asyncQueue,n={oo:la.bind(null,e),co:lu.bind(null,e),cu:lo.bind(null,e),uu:ll.bind(null,e)},t.lu(),new oQ(r,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,n)),e.Ru.push(async t=>{t?(e.Su.Go(),await ln(e)):(await e.Su.stop(),e.Tu.length>0&&(ig("RemoteStore",`Stopping write stream with ${e.Tu.length} pending writes`),e.Tu=[]))})),e.Su}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lp{constructor(e,t,r,n,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=n,this.removalCallback=i,this.deferred=new i_,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}static createAndSchedule(e,t,r,n,i){let s=Date.now()+r,a=new lp(e,t,s,n,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new iI(iE.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function lm(e,t){if(iy("AsyncQueue",`${t}: ${e}`),iG(e))return new iI(iE.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lg{constructor(e){this.comparator=e?(t,r)=>e(t,r)||i$.comparator(t.key,r.key):(e,t)=>i$.comparator(e.key,t.key),this.keyedMap=s3(),this.sortedSet=new iY(this.comparator)}static emptySet(e){return new lg(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){let t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){let t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){let t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof lg)||this.size!==e.size)return!1;let t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){let e=t.getNext().key,n=r.getNext().key;if(!e.isEqual(n))return!1}return!0}toString(){let e=[];return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){let r=new lg;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ly{constructor(){this.Du=new iY(i$.comparator)}track(e){let t=e.doc.key,r=this.Du.get(t);r?0!==e.type&&3===r.type?this.Du=this.Du.insert(t,e):3===e.type&&1!==r.type?this.Du=this.Du.insert(t,{type:r.type,doc:e.doc}):2===e.type&&2===r.type?this.Du=this.Du.insert(t,{type:2,doc:e.doc}):2===e.type&&0===r.type?this.Du=this.Du.insert(t,{type:0,doc:e.doc}):1===e.type&&0===r.type?this.Du=this.Du.remove(t):1===e.type&&2===r.type?this.Du=this.Du.insert(t,{type:1,doc:r.doc}):0===e.type&&1===r.type?this.Du=this.Du.insert(t,{type:2,doc:e.doc}):ib():this.Du=this.Du.insert(t,e)}Cu(){let e=[];return this.Du.inorderTraversal((t,r)=>{e.push(r)}),e}}class lv{constructor(e,t,r,n,i,s,a,o,l){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=n,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=a,this.excludesMetadataChanges=o,this.hasCachedResults=l}static fromInitialDocuments(e,t,r,n,i){let s=[];return t.forEach(e=>{s.push({type:0,doc:e})}),new lv(e,t,lg.emptySet(t),s,r,n,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&sZ(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;let t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==r[e].type||!t[e].doc.isEqual(r[e].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lw{constructor(){this.xu=void 0,this.listeners=[]}}class lb{constructor(){this.queries=new s4(e=>s0(e),sZ),this.onlineState="Unknown",this.Nu=new Set}}async function lE(e,t){let r=t.query,n=!1,i=e.queries.get(r);if(i||(n=!0,i=new lw),n)try{i.xu=await e.onListen(r)}catch(r){let e=lm(r,`Initialization of query '${s1(t.query)}' failed`);return void t.onError(e)}e.queries.set(r,i),i.listeners.push(t),t.ku(e.onlineState),i.xu&&t.Mu(i.xu)&&lS(e)}async function lI(e,t){let r=t.query,n=!1,i=e.queries.get(r);if(i){let e=i.listeners.indexOf(t);e>=0&&(i.listeners.splice(e,1),n=0===i.listeners.length)}if(n)return e.queries.delete(r),e.onUnlisten(r)}function l_(e,t){let r=!1;for(let n of t){let t=n.query,i=e.queries.get(t);if(i){for(let e of i.listeners)e.Mu(n)&&(r=!0);i.xu=n}}r&&lS(e)}function lT(e,t,r){let n=e.queries.get(t);if(n)for(let e of n.listeners)e.onError(r);e.queries.delete(t)}function lS(e){e.Nu.forEach(e=>{e.next()})}class lk{constructor(e,t,r){this.query=e,this.Ou=t,this.$u=!1,this.Fu=null,this.onlineState="Unknown",this.options=r||{}}Mu(e){if(!this.options.includeMetadataChanges){let t=[];for(let r of e.docChanges)3!==r.type&&t.push(r);e=new lv(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.$u?this.Bu(e)&&(this.Ou.next(e),t=!0):this.Lu(e,this.onlineState)&&(this.qu(e),t=!0),this.Fu=e,t}onError(e){this.Ou.error(e)}ku(e){this.onlineState=e;let t=!1;return this.Fu&&!this.$u&&this.Lu(this.Fu,e)&&(this.qu(this.Fu),t=!0),t}Lu(e,t){return!e.fromCache||(!this.options.Uu||!("Offline"!==t))&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}Bu(e){if(e.docChanges.length>0)return!0;let t=this.Fu&&this.Fu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}qu(e){e=lv.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.$u=!0,this.Ou.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lC{constructor(e){this.key=e}}class lA{constructor(e){this.key=e}}class lN{constructor(e,t){this.query=e,this.Ju=t,this.Yu=null,this.hasCachedResults=!1,this.current=!1,this.Xu=ar(),this.mutatedKeys=ar(),this.Zu=s9(e),this.tc=new lg(this.Zu)}get ec(){return this.Ju}nc(e,t){let r=t?t.sc:new ly,n=t?t.tc:this.tc,i=t?t.mutatedKeys:this.mutatedKeys,s=n,a=!1,o="F"===this.query.limitType&&n.size===this.query.limit?n.last():null,l="L"===this.query.limitType&&n.size===this.query.limit?n.first():null;if(e.inorderTraversal((e,t)=>{let u=n.get(e),c=s2(this.query,t)?t:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!c&&(c.hasLocalMutations||this.mutatedKeys.has(c.key)&&c.hasCommittedMutations),f=!1;u&&c?u.data.isEqual(c.data)?h!==d&&(r.track({type:3,doc:c}),f=!0):this.ic(u,c)||(r.track({type:2,doc:c}),f=!0,(o&&this.Zu(c,o)>0||l&&0>this.Zu(c,l))&&(a=!0)):!u&&c?(r.track({type:0,doc:c}),f=!0):u&&!c&&(r.track({type:1,doc:u}),f=!0,(o||l)&&(a=!0)),f&&(c?(s=s.add(c),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))}),null!==this.query.limit)for(;s.size>this.query.limit;){let e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),r.track({type:1,doc:e})}return{tc:s,sc:r,ji:a,mutatedKeys:i}}ic(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r){let n=this.tc;this.tc=e.tc,this.mutatedKeys=e.mutatedKeys;let i=e.sc.Cu();i.sort((e,t)=>(function(e,t){let r=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ib()}};return r(e)-r(t)})(e.type,t.type)||this.Zu(e.doc,t.doc)),this.rc(r);let s=t?this.oc():[],a=0===this.Xu.size&&this.current?1:0,o=a!==this.Yu;return(this.Yu=a,0!==i.length||o)?{snapshot:new lv(this.query,e.tc,n,i,e.mutatedKeys,0===a,o,!1,!!r&&r.resumeToken.approximateByteSize()>0),uc:s}:{uc:s}}ku(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({tc:this.tc,sc:new ly,mutatedKeys:this.mutatedKeys,ji:!1},!1)):{uc:[]}}cc(e){return!this.Ju.has(e)&&!!this.tc.has(e)&&!this.tc.get(e).hasLocalMutations}rc(e){e&&(e.addedDocuments.forEach(e=>this.Ju=this.Ju.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this.Ju=this.Ju.delete(e)),this.current=e.current)}oc(){if(!this.current)return[];let e=this.Xu;this.Xu=ar(),this.tc.forEach(e=>{this.cc(e.key)&&(this.Xu=this.Xu.add(e.key))});let t=[];return e.forEach(e=>{this.Xu.has(e)||t.push(new lA(e))}),this.Xu.forEach(r=>{e.has(r)||t.push(new lC(r))}),t}ac(e){this.Ju=e.sr,this.Xu=ar();let t=this.nc(e.documents);return this.applyChanges(t,!0)}hc(){return lv.fromInitialDocuments(this.query,this.tc,this.mutatedKeys,0===this.Yu,this.hasCachedResults)}}class lR{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class lD{constructor(e){this.key=e,this.lc=!1}}class lO{constructor(e,t,r,n,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=n,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.fc={},this.dc=new s4(e=>s0(e),sZ),this._c=new Map,this.wc=new Set,this.mc=new iY(i$.comparator),this.gc=new Map,this.yc=new ov,this.Ic={},this.Tc=new Map,this.Ec=od.kn(),this.onlineState="Unknown",this.Ac=void 0}get isPrimaryClient(){return!0===this.Ac}}async function lP(e,t){let r,n;let i=function(e){let t=e;return t.remoteStore.remoteSyncer.applyRemoteEvent=lF.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=lX.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=lV.bind(null,t),t.fc.eu=l_.bind(null,t.eventManager),t.fc.vc=lT.bind(null,t.eventManager),t}(e),s=i.dc.get(t);if(s)r=s.targetId,i.sharedClientState.addLocalQueryTarget(r),n=s.view.hc();else{let e=await function(e,t){let r=e;return r.persistence.runTransaction("Allocate target","readwrite",e=>{let n;return r.Fs.getTargetData(e,t).next(i=>i?(n=i,iH.resolve(n)):r.Fs.allocateTargetId(e).next(i=>(n=new oa(t,i,"TargetPurposeListen",e.currentSequenceNumber),r.Fs.addTargetData(e,n).next(()=>n))))}).then(e=>{let n=r.Hi.get(e.targetId);return(null===n||e.snapshotVersion.compareTo(n.snapshotVersion)>0)&&(r.Hi=r.Hi.insert(e.targetId,e),r.Ji.set(t,e.targetId)),e})}(i.localStore,sX(t)),s=i.sharedClientState.addLocalQueryTarget(e.targetId);r=e.targetId,n=await lx(i,t,r,"current"===s,e.resumeToken),i.isPrimaryClient&&o1(i.remoteStore,e)}return n}async function lx(e,t,r,n,i){e.Rc=(t,r,n)=>(async function(e,t,r,n){let i=t.view.nc(r);i.ji&&(i=await oP(e.localStore,t.query,!1).then(({documents:e})=>t.view.nc(e,i)));let s=n&&n.targetChanges.get(t.targetId),a=t.view.applyChanges(i,e.isPrimaryClient,s);return lG(e,t.targetId,a.uc),a.snapshot})(e,t,r,n);let s=await oP(e.localStore,t,!0),a=new lN(t,s.sr),o=a.nc(s.documents),l=aB.createSynthesizedTargetChangeForCurrentChange(r,n&&"Offline"!==e.onlineState,i),u=a.applyChanges(o,e.isPrimaryClient,l);lG(e,r,u.uc);let c=new lR(t,r,a);return e.dc.set(t,c),e._c.has(r)?e._c.get(r).push(t):e._c.set(r,[t]),u.snapshot}async function lL(e,t){let r=e.dc.get(t),n=e._c.get(r.targetId);if(n.length>1)return e._c.set(r.targetId,n.filter(e=>!sZ(e,t))),void e.dc.delete(t);e.isPrimaryClient?(e.sharedClientState.removeLocalQueryTarget(r.targetId),e.sharedClientState.isActiveQueryTarget(r.targetId)||await oO(e.localStore,r.targetId,!1).then(()=>{e.sharedClientState.clearQueryState(r.targetId),o2(e.remoteStore,r.targetId),lq(e,r.targetId)}).catch(iq)):(lq(e,r.targetId),await oO(e.localStore,r.targetId,!0))}async function lM(e,t,r){let n=function(e){let t=e;return t.remoteStore.remoteSyncer.applySuccessfulWrite=lj.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=l$.bind(null,t),t}(e);try{var i,s;let e;let a=await function(e,t){let r,n;let i=iL.now(),s=t.reduce((e,t)=>e.add(t.key),ar());return e.persistence.runTransaction("Locally write mutations","readwrite",a=>{let o=s5,l=ar();return e.Xi.getEntries(a,s).next(e=>{(o=e).forEach((e,t)=>{t.isValidDocument()||(l=l.add(e))})}).next(()=>e.localDocuments.getOverlayedDocuments(a,o)).next(n=>{r=n;let s=[];for(let e of t){let t=function(e,t){let r=null;for(let n of e.fieldTransforms){let e=t.data.field(n.field),i=ao(n.transform,e||null);null!=i&&(null===r&&(r=sb.empty()),r.set(n.field,i))}return r||null}(e,r.get(e.key).overlayedDocument);null!=t&&s.push(new aT(e.key,t,function e(t){let r=[];return iX(t.fields,(t,n)=>{let i=new ij([t]);if(sy(n)){let t=e(n.mapValue).fields;if(0===t.length)r.push(i);else for(let e of t)r.push(i.child(e))}else r.push(i)}),new i9(r)}(t.value.mapValue),ay.exists(!0)))}return e.mutationQueue.addMutationBatch(a,i,s,t)}).next(t=>{n=t;let i=t.applyToLocalDocumentSet(r,l);return e.documentOverlayCache.saveOverlays(a,t.batchId,i)})}).then(()=>({batchId:n.batchId,changes:s7(r)}))}(n.localStore,t);n.sharedClientState.addPendingMutation(a.batchId),i=n,s=a.batchId,(e=i.Ic[i.currentUser.toKey()])||(e=new iY(iP)),e=e.insert(s,r),i.Ic[i.currentUser.toKey()]=e,await lW(n,a.changes),await ln(n.remoteStore)}catch(t){let e=lm(t,"Failed to persist write");r.reject(e)}}async function lF(e,t){try{let r=await function(e,t){let r=e,n=t.snapshotVersion,i=r.Hi;return r.persistence.runTransaction("Apply remote event","readwrite-primary",e=>{var s;let a,o;let l=r.Xi.newChangeBuffer({trackRemovals:!0});i=r.Hi;let u=[];t.targetChanges.forEach((s,a)=>{var o;let l=i.get(a);if(!l)return;u.push(r.Fs.removeMatchingKeys(e,s.removedDocuments,a).next(()=>r.Fs.addMatchingKeys(e,s.addedDocuments,a)));let c=l.withSequenceNumber(e.currentSequenceNumber);null!==t.targetMismatches.get(a)?c=c.withResumeToken(i5.EMPTY_BYTE_STRING,iM.min()).withLastLimboFreeSnapshotVersion(iM.min()):s.resumeToken.approximateByteSize()>0&&(c=c.withResumeToken(s.resumeToken,n)),i=i.insert(a,c),o=c,(0===l.resumeToken.approximateByteSize()||o.snapshotVersion.toMicroseconds()-l.snapshotVersion.toMicroseconds()>=3e8||s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size>0)&&u.push(r.Fs.updateTargetData(e,c))});let c=s5,h=ar();if(t.documentUpdates.forEach(n=>{t.resolvedLimboDocuments.has(n)&&u.push(r.persistence.referenceDelegate.updateLimboDocument(e,n))}),u.push((s=t.documentUpdates,a=ar(),o=ar(),s.forEach(e=>a=a.add(e)),l.getEntries(e,a).next(e=>{let t=s5;return s.forEach((r,n)=>{let i=e.get(r);n.isFoundDocument()!==i.isFoundDocument()&&(o=o.add(r)),n.isNoDocument()&&n.version.isEqual(iM.min())?(l.removeEntry(r,n.readTime),t=t.insert(r,n)):!i.isValidDocument()||n.version.compareTo(i.version)>0||0===n.version.compareTo(i.version)&&i.hasPendingWrites?(l.addEntry(n),t=t.insert(r,n)):ig("LocalStore","Ignoring outdated watch update for ",r,". Current version:",i.version," Watch version:",n.version)}),{er:t,nr:o}})).next(e=>{c=e.er,h=e.nr})),!n.isEqual(iM.min())){let t=r.Fs.getLastRemoteSnapshotVersion(e).next(t=>r.Fs.setTargetsMetadata(e,e.currentSequenceNumber,n));u.push(t)}return iH.waitFor(u).next(()=>l.apply(e)).next(()=>r.localDocuments.getLocalViewOfDocuments(e,c,h)).next(()=>c)}).then(e=>(r.Hi=i,e))}(e.localStore,t);t.targetChanges.forEach((t,r)=>{let n=e.gc.get(r);n&&(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1||ib(),t.addedDocuments.size>0?n.lc=!0:t.modifiedDocuments.size>0?n.lc||ib():t.removedDocuments.size>0&&(n.lc||ib(),n.lc=!1))}),await lW(e,r,t)}catch(e){await iq(e)}}function lU(e,t,r){let n=e;if(n.isPrimaryClient&&0===r||!n.isPrimaryClient&&1===r){let e=[];n.dc.forEach((r,n)=>{let i=n.view.ku(t);i.snapshot&&e.push(i.snapshot)}),function(e,t){let r=e;r.onlineState=t;let n=!1;r.queries.forEach((e,r)=>{for(let e of r.listeners)e.ku(t)&&(n=!0)}),n&&lS(r)}(n.eventManager,t),e.length&&n.fc.eu(e),n.onlineState=t,n.isPrimaryClient&&n.sharedClientState.setOnlineState(t)}}async function lV(e,t,r){let n=e;n.sharedClientState.updateQueryState(t,"rejected",r);let i=n.gc.get(t),s=i&&i.key;if(s){let e=new iY(i$.comparator);e=e.insert(s,sE.newNoDocument(s,iM.min()));let r=ar().add(s),i=new az(iM.min(),new Map,new iY(iP),e,r);await lF(n,i),n.mc=n.mc.remove(s),n.gc.delete(t),lK(n)}else await oO(n.localStore,t,!1).then(()=>lq(n,t,r)).catch(iq)}async function lj(e,t){var r;let n=t.batch.batchId;try{let i=await (r=e.localStore).persistence.runTransaction("Acknowledge batch","readwrite-primary",e=>{let n=t.batch.keys(),i=r.Xi.newChangeBuffer({trackRemovals:!0});return(function(e,t,r,n){let i=r.batch,s=i.keys(),a=iH.resolve();return s.forEach(e=>{a=a.next(()=>n.getEntry(t,e)).next(t=>{let s=r.docVersions.get(e);null!==s||ib(),0>t.version.compareTo(s)&&(i.applyToRemoteDocument(t,r),t.isValidDocument()&&(t.setReadTime(r.commitVersion),n.addEntry(t)))})}),a.next(()=>e.mutationQueue.removeMutationBatch(t,i))})(r,e,t,i).next(()=>i.apply(e)).next(()=>r.mutationQueue.performConsistencyCheck(e)).next(()=>r.documentOverlayCache.removeOverlaysForBatchId(e,n,t.batch.batchId)).next(()=>r.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=ar();for(let r=0;r<e.mutationResults.length;++r)e.mutationResults[r].transformResults.length>0&&(t=t.add(e.batch.mutations[r].key));return t}(t))).next(()=>r.localDocuments.getDocuments(e,n))});lB(e,n,null),lz(e,n),e.sharedClientState.updateMutationState(n,"acknowledged"),await lW(e,i)}catch(e){await iq(e)}}async function l$(e,t,r){var n;try{let i=await (n=e.localStore).persistence.runTransaction("Reject batch","readwrite-primary",e=>{let r;return n.mutationQueue.lookupMutationBatch(e,t).next(t=>(null!==t||ib(),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t))).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r)).next(()=>n.localDocuments.getDocuments(e,r))});lB(e,t,r),lz(e,t),e.sharedClientState.updateMutationState(t,"rejected",r),await lW(e,i)}catch(e){await iq(e)}}function lz(e,t){(e.Tc.get(t)||[]).forEach(e=>{e.resolve()}),e.Tc.delete(t)}function lB(e,t,r){let n=e,i=n.Ic[n.currentUser.toKey()];if(i){let e=i.get(t);e&&(r?e.reject(r):e.resolve(),i=i.remove(t)),n.Ic[n.currentUser.toKey()]=i}}function lq(e,t,r=null){for(let n of(e.sharedClientState.removeLocalQueryTarget(t),e._c.get(t)))e.dc.delete(n),r&&e.fc.vc(n,r);e._c.delete(t),e.isPrimaryClient&&e.yc.ps(t).forEach(t=>{e.yc.containsKey(t)||lH(e,t)})}function lH(e,t){e.wc.delete(t.path.canonicalString());let r=e.mc.get(t);null!==r&&(o2(e.remoteStore,r),e.mc=e.mc.remove(t),e.gc.delete(r),lK(e))}function lG(e,t,r){for(let n of r)n instanceof lC?(e.yc.addReference(n.key,t),function(e,t){let r=t.key,n=r.path.canonicalString();e.mc.get(r)||e.wc.has(n)||(ig("SyncEngine","New document in limbo: "+r),e.wc.add(n),lK(e))}(e,n)):n instanceof lA?(ig("SyncEngine","Document no longer in limbo: "+n.key),e.yc.removeReference(n.key,t),e.yc.containsKey(n.key)||lH(e,n.key)):ib()}function lK(e){for(;e.wc.size>0&&e.mc.size<e.maxConcurrentLimboResolutions;){var t;let r=e.wc.values().next().value;e.wc.delete(r);let n=new i$(iU.fromString(r)),i=e.Ec.next();e.gc.set(i,new lD(n)),e.mc=e.mc.insert(n,i),o1(e.remoteStore,new oa(sX((t=n.path,new sq(t))),i,"TargetPurposeLimboResolution",iK.ct))}}async function lW(e,t,r){let n=[],i=[],s=[];e.dc.isEmpty()||(e.dc.forEach((a,o)=>{s.push(e.Rc(o,t,r).then(t=>{if((t||r)&&e.isPrimaryClient&&e.sharedClientState.updateQueryState(o.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){n.push(t);let e=oC.Bi(o.targetId,t);i.push(e)}}))}),await Promise.all(s),e.fc.eu(n),await async function(e,t){let r=e;try{await r.persistence.runTransaction("notifyLocalViewChanges","readwrite",e=>iH.forEach(t,t=>iH.forEach(t.$i,n=>r.persistence.referenceDelegate.addReference(e,t.targetId,n)).next(()=>iH.forEach(t.Fi,n=>r.persistence.referenceDelegate.removeReference(e,t.targetId,n)))))}catch(e){if(!iG(e))throw e;ig("LocalStore","Failed to update sequence numbers: "+e)}for(let e of t){let t=e.targetId;if(!e.fromCache){let e=r.Hi.get(t),n=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(n);r.Hi=r.Hi.insert(t,i)}}}(e.localStore,i))}async function lQ(e,t){let r=e;if(!r.currentUser.isEqual(t)){ig("SyncEngine","User change. New user:",t.toKey());let e=await oR(r.localStore,t);r.currentUser=t,r.Tc.forEach(e=>{e.forEach(e=>{e.reject(new iI(iE.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))})}),r.Tc.clear(),r.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await lW(r,e.tr)}}function lX(e,t){let r=e.gc.get(t);if(r&&r.lc)return ar().add(r.key);{let r=ar(),n=e._c.get(t);if(!n)return r;for(let t of n){let n=e.dc.get(t);r=r.unionWith(n.view.ec)}return r}}class lJ{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=oH(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){var t,r,n,i;return t=this.persistence,r=new oA,n=e.initialUser,i=this.serializer,new oN(t,r,n,i)}createPersistence(e){return new oT(ok.js,this.serializer)}createSharedClientState(e){return new oL}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class lY{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>lU(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=lQ.bind(null,this.syncEngine),await lh(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new lb}createDatastore(e){var t,r,n;let i=oH(e.databaseInfo.databaseId),s=(t=e.databaseInfo,new oB(t));return r=e.authCredentials,n=e.appCheckCredentials,new oX(r,n,s,i)}createRemoteStore(e){var t,r,n,i,s;return t=this.localStore,r=this.datastore,n=e.asyncQueue,i=e=>lU(this.syncEngine,e,0),s=oF.D()?new oF:new oM,new oY(t,r,n,i,s)}createSyncEngine(e,t){return function(e,t,r,n,i,s,a){let o=new lO(e,t,r,n,i,s);return a&&(o.Ac=!0),o}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){ig("RemoteStore","RemoteStore shutting down."),e.Au.add(5),await o0(e),e.vu.shutdown(),e.Pu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lZ{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Vc(this.observer.next,e)}error(e){this.observer.error?this.Vc(this.observer.error,e):iy("Uncaught Error in snapshot listener:",e.toString())}Sc(){this.muted=!0}Vc(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l0{constructor(e,t,r,n){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=n,this.user=ih.UNAUTHENTICATED,this.clientId=iO.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async e=>{ig("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(r,e=>(ig("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new iI(iE.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();let e=new i_;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(r){let t=lm(r,"Failed to shutdown persistence");e.reject(t)}}),e.promise}}async function l1(e,t){e.asyncQueue.verifyOperationInProgress(),ig("FirestoreClient","Initializing OfflineComponentProvider");let r=await e.getConfiguration();await t.initialize(r);let n=r.initialUser;e.setCredentialChangeListener(async e=>{n.isEqual(e)||(await oR(t.localStore,e),n=e)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function l2(e,t){e.asyncQueue.verifyOperationInProgress();let r=await l9(e);ig("FirestoreClient","Initializing OnlineComponentProvider");let n=await e.getConfiguration();await t.initialize(r,n),e.setCredentialChangeListener(e=>lc(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,r)=>lc(t.remoteStore,r)),e._onlineComponents=t}async function l9(e){if(!e._offlineComponents){if(e._uninitializedComponentsProvider){ig("FirestoreClient","Using user provided OfflineComponentProvider");try{await l1(e,e._uninitializedComponentsProvider._offline)}catch(t){if(!("FirebaseError"===t.name?t.code===iE.FAILED_PRECONDITION||t.code===iE.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code))throw t;iv("Error using user provided cache. Falling back to memory cache: "+t),await l1(e,new lJ)}}else ig("FirestoreClient","Using default OfflineComponentProvider"),await l1(e,new lJ)}return e._offlineComponents}async function l4(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(ig("FirestoreClient","Using user provided OnlineComponentProvider"),await l2(e,e._uninitializedComponentsProvider._online)):(ig("FirestoreClient","Using default OnlineComponentProvider"),await l2(e,new lY))),e._onlineComponents}async function l5(e){let t=await l4(e),r=t.eventManager;return r.onListen=lP.bind(null,t.syncEngine),r.onUnlisten=lL.bind(null,t.syncEngine),r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let l6=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l3(e,t,r){if(!r)throw new iI(iE.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function l7(e){if(!i$.isDocumentKey(e))throw new iI(iE.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function l8(e){if(i$.isDocumentKey(e))throw new iI(iE.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function ue(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{var t;let r=(t=e).constructor?t.constructor.name:null;return r?`a custom ${r} object`:"an object"}}return"function"==typeof e?"a function":ib()}function ut(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new iI(iE.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let r=ue(e);throw new iI(iE.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${r}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new iI(iE.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new iI(iE.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(e,t,r,n){if(!0===t&&!0===n)throw new iI(iE.INVALID_ARGUMENT,`${e} and ${r} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!1:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(e,t,r,n){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ur({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new iI(iE.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new iI(iE.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ur(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new iS;switch(e.type){case"firstParty":return new iN(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new iI(iE.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){let t=l6.get(e);t&&(ig("ComponentProvider","Removing Datastore"),l6.delete(e),t.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ua(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ui(this.firestore,e,this._key)}}class us{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new us(this.firestore,e,this._query)}}class ua extends us{constructor(e,t,r){super(e,t,new sq(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let e=this._path.popLast();return e.isEmpty()?null:new ui(this.firestore,null,new i$(e))}withConverter(e){return new ua(this.firestore,e,this._path)}}function uo(e,t,...r){if(e=$(e),l3("collection","path",t),e instanceof un){let n=iU.fromString(t,...r);return l8(n),new ua(e,null,n)}{if(!(e instanceof ui||e instanceof ua))throw new iI(iE.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let n=e._path.child(iU.fromString(t,...r));return l8(n),new ua(e.firestore,null,n)}}function ul(e,t,...r){if(e=$(e),1==arguments.length&&(t=iO.A()),l3("doc","path",t),e instanceof un){let n=iU.fromString(t,...r);return l7(n),new ui(e,null,new i$(n))}{if(!(e instanceof ui||e instanceof ua))throw new iI(iE.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let n=e._path.child(iU.fromString(t,...r));return l7(n),new ui(e.firestore,e instanceof ua?e.converter:null,new i$(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(){this.Kc=Promise.resolve(),this.Gc=[],this.Qc=!1,this.jc=[],this.zc=null,this.Wc=!1,this.Hc=!1,this.Jc=[],this.Lo=new oG(this,"async_queue_retry"),this.Yc=()=>{let e=oq();e&&ig("AsyncQueue","Visibility state changed to "+e.visibilityState),this.Lo.ko()};let e=oq();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Yc)}get isShuttingDown(){return this.Qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Xc(),this.Zc(e)}enterRestrictedMode(e){if(!this.Qc){this.Qc=!0,this.Hc=e||!1;let t=oq();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Yc)}}enqueue(e){if(this.Xc(),this.Qc)return new Promise(()=>{});let t=new i_;return this.Zc(()=>this.Qc&&this.Hc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Gc.push(e),this.ta()))}async ta(){if(0!==this.Gc.length){try{await this.Gc[0](),this.Gc.shift(),this.Lo.reset()}catch(e){if(!iG(e))throw e;ig("AsyncQueue","Operation failed with retryable error: "+e)}this.Gc.length>0&&this.Lo.xo(()=>this.ta())}}Zc(e){let t=this.Kc.then(()=>(this.Wc=!0,e().catch(e=>{let t;this.zc=e,this.Wc=!1;let r=(t=e.message||"",e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t);throw iy("INTERNAL UNHANDLED ERROR: ",r),e}).then(e=>(this.Wc=!1,e))));return this.Kc=t,t}enqueueAfterDelay(e,t,r){this.Xc(),this.Jc.indexOf(e)>-1&&(t=0);let n=lp.createAndSchedule(this,e,t,r,e=>this.ea(e));return this.jc.push(n),n}Xc(){this.zc&&ib()}verifyOperationInProgress(){}async na(){let e;do e=this.Kc,await e;while(e!==this.Kc)}sa(e){for(let t of this.jc)if(t.timerId===e)return!0;return!1}ia(e){return this.na().then(()=>{for(let t of(this.jc.sort((e,t)=>e.targetTimeMs-t.targetTimeMs),this.jc))if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.na()})}ra(e){this.Jc.push(e)}ea(e){let t=this.jc.indexOf(e);this.jc.splice(t,1)}}class uc extends un{constructor(e,t,r,n){super(e,t,r,n),this.type="firestore",this._queue=new uu,this._persistenceKey=(null==n?void 0:n.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||uf(this),this._firestoreClient.terminate()}}function uh(e,t){let r="object"==typeof e?e:eS(),n=eb(r,"firestore").getImmediate({identifier:"string"==typeof e?e:t||"(default)"});if(!n._initialized){let e=k("firestore");e&&function(e,t,r,n={}){var i;let s=(e=ut(e,un))._getSettings();if("firestore.googleapis.com"!==s.host&&s.host!==t&&iv("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},s),{host:`${t}:${r}`,ssl:!1})),n.mockUserToken){let t,r;if("string"==typeof n.mockUserToken)t=n.mockUserToken,r=ih.MOCK_USER;else{t=/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e,t){if(e.uid)throw Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');let r=t||"demo-project",n=e.iat||0,i=e.sub||e.user_id;if(!i)throw Error("mockUserToken must contain 'sub' or 'user_id' field!");let s=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:n,exp:n+3600,auth_time:n,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[w(JSON.stringify({alg:"none",type:"JWT"})),w(JSON.stringify(s)),""].join(".")}(n.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);let s=n.mockUserToken.sub||n.mockUserToken.user_id;if(!s)throw new iI(iE.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");r=new ih(s)}e._authCredentials=new ik(new iT(t,r))}}(n,...e)}return n}function ud(e){return e._firestoreClient||uf(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function uf(e){var t,r,n,i,s,a;let o=e._freezeSettings(),l=(i=e._databaseId,s=(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",a=e._persistenceKey,new sn(i,s,a,o.host,o.ssl,o.experimentalForceLongPolling,o.experimentalAutoDetectLongPolling,o.useFetchStreams));e._firestoreClient=new l0(e._authCredentials,e._appCheckCredentials,e._queue,l),(null===(r=o.cache)||void 0===r?void 0:r._offlineComponentProvider)&&(null===(n=o.cache)||void 0===n?void 0:n._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:o.cache.kind,_offline:o.cache._offlineComponentProvider,_online:o.cache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class up{constructor(e){this._byteString=e}static fromBase64String(e){try{return new up(i5.fromBase64String(e))}catch(e){throw new iI(iE.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new up(i5.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class um{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new iI(iE.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ij(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ug{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uy{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new iI(iE.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new iI(iE.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return iP(this._lat,e._lat)||iP(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let uv=/^__.*__$/;class uw{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return null!==this.fieldMask?new aT(e,this.data,this.fieldMask,t,this.fieldTransforms):new a_(e,this.data,t,this.fieldTransforms)}}function ub(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ib()}}class uE{constructor(e,t,r,n,i,s){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=n,void 0===i&&this.oa(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get ua(){return this.settings.ua}ca(e){return new uE(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}aa(e){var t;let r=null===(t=this.path)||void 0===t?void 0:t.child(e),n=this.ca({path:r,ha:!1});return n.la(e),n}fa(e){var t;let r=null===(t=this.path)||void 0===t?void 0:t.child(e),n=this.ca({path:r,ha:!1});return n.oa(),n}da(e){return this.ca({path:void 0,ha:!0})}_a(e){return uR(e,this.settings.methodName,this.settings.wa||!1,this.path,this.settings.ma)}contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}oa(){if(this.path)for(let e=0;e<this.path.length;e++)this.la(this.path.get(e))}la(e){if(0===e.length)throw this._a("Document fields must not be empty");if(ub(this.ua)&&uv.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class uI{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||oH(e)}ga(e,t,r,n=!1){return new uE({ua:e,methodName:t,ma:r,path:ij.emptyPath(),ha:!1,wa:n},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function u_(e){let t=e._freezeSettings(),r=oH(e._databaseId);return new uI(e._databaseId,!!t.ignoreUndefinedProperties,r)}function uT(e,t){if(uk(e=$(e)))return uC("Unsupported field value:",t,e),uS(e,t);if(e instanceof ug)return function(e,t){if(!ub(t.ua))throw t._a(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t._a(`${e._methodName}() is not currently supported inside arrays`);let r=e._toFieldTransform(t);r&&t.fieldTransforms.push(r)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.ha&&4!==t.ua)throw t._a("Nested arrays are not supported");return function(e,t){let r=[],n=0;for(let i of e){let e=uT(i,t.da(n));null==e&&(e={nullValue:"NULL_VALUE"}),r.push(e),n++}return{arrayValue:{values:r}}}(e,t)}return function(e,t){if(null===(e=$(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e){var r,n,i;return r=t.serializer,"number"==typeof(i=n=e)&&Number.isInteger(i)&&!iW(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER?as(n):ai(r,n)}if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){let r=iL.fromDate(e);return{timestampValue:a2(t.serializer,r)}}if(e instanceof iL){let r=new iL(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:a2(t.serializer,r)}}if(e instanceof uy)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof up)return{bytesValue:a9(t.serializer,e._byteString)};if(e instanceof ui){let r=t.databaseId,n=e.firestore._databaseId;if(!n.isEqual(r))throw t._a(`Document reference is for database ${n.projectId}/${n.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:a5(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t._a(`Unsupported field value: ${ue(e)}`)}(e,t)}function uS(e,t){let r={};return iJ(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):iX(e,(e,n)=>{let i=uT(n,t.aa(e));null!=i&&(r[e]=i)}),{mapValue:{fields:r}}}function uk(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof iL||e instanceof uy||e instanceof up||e instanceof ui||e instanceof ug)}function uC(e,t,r){if(!uk(r)||!("object"==typeof r&&null!==r&&(Object.getPrototypeOf(r)===Object.prototype||null===Object.getPrototypeOf(r)))){let n=ue(r);throw"an object"===n?t._a(e+" a custom object"):t._a(e+" "+n)}}let uA=RegExp("[~\\*/\\[\\]]");function uN(e,t,r){if(t.search(uA)>=0)throw uR(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,r);try{return new um(...t.split("."))._internalPath}catch(n){throw uR(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,r)}}function uR(e,t,r,n,i){let s=n&&!n.isEmpty(),a=void 0!==i,o=`Function ${t}() called with invalid data`;r&&(o+=" (via `toFirestore()`)"),o+=". ";let l="";return(s||a)&&(l+=" (found",s&&(l+=` in field ${n}`),a&&(l+=` in document ${i}`),l+=")"),new iI(iE.INVALID_ARGUMENT,o+e+l)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uD{constructor(e,t,r,n,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=n,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ui(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){let e=new uO(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){let t=this._document.data.field(uP("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class uO extends uD{data(){return super.data()}}function uP(e,t){return"string"==typeof t?uN(e,t):t instanceof um?t._internalPath:t._delegate._internalPath}class ux{}class uL extends ux{}function uM(e,t,...r){let n=[];for(let i of(t instanceof ux&&n.push(t),function(e){let t=e.filter(e=>e instanceof uU).length,r=e.filter(e=>e instanceof uF).length;if(t>1||t>0&&r>0)throw new iI(iE.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(n=n.concat(r)),n))e=i._apply(e);return e}class uF extends uL{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new uF(e,t,r)}_apply(e){let t=this._parse(e);return uB(e._query,t),new us(e.firestore,e.converter,sJ(e._query,t))}_parse(e){let t=u_(e.firestore),r=function(e,t,r,n,i,s,a){let o;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new iI(iE.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){uz(a,s);let t=[];for(let r of a)t.push(u$(n,e,r));o={arrayValue:{values:t}}}else o=u$(n,e,a)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||uz(a,s),o=function(e,t,r,n=!1){return uT(r,e.ga(n?4:3,t))}(r,t,a,"in"===s||"not-in"===s);return sC.create(i,s,o)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value);return r}}class uU extends ux{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new uU(e,t)}_parse(e){let t=this._queryConstraints.map(t=>t._parse(e)).filter(e=>e.getFilters().length>0);return 1===t.length?t[0]:sA.create(t,this._getOperator())}_apply(e){let t=this._parse(e);return 0===t.getFilters().length?e:(function(e,t){let r=e,n=t.getFlattenedFilters();for(let e of n)uB(r,e),r=sJ(r,e)}(e._query,t),new us(e.firestore,e.converter,sJ(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}class uV extends uL{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new uV(e,t)}_apply(e){let t=function(e,t,r){if(null!==e.startAt)throw new iI(iE.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new iI(iE.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");let n=new sS(t,r);return function(e,t){if(null===sG(e)){let r=sK(e);null!==r&&uq(e,r,t.field)}}(e,n),n}(e._query,this._field,this._direction);return new us(e.firestore,e.converter,function(e,t){let r=e.explicitOrderBy.concat([t]);return new sq(e.path,e.collectionGroup,r,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,t))}}function uj(e,t="asc"){let r=uP("orderBy",e);return uV._create(r,t)}function u$(e,t,r){if("string"==typeof(r=$(r))){if(""===r)throw new iI(iE.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!sW(t)&&-1!==r.indexOf("/"))throw new iI(iE.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${r}' contains a '/' character.`);let n=t.path.child(iU.fromString(r));if(!i$.isDocumentKey(n))throw new iI(iE.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return sd(e,new i$(n))}if(r instanceof ui)return sd(e,r._key);throw new iI(iE.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ue(r)}.`)}function uz(e,t){if(!Array.isArray(e)||0===e.length)throw new iI(iE.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function uB(e,t){if(t.isInequality()){let r=sK(e),n=t.field;if(null!==r&&!r.isEqual(n))throw new iI(iE.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${n.toString()}'`);let i=sG(e);null!==i&&uq(e,n,i)}let r=function(e,t){for(let r of e)for(let e of r.getFlattenedFilters())if(t.indexOf(e.op)>=0)return e.op;return null}(e.filters,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==r)throw r===t.op?new iI(iE.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new iI(iE.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${r.toString()}' filters.`)}function uq(e,t,r){if(!r.isEqual(t))throw new iI(iE.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${r.toString()}' instead.`)}class uH{convertValue(e,t="none"){switch(sa(e)){case 0:return null;case 1:return e.booleanValue;case 2:return i7(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(i8(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw ib()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){let r={};return iX(e,(e,n)=>{r[e]=this.convertValue(n,t)}),r}convertGeoPoint(e){return new uy(i7(e.latitude),i7(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":let r=st(e);return null==r?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(sr(e));default:return null}}convertTimestamp(e){let t=i3(e);return new iL(t.seconds,t.nanos)}convertDocumentKey(e,t){let r=iU.fromString(e);os(r)||ib();let n=new si(r.get(1),r.get(3)),i=new i$(r.popFirst(5));return n.isEqual(t)||iy(`Document ${i} contains a document reference within a different database (${n.projectId}/${n.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uG{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class uK extends uD{constructor(e,t,r,n,i,s){super(e,t,r,n,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){let t=new uW(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){let r=this._document.data.field(uP("DocumentSnapshot.get",e));if(null!==r)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class uW extends uK{data(e={}){return super.data(e)}}class uQ{constructor(e,t,r,n){this._firestore=e,this._userDataWriter=t,this._snapshot=n,this.metadata=new uG(n.hasPendingWrites,n.fromCache),this.query=r}get docs(){let e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new uW(this._firestore,this._userDataWriter,r.key,r,new uG(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){let t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new iI(iE.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map(r=>{let n=new uW(e._firestore,e._userDataWriter,r.doc.key,r.doc,new uG(e._snapshot.mutatedKeys.has(r.doc.key),e._snapshot.fromCache),e.query.converter);return r.doc,{type:"added",doc:n,oldIndex:-1,newIndex:t++}})}{let r=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>t||3!==e.type).map(t=>{let n=new uW(e._firestore,e._userDataWriter,t.doc.key,t.doc,new uG(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter),i=-1,s=-1;return 0!==t.type&&(i=r.indexOf(t.doc.key),r=r.delete(t.doc.key)),1!==t.type&&(s=(r=r.add(t.doc)).indexOf(t.doc.key)),{type:function(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ib()}}(t.type),doc:n,oldIndex:i,newIndex:s}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uX(e){e=ut(e,ui);let t=ut(e.firestore,uc);return(function(e,t,r={}){let n=new i_;return e.asyncQueue.enqueueAndForget(async()=>(function(e,t,r,n,i){var s;let a=new lZ({next:s=>{t.enqueueAndForget(()=>lI(e,o));let a=s.docs.has(r);!a&&s.fromCache?i.reject(new iI(iE.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&s.fromCache&&n&&"server"===n.source?i.reject(new iI(iE.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(s)},error:e=>i.reject(e)}),o=new lk((s=r.path,new sq(s)),a,{includeMetadataChanges:!0,Uu:!0});return lE(e,o)})(await l5(e),e.asyncQueue,t,r,n)),n.promise})(ud(t),e._key).then(r=>(function(e,t,r){let n=r.docs.get(t._key),i=new uJ(e);return new uK(e,i,t._key,n,new uG(r.hasPendingWrites,r.fromCache),t.converter)})(t,e,r))}class uJ extends uH{constructor(e){super(),this.firestore=e}convertBytes(e){return new up(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new ui(this.firestore,null,t)}}function uY(e){e=ut(e,us);let t=ut(e.firestore,uc),r=ud(t),n=new uJ(t);return(/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new iI(iE.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}(e._query),(function(e,t,r={}){let n=new i_;return e.asyncQueue.enqueueAndForget(async()=>(function(e,t,r,n,i){let s=new lZ({next:r=>{t.enqueueAndForget(()=>lI(e,a)),r.fromCache&&"server"===n.source?i.reject(new iI(iE.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(r)},error:e=>i.reject(e)}),a=new lk(r,s,{includeMetadataChanges:!0,Uu:!0});return lE(e,a)})(await l5(e),e.asyncQueue,t,r,n)),n.promise})(r,e._query).then(r=>new uQ(t,n,e,r)))}function uZ(e,t){return function(e,t){let r=new i_;return e.asyncQueue.enqueueAndForget(async()=>lM(await l4(e).then(e=>e.syncEngine),t,r)),r.promise}(ud(e),t)}!function(e=!0){id=e_,ew(new z("firestore",(t,{instanceIdentifier:r,options:n})=>{let i=t.getProvider("app").getImmediate(),s=new uc(new iC(t.getProvider("auth-internal")),new iD(t.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new iI(iE.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new si(e.options.projectId,t)}(i,r),i);return n=Object.assign({useFetchStreams:e},n),s._setSettings(n),s},"PUBLIC").setMultipleInstances(!0)),ek(ic,"3.11.0",void 0),ek(ic,"3.11.0","esm2017")}(),/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ek("firebase","9.21.0","app");let u0=eT({apiKey:"AIzaSyBNNso7XBbMe7QhH-skDlDxkzw0DLoaRdU",authDomain:"bitcent-final.firebaseapp.com",projectId:"bitcent-final"});var u1=r(7943);class u2{async save(e,t,r){var n,i;let s=uh(u0),a=null!==(n=null!=r?r:t.id)&&void 0!==n?n:u1.Z.new(),o=ul(s,e,a);return await function(e,t,r){var n;e=ut(e,ui);let i=ut(e.firestore,uc),s=(n=e.converter)?r&&(r.merge||r.mergeFields)?n.toFirestore(t,r):n.toFirestore(t):t;return uZ(i,[(function(e,t,r,n,i,s={}){let a,o;let l=e.ga(s.merge||s.mergeFields?2:0,t,r,i);uC("Data must be an object, but it was:",l,n);let u=uS(n,l);if(s.merge)a=new i9(l.fieldMask),o=l.fieldTransforms;else if(s.mergeFields){let e=[];for(let n of s.mergeFields){let i=function(e,t,r){if((t=$(t))instanceof um)return t._internalPath;if("string"==typeof t)return uN(e,t);throw uR("Field path arguments must be of type string or ",e,!1,void 0,r)}(t,n,r);if(!l.contains(i))throw new iI(iE.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);(function(e,t){return e.some(e=>e.isEqual(t))})(e,i)||e.push(i)}a=new i9(e),o=l.fieldTransforms.filter(e=>a.covers(e.field))}else a=null,o=l.fieldTransforms;return new uw(new sb(u),a,o)})(u_(i),"setDoc",e._key,s,null!==e.converter,r).toMutation(e._key,ay.none())])}(o,t),{...t,id:null!==(i=t.id)&&void 0!==i?i:a}}async delete(e,t){if(!t)return!1;let r=uh(u0),n=ul(r,e,t),i=await uX(n);return!!i.exists()&&(await uZ(ut(n.firestore,uc),[new aA(n._key,ay.none())]),!0)}async get(e,t,r){let n=uh(u0),i=uo(n,e),s=t?[uj(t,r)]:[],a=uM(i,...[],...s),o=await uY(a);return o.docs.map(this._firebaseDateConverter)}async getById(e,t){if(!t)return null;let r=uh(u0),n=ul(r,e,t),i=await uX(n);return this._firebaseDateConverter(i)}async getFiltered(e,t,r,n){var i,s;let a=uh(u0),o=uo(a,e),l=null!==(i=null==t?void 0:t.map(e=>(function(e,t,r){let n=uP("where",e);return uF._create(n,t,r)})(e.attribute,e.op,e.value)))&&void 0!==i?i:[],u=r?[uj(r,n)]:[],c=uM(o,...l,...u),h=await uY(c);return null!==(s=h.docs.map(this._firebaseDateConverter))&&void 0!==s?s:[]}_firebaseDateConverter(e){if(!e.exists())return null;let t={...e.data(),id:e.id};return t?Object.keys(t).reduce((e,r)=>{var n,i;let s=t[r];return{...e,[r]:null!==(i=null===(n=s.toDate)||void 0===n?void 0:n.call(s))&&void 0!==i?i:s}},{}):t}}var u9=r(1692);class u4{async save(e,t){return this._collection.save("finances/".concat(t.email,"/transactions"),e)}async delete(e,t){return this._collection.delete("finances/".concat(t.email,"/transactions"),e.id)}async get(e){let t="finances/".concat(e.email,"/transactions");return await this._collection.get(t,"date","asc")}async getByMonth(e,t){let r="finances/".concat(e.email,"/transactions");return await this._collection.getFiltered(r,[{attribute:"date",op:">=",value:u9.Z.firstDay(t)},{attribute:"date",op:"<=",value:u9.Z.lastDay(t)}])}constructor(){this._collection=new u2}}var u5=r(655);function u6(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}let u3=new O("auth","Firebase",u6()),u7=new J("@firebase/auth");function u8(e,...t){u7.logLevel<=eV.ERROR&&u7.error(`Auth (${e_}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(e,...t){throw cn(e,...t)}function ct(e,...t){return cn(e,...t)}function cr(e,t,r){let n=Object.assign(Object.assign({},u6()),{[t]:r}),i=new O("auth","Firebase",n);return i.create(t,{appName:e.name})}function cn(e,...t){if("string"!=typeof e){let r=t[0],n=[...t.slice(1)];return n[0]&&(n[0].appName=e.name),e._errorFactory.create(r,...n)}return u3.create(e,...t)}function ci(e,t,...r){if(!e)throw cn(t,...r)}function cs(e){let t="INTERNAL ASSERTION FAILED: "+e;throw u8(t),Error(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ca(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function co(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(e,t){this.shortDelay=e,this.longDelay=t,t>e||cs("Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(R())||"object"==typeof navigator&&"ReactNative"===navigator.product}get(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&("http:"===co()||"https:"===co()||function(){let e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}()||"connection"in navigator))||navigator.onLine?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cu(e,t){e.emulator||cs("Emulator should always be set here");let{url:r}=e.emulator;return t?`${r}${t.startsWith("/")?t.slice(1):t}`:r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void cs("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void cs("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void cs("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ch={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},cd=new cl(3e4,6e4);function cf(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function cp(e,t,r,n,i={}){return cm(e,i,async()=>{let i={},s={};n&&("GET"===t?s=n:i={body:JSON.stringify(n)});let a=M(Object.assign({key:e.config.apiKey},s)).slice(1),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/json",e.languageCode&&(o["X-Firebase-Locale"]=e.languageCode),cc.fetch()(cy(e,e.config.apiHost,r,a),Object.assign({method:t,headers:o,referrerPolicy:"no-referrer"},i))})}async function cm(e,t,r){e._canInitEmulator=!1;let n=Object.assign(Object.assign({},ch),t);try{let t=new cv(e),i=await Promise.race([r(),t.promise]);t.clearNetworkTimeout();let s=await i.json();if("needConfirmation"in s)throw cw(e,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{let t=i.ok?s.errorMessage:s.error.message,[r,a]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===r)throw cw(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===r)throw cw(e,"email-already-in-use",s);if("USER_DISABLED"===r)throw cw(e,"user-disabled",s);let o=n[r]||r.toLowerCase().replace(/[_\s]+/g,"-");if(a)throw cr(e,o,a);ce(e,o)}}catch(t){if(t instanceof D)throw t;ce(e,"network-request-failed",{message:String(t)})}}async function cg(e,t,r,n,i={}){let s=await cp(e,t,r,n,i);return"mfaPendingCredential"in s&&ce(e,"multi-factor-auth-required",{_serverResponse:s}),s}function cy(e,t,r,n){let i=`${t}${r}?${n}`;return e.config.emulator?cu(e.config,i):`${e.config.apiScheme}://${i}`}class cv{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(ct(this.auth,"network-request-failed")),cd.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function cw(e,t,r){let n={appName:e.name};r.email&&(n.email=r.email),r.phoneNumber&&(n.phoneNumber=r.phoneNumber);let i=ct(e,t,n);return i.customData._tokenResponse=r,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cb(e,t){return cp(e,"POST","/v1/accounts:delete",t)}async function cE(e,t){return cp(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cI(e){if(e)try{let t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}async function c_(e,t=!1){let r=$(e),n=await r.getIdToken(t),i=cS(n);ci(i&&i.exp&&i.auth_time&&i.iat,r.auth,"internal-error");let s="object"==typeof i.firebase?i.firebase:void 0,a=null==s?void 0:s.sign_in_provider;return{claims:i,token:n,authTime:cI(cT(i.auth_time)),issuedAtTime:cI(cT(i.iat)),expirationTime:cI(cT(i.exp)),signInProvider:a||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}function cT(e){return 1e3*Number(e)}function cS(e){let[t,r,n]=e.split(".");if(void 0===t||void 0===r||void 0===n)return u8("JWT malformed, contained fewer than 3 sections"),null;try{let e=b(r);if(!e)return u8("Failed to decode base64 JWT payload"),null;return JSON.parse(e)}catch(e){return u8("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ck(e,t,r=!1){if(r)return t;try{return await t}catch(t){throw t instanceof D&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){let e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;let e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,r=e-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;let t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(null==e?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cA{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=cI(this.lastLoginAt),this.creationTime=cI(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cN(e){var t;let r=e.auth,n=await e.getIdToken(),i=await ck(e,cE(r,{idToken:n}));ci(null==i?void 0:i.users.length,r,"internal-error");let s=i.users[0];e._notifyReloadListener(s);let a=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?s.providerUserInfo.map(e=>{var{providerId:t}=e,r=(0,u5._T)(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}}):[],o=function(e,t){let r=e.filter(e=>!t.some(t=>t.providerId===e.providerId));return[...r,...t]}(e.providerData,a),l=e.isAnonymous,u=!(e.email&&s.passwordHash)&&!(null==o?void 0:o.length),c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new cA(s.createdAt,s.lastLoginAt),isAnonymous:!!l&&u};Object.assign(e,c)}async function cR(e){let t=$(e);await cN(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cD(e,t){let r=await cm(e,{},async()=>{let r=M({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:n,apiKey:i}=e.config,s=cy(e,n,"/v1/token",`key=${i}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",cc.fetch()(s,{method:"POST",headers:a,body:r})});return{accessToken:r.access_token,expiresIn:r.expires_in,refreshToken:r.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cO{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ci(e.idToken,"internal-error"),ci(void 0!==e.idToken,"internal-error"),ci(void 0!==e.refreshToken,"internal-error");let t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){let t=cS(e);return ci(t,"internal-error"),ci(void 0!==t.exp,"internal-error"),ci(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return(ci(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired)?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){let{accessToken:r,refreshToken:n,expiresIn:i}=await cD(e,t);this.updateTokensAndExpiration(r,n,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*r}static fromJSON(e,t){let{refreshToken:r,accessToken:n,expirationTime:i}=t,s=new cO;return r&&(ci("string"==typeof r,"internal-error",{appName:e}),s.refreshToken=r),n&&(ci("string"==typeof n,"internal-error",{appName:e}),s.accessToken=n),i&&(ci("number"==typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new cO,this.toJSON())}_performRefresh(){return cs("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cP(e,t){ci("string"==typeof e||void 0===e,"internal-error",{appName:t})}class cx{constructor(e){var{uid:t,auth:r,stsTokenManager:n}=e,i=(0,u5._T)(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new cC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new cA(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){let t=await ck(this,this.stsTokenManager.getToken(this.auth,e));return ci(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return c_(this,e)}reload(){return cR(this)}_assign(e){this!==e&&(ci(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>Object.assign({},e)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){let t=new cx(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){ci(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await cN(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){let e=await this.getIdToken();return await ck(this,cb(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,n,i,s,a,o,l,u;let c=null!==(r=t.displayName)&&void 0!==r?r:void 0,h=null!==(n=t.email)&&void 0!==n?n:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(a=t.tenantId)&&void 0!==a?a:void 0,m=null!==(o=t._redirectEventId)&&void 0!==o?o:void 0,g=null!==(l=t.createdAt)&&void 0!==l?l:void 0,y=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:v,emailVerified:w,isAnonymous:b,providerData:E,stsTokenManager:I}=t;ci(v&&I,e,"internal-error");let _=cO.fromJSON(this.name,I);ci("string"==typeof v,e,"internal-error"),cP(c,e.name),cP(h,e.name),ci("boolean"==typeof w,e,"internal-error"),ci("boolean"==typeof b,e,"internal-error"),cP(d,e.name),cP(f,e.name),cP(p,e.name),cP(m,e.name),cP(g,e.name),cP(y,e.name);let T=new cx({uid:v,auth:e,email:h,emailVerified:w,displayName:c,isAnonymous:b,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:_,createdAt:g,lastLoginAt:y});return E&&Array.isArray(E)&&(T.providerData=E.map(e=>Object.assign({},e))),m&&(T._redirectEventId=m),T}static async _fromIdTokenResponse(e,t,r=!1){let n=new cO;n.updateFromServerResponse(t);let i=new cx({uid:t.localId,auth:e,stsTokenManager:n,isAnonymous:r});return await cN(i),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cL=new Map;function cM(e){e instanceof Function||cs("Expected a class definition");let t=cL.get(e);return t?(t instanceof e||cs("Instance stored in cache mismatched with class"),t):(t=new e,cL.set(e,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cF{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){let t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cU(e,t,r){return`firebase:${e}:${t}:${r}`}cF.type="NONE";class cV{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;let{config:n,name:i}=this.auth;this.fullUserKey=cU(this.userKey,n.apiKey,i),this.fullPersistenceKey=cU("persistence",n.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){let e=await this.persistence._get(this.fullUserKey);return e?cx._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;let t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new cV(cM(cF),e,r);let n=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e),i=n[0]||cM(cF),s=cU(r,e.config.apiKey,e.name),a=null;for(let r of t)try{let t=await r._get(s);if(t){let n=cx._fromJSON(e,t);r!==i&&(a=n),i=r;break}}catch(e){}let o=n.filter(e=>e._shouldAllowMigration);return i._shouldAllowMigration&&o.length&&(i=o[0],a&&await i._set(s,a.toJSON()),await Promise.all(t.map(async e=>{if(e!==i)try{await e._remove(s)}catch(e){}}))),new cV(i,e,r)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cj(e){let t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(cq(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";{if(t.includes("edge/"))return"Edge";if(c$(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(cG(t))return"Blackberry";if(cK(t))return"Webos";if(cz(t))return"Safari";if((t.includes("chrome/")||cB(t))&&!t.includes("edge/"))return"Chrome";if(cH(t))return"Android";let r=e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);if((null==r?void 0:r.length)===2)return r[1]}return"Other"}function c$(e=R()){return/firefox\//i.test(e)}function cz(e=R()){let t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function cB(e=R()){return/crios\//i.test(e)}function cq(e=R()){return/iemobile/i.test(e)}function cH(e=R()){return/android/i.test(e)}function cG(e=R()){return/blackberry/i.test(e)}function cK(e=R()){return/webos/i.test(e)}function cW(e=R()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function cQ(e=R()){return cW(e)||cH(e)||cK(e)||cG(e)||/windows phone/i.test(e)||cq(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cX(e,t=[]){let r;switch(e){case"Browser":r=cj(R());break;case"Worker":r=`${cj(R())}-${e}`;break;default:r=e}let n=t.length?t.join(","):"FirebaseCore-web";return`${r}/JsCore/${e_}/${n}`}async function cJ(e,t){return cp(e,"GET","/v2/recaptchaConfig",cf(e,t))}function cY(e){return void 0!==e&&void 0!==e.enterprise}class cZ{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,void 0===e.recaptchaKey)throw Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(e=>"EMAIL_PASSWORD_PROVIDER"===e.provider&&"OFF"!==e.enforcementState)}}function c0(e){return new Promise((t,r)=>{var n,i;let s=document.createElement("script");s.setAttribute("src",e),s.onload=t,s.onerror=e=>{let t=ct("internal-error");t.customData=e,r(t)},s.type="text/javascript",s.charset="UTF-8",(null!==(i=null===(n=document.getElementsByTagName("head"))||void 0===n?void 0:n[0])&&void 0!==i?i:document).appendChild(s)})}function c1(e){return`__${e}${Math.floor(1e6*Math.random())}`}class c2{constructor(e){this.type="recaptcha-enterprise",this.auth=$(e)}async verify(e="verify",t=!1){async function r(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise(async(t,r)=>{cJ(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(n=>{if(void 0===n.recaptchaKey)r(Error("recaptcha Enterprise site key undefined"));else{let r=new cZ(n);return null==e.tenantId?e._agentRecaptchaConfig=r:e._tenantRecaptchaConfigs[e.tenantId]=r,t(r.siteKey)}}).catch(e=>{r(e)})})}function n(t,r,n){let i=window.grecaptcha;cY(i)?i.enterprise.ready(()=>{i.enterprise.execute(t,{action:e}).then(e=>{r(e)}).catch(()=>{r("NO_RECAPTCHA")})}):n(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((e,i)=>{r(this.auth).then(r=>{if(!t&&cY(window.grecaptcha))n(r,e,i);else{if("undefined"==typeof window){i(Error("RecaptchaVerifier is only supported in browser"));return}c0("https://www.google.com/recaptcha/enterprise.js?render="+r).then(()=>{n(r,e,i)}).catch(e=>{i(e)})}}).catch(e=>{i(e)})})}}async function c9(e,t,r,n=!1){let i;let s=new c2(e);try{i=await s.verify(r)}catch(e){i=await s.verify(r,!0)}let a=Object.assign({},t);return n?Object.assign(a,{captchaResp:i}):Object.assign(a,{captchaResponse:i}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c4{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){let r=t=>new Promise((r,n)=>{try{let n=e(t);r(n)}catch(e){n(e)}});r.onAbort=t,this.queue.push(r);let n=this.queue.length-1;return()=>{this.queue[n]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;let t=[];try{for(let r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(e){for(let e of(t.reverse(),t))try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==e?void 0:e.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c5{constructor(e,t,r,n){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new c6(this),this.idTokenSubscription=new c6(this),this.beforeStateQueue=new c4(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=u3,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=cM(t)),this._initializationPromise=this.queue(async()=>{var r,n;if(!this._deleted&&(this.persistenceManager=await cV.create(this,e),!this._deleted)){if(null===(r=this._popupRedirectResolver)||void 0===r?void 0:r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(n=this.currentUser)||void 0===n?void 0:n.uid)||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;let e=await this.assertedPersistence.getCurrentUser();if(this.currentUser||e){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;let r=await this.assertedPersistence.getCurrentUser(),n=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();let r=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null==n?void 0:n._redirectEventId,a=await this.tryRedirectSignIn(e);(!r||r===s)&&(null==a?void 0:a.user)&&(n=a.user,i=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(n)}catch(e){n=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(e))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return(ci(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId)?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await cN(e)}catch(e){if((null==e?void 0:e.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;let e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){let t=e?$(e):null;return t&&ci(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ci(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(cM(e))})}async initializeRecaptchaConfig(){let e=await cJ(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new cZ(e);if(null==this.tenantId?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled){let e=new c2(this);e.verify()}}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new O("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){let r=await this.getOrInitRedirectPersistenceManager(t);return null===e?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){let t=e&&cM(e)||this._popupRedirectResolver;ci(t,this,"argument-error"),this.redirectPersistenceManager=await cV.create(this,[cM(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return(this._isInitialized&&await this.queue(async()=>{}),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e)?this._currentUser:(null===(r=this.redirectUser)||void 0===r?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);let r=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,n){if(this._deleted)return()=>{};let i="function"==typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return(ci(s,this,"internal-error"),s.then(()=>i(this.currentUser)),"function"==typeof t)?e.addObserver(t,r,n):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ci(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=cX(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;let t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);let r=await (null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);let n=await this._getAppCheckToken();return n&&(t["X-Firebase-AppCheck"]=n),t}async _getAppCheckToken(){var e;let t=await (null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null==t?void 0:t.error)&&function(e,...t){u7.logLevel<=eV.WARN&&u7.warn(`Auth (${e_}): ${e}`,...t)}(`Error while retrieving App Check token: ${t.error}`),null==t?void 0:t.token}}class c6{constructor(e){this.auth=e,this.observer=null,this.addObserver=function(e,t){let r=new V(e,void 0);return r.subscribe.bind(r)}(e=>this.observer=e)}get next(){return ci(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function c3(e){let t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function c7(e){if(!e)return null;let t=Number(e);return isNaN(t)?null:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c8{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return cs("not implemented")}_getIdTokenResponse(e){return cs("not implemented")}_linkToIdToken(e,t){return cs("not implemented")}_getReauthenticationResolver(e){return cs("not implemented")}}async function he(e,t){return cp(e,"POST","/v1/accounts:update",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ht(e,t){return cg(e,"POST","/v1/accounts:signInWithPassword",cf(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hr(e,t){return cg(e,"POST","/v1/accounts:signInWithEmailLink",cf(e,t))}async function hn(e,t){return cg(e,"POST","/v1/accounts:signInWithEmailLink",cf(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi extends c8{constructor(e,t,r,n=null){super("password",r),this._email=e,this._password=t,this._tenantId=n}static _fromEmailAndPassword(e,t){return new hi(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new hi(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){let t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){var t;switch(this.signInMethod){case"password":let r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(null===(t=e._getRecaptchaConfig())||void 0===t||!t.emailPasswordEnabled)return ht(e,r).catch(async t=>{if("auth/missing-recaptcha-token"!==t.code)return Promise.reject(t);{console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");let t=await c9(e,r,"signInWithPassword");return ht(e,t)}});{let t=await c9(e,r,"signInWithPassword");return ht(e,t)}case"emailLink":return hr(e,{email:this._email,oobCode:this._password});default:ce(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return he(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return hn(e,{idToken:t,email:this._email,oobCode:this._password});default:ce(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hs(e,t){return cg(e,"POST","/v1/accounts:signInWithIdp",cf(e,t))}class ha extends c8{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){let t=new ha(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ce("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){let t="string"==typeof e?JSON.parse(e):e,{providerId:r,signInMethod:n}=t,i=(0,u5._T)(t,["providerId","signInMethod"]);if(!r||!n)return null;let s=new ha(r,n);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){let t=this.buildRequest();return hs(e,t)}_linkToIdToken(e,t){let r=this.buildRequest();return r.idToken=t,hs(e,r)}_getReauthenticationResolver(e){let t=this.buildRequest();return t.autoCreate=!1,hs(e,t)}buildRequest(){let e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{let t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=M(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ho(e,t){return cp(e,"POST","/v1/accounts:sendVerificationCode",cf(e,t))}async function hl(e,t){return cg(e,"POST","/v1/accounts:signInWithPhoneNumber",cf(e,t))}async function hu(e,t){let r=await cg(e,"POST","/v1/accounts:signInWithPhoneNumber",cf(e,t));if(r.temporaryProof)throw cw(e,"account-exists-with-different-credential",r);return r}let hc={USER_NOT_FOUND:"user-not-found"};async function hh(e,t){let r=Object.assign(Object.assign({},t),{operation:"REAUTH"});return cg(e,"POST","/v1/accounts:signInWithPhoneNumber",cf(e,r),hc)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hd extends c8{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new hd({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new hd({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return hl(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return hu(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return hh(e,this._makeVerificationRequest())}_makeVerificationRequest(){let{temporaryProof:e,phoneNumber:t,verificationId:r,verificationCode:n}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:r,code:n}}toJSON(){let e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));let{verificationId:t,verificationCode:r,phoneNumber:n,temporaryProof:i}=e;return r||t||n||i?new hd({verificationId:t,verificationCode:r,phoneNumber:n,temporaryProof:i}):null}}class hf{constructor(e){var t,r,n,i,s,a;let o=F(U(e)),l=null!==(t=o.apiKey)&&void 0!==t?t:null,u=null!==(r=o.oobCode)&&void 0!==r?r:null,c=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(n=o.mode)&&void 0!==n?n:null);ci(l&&u&&c,"argument-error"),this.apiKey=l,this.operation=c,this.code=u,this.continueUrl=null!==(i=o.continueUrl)&&void 0!==i?i:null,this.languageCode=null!==(s=o.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(a=o.tenantId)&&void 0!==a?a:null}static parseLink(e){let t=function(e){let t=F(U(e)).link,r=t?F(U(t)).deep_link_id:null,n=F(U(e)).deep_link_id,i=n?F(U(n)).link:null;return i||n||r||t||e}(e);try{return new hf(t)}catch(e){return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hp{constructor(){this.providerId=hp.PROVIDER_ID}static credential(e,t){return hi._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){let r=hf.parseLink(t);return ci(r,"argument-error"),hi._fromEmailAndCode(e,r.code,r.tenantId)}}hp.PROVIDER_ID="password",hp.EMAIL_PASSWORD_SIGN_IN_METHOD="password",hp.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hm{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hg extends hm{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hy extends hg{constructor(){super("facebook.com")}static credential(e){return ha._fromParams({providerId:hy.PROVIDER_ID,signInMethod:hy.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hy.credentialFromTaggedObject(e)}static credentialFromError(e){return hy.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return hy.credential(e.oauthAccessToken)}catch(e){return null}}}hy.FACEBOOK_SIGN_IN_METHOD="facebook.com",hy.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hv extends hg{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ha._fromParams({providerId:hv.PROVIDER_ID,signInMethod:hv.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return hv.credentialFromTaggedObject(e)}static credentialFromError(e){return hv.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return hv.credential(t,r)}catch(e){return null}}}hv.GOOGLE_SIGN_IN_METHOD="google.com",hv.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hw extends hg{constructor(){super("github.com")}static credential(e){return ha._fromParams({providerId:hw.PROVIDER_ID,signInMethod:hw.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hw.credentialFromTaggedObject(e)}static credentialFromError(e){return hw.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return hw.credential(e.oauthAccessToken)}catch(e){return null}}}hw.GITHUB_SIGN_IN_METHOD="github.com",hw.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hb extends hg{constructor(){super("twitter.com")}static credential(e,t){return ha._fromParams({providerId:hb.PROVIDER_ID,signInMethod:hb.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return hb.credentialFromTaggedObject(e)}static credentialFromError(e){return hb.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return hb.credential(t,r)}catch(e){return null}}}hb.TWITTER_SIGN_IN_METHOD="twitter.com",hb.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hE{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,n=!1){let i=await cx._fromIdTokenResponse(e,r,n),s=hI(r),a=new hE({user:i,providerId:s,_tokenResponse:r,operationType:t});return a}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);let n=hI(r);return new hE({user:e,providerId:n,_tokenResponse:r,operationType:t})}}function hI(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h_ extends D{constructor(e,t,r,n){var i;super(t.code,t.message),this.operationType=r,this.user=n,Object.setPrototypeOf(this,h_.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,n){return new h_(e,t,r,n)}}function hT(e,t,r,n){let i="reauthenticate"===t?r._getReauthenticationResolver(e):r._getIdTokenResponse(e);return i.catch(r=>{if("auth/multi-factor-auth-required"===r.code)throw h_._fromErrorAndOperation(e,r,t,n);throw r})}async function hS(e,t,r=!1){let n=await ck(e,t._linkToIdToken(e.auth,await e.getIdToken()),r);return hE._forOperation(e,"link",n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hk(e,t,r=!1){let{auth:n}=e,i="reauthenticate";try{let s=await ck(e,hT(n,i,t,e),r);ci(s.idToken,n,"internal-error");let a=cS(s.idToken);ci(a,n,"internal-error");let{sub:o}=a;return ci(e.uid===o,n,"user-mismatch"),hE._forOperation(e,i,s)}catch(e){throw(null==e?void 0:e.code)==="auth/user-not-found"&&ce(n,"user-mismatch"),e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hC(e,t,r=!1){let n="signIn",i=await hT(e,n,t),s=await hE._fromIdTokenResponse(e,n,i);return r||await e._updateCurrentUser(s.user),s}function hA(e,t,r,n){return $(e).onIdTokenChanged(t,r,n)}new WeakMap;let hN="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hR{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{if(!this.storage)return Promise.resolve(!1);return this.storage.setItem(hN,"1"),this.storage.removeItem(hN),Promise.resolve(!0)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){let t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}class hD extends hR{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(){let e=R();return cz(e)||cW(e)}()&&function(){try{return!!(window&&window!==window.top)}catch(e){return!1}}(),this.fallbackToPolling=cQ(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(let t of Object.keys(this.listeners)){let r=this.storage.getItem(t),n=this.localCache[t];r!==n&&e(t,n,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((e,t,r)=>{this.notifyListeners(e,r)});return}let r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){let n=this.storage.getItem(r);if(e.newValue!==n)null!==e.newValue?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}let n=()=>{let e=this.storage.getItem(r);(t||this.localCache[r]!==e)&&this.notifyListeners(r,e)},i=this.storage.getItem(r);(function(){let e=R();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0})()&&10===document.documentMode&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(n,10):n()}notifyListeners(e,t){this.localCache[e]=t;let r=this.listeners[e];if(r)for(let e of Array.from(r))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){let t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}hD.type="LOCAL";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hO extends hR{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}hO.type="SESSION";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hP{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){let t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;let r=new hP(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){let{eventId:t,eventType:r,data:n}=e.data,i=this.handlersMap[r];if(!(null==i?void 0:i.size))return;e.ports[0].postMessage({status:"ack",eventId:t,eventType:r});let s=Array.from(i).map(async t=>t(e.origin,n)),a=await Promise.all(s.map(async e=>{try{let t=await e;return{fulfilled:!0,value:t}}catch(e){return{fulfilled:!1,reason:e}}}));e.ports[0].postMessage({status:"done",eventId:t,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hx(e="",t=10){let r="";for(let e=0;e<t;e++)r+=Math.floor(10*Math.random());return e+r}hP.receivers=[];/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hL{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){let n,i;let s="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!s)throw Error("connection_unavailable");return new Promise((a,o)=>{let l=hx("",20);s.port1.start();let u=setTimeout(()=>{o(Error("unsupported_event"))},r);i={messageChannel:s,onMessage(e){if(e.data.eventId===l)switch(e.data.status){case"ack":clearTimeout(u),n=setTimeout(()=>{o(Error("timeout"))},3e3);break;case"done":clearTimeout(n),a(e.data.response);break;default:clearTimeout(u),clearTimeout(n),o(Error("invalid_response"))}}},this.handlers.add(i),s.port1.addEventListener("message",i.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[s.port2])}).finally(()=>{i&&this.removeMessageHandler(i)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hM(){return window}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hF(){return void 0!==hM().WorkerGlobalScope&&"function"==typeof hM().importScripts}async function hU(){if(!(null==navigator?void 0:navigator.serviceWorker))return null;try{let e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hV="firebaseLocalStorageDb",hj="firebaseLocalStorage",h$="fbase_key";class hz{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function hB(e,t){return e.transaction([hj],t?"readwrite":"readonly").objectStore(hj)}function hq(){let e=indexedDB.open(hV,1);return new Promise((t,r)=>{e.addEventListener("error",()=>{r(e.error)}),e.addEventListener("upgradeneeded",()=>{let t=e.result;try{t.createObjectStore(hj,{keyPath:h$})}catch(e){r(e)}}),e.addEventListener("success",async()=>{let r=e.result;r.objectStoreNames.contains(hj)?t(r):(r.close(),await function(){let e=indexedDB.deleteDatabase(hV);return new hz(e).toPromise()}(),t(await hq()))})})}async function hH(e,t,r){let n=hB(e,!0).put({[h$]:t,value:r});return new hz(n).toPromise()}async function hG(e,t){let r=hB(e,!1).get(t),n=await new hz(r).toPromise();return void 0===n?null:n.value}function hK(e,t){let r=hB(e,!0).delete(t);return new hz(r).toPromise()}class hW{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await hq()),this.db}async _withRetries(e){let t=0;for(;;)try{let t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return hF()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=hP._getInstance(hF()?self:null),this.receiver._subscribe("keyChanged",async(e,t)=>{let r=await this._poll();return{keyProcessed:r.includes(t.key)}}),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await hU(),!this.activeServiceWorker)return;this.sender=new hL(this.activeServiceWorker);let r=await this.sender._send("ping",{},800);r&&(null===(e=r[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=r[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null==navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;let e=await hq();return await hH(e,hN,"1"),await hK(e,hN),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>hH(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){let t=await this._withRetries(t=>hG(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>hK(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){let e=await this._withRetries(e=>{let t=hB(e,!1).getAll();return new hz(t).toPromise()});if(!e||0!==this.pendingWrites)return[];let t=[],r=new Set;for(let{fbase_key:n,value:i}of e)r.add(n),JSON.stringify(this.localCache[n])!==JSON.stringify(i)&&(this.notifyListeners(n,i),t.push(n));for(let e of Object.keys(this.localCache))this.localCache[e]&&!r.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;let r=this.listeners[e];if(r)for(let e of Array.from(r))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}async function hQ(e,t,r){var n,i,s;let a=await r.verify();try{let o;if(ci("string"==typeof a,e,"argument-error"),ci("recaptcha"===r.type,e,"argument-error"),o="string"==typeof t?{phoneNumber:t}:t,"session"in o){let t=o.session;if("phoneNumber"in o){ci("enroll"===t.type,e,"internal-error");let r=await (i={idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,recaptchaToken:a}},cp(e,"POST","/v2/accounts/mfaEnrollment:start",cf(e,i)));return r.phoneSessionInfo.sessionInfo}{ci("signin"===t.type,e,"internal-error");let r=(null===(n=o.multiFactorHint)||void 0===n?void 0:n.uid)||o.multiFactorUid;ci(r,e,"missing-multi-factor-info");let i=await (s={mfaPendingCredential:t.credential,mfaEnrollmentId:r,phoneSignInInfo:{recaptchaToken:a}},cp(e,"POST","/v2/accounts/mfaSignIn:start",cf(e,s)));return i.phoneResponseInfo.sessionInfo}}{let{sessionInfo:t}=await ho(e,{phoneNumber:o.phoneNumber,recaptchaToken:a});return t}}finally{r._reset()}}hW.type="LOCAL",c1("rcb"),new cl(3e4,6e4);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hX{constructor(e){this.providerId=hX.PROVIDER_ID,this.auth=$(e)}verifyPhoneNumber(e,t){return hQ(this.auth,e,$(t))}static credential(e,t){return hd._fromVerification(e,t)}static credentialFromResult(e){return hX.credentialFromTaggedObject(e)}static credentialFromError(e){return hX.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{phoneNumber:t,temporaryProof:r}=e;return t&&r?hd._fromTokenResponse(t,r):null}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hJ(e,t){return t?cM(t):(ci(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}hX.PROVIDER_ID="phone",hX.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hY extends c8{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return hs(e,this._buildIdpRequest())}_linkToIdToken(e,t){return hs(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return hs(e,this._buildIdpRequest())}_buildIdpRequest(e){let t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function hZ(e){return hC(e.auth,new hY(e),e.bypassAuthState)}function h0(e){let{auth:t,user:r}=e;return ci(r,t,"internal-error"),hk(r,new hY(e),e.bypassAuthState)}async function h1(e){let{auth:t,user:r}=e;return ci(r,t,"internal-error"),hS(r,new hY(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h2{constructor(e,t,r,n,i=!1){this.auth=e,this.resolver=r,this.user=n,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}})}async onAuthEvent(e){let{urlResponse:t,sessionId:r,postBody:n,tenantId:i,error:s,type:a}=e;if(s){this.reject(s);return}let o={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:n||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(o))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return hZ;case"linkViaPopup":case"linkViaRedirect":return h1;case"reauthViaPopup":case"reauthViaRedirect":return h0;default:ce(this.auth,"internal-error")}}resolve(e){this.pendingPromise||cs("Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){this.pendingPromise||cs("Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let h9=new cl(2e3,1e4);async function h4(e,t,r){let n=$(e);!function(e,t,r){if(!(t instanceof r))throw r.name!==t.constructor.name&&ce(e,"argument-error"),cr(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}(e,t,hm);let i=hJ(n,r),s=new h5(n,"signInViaPopup",t,i);return s.executeNotNull()}class h5 extends h2{constructor(e,t,r,n,i){super(e,t,n,i),this.provider=r,this.authWindow=null,this.pollId=null,h5.currentPopupAction&&h5.currentPopupAction.cancel(),h5.currentPopupAction=this}async executeNotNull(){let e=await this.execute();return ci(e,this.auth,"internal-error"),e}async onExecution(){1===this.filter.length||cs("Popup operations only handle one event");let e=hx();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(ct(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(ct(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,h5.currentPopupAction=null}pollUserCancellation(){let e=()=>{var t,r;if(null===(r=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===r?void 0:r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ct(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,h9.get())};e()}}h5.currentPopupAction=null;let h6=new Map;class h3 extends h2{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=h6.get(this.auth._key());if(!e){try{let t=await h7(this.resolver,this.auth),r=t?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}h6.set(this.auth._key(),e)}return this.bypassAuthState||h6.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"===e.type){this.resolve(null);return}if(e.eventId){let t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function h7(e,t){let r=cU("pendingRedirect",t.config.apiKey,t.name),n=cM(e._redirectPersistence);if(!await n._isAvailable())return!1;let i=await n._get(r)==="true";return await n._remove(r),i}function h8(e,t){h6.set(e._key(),t)}async function de(e,t,r=!1){let n=$(e),i=hJ(n,t),s=new h3(n,i,r),a=await s.execute();return a&&!r&&(delete a.user._redirectEventId,await n._persistUserIfCurrent(a.user),await n._setRedirectUser(null,t)),a}class dt{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return dn(e);default:return!1}}(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!dn(e)){let n=(null===(r=e.error.code)||void 0===r?void 0:r.split("auth/")[1])||"internal-error";t.onError(ct(this.auth,n))}else t.onAuthEvent(e)}isEventForConsumer(e,t){let r=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(dr(e))}saveEventToCache(e){this.cachedEventUids.add(dr(e)),this.lastProcessedEventTime=Date.now()}}function dr(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function dn({type:e,error:t}){return"unknown"===e&&(null==t?void 0:t.code)==="auth/no-auth-event"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function di(e,t={}){return cp(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ds=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,da=/^https?/;async function dl(e){if(e.config.emulator)return;let{authorizedDomains:t}=await di(e);for(let e of t)try{if(function(e){let t=ca(),{protocol:r,hostname:n}=new URL(t);if(e.startsWith("chrome-extension://")){let i=new URL(e);return""===i.hostname&&""===n?"chrome-extension:"===r&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===r&&i.hostname===n}if(!da.test(r))return!1;if(ds.test(e))return n===e;let i=e.replace(/\./g,"\\."),s=RegExp("^(.+\\."+i+"|"+i+")$","i");return s.test(n)}(e))return}catch(e){}ce(e,"unauthorized-domain")}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let du=new cl(3e4,6e4);function dc(){let e=hM().___jsl;if(null==e?void 0:e.H){for(let t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}}let dh=null,dd=new cl(5e3,15e3),df={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},dp=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);async function dm(e){let t=await (dh=dh||new Promise((t,r)=>{var n,i,s;function a(){dc(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{dc(),r(ct(e,"network-request-failed"))},timeout:du.get()})}if(null===(i=null===(n=hM().gapi)||void 0===n?void 0:n.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else if(null===(s=hM().gapi)||void 0===s?void 0:s.load)a();else{let t=c1("iframefcb");return hM()[t]=()=>{gapi.load?a():r(ct(e,"network-request-failed"))},c0(`https://apis.google.com/js/api.js?onload=${t}`).catch(e=>r(e))}}).catch(e=>{throw dh=null,e})),r=hM().gapi;return ci(r,e,"internal-error"),t.open({where:document.body,url:function(e){let t=e.config;ci(t.authDomain,e,"auth-domain-config-required");let r=t.emulator?cu(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,n={apiKey:t.apiKey,appName:e.name,v:e_},i=dp.get(e.config.apiHost);i&&(n.eid=i);let s=e._getFrameworks();return s.length&&(n.fw=s.join(",")),`${r}?${M(n).slice(1)}`}(e),messageHandlersFilter:r.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:df,dontclear:!0},t=>new Promise(async(r,n)=>{await t.restyle({setHideOnLeave:!1});let i=ct(e,"network-request-failed"),s=hM().setTimeout(()=>{n(i)},dd.get());function a(){hM().clearTimeout(s),r(t)}t.ping(a).then(a,()=>{n(i)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dg={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class dy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}let dv=encodeURIComponent("fac");async function dw(e,t,r,n,i,s){ci(e.config.authDomain,e,"auth-domain-config-required"),ci(e.config.apiKey,e,"invalid-api-key");let a={apiKey:e.config.apiKey,appName:e.name,authType:r,redirectUrl:n,v:e_,eventId:i};if(t instanceof hm)for(let[r,n]of(t.setDefaultLanguage(e.languageCode),a.providerId=t.providerId||"",!function(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(t.getCustomParameters())&&(a.customParameters=JSON.stringify(t.getCustomParameters())),Object.entries(s||{})))a[r]=n;if(t instanceof hg){let e=t.getScopes().filter(e=>""!==e);e.length>0&&(a.scopes=e.join(","))}e.tenantId&&(a.tid=e.tenantId);let o=a;for(let e of Object.keys(o))void 0===o[e]&&delete o[e];let l=await e._getAppCheckToken(),u=l?`#${dv}=${encodeURIComponent(l)}`:"";return`${function({config:e}){return e.emulator?cu(e,"emulator/auth/handler"):`https://${e.authDomain}/__/auth/handler`}(e)}?${M(o).slice(1)}${u}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let db="webStorageSupport",dE=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=hO,this._completeRedirectFn=de,this._overrideRedirectResult=h8}async _openPopup(e,t,r,n){var i;(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager)||cs("_initialize() not called before _openPopup()");let s=await dw(e,t,r,ca(),n);return function(e,t,r,n=500,i=600){let s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-n)/2,0).toString(),o="",l=Object.assign(Object.assign({},dg),{width:n.toString(),height:i.toString(),top:s,left:a}),u=R().toLowerCase();r&&(o=cB(u)?"_blank":r),c$(u)&&(t=t||"http://localhost",l.scrollbars="yes");let c=Object.entries(l).reduce((e,[t,r])=>`${e}${t}=${r},`,"");if(function(e=R()){var t;return cW(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(u)&&"_self"!==o)return function(e,t){let r=document.createElement("a");r.href=e,r.target=t;let n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),r.dispatchEvent(n)}(t||"",o),new dy(null);let h=window.open(t||"",o,c);ci(h,e,"popup-blocked");try{h.focus()}catch(e){}return new dy(h)}(e,s,hx())}async _openRedirect(e,t,r,n){await this._originValidation(e);let i=await dw(e,t,r,ca(),n);return hM().location.href=i,new Promise(()=>{})}_initialize(e){let t=e._key();if(this.eventManagers[t]){let{manager:e,promise:r}=this.eventManagers[t];return e?Promise.resolve(e):(r||cs("If manager is not set, promise should be"),r)}let r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){let t=await dm(e),r=new dt(e);return t.register("authEvent",t=>{ci(null==t?void 0:t.authEvent,e,"invalid-auth-event");let n=r.onEvent(t.authEvent);return{status:n?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){let r=this.iframes[e._key()];r.send(db,{type:db},r=>{var n;let i=null===(n=null==r?void 0:r[0])||void 0===n?void 0:n[db];void 0!==i&&t(!!i),ce(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){let t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=dl(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return cQ()||cz()||cW()}};class dI{constructor(e){this.factorId=e}_process(e,t,r){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,r);case"signin":return this._finalizeSignIn(e,t.credential);default:return cs("unexpected MultiFactorSessionType")}}}class d_ extends dI{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new d_(e)}_finalizeEnroll(e,t,r){return cp(e,"POST","/v2/accounts/mfaEnrollment:finalize",cf(e,{idToken:t,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()}))}_finalizeSignIn(e,t){return cp(e,"POST","/v2/accounts/mfaSignIn:finalize",cf(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()}))}}class dT extends dI{constructor(e,t,r){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=r}static _fromSecret(e,t){return new dT(t,void 0,e)}static _fromEnrollmentId(e,t){return new dT(t,e)}async _finalizeEnroll(e,t,r){return ci(void 0!==this.secret,e,"argument-error"),cp(e,"POST","/v2/accounts/mfaEnrollment:finalize",cf(e,{idToken:t,displayName:r,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)}))}async _finalizeSignIn(e,t){ci(void 0!==this.enrollmentId&&void 0!==this.otp,e,"argument-error");let r={verificationCode:this.otp};return cp(e,"POST","/v2/accounts/mfaSignIn:finalize",cf(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:r}))}}class dS{constructor(e,t,r,n,i,s,a){this.sessionInfo=s,this.auth=a,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=r,this.codeIntervalSeconds=n,this.enrollmentCompletionDeadline=i}static _fromStartTotpMfaEnrollmentResponse(e,t){return new dS(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){var r;let n=!1;return(dk(e)||dk(t))&&(n=!0),n&&(dk(e)&&(e=(null===(r=this.auth.currentUser)||void 0===r?void 0:r.email)||"unknownuser"),dk(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function dk(e){return void 0===e||(null==e?void 0:e.length)===0}var dC="@firebase/auth",dA="0.23.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dN{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;let t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;let t=this.auth.onIdTokenChanged(t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();let t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ci(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}let dR=A("authIdTokenMaxAge")||300,dD=null,dO=e=>async t=>{let r=t&&await t.getIdTokenResult(),n=r&&(new Date().getTime()-Date.parse(r.issuedAtTime))/1e3;if(n&&n>dR)return;let i=null==r?void 0:r.token;dD!==i&&(dD=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};a="Browser",ew(new z("auth",(e,{options:t})=>{let r=e.getProvider("app").getImmediate(),n=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:s,authDomain:o}=r.options;ci(s&&!s.includes(":"),"invalid-api-key",{appName:r.name}),ci(!(null==o?void 0:o.includes(":")),"argument-error",{appName:r.name});let l={apiKey:s,authDomain:o,clientPlatform:a,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:cX(a)},u=new c5(r,n,i,l);return function(e,t){let r=(null==t?void 0:t.persistence)||[],n=(Array.isArray(r)?r:[r]).map(cM);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(n,null==t?void 0:t.popupRedirectResolver)}(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{let n=e.getProvider("auth-internal");n.initialize()})),ew(new z("auth-internal",e=>{let t=$(e.getProvider("auth").getImmediate());return new dN(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),ek(dC,dA,/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(a)),ek(dC,dA,"esm2017");class dP{async loginGoogle(){let e=await h4(this._auth,new hv);return this.toUserConverter(e.user)}logout(){return $(this._auth).signOut()}monitoring(e){return hA(this._auth,async t=>{let r=this.toUserConverter(t);e(r)})}toUserConverter(e){var t;if(!(null==e?void 0:e.email))return null;let r=e.email.split("@")[0];return{id:e.uid,name:null!==(t=e.displayName)&&void 0!==t?t:r,email:e.email,imgUrl:e.photoURL}}constructor(){this._auth=function(e=eS()){let t=eb(e,"auth");if(t.isInitialized())return t.getImmediate();let r=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e,t){let r=eb(e,"auth");if(r.isInitialized()){let e=r.getImmediate(),n=r.getOptions();if(x(n,null!=t?t:{}))return e;ce(e,"already-initialized")}let n=r.initialize({options:t});return n}(e,{popupRedirectResolver:dE,persistence:[hW,hD,hO]}),n=A("authTokenSyncURL");if(n){var i;let e=dO(n);i=()=>e(r.currentUser),$(r).beforeAuthStateChanged(e,i),hA(r,t=>e(t))}let s=S("auth");return s&&function(e,t,r){let n=$(e);ci(n._canInitEmulator,n,"emulator-config-failed"),ci(/^https?:\/\//.test(t),n,"invalid-emulator-scheme");let i=!!(null==r?void 0:r.disableWarnings),s=c3(t),{host:a,port:o}=function(e){let t=c3(e),r=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!r)return{host:"",port:null};let n=r[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(n);if(i){let e=i[1];return{host:e,port:c7(n.substr(e.length+1))}}{let[e,t]=n.split(":");return{host:e,port:c7(t)}}}(t),l=null===o?"":`:${o}`;n.config.emulator={url:`${s}//${a}${l}/`},n.settings.appVerificationDisabledForTesting=!0,n.emulatorConfig=Object.freeze({host:a,port:o,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||function(){function e(){let e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}()}(r,`http://${s}`),r}(u0)}}class dx{authMonitoring(e){return this._auth.monitoring(async t=>{e(t?{...t,...await this.check(t.email)}:null)})}logout(){return this._auth.logout()}async loginGoogle(){let e=await this._auth.loginGoogle();if(!e)return null;let t=await this.check(e.email);return t||(t=await this.save(e)),{...e,...t}}async save(e){return await this._collection.save("users",e,e.email)}async check(e){return await this._collection.getById("users",e)}constructor(){this._auth=new dP,this._collection=new u2}}let dL=new class{get transaction(){return new u4}get user(){return new dx}};var dM=dL},7943:function(e,t,r){"use strict";let n;r.d(t,{Z:function(){return c}});let i="undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);var s={randomUUID:i};let a=new Uint8Array(16);function o(){if(!n&&!(n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)))throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return n(a)}let l=[];for(let e=0;e<256;++e)l.push((e+256).toString(16).slice(1));var u=function(e,t,r){if(s.randomUUID&&!t&&!e)return s.randomUUID();e=e||{};let n=e.random||(e.rng||o)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,t){r=r||0;for(let e=0;e<16;++e)t[r+e]=n[e];return t}return function(e,t=0){return(l[e[t+0]]+l[e[t+1]]+l[e[t+2]]+l[e[t+3]]+"-"+l[e[t+4]]+l[e[t+5]]+"-"+l[e[t+6]]+l[e[t+7]]+"-"+l[e[t+8]]+l[e[t+9]]+"-"+l[e[t+10]]+l[e[t+11]]+l[e[t+12]]+l[e[t+13]]+l[e[t+14]]+l[e[t+15]]).toLowerCase()}(n)};class c{static new(){return u()}}},1692:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});class n{static months(e){return Array(12).fill(0).map((t,r)=>new Date(2e3,r,1).toLocaleDateString(null!=e?e:n._language,{month:"short"}).toUpperCase().substring(0,3))}static firstDay(e){return new Date(e.getFullYear(),e.getMonth(),1)}static lastDay(e){return new Date(e.getFullYear(),e.getMonth()+1,0,23,59,59)}}n._language="pt-BR",n.ddmmyy={format(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/",r=e.getDate().toString().padStart(2,"0"),n=(e.getMonth()+1).toString().padStart(2,"0");return"".concat(r).concat(t).concat(n).concat(t).concat(e.getFullYear())}},n.mmyy={format(e,t){var r;return null==e?void 0:null===(r=e.toLocaleDateString)||void 0===r?void 0:r.call(e,null!=t?t:n._language,{month:"long",year:"numeric"})}},n.ddmm={format(e,t){var r;return null==e?void 0:null===(r=e.toLocaleDateString)||void 0===r?void 0:r.call(e,null!=t?t:n._language,{day:"2-digit",month:"short"})}}},9212:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return a}});var n=r(5893),i=r(3936);r(7952);var s=r(6803);function a(e){let{Component:t,pageProps:r}=e;return(0,n.jsx)(s.Me,{theme:{colorScheme:"dark"},children:(0,n.jsx)(i.H,{children:(0,n.jsx)(t,{...r})})})}},7952:function(){},7663:function(e){!function(){var t={229:function(e){var t,r,n,i=e.exports={};function s(){throw Error("setTimeout has not been defined")}function a(){throw Error("clearTimeout has not been defined")}function o(e){if(t===setTimeout)return setTimeout(e,0);if((t===s||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:s}catch(e){t=s}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var l=[],u=!1,c=-1;function h(){u&&n&&(u=!1,n.length?l=n.concat(l):c=-1,l.length&&d())}function d(){if(!u){var e=o(h);u=!0;for(var t=l.length;t;){for(n=l,l=[];++c<t;)n&&n[c].run();c=-1,t=l.length}n=null,u=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function p(){}i.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];l.push(new f(e,t)),1!==l.length||u||o(d)},f.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=p,i.addListener=p,i.once=p,i.off=p,i.removeListener=p,i.removeAllListeners=p,i.emit=p,i.prependListener=p,i.prependOnceListener=p,i.listeners=function(e){return[]},i.binding=function(e){throw Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw Error("process.chdir is not supported")},i.umask=function(){return 0}}},r={};function n(e){var i=r[e];if(void 0!==i)return i.exports;var s=r[e]={exports:{}},a=!0;try{t[e](s,s.exports,n),a=!1}finally{a&&delete r[e]}return s.exports}n.ab="//";var i=n(229);e.exports=i}()},9921:function(e,t){"use strict";/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r="function"==typeof Symbol&&Symbol.for,n=r?Symbol.for("react.element"):60103,i=r?Symbol.for("react.portal"):60106,s=r?Symbol.for("react.fragment"):60107,a=r?Symbol.for("react.strict_mode"):60108,o=r?Symbol.for("react.profiler"):60114,l=r?Symbol.for("react.provider"):60109,u=r?Symbol.for("react.context"):60110,c=r?Symbol.for("react.async_mode"):60111,h=r?Symbol.for("react.concurrent_mode"):60111,d=r?Symbol.for("react.forward_ref"):60112,f=r?Symbol.for("react.suspense"):60113,p=r?Symbol.for("react.suspense_list"):60120,m=r?Symbol.for("react.memo"):60115,g=r?Symbol.for("react.lazy"):60116,y=r?Symbol.for("react.block"):60121,v=r?Symbol.for("react.fundamental"):60117,w=r?Symbol.for("react.responder"):60118,b=r?Symbol.for("react.scope"):60119;function E(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case c:case h:case s:case o:case a:case f:return e;default:switch(e=e&&e.$$typeof){case u:case d:case g:case m:case l:return e;default:return t}}case i:return t}}}function I(e){return E(e)===h}t.AsyncMode=c,t.ConcurrentMode=h,t.ContextConsumer=u,t.ContextProvider=l,t.Element=n,t.ForwardRef=d,t.Fragment=s,t.Lazy=g,t.Memo=m,t.Portal=i,t.Profiler=o,t.StrictMode=a,t.Suspense=f,t.isAsyncMode=function(e){return I(e)||E(e)===c},t.isConcurrentMode=I,t.isContextConsumer=function(e){return E(e)===u},t.isContextProvider=function(e){return E(e)===l},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return E(e)===d},t.isFragment=function(e){return E(e)===s},t.isLazy=function(e){return E(e)===g},t.isMemo=function(e){return E(e)===m},t.isPortal=function(e){return E(e)===i},t.isProfiler=function(e){return E(e)===o},t.isStrictMode=function(e){return E(e)===a},t.isSuspense=function(e){return E(e)===f},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===s||e===h||e===o||e===a||e===f||e===p||"object"==typeof e&&null!==e&&(e.$$typeof===g||e.$$typeof===m||e.$$typeof===l||e.$$typeof===u||e.$$typeof===d||e.$$typeof===v||e.$$typeof===w||e.$$typeof===b||e.$$typeof===y)},t.typeOf=E},9864:function(e,t,r){"use strict";e.exports=r(9921)},655:function(e,t,r){"use strict";r.d(t,{_T:function(){return i},ev:function(){return s},pi:function(){return n}});var n=function(){return(n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};function i(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)0>t.indexOf(n[i])&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r}function s(e,t,r){if(r||2==arguments.length)for(var n,i=0,s=t.length;i<s;i++)!n&&i in t||(n||(n=Array.prototype.slice.call(t,0,i)),n[i]=t[i]);return e.concat(n||Array.prototype.slice.call(t))}}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(6840),t(6885)}),_N_E=e.O()}]);