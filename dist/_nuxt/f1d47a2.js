(window.webpackJsonp=window.webpackJsonp||[]).push([[11,5],{518:function(t,e){t.exports={category:[{text:"便利ツール",slug:"tool"},{text:"節約",slug:"saving"},{text:"コラム",slug:"column"}],tags:[{text:"Webアプリ",slug:"web-app"},{text:"自作アプリ",slug:"self-made-app"},{text:"買い物リスト",slug:"kaimono-list"},{text:"レシピ",slug:"recipe"},{text:"献立",slug:"menu"},{text:"安い",slug:"cheap"},{text:"美味しい",slug:"delicious"},{text:"コスパ",slug:"cospa"},{text:"食材",slug:"foodstuff"},{text:"食品",slug:"food"},{text:"非常食",slug:"emergency-food"},{text:"賞味期限",slug:"freshness-date"},{text:"防災",slug:"disaster-prevention"},{text:"スーパーマーケット",slug:"supermarket"},{text:"支払い",slug:"payment"},{text:"ポイント",slug:"pont"},{text:"クレジットカード",slug:"credit-card"},{text:"電子マネー",slug:"e-money"},{text:"QRコード決済",slug:"qr-code-clearing"},{text:"ヤオコー",slug:"yaoko"},{text:"一人暮らし",slug:"living-alone"},{text:"日用品",slug:"commodity"},{text:"学生",slug:"student"},{text:"引越し",slug:"home-moving"}],apps:[{name:"買い物メモ",slug:"kaimonomemo",description:"買い物の際に買う商品をメモしておけるアプリです。商品をカテゴリー分けしたり、メモ内容を他の人にシェアしたりすることができます。",img_pc:"kaimonomemo_app_pc.jpg",img_sp:"kaimonomemo_app_sp.png"}]}},519:function(t,e,n){var content=n(522);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("1065634b",content,!0,{sourceMap:!1})},521:function(t,e,n){"use strict";n(519)},522:function(t,e,n){var o=n(17)(!1);o.push([t.i,'.bread[data-v-ad70ef0e]{padding:0;display:flex;flex-wrap:wrap;margin:0 0 3em}.bread li[data-v-ad70ef0e]{list-style:none;font-size:13px}.bread li[data-v-ad70ef0e]:not(:last-child){position:relative;padding-right:20px}.bread li[data-v-ad70ef0e]:not(:last-child):after{content:"";width:6px;height:6px;border-top:1px solid #222;border-right:1px solid #222;position:absolute;top:50%;right:8px;margin:auto;transform:translateY(-50%) rotate(45deg)}',""]),t.exports=o},523:function(t,e,n){"use strict";n.r(e);n(194),n(15);var o=n(102),r=n(0),l=n(518),d=n.n(l),c=r.default.extend({props:{pageType:{type:String},title:{type:String},cat:{type:String}},data:function(){return{category:Object(o.a)(d.a.category),tags:Object(o.a)(d.a.tags)}}}),x=(n(521),n(8)),component=Object(x.a)(c,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("ul",{staticClass:"bread"},[e("li",[e("nuxt-link",{attrs:{to:"/"}},[t._v("HOME")])],1),t._v(" "),"post"==t.pageType?e("li",[e("nuxt-link",{attrs:{to:"/category/".concat(t.cat,"/")}},[t._v(t._s(t.category.find((function(e){return e.slug==t.cat})).text))])],1):t._e(),t._v(" "),e("li",[t._v(t._s(t.title))])])}),[],!1,null,"ad70ef0e",null);e.default=component.exports},667:function(t,e,n){"use strict";n.r(e);var o=n(0).default.extend({layout:"default",head:function(){return{title:"このサイトについて | かいものの助",meta:[{hid:"description",name:"description",content:"かいものの助サイトについてご紹介します。本サイトの意義や目的を記載しています。本サイトは日常生活に欠かせない「買い物」について便利な情報や自作Webアプリを掲載しているサイトです。"},{hid:"keywords",name:"keywords",content:"かいものの助,サイトについて,買い物,買い物メモ,メモ,お買い物,商品,ショッピング,便利ツール,買い物アプリ"},{hid:"og:title",property:"og:title",content:"このサイトについて | かいものの助"},{hid:"og:description",property:"og:description",content:"かいものの助サイトについてご紹介します。本サイトの意義や目的を記載しています。本サイトは日常生活に欠かせない「買い物」について便利な情報や自作Webアプリを掲載しているサイトです。"}]}}}),r=n(8),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"container"},[e("h1",[t._v("このサイトについて")]),t._v(" "),e("bread",{attrs:{pageType:"page",title:"このサイトについて",cat:""}}),t._v(" "),t._m(0),t._v(" "),e("p",{staticClass:"text-right"},[t._v("「かいものの助」運営者　mikiya")])],1)}),[function(){var t=this,e=t._self._c;t._self._setupProxy;return e("p",[t._v("\n    「かいものの助」をご覧いただき、ありがとうございます。"),e("br"),e("br"),t._v("\n    本サイトは、日常生活に欠かせない「買い物」において、少しでも手助けになるような情報や便利な自作のWebアプリを掲載しているサイトです。"),e("br"),t._v("\n    本サイトの運営者の私も毎日のように買い物をする中で常に情報収集をしたり、便利なツールを探したりしています。"),e("br"),t._v("\n    私が知って得したり助かったりした情報を皆さんに共有できたらと思い、本サイトを立ち上げることにしました。"),e("br"),e("br"),t._v("\n    また、私はWebエンジニアの仕事をしているので、この知識と技術を活かして、「買い物」を効率化できるような便利なアプリを開発したいと思いました。"),e("br"),t._v("\n    自分の持つ技術を使って、多くの人の「買い物」を手助けすることができたら、それはとても素晴らしいことです。"),e("br"),t._v("\n    そのプラットフォームとしての役割を、本サイトが担ってくれたら一石二鳥だと思いました。"),e("br"),e("br"),t._v("\n    日常生活において欠かせない「買い物」だからこそ、情報や技術を共有すべきです。"),e("br"),e("br"),t._v("\n    私が発信する「買い物」に関する情報やアプリがこのサイトに訪れてくださった皆さんの役に立つことを願っています。\n  ")])}],!1,null,"5635abaa",null);e.default=component.exports;installComponents(component,{Bread:n(523).default})}}]);