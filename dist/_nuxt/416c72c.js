(window.webpackJsonp=window.webpackJsonp||[]).push([[12,4,5,8],{518:function(t,e){t.exports={category:[{text:"便利ツール",slug:"tool"},{text:"節約",slug:"saving"},{text:"コラム",slug:"column"}],tags:[{text:"Webアプリ",slug:"web-app"},{text:"自作アプリ",slug:"self-made-app"},{text:"買い物リスト",slug:"kaimono-list"},{text:"レシピ",slug:"recipe"},{text:"献立",slug:"menu"},{text:"安い",slug:"cheap"},{text:"美味しい",slug:"delicious"},{text:"コスパ",slug:"cospa"},{text:"食材",slug:"foodstuff"},{text:"食品",slug:"food"},{text:"非常食",slug:"emergency-food"},{text:"賞味期限",slug:"freshness-date"},{text:"防災",slug:"disaster-prevention"}],apps:[{name:"買い物メモ",slug:"kaimonomemo",description:"買い物の際に買う商品をメモしておけるアプリです。商品をカテゴリー分けしたり、メモ内容を他の人にシェアしたりすることができます。",img_pc:"kaimonomemo_app_pc.jpg",img_sp:"kaimonomemo_app_sp.png"}]}},519:function(t,e,r){var content=r(522);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(18).default)("1065634b",content,!0,{sourceMap:!1})},520:function(t,e,r){var content=r(529);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(18).default)("01c3e762",content,!0,{sourceMap:!1})},521:function(t,e,r){"use strict";r(519)},522:function(t,e,r){var n=r(17)(!1);n.push([t.i,'.bread[data-v-ad70ef0e]{padding:0;display:flex;flex-wrap:wrap;margin:0 0 3em}.bread li[data-v-ad70ef0e]{list-style:none;font-size:13px}.bread li[data-v-ad70ef0e]:not(:last-child){position:relative;padding-right:20px}.bread li[data-v-ad70ef0e]:not(:last-child):after{content:"";width:6px;height:6px;border-top:1px solid #222;border-right:1px solid #222;position:absolute;top:50%;right:8px;margin:auto;transform:translateY(-50%) rotate(45deg)}',""]),t.exports=n},523:function(t,e,r){"use strict";r.r(e);r(194),r(15);var n=r(102),l=r(0),c=r(518),o=r.n(c),d=l.default.extend({props:{pageType:{type:String},title:{type:String},cat:{type:String}},data:function(){return{category:Object(n.a)(o.a.category),tags:Object(n.a)(o.a.tags)}}}),_=(r(521),r(8)),component=Object(_.a)(d,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("ul",{staticClass:"bread"},[e("li",[e("nuxt-link",{attrs:{to:"/"}},[t._v("HOME")])],1),t._v(" "),"post"==t.pageType?e("li",[e("nuxt-link",{attrs:{to:"/category/".concat(t.cat,"/")}},[t._v(t._s(t.category.find((function(e){return e.slug==t.cat})).text))])],1):t._e(),t._v(" "),e("li",[t._v(t._s(t.title))])])}),[],!1,null,"ad70ef0e",null);e.default=component.exports},528:function(t,e,r){"use strict";r(520)},529:function(t,e,r){var n=r(17)(!1);n.push([t.i,'.article_list_wrap[data-v-221e5e57]{display:flex;flex-wrap:wrap}.article_list_wrap .article_card[data-v-221e5e57]{width:32%;margin-left:2%;background:#fff;-ms-box-shadow:1px 1px 4px 2px rgba(0,0,0,.1);box-shadow:1px 1px 4px 2px rgba(0,0,0,.1);border-left:8px solid orange;transition:.2s;margin-top:2.5%}.article_list_wrap .article_card[data-v-221e5e57]:nth-child(3n+1){margin-left:0}.article_list_wrap .article_card[data-v-221e5e57]:first-child,.article_list_wrap .article_card[data-v-221e5e57]:nth-child(2),.article_list_wrap .article_card[data-v-221e5e57]:nth-child(3){margin-top:0}.article_list_wrap .article_card[data-v-221e5e57]:hover{border-color:gold}.article_list_wrap .article_card a[data-v-221e5e57]{text-decoration:none;display:block;padding:6% 6% 6% calc(8px + 6%);height:100%}.article_list_wrap .article_card a .title_txt[data-v-221e5e57]{font-size:16px;font-weight:700;margin:0}.article_list_wrap .article_card a .date_txt[data-v-221e5e57]{text-align:left;margin-top:0;color:grey}.article_list_wrap .article_card a .category[data-v-221e5e57]{font-size:12px;margin-bottom:0}.article_list_wrap .article_card a .tag span[data-v-221e5e57]{display:inline-block;position:relative;font-size:12px;margin-right:10px}.article_list_wrap .article_card a .tag span[data-v-221e5e57]:before{content:"#"}@media screen and (max-width:767px){.article_list_wrap[data-v-221e5e57]{display:block}.article_list_wrap .article_card[data-v-221e5e57]{width:100%;margin-left:0;margin-top:0!important}.article_list_wrap .article_card[data-v-221e5e57]:not(:last-child){margin-bottom:4%}.article_list_wrap .article_card a[data-v-221e5e57]{padding:3% 3% 3% calc(8px + 3%)}}',""]),t.exports=n},530:function(t,e,r){"use strict";r.r(e);var n=r(102),l=(r(194),r(15),r(33),r(0)),c=r(518),o=r.n(c),d=l.default.extend({props:{articles:{type:Array,required:!0}},data:function(){return{category:Object(n.a)(o.a.category),tags:Object(n.a)(o.a.tags)}},methods:{getCatName:function(t){return this.category.find((function(e){return e.slug===t})).text},getTagName:function(t){var e=this,r=[];return t.forEach((function(t){r.push(e.tags.find((function(e){return e.slug===t})).text)})),r}}}),_=(r(528),r(8)),component=Object(_.a)(d,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"article_list_wrap"},t._l(t.articles,(function(article){return e("div",{key:article.slug,staticClass:"article_card"},[e("NuxtLink",{staticClass:"inline-block",attrs:{to:{name:"article-slug",params:{slug:article.slug}}}},[e("p",{staticClass:"category"},[t._v(t._s(t.getCatName(article.category)))]),t._v(" "),e("p",{staticClass:"title_txt"},[t._v(t._s(article.title))]),t._v(" "),e("p",{staticClass:"date_txt"},[t._v("\n        "+t._s(t.$dayjs(article.updatedAt).format("YYYY/MM/DD"))+"\n      ")]),t._v(" "),e("p",{staticClass:"tag"},t._l(t.getTagName(article.tag),(function(r){return e("span",{key:r},[t._v(t._s(r))])})),0)])],1)})),0)}),[],!1,null,"221e5e57",null);e.default=component.exports},536:function(t,e,r){var content=r(542);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(18).default)("002956e3",content,!0,{sourceMap:!1})},541:function(t,e,r){"use strict";r(536)},542:function(t,e,r){var n=r(17)(!1);n.push([t.i,".sns_wrap[data-v-6b3e001e]{display:flex;align-items:center;margin-bottom:4%}.sns_wrap .title_txt[data-v-6b3e001e]{margin:0 15px 0 0}.title_txt[data-v-6b3e001e]{font-size:16px}.el-icon-shopping-cart-2[data-v-6b3e001e]{font-size:24px;color:orange}.share_buttons[data-v-6b3e001e]{display:flex;flex-wrap:wrap;background:none!important;box-shadow:none!important;padding:0}.share_buttons>*[data-v-6b3e001e]{list-style:none}.share_buttons>*[data-v-6b3e001e],.share_buttons>* a[data-v-6b3e001e]{display:flex;align-items:center}.share_buttons>* img[data-v-6b3e001e]{width:40px}.share_buttons[data-v-6b3e001e]>:not(:last-child){margin-right:20px}@media screen and (max-width:767px){.sns_wrap[data-v-6b3e001e]{display:block;margin-top:10%}.title_txt[data-v-6b3e001e]{font-size:14px;margin-bottom:.5em!important}.el-icon-shopping-cart-2[data-v-6b3e001e]{font-size:20px}}",""]),t.exports=n},559:function(t,e,r){"use strict";r.r(e);r(105);var n={name:"SnsShareButton",props:{text:String},computed:{url:function(){return"https://ja.nuxtjs.org".concat(this.$route.path)},textAndHashTag:function(){return encodeURIComponent("".concat(this.text," ").concat(this.hashTag))},content:function(){return encodeURIComponent("".concat(this.text," ").concat(this.url))},twitterURL:function(){return"https://twitter.com/intent/tweet?url=https://kaimononosuke.netlify.app/".concat(this.$route.path,"&text=").concat(this.text)},facebookURL:function(){return"https://www.facebook.com/sharer/sharer.php?u=https://kaimononosuke.netlify.app/".concat(this.$route.path)},lineURL:function(){return"https://line.me/R/msg/text/?".concat(this.content)}}},l=(r(541),r(8)),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"sns_wrap"},[t._m(0),t._v(" "),e("ul",{staticClass:"share_buttons"},[e("li",[e("a",{attrs:{href:this.twitterURL,target:"_blank"}},[e("img",{attrs:{src:r(315),alt:"Twitter"}})])]),t._v(" "),e("li",[e("a",{attrs:{href:this.facebookURL,target:"_blank"}},[e("img",{attrs:{src:r(313),alt:"Facebook"}})])]),t._v(" "),e("li",[e("a",{attrs:{href:this.lineURL,target:"_blank"}},[e("img",{attrs:{src:r(314),alt:"LINE"}})])])])])])}),[function(){var t=this._self._c;return t("p",{staticClass:"title_txt"},[t("i",{staticClass:"el-icon-shopping-cart-2"}),this._v(" シェアする！\n    ")])}],!1,null,"6b3e001e",null);e.default=component.exports},650:function(t,e,r){"use strict";r.r(e);var n=r(28),l=r(12),c=r(102),o=(r(59),r(35),r(61),r(15),r(33),r(198),r(321),r(194),r(60),r(0)),d=r(518),_=r.n(d),f=o.default.extend({layout:"default",head:function(){return{title:"".concat(this.article.title," | かいものの助"),meta:[{hid:"description",name:"description",content:this.article.description},{hid:"og:title",property:"og:title",content:"".concat(this.article.title," | かいものの助")},{hid:"og:description",property:"og:description",content:this.article.description}]}},data:function(){return{articles_array:[],category:Object(c.a)(_.a.category),tags:Object(c.a)(_.a.tags)}},asyncData:function(t){return Object(l.a)(regeneratorRuntime.mark((function e(){var r,l,c,article,o,d,_,f,h;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,l=t.params,c=t.store,e.next=3,r("article/".concat(l.slug)).fetch();case 3:return article=e.sent,e.next=6,r("article").only(["title","slug"]).sortBy("createdAt","asc").surround(l.slug).fetch();case 6:return o=e.sent,d=Object(n.a)(o,2),_=d[0],f=d[1],e.next=12,r("article").sortBy("createdAt","desc").where({category:{$contains:article.category}}).skip(0).limit(c.state.indexPerPage).fetch();case 12:return h=e.sent,e.abrupt("return",{prev:_,next:f,article:article,related_articles:h});case 14:case"end":return e.stop()}}),e)})))()},methods:{shuffle:function(t){for(var i=t.length-1;i>=0;i--){var e=Math.floor(Math.random()*(i+1)),r=[t[e],t[i]];t[i]=r[0],t[e]=r[1]}return t},deleteSamePost:function(){var t=this;this.articles_array.forEach((function(e){e.slug===t.article.slug&&t.articles_array.splice(t.articles_array.findIndex((function(t){return t.slug===e.slug})),1)}))},getCatName:function(t){return this.category.find((function(e){return e.slug===t})).text},getTagName:function(t){var e=this,r=[];return t.forEach((function(t){r.push(e.tags.find((function(e){return e.slug===t})).text)})),r}},mounted:function(){this.articles_array=this.shuffle(this.related_articles),this.deleteSamePost(),this.articles_array.slice(0,3)}}),h=r(8),component=Object(h.a)(f,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"container"},[e("div",{staticClass:"category"},[e("nuxt-link",{attrs:{to:"/category/"+t.article.category}},[t._v(t._s(t.getCatName(t.article.category)))])],1),t._v(" "),e("h1",[t._v(t._s(t.article.title))]),t._v(" "),e("bread",{attrs:{pageType:"post",title:t.article.title,cat:t.article.category}}),t._v(" "),e("p",{staticClass:"date_txt"},[t._v(t._s(t.$dayjs(t.article.updatedAt).format("YYYY/MM/DD")))]),t._v(" "),e("div",{staticClass:"tag"},t._l(t.getTagName(t.article.tag),(function(r,i){return e("nuxt-link",{key:r,attrs:{to:"/tag/"+t.article.tag[i]}},[t._v(t._s(r))])})),1),t._v(" "),e("div",{staticClass:"article_wrap"},[e("h2",[t._v("目次")]),t._v(" "),e("div",{staticClass:"toc"},[e("ul",t._l(t.article.toc,(function(r){return e("li",{key:r.id},[2==r.depth?e("nuxt-link",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{el:"#".concat(r.id)},expression:"{\n              el: `#${toc.id}`,\n            }"}],staticClass:"h2_link",attrs:{to:"#"}},[t._v(t._s(r.text))]):3==r.depth?e("nuxt-link",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{el:"#".concat(r.id)},expression:"{\n              el: `#${toc.id}`,\n            }"}],staticClass:"h3_link",attrs:{to:"#"}},[t._v(t._s(r.text))]):t._e()],1)})),0)]),t._v(" "),e("nuxt-content",{attrs:{document:t.article}}),t._v(" "),e("SnsShareButton",{attrs:{text:t.article.title}}),t._v(" "),e("h2",[t._v("関連記事")]),t._v(" "),0!=t.articles_array.length?e("ArticleList",{attrs:{articles:t.articles_array}}):e("p",[t._v("記事がありません。")]),t._v(" "),e("ul",{staticClass:"page-nav"},[e("li",{staticClass:"page-nav__item page-nav__item--next"},[t.next?e("nuxt-link",{staticClass:"page-nav__link",attrs:{to:"/article/".concat(t.next.slug,"/")}},[t._v("\n          "+t._s(t.next.title)+"\n        ")]):t._e()],1),t._v(" "),e("li",{staticClass:"page-nav__item page-nav__item--prev"},[t.prev?e("nuxt-link",{staticClass:"page-nav__link",attrs:{to:"/article/".concat(t.prev.slug,"/")}},[t._v("\n          "+t._s(t.prev.title)+"\n        ")]):t._e()],1)])],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Bread:r(523).default,SnsShareButton:r(559).default,ArticleList:r(530).default})}}]);