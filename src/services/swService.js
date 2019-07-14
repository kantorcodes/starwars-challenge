
const baseURL = 'https://swapi.co/api'

export const get = (page = 1, resourceName) => {
    const url = new URL(`${baseURL}/${resourceName}`);
    url.search = new URLSearchParams({
        'page': page
    })
    return fetch(url)
        .then(response => response.json())
        .then(response => {
            return {
                results: response.results,
                total: response.count,
                error: null
            }
        }).catch(e => {
            console.log(e);
            return {
                error: 'failed'
            }
        });
}

export const byId = (id, resourceName) => {
    console.log('actual...');
    const url = new URL(`${baseURL}/${resourceName}/${id}`);
    return fetch(url)
        .then(response => response.json())
        .catch(e => {
            console.log(e);
            return {
                error: 'failed'
            }
        });
}