(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-270e14a0"],{"107c":function(e,t,n){var r=n("d039");e.exports=r((function(){var e=RegExp("(?<a>b)","string".charAt(5));return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")}))},1276:function(e,t,n){"use strict";var r=n("d784"),o=n("44e7"),l=n("825a"),a=n("1d80"),c=n("4840"),i=n("8aa5"),s=n("50c4"),u=n("14c3"),p=n("9263"),d=n("9f7f"),h=n("d039"),f=d.UNSUPPORTED_Y,v=[].push,g=Math.min,x=4294967295,m=!h((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));r("split",(function(e,t,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,n){var r=String(a(this)),l=void 0===n?x:n>>>0;if(0===l)return[];if(void 0===e)return[r];if(!o(e))return t.call(r,e,l);var c,i,s,u=[],d=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),h=0,f=new RegExp(e.source,d+"g");while(c=p.call(f,r)){if(i=f.lastIndex,i>h&&(u.push(r.slice(h,c.index)),c.length>1&&c.index<r.length&&v.apply(u,c.slice(1)),s=c[0].length,h=i,u.length>=l))break;f.lastIndex===c.index&&f.lastIndex++}return h===r.length?!s&&f.test("")||u.push(""):u.push(r.slice(h)),u.length>l?u.slice(0,l):u}:"0".split(void 0,0).length?function(e,n){return void 0===e&&0===n?[]:t.call(this,e,n)}:t,[function(t,n){var o=a(this),l=void 0==t?void 0:t[e];return void 0!==l?l.call(t,o,n):r.call(String(o),t,n)},function(e,o){var a=n(r,this,e,o,r!==t);if(a.done)return a.value;var p=l(this),d=String(e),h=c(p,RegExp),v=p.unicode,m=(p.ignoreCase?"i":"")+(p.multiline?"m":"")+(p.unicode?"u":"")+(f?"g":"y"),b=new h(f?"^(?:"+p.source+")":p,m),w=void 0===o?x:o>>>0;if(0===w)return[];if(0===d.length)return null===u(b,d)?[d]:[];var S=0,T=0,y=[];while(T<d.length){b.lastIndex=f?0:T;var E,R=u(b,f?d.slice(T):d);if(null===R||(E=g(s(b.lastIndex+(f?T:0)),d.length))===S)T=i(d,T,v);else{if(y.push(d.slice(S,T)),y.length===w)return y;for(var k=1;k<=R.length-1;k++)if(y.push(R[k]),y.length===w)return y;T=S=E}}return y.push(d.slice(S)),y}]}),!m,f)},"13eb":function(e,t,n){"use strict";n("4f71")},"14c3":function(e,t,n){var r=n("c6b6"),o=n("9263");e.exports=function(e,t){var n=e.exec;if("function"===typeof n){var l=n.call(e,t);if("object"!==typeof l)throw TypeError("RegExp exec method returned something other than an Object or null");return l}if("RegExp"!==r(e))throw TypeError("RegExp#exec called on incompatible receiver");return o.call(e,t)}},"44e7":function(e,t,n){var r=n("861d"),o=n("c6b6"),l=n("b622"),a=l("match");e.exports=function(e){var t;return r(e)&&(void 0!==(t=e[a])?!!t:"RegExp"==o(e))}},"4f71":function(e,t,n){},"8aa5":function(e,t,n){"use strict";var r=n("6547").charAt;e.exports=function(e,t,n){return t+(n?r(e,t).length:1)}},9263:function(e,t,n){"use strict";var r=n("ad6d"),o=n("9f7f"),l=n("5692"),a=n("7c73"),c=n("69f3").get,i=n("fce3"),s=n("107c"),u=RegExp.prototype.exec,p=l("native-string-replace",String.prototype.replace),d=u,h=function(){var e=/a/,t=/b*/g;return u.call(e,"a"),u.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),f=o.UNSUPPORTED_Y||o.BROKEN_CARET,v=void 0!==/()??/.exec("")[1],g=h||v||f||i||s;g&&(d=function(e){var t,n,o,l,i,s,g,x=this,m=c(x),b=m.raw;if(b)return b.lastIndex=x.lastIndex,t=d.call(b,e),x.lastIndex=b.lastIndex,t;var w=m.groups,S=f&&x.sticky,T=r.call(x),y=x.source,E=0,R=e;if(S&&(T=T.replace("y",""),-1===T.indexOf("g")&&(T+="g"),R=String(e).slice(x.lastIndex),x.lastIndex>0&&(!x.multiline||x.multiline&&"\n"!==e[x.lastIndex-1])&&(y="(?: "+y+")",R=" "+R,E++),n=new RegExp("^(?:"+y+")",T)),v&&(n=new RegExp("^"+y+"$(?!\\s)",T)),h&&(o=x.lastIndex),l=u.call(S?n:x,R),S?l?(l.input=l.input.slice(E),l[0]=l[0].slice(E),l.index=x.lastIndex,x.lastIndex+=l[0].length):x.lastIndex=0:h&&l&&(x.lastIndex=x.global?l.index+l[0].length:o),v&&l&&l.length>1&&p.call(l[0],n,(function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(l[i]=void 0)})),l&&w)for(l.groups=s=a(null),i=0;i<w.length;i++)g=w[i],s[g[0]]=l[g[1]];return l}),e.exports=d},"9f7f":function(e,t,n){var r=n("d039"),o=function(e,t){return RegExp(e,t)};t.UNSUPPORTED_Y=r((function(){var e=o("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=r((function(){var e=o("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},a15b:function(e,t,n){"use strict";var r=n("23e7"),o=n("44ad"),l=n("fc6a"),a=n("a640"),c=[].join,i=o!=Object,s=a("join",",");r({target:"Array",proto:!0,forced:i||!s},{join:function(e){return c.call(l(this),void 0===e?",":e)}})},a358:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return i}));n("a15b"),n("ac1f"),n("1276");var r=n("cff8"),o=n.n(r),l=n("b775"),a={test:"controller.example.test",messageShow:"controller.example.messageShow",messageShowConfirm:"controller.example.messageShowConfirm",selectFolder:"controller.example.selectFolder",openDirectory:"controller.example.openDirectory",loadViewContent:"controller.example.loadViewContent",removeViewContent:"controller.example.removeViewContent",createWindow:"controller.example.createWindow",sendNotification:"controller.example.sendNotification",initPowerMonitor:"controller.example.initPowerMonitor",getScreen:"controller.example.getScreen",openSoftware:"controller.example.openSoftware",autoLaunch:"controller.example.autoLaunch",setTheme:"controller.example.setTheme",getTheme:"controller.example.getTheme",checkForUpdater:"controller.example.checkForUpdater",downloadApp:"controller.example.downloadApp",dbOperation:"controller.example.dbOperation",sqlitedbOperation:"controller.example.sqlitedbOperation",uploadFile:"controller.example.uploadFile",checkHttpServer:"controller.example.checkHttpServer",doHttpRequest:"controller.example.doHttpRequest",doSocketRequest:"controller.example.doSocketRequest",ipcInvokeMsg:"controller.example.ipcInvokeMsg",ipcSendSyncMsg:"controller.example.ipcSendSyncMsg",ipcSendMsg:"controller.example.ipcSendMsg",getWCid:"controller.example.getWCid",startJavaServer:"controller.example.startJavaServer",closeJavaServer:"controller.example.closeJavaServer",someJob:"controller.example.someJob",timerJobProgress:"controller.example.timerJobProgress",hello:"controller.example.hello"},c={appUpdater:"app.updater",window1ToWindow2:"window1-to-window2",window2ToWindow1:"window2-to-window1"},i=function(e,t){var n=o.a.get("httpServiceConfig"),r=n.server||"http://localhost:7071",a=e.split(".").join("/");return a=r+"/"+a,console.log("url:",a),Object(l["b"])({url:a,method:"post",data:t,params:{},timeout:6e4})}},a640:function(e,t,n){"use strict";var r=n("d039");e.exports=function(e,t){var n=[][e];return!!n&&r((function(){n.call(null,t||function(){throw 1},1)}))}},ac1f:function(e,t,n){"use strict";var r=n("23e7"),o=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o})},ad6d:function(e,t,n){"use strict";var r=n("825a");e.exports=function(){var e=r(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},d784:function(e,t,n){"use strict";n("ac1f");var r=n("6eeb"),o=n("9263"),l=n("d039"),a=n("b622"),c=n("9112"),i=a("species"),s=RegExp.prototype;e.exports=function(e,t,n,u){var p=a(e),d=!l((function(){var t={};return t[p]=function(){return 7},7!=""[e](t)})),h=d&&!l((function(){var t=!1,n=/a/;return"split"===e&&(n={},n.constructor={},n.constructor[i]=function(){return n},n.flags="",n[p]=/./[p]),n.exec=function(){return t=!0,null},n[p](""),!t}));if(!d||!h||n){var f=/./[p],v=t(p,""[e],(function(e,t,n,r,l){var a=t.exec;return a===o||a===s.exec?d&&!l?{done:!0,value:f.call(t,n,r)}:{done:!0,value:e.call(n,t,r)}:{done:!1}}));r(String.prototype,e,v[0]),r(s,p,v[1])}u&&c(s[p],"sham",!0)}},db5a:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app-base-screen"}},[e._m(0),n("div",{staticClass:"one-block-2"},[n("a-space",[n("a-button",{on:{click:function(t){return e.getTheme()}}},[e._v("获取模式")])],1),n("span",[e._v(" 结果："+e._s(e.currentThemeMode)+" ")])],1),n("div",{staticClass:"one-block-1"},[e._v(" 2. 设置主题模式（请自行实现前端UI效果） ")]),n("div",{staticClass:"one-block-2"},[n("a-radio-group",{on:{change:e.setTheme},model:{value:e.currentThemeMode,callback:function(t){e.currentThemeMode=t},expression:"currentThemeMode"}},[n("a-radio",{attrs:{value:e.themeList[0]}},[e._v(" "+e._s(e.themeList[0])+" ")]),n("a-radio",{attrs:{value:e.themeList[1]}},[e._v(" "+e._s(e.themeList[1])+" ")]),n("a-radio",{attrs:{value:e.themeList[2]}},[e._v(" "+e._s(e.themeList[2])+" ")])],1)],1)])},o=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"one-block-1"},[n("span",[e._v(" 1. 系统主题模式 ")])])}],l=n("a358"),a={data:function(){return{currentThemeMode:"",themeList:["system","light","dark"]}},mounted:function(){},methods:{setTheme:function(e){var t=this;this.currentThemeMode=e.target.value,console.log("setTheme currentThemeMode:",this.currentThemeMode),this.$ipc.invoke(l["a"].setTheme,this.currentThemeMode).then((function(e){console.log("result:",e),t.currentThemeMode=e}))},getTheme:function(){var e=this;this.$ipc.invoke(l["a"].getTheme).then((function(t){console.log("result:",t),e.currentThemeMode=t}))}}},c=a,i=(n("13eb"),n("2877")),s=Object(i["a"])(c,r,o,!1,null,"6d2477b5",null);t["default"]=s.exports},fce3:function(e,t,n){var r=n("d039");e.exports=r((function(){var e=RegExp(".","string".charAt(0));return!(e.dotAll&&e.exec("\n")&&"s"===e.flags)}))}}]);
//# sourceMappingURL=chunk-270e14a0.e49c1c54.js.map