(window.webpackJsonp=window.webpackJsonp||[]).push([[16,4],{518:function(t,n){t.exports={category:[{text:"便利ツール",slug:"tool"},{text:"節約",slug:"saving"},{text:"コラム",slug:"column"}],tags:[{text:"Webアプリ",slug:"web-app"},{text:"自作アプリ",slug:"self-made-app"},{text:"買い物リスト",slug:"kaimono-list"},{text:"レシピ",slug:"recipe"},{text:"献立",slug:"menu"},{text:"安い",slug:"cheap"},{text:"美味しい",slug:"delicious"},{text:"コスパ",slug:"cospa"},{text:"食材",slug:"foodstuff"},{text:"食品",slug:"food"},{text:"非常食",slug:"emergency-food"},{text:"賞味期限",slug:"freshness-date"},{text:"防災",slug:"disaster-prevention"},{text:"スーパーマーケット",slug:"supermarket"},{text:"支払い",slug:"payment"},{text:"ポイント",slug:"pont"},{text:"クレジットカード",slug:"credit-card"},{text:"電子マネー",slug:"e-money"},{text:"QRコード決済",slug:"qr-code-clearing"},{text:"ヤオコー",slug:"yaoko"},{text:"一人暮らし",slug:"living-alone"},{text:"日用品",slug:"commodity"},{text:"学生",slug:"student"},{text:"引越し",slug:"home-moving"}],apps:[{name:"買い物メモ",slug:"kaimonomemo",description:"買い物の際に買う商品をメモしておけるアプリです。商品をカテゴリー分けしたり、メモ内容を他の人にシェアしたりすることができます。",img_pc:"kaimonomemo_app_pc.jpg",img_sp:"kaimonomemo_app_sp.png"}]}},520:function(t,n,e){var content=e(529);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(18).default)("49e5f8fc",content,!0,{sourceMap:!1})},528:function(t,n,e){"use strict";e(520)},529:function(t,n,e){var o=e(17)(!1);o.push([t.i,'.article_list_wrap[data-v-3ea363e7]{display:flex;flex-wrap:wrap}.article_list_wrap .article_card[data-v-3ea363e7]{width:32%;margin-left:2%;background:#fff;-ms-box-shadow:1px 1px 4px 2px rgba(0,0,0,.1);box-shadow:1px 1px 4px 2px rgba(0,0,0,.1);border-left:8px solid orange;transition:.2s;margin-top:2.5%}.article_list_wrap .article_card[data-v-3ea363e7]:nth-child(3n+1){margin-left:0}.article_list_wrap .article_card[data-v-3ea363e7]:first-child,.article_list_wrap .article_card[data-v-3ea363e7]:nth-child(2),.article_list_wrap .article_card[data-v-3ea363e7]:nth-child(3){margin-top:0}.article_list_wrap .article_card[data-v-3ea363e7]:hover{border-color:gold}.article_list_wrap .article_card a[data-v-3ea363e7]{text-decoration:none;display:block;padding:6% 6% 6% calc(8px + 6%);height:100%}.article_list_wrap .article_card a .title_txt[data-v-3ea363e7]{font-size:16px;font-weight:700;margin:0;line-height:1.6}.article_list_wrap .article_card a .date_txt[data-v-3ea363e7]{text-align:left;margin-top:0;color:grey}.article_list_wrap .article_card a .category[data-v-3ea363e7]{font-size:12px;margin-bottom:0}.article_list_wrap .article_card a .tag[data-v-3ea363e7]{line-height:1.3}.article_list_wrap .article_card a .tag span[data-v-3ea363e7]{display:inline-block;position:relative;font-size:12px;margin-right:10px}.article_list_wrap .article_card a .tag span[data-v-3ea363e7]:before{content:"#"}@media screen and (max-width:767px){.article_list_wrap[data-v-3ea363e7]{display:block}.article_list_wrap .article_card[data-v-3ea363e7]{width:100%;margin-left:0;margin-top:0!important}.article_list_wrap .article_card[data-v-3ea363e7]:not(:last-child){margin-bottom:4%}.article_list_wrap .article_card a[data-v-3ea363e7]{padding:3% 3% 3% calc(8px + 3%)}}',""]),t.exports=o},530:function(t,n,e){"use strict";e.r(n);var o=e(102),r=(e(194),e(15),e(33),e(0)),c=e(518),l=e.n(c),d=r.default.extend({props:{articles:{type:Array,required:!0}},data:function(){return{category:Object(o.a)(l.a.category),tags:Object(o.a)(l.a.tags)}},methods:{getCatName:function(t){return this.category.find((function(n){return n.slug===t})).text},getTagName:function(t){var n=this,e=[];return t.forEach((function(t){e.push(n.tags.find((function(n){return n.slug===t})).text)})),e}}}),_=(e(528),e(8)),component=Object(_.a)(d,(function(){var t=this,n=t._self._c;t._self._setupProxy;return n("div",{staticClass:"article_list_wrap"},t._l(t.articles,(function(article){return n("div",{key:article.slug,staticClass:"article_card"},[n("NuxtLink",{staticClass:"inline-block",attrs:{to:{name:"article-slug",params:{slug:article.slug}}}},[n("p",{staticClass:"category"},[t._v(t._s(t.getCatName(article.category)))]),t._v(" "),n("p",{staticClass:"title_txt"},[t._v(t._s(article.title))]),t._v(" "),n("p",{staticClass:"date_txt"},[t._v("\n        "+t._s(t.$dayjs(article.createdAt).format("YYYY/MM/DD"))+"\n      ")]),t._v(" "),n("p",{staticClass:"tag"},t._l(t.getTagName(article.tag),(function(e){return n("span",{key:e},[t._v(t._s(e))])})),0)])],1)})),0)}),[],!1,null,"3ea363e7",null);n.default=component.exports},556:function(t,n,e){var map={"./0I9A160415080826gomi_TP_V.jpg":597,"./0adpDSC_2680.jpg":598,"./1129iiniku994_TP_V.jpg":599,"./150820262255_TP_V.jpg":600,"./1861577_m.jpg":601,"./1883152_m.jpg":602,"./20221117.png":331,"./20221213_img001.jpg":603,"./22085144.jpg":604,"./24304698_m.jpg":605,"./25337367_m.jpg":606,"./26235.jpg":607,"./457222.jpg":608,"./496_tamago-fried-rice_7077.jpg":609,"./9V9A5844_TP_V.jpg":610,"./IMG_9204.png":332,"./IMG_9204_2.png":333,"./IMG_9205.png":334,"./IMG_9206.png":335,"./IMG_9207.png":336,"./IMG_9208.png":337,"./IMG_9209.png":338,"./IMG_9210.png":339,"./IMG_9211.png":340,"./IMG_9212.png":341,"./IMG_9213.png":342,"./IMG_9214.png":343,"./IMG_9215.png":344,"./IMG_9216.png":345,"./IMG_9217.png":346,"./IMG_9218.png":347,"./IMG_9219.png":348,"./IMG_9221.png":349,"./IMG_9223.png":350,"./IMG_9224.png":351,"./IMG_9225.png":352,"./IMG_9226.png":353,"./IMG_9236.jpg":611,"./IMG_9237.jpg":612,"./IMG_9238.jpg":613,"./IMG_9240.jpg":614,"./IMG_9241.jpg":615,"./IMG_9242.jpg":616,"./IMG_9243.jpg":617,"./IMG_9247.jpg":618,"./IMG_9248.jpg":619,"./PPP_tamagotooyakodon_TP_V.jpg":620,"./adpDSC_1431.jpg":621,"./adpDSC_1439.jpg":622,"./adpDSC_7035.jpg":623,"./adpDSC_9591.jpg":624,"./adtDSC_2349.jpg":625,"./category_icon.png":316,"./chicken-gf3938dc7c_1280.jpg":626,"./f57l_2024.jpg":627,"./f60l_3734.jpg":628,"./f61l_4704.jpg":629,"./facebook.png":313,"./fd400083.jpg":630,"./g62l_5064.jpg":631,"./gahag-0014886017.jpg":632,"./gahag-0096725368.jpg":633,"./how_to_img001.png":199,"./how_to_img001_2.png":354,"./how_to_img002.png":200,"./how_to_img003.png":201,"./how_to_img004.png":202,"./how_to_img005.png":203,"./how_to_img006.png":204,"./how_to_img007.png":205,"./how_to_img008.png":206,"./how_to_img009.png":207,"./how_to_img010.png":208,"./image.jpg":634,"./item_icon.png":317,"./kaimonomemo.png":355,"./kaimonomemo_app_pc.jpg":635,"./kaimonomemo_app_sp.png":356,"./kud0007-003.jpg":636,"./line.png":314,"./logo.png":209,"./logo_ogp.jpg":637,"./logo_org.png":357,"./money-gb7b73add5_1280.jpg":638,"./mountain-6086083_1280.jpg":639,"./pexels-mart-production-7641233.jpg":640,"./pr00052.jpg":641,"./pr00115.jpg":642,"./pr00116.jpg":643,"./pr00653.jpg":644,"./profile.png":318,"./publicdomainq-0014829plebfj.jpg":645,"./publicdomainq-0024510rqqils.jpg":646,"./publicdomainq-0059295qpwrwm.jpg":647,"./publicdomainq-0060620hyhlrr.jpg":648,"./share_icon.png":319,"./sp_how_to_img001.png":210,"./sp_how_to_img002.png":211,"./sp_how_to_img003.png":212,"./sp_how_to_img004.png":213,"./sp_how_to_img005.png":214,"./sp_how_to_img006.png":215,"./sp_how_to_img007.png":216,"./sp_how_to_img008.png":217,"./sp_how_to_img009.png":218,"./sp_how_to_img010.png":219,"./start_msg.png":320,"./toilet-paper-g0faf76777_1280.jpg":649,"./twitter.png":315,"./vegetables-gba26674e8_1280.jpg":650,"./wash-g1f02f5f61_1280.jpg":651};function o(t){var n=r(t);return e(n)}function r(t){if(!e.o(map,t)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=r,t.exports=o,o.id=556},557:function(t,n,e){var content=e(653);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(18).default)("21307eae",content,!0,{sourceMap:!1})},597:function(t,n,e){t.exports=e.p+"img/b51c0d8.jpg"},598:function(t,n,e){t.exports=e.p+"img/f71ff71.jpg"},599:function(t,n,e){t.exports=e.p+"img/3d249c2.jpg"},600:function(t,n,e){t.exports=e.p+"img/f33be94.jpg"},601:function(t,n,e){t.exports=e.p+"img/70ace5a.jpg"},602:function(t,n,e){t.exports=e.p+"img/61aa220.jpg"},603:function(t,n,e){t.exports=e.p+"img/40f4f93.jpg"},604:function(t,n,e){t.exports=e.p+"img/1286d71.jpg"},605:function(t,n,e){t.exports=e.p+"img/df12e3e.jpg"},606:function(t,n,e){t.exports=e.p+"img/0ad4292.jpg"},607:function(t,n,e){t.exports=e.p+"img/c9b677c.jpg"},608:function(t,n,e){t.exports=e.p+"img/27b8a9f.jpg"},609:function(t,n,e){t.exports=e.p+"img/a57d5c3.jpg"},610:function(t,n,e){t.exports=e.p+"img/a318163.jpg"},611:function(t,n,e){t.exports=e.p+"img/6320cb8.jpg"},612:function(t,n,e){t.exports=e.p+"img/3fac29a.jpg"},613:function(t,n,e){t.exports=e.p+"img/85f2cb2.jpg"},614:function(t,n,e){t.exports=e.p+"img/4ac9730.jpg"},615:function(t,n,e){t.exports=e.p+"img/3fb9431.jpg"},616:function(t,n,e){t.exports=e.p+"img/f01af1b.jpg"},617:function(t,n,e){t.exports=e.p+"img/d334fb2.jpg"},618:function(t,n,e){t.exports=e.p+"img/343c55b.jpg"},619:function(t,n,e){t.exports=e.p+"img/904c6e7.jpg"},620:function(t,n,e){t.exports=e.p+"img/6072847.jpg"},621:function(t,n,e){t.exports=e.p+"img/0b4c9f6.jpg"},622:function(t,n,e){t.exports=e.p+"img/55b9806.jpg"},623:function(t,n,e){t.exports=e.p+"img/784fc71.jpg"},624:function(t,n,e){t.exports=e.p+"img/af625fd.jpg"},625:function(t,n,e){t.exports=e.p+"img/da67600.jpg"},626:function(t,n,e){t.exports=e.p+"img/adca699.jpg"},627:function(t,n,e){t.exports=e.p+"img/b53aef6.jpg"},628:function(t,n,e){t.exports=e.p+"img/b92e221.jpg"},629:function(t,n,e){t.exports=e.p+"img/86d8e5d.jpg"},630:function(t,n,e){t.exports=e.p+"img/58b1967.jpg"},631:function(t,n,e){t.exports=e.p+"img/93ddc6d.jpg"},632:function(t,n,e){t.exports=e.p+"img/339c778.jpg"},633:function(t,n,e){t.exports=e.p+"img/32b1889.jpg"},634:function(t,n,e){t.exports=e.p+"img/1b9875f.jpg"},635:function(t,n,e){t.exports=e.p+"img/e94f86d.jpg"},636:function(t,n,e){t.exports=e.p+"img/95fa0d9.jpg"},637:function(t,n,e){t.exports=e.p+"img/2a74706.jpg"},638:function(t,n,e){t.exports=e.p+"img/de91a2b.jpg"},639:function(t,n,e){t.exports=e.p+"img/6af31af.jpg"},640:function(t,n,e){t.exports=e.p+"img/0b63166.jpg"},641:function(t,n,e){t.exports=e.p+"img/2f5ac34.jpg"},642:function(t,n,e){t.exports=e.p+"img/bd6a6eb.jpg"},643:function(t,n,e){t.exports=e.p+"img/559cd53.jpg"},644:function(t,n,e){t.exports=e.p+"img/52a0aaf.jpg"},645:function(t,n,e){t.exports=e.p+"img/dc2d0f4.jpg"},646:function(t,n,e){t.exports=e.p+"img/3da4f05.jpg"},647:function(t,n,e){t.exports=e.p+"img/4b5a87d.jpg"},648:function(t,n,e){t.exports=e.p+"img/aa8c1f4.jpg"},649:function(t,n,e){t.exports=e.p+"img/cb32f66.jpg"},650:function(t,n,e){t.exports=e.p+"img/d8a56c1.jpg"},651:function(t,n,e){t.exports=e.p+"img/ada96d7.jpg"},652:function(t,n,e){"use strict";e(557)},653:function(t,n,e){var o=e(17)(!1);o.push([t.i,'.top-container h2[data-v-a1bd6064]{font-size:28px;padding-bottom:0;border:none;margin-bottom:.6em}.top-container h2 .el-icon-collection-tag[data-v-a1bd6064],.top-container h2 .el-icon-document[data-v-a1bd6064],.top-container h2 .el-icon-folder[data-v-a1bd6064],.top-container h2 .el-icon-mobile-phone[data-v-a1bd6064]{color:orange}.blogs-container[data-v-a1bd6064]{margin-bottom:5%}.blogs-container .btn_wrap[data-v-a1bd6064]{text-align:right}.blogs-container .btn_wrap .more_btn[data-v-a1bd6064]{margin-top:2%;display:inline-block;text-align:right;padding-right:28px;position:relative;font-size:13px;text-decoration:none}.blogs-container .btn_wrap .more_btn[data-v-a1bd6064]:after{content:"";border-right:1px solid #222;border-bottom:1px solid #222;width:18px;height:4px;position:absolute;top:50%;right:5%;margin:auto;transform:translateY(-50%) skew(45deg)}.app-container[data-v-a1bd6064]{margin-bottom:5%}.app-container ul[data-v-a1bd6064]{padding:0;display:flex;flex-wrap:wrap}.app-container ul li[data-v-a1bd6064]{list-style:none;width:49%;margin-left:2%}.app-container ul li a[data-v-a1bd6064]{display:block;width:100%;height:100%;font-size:18px;font-weight:700;background:#fff;-ms-box-shadow:1px 1px 4px 2px rgba(0,0,0,.1);box-shadow:1px 1px 4px 2px rgba(0,0,0,.1);border-left:8px solid orange;transition:.2s;text-decoration:none;padding:5% 5% 5% calc(8px + 5%)}.app-container ul li a[data-v-a1bd6064]:hover{border-color:gold}.app-container ul li a .card_wrap[data-v-a1bd6064]{display:flex}.app-container ul li a .card_wrap .img_content[data-v-a1bd6064],.app-container ul li a .card_wrap .txt_content[data-v-a1bd6064]{width:49%}.app-container ul li a .card_wrap .txt_content[data-v-a1bd6064]{font-size:12px}.app-container ul li a .card_wrap .txt_content .title[data-v-a1bd6064]{font-size:18px;font-weight:700;margin:0 0 .4em}@media screen and (max-width:767px){.app-container ul li a .card_wrap .txt_content .title[data-v-a1bd6064]{font-size:16px;font-weight:700}}.app-container ul li a .card_wrap .img_content[data-v-a1bd6064]{margin-left:2%;border:1px solid #ccc}.app-container ul li a .card_wrap .img_content img[data-v-a1bd6064]{max-width:100%;width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.app-container ul li[data-v-a1bd6064]:nth-child(odd){margin-left:0}.cat-container[data-v-a1bd6064]{margin-bottom:5%}.cat-container ul[data-v-a1bd6064]{padding:0;display:flex;flex-wrap:wrap}.cat-container ul li[data-v-a1bd6064]{list-style:none;width:32%;margin-left:2%}.cat-container ul li a[data-v-a1bd6064]{display:block;width:100%;height:100%;font-size:18px;font-weight:700;background:#fff;-ms-box-shadow:1px 1px 4px 2px rgba(0,0,0,.1);box-shadow:1px 1px 4px 2px rgba(0,0,0,.1);border-left:8px solid orange;transition:.2s;text-decoration:none;padding:6% 6% 6% calc(8px + 6%)}.cat-container ul li a[data-v-a1bd6064]:hover{border-color:gold}@media screen and (max-width:767px){.cat-container ul li a[data-v-a1bd6064]{font-size:16px;font-weight:600}}.cat-container ul li[data-v-a1bd6064]:nth-child(3n+1){margin-left:0}.tag-container ul[data-v-a1bd6064]{display:flex;flex-wrap:wrap;padding:0}.tag-container ul li[data-v-a1bd6064]{list-style:none;display:inline-block;margin-right:30px;font-size:18px}.tag-container ul li a[data-v-a1bd6064]{text-decoration:none}.tag-container ul li a[data-v-a1bd6064]:before{content:"#"}.tag-container ul li a[data-v-a1bd6064]:hover{text-decoration:underline}@media screen and (max-width:767px){.top-container h2[data-v-a1bd6064]{font-size:20px!important;padding-bottom:0;border:none}.blogs-container[data-v-a1bd6064]{margin-bottom:10%}.blogs-container .btn_wrap .more_btn[data-v-a1bd6064]{margin-top:4%}.app-container[data-v-a1bd6064]{margin-bottom:10%}.app-container ul[data-v-a1bd6064]{display:block}.app-container ul li[data-v-a1bd6064]{width:100%;margin-left:0!important}.app-container ul li[data-v-a1bd6064]:not(:last-child){margin-bottom:4%}.app-container ul li a[data-v-a1bd6064]{padding:3% 3% 3% calc(8px + 3%)}.app-container ul li a .card_wrap[data-v-a1bd6064]{display:block!important}.app-container ul li a .card_wrap .img_content[data-v-a1bd6064],.app-container ul li a .card_wrap .txt_content[data-v-a1bd6064]{width:100%!important;margin-left:0!important}.app-container ul li a .card_wrap .sp_img[data-v-a1bd6064]{position:relative;height:0;padding-top:73%;border:1px solid #ccc;margin-bottom:5%}.app-container ul li a .card_wrap .sp_img img[data-v-a1bd6064]{position:absolute;top:0;left:0;right:0;bottom:auto;margin:auto;-o-object-fit:cover;object-fit:cover;width:100%;height:100%}.app-container ul li a .card_wrap .sp_img+p[data-v-a1bd6064]{font-weight:400}.cat-container[data-v-a1bd6064]{margin-bottom:10%}.cat-container ul[data-v-a1bd6064]{display:block}.cat-container ul li[data-v-a1bd6064]{width:100%;margin-left:0!important}.cat-container ul li[data-v-a1bd6064]:not(:last-child){margin-bottom:4%}.cat-container ul li a[data-v-a1bd6064]{padding:3% 3% 3% calc(8px + 3%)}.tag-container ul li[data-v-a1bd6064]{margin-right:15px;font-size:15px}}',""]),t.exports=o},678:function(t,n,e){"use strict";e.r(n);e(42),e(35),e(61);var o=e(12),r=e(102),c=(e(59),e(0)),l=e(518),d=e.n(l),_=c.default.extend({layout:"default",name:"IndexPage",data:function(){return{category:Object(r.a)(d.a.category),tags:Object(r.a)(d.a.tags),apps:Object(r.a)(d.a.apps)}},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function n(){var e,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.$content,n.next=3,e("article").sortBy("createdAt","desc").limit(9).fetch();case 3:return o=n.sent,n.abrupt("return",{articles:o});case 5:case"end":return n.stop()}}),n)})))()}}),m=(e(652),e(8)),component=Object(m.a)(_,(function(){var t=this,n=t._self._c;t._self._setupProxy;return n("div",{staticClass:"container top-container"},[t._m(0),t._v(" "),n("div",{staticClass:"app-container"},[0!=t.apps.length?n("ul",t._l(t.apps,(function(o){return n("li",{key:o.slug},[n("nuxt-link",{attrs:{to:"/".concat(o.slug,"/")}},[n("div",{staticClass:"card_wrap"},[n("div",{staticClass:"txt_content"},[n("p",{staticClass:"title"},[t._v(t._s(o.name))]),t._v(" "),n("div",{staticClass:"sp_img sp-only"},[n("img",{attrs:{src:e(556)("./".concat(o.img_sp)),alt:o.name}})]),t._v(" "),n("p",[t._v("\n                "+t._s(o.description)+"\n              ")])]),t._v(" "),n("div",{staticClass:"img_content pc-only"},[n("img",{attrs:{src:e(556)("./".concat(o.img_pc)),alt:o.name}})])])])],1)})),0):t._e()]),t._v(" "),t._m(1),t._v(" "),n("div",{staticClass:"blogs-container"},[0!=t.articles?n("article-list",{attrs:{articles:t.articles}}):n("p",[t._v("記事がありません。")]),t._v(" "),n("div",{staticClass:"btn_wrap"},[n("nuxt-link",{staticClass:"more_btn",attrs:{to:"/new_post"}},[t._v("もっと見る")])],1)],1),t._v(" "),t._m(2),t._v(" "),n("div",{staticClass:"cat-container"},[0!=t.category?n("ul",t._l(t.category,(function(e){return n("li",{key:e.slug},[n("nuxt-link",{attrs:{to:"/category/".concat(e.slug)}},[t._v("\n          "+t._s(e.text)+"\n        ")])],1)})),0):n("p",[t._v("記事がありません。")])]),t._v(" "),t._m(3),t._v(" "),n("div",{staticClass:"tag-container"},[0!=t.tags?n("ul",t._l(t.tags,(function(e){return n("li",{key:e.slug},[n("nuxt-link",{attrs:{to:"/tag/".concat(e.slug)}},[t._v("\n          "+t._s(e.text)+"\n        ")])],1)})),0):n("p",[t._v("記事がありません。")])])])}),[function(){var t=this,n=t._self._c;t._self._setupProxy;return n("h2",[n("i",{staticClass:"el-icon-mobile-phone"}),t._v(" アプリ")])},function(){var t=this,n=t._self._c;t._self._setupProxy;return n("h2",[n("i",{staticClass:"el-icon-document"}),t._v(" 新着記事")])},function(){var t=this,n=t._self._c;t._self._setupProxy;return n("h2",[n("i",{staticClass:"el-icon-folder"}),t._v(" カテゴリー")])},function(){var t=this,n=t._self._c;t._self._setupProxy;return n("h2",[n("i",{staticClass:"el-icon-collection-tag"}),t._v(" タグ")])}],!1,null,"a1bd6064",null);n.default=component.exports;installComponents(component,{ArticleList:e(530).default})}}]);