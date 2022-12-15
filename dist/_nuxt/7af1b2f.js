(window.webpackJsonp=window.webpackJsonp||[]).push([[15,5],{518:function(t,e){t.exports={category:[{text:"便利ツール",slug:"tool"},{text:"節約",slug:"saving"},{text:"コラム",slug:"column"}],tags:[{text:"Webアプリ",slug:"web-app"},{text:"自作アプリ",slug:"self-made-app"},{text:"買い物リスト",slug:"kaimono-list"},{text:"レシピ",slug:"recipe"},{text:"献立",slug:"menu"},{text:"安い",slug:"cheap"},{text:"美味しい",slug:"delicious"},{text:"コスパ",slug:"cospa"},{text:"食材",slug:"foodstuff"},{text:"食品",slug:"food"},{text:"非常食",slug:"emergency-food"},{text:"賞味期限",slug:"freshness-date"},{text:"防災",slug:"disaster-prevention"},{text:"スーパーマーケット",slug:"supermarket"},{text:"支払い",slug:"payment"},{text:"ポイント",slug:"pont"},{text:"クレジットカード",slug:"credit-card"},{text:"電子マネー",slug:"e-money"},{text:"QRコード決済",slug:"qr-code-clearing"},{text:"ヤオコー",slug:"yaoko"},{text:"一人暮らし",slug:"living-alone"},{text:"日用品",slug:"commodity"},{text:"学生",slug:"student"},{text:"引越し",slug:"home-moving"}],apps:[{name:"買い物メモ",slug:"kaimonomemo",description:"買い物の際に買う商品をメモしておけるアプリです。商品をカテゴリー分けしたり、メモ内容を他の人にシェアしたりすることができます。",img_pc:"kaimonomemo_app_pc.jpg",img_sp:"kaimonomemo_app_sp.png"}]}},519:function(t,e,o){var content=o(522);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(18).default)("1065634b",content,!0,{sourceMap:!1})},521:function(t,e,o){"use strict";o(519)},522:function(t,e,o){var n=o(17)(!1);n.push([t.i,'.bread[data-v-ad70ef0e]{padding:0;display:flex;flex-wrap:wrap;margin:0 0 3em}.bread li[data-v-ad70ef0e]{list-style:none;font-size:13px}.bread li[data-v-ad70ef0e]:not(:last-child){position:relative;padding-right:20px}.bread li[data-v-ad70ef0e]:not(:last-child):after{content:"";width:6px;height:6px;border-top:1px solid #222;border-right:1px solid #222;position:absolute;top:50%;right:8px;margin:auto;transform:translateY(-50%) rotate(45deg)}',""]),t.exports=n},523:function(t,e,o){"use strict";o.r(e);o(194),o(15);var n=o(102),r=o(0),l=o(518),c=o.n(l),d=r.default.extend({props:{pageType:{type:String},title:{type:String},cat:{type:String}},data:function(){return{category:Object(n.a)(c.a.category),tags:Object(n.a)(c.a.tags)}}}),m=(o(521),o(8)),component=Object(m.a)(d,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("ul",{staticClass:"bread"},[e("li",[e("nuxt-link",{attrs:{to:"/"}},[t._v("HOME")])],1),t._v(" "),"post"==t.pageType?e("li",[e("nuxt-link",{attrs:{to:"/category/".concat(t.cat,"/")}},[t._v(t._s(t.category.find((function(e){return e.slug==t.cat})).text))])],1):t._e(),t._v(" "),e("li",[t._v(t._s(t.title))])])}),[],!1,null,"ad70ef0e",null);e.default=component.exports},544:function(t,e,o){var content=o(563);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(18).default)("e8746ea4",content,!0,{sourceMap:!1})},562:function(t,e,o){"use strict";o(544)},563:function(t,e,o){var n=o(17)(!1);n.push([t.i,".contact_submit button[data-v-05f5ffb6]{display:block;border:none;margin:20px auto 0;width:100%;max-width:300px;font-size:20px;padding:.6em;background:gold;-ms-box-shadow:0 4px 0 0 orange;box-shadow:0 4px 0 0 orange;border-radius:5px;font-weight:700;transition:.2s;font-size:14px;color:#222;cursor:pointer}.contact_submit button[data-v-05f5ffb6]:hover{transform:translateY(4px);box-shadow:none}.contact_item[data-v-05f5ffb6]{display:flex;align-content:flex-start}.contact_item[data-v-05f5ffb6]:not(:last-child){margin-bottom:3%}.contact_item label[data-v-05f5ffb6]{width:150px;font-size:16px}.contact_item input[data-v-05f5ffb6],.contact_item textarea[data-v-05f5ffb6]{margin-left:2%;width:calc(100% - 150px);-webkit-appearance:none;background-color:#fff;background-image:none;border:1px solid #707070;box-sizing:border-box;display:inline-block;font-size:inherit;outline:0;transition:border-color .2s cubic-bezier(.645,.045,.355,1);width:calc(100% - 100px);line-height:2;padding:0 .5em}@media screen and (max-width:767px){.contact_item[data-v-05f5ffb6]{display:block}.contact_item[data-v-05f5ffb6]:not(:last-child){margin-bottom:6%}.contact_item label[data-v-05f5ffb6]{width:100%;font-size:15px;margin-bottom:1em}.contact_item input[data-v-05f5ffb6],.contact_item textarea[data-v-05f5ffb6]{margin-left:0;width:100%}}",""]),t.exports=n},668:function(t,e,o){"use strict";o.r(e);o(42);var n=o(0).default.extend({layout:"default",head:function(){return{title:"お問い合わせ | かいものの助",meta:[{hid:"description",name:"description",content:"かいものの助のお問い合わせページ。かいものの助に関する感想や意見、「買い物」に関する情報共有など、なんでもお問い合わせください。"},{hid:"keywords",name:"keywords",content:"かいものの助,お問い合わせ,買い物,買い物メモ,メモ,お買い物,商品,ショッピング,便利ツール,買い物アプリ"},{hid:"og:title",property:"og:title",content:"お問い合わせ | かいものの助"},{hid:"og:description",property:"og:description",content:"かいものの助のお問い合わせページ。かいものの助に関する感想や意見、「買い物」に関する情報共有など、なんでもお問い合わせください。"}]}}}),r=(o(562),o(8)),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"container"},[e("h1",[t._v("お問い合わせ")]),t._v(" "),e("bread",{attrs:{pageType:"page",title:"お問い合わせ",cat:""}}),t._v(" "),e("div",{staticClass:"row"},[e("form",{staticClass:"contact_form",attrs:{name:"contact",method:"POST",action:"/thanks","data-netlify":"true"}},[e("input",{attrs:{type:"hidden",name:"form-name",value:"contact"}}),t._v(" "),e("div",{staticClass:"contact_item"},[e("label",{attrs:{for:"name"}},[t._v("お名前")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text",id:"name",name:"name",autocomplete:"name",required:""},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),t._v(" "),e("div",{staticClass:"contact_item"},[e("label",{attrs:{for:"email"}},[t._v("メールアドレス")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"email",id:"email",name:"email",autocomplete:"email",required:""},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),t._v(" "),e("div",{staticClass:"contact_item"},[e("label",{attrs:{for:"message"}},[t._v("お問い合わせ内容")]),t._v(" "),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],attrs:{id:"message",rows:"12",name:"message",required:""},domProps:{value:t.message},on:{input:function(e){e.target.composing||(t.message=e.target.value)}}})]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"contact_item"},[e("label",{attrs:{for:"message"}},[t._v("スパムでない場合は空欄")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.botField,expression:"botField"}],attrs:{type:"text",name:"bot-field"},domProps:{value:t.botField},on:{input:function(e){e.target.composing||(t.botField=e.target.value)}}})]),t._v(" "),t._m(0)])])],1)}),[function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"contact_submit"},[e("button",{attrs:{type:"submit"}},[t._v("送信")])])}],!1,null,"05f5ffb6",null);e.default=component.exports;installComponents(component,{Bread:o(523).default})}}]);