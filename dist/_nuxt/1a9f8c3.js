(window.webpackJsonp=window.webpackJsonp||[]).push([[16,4],{523:function(t,e){t.exports={category:[{text:"便利ツール",slug:"tool"},{text:"節約",slug:"saving"},{text:"コラム",slug:"column"},{text:"買い物レポート",slug:"report"}],tags:[{text:"モバイルアプリ",slug:"mobile-app"},{text:"Webアプリ",slug:"web-app"},{text:"自作アプリ",slug:"self-made-app"},{text:"買い物リスト",slug:"kaimono-list"},{text:"便利",slug:"convenience"},{text:"レシピ",slug:"recipe"},{text:"献立",slug:"menu"},{text:"安い",slug:"cheap"},{text:"美味しい",slug:"delicious"},{text:"コスパ",slug:"cospa"},{text:"食材",slug:"foodstuff"},{text:"海鮮",slug:"seafood"},{text:"食品",slug:"food"},{text:"非常食",slug:"emergency-food"},{text:"賞味期限",slug:"freshness-date"},{text:"防災",slug:"disaster-prevention"},{text:"スーパーマーケット",slug:"supermarket"},{text:"支払い",slug:"payment"},{text:"ポイント",slug:"pont"},{text:"クレジットカード",slug:"credit-card"},{text:"電子マネー",slug:"e-money"},{text:"QRコード決済",slug:"qr-code-clearing"},{text:"ヤオコー",slug:"yaoko"},{text:"一人暮らし",slug:"living-alone"},{text:"角上魚類",slug:"kakujoe"},{text:"日用品",slug:"commodity"},{text:"学生",slug:"student"},{text:"新鮮",slug:"fresh"},{text:"引越し",slug:"home-moving"},{text:"お惣菜",slug:"souzai"},{text:"ふるさと納税",slug:"hurusato-nouzei"},{text:"欲しいものリスト",slug:"hosimono-list"},{text:"コストコ",slug:"costco"},{text:"ダイエット",slug:"diet"},{text:"筋トレ",slug:"muscle-training"},{text:"ロピア",slug:"lopia"},{text:"チラシ",slug:"flyer"},{text:"買い物アプリ",slug:"shopping_app"}],apps:[{name:"買い物メモ",slug:"kaimonomemo",description:"買い物の際に買う商品をメモしておけるアプリです。商品をカテゴリー分けしたり、メモ内容を他の人にシェアしたりすることができます。",img_pc:"kaimonomemo_app_pc.jpg",img_sp:"kaimonomemo_app_sp.png"}]}},525:function(t,e,n){var content=n(534);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("49e5f8fc",content,!0,{sourceMap:!1})},533:function(t,e,n){"use strict";n(525)},534:function(t,e,n){var o=n(17)(!1);o.push([t.i,'.article_list_wrap[data-v-3ea363e7]{display:flex;flex-wrap:wrap}.article_list_wrap .article_card[data-v-3ea363e7]{width:32%;margin-left:2%;background:#fff;-ms-box-shadow:1px 1px 4px 2px rgba(0,0,0,.1);box-shadow:1px 1px 4px 2px rgba(0,0,0,.1);border-left:8px solid orange;transition:.2s;margin-top:2.5%}.article_list_wrap .article_card[data-v-3ea363e7]:nth-child(3n+1){margin-left:0}.article_list_wrap .article_card[data-v-3ea363e7]:first-child,.article_list_wrap .article_card[data-v-3ea363e7]:nth-child(2),.article_list_wrap .article_card[data-v-3ea363e7]:nth-child(3){margin-top:0}.article_list_wrap .article_card[data-v-3ea363e7]:hover{border-color:gold}.article_list_wrap .article_card a[data-v-3ea363e7]{text-decoration:none;display:block;padding:6% 6% 6% calc(8px + 6%);height:100%}.article_list_wrap .article_card a .title_txt[data-v-3ea363e7]{font-size:16px;font-weight:700;margin:0;line-height:1.6}.article_list_wrap .article_card a .date_txt[data-v-3ea363e7]{text-align:left;margin-top:0;color:grey}.article_list_wrap .article_card a .category[data-v-3ea363e7]{font-size:12px;margin-bottom:0}.article_list_wrap .article_card a .tag[data-v-3ea363e7]{line-height:1.3}.article_list_wrap .article_card a .tag span[data-v-3ea363e7]{display:inline-block;position:relative;font-size:12px;margin-right:10px}.article_list_wrap .article_card a .tag span[data-v-3ea363e7]:before{content:"#"}@media screen and (max-width:767px){.article_list_wrap[data-v-3ea363e7]{display:block}.article_list_wrap .article_card[data-v-3ea363e7]{width:100%;margin-left:0;margin-top:0!important}.article_list_wrap .article_card[data-v-3ea363e7]:not(:last-child){margin-bottom:4%}.article_list_wrap .article_card a[data-v-3ea363e7]{padding:3% 3% 3% calc(8px + 3%)}}',""]),t.exports=o},535:function(t,e,n){"use strict";n.r(e);var o=n(102),r=(n(194),n(15),n(33),n(0)),c=n(523),l=n.n(c),d=r.default.extend({props:{articles:{type:Array,required:!0}},data:function(){return{category:Object(o.a)(l.a.category),tags:Object(o.a)(l.a.tags)}},methods:{getCatName:function(t){return this.category.find((function(e){return e.slug===t})).text},getTagName:function(t){var e=this,n=[];return t.forEach((function(t){n.push(e.tags.find((function(e){return e.slug===t})).text)})),n}}}),_=(n(533),n(8)),component=Object(_.a)(d,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"article_list_wrap"},t._l(t.articles,(function(article){return e("div",{key:article.slug,staticClass:"article_card"},[e("NuxtLink",{staticClass:"inline-block",attrs:{to:{name:"article-slug",params:{slug:article.slug}}}},[e("p",{staticClass:"category"},[t._v(t._s(t.getCatName(article.category)))]),t._v(" "),e("p",{staticClass:"title_txt"},[t._v(t._s(article.title))]),t._v(" "),e("p",{staticClass:"date_txt"},[t._v("\n        "+t._s(t.$dayjs(article.createdAt).format("YYYY/MM/DD"))+"\n      ")]),t._v(" "),e("p",{staticClass:"tag"},t._l(t.getTagName(article.tag),(function(n){return e("span",{key:n},[t._v(t._s(n))])})),0)])],1)})),0)}),[],!1,null,"3ea363e7",null);e.default=component.exports},561:function(t,e,n){var map={"./0I9A160415080826gomi_TP_V.jpg":604,"./0adpDSC_2680.jpg":605,"./1129iiniku994_TP_V.jpg":606,"./150820262255_TP_V.jpg":607,"./1861577_m.jpg":608,"./1883152_m.jpg":609,"./20221117.png":331,"./20221213_img001.jpg":610,"./22085144.jpg":611,"./230116_img001.jpg":612,"./230116_img002.jpg":613,"./230116_img003.jpg":614,"./230116_img004.jpg":615,"./230116_img005.jpg":616,"./230116_img006.jpg":617,"./230116_img007.jpg":618,"./24304698_m.jpg":619,"./24380930_m.jpg":620,"./25337367_m.jpg":621,"./26235.jpg":622,"./457222.jpg":623,"./496_tamago-fried-rice_7077.jpg":624,"./5080.jpg":625,"./5150423_m.jpg":626,"./9V9A5844_TP_V.jpg":627,"./IMG_9204.png":332,"./IMG_9204_2.png":333,"./IMG_9205.png":334,"./IMG_9206.png":335,"./IMG_9207.png":336,"./IMG_9208.png":337,"./IMG_9209.png":338,"./IMG_9210.png":339,"./IMG_9211.png":340,"./IMG_9212.png":341,"./IMG_9213.png":342,"./IMG_9214.png":343,"./IMG_9215.png":344,"./IMG_9216.png":345,"./IMG_9217.png":346,"./IMG_9218.png":347,"./IMG_9219.png":348,"./IMG_9221.png":349,"./IMG_9223.png":350,"./IMG_9224.png":351,"./IMG_9225.png":352,"./IMG_9226.png":353,"./IMG_9236.jpg":628,"./IMG_9237.jpg":629,"./IMG_9238.jpg":630,"./IMG_9240.jpg":631,"./IMG_9241.jpg":632,"./IMG_9242.jpg":633,"./IMG_9243.jpg":634,"./IMG_9247.jpg":635,"./IMG_9248.jpg":636,"./IMG_9254.png":354,"./IMG_9255.jpg":637,"./IMG_9339.jpg":638,"./IMG_9345.PNG":639,"./IMG_9346.PNG":640,"./IMG_9347.PNG":641,"./IMG_9348.PNG":642,"./IMG_9349.PNG":643,"./IMG_9350.PNG":644,"./IMG_9351.PNG":645,"./IMG_9352.PNG":646,"./IMG_9354.PNG":647,"./IMG_9355.png":355,"./IMG_9356.png":356,"./IMG_9357.png":357,"./IMG_9358.png":358,"./IMG_9360.JPG":648,"./IMG_9403.jpg":649,"./IMG_9404.jpg":650,"./IMG_9405.jpg":651,"./IMG_9406.jpg":652,"./IMG_9407.jpg":653,"./IMG_9415.jpg":654,"./IMG_9416.jpg":655,"./IMG_9417.jpg":656,"./IMG_9418.jpg":657,"./IMG_9419.jpg":658,"./IMG_9420.jpg":659,"./IMG_9423.jpg":660,"./IMG_9426.jpg":661,"./PPP_tamagotooyakodon_TP_V.jpg":662,"./adpDSC_1431.jpg":663,"./adpDSC_1439.jpg":664,"./adpDSC_7035.jpg":665,"./adpDSC_9591.jpg":666,"./adtDSC_2349.jpg":667,"./bf9be8d31de1c2b583e0795984a6cdea.jpg":668,"./category_icon.png":317,"./chicken-gf3938dc7c_1280.jpg":669,"./f57l_2024.jpg":670,"./f60l_3734.jpg":671,"./f61l_4704.jpg":672,"./facebook.png":314,"./fd400083.jpg":673,"./g62l_5064.jpg":674,"./gahag-0014886017.jpg":675,"./gahag-0096725368.jpg":676,"./how_to_img001.png":199,"./how_to_img001_2.png":359,"./how_to_img002.png":200,"./how_to_img003.png":201,"./how_to_img004.png":202,"./how_to_img005.png":203,"./how_to_img006.png":204,"./how_to_img007.png":205,"./how_to_img008.png":206,"./how_to_img009.png":207,"./how_to_img010.png":208,"./hurusatonouzei.jpg":677,"./image.jpg":678,"./item_icon.png":318,"./kaimonomemo.png":360,"./kaimonomemo_app_pc.jpg":679,"./kaimonomemo_app_sp.png":361,"./kud0007-003.jpg":680,"./line.png":315,"./logo.png":209,"./logo_ogp.jpg":681,"./logo_org.png":362,"./main_image.jpg":562,"./money-gb7b73add5_1280.jpg":682,"./mountain-6086083_1280.jpg":683,"./numazuport032_w.jpg":684,"./pexels-mart-production-7641233.jpg":685,"./pr00052.jpg":686,"./pr00115.jpg":687,"./pr00116.jpg":688,"./pr00653.jpg":689,"./profile.png":316,"./publicdomainq-0007740jtdovh.jpg":690,"./publicdomainq-0014829plebfj.jpg":691,"./publicdomainq-0024510rqqils.jpg":692,"./publicdomainq-0059295qpwrwm.jpg":693,"./publicdomainq-0060620hyhlrr.jpg":694,"./share_icon.png":319,"./shimadzu_kibazou_small.jpg":695,"./sp_how_to_img001.png":210,"./sp_how_to_img002.png":211,"./sp_how_to_img003.png":212,"./sp_how_to_img004.png":213,"./sp_how_to_img005.png":214,"./sp_how_to_img006.png":215,"./sp_how_to_img007.png":216,"./sp_how_to_img008.png":217,"./sp_how_to_img009.png":218,"./sp_how_to_img010.png":219,"./sp_main_image.jpg":563,"./standing-with-jump-rope-in-the-hands-gorgeous-blonde-woman-in-the-gym-at-her-weekend-time.jpg":696,"./start_msg.png":320,"./toilet-paper-g0faf76777_1280.jpg":697,"./twitter.png":313,"./vegetables-gba26674e8_1280.jpg":698,"./wash-g1f02f5f61_1280.jpg":699};function o(t){var e=r(t);return n(e)}function r(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=r,t.exports=o,o.id=561},562:function(t,e,n){t.exports=n.p+"img/028614f.jpg"},563:function(t,e,n){t.exports=n.p+"img/0c64d8a.jpg"},564:function(t,e,n){var content=n(701);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("42e12382",content,!0,{sourceMap:!1})},604:function(t,e,n){t.exports=n.p+"img/b51c0d8.jpg"},605:function(t,e,n){t.exports=n.p+"img/f71ff71.jpg"},606:function(t,e,n){t.exports=n.p+"img/3d249c2.jpg"},607:function(t,e,n){t.exports=n.p+"img/f33be94.jpg"},608:function(t,e,n){t.exports=n.p+"img/70ace5a.jpg"},609:function(t,e,n){t.exports=n.p+"img/61aa220.jpg"},610:function(t,e,n){t.exports=n.p+"img/40f4f93.jpg"},611:function(t,e,n){t.exports=n.p+"img/1286d71.jpg"},612:function(t,e,n){t.exports=n.p+"img/c25205d.jpg"},613:function(t,e,n){t.exports=n.p+"img/0c1b8f4.jpg"},614:function(t,e,n){t.exports=n.p+"img/435c62d.jpg"},615:function(t,e,n){t.exports=n.p+"img/d38d15b.jpg"},616:function(t,e,n){t.exports=n.p+"img/4c45e17.jpg"},617:function(t,e,n){t.exports=n.p+"img/536b3b5.jpg"},618:function(t,e,n){t.exports=n.p+"img/65b18f8.jpg"},619:function(t,e,n){t.exports=n.p+"img/df12e3e.jpg"},620:function(t,e,n){t.exports=n.p+"img/43e2d63.jpg"},621:function(t,e,n){t.exports=n.p+"img/0ad4292.jpg"},622:function(t,e,n){t.exports=n.p+"img/c9b677c.jpg"},623:function(t,e,n){t.exports=n.p+"img/27b8a9f.jpg"},624:function(t,e,n){t.exports=n.p+"img/a57d5c3.jpg"},625:function(t,e,n){t.exports=n.p+"img/4940725.jpg"},626:function(t,e,n){t.exports=n.p+"img/bd5fd3f.jpg"},627:function(t,e,n){t.exports=n.p+"img/a318163.jpg"},628:function(t,e,n){t.exports=n.p+"img/6320cb8.jpg"},629:function(t,e,n){t.exports=n.p+"img/3fac29a.jpg"},630:function(t,e,n){t.exports=n.p+"img/85f2cb2.jpg"},631:function(t,e,n){t.exports=n.p+"img/4ac9730.jpg"},632:function(t,e,n){t.exports=n.p+"img/3fb9431.jpg"},633:function(t,e,n){t.exports=n.p+"img/f01af1b.jpg"},634:function(t,e,n){t.exports=n.p+"img/d334fb2.jpg"},635:function(t,e,n){t.exports=n.p+"img/343c55b.jpg"},636:function(t,e,n){t.exports=n.p+"img/904c6e7.jpg"},637:function(t,e,n){t.exports=n.p+"img/8ec2b37.jpg"},638:function(t,e,n){t.exports=n.p+"img/ef80e38.jpg"},639:function(t,e,n){t.exports=n.p+"img/e2e0b48.PNG"},640:function(t,e,n){t.exports=n.p+"img/9f99096.PNG"},641:function(t,e,n){t.exports=n.p+"img/8a7c713.PNG"},642:function(t,e,n){t.exports=n.p+"img/f7b90f2.PNG"},643:function(t,e,n){t.exports=n.p+"img/e669eb9.PNG"},644:function(t,e,n){t.exports=n.p+"img/143bb09.PNG"},645:function(t,e,n){t.exports=n.p+"img/20f6dab.PNG"},646:function(t,e,n){t.exports=n.p+"img/0762ff7.PNG"},647:function(t,e,n){t.exports=n.p+"img/f098547.PNG"},648:function(t,e,n){t.exports=n.p+"img/d09e956.JPG"},649:function(t,e,n){t.exports=n.p+"img/7e6b4f4.jpg"},650:function(t,e,n){t.exports=n.p+"img/b33150e.jpg"},651:function(t,e,n){t.exports=n.p+"img/8404757.jpg"},652:function(t,e,n){t.exports=n.p+"img/f402607.jpg"},653:function(t,e,n){t.exports=n.p+"img/8be3264.jpg"},654:function(t,e,n){t.exports=n.p+"img/01fdbcd.jpg"},655:function(t,e,n){t.exports=n.p+"img/b588156.jpg"},656:function(t,e,n){t.exports=n.p+"img/ff3714f.jpg"},657:function(t,e,n){t.exports=n.p+"img/e80aad0.jpg"},658:function(t,e,n){t.exports=n.p+"img/b5f1841.jpg"},659:function(t,e,n){t.exports=n.p+"img/c39a3f6.jpg"},660:function(t,e,n){t.exports=n.p+"img/c3452a4.jpg"},661:function(t,e,n){t.exports=n.p+"img/9a194b4.jpg"},662:function(t,e,n){t.exports=n.p+"img/6072847.jpg"},663:function(t,e,n){t.exports=n.p+"img/0b4c9f6.jpg"},664:function(t,e,n){t.exports=n.p+"img/55b9806.jpg"},665:function(t,e,n){t.exports=n.p+"img/784fc71.jpg"},666:function(t,e,n){t.exports=n.p+"img/af625fd.jpg"},667:function(t,e,n){t.exports=n.p+"img/da67600.jpg"},668:function(t,e,n){t.exports=n.p+"img/e1c6cb9.jpg"},669:function(t,e,n){t.exports=n.p+"img/adca699.jpg"},670:function(t,e,n){t.exports=n.p+"img/b53aef6.jpg"},671:function(t,e,n){t.exports=n.p+"img/b92e221.jpg"},672:function(t,e,n){t.exports=n.p+"img/86d8e5d.jpg"},673:function(t,e,n){t.exports=n.p+"img/58b1967.jpg"},674:function(t,e,n){t.exports=n.p+"img/93ddc6d.jpg"},675:function(t,e,n){t.exports=n.p+"img/339c778.jpg"},676:function(t,e,n){t.exports=n.p+"img/32b1889.jpg"},677:function(t,e,n){t.exports=n.p+"img/3c04726.jpg"},678:function(t,e,n){t.exports=n.p+"img/1b9875f.jpg"},679:function(t,e,n){t.exports=n.p+"img/e94f86d.jpg"},680:function(t,e,n){t.exports=n.p+"img/95fa0d9.jpg"},681:function(t,e,n){t.exports=n.p+"img/2a74706.jpg"},682:function(t,e,n){t.exports=n.p+"img/de91a2b.jpg"},683:function(t,e,n){t.exports=n.p+"img/6af31af.jpg"},684:function(t,e,n){t.exports=n.p+"img/20956b6.jpg"},685:function(t,e,n){t.exports=n.p+"img/0b63166.jpg"},686:function(t,e,n){t.exports=n.p+"img/2f5ac34.jpg"},687:function(t,e,n){t.exports=n.p+"img/bd6a6eb.jpg"},688:function(t,e,n){t.exports=n.p+"img/559cd53.jpg"},689:function(t,e,n){t.exports=n.p+"img/52a0aaf.jpg"},690:function(t,e,n){t.exports=n.p+"img/11a1a46.jpg"},691:function(t,e,n){t.exports=n.p+"img/dc2d0f4.jpg"},692:function(t,e,n){t.exports=n.p+"img/3da4f05.jpg"},693:function(t,e,n){t.exports=n.p+"img/4b5a87d.jpg"},694:function(t,e,n){t.exports=n.p+"img/aa8c1f4.jpg"},695:function(t,e,n){t.exports=n.p+"img/cf3ed71.jpg"},696:function(t,e,n){t.exports=n.p+"img/8cdadca.jpg"},697:function(t,e,n){t.exports=n.p+"img/cb32f66.jpg"},698:function(t,e,n){t.exports=n.p+"img/d8a56c1.jpg"},699:function(t,e,n){t.exports=n.p+"img/ada96d7.jpg"},700:function(t,e,n){"use strict";n(564)},701:function(t,e,n){var o=n(17)(!1);o.push([t.i,'.main_visual[data-v-18ea6d1c]{position:relative;margin-bottom:5%}.main_visual figure[data-v-18ea6d1c]{margin:0}.main_visual figure img[data-v-18ea6d1c]{max-width:100%}.main_visual h1[data-v-18ea6d1c]{font-size:18px;font-weight:700;color:#e58b00;text-align:center;position:absolute;left:0;right:0;bottom:20%;margin:auto}@media screen and (max-width:815px){.main_visual h1[data-v-18ea6d1c]{font-size:18px}}@media screen and (max-width:767px){.main_visual[data-v-18ea6d1c]{margin-bottom:10%}.main_visual h1[data-v-18ea6d1c]{bottom:34%}}@media screen and (max-width:540px){.main_visual h1[data-v-18ea6d1c]{font-size:14px}}.top-container h2[data-v-18ea6d1c]{font-size:28px;padding-bottom:0;border:none;margin-bottom:.6em}.top-container h2 .el-icon-collection-tag[data-v-18ea6d1c],.top-container h2 .el-icon-document[data-v-18ea6d1c],.top-container h2 .el-icon-folder[data-v-18ea6d1c],.top-container h2 .el-icon-mobile-phone[data-v-18ea6d1c]{color:orange}.blogs-container[data-v-18ea6d1c]{margin-bottom:5%}.blogs-container .btn_wrap[data-v-18ea6d1c]{text-align:right}.blogs-container .btn_wrap .more_btn[data-v-18ea6d1c]{margin-top:2%;display:inline-block;text-align:right;padding-right:28px;position:relative;font-size:13px;text-decoration:none}.blogs-container .btn_wrap .more_btn[data-v-18ea6d1c]:after{content:"";border-right:1px solid #222;border-bottom:1px solid #222;width:18px;height:4px;position:absolute;top:50%;right:5%;margin:auto;transform:translateY(-50%) skew(45deg)}.app-container[data-v-18ea6d1c]{margin-bottom:5%}.app-container ul[data-v-18ea6d1c]{padding:0;display:flex;flex-wrap:wrap}.app-container ul li[data-v-18ea6d1c]{list-style:none;width:49%;margin-left:2%}.app-container ul li a[data-v-18ea6d1c]{display:block;width:100%;height:100%;font-size:18px;font-weight:700;background:#fff;-ms-box-shadow:1px 1px 4px 2px rgba(0,0,0,.1);box-shadow:1px 1px 4px 2px rgba(0,0,0,.1);border-left:8px solid orange;transition:.2s;text-decoration:none;padding:5% 5% 5% calc(8px + 5%)}.app-container ul li a[data-v-18ea6d1c]:hover{border-color:gold}.app-container ul li a .card_wrap[data-v-18ea6d1c]{display:flex}.app-container ul li a .card_wrap .img_content[data-v-18ea6d1c],.app-container ul li a .card_wrap .txt_content[data-v-18ea6d1c]{width:49%}.app-container ul li a .card_wrap .txt_content[data-v-18ea6d1c]{font-size:12px}.app-container ul li a .card_wrap .txt_content .title[data-v-18ea6d1c]{font-size:18px;font-weight:700;margin:0 0 .4em}@media screen and (max-width:767px){.app-container ul li a .card_wrap .txt_content .title[data-v-18ea6d1c]{font-size:16px;font-weight:700}}.app-container ul li a .card_wrap .img_content[data-v-18ea6d1c]{margin-left:2%;border:1px solid #ccc}.app-container ul li a .card_wrap .img_content img[data-v-18ea6d1c]{max-width:100%;width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.app-container ul li[data-v-18ea6d1c]:nth-child(odd){margin-left:0}.cat-container[data-v-18ea6d1c]{margin-bottom:5%}.cat-container ul[data-v-18ea6d1c]{padding:0;display:flex;flex-wrap:wrap}.cat-container ul li[data-v-18ea6d1c]{list-style:none;width:32%;margin-left:2%;margin-top:2%}.cat-container ul li[data-v-18ea6d1c]:first-child,.cat-container ul li[data-v-18ea6d1c]:nth-child(2),.cat-container ul li[data-v-18ea6d1c]:nth-child(3){margin-top:0}.cat-container ul li a[data-v-18ea6d1c]{display:block;width:100%;height:100%;font-size:18px;font-weight:700;background:#fff;-ms-box-shadow:1px 1px 4px 2px rgba(0,0,0,.1);box-shadow:1px 1px 4px 2px rgba(0,0,0,.1);border-left:8px solid orange;transition:.2s;text-decoration:none;padding:6% 6% 6% calc(8px + 6%)}.cat-container ul li a[data-v-18ea6d1c]:hover{border-color:gold}@media screen and (max-width:767px){.cat-container ul li a[data-v-18ea6d1c]{font-size:16px;font-weight:600}}.cat-container ul li[data-v-18ea6d1c]:nth-child(3n+1){margin-left:0}.tag-container[data-v-18ea6d1c]{margin-bottom:10%}.tag-container ul[data-v-18ea6d1c]{display:flex;flex-wrap:wrap;padding:0}.tag-container ul li[data-v-18ea6d1c]{list-style:none;display:inline-block;margin-right:30px;font-size:18px}.tag-container ul li a[data-v-18ea6d1c]{text-decoration:none}.tag-container ul li a[data-v-18ea6d1c]:before{content:"#"}.tag-container ul li a[data-v-18ea6d1c]:hover{text-decoration:underline}.top_profile[data-v-18ea6d1c]{display:flex;align-items:center}.top_profile .img_content[data-v-18ea6d1c]{width:32%}.top_profile .img_content figure[data-v-18ea6d1c]{position:relative;margin:0;height:0;padding-top:100%;overflow:hidden;border:1px solid #707070;border-radius:50%}.top_profile .img_content figure img[data-v-18ea6d1c]{max-width:100%;position:absolute;top:0;left:0;right:0;bottom:0;margin:auto;width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.top_profile .txt_content[data-v-18ea6d1c]{width:64%;margin-left:4%}.top_profile .txt_content .name[data-v-18ea6d1c]{font-size:24px;font-weight:700}.top_profile .txt_content .btn_wrap[data-v-18ea6d1c]{text-align:right}.top_profile .txt_content .btn_wrap .more_btn[data-v-18ea6d1c]{margin-top:2%;display:inline-block;text-align:right;padding-right:28px;position:relative;font-size:13px;text-decoration:none}.top_profile .txt_content .btn_wrap .more_btn[data-v-18ea6d1c]:after{content:"";border-right:1px solid #222;border-bottom:1px solid #222;width:18px;height:4px;position:absolute;top:50%;right:5%;margin:auto;transform:translateY(-50%) skew(45deg)}@media screen and (max-width:767px){.top-container h2[data-v-18ea6d1c]{font-size:20px!important;padding-bottom:0;border:none}.blogs-container[data-v-18ea6d1c]{margin-bottom:10%}.blogs-container .btn_wrap .more_btn[data-v-18ea6d1c]{margin-top:4%}.app-container[data-v-18ea6d1c]{margin-bottom:10%}.app-container ul[data-v-18ea6d1c]{display:block}.app-container ul li[data-v-18ea6d1c]{width:100%;margin-left:0!important}.app-container ul li[data-v-18ea6d1c]:not(:last-child){margin-bottom:4%}.app-container ul li a[data-v-18ea6d1c]{padding:3% 3% 3% calc(8px + 3%)}.app-container ul li a .card_wrap[data-v-18ea6d1c]{display:block!important}.app-container ul li a .card_wrap .img_content[data-v-18ea6d1c],.app-container ul li a .card_wrap .txt_content[data-v-18ea6d1c]{width:100%!important;margin-left:0!important}.app-container ul li a .card_wrap .sp_img[data-v-18ea6d1c]{position:relative;height:0;padding-top:73%;border:1px solid #ccc;margin-bottom:5%}.app-container ul li a .card_wrap .sp_img img[data-v-18ea6d1c]{position:absolute;top:0;left:0;right:0;bottom:auto;margin:auto;-o-object-fit:cover;object-fit:cover;width:100%;height:100%}.app-container ul li a .card_wrap .sp_img+p[data-v-18ea6d1c]{font-weight:400}.cat-container[data-v-18ea6d1c]{margin-bottom:10%}.cat-container ul[data-v-18ea6d1c]{display:block}.cat-container ul li[data-v-18ea6d1c]{width:100%;margin-left:0!important;margin-top:0!important}.cat-container ul li[data-v-18ea6d1c]:not(:last-child){margin-bottom:4%}.cat-container ul li a[data-v-18ea6d1c]{padding:3% 3% 3% calc(8px + 3%)}.tag-container[data-v-18ea6d1c]{margin-bottom:15%}.tag-container ul li[data-v-18ea6d1c]{margin-right:15px;font-size:15px}.top_profile[data-v-18ea6d1c]{display:block}.top_profile .img_content[data-v-18ea6d1c]{width:70%;margin:0 auto}.top_profile .txt_content[data-v-18ea6d1c]{width:100%;margin-left:0}}',""]),t.exports=o},726:function(t,e,n){"use strict";n.r(e);n(42),n(35),n(61);var o=[function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"main_visual"},[e("figure",[e("img",{staticClass:"pc-only",attrs:{src:n(562),alt:"かいものの助"}}),t._v(" "),e("img",{staticClass:"sp-only",attrs:{src:n(563),alt:"かいものの助"}})]),t._v(" "),e("h1",[t._v("買い物に関する情報や自作アプリを"),e("br"),t._v("発信するブログサイト")])])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("h2",[e("i",{staticClass:"el-icon-mobile-phone"}),t._v(" アプリ")])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("h2",[e("i",{staticClass:"el-icon-document"}),t._v(" 新着記事")])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("h2",[e("i",{staticClass:"el-icon-folder"}),t._v(" カテゴリー")])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("h2",[e("i",{staticClass:"el-icon-collection-tag"}),t._v(" タグ")])},function(){var t=this._self._c;this._self._setupProxy;return t("div",{staticClass:"img_content"},[t("figure",[t("img",{attrs:{src:n(316),alt:"mikiya"}})])])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("p",{staticClass:"sns_icon"},[e("a",{staticStyle:{"text-decoration":"none"},attrs:{href:"https://twitter.com/mikiya32131569",target:"_blank"}},[e("img",{staticStyle:{"max-width":"50px"},attrs:{src:n(313),alt:"twitter"}}),e("br"),e("span",{staticClass:"text-small"},[t._v("Twitterはこちら")])])])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("p",[t._v("\n        千葉県在住のWebエンジニア。都内のWeb制作会社に勤務。"),e("br"),t._v("\n        節約術やポイ活などに興味があり、いかに買い物を安く済ませるかを日々考えております。"),e("br"),t._v("\n        趣味は映画鑑賞。\n      ")])}],r=n(12),c=n(102),l=(n(59),n(0)),d=n(523),_=n.n(d),m=l.default.extend({layout:"default",name:"IndexPage",head:function(){return{title:"かいものの助 | 買い物に関する便利な情報やアプリをお届けするサイト",meta:[{hid:"description",name:"description",content:"買い物に関する便利な情報や便利な自作アプリをお届けするサイトです。日常に欠かせない「買い物」に関する情報や、Webエンジニアとしての技術をたくさんの人に共有したいという思いでサイトを立ち上げました。このサイトが「買い物」の分野において、皆さんの役に立つことを願っています。"},{hid:"keywords",name:"keywords",content:"買い物,ショッピング,情報,ブログ,Webアプリ,便利アプリ,お役立ち情報"},{hid:"og:title",property:"og:title",content:"かいものの助 | 買い物に関する便利な情報やアプリをお届けするサイト"},{hid:"og:description",property:"og:description",content:"買い物に関する便利な情報や便利な自作アプリをお届けするサイトです。日常に欠かせない「買い物」に関する情報や、Webエンジニアとしての技術をたくさんの人に共有したいという思いでサイトを立ち上げました。このサイトが「買い物」の分野において、皆さんの役に立つことを願っています。"}]}},data:function(){return{category:Object(c.a)(_.a.category),tags:Object(c.a)(_.a.tags),apps:Object(c.a)(_.a.apps)}},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,e.next=3,n("article").sortBy("createdAt","desc").limit(9).fetch();case 3:return o=e.sent,e.abrupt("return",{articles:o});case 5:case"end":return e.stop()}}),e)})))()}}),f=(n(700),n(8)),component=Object(f.a)(m,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"container top-container"},[t._m(0),t._v(" "),t._m(1),t._v(" "),e("div",{staticClass:"app-container"},[0!=t.apps.length?e("ul",t._l(t.apps,(function(o){return e("li",{key:o.slug},[e("nuxt-link",{attrs:{to:"/".concat(o.slug,"/")}},[e("div",{staticClass:"card_wrap"},[e("div",{staticClass:"txt_content"},[e("p",{staticClass:"title"},[t._v(t._s(o.name))]),t._v(" "),e("div",{staticClass:"sp_img sp-only"},[e("img",{attrs:{src:n(561)("./".concat(o.img_sp)),alt:o.name}})]),t._v(" "),e("p",[t._v("\n                "+t._s(o.description)+"\n              ")])]),t._v(" "),e("div",{staticClass:"img_content pc-only"},[e("img",{attrs:{src:n(561)("./".concat(o.img_pc)),alt:o.name}})])])])],1)})),0):t._e()]),t._v(" "),t._m(2),t._v(" "),e("div",{staticClass:"blogs-container"},[0!=t.articles?e("article-list",{attrs:{articles:t.articles}}):e("p",[t._v("記事がありません。")]),t._v(" "),e("div",{staticClass:"btn_wrap"},[e("nuxt-link",{staticClass:"more_btn",attrs:{to:"/new_post"}},[t._v("もっと見る")])],1)],1),t._v(" "),t._m(3),t._v(" "),e("div",{staticClass:"cat-container"},[0!=t.category?e("ul",t._l(t.category,(function(n){return e("li",{key:n.slug},[e("nuxt-link",{attrs:{to:"/category/".concat(n.slug)}},[t._v("\n          "+t._s(n.text)+"\n        ")])],1)})),0):e("p",[t._v("記事がありません。")])]),t._v(" "),t._m(4),t._v(" "),e("div",{staticClass:"tag-container"},[0!=t.tags?e("ul",t._l(t.tags,(function(n){return e("li",{key:n.slug},[e("nuxt-link",{attrs:{to:"/tag/".concat(n.slug)}},[t._v("\n          "+t._s(n.text)+"\n        ")])],1)})),0):e("p",[t._v("記事がありません。")])]),t._v(" "),e("div",{staticClass:"top_profile"},[t._m(5),t._v(" "),e("div",{staticClass:"txt_content"},[e("p",{staticClass:"name"},[t._v("mikiya")]),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),e("div",{staticClass:"btn_wrap"},[e("nuxt-link",{staticClass:"more_btn",attrs:{to:"/profile"}},[t._v("もっと見る")])],1)])])])}),o,!1,null,"18ea6d1c",null);e.default=component.exports;installComponents(component,{ArticleList:n(535).default})}}]);