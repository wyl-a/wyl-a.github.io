(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-49baa666"],{"31fd":function(s,t,e){},"42f9":function(s,t,e){s.exports=e.p+"img/login.a4c656a9.png"},"506f":function(s,t,e){"use strict";var n=e("31fd"),o=e.n(n);o.a},a9e3:function(s,t,e){"use strict";e.r(t);var n=function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",[s._m(0),e("div",{staticClass:"wyl_register"},[e("van-field",{attrs:{center:"",clearable:"",placeholder:"请输入手机号"},scopedSlots:s._u([{key:"button",fn:function(){return[e("a",{directives:[{name:"show",rawName:"v-show",value:0==s.isShow,expression:"isShow == false"}],staticStyle:{color:"red"},attrs:{size:"small",type:"primary"},on:{click:s.onClickSend}},[s._v("发送验证码")]),e("a",{directives:[{name:"show",rawName:"v-show",value:1==s.isShow,expression:"isShow == true"}],staticStyle:{color:"gray"}},[s._v("获取验证码("+s._s(s.num)+")")])]},proxy:!0}]),model:{value:s.sms,callback:function(t){s.sms=t},expression:"sms"}}),e("van-cell-group",[e("van-field",{attrs:{placeholder:"请输入验证码"},model:{value:s.sss,callback:function(t){s.sss=t},expression:"sss"}})],1)],1),e("div",{staticClass:"wyl_register_pass"},[e("span",[s._v("*未注册的手机号将自动注册")]),e("span",{on:{click:s.onLogin}},[s._v("使用密码登录")])]),e("div",{staticClass:"wyl_login_button"},[e("button",{on:{click:s.redister}},[s._v("登录")])])])},o=[function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("div",{staticClass:"wyl_login_img"},[n("img",{attrs:{src:e("42f9"),alt:""}})])}],a=e("2b0e"),i=e("d399");a["default"].use(i["a"]);var c={data:function(){return{sms:"",sss:"",isShow:!1,num:60}},methods:{onLogin:function(){this.$router.push("/login")},onClickSend:function(){var s=this;this.$APP.smsCode({mobile:this.sms,sms_type:"login"}).then((function(t){console.log(t),200===t.data.code?(s.countDown(),Object(i["a"])(t.data.msg)):201==t.data.code&&Object(i["a"])(t.data.msg)}))},countDown:function(){var s=this;this.isShow=!0,setInterval((function(){s.num--,s.num<=0&&(s.isShow=!1,s.num=60)}),1e3)},redister:function(){var s=this;this.$APP.login({mobile:this.sms,sms_code:this.sss,client:1,type:2}).then((function(t){console.log(t);var e=t.data.data.remember_token;window.localStorage.setItem("token",e),s.$router.push("/user")}))}}},l=c,r=(e("506f"),e("2877")),u=Object(r["a"])(l,n,o,!1,null,"e1c10d98",null);t["default"]=u.exports}}]);
//# sourceMappingURL=chunk-49baa666.488ffa0a.js.map