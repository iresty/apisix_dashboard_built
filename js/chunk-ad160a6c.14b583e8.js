(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ad160a6c"],{"28a5":function(e,t,r){"use strict";var n=r("aae3"),a=r("cb7c"),o=r("ebd6"),i=r("0390"),u=r("9def"),c=r("5f1b"),s=r("520a"),l=r("79e5"),f=Math.min,p=[].push,d="split",m="length",b="lastIndex",h=4294967295,v=!l((function(){RegExp(h,"y")}));r("214f")("split",2,(function(e,t,r,l){var y;return y="c"=="abbc"[d](/(b)*/)[1]||4!="test"[d](/(?:)/,-1)[m]||2!="ab"[d](/(?:ab)*/)[m]||4!="."[d](/(.?)(.?)/)[m]||"."[d](/()()/)[m]>1||""[d](/.?/)[m]?function(e,t){var a=String(this);if(void 0===e&&0===t)return[];if(!n(e))return r.call(a,e,t);var o,i,u,c=[],l=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),f=0,d=void 0===t?h:t>>>0,v=new RegExp(e.source,l+"g");while(o=s.call(v,a)){if(i=v[b],i>f&&(c.push(a.slice(f,o.index)),o[m]>1&&o.index<a[m]&&p.apply(c,o.slice(1)),u=o[0][m],f=i,c[m]>=d))break;v[b]===o.index&&v[b]++}return f===a[m]?!u&&v.test("")||c.push(""):c.push(a.slice(f)),c[m]>d?c.slice(0,d):c}:"0"[d](void 0,0)[m]?function(e,t){return void 0===e&&0===t?[]:r.call(this,e,t)}:r,[function(r,n){var a=e(this),o=void 0==r?void 0:r[t];return void 0!==o?o.call(r,a,n):y.call(String(a),r,n)},function(e,t){var n=l(y,e,this,t,y!==r);if(n.done)return n.value;var s=a(e),p=String(this),d=o(s,RegExp),m=s.unicode,b=(s.ignoreCase?"i":"")+(s.multiline?"m":"")+(s.unicode?"u":"")+(v?"y":"g"),g=new d(v?s:"^(?:"+s.source+")",b),O=void 0===t?h:t>>>0;if(0===O)return[];if(0===p.length)return null===c(g,p)?[p]:[];var k=0,_=0,x=[];while(_<p.length){g.lastIndex=v?_:0;var w,j=c(g,v?p:p.slice(_));if(null===j||(w=f(u(g.lastIndex+(v?0:_)),p.length))===k)_=i(p,_,m);else{if(x.push(p.slice(k,_)),x.length===O)return x;for(var E=1;E<=j.length-1;E++)if(x.push(j[E]),x.length===O)return x;_=k=w}}return x.push(p.slice(k)),x}]}))},"504c":function(e,t,r){var n=r("9e1e"),a=r("0d58"),o=r("6821"),i=r("52a7").f;e.exports=function(e){return function(t){var r,u=o(t),c=a(u),s=c.length,l=0,f=[];while(s>l)r=c[l++],n&&!i.call(u,r)||f.push(e?[r,u[r]]:u[r]);return f}}},"5dbc":function(e,t,r){var n=r("d3f4"),a=r("8b97").set;e.exports=function(e,t,r){var o,i=t.constructor;return i!==r&&"function"==typeof i&&(o=i.prototype)!==r.prototype&&n(o)&&a&&a(e,o),e}},"8b97":function(e,t,r){var n=r("d3f4"),a=r("cb7c"),o=function(e,t){if(a(e),!n(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,n){try{n=r("9b43")(Function.call,r("11e9").f(Object.prototype,"__proto__").set,2),n(e,[]),t=!(e instanceof Array)}catch(a){t=!0}return function(e,r){return o(e,r),t?e.__proto__=r:n(e,r),e}}({},!1):void 0),check:o}},aa77:function(e,t,r){var n=r("5ca1"),a=r("be13"),o=r("79e5"),i=r("fdef"),u="["+i+"]",c="​",s=RegExp("^"+u+u+"*"),l=RegExp(u+u+"*$"),f=function(e,t,r){var a={},u=o((function(){return!!i[e]()||c[e]()!=c})),s=a[e]=u?t(p):i[e];r&&(a[r]=s),n(n.P+n.F*u,"String",a)},p=f.trim=function(e,t){return e=String(a(e)),1&t&&(e=e.replace(s,"")),2&t&&(e=e.replace(l,"")),e};e.exports=f},b32d:function(e,t,r){"use strict";var n=r("bc3a"),a=r.n(n),o=r("5c96"),i=a.a.create({baseURL:"/apisix/admin/",timeout:5e3});i.interceptors.request.use((function(e){return e}),(function(e){Promise.reject(e)})),i.interceptors.response.use((function(e){return e.data}),(function(e){return Object(o["Message"])({message:e.response.data.error_msg||e.message,type:"error",duration:5e3}),Promise.reject(e)})),t["a"]=i},b5f7:function(e,t,r){"use strict";r.d(t,"e",(function(){return a})),r.d(t,"b",(function(){return o})),r.d(t,"d",(function(){return i})),r.d(t,"a",(function(){return u})),r.d(t,"c",(function(){return c}));var n=r("b32d"),a=function(e,t){return Object(n["a"])({url:"/upstreams/".concat(e),method:"PUT",data:t})},o=function(e){return Object(n["a"])({url:"/upstreams/".concat(e),method:"GET"})},i=function(e){return Object(n["a"])({url:"/upstreams/".concat(e),method:"DELETE"})},u=function(e){return Object(n["a"])({url:"/upstreams",method:"POST",data:e})},c=function(){return Object(n["a"])({url:"/upstreams",method:"GET"})}},c5f6:function(e,t,r){"use strict";var n=r("7726"),a=r("69a8"),o=r("2d95"),i=r("5dbc"),u=r("6a99"),c=r("79e5"),s=r("9093").f,l=r("11e9").f,f=r("86cc").f,p=r("aa77").trim,d="Number",m=n[d],b=m,h=m.prototype,v=o(r("2aeb")(h))==d,y="trim"in String.prototype,g=function(e){var t=u(e,!1);if("string"==typeof t&&t.length>2){t=y?t.trim():p(t,3);var r,n,a,o=t.charCodeAt(0);if(43===o||45===o){if(r=t.charCodeAt(2),88===r||120===r)return NaN}else if(48===o){switch(t.charCodeAt(1)){case 66:case 98:n=2,a=49;break;case 79:case 111:n=8,a=55;break;default:return+t}for(var i,c=t.slice(2),s=0,l=c.length;s<l;s++)if(i=c.charCodeAt(s),i<48||i>a)return NaN;return parseInt(c,n)}}return+t};if(!m(" 0o1")||!m("0b1")||m("+0x1")){m=function(e){var t=arguments.length<1?0:e,r=this;return r instanceof m&&(v?c((function(){h.valueOf.call(r)})):o(r)!=d)?i(new b(g(t)),r,m):g(t)};for(var O,k=r("9e1e")?s(b):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),_=0;k.length>_;_++)a(b,O=k[_])&&!a(m,O)&&f(m,O,l(b,O));m.prototype=h,h.constructor=m,r("2aba")(n,d,m)}},c9c9:function(e,t,r){"use strict";var n=r("fab0"),a=r.n(n);a.a},ea97:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"80px","show-message":!1}},[r("el-form-item",{attrs:{label:"Desc"}},[r("el-input",{attrs:{placeholder:"Description"},model:{value:e.form.desc,callback:function(t){e.$set(e.form,"desc",t)},expression:"form.desc"}})],1),r("el-form-item",{attrs:{label:"Type",prop:"type"}},[r("el-select",{attrs:{placeholder:"Select a Type"},on:{change:e.typeSelectorChange},model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}},e._l(e.types,(function(e){return r("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1),r("el-form-item",{attrs:{label:"Key"}},[r("el-select",{attrs:{placeholder:"Input a Key","allow-create":"",filterable:"","default-first-option":"","value-key":"form.key",clearable:"",disabled:"chash"!==e.form.type},model:{value:e.form.key,callback:function(t){e.$set(e.form,"key",t)},expression:"form.key"}},e._l(e.defaultHashKeys,(function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),e._l(e.form.nodes,(function(t,n){return r("el-form-item",{key:n,staticClass:"node-item",attrs:{label:"Node"+(n+1)}},[r("el-form-item",{attrs:{rules:[{required:!0,pattern:e.IPAndURLRegexp,type:"string"}],prop:"nodes."+n+".ip"}},[r("el-input",{attrs:{placeholder:"IP/HOST"},model:{value:t.ip,callback:function(r){e.$set(t,"ip",r)},expression:"item.ip"}})],1),r("el-form-item",{attrs:{rules:[{required:!0}],prop:"nodes."+n+".port"}},[r("el-input",{attrs:{placeholder:"Port",type:"number"},model:{value:t.port,callback:function(r){e.$set(t,"port",r)},expression:"item.port"}})],1),r("el-form-item",{attrs:{rules:[{required:!0}],prop:"nodes."+n+".weights"}},[r("el-input",{attrs:{placeholder:"Weights",type:"number"},model:{value:t.weights,callback:function(r){e.$set(t,"weights",r)},expression:"item.weights"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"danger"},on:{click:function(r){return r.preventDefault(),e.removeNode(t)}}},[e._v("\n          "+e._s(e.$t("button.delete"))+"\n        ")])],1)],1)})),r("el-form-item",[r("el-button",{on:{click:e.addNode}},[e._v("\n        "+e._s(e.$t("button.add_node"))+"\n      ")])],1),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("\n        "+e._s(e.$t("button.save"))+"\n      ")]),r("el-button",{on:{click:e.toPreviousPage}},[e._v("\n        "+e._s(e.$t("button.cancel"))+"\n      ")])],1)],2)],1)},a=[],o=(r("8e6e"),r("456d"),r("bd86")),i=(r("c5f6"),r("28a5"),r("768b")),u=(r("ac6a"),r("ffc1"),r("96cf"),r("3b8d")),c=(r("7f7f"),r("d225")),s=r("b0b4"),l=r("308d"),f=r("6bb5"),p=r("4e2b"),d=r("9ab4"),m=r("60a3"),b=r("b5f7"),h=r("e741");function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(r,!0).forEach((function(t){Object(o["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var g=function(e){function t(){var e;return Object(c["a"])(this,t),e=Object(l["a"])(this,Object(f["a"])(t).apply(this,arguments)),e.IPAndURLRegexp=/^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3})$|^((([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9]*[a-zA-Z0-9])\.)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9]*[A-Za-z0-9]))$/,e.form={type:null,key:null,nodes:[],desc:""},e.rules={type:{required:!0}},e.isEditMode=!1,e.types=["roundrobin","chash"],e.defaultHashKeys=[{value:"remote_addr",label:"remote_addr"},{value:"host",label:"host"},{value:"uri",label:"uri"},{value:"server_name",label:"server_name"},{value:"server_addr",label:"server_addr"},{value:"request_uri",label:"request_uri"},{value:"query_string",label:"query_string"},{value:"remote_port",label:"remote_port"},{value:"hostname",label:"hostname"},{value:"arg_id",label:"arg_id"}],e}return Object(p["a"])(t,e),Object(s["a"])(t,[{key:"created",value:function(){this.isEditMode=-1===this.$route.name.indexOf("Create"),this.isEditMode&&this.getData()}},{key:"getData",value:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(){var t,r,n,a,o,u,c,s,l,f,p;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=this.$route.params.id,e.next=3,Object(b["b"])(t);case 3:r=e.sent,n=r.node.value,a=n.type,o=void 0===a?null:a,u=n.nodes,c=void 0===u?[]:u,s=n.key,l=void 0===s?null:s,f=n.desc,p=void 0===f?"":f,c=Object.entries(c).map((function(e){var t=Object(i["a"])(e,2),r=t[0],n=t[1],a=r.split(":")[0],o=r.split(":")[1],u=n;return{ip:a,port:o,weights:u}})),this.form={type:o,key:l,nodes:c,desc:p};case 15:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"onSubmit",value:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.$refs.form.validate(function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(r){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(console.log("onSubmit",t.form),n={},t.form.nodes.map((function(e){e.ip&&e.port&&String(e.weights)&&(n["".concat(e.ip,":").concat(e.port)]=Number(e.weights||1))})),!r){e.next=21;break}if(a=y({},t.form,{nodes:n}),t.form.nodes.length){e.next=8;break}return t.$message.error("Please add 1 node at least!"),e.abrupt("return");case 8:if("chash"!==a.type&&delete a.key,Object.entries(a).forEach((function(e){var t=Object(i["a"])(e,2),r=t[0],n=t[1];""!==n&&null!==n||delete a[r]})),!t.isEditMode){e.next=15;break}return e.next=13,Object(b["e"])(t.$route.params.id,a);case 13:e.next=17;break;case 15:return e.next=17,Object(b["a"])(a);case 17:t.$message.success("".concat(t.isEditMode?"Update the":"Create a"," upstream successfully!")),t.isEditMode||(h["a"].delView(t.$route),t.$nextTick((function(){t.$router.push({name:"SchemaUpstreamList"})}))),e.next=22;break;case 21:return e.abrupt("return",!1);case 22:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"toPreviousPage",value:function(){this.$router.go(-1)}},{key:"typeSelectorChange",value:function(e){"chash"!==e&&(this.form.key=null)}},{key:"addNode",value:function(){this.form.nodes.push({ip:null,port:null,weights:0})}},{key:"removeNode",value:function(e){var t=this;this.$confirm("Do you want to remove the node?","Warning",{confirmButtonText:"Confirm",cancelButtonText:"Cancel",type:"warning"}).then(Object(u["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:n=t.form.nodes.indexOf(e),-1!==n&&t.form.nodes.splice(n,1);case 2:case"end":return r.stop()}}),r)})))).catch((function(){}))}}]),t}(m["c"]);g=d["a"]([Object(m["a"])({name:"RouterEdit"})],g);var O=g,k=O,_=(r("c9c9"),r("2877")),x=Object(_["a"])(k,n,a,!1,null,null,null);t["default"]=x.exports},fab0:function(e,t,r){e.exports={menuBg:"#304156",menuText:"#bfcbd9",menuActiveText:"#409eff"}},fdef:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},ffc1:function(e,t,r){var n=r("5ca1"),a=r("504c")(!0);n(n.S,"Object",{entries:function(e){return a(e)}})}}]);