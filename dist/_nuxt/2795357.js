(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{518:function(t,e){t.exports={category:[{text:"便利ツール",slug:"tool"},{text:"レシピ",slug:"recipe"}],tags:[{text:"Webアプリ",slug:"web-app"},{text:"自作アプリ",slug:"self-made-app"},{text:"買い物リスト",slug:"kaimono-list"},{text:"節約",slug:"saving"},{text:"献立",slug:"menu"},{text:"安い",slug:"cheap"},{text:"美味しい",slug:"delicious"}],apps:[{name:"買い物メモ",slug:"kaimonomemo",description:"買い物の際に買う商品をメモしておけるアプリです。商品をカテゴリー分けしたり、メモ内容を他の人にシェアしたりすることができます。",img_pc:"kaimonomemo_app_pc.jpg",img_sp:"kaimonomemo_app_sp.png"}]}},520:function(t,e,r){var content=r(529);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(18).default)("757d07ea",content,!0,{sourceMap:!1})},528:function(t,e,r){"use strict";r(520)},529:function(t,e,r){var c=r(17)(!1);c.push([t.i,'.article_list_wrap[data-v-46c0f33b]{display:flex;flex-wrap:wrap}.article_list_wrap .article_card[data-v-46c0f33b]{width:32%;margin-left:2%;background:#fff;-ms-box-shadow:1px 1px 4px 2px rgba(0,0,0,.1);box-shadow:1px 1px 4px 2px rgba(0,0,0,.1);border-left:8px solid orange}.article_list_wrap .article_card[data-v-46c0f33b]:nth-child(3n+1){margin-left:0}.article_list_wrap .article_card a[data-v-46c0f33b]{text-decoration:none;display:block;padding:6% 6% 6% calc(8px + 6%);height:100%}.article_list_wrap .article_card a .title_txt[data-v-46c0f33b]{font-size:16px;font-weight:700;margin:0}.article_list_wrap .article_card a .date_txt[data-v-46c0f33b]{text-align:left;margin-top:0;color:grey}.article_list_wrap .article_card a .category[data-v-46c0f33b]{font-size:12px;margin-bottom:0}.article_list_wrap .article_card a .tag span[data-v-46c0f33b]{display:inline-block;position:relative;font-size:12px;margin-right:10px}.article_list_wrap .article_card a .tag span[data-v-46c0f33b]:before{content:"#"}@media screen and (max-width:767px){.article_list_wrap[data-v-46c0f33b]{display:block}.article_list_wrap .article_card[data-v-46c0f33b]{width:100%;margin-left:0}.article_list_wrap .article_card[data-v-46c0f33b]:not(:last-child){margin-bottom:4%}.article_list_wrap .article_card a[data-v-46c0f33b]{padding:3% 3% 3% calc(8px + 3%)}}',""]),t.exports=c},530:function(t,e,r){"use strict";r.r(e);var c=r(102),l=(r(194),r(15),r(33),r(0)),n=r(518),o=r.n(n),d=l.default.extend({props:{articles:{type:Array,required:!0}},data:function(){return{category:Object(c.a)(o.a.category),tags:Object(c.a)(o.a.tags)}},methods:{getCatName:function(t){return this.category.find((function(e){return e.slug===t})).text},getTagName:function(t){var e=this,r=[];return t.forEach((function(t){r.push(e.tags.find((function(e){return e.slug===t})).text)})),r}}}),_=(r(528),r(8)),component=Object(_.a)(d,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"article_list_wrap"},t._l(t.articles,(function(article){return e("div",{key:article.slug,staticClass:"article_card"},[e("NuxtLink",{staticClass:"inline-block",attrs:{to:{name:"article-slug",params:{slug:article.slug}}}},[e("p",{staticClass:"category"},[t._v(t._s(t.getCatName(article.category)))]),t._v(" "),e("p",{staticClass:"title_txt"},[t._v(t._s(article.title))]),t._v(" "),e("p",{staticClass:"date_txt"},[t._v("\n        "+t._s(t.$dayjs(article.updatedAt).format("YYYY/MM/DD"))+"\n      ")]),t._v(" "),e("p",{staticClass:"tag"},t._l(t.getTagName(article.tag),(function(r){return e("span",{key:r},[t._v(t._s(r))])})),0)])],1)})),0)}),[],!1,null,"46c0f33b",null);e.default=component.exports}}]);