(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{518:function(t,e){t.exports={category:[{text:"便利ツール",slug:"tool"},{text:"節約",slug:"saving"},{text:"コラム",slug:"column"}],tags:[{text:"Webアプリ",slug:"web-app"},{text:"自作アプリ",slug:"self-made-app"},{text:"買い物リスト",slug:"kaimono-list"},{text:"レシピ",slug:"recipe"},{text:"献立",slug:"menu"},{text:"安い",slug:"cheap"},{text:"美味しい",slug:"delicious"},{text:"コスパ",slug:"cospa"},{text:"食材",slug:"foodstuff"},{text:"食品",slug:"food"},{text:"非常食",slug:"emergency-food"},{text:"賞味期限",slug:"freshness-date"},{text:"防災",slug:"disaster-prevention"},{text:"スーパーマーケット",slug:"supermarket"},{text:"支払い",slug:"payment"},{text:"ポイント",slug:"pont"},{text:"クレジットカード",slug:"credit-card"},{text:"電子マネー",slug:"e-money"},{text:"QRコード決済",slug:"qr-code-clearing"}],apps:[{name:"買い物メモ",slug:"kaimonomemo",description:"買い物の際に買う商品をメモしておけるアプリです。商品をカテゴリー分けしたり、メモ内容を他の人にシェアしたりすることができます。",img_pc:"kaimonomemo_app_pc.jpg",img_sp:"kaimonomemo_app_sp.png"}]}},520:function(t,e,r){var content=r(529);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(18).default)("0f22be57",content,!0,{sourceMap:!1})},528:function(t,e,r){"use strict";r(520)},529:function(t,e,r){var l=r(17)(!1);l.push([t.i,'.article_list_wrap[data-v-5df4acba]{display:flex;flex-wrap:wrap}.article_list_wrap .article_card[data-v-5df4acba]{width:32%;margin-left:2%;background:#fff;-ms-box-shadow:1px 1px 4px 2px rgba(0,0,0,.1);box-shadow:1px 1px 4px 2px rgba(0,0,0,.1);border-left:8px solid orange;transition:.2s;margin-top:2.5%}.article_list_wrap .article_card[data-v-5df4acba]:nth-child(3n+1){margin-left:0}.article_list_wrap .article_card[data-v-5df4acba]:first-child,.article_list_wrap .article_card[data-v-5df4acba]:nth-child(2),.article_list_wrap .article_card[data-v-5df4acba]:nth-child(3){margin-top:0}.article_list_wrap .article_card[data-v-5df4acba]:hover{border-color:gold}.article_list_wrap .article_card a[data-v-5df4acba]{text-decoration:none;display:block;padding:6% 6% 6% calc(8px + 6%);height:100%}.article_list_wrap .article_card a .title_txt[data-v-5df4acba]{font-size:16px;font-weight:700;margin:0;line-height:1.6}.article_list_wrap .article_card a .date_txt[data-v-5df4acba]{text-align:left;margin-top:0;color:grey}.article_list_wrap .article_card a .category[data-v-5df4acba]{font-size:12px;margin-bottom:0}.article_list_wrap .article_card a .tag[data-v-5df4acba]{line-height:1.3}.article_list_wrap .article_card a .tag span[data-v-5df4acba]{display:inline-block;position:relative;font-size:12px;margin-right:10px}.article_list_wrap .article_card a .tag span[data-v-5df4acba]:before{content:"#"}@media screen and (max-width:767px){.article_list_wrap[data-v-5df4acba]{display:block}.article_list_wrap .article_card[data-v-5df4acba]{width:100%;margin-left:0;margin-top:0!important}.article_list_wrap .article_card[data-v-5df4acba]:not(:last-child){margin-bottom:4%}.article_list_wrap .article_card a[data-v-5df4acba]{padding:3% 3% 3% calc(8px + 3%)}}',""]),t.exports=l},530:function(t,e,r){"use strict";r.r(e);var l=r(102),c=(r(194),r(15),r(33),r(0)),n=r(518),d=r.n(n),o=c.default.extend({props:{articles:{type:Array,required:!0}},data:function(){return{category:Object(l.a)(d.a.category),tags:Object(l.a)(d.a.tags)}},methods:{getCatName:function(t){return this.category.find((function(e){return e.slug===t})).text},getTagName:function(t){var e=this,r=[];return t.forEach((function(t){r.push(e.tags.find((function(e){return e.slug===t})).text)})),r}}}),_=(r(528),r(8)),component=Object(_.a)(o,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"article_list_wrap"},t._l(t.articles,(function(article){return e("div",{key:article.slug,staticClass:"article_card"},[e("NuxtLink",{staticClass:"inline-block",attrs:{to:{name:"article-slug",params:{slug:article.slug}}}},[e("p",{staticClass:"category"},[t._v(t._s(t.getCatName(article.category)))]),t._v(" "),e("p",{staticClass:"title_txt"},[t._v(t._s(article.title))]),t._v(" "),e("p",{staticClass:"date_txt"},[t._v("\n        "+t._s(t.$dayjs(article.updatedAt).format("YYYY/MM/DD"))+"\n      ")]),t._v(" "),e("p",{staticClass:"tag"},t._l(t.getTagName(article.tag),(function(r){return e("span",{key:r},[t._v(t._s(r))])})),0)])],1)})),0)}),[],!1,null,"5df4acba",null);e.default=component.exports}}]);