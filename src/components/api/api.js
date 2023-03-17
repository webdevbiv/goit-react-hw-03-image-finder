const BASE_URL = 'https://pixabay.com/api/'
const API_KEY = '24773665-69599298287e5482cf3fdda29'

export const getPictures = (search, page) => {
    return fetch(`${BASE_URL}?q=${search}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`)
}