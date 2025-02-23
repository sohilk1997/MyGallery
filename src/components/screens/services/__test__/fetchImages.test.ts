import axios from 'axios';
import fetchImages, { ImageItem } from '../../services/api';

// Mock axios
// jest.mock('axios');
// const mockedAxios = axios as jest.Mocked<typeof axios>;

// fetchImages.test.ts
jest.mock('axios');
test('fetches images from API', async () => {
  axios.get.mockResolvedValue({ data: { items: [] } });
  const images = await fetchImages();
  expect(images).toEqual([]);
});


describe('fetchImages', () => {
  it('should fetch images for a given tag', async () => {
    // Mock data
    const mockData: ImageItem[] = [
      {
        title: 'Dog Image',
        link: 'https://www.flickr.com/photos/dog',
        media: { m: 'https://live.staticflickr.com/dog.jpg' },
        date_taken: '2023-10-01T12:00:00Z',
        description: 'A cute dog',
        tags: 'dog',
      },
    ];

    // Mock axios response
    mockedAxios.get.mockResolvedValueOnce({ data: { items: mockData } });

    // Call the function
    const result = await fetchImages('dog');

    // Assertions
    expect(mockedAxios.get).toHaveBeenCalledWith(
      'https://www.flickr.com/services/feeds/photos_public.gne?format=json&tags=dog&nojsoncallback=1'
    );
    expect(result).toEqual(mockData);
  });

  it('should handle errors when fetching images', async () => {
    // Mock axios error
    mockedAxios.get.mockRejectedValueOnce(new Error('Network Error'));

    // Call the function
    const result = await fetchImages('dog');

    // Assertions
    expect(mockedAxios.get).toHaveBeenCalledWith(
      'https://www.flickr.com/services/feeds/photos_public.gne?format=json&tags=dog&nojsoncallback=1'
    );
    expect(result).toEqual([]);
  });
});