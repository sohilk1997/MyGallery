import { fetchImages } from '../api';

test('fetchImages returns data', async () => {
  const images = await fetchImages();
  expect(images.length).toBeGreaterThan(0);
});