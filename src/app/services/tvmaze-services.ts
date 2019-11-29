const TVMAZE_API_URL = 'http://api.tvmaze.com';
const TVMAZE_APIS = {
    SHOW_SEARCH: '/search/shows'
};

const handleResponse = async (response) => {
    if (response && response.ok) {
        return response.json();
    } else {
        alert("Error in fetching data from ");
        return undefined
    }
};

export const getShows = async () => {
    const URL = `${TVMAZE_API_URL}${TVMAZE_APIS.SHOW_SEARCH}?q=game`;
    return fetch(URL, {method: 'GET'})
        .then(res => {
            return handleResponse(res);
        })
};