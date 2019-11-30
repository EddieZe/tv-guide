const TVMAZE_API_URL = 'http://api.tvmaze.com';
const TVMAZE_APIS = {
    SHOW_SEARCH: '/search/shows',
    SHOW_DETAILS: '/shows'
};

const handleResponse = async (response) => {
    if (response && response.ok) {
        return response.json();
    } else {
        alert("Error in fetching data from ");
        return undefined
    }
};

export const getShows = async (queryStr = '') => {
    const URL = `${TVMAZE_API_URL}${TVMAZE_APIS.SHOW_SEARCH}?q=${queryStr}`;
    return fetch(URL, {method: 'GET'})
        .then(res => {
            return handleResponse(res);
        })
};

export const getShowDetails = async (id: number) => {
    const URL = `${TVMAZE_API_URL}${TVMAZE_APIS.SHOW_DETAILS}/${id}`;
    return fetch(URL, {method: 'GET'})
        .then(res => {
            return handleResponse(res);
        })
};

//http://api.tvmaze.com/shows/1