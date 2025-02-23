import axios from 'axios';

const FLICKR_API_URL =
  'https://api.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1https://api.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1&tags=dog,kitten,plants';

export const fetchImages = async () => {
  try {
    const response = await axios.get(FLICKR_API_URL);
    // console.log("===>", response)
    return response.data.items;
  } catch (error) {
    console.error('Error fetching images:', error);
    return [];
  }
};
