import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '28202857-da67bbd245b1e5ba97a15a2d6';

const options = {
  params: {
    key: API_KEY,
    q: null,
    image_type: 'photo',
    orientation: 'horizontal',
    page: null,
    per_page: 12,
  },
};

export default async function getImages(query, page) {
  options.params.q = query;
  options.params.page = page;

  const { data } = await axios.get(BASE_URL, options);

  return data;
}

// const API_KEY = '28202857-da67bbd245b1e5ba97a15a2d6';
// const BASE_URL = 'https://pixabay.com/api/';

// export default async function getImages(query, page) {
//     const URL = `${BASE_URL}?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;
//     const response = await axios.get(URL);
//     return response.data;
// }

