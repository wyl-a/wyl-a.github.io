(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7ed5dc0a"],{"42f9":function(e,t,n){e.exports=n.p+"img/login.a4c656a9.png"},"7be8":function(e,t,n){"use strict";var s=n("fa4f"),a=n.n(s);a.a},ede4:function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._m(0),n("van-cell-group",[n("van-field",{attrs:{label:"用户名",placeholder:"用户名"},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}}),n("van-field",{attrs:{label:"密码",placeholder:"密码"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),n("div",{staticClass:"wyl_login_register"},[n("span",{on:{click:e.retrieve}},[e._v("找回密码")]),n("div",[n("span",{on:{click:e.onRegister}},[e._v("注册/验证码登录")])])]),n("div",{staticClass:"wyl_login_button"},[n("button",{on:{click:e.onClickLogin}},[e._v("登录")])])],1)},a=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"wyl_login_img"},[s("img",{attrs:{src:n("42f9"),alt:""}})])}],o={data:function(){return{username:"",password:""}},methods:{retrieve:function(){this.$router.push("/retrieve")},onRegister:function(){this.$router.push({path:"/register",name:"register"})},onClickLogin:function(){var e=this;this.$APP.login({mobile:this.username,password:this.password,type:1}).then((function(t){console.log(t);var n=t.data.data.remember_token;window.localStorage.setItem("token",n),console.log(t.data.data.is_new),e.$router.push("/user")}))}}},i=o,r=(n("7be8"),n("2877")),l=Object(r["a"])(i,s,a,!1,null,"759eb7ec",null);t["default"]=l.exports},fa4f:function(e,t,n){}}]);
//# sourceMappingURL=chunk-7ed5dc0a.4402e039.js.map