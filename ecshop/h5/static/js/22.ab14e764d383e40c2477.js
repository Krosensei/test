webpackJsonp([22],{"66lX":function(e,t,s){e.exports=s.p+"static/img/message_empty@2x.b561f77.png"},HzYw:function(e,t,s){"use strict";var r={data:function(){return{}},props:{type:{type:String,default:"message"},info:{type:String,default:"暂无信息"}},created:function(){},computed:{getImgUrl:function(){if("message"==this.type)return s("66lX")}}},a={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"empty-wrappers"},[t("img",{attrs:{src:this.getImgUrl}}),this._v(" "),t("p",[this._v(this._s(this.info))])])},staticRenderFns:[]};var i=s("VU/8")(r,a,!1,function(e){s("epdg")},"data-v-2dd4fbcc",null);t.a=i.exports},QdIx:function(e,t){},epdg:function(e,t){},vYaT:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=s("Dd8w"),a=s.n(r),i=(s("vAZe"),s("Au9i")),n=s("+PoZ"),o=s("hlZl"),c=s("NYxO"),d={data:function(){return{messageOrderList:[],orderMessageParams:{page:0,per_page:10},loading:!1,isMore:!0}},created:function(){},components:{"v-empty-message":s("HzYw").a},methods:a()({},Object(c.d)({saveLastOrderMsgTime:"saveLastOrderMsgTime"}),{goBack:function(){this.$router.go(-1)},getmessageOrderList:function(e){var t=this;i.Indicator.open();var s=this.orderMessageParams;Object(n.b)(s.page,s.per_page).then(function(s){i.Indicator.close(),s&&(t.orderMessage=s.messages,s.messages.length>0&&(t.saveLastOrderMsgTime(t.orderMessage[0].created_at),e&&(t.messageOrderList=t.messageOrderList.concat(s.messages)),t.isMore=1==s.paged.more))})},getOrderDetail:function(e){e&&e.length&&Object(o.a)(this.$router,e)},getMore:function(){this.loading=!0,this.orderMessageParams.page=++this.orderMessageParams.page,this.isMore&&(this.loading=!1,this.getmessageOrderList(!0))}})},g={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("mt-header",{staticClass:"header",attrs:{title:"订单消息"}},[r("header-item",{attrs:{slot:"left",isBack:!0},on:{onclick:e.goBack},slot:"left"})],1),e._v(" "),r("div",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:e.getMore,expression:"getMore"}],staticClass:"flex-wrapper body",attrs:{"infinite-scroll-disabled":"loading","infinite-scroll-distance":"10"}},[e._l(e.messageOrderList,function(t,a){return e.messageOrderList.length>0?r("div",{staticClass:"order-message-body",on:{click:function(s){e.getOrderDetail(t.link)}}},[r("p",[e._v(e._s(e._f("convertTime")(1e3*t.created_at)))]),e._v(" "),r("div",{staticClass:"order-track"},[r("div",{staticClass:"arrow-left"},[r("span",[e._v(e._s(t.title))]),e._v(" "),r("div",{staticClass:"order-status"},[r("div",{staticClass:"orderImage"},[null!=t.photo?r("img",{attrs:{src:t.photo.thumb}}):e._e(),e._v(" "),null==t.photo?r("img",{attrs:{src:s("aVgn")}}):e._e()]),e._v(" "),r("p",[e._v(e._s(t.content))])])]),e._v(" "),r("img",{staticClass:"arrow-right",attrs:{src:s("TNrS")}})])]):e._e()}),e._v(" "),e.messageOrderList.length<=0?r("v-empty-message",{attrs:{info:"您还没有消息通知",type:"message"}}):e._e()],2)],1)},staticRenderFns:[]};var l=s("VU/8")(d,g,!1,function(e){s("QdIx")},"data-v-99cb3c2a",null);t.default=l.exports}});
//# sourceMappingURL=22.ab14e764d383e40c2477.js.map