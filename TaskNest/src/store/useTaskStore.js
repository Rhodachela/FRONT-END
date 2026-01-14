// store/useTaskStore.js
import create from "zustand";

export const useTaskStore = create((set) => ({
  filter: "All",
  setFilter: (filter) => set({ filter }),
  search: "",
  setSearch: (search) => set({ search }),
  selectedTaskId: null,
  setSelectedTaskId: (id) => set({ selectedTaskId: id })
}));
