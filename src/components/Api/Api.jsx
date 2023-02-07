import axios from 'axios';

axios.defaults.baseURL = `https://pixabay.com/api`;

export const Api = async (inputValue, pageNr) => {
  const response = await axios.get(`/?q=${inputValue}&page=${pageNr}&key=33444522-e89b0d0f868facf1ece6c094d&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response.data.hits.map(image => {
    return {
      id: image.id,
      webformatURL: image.webformatURL,
      largeImageURL: image.largeImageURL,
      tags: image.tags,
    };
  });
};