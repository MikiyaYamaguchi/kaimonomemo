export const state = () => ({
  itemList: [],
  num: 0,
  checkedItemCount: 0,
  finishBtnActive: true,
});

export const mutations = {
  addNum: (state) => {
    state.num += 1;
  },
  updateNum: (state, num) => {
    state.num = num;
  },
  addItemList: (state, { itemList, selectCatNextId }) => {
    if (selectCatNextId != null) {
      state.itemList.splice(
        state.itemList.indexOf(
          state.itemList.find((e) => e.id == selectCatNextId)
        ),
        0,
        itemList
      );
    } else {
      state.itemList.push(itemList);
    }
  },
  addCatList: (state, itemList) => {
    state.itemList.push(itemList);
  },
  addcheckedCount: (state) => {
    state.checkedItemCount += 1;
    let itemListArray = state.itemList.filter(function (item, index) {
      if (item.type == "item") return item;
    });
    if (
      state.checkedItemCount == itemListArray.length &&
      state.checkedItemCount != 0 &&
      itemListArray.length != 0
    ) {
      state.finishBtnActive = false;
    } else {
      state.finishBtnActive = true;
    }
  },
  takeCheckedCount: (state) => {
    state.checkedItemCount -= 1;
    let itemListArray = state.itemList.filter(function (item, index) {
      if (item.type == "item") return item;
    });
    if (
      state.checkedItemCount == itemListArray.length &&
      state.checkedItemCount != 0 &&
      itemListArray.length != 0
    ) {
      state.finishBtnActive = false;
    } else {
      state.finishBtnActive = true;
    }
  },
  setChecked: (state, { checked, id }) => {
    state.itemList.find((e) => e.id === id).checked = checked;
  },
  finishBtnDisActive: (state) => {
    state.finishBtnActive = true;
  },
  UpdateItemList: (state, itemList) => {
    state.itemList = itemList;
  },
  UpdateCheckedCount: (state, count) => {
    state.checkedItemCount = count;
  },
  deleteItemList: (state, id) => {
    let itemListArray = state.itemList.filter(function (item, index) {
      if (item.type == "item") {
        if (state.itemList.find((e) => e.id === id).checked == true) {
          state.checkedItemCount -= 1;
        }
      }
      return item;
    });
    for (let i = 0; i < itemListArray.length; i++) {
      if (String(state.itemList[i].id).indexOf(id) !== -1) {
        state.itemList.splice(i, 1);
        return;
      }
    }
    if (
      state.checkedItemCount == itemListArray.length &&
      state.checkedItemCount != 0 &&
      itemListArray.length != 0
    ) {
      state.finishBtnActive = false;
    } else {
      state.finishBtnActive = true;
    }
  },
  renameItemList: (state, { id, new_name }) => {
    state.itemList.find((e) => e.id === id).param = new_name;
  },
  deleteData: (state) => {
    state.itemList = [];
    state.num = 0;
    state.checkedItemCount = 0;
    state.finishBtnActive = true;
  },
};

export const getters = {
  getItemList: (state) => {
    return state.itemList;
  },
  getItemListArray: (state) => {
    let itemListArray = state.itemList.filter(function (item, index) {
      if (item.type == "item") return item;
    });
    return itemListArray;
  },
  getCatList: (state) => {
    let catList = state.itemList.filter(function (cat, index) {
      if (cat.type == "cat") return cat;
    });
    return catList;
  },
  getCheckedCount: (state) => {
    return state.checkedItemCount;
  },
  getChecked: (state) => {
    return (id) => {
      return state.itemList.find((e) => e.id === id).checked;
    };
  },
};
