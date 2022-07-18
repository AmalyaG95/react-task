export const getUsers = async () => {
    const response = await fetch('https://test-15397-default-rtdb.firebaseio.com/users.json');
       
    return response.json();
};

export const deleteUser = async (id) => {
    const response = await fetch(`https://test-15397-default-rtdb.firebaseio.com/users/${id}.json`, {
        method: "DELETE",
      });

    return response.json();
};

export const editUser = async (editableUser) => {
    const response = await fetch(`https://test-15397-default-rtdb.firebaseio.com/users/${editableUser.id}.json`, {
        method: "PUT",
        headers: {
            "content-type": "application/json",
            },
            body: JSON.stringify(editableUser),
        });

    return response.json();
}