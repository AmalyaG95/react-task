const selectSidebarData = (state) => ({
  categories: state.SidebarState.categories,
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