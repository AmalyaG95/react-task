export const addUser = (newUserData) => async () => {
    const response = await fetch('https://test-15397-default-rtdb.firebaseio.com/users.json', {
        method: 'POST',
        headers: {
         "content-type": "application/json",
        },
        body: JSON.stringify(newUserData),
    });
       
    return response.json();
};
