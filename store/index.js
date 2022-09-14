export const state = () => ({
  itemList: [],
  num: 0,
});

export const mutations = {
  addNum(state) {
    state.num += 1;
  },
  addItemList: (state, itemList) => {
    state.itemList.push(itemList);
  },
  UpdateItemList: (state, itemList) => {
    state.itemList = itemList;
  },
};

export const getters = {
  getItemList(state) {
    return state.itemList;
  },
};
