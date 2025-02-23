import axios from 'axios';

export interface ImageItem {
  title: string;
  link: string;
  media: { m: string }; // URL of the image
  date_taken: string;
  description: string;
  tags: string;
}

const fetchImages = async (tag: string): Promise<ImageItem[]> => {
  try {
    const response = await axios.get(
      `https://www.flickr.com/services/feeds/photos_public.gne?format=json&tags=${tag}&nojsoncallback=1`
    );
    return response.data.items;
  } catch (error) {
    console.error(`Error fetching ${tag} images:`, error);
    return [];
  }
};

export default fetchImages;
