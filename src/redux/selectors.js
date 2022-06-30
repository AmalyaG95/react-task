const selectAddUserFormData = (state) => ({
  AddUserFormData: state.AddUserFormState,
});

const selectUsersListData = (state) => ({
  users: state.UsersListState.users,
  editableUser: state.UsersListState.editableUser,
  isOpenEditUserModal: state.UsersListState.isOpenEditUserModal,
  isOpenDropdown: state.UsersListState.isOpenDropdown,
  isRequestEnded: state.UsersListState.isRequestEnded,
});

export {
  selectAddUserFormData,
  selectUsersListData,
};