export const getData = async (url: string) => {
    const response = await fetch(url);
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
    if (!response.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data');
    }
    return await response.json()
};
