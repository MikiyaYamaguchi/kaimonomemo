(window.webpackJsonp=window.webpackJsonp||[]).push([[0,5],{518:function(t,e){t.exports={category:[{text:"便利ツール",slug:"tool"},{text:"節約",slug:"saving"},{text:"コラム",slug:"column"}],tags:[{text:"Webアプリ",slug:"web-app"},{text:"自作アプリ",slug:"self-made-app"},{text:"買い物リスト",slug:"kaimono-list"},{text:"レシピ",slug:"recipe"},{text:"献立",slug:"menu"},{text:"安い",slug:"cheap"},{text:"美味しい",slug:"delicious"},{text:"コスパ",slug:"cospa"},{text:"食材",slug:"foodstuff"},{text:"食品",slug:"food"},{text:"非常食",slug:"emergency-food"},{text:"賞味期限",slug:"freshness-date"},{text:"防災",slug:"disaster-prevention"},{text:"スーパーマーケット",slug:"supermarket"},{text:"支払い",slug:"payment"},{text:"ポイント",slug:"pont"},{text:"クレジットカード",slug:"credit-card"},{text:"電子マネー",slug:"e-money"},{text:"QRコード決済",slug:"qr-code-clearing"}],apps:[{name:"買い物メモ",slug:"kaimonomemo",description:"買い物の際に買う商品をメモしておけるアプリです。商品をカテゴリー分けしたり、メモ内容を他の人にシェアしたりすることができます。",img_pc:"kaimonomemo_app_pc.jpg",img_sp:"kaimonomemo_app_sp.png"}]}},519:function(t,e,n){var content=n(522);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("1065634b",content,!0,{sourceMap:!1})},521:function(t,e,n){"use strict";n(519)},522:function(t,e,n){var o=n(17)(!1);o.push([t.i,'.bread[data-v-ad70ef0e]{padding:0;display:flex;flex-wrap:wrap;margin:0 0 3em}.bread li[data-v-ad70ef0e]{list-style:none;font-size:13px}.bread li[data-v-ad70ef0e]:not(:last-child){position:relative;padding-right:20px}.bread li[data-v-ad70ef0e]:not(:last-child):after{content:"";width:6px;height:6px;border-top:1px solid #222;border-right:1px solid #222;position:absolute;top:50%;right:8px;margin:auto;transform:translateY(-50%) rotate(45deg)}',""]),t.exports=o},523:function(t,e,n){"use strict";n.r(e);n(194),n(15);var o=n(102),l=n(0),r=n(518),d=n.n(r),c=l.default.extend({props:{pageType:{type:String},title:{type:String},cat:{type:String}},data:function(){return{category:Object(o.a)(d.a.category),tags:Object(o.a)(d.a.tags)}}}),f=(n(521),n(8)),component=Object(f.a)(c,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("ul",{staticClass:"bread"},[e("li",[e("nuxt-link",{attrs:{to:"/"}},[t._v("HOME")])],1),t._v(" "),"post"==t.pageType?e("li",[e("nuxt-link",{attrs:{to:"/category/".concat(t.cat,"/")}},[t._v(t._s(t.category.find((function(e){return e.slug==t.cat})).text))])],1):t._e(),t._v(" "),e("li",[t._v(t._s(t.title))])])}),[],!1,null,"ad70ef0e",null);e.default=component.exports},543:function(t,e,n){var content=n(561);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("1cc72e29",content,!0,{sourceMap:!1})},560:function(t,e,n){"use strict";n(543)},561:function(t,e,n){var o=n(17)(!1);o.push([t.i,".main_txt[data-v-5bbff2e3]{font-size:22px;font-weight:700}@media screen and (max-width:767px){.main_txt[data-v-5bbff2e3]{font-size:18px}}",""]),t.exports=o},646:function(t,e,n){"use strict";n.r(e);var o=n(0).default.extend({layout:"default",head:function(){return{title:"404 Not Found | かいものの助",meta:[{hid:"description",name:"description",content:"かいものの助の404 Not Foundページ。"},{hid:"keywords",name:"keywords",content:"かいものの助,買い物,買い物メモ,メモ,お買い物,商品,ショッピング,便利ツール,買い物アプリ"}]}}}),l=(n(560),n(8)),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"container"},[e("h1",[t._v("404 Not Found")]),t._v(" "),e("bread",{attrs:{pageType:"page",title:"404 Not Found",cat:""}}),t._v(" "),e("p",{staticClass:"main_txt"},[t._v("お探しのページが見つかりませんでした。")]),t._v(" "),e("p",[t._v("\n    申し訳ありません。お探しのページが見つかりませんでした。"),e("br"),e("nuxt-link",{attrs:{to:"/"}},[t._v("TOPへ戻る")])],1)],1)}),[],!1,null,"5bbff2e3",null);e.default=component.exports;installComponents(component,{Bread:n(523).default})}}]);