(function(e){function t(t){for(var o,i,s=t[0],c=t[1],a=t[2],u=0,d=[];u<s.length;u++)i=s[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);h&&h(t);while(d.length)d.shift()();return l.push.apply(l,a||[]),n()}function n(){for(var e,t=0;t<l.length;t++){for(var n=l[t],o=!0,i=1;i<n.length;i++){var s=n[i];0!==r[s]&&(o=!1)}o&&(l.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},i={app:0},r={app:0},l=[];function s(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-76d4cfac":"e192e735"}[e]+".js"}function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-76d4cfac":1};i[e]?t.push(i[e]):0!==i[e]&&n[e]&&t.push(i[e]=new Promise((function(t,n){for(var o="css/"+({}[e]||e)+"."+{"chunk-76d4cfac":"8dbac76f"}[e]+".css",r=c.p+o,l=document.getElementsByTagName("link"),s=0;s<l.length;s++){var a=l[s],u=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(u===o||u===r))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){a=d[s],u=a.getAttribute("data-href");if(u===o||u===r)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var o=t&&t.target&&t.target.src||r,l=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");l.code="CSS_CHUNK_LOAD_FAILED",l.request=o,delete i[e],h.parentNode.removeChild(h),n(l)},h.href=r;var f=document.getElementsByTagName("head")[0];f.appendChild(h)})).then((function(){i[e]=0})));var o=r[e];if(0!==o)if(o)t.push(o[2]);else{var l=new Promise((function(t,n){o=r[e]=[t,n]}));t.push(o[2]=l);var a,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(e);var d=new Error;a=function(t){u.onerror=u.onload=null,clearTimeout(h);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",d.name="ChunkLoadError",d.type=o,d.request=i,n[1](d)}r[e]=void 0}};var h=setTimeout((function(){a({type:"timeout",target:u})}),12e4);u.onerror=u.onload=a,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=t,a=a.slice();for(var d=0;d<a.length;d++)t(a[d]);var h=u;l.push(["e58e","chunk-vendors"]),n()})({"1c11":function(e,t,n){"use strict";n.r(t);var o=n("b4a6"),i=o.keys().reduce((function(e,t){var i=t.split("/"),r=i[i.length-1].replace(".vue",""),l="/"+r.toLowerCase(),s=o(t).default.order,c=void 0===s?0:s;return e.concat({path:l,name:r,order:c,component:function(){return n("c268")("".concat(t))}})}),[]).sort((function(e,t){return e.order-t.order})),r=i[0].path;i=i.concat([{path:"/",redirect:r},{path:"*",redirect:"/"}]),console.log("routes:",JSON.stringify(i,null,2)),t["default"]=i},"6cfb":function(e,t,n){},7806:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"about"},[n("h1",[e._v("This is an about page")])])}],r={name:"About",order:2},l=r,s=n("2877"),c=Object(s["a"])(l,o,i,!1,null,null,null);t["default"]=c.exports},"78d2":function(e,t,n){var o={"./vue-table-virtual-scroller.css":["5e0c","chunk-76d4cfac"]};function i(e){if(!n.o(o,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=o[e],i=t[0];return n.e(t[1]).then((function(){return n.t(i,7)}))}i.keys=function(){return Object.keys(o)},i.id="78d2",e.exports=i},9224:function(e){e.exports=JSON.parse('{"name":"vue-table-virtual-scroller","version":"0.1.5","description":"表格虚拟滚动","keywords":["vue","vuejs","rollup","template","component"],"private":false,"author":"blryli","license":"MIT","main":"dist/vue-table-virtual-scroller.umd.js","module":"dist/vue-table-virtual-scroller.esm.js","unpkg":"dist/vue-table-virtual-scroller.min.js","scripts":{"dev":"cross-env NODE_ENV=development rollup --config build/rollup.config.es.js --watch","build":"cross-env NODE_ENV=production npm run build:browser && npm run build:es && npm run build:umd","test":"npm run test:unit","build:browser":"rollup --config build/rollup.config.browser.js","build:es":"rollup --config build/rollup.config.es.js","build:umd":"rollup --config build/rollup.config.umd.js","demo:dev":"vue-cli-service serve","demo:build":"vue-cli-service build","lint":"vue-cli-service lint","test:unit":"vue-cli-service test:unit"},"repository":{"type":"git","url":"https://github.com/blryli/vue-table-virtual-scroller.git"},"bugs":{"url":"https://github.com/blryli/vue-table-virtual-scroller/issues"},"homepage":"https://github.com/blryli/vue-table-virtual-scroller#readme","dependencies":{"vue":"^2.6.10","vue-virtual-scroller":"^1.0.0-rc.2"},"devDependencies":{"@babel/core":"^7.7.4","@babel/polyfill":"^7.7.0","@babel/preset-env":"^7.7.4","@vue/cli-plugin-babel":"^4.1.0","@vue/cli-plugin-eslint":"^4.1.0","@vue/cli-plugin-unit-jest":"^4.1.0","@vue/cli-service":"^4.1.0","@vue/eslint-config-standard":"^4.0.0","@vue/test-utils":"1.0.0-beta.29","babel-eslint":"^10.0.3","clean-css":"^4.2.1","core-js":"^3.4.3","cross-env":"^6.0.3","element-ui":"^2.13.0","eslint":"^5.16.0","eslint-plugin-vue":"^5.0.0","mockjs":"^1.1.0","node-sass":"^4.12.0","rollup":"^1.27.5","rollup-plugin-babel":"^4.3.3","rollup-plugin-commonjs":"^10.1.0","rollup-plugin-css-only":"^1.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-terser":"^5.1.2","rollup-plugin-vue":"^5.0.0","sass-loader":"^8.0.0","vue-router":"^3.1.3","vue-template-compiler":"^2.6.10"},"browserslist":["> 1%","last 2 versions"]}')},"93f2":function(e,t,n){},a566:function(e,t,n){"use strict";var o=n("6cfb"),i=n.n(o);i.a},af8f:function(e,t,n){"use strict";var o=n("93f2"),i=n.n(o);i.a},b1c8:function(e,t,n){"use strict";n.r(t),n.d(t,"name",(function(){return i})),n.d(t,"description",(function(){return r}));var o=n("9224"),i=o.name,r=o.description},b4a6:function(e,t,n){var o={"./About.vue":"7806","./Home.vue":"f59f"};function i(e){var t=r(e);return n(t)}function r(e){if(!n.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}i.keys=function(){return Object.keys(o)},i.resolve=r,e.exports=i,i.id="b4a6"},c268:function(e,t,n){var o={"./About":"7806","./About.vue":"7806","./Home":"f59f","./Home.vue":"f59f","./routes":"1c11","./routes.js":"1c11"};function i(e){return Promise.resolve().then((function(){if(!n.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}var i=o[e];return n(i)}))}i.keys=function(){return Object.keys(o)},i.id="c268",e.exports=i},e58e:function(e,t,n){"use strict";n.r(t);var o=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("header",[n("h1",[e._v(e._s(e.name))]),n("div",{staticClass:"command"},[e._v("npm install --save "+e._s(e.name))]),n("nav"),e._l(e.routes,(function(t){return n("router-link",{key:t.path,attrs:{to:t.path}},[e._v(e._s(t.name))])})),n("div",{staticClass:"description"},[e._v(e._s(e.description))])],2),n("router-view"),e._m(0)],1)},r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"more"},[n("div",{staticClass:"section-content"},[e._v(" And much "),n("a",{attrs:{href:"https://github.com/Akryum/v-tooltip#usage"}},[e._v("More")]),e._v("! ")])])}],l=n("1c11"),s=n("b1c8"),c={data:function(){return{routes:l["default"].filter((function(e){return e.path.length>1})),name:s["name"],description:s["description"]}}},a=c,u=(n("af8f"),n("2877")),d=Object(u["a"])(a,i,r,!1,null,null,null),h=d.exports,f=n("8c4f");o["default"].use(f["a"]);var m=new f["a"]({routes:l["default"]}),p=m,v=n("e508");function b(e){return b="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}function y(e){return g(e)||w(e)||S()}function g(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}function w(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function S(){throw new TypeError("Invalid attempt to spread non-iterable instance")}var C={name:"VTableHeaderColumn",props:{column:{type:Object,default:function(){}},columnIndex:{type:Number,default:0}},inject:["table"],computed:{width:function(){return this.column.width||(this.column.minWidth||80)+this.table.offset},columnClass:function(){var e="v-table_1_column_".concat(this.columnIndex+1);return this.column.fixed&&this.table.bodyOverflowX&&(e+=" is--fixed-".concat(this.column.fixed)),this.column.labelClassName&&(e+=" ".concat(this.column.labelClassName)),e}},render:function(e){var t=this.column,n=this.columnIndex,o=this.column.renderHeader(e,{column:t,$index:n})||this.column.header||("selection"===this.column.type?this.renderSelection(e):"index"===this.column.type?this.column.label||"#":this.column.label);return e("div",{class:this.columnClass,style:this.table.setColumnStyle(this.column,this.columnIndex,this.width)},[e("div",{class:"cell"},[o])])},methods:{renderSelection:function(e){return e("el-checkbox",{attrs:{value:this.table.selectionAll,key:this.index,indeterminate:this.table.indeterminate},on:{change:this.selectionChange}})},selectionChange:function(e){this.table.$emit("all.selection.change",e)}}},_={name:"VTableHeader",components:{VTableHeaderColumn:C},inject:["table"],watch:{"table.bodyScrollLeft":function(e){this.$el.scrollLeft=e}},render:function(e){var t=this.table.columnsSort.reduce((function(t,n,o){var i=e("VTableHeaderColumn",{attrs:{column:n,columnIndex:o}});return t.concat([i])}),[]);return e("div",{class:"v-table__header-container",ref:"headerWrapper"},[e("div",{class:"v-table__header",style:this.table.rowStyle,ref:"header"},[t])])},mounted:function(){var e=this;this.$nextTick((function(){var t=e.$refs.headerWrapper,n=e.$refs.header,o=t.getBoundingClientRect().width,i=n.getBoundingClientRect().width;e.table.bodyOverflowX=i>o}))}},x={name:"TableBodyColumn",props:{index:{type:Number,default:0},item:{type:Object,default:function(){}},column:{type:Object,default:function(){}},columnIndex:{type:Number,default:0}},inject:["table"],data:function(){return{checked:!1,columnId:null}},render:function(e){var t=this,n=this.renderSlot(e),o=n||("selection"===this.column.type?this.renderSelection(e):"index"===this.column.type?this.renderIndex():this.column.prop?this.item[this.column.prop]:"");return e("div",{class:this.columnClass,style:this.table.setColumnStyle(this.column,this.columnIndex,this.width),on:{mouseenter:function(e){return t.handleMouseenter(e,o)},mouseleave:function(e){return t.handleMouseleave(e,o)}}},[e("div",{class:{cell:!0,"v-tooltip":this.showOverflowTooltip},ref:"cell"},[o])])},computed:{width:function(){return this.column.width||(this.column.minWidth||80)+this.table.offset},showOverflowTooltip:function(){return this.table.showOverflowTooltip||this.column.showOverflowTooltip},columnClass:function(){var e="v-table_".concat(this.index+1,"_column_").concat(this.columnIndex+1);return this.column.fixed&&this.table.bodyOverflowX&&(e+=" is--fixed-".concat(this.column.fixed)),this.column.className&&(e+=" ".concat(this.column.className)),e}},methods:{renderSelection:function(e){return e("el-checkbox",{attrs:{value:this.table.isChecked(this.index),key:this.index},on:{change:this.selectionRowChange}})},handleMouseenter:function(e,t){var n=this.item,o=this.column,i=this.$refs.cell;if(this.table.$emit("cell.mouse.enter",n,o,i,e,t),i.classList.contains("v-tooltip")||!i.childNodes.length){var r=document.createRange();r.setStart(i,0),r.setEnd(i,i.childNodes.length);var l=r.getBoundingClientRect().width,s=parseInt(this.getStyle(i,"paddingLeft"))+parseInt(this.getStyle(i,"paddingRight"));s+l>this.width&&(this.table.show=!0,this.table.reference=i,this.table.popoverSlot=t)}},getStyle:function(e,t){return t&&(t=t.replace(/([A-Z])/g,(function(e){return"-"+e.toLowerCase()}))),window.getComputedStyle(e,null).getPropertyValue(t)},handleMouseleave:function(e,t){var n=this.item,o=this.column,i=this.$refs.cell;this.table.$emit("cell.mouse.leave",n,o,i,e,t),this.table.show=!1},renderIndex:function(){return this.index+1},renderSlot:function(e){return this.column.renderSlot(e,{row:this.item,$index:this.index})},selectionRowChange:function(e){this.table.$emit("row.selection.change",this.index,e)}}},k=function(e){var t=e.target;while(t&&"HTML"!==t.tagName.toUpperCase()){if(/v-table_\d_column_\d/.test(t.className))return t;t=t.parentNode}return null},$=function(e,t){var n=null;return e.columns.forEach((function(e){e.columnId===+t&&(n=e)})),n},O=function(e,t){var n=(t.className||"").match(/v-table_[^\s]+/gm);if(n){var o=t.className.split("_"),i=o[o.length-1];return $(e,i)}return null},E={name:"TableBody",components:{TableBodyColumn:x},props:{item:{type:Object,default:function(){}},index:Number},inject:["table"],render:function(e){var t=this,n=this.table.columnsSort.reduce((function(n,o,i){var r=t.item,l=t.index,s=e("TableBodyColumn",{attrs:{item:r,index:l,column:o,columnIndex:i}});return n.concat([s])}),[]),o="v-table__body";return this.table.currentRow===this.index&&(o+=" current-row"),e("div",{class:o,style:this.table.rowStyle,on:{click:function(e){return t.handleClick(e)},dblclick:function(e){return t.handleDoubleClick(e)}}},[n])},methods:{handleClick:function(e){this.table.highlightCurrentRow&&(this.table.currentRow=this.index),this.handleEvent(e,"click")},handleDoubleClick:function(e){this.handleEvent(e,"dblclick")},handleEvent:function(e,t){var n,o=this.table,i=k(e);i&&(n=O(o,i),n&&o.$emit("cell-".concat(t),this.item,n,i,e)),o.$emit("row-".concat(t),this.item,n,e)}}},N=function(){return document.addEventListener?function(e,t,n){var o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];e&&t&&n&&e.addEventListener(t,n,o)}:function(e,t,n){e&&t&&n&&e.attachEvent("on"+t,n)}}(),j=function(){return document.removeEventListener?function(e,t,n){var o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];e&&t&&e.removeEventListener(t,n,o)}:function(e,t,n){e&&t&&e.detachEvent("on"+t,n)}}(),W=function(e){e||console.error("获取id节点失败");var t=e.getBoundingClientRect(),n=t.top,o=t.bottom,i=t.left,r=t.right,l=t.width||r-i,s=t.height||o-n;return{width:l,height:s,top:n,right:r,bottom:o,left:i,centerX:i+l/2,centerY:n+s/2}},T=function(e,t){var n=e.$refs[t];n&&n.$el&&n.$el.parentNode===document.body?document.body.removeChild(n.$el):n&&n.parentNode===document.body&&document.body.removeChild(n)},A={components:{DynamicScroller:v["a"],DynamicScrollerItem:v["b"],VTableBody:E},props:{data:{type:Array,default:function(){return[]}}},inject:["table"],computed:{style:function(){return{"--width":this.table.minWidth+"px",maxHeight:parseInt(this.table.height)+"px"}}},mounted:function(){N(this.$el,"scroll",this.handleScroll),this.addEmpty()},beforeDestroy:function(){j(this.$el,"scroll",this.handleScroll)},methods:{forceUpdate:function(){this.$refs.DynamicScroller.forceUpdate()},update:function(e,t){},handleScroll:function(e){this.table.bodyScrollLeft=e.target.scrollLeft},addEmpty:function(){var e=this.$el.querySelector(".vue-recycle-scroller__item-wrapper");!e.offsetHeight&&(e.innerHTML='<div id="empty" class="empty-text">'.concat(this.table.emptyText,"</div>"))}}};function L(e,t,n,o,i,r,l,s,c,a){"boolean"!==typeof l&&(c=s,s=l,l=!1);var u,d="function"===typeof n?n.options:n;if(e&&e.render&&(d.render=e.render,d.staticRenderFns=e.staticRenderFns,d._compiled=!0,i&&(d.functional=!0)),o&&(d._scopeId=o),r?(u=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,c(e)),e&&e._registeredComponents&&e._registeredComponents.add(r)},d._ssrRegister=u):t&&(u=l?function(){t.call(this,a(this.$root.$options.shadowRoot))}:function(e){t.call(this,s(e))}),u)if(d.functional){var h=d.render;d.render=function(e,t){return u.call(t),h(e,t)}}else{var f=d.beforeCreate;d.beforeCreate=f?[].concat(f,u):[u]}return n}var R=L,D=A,I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("DynamicScroller",{ref:"DynamicScroller",staticClass:"v-scroller",style:e.style,attrs:{"key-field":e.table.keyField,"content-tag":"table",items:e.data,"min-item-size":50},on:{update:e.update},scopedSlots:e._u([{key:"default",fn:function(e){var t=e.item,o=e.index,i=e.active;return[n("DynamicScrollerItem",{attrs:{item:t,active:i,"size-dependencies":[t.message],"data-index":o}},[n("v-table-body",{attrs:{item:t,index:o}})],1)]}}])})},H=[];I._withStripped=!0;var B=void 0,P="data-v-393a427e",V=void 0,F=!1,M=R({render:I,staticRenderFns:H},B,D,P,F,V,!1,void 0,void 0,void 0),U={data:function(){return{leftWidth:0,rightWidth:0,columns:[],columnsWidth:[],columnCalcWidthLenght:0}},created:function(){this.$on("insert.column",this.insertColumn),this.$on("remove.column",this.removeColumn)},computed:{columnsSort:function(){return this.columns.filter((function(e){return"left"===e.fixed})).concat(this.columns.filter((function(e){return"left"!==e.fixed&&"right"!==e.fixed}))).concat(this.columns.filter((function(e){return"right"===e.fixed})))}},methods:{insertColumn:function(e){var t=e.width,n=e.minWidth,o=t||n||80;!t&&this.columnCalcWidthLenght++,e.fixed&&(this["".concat(e.fixed,"Width")]+=o);var i=this.$slots.default.filter((function(e){return e.tag})).findIndex((function(t){return JSON.stringify(e)===JSON.stringify(t.componentInstance.columnConfig)}));e.columnId=i+1,this.columns.splice(i,0,e),this.columnsWidth.splice(i,0,o)},removeColumn:function(e){var t=this.columns.findIndex((function(t){return t.columnId===e.columnId}));if(-1!==t){var n=e.width,o=e.minWidth,i=n||o||80;!n&&this.columnCalcWidthLenght--,e.fixed&&(this["".concat(e.fixed,"Width")]-=i),this.columns.splice(t,1),this.columnsWidth.splice(t,1)}},setColumnStyle:function(e,t,n){var o={};if(o.width=n+"px",this.bodyOverflowX){if("left"===e.fixed&&(o.left=(t?this.columnsWidth[t-1]:0)+this.bodyScrollLeft+"px"),!this.isScrollRightEnd){var i=this.columnsSort.findIndex((function(e){return"right"===e.fixed}));t===i&&(o.borderLeftColor="transparent")}"right"===e.fixed&&(o.right=(t!==this.columnsWidth.length-1?this.columnsWidth[t+1]:0)+(this.width-this.bodyWidth)-this.bodyScrollLeft+this.scrollYwidth+2+"px")}return o}},beforeDestroy:function(){this.$off("insert.column",this.headerColumn),this.$off("remove.column",this.removeColumn)}},X=new Set,Y={data:function(){return{selecteds:[],selectionAll:!1,indeterminate:!1}},created:function(){this.$on("row.selection.change",this.rowSelectionChange),this.$on("all.selection.change",this.allselectionChange)},beforeDestroy:function(){this.$off("row.selection.change",this.rowSelectionChange),this.$off("all.selection.change",this.allselectionChange)},watch:{selecteds:function(e){var t=this;this.$emit("selection-change",e.map((function(e){return t.data[e]})));var n=this.selecteds.length,o=this.data.length;this.selectionAll=n===o,this.indeterminate=Boolean(n&&n<o)}},methods:{clearSelection:function(){this.selecteds=[]},toggleRowSelection:function(e,t){var n=this,o=this.data.findIndex((function(t){return n.isSame(t,e)}));-1!==o?this.toggleSelection(o,X.has(o),t):console.error("methods toggleRowSelection (row) is not find")},toggleAllSelection:function(){this.selectionAll=!this.selectionAll,this.allselectionChange(this.selectionAll)},rowSelectionChange:function(e,t){this.toggleSelection(e,!t),this.$emit("select",this.selecteds,this.data[e])},allselectionChange:function(e){this.selectionAll=e,this.indeterminate=!1,e?this.data.forEach((function(e,t){return X.add(t)})):X.clear(),this.updateSelected(),this.$emit("select-all",this.selecteds)},isSame:function(e,t){return JSON.stringify(e)===JSON.stringify(t)},toggleSelection:function(e,t,n){n?X.add(e):t?X.delete(e):X.add(e),this.updateSelected()},updateSelected:function(){this.selecteds=y(X)},isChecked:function(e){return this.selecteds.includes(e)}}},z={data:function(){return{leftWidth:0,rightWidth:0,columns:[],columnsWidth:[],columnCalcWidthLenght:0,width:0,bodyWidth:0,offset:0,bodyOverflowX:!1,bodyOverflowY:!1,bodyScrollLeft:0}},created:function(){N(window,"resize",this.resize,{passive:!0})},watch:{data:function(e){this.forceUpdate(),this.resize()}},computed:{tableClass:function(){var e="v-table";return this.bodyOverflowX&&(e+=" is-overflow-x"),this.bodyOverflowY&&(e+=" is-overflow-y"),this.border&&(e+=" is-border"),e},rowStyle:function(){var e={};e.width=this.width+"px";var t=this.leftWidth,n=this.rightWidth;return this.bodyOverflowX&&(t&&(e.paddingLeft="".concat(t+this.offset,"px")),n&&(e.paddingRight="".concat(n+this.offset,"px"))),e},scrollYwidth:function(){return this.bodyOverflowY?17:0},isScrollRightEnd:function(){return this.bodyWidth+this.bodyScrollLeft>this.width+this.scrollYwidth},minWidth:function(){return this.columnsWidth.reduce((function(e,t){return e+t}),0)}},methods:{resize:function(){this.bodyWidth=this.$el.getBoundingClientRect().width,this.width=this.bodyWidth>this.minWidth?this.bodyWidth:this.minWidth;var e=function(e){return Math.floor(1e4*e)/1e4};this.offset=this.bodyWidth>this.minWidth?e((this.bodyWidth-this.minWidth)/this.columnCalcWidthLenght):0,this.bodyHeightChange()},bodyHeightChange:function(){var e=this;this.$nextTick((function(){var t=e.$el.querySelector(".vue-recycle-scroller"),n=t.scrollHeight,o=t.clientHeight;e.bodyOverflowY=n>o}))}},mounted:function(){this.resize()},beforeDestroy:function(){j(window,"resize",this.resize,{passive:!0})}},J={name:"Popover",components:{VSlot:{props:["content"],render:function(e){return this.content}}},props:{show:{type:Boolean,default:!0},effect:{type:[String,Object],default:"dark"},data:{type:[String,Object,Array],default:""},placement:{type:String,default:"top"},borderColor:{type:String,default:"#ccc"},popoverClass:{type:String,default:""},reference:null,content:{type:[String,Array],default:function(){}}},data:function(){return{addedBody:!1,momentPlacement:this.placement}},computed:{pClass:function(){return"".concat(this.effect?"is-".concat(this.effect):"is-light","  v-popover__").concat(this.momentPlacement," ").concat(this.popoverClass," ").concat(this.show?"v-popover--visible":"v-popover--hidden")},popoverStyle:function(){var e={"--borderColor":"#ccc","--bgColor":"#fff","--color":"#303133"};if(!this.effect)return e;if("string"===typeof this.effect)switch(this.effect){case"light":e["--borderColor"]="#ccc",e["--bgColor"]="#fff",e["--color"]="#303133";break;case"dark":e["--borderColor"]="#303133",e["--bgColor"]="#303133",e["--color"]="#fff";break;case"info":e["--borderColor"]="#e6a23c",e["--bgColor"]="#e6a23c",e["--color"]="#fff";break;case"error":e["--borderColor"]="#f56c6c",e["--bgColor"]="#f56c6c",e["--color"]="#fff";break;default:e["--borderColor"]=this.effect,e["--bgColor"]=this.effect,e["--color"]="#fff";break}else"object"===b(this.effect)?Array.isArray(this.effect)?console.error("effect 只能是对象或字符串"):(e["--borderColor"]=this.effect.borderColor?this.effect.borderColor:"#ccc",e["--bgColor"]=this.effect.backgroundColor?this.effect.backgroundColor:"#fff",e["--color"]=this.effect.olor?this.effect.olor:"#303133"):console.error("effect 只能是对象或字符串");return e}},watch:{show:function(e){var t=this;e&&setTimeout((function(){t.calculateCoordinate()}),0)}},mounted:function(){},beforeDestroy:function(){T(this,"popover")},methods:{popoverAddedBody:function(){document.body.appendChild(this.$el),this.addedBody=!0},mouseenter:function(){this.$emit("mouseenter")},mouseleave:function(){this.$emit("mouseleave")},calculateCoordinate:function(){!this.addedBody&&this.popoverAddedBody();var e,t=this.$el,n=W(this.reference),o=W(t);this.changeDirection(o,n);var i=n.centerX-o.width/2;switch(this.momentPlacement){case"top":e=n.top-o.height-10;break;case"bottom":e=n.bottom+10;break;default:console.error("Wrong placement must top/bottom");break}t.style.left=i+"px",t.style.top=e+"px"},changeDirection:function(e,t){var n=t.bottom+e.height+5;switch(this.placement){case"top":t.top-e.height-5<10?this.momentPlacement="bottom":this.momentPlacement="top";break;case"bottom":window.innerHeight-n<10?this.momentPlacement="top":this.momentPlacement="bottom";break}}}},q=J,K=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"v-popover",class:e.pClass,style:e.popoverStyle,on:{mouseenter:e.mouseenter,mouseleave:e.mouseleave}},[n("VSlot",{attrs:{content:e.content}}),e._v(" "),n("div",{ref:"arrow",staticClass:"v-popover__arrow"})],1)},Z=[];K._withStripped=!0;var G=void 0,Q="data-v-723c2b8c",ee=void 0,te=!1,ne=R({render:K,staticRenderFns:Z},G,q,Q,te,ee,!1,void 0,void 0,void 0),oe={name:"VTable",components:{VTableHeader:_,DynamicScroller:M,Popover:ne},mixins:[U,z,Y],props:{data:{type:Array,default:function(){return[]}},height:{type:[String,Number],default:400},highlightCurrentRow:{type:Boolean,default:!1},border:{type:Boolean,default:!1},keyField:{type:String,default:""},emptyText:{type:String,default:"暂无数据"},showOverflowTooltip:{type:Boolean,default:!1}},data:function(){return{show:!1,popoverSlot:null,reference:null,currentRow:null}},watch:{data:function(e){var t=this;if(this.data.length)if(this.keyField){var n=this.data.map((function(e){return e[t.keyField]}));this.data.length!==y(new Set(n)).length&&console.error("data数据 item 的 ".concat(this.keyField," 字段的值必须是唯一的"))}else console.error("v-table 必须设置 keyField 字段，且必须是 item 内具有唯一值的字段")}},provide:function(){return{table:this}},methods:{forceUpdate:function(){this.$refs.DynamicScroller.forceUpdate()}}},ie=oe,re=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:e.tableClass},[n("div",{ref:"VHiddenColumns",staticClass:"v-hidden-columns"},[e._t("default")],2),e._v(" "),n("div",{staticClass:"v-table__header-wrapper"},[n("v-table-header",{ref:"TableHeader"}),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.bodyOverflowY,expression:"bodyOverflowY"}],staticClass:"v-table__header-gutter"})],1),e._v(" "),n("div",{staticClass:"v-table__body-wrapper"},[n("DynamicScroller",{ref:"DynamicScroller",attrs:{data:e.data}}),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.bodyOverflowX&&e.bodyScrollLeft,expression:"bodyOverflowX && bodyScrollLeft"}],staticClass:"v-table__shadow-left",style:{left:e.leftWidth-2+"px"}}),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.bodyOverflowX&&e.rightWidth&&!e.isScrollRightEnd,expression:"bodyOverflowX && rightWidth && !isScrollRightEnd"}],staticClass:"v-table__shadow-right",style:{right:e.rightWidth+e.scrollYwidth+"px"}}),e._v(" "),n("Popover",{attrs:{show:e.show,reference:e.reference,content:e.popoverSlot}})],1)])},le=[];re._withStripped=!0;var se=void 0,ce="data-v-42bc85e2",ae=void 0,ue=!1,de=R({render:re,staticRenderFns:le},se,ie,ce,ue,ae,!1,void 0,void 0,void 0),he={name:"VTableColumn",props:{type:String,width:{type:Number,default:0},renderHeader:{type:Function,default:function(){}},minWidth:{type:Number,default:0},label:{type:String,default:""},prop:{type:String,default:""},fixed:{type:String,default:""},className:{type:String,default:""},labelClassName:{type:String,default:""},showOverflowTooltip:{type:Boolean,default:!1}},data:function(){return{columnConfig:null}},inject:["table"],mounted:function(){var e=this,t=this.$slots.header,n=this.renderSlot;this.columnConfig=Object.keys(this.$options.props).reduce((function(t,n){return e.$watch(n,(function(t){e.columnConfig[n]=t})),t[n]=e[n],t}),{header:t,renderSlot:n}),this.table.$emit("insert.column",this.columnConfig)},destroyed:function(){this.table.$emit("remove.column",this.columnConfig)},methods:{renderSlot:function(e,t){return this.$scopedSlots.default?this.$scopedSlots.default(t):!!this.$slots.default&&this.$slots.default[0]}},render:function(e){return e("div",{},[])}},fe=[de,he],me=function(e){fe.forEach((function(t){e.component(t.name,t)}))};"undefined"!==typeof window&&window.Vue&&me(window.Vue);var pe=me,ve=n("5c96"),be=n.n(ve);n("0fae");Promise.resolve().then(n.bind(null,"b1c8")).then((function(e){n("78d2")("./".concat(e.name,".css"))})),o["default"].use(pe),o["default"].use(be.a,{size:"small"}),new o["default"]({router:p,render:function(e){return e(h)}}).$mount("#app")},f59f:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("v-table",{ref:"table",attrs:{height:"400","key-field":"gNo",data:e.data,"show-overflow-tooltip":"","highlight-current-row":""},on:{"selection-change":e.selectionChange,"row-click":e.rowClick}},[e.checked?n("v-table-column",{key:"checkbox",attrs:{fixed:"left",type:"selection",width:40}}):n("v-table-column",{key:"radio",attrs:{width:40,fixed:"left"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-radio",{staticClass:"radio",attrs:{label:t.$index},model:{value:e.radio,callback:function(t){e.radio=t},expression:"radio"}})]}}])}),n("v-table-column",{attrs:{type:"index","min-width":60,fixed:"left",label:"序号"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.$index+1))]}}])},[n("template",{slot:"header"},[e._v("这是序号")])],2),n("v-table-column",{attrs:{label:"标题1",prop:"asn","min-width":100}}),n("v-table-column",{attrs:{label:"标题2","min-width":150},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.name))]}}])}),n("v-table-column",{attrs:{label:"标题3",prop:"city","min-width":100}}),n("v-table-column",{attrs:{label:"标题4","show-overflow-tooltip":"","min-width":150}},[[e._v("溢出文字溢出文字溢出文字溢出文字溢出文字溢出文字溢出文字溢出文字溢出文字")]],2),n("v-table-column",{attrs:{label:"标题5",prop:"datetime","min-width":150}}),n("v-table-column",{attrs:{label:"标题6",prop:"name","min-width":150}}),n("v-table-column",{attrs:{label:"标题7","min-width":120},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.message))]}}])}),e._l(e.forData,(function(t,o){return n("v-table-column",{key:o,attrs:{label:t.label,"min-width":150,"render-header":e.renderHeader},scopedSlots:e._u([{key:"default",fn:function(n){return[e._v(e._s(n.row[t.prop]))]}}],null,!0)})})),n("v-table-column",{attrs:{label:"操作","min-width":100}},[[n("el-button",{attrs:{type:"text",icon:"el-icon-edit"}}),n("el-button",{attrs:{type:"text",icon:"el-icon-delete"}})]],2)],2),n("p",[n("el-button",{attrs:{type:"primary"},on:{click:function(t){e.checked=!e.checked}}},[e._v(e._s("切换为"+(e.checked?"单选":"多选")))]),n("el-button",{attrs:{type:"primary"},on:{click:e.toggleRowSelection}},[e._v("选中第二项")]),n("el-button",{attrs:{type:"primary"},on:{click:e.toggleAllSelection}},[e._v("切换全选")])],1)],1)},i=[],r=n("96eb"),l=n.n(r),s={name:"Home",data:function(){return{radio:null,checked:!0,data:[],forData:[{prop:"city",label:"标题"},{prop:"name",label:"标题"},{prop:"message",label:"标题"}]}},mounted:function(){var e=this;setTimeout((function(){e.data=l.a.mock({"array|1000":[{message:"@email",name:"@cname",email:"@email",city:"@city",datetime:"@datetime",asn:/asn10000[1-9]/,"gNo|+1":1,contrItem:"5",codeTs:"8516605000"}]}).array,console.log(e.data)}),1e3)},methods:{renderHeader:function(e,t){var n=t.column,o=t.$index;return e("div",{},[n.label,o-1])},selectionChange:function(e){console.log(e)},rowClick:function(e,t,n){console.log("click row > ".concat(JSON.stringify(e,null,2)))},toggleRowSelection:function(){this.$refs.table.toggleRowSelection(this.data[1])},toggleAllSelection:function(){this.$refs.table.toggleAllSelection()}}},c=s,a=(n("a566"),n("2877")),u=Object(a["a"])(c,o,i,!1,null,null,null);t["default"]=u.exports}});
//# sourceMappingURL=app.86e545f3.js.map