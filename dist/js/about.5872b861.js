(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{a640:function(e,t,a){"use strict";var s=a("d039");e.exports=function(e,t){var a=[][e];return!!a&&s((function(){a.call(null,t||function(){throw 1},1)}))}},ae40:function(e,t,a){var s=a("83ab"),i=a("d039"),r=a("5135"),n=Object.defineProperty,o={},c=function(e){throw e};e.exports=function(e,t){if(r(o,e))return o[e];t||(t={});var a=[][e],l=!!r(t,"ACCESSORS")&&t.ACCESSORS,d=r(t,0)?t[0]:c,u=r(t,1)?t[1]:void 0;return o[e]=!!a&&!i((function(){if(l&&!s)return!0;var e={length:-1};l?n(e,1,{enumerable:!0,get:c}):e[1]=1,a.call(e,d,u)}))}},c975:function(e,t,a){"use strict";var s=a("23e7"),i=a("4d64").indexOf,r=a("a640"),n=a("ae40"),o=[].indexOf,c=!!o&&1/[1].indexOf(1,-0)<0,l=r("indexOf"),d=n("indexOf",{ACCESSORS:!0,1:0});s({target:"Array",proto:!0,forced:c||!l||!d},{indexOf:function(e){return c?o.apply(this,arguments)||0:i(this,e,arguments.length>1?arguments[1]:void 0)}})},f820:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.desserts,"sort-by":"calories"},scopedSlots:e._u([{key:"top",fn:function(){return[a("v-toolbar",{attrs:{flat:""}},[a("v-dialog",{attrs:{"max-width":"500px"},model:{value:e.$store.getters["get_dialog"],callback:function(t){e.$set(e.$store.getters,"get_dialog",t)},expression:"$store.getters['get_dialog']"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[e._v(e._s(e.formTitle))])]),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Dessert name"},model:{value:e.editedItem.name,callback:function(t){e.$set(e.editedItem,"name",t)},expression:"editedItem.name"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Calories"},model:{value:e.editedItem.calories,callback:function(t){e.$set(e.editedItem,"calories",t)},expression:"editedItem.calories"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Fat (g)"},model:{value:e.editedItem.fat,callback:function(t){e.$set(e.editedItem,"fat",t)},expression:"editedItem.fat"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Carbs (g)"},model:{value:e.editedItem.carbs,callback:function(t){e.$set(e.editedItem,"carbs",t)},expression:"editedItem.carbs"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Protein (g)"},model:{value:e.editedItem.protein,callback:function(t){e.$set(e.editedItem,"protein",t)},expression:"editedItem.protein"}})],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.close}},[e._v(" Cancel ")]),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.save}},[e._v(" Save ")])],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function(t){var s=t.item;return[a("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.editItem(s)}}},[e._v(" mdi-pencil ")])]}}],null,!0)})},i=[],r=(a("c975"),{data:function(){return{headers:[{text:"Dessert (100g serving)",align:"start",sortable:!1,value:"name"},{text:"Calories",value:"calories"},{text:"Fat (g)",value:"fat"},{text:"Carbs (g)",value:"carbs"},{text:"Protein (g)",value:"protein"},{text:"Actions",value:"actions",sortable:!1}],desserts:[],editedIndex:-1,editedItem:{name:"",calories:0,fat:0,carbs:0,protein:0},defaultItem:{name:"",calories:0,fat:0,carbs:0,protein:0}}},created:function(){this.initialize()},methods:{close:function(){var e=this;this.$store.dispatch("set_dialog",!1),this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},save:function(){this.editedIndex>-1?Object.assign(this.desserts[this.editedIndex],this.editedItem):this.desserts.push(this.editedItem),this.close()},initialize:function(){this.desserts=[{name:"Frozen Yogurt",calories:159,fat:6,carbs:24,protein:4},{name:"Ice cream sandwich",calories:237,fat:9,carbs:37,protein:4.3},{name:"Eclair",calories:262,fat:16,carbs:23,protein:6},{name:"Cupcake",calories:305,fat:3.7,carbs:67,protein:4.3},{name:"Gingerbread",calories:356,fat:16,carbs:49,protein:3.9},{name:"Jelly bean",calories:375,fat:0,carbs:94,protein:0},{name:"Lollipop",calories:392,fat:.2,carbs:98,protein:0},{name:"Honeycomb",calories:408,fat:3.2,carbs:87,protein:6.5},{name:"Donut",calories:452,fat:25,carbs:51,protein:4.9},{name:"KitKat",calories:518,fat:26,carbs:65,protein:7}]},editItem:function(e){this.editedIndex=this.desserts.indexOf(e),this.editedItem=Object.assign({},e),this.$store.dispatch("set_dialog",!0)}}}),n=r,o=a("2877"),c=Object(o["a"])(n,s,i,!1,null,null,null);t["default"]=c.exports}}]);
//# sourceMappingURL=about.5872b861.js.map