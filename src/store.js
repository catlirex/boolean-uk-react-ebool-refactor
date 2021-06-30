import create from "zustand";

const useStore = create((set) => ({
  basketList: [],
  productList: [],
  setProductList: (newProductList) =>
    set(() => ({
      productList: [...newProductList],
    })),
  setBasketList: (newBasketList) =>
    set(() => ({ basketList: [...newBasketList] })),
}));

export default useStore;
