(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-19643079"],{"0fba":function(t,e,s){},"7c11":function(t,e,s){"use strict";s.r(e);var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"top"}),t._l(t.list,(function(e,o){return s("div",{key:o,staticClass:"excellent_course",on:{click:function(s){return s.stopPropagation(),t.courseitem(e.course_id)}}},[s("div",{staticClass:"excellent_course_box"},[s("div",{staticClass:"excellent_course_box_top"},[s("div",{staticClass:"excellent_course_box_top_title"},[t._v(t._s(e.title))]),s("div",{staticClass:"excellent_course_box_top_titles"},[s("p",{staticStyle:{"font-size":"0.6rem",color:"gray"}},[t._v(" 共"+t._s(e.course_type)+"课时 ")]),s("van-icon",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],attrs:{name:"star",color:"red"},on:{click:function(s){return s.stopPropagation(),t.onCollectNO(e.collect_id)}}})],1)]),s("div",{staticClass:"excellent_course_box_bottom"},[s("div",{staticClass:"excellent_course_box_bottom_img"},[s("img",{attrs:{src:e.teachersAvatar,alt:""}})]),s("div",{staticClass:"excellent_course_box_bottom_title"},[s("div",[t._v(t._s(e.teachers))])])]),s("div",{staticClass:"excellent_course_box_registration"},[s("div",{staticStyle:{"font-size":"0.6rem",color:"gray"}},[t._v(" 报名人数"+t._s(e.sales_num)+"人 ")]),s("div",{staticStyle:{"font-size":"0.8rem",color:"red"}},[t._v("免费")])])])])}))],2)},i=[],c={data:function(){return{list:[],isShow:!0,id:[]}},mounted:function(){this.getlist()},methods:{onCollectNO:function(t){var e=this;console.log(t),this.isShow=!1,this.$APP.collectNO(t).then((function(t){console.log(t),e.getlist()}))},getlist:function(){var t=this;this.$APP.collect().then((function(e){console.log(e.data.data.list),t.list=e.data.data.list}))},courseitem:function(t){this.$router.push({path:"/courseitem",query:{id:t}})}}},l=c,n=(s("f38d"),s("2877")),a=Object(n["a"])(l,o,i,!1,null,"de220c08",null);e["default"]=a.exports},f38d:function(t,e,s){"use strict";var o=s("0fba"),i=s.n(o);i.a}}]);
//# sourceMappingURL=chunk-19643079.104838b4.js.map