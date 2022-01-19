const selectSidebarData = (state) => ({
  categories: state.SidebarState.categories,
  isOpened: state.SidebarState.isOpened,
});

const selectCatsData = (state) => ({
  cats: state.CatsState.cats,
  page: state.CatsState.page,
  limit: state.CatsState.limit,
});

export {
  selectSidebarData,
  selectCatsData,
};