(window.webpackJsonp=window.webpackJsonp||[]).push([[21,5],{495:function(t,e){t.exports={category:[{text:"便利ツール",slug:"tool"}],tags:[{text:"Webアプリ",slug:"web-app"},{text:"自作アプリ",slug:"self-made-app"},{text:"買い物リスト",slug:"kaimono-list"}],apps:[{name:"買い物メモ",slug:"kaimonomemo",description:"買い物の際に買う商品をメモしておけるアプリです。商品をカテゴリー分けしたり、メモ内容を他の人にシェアしたりすることができます。",img_pc:"kaimonomemo_app_pc.jpg",img_sp:"kaimonomemo_app_sp.png"}]}},496:function(t,e,r){var content=r(499);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(18).default)("1065634b",content,!0,{sourceMap:!1})},498:function(t,e,r){"use strict";r(496)},499:function(t,e,r){var o=r(17)(!1);o.push([t.i,'.bread[data-v-ad70ef0e]{padding:0;display:flex;flex-wrap:wrap;margin:0 0 3em}.bread li[data-v-ad70ef0e]{list-style:none;font-size:13px}.bread li[data-v-ad70ef0e]:not(:last-child){position:relative;padding-right:20px}.bread li[data-v-ad70ef0e]:not(:last-child):after{content:"";width:6px;height:6px;border-top:1px solid #222;border-right:1px solid #222;position:absolute;top:50%;right:8px;margin:auto;transform:translateY(-50%) rotate(45deg)}',""]),t.exports=o},500:function(t,e,r){"use strict";r.r(e);r(194),r(15);var o=r(102),n=r(0),d=r(495),l=r.n(d),f=n.default.extend({props:{pageType:{type:String},title:{type:String},cat:{type:String}},data:function(){return{category:Object(o.a)(l.a.category),tags:Object(o.a)(l.a.tags)}}}),c=(r(498),r(8)),component=Object(c.a)(f,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("ul",{staticClass:"bread"},[e("li",[e("nuxt-link",{attrs:{to:"/"}},[t._v("HOME")])],1),t._v(" "),"post"==t.pageType?e("li",[e("nuxt-link",{attrs:{to:"/category/".concat(t.cat,"/")}},[t._v(t._s(t.category.find((function(e){return e.slug==t.cat})).text))])],1):t._e(),t._v(" "),e("li",[t._v(t._s(t.title))])])}),[],!1,null,"ad70ef0e",null);e.default=component.exports},532:function(t,e,r){var content=r(573);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(18).default)("2915e7d9",content,!0,{sourceMap:!1})},572:function(t,e,r){"use strict";r(532)},573:function(t,e,r){var o=r(17)(!1);o.push([t.i,".profile_wrap .flex_wrap[data-v-2f6dd194]{display:flex;align-items:center}.profile_wrap .flex_wrap .img[data-v-2f6dd194]{width:32%}.profile_wrap .flex_wrap .img figure[data-v-2f6dd194]{position:relative;margin:0;height:0;padding-top:100%;overflow:hidden;border:1px solid #707070;border-radius:50%}.profile_wrap .flex_wrap .img figure img[data-v-2f6dd194]{max-width:100%;position:absolute;top:0;left:0;right:0;bottom:0;margin:auto;width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.profile_wrap .flex_wrap .txt[data-v-2f6dd194]{width:64%;margin-left:4%}.profile_wrap .flex_wrap .txt .name_txt[data-v-2f6dd194]{font-size:24px;font-weight:700}@media screen and (max-width:767px){.profile_wrap .flex_wrap[data-v-2f6dd194]{display:block}.profile_wrap .flex_wrap .img[data-v-2f6dd194],.profile_wrap .flex_wrap .txt[data-v-2f6dd194]{width:100%!important;margin-left:0!important}.profile_wrap .flex_wrap .img[data-v-2f6dd194]{margin-bottom:5%;padding:0 10%}.profile_wrap .flex_wrap .txt .name_txt[data-v-2f6dd194]{font-size:20px}}",""]),t.exports=o},614:function(t,e,r){"use strict";r.r(e);var o=[function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"profile_wrap"},[e("div",{staticClass:"flex_wrap"},[e("div",{staticClass:"img"},[e("figure",[e("img",{attrs:{src:r(317),alt:"mikiya"}})])]),t._v(" "),e("div",{staticClass:"txt"},[e("p",{staticClass:"name_txt"},[t._v("mikiya")]),t._v(" "),e("p",[t._v("\n          千葉県在住のWebエンジニア。"),e("br"),t._v("\n          都内のWeb制作会社に勤務。"),e("br"),e("br"),t._v("\n          独学でプログラミングの勉強を始めて、エンジニア職で新卒入社。"),e("br"),t._v("\n          一発目でとんでもないブラック企業を引き当ててしまい、3ヶ月でやめるが、諦めずエンジニアを続けて、今に至る。"),e("br"),e("br"),t._v("\n          最近ではWebアプリケーションの開発に興味を持ち、絶賛勉強中。"),e("br"),t._v("\n          自分が身につけたスキルを活かして、日常生活の中の「これがあったらいいのに」を形にすることを目標に日々制作活動に勤しむ。"),e("br"),e("br"),t._v("\n          趣味は映画鑑賞。"),e("br"),t._v("\n          MCUやDCなどのアメコミヒーロー映画にどハマりしています。\n        ")])])])])}],n=r(0).default.extend({layout:"default",head:function(){return{title:"プロフィール | かいものの助",meta:[{hid:"description",name:"description",content:"かいものの助のプロフィールページ。かいものの助の運営者ついての自己紹介を記載しています。"},{hid:"keywords",name:"keywords",content:"かいものの助,プロフィール,買い物,買い物メモ,メモ,お買い物,商品,ショッピング,便利ツール,買い物アプリ"},{hid:"og:title",property:"og:title",content:"プロフィール | かいものの助"},{hid:"og:description",property:"og:description",content:"かいものの助のプロフィールページ。かいものの助の運営者ついての自己紹介を記載しています。"}]}}}),d=(r(572),r(8)),component=Object(d.a)(n,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"container"},[e("h1",[t._v("プロフィール")]),t._v(" "),e("bread",{attrs:{pageType:"page",title:"プロフィール",cat:""}}),t._v(" "),t._m(0)],1)}),o,!1,null,"2f6dd194",null);e.default=component.exports;installComponents(component,{Bread:r(500).default})}}]);