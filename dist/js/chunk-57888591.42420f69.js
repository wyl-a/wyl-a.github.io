(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-57888591"],{"2e18":function(t,n,a){"use strict";var e=a("9bec"),s=a.n(e);s.a},"8a40":function(t,n,a){"use strict";a.r(n);var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"hmwBox"},[a("van-sticky",[a("div",{staticClass:"hmw-top"},[a("van-nav-bar",{attrs:{title:t.Sdata.course.title},on:{"click-left":t.onClickLeft,"click-right":t.onClickRight},scopedSlots:t._u([{key:"right",fn:function(){return[a("van-icon",{attrs:{color:"#595959",name:"notes-o",size:"22"}})]},proxy:!0},{key:"left",fn:function(){return[a("van-icon",{attrs:{color:"#595959",name:"arrow-left",size:"22"}})]},proxy:!0}])})],1)]),a("div",{staticClass:"hmw-center"},[a("van-list",[a("div",{staticClass:"hmwC-top"},[a("p",[t._v("共8时")]),a("van-progress",{attrs:{inactive:"",percentage:0}}),a("p",[t._v("已学习0%")])],1),a("ul",t._l(t.Sdata.periods,(function(n,e){return a("div",{key:e},[a("li",[a("p",[a("span",{staticClass:"hmwS1"},[t._v("[回放]")]),a("span",{staticClass:"hmwS2"},[t._v(t._s(n.periods_title))])]),a("p",{staticClass:"hmwP3"},[a("span",[t._v(t._s(t.Sdata.course.teacher_name))]),a("span",[t._v(t._s(n.start_play)+" - "+t._s(n.end_play))])]),a("p",{staticClass:"hmwJD"},[a("van-progress",{attrs:{inactive:"",percentage:n.try_see_time}}),a("span",[t._v("已观看0%")])],1)])])})),0)])],1),a("van-tabbar",[a("div",{staticClass:"hmw-foot"},[a("p",{on:{click:t.hmwDian}},[a("van-icon",{attrs:{size:"18",name:"edit"}}),a("span",[t._v("写评论")])],1),a("p",{on:{click:function(n){return t.$router.push("/detail")}}},[a("van-icon",{attrs:{size:"18",name:"apps-o"}}),a("span",[t._v("课程详情")])],1),a("p",{on:{click:t.hmwDian}},[a("van-icon",{attrs:{size:"18",name:"delete"}}),a("span",[t._v("移除列表")])],1)])])],1)},s=[],i=a("d399"),c={data:function(){return{active:0}},computed:{Sdata:function(){return this.$route.query.item}},mounted:function(){console.log(this.$route.query.item)},methods:{onClickLeft:function(){this.$router.go(-1)},onClickRight:function(){Object(i["a"])("按钮")},hmwDian:function(){alert("你点了一下")}}},o=c,r=(a("2e18"),a("2877")),l=Object(r["a"])(o,e,s,!1,null,"e31279a0",null);n["default"]=l.exports},"9bec":function(t,n,a){}}]);
//# sourceMappingURL=chunk-57888591.42420f69.js.map