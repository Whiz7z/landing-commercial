
import {create} from "zustand";

const useStore = create((set) => ({
  selectedItems: [],
  add: (code, title) =>
    set((state) => ({
      selectedItems: [...state.selectedItems, { code, title }],
    })),
  remove: (code) =>
    set((state) => ({
      selectedItems: state.selectedItems.filter((item) => item.code !== code),
    })),
}));

export default useStore;
