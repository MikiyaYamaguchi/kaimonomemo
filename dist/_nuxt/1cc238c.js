(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{399:function(t,e,o){var content=o(405);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(40).default)("859b2218",content,!0,{sourceMap:!1})},404:function(t,e,o){"use strict";o(399)},405:function(t,e,o){var n=o(39)(!1);n.push([t.i,'.item_card[data-v-69527fc7]{position:relative;z-index:0}.item_card span.edit[data-v-69527fc7]{display:flex;position:absolute;top:0;bottom:0;right:8%;margin:auto;width:22px;height:22px;z-index:1;border-radius:100%;cursor:pointer;background:transparent;transition:background .2s;padding:3px;box-sizing:border-box}.item_card span.edit[data-v-69527fc7]:hover{background:#dcdcdc}.item_card span.close[data-v-69527fc7]{display:flex;position:absolute;top:0;bottom:0;right:3%;margin:auto;width:22px;height:22px;z-index:1;border-radius:100%;cursor:pointer;background:transparent;transition:background .2s;padding:3px;box-sizing:border-box}.item_card span.close[data-v-69527fc7]:hover{background:#dcdcdc}.item_card.cat[data-v-69527fc7]{width:98%!important;cursor:pointer;border-bottom:1px solid #606266}.item_card.cat .el-checkbox[data-v-69527fc7]{border:none;padding:0;align-items:center}.item_card.cat .el-checkbox[data-v-69527fc7] .el-checkbox__input.is-checked+.el-checkbox__label{color:#606266}.item_card.cat .el-checkbox[data-v-69527fc7] .el-checkbox__input{display:none}.item_card.cat .el-checkbox[data-v-69527fc7] .el-checkbox__label{position:relative;padding-left:20px;font-weight:700;font-size:22px}.item_card.cat .el-checkbox[data-v-69527fc7] .el-checkbox__label:after{content:"";width:12px;height:12px;border-radius:100%;background:#606266;position:absolute;top:0;bottom:0;left:0;margin:auto}@media screen and (min-width:768px){.item_card.cat[data-v-69527fc7] .close{right:1.5%}.item_card.cat[data-v-69527fc7] .edit{right:4%}}@media screen and (max-width:767px){.item_card.cat .el-checkbox[data-v-69527fc7] .el-checkbox__label{font-size:18px}.item_card.cat .el-checkbox[data-v-69527fc7] .el-checkbox__label:after{width:10px;height:10px}}@media screen and (max-width:767px){.item_card span.edit[data-v-69527fc7]{right:10%}}.el-checkbox[data-v-69527fc7]{display:flex;align-content:center}.el-checkbox[data-v-69527fc7] .el-checkbox__label{font-size:20px}.el-checkbox[data-v-69527fc7] .el-checkbox__input{display:flex;align-items:center}.el-checkbox[data-v-69527fc7] .el-checkbox__input.is-checked .el-checkbox__inner{background-color:orange;border-color:orange}.el-checkbox[data-v-69527fc7] .el-checkbox__input.is-checked+.el-checkbox__label{color:orange}.el-checkbox.is-bordered.is-checked[data-v-69527fc7]{border-color:orange}@media screen and (max-width:767px){.el-checkbox[data-v-69527fc7] .el-checkbox__label{font-size:17px}}',""]),t.exports=n},406:function(t,e,o){var content=o(413);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(40).default)("68f13f19",content,!0,{sourceMap:!1})},407:function(t,e,o){"use strict";o.r(e);o(400),o(254),o(17);var n=o(0).default.extend({props:{itemName:{type:String},itemId:{type:Number},itemType:{type:String}},data:function(){return{renameDialogVisible:!1,renameValue:"",popupVisible:!1,popupTitle:"商品名を編集",popupPlaceholder:"じゃがいも、鳥もも肉 etc..."}},computed:{checked:{get:function(){return this.$store.getters.getChecked(this.itemId)},set:function(t){this.$store.commit("setChecked",{checked:t,id:this.itemId})}}},methods:{removeItem:function(){this.$store.commit("deleteItemList",this.itemId)},renameItem:function(){this.$store.commit("renameItemList",{id:this.itemId,new_name:this.renameValue}),this.popupVisible=!1},checkItem:function(){var t=this;"item"==this.itemType&&(1==this.$store.state.itemList.find((function(e){return e.id===t.itemId})).checked?this.$store.commit("addcheckedCount"):this.$store.commit("takeCheckedCount"))}},mounted:function(){"cat"==this.itemType&&(this.popupTitle="カテゴリー名を編集",this.popupPlaceholder="カレーライス、調味料 etc...")}}),c=(o(404),o(26)),component=Object(c.a)(n,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"item_card",class:t.itemType},[e("el-checkbox",{attrs:{label:t.itemName,border:""},on:{change:t.checkItem},model:{value:t.checked,callback:function(e){t.checked=e},expression:"checked"}}),t._v(" "),e("el-popover",{attrs:{placement:"top",width:"280"},model:{value:t.popupVisible,callback:function(e){t.popupVisible=e},expression:"popupVisible"}},[e("p",[t._v(t._s(t.popupTitle))]),t._v(" "),e("div",[e("el-input",{attrs:{placeholder:t.popupPlaceholder},model:{value:t.renameValue,callback:function(e){t.renameValue=e},expression:"renameValue"}}),t._v(" "),e("el-button",{staticClass:"rename_btn",style:{marginTop:"3%"},on:{click:t.renameItem}},[t._v("変更する")])],1),t._v(" "),e("span",{staticClass:"edit",attrs:{slot:"reference"},slot:"reference"},[e("i",{staticClass:"el-icon-edit"})])]),t._v(" "),e("span",{staticClass:"close",on:{click:t.removeItem}},[e("i",{staticClass:"el-icon-close"})])],1)}),[],!1,null,"69527fc7",null);e.default=component.exports},408:function(t,e,o){t.exports=o.p+"img/category_icon.1cfeded.png"},409:function(t,e,o){t.exports=o.p+"img/item_icon.1087909.png"},412:function(t,e,o){"use strict";o(406)},413:function(t,e,o){var n=o(39)(!1);n.push([t.i,".container[data-v-513cc5fb]{background:#fff;padding:3% 5%;width:85%;height:100%;margin:0 auto;-ms-box-shadow:0 0 2px 2px rgba(0,0,0,.1);box-shadow:0 0 2px 2px rgba(0,0,0,.1)}.container .content_top_area[data-v-513cc5fb]{margin-bottom:4%;display:flex;justify-content:flex-end;align-items:center}.container .content_top_area[data-v-513cc5fb]>:not(:first-child){margin-left:2%}.container .content_top_area .item_count[data-v-513cc5fb]{margin:0 0 0 2%}.container .content_top_area .finish_btn[data-v-513cc5fb]{display:inline-block;border:none;font-size:16px;padding:.6em 1em;background:gold;-ms-box-shadow:0 4px 0 0 orange;box-shadow:0 4px 0 0 orange;border-radius:5px;font-weight:700;transition:.2s;margin-bottom:4px}.container .content_top_area .finish_btn[data-v-513cc5fb]:hover{color:#222;transform:translateY(4px);box-shadow:none}.container .content_top_area .finish_btn[data-v-513cc5fb]:focus{color:#222!important}.container .content_top_area .finish_btn.is-disabled[data-v-513cc5fb]{color:#222;opacity:.5}.container .content_top_area .finish_btn.is-disabled[data-v-513cc5fb]:hover{transform:translateY(0);-ms-box-shadow:0 4px 0 0 orange;box-shadow:0 4px 0 0 orange}.container .content_top_area .el-icon-share[data-v-513cc5fb]{cursor:pointer;font-size:25px}.container .content_top_area .el-icon-plus[data-v-513cc5fb]{cursor:pointer;font-size:25px;color:orange}@media screen and (max-width:767px){.container .content_top_area[data-v-513cc5fb]>:not(:first-child){margin-left:5%}.container .content_top_area .finish_btn[data-v-513cc5fb]{font-size:14px}}.container[data-v-513cc5fb] .el-dialog__wrapper .el-dialog{margin-top:20vh;height:50%;display:flex;align-items:center;justify-content:center}.container[data-v-513cc5fb] .el-dialog__wrapper .el-dialog .el-dialog__header{padding:0}.container[data-v-513cc5fb] .el-dialog__wrapper .el-dialog .el-dialog__body{width:100%}.container[data-v-513cc5fb] .el-dialog__wrapper .el-dialog .btn{font-size:20px;display:flex;align-content:center;justify-content:center;color:#222;border-radius:5px;padding:1.2em;width:90%;margin:0 auto;transition:.2s;font-weight:700;cursor:pointer}.container[data-v-513cc5fb] .el-dialog__wrapper .el-dialog .btn:first-child{margin-bottom:5%}.container[data-v-513cc5fb] .el-dialog__wrapper .el-dialog .btn img{width:30px;margin-right:10px}.container[data-v-513cc5fb] .el-dialog__wrapper .el-dialog .btn:first-child{background:orange}.container[data-v-513cc5fb] .el-dialog__wrapper .el-dialog .btn:first-child:hover{background:#e58b00}.container[data-v-513cc5fb] .el-dialog__wrapper .el-dialog .btn:nth-child(2){background:gold}.container[data-v-513cc5fb] .el-dialog__wrapper .el-dialog .btn:nth-child(2):hover{background:#e5bd00}.container[data-v-513cc5fb] .el-dialog__wrapper:last-child .el-dialog{flex-direction:column}.container[data-v-513cc5fb] .el-dialog__wrapper:last-child .el-dialog .el-dialog__footer button:first-child:hover{background:none;color:#606266;opacity:.8;border-color:#dcdfe6}.container[data-v-513cc5fb] .el-dialog__wrapper:last-child .el-dialog .el-dialog__footer button:last-child{background:orange;border-color:orange;color:#222}.container[data-v-513cc5fb] .el-dialog__wrapper:last-child .el-dialog .el-dialog__footer button:last-child:hover{background:#e58b00}.container .item-card_wrap[data-v-513cc5fb]{display:flex;flex-wrap:wrap;max-height:calc(92% - 25px);overflow-y:scroll}.container .item-card_wrap>div[data-v-513cc5fb]{width:48%;margin:1% 1% 0!important;margin:6px 0;z-index:1}.container .item-card_wrap>div.item[data-v-513cc5fb]{border-radius:4px}.container .item-card_wrap>div.sortable-chosen[data-v-513cc5fb]{background:#dcdcdc}@media screen and (max-width:767px){.container[data-v-513cc5fb] .el-dialog{width:90%!important}.container[data-v-513cc5fb] .el-dialog .btn{font-size:18px!important}.container[data-v-513cc5fb] .el-dialog .btn img{width:25px}.container .item-card_wrap>div[data-v-513cc5fb]{width:100%;margin:3% 0 0!important}}.inner_dialog .inner_dialog_title[data-v-513cc5fb]{font-size:26px;margin-bottom:5px;font-weight:700}.inner_dialog[data-v-513cc5fb] .el-select{margin-top:10px}.inner_dialog[data-v-513cc5fb] .el-dialog__body{padding:30px 20px 50px}.inner_dialog[data-v-513cc5fb] .el-dialog__body .el-input__inner{font-size:16px}.inner_dialog .add_btn[data-v-513cc5fb]{display:block;border:none;margin:20px auto 0;width:100%;max-width:300px;font-size:20px;padding:.6em;background:gold;-ms-box-shadow:0 4px 0 0 orange;box-shadow:0 4px 0 0 orange;border-radius:5px;font-weight:700;transition:.2s}.inner_dialog .add_btn[data-v-513cc5fb]:hover{color:#222;transform:translateY(4px);box-shadow:none}@media screen and (max-width:767px){.inner_dialog[data-v-513cc5fb] .el-dialog{width:90%}.inner_dialog .inner_dialog_title[data-v-513cc5fb]{font-size:22px}.inner_dialog .add_btn[data-v-513cc5fb]{font-size:16px}}",""]),t.exports=n},414:function(t,e,o){"use strict";o.r(e);o(254),o(17);var n=o(0),c=o(410),r=o.n(c),l=n.default.extend({layout:"default",components:{draggable:r.a},data:function(){return{dialogVisible:!1,innerDialog:!1,finishDialog:!1,form_type:!1,form_value:"",catSelectVal:null,share_url_value:"http://www.test.com"}},computed:{itemList:{get:function(){return this.$store.state.itemList},set:function(t){this.$store.commit("UpdateItemList",t)}},checkedItemCount:{get:function(){return this.$store.getters.getCheckedCount}},finishBtnActive:{get:function(){return this.$store.state.finishBtnActive}},ItemListArray:{get:function(){return this.$store.getters.getItemListArray}},catList:{get:function(){return this.$store.getters.getCatList}}},mounted:function(){console.log(this.itemList)},methods:{itemBtnClick:function(){this.form_type=!0,this.innerDialog=!0},catBtnClick:function(){this.form_type=!1,this.innerDialog=!0},setStrageItem:function(t){var e=this;if(null!=this.catSelectVal){var o=null;o=this.catList.indexOf(this.catList.find((function(t){return t.param==e.catSelectVal})))==this.catList.length-1?null:this.catList[this.catList.indexOf(this.catList.find((function(t){return t.param==e.catSelectVal})))+1].id,this.$store.commit("addItemList",{itemList:{id:this.$store.state.num,param:t,type:"item",checked:!1},selectCatNextId:o})}else this.$store.commit("addItemList",{itemList:{id:this.$store.state.num,param:t,type:"item",checked:!1},selectCatNextId:null})},setStrageCat:function(t){this.$store.commit("addCatList",{id:this.$store.state.num,param:t,type:"cat",checked:!1})},addItem:function(){this.setStrageItem(this.form_value),this.form_value="",this.$store.commit("addNum"),this.dialogVisible=!1,this.innerDialog=!1,this.catSelectVal=null,this.$store.commit("finishBtnDisActive")},addCat:function(){this.setStrageCat(this.form_value),this.form_value="",this.$store.commit("addNum"),this.dialogVisible=!1,this.innerDialog=!1,this.$store.commit("finishBtnDisActive")},deleteData:function(){this.$store.commit("deleteData"),this.finishDialog=!1},copyShareUrl:function(t){navigator.clipboard.writeText(t).then((function(){alert("コピーしました")})).catch((function(t){console.error(t)}))}}}),d=(o(412),o(26)),component=Object(d.a)(l,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"container"},[e("div",{staticClass:"content_top_area"},[e("p",{staticClass:"item_count"},[t._v("\n      "+t._s(t.checkedItemCount)+"/"+t._s(t.ItemListArray.length)+"\n    ")]),t._v(" "),e("el-button",{staticClass:"finish_btn",attrs:{disabled:t.finishBtnActive},on:{click:function(e){t.finishDialog=!0}}},[t._v("買い物終わり！")]),t._v(" "),e("i",{staticClass:"el-icon-plus",on:{click:function(e){t.dialogVisible=!0}}})],1),t._v(" "),e("draggable",{staticClass:"item-card_wrap",attrs:{options:{delay:200}},model:{value:t.itemList,callback:function(e){t.itemList=e},expression:"itemList"}},t._l(t.itemList,(function(t){return e("ItemCard",{key:t.id,attrs:{itemName:t.param,itemId:t.id,itemType:t.type}})})),1),t._v(" "),e("el-dialog",{attrs:{visible:t.dialogVisible,width:"50%",options:{animation:300,handle:".handle"}},on:{"update:visible":function(e){t.dialogVisible=e}}},[e("p",{staticClass:"btn cat_btn",on:{click:t.catBtnClick}},[e("img",{attrs:{src:o(408)}}),t._v("カテゴリーを追加\n    ")]),t._v(" "),e("p",{staticClass:"btn item_btn",on:{click:t.itemBtnClick}},[e("img",{attrs:{src:o(409)}}),t._v("商品を追加\n    ")]),t._v(" "),e("el-dialog",{staticClass:"inner_dialog",attrs:{visible:t.innerDialog,"append-to-body":""},on:{"update:visible":function(e){t.innerDialog=e}}},[t.form_type?e("div",[e("p",{staticClass:"inner_dialog_title"},[t._v("商品名")]),t._v(" "),e("el-input",{attrs:{placeholder:"じゃがいも、鳥もも肉 etc..."},model:{value:t.form_value,callback:function(e){t.form_value=e},expression:"form_value"}}),t._v(" "),null!=t.itemList.find((function(t){return"cat"===t.type}))?e("el-select",{attrs:{placeholder:"追加カテゴリー"},model:{value:t.catSelectVal,callback:function(e){t.catSelectVal=e},expression:"catSelectVal"}},t._l(t.catList,(function(t){return e("el-option",{key:t.id,attrs:{label:t.param,value:t.param}})})),1):t._e(),t._v(" "),e("el-button",{staticClass:"add_btn",on:{click:t.addItem}},[t._v("追加する")])],1):e("div",[e("p",{staticClass:"inner_dialog_title"},[t._v("カテゴリー名")]),t._v(" "),e("el-input",{attrs:{placeholder:"カレーライス、調味料 etc..."},model:{value:t.form_value,callback:function(e){t.form_value=e},expression:"form_value"}}),t._v(" "),e("el-button",{staticClass:"add_btn",on:{click:t.addCat}},[t._v("追加する")])],1)])],1),t._v(" "),e("el-dialog",{attrs:{title:"お買い物お疲れ様でした！！",visible:t.finishDialog},on:{"update:visible":function(e){t.finishDialog=e}}},[e("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:function(e){t.finishDialog=!1}}},[t._v("戻る")]),t._v(" "),e("el-button",{attrs:{type:"primary"},on:{click:t.deleteData}},[t._v("メモをリセットする")])],1)])],1)}),[],!1,null,"513cc5fb",null);e.default=component.exports;installComponents(component,{ItemCard:o(407).default})}}]);