export const getCategories = () => async () => {
    const response = await fetch('https://api.thecatapi.com/v1/categories');
       
    return response.json();
};