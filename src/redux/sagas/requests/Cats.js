export const getCatsByCategory = (id, limit, page) => async () => {
        const response = await fetch(`https://api.thecatapi.com/v1/images/search?limit=${limit}&page=${page}&category_ids=${id}`);

        return await response.json();
};