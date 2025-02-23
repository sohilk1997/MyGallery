import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import NetInfo from '@react-native-community/netinfo';

const GalleryScreen = () => {
  const [dogImages, setDogImages] = useState([]);
  const [kittenImages, setKittenImages] = useState([]);
  const [plantImages, setPlantImages] = useState([]);
  const [isOnline, setIsOnline] = useState(true); // Track internet connectivity
  const navigation = useNavigation();

  // Check internet connectivity
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsOnline(state.isConnected);
    });

    return () => unsubscribe();
  }, []);

  // Fetch images from Flickr API and filter by tags
  useEffect(() => {
    if (!isOnline) return; // Skip API call if offline

    const fetchImages = async () => {
      try {
        const response = await axios.get(
          'https://api.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1&tags=dog,kitten,plants'
        );

        const allImages = response.data.items;

        // Filter images uniquely for each category
        const dogImages = allImages.filter((item) => item.tags.includes('dog'));
        const kittenImages = allImages.filter((item) => item.tags.includes('kitten') );
        const plantImages = allImages.filter((item) => item.tags.includes('plants') );

        setDogImages(dogImages);
        setKittenImages(kittenImages);
        setPlantImages(plantImages);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };
    fetchImages();
  }, [isOnline]);

  // Render each image in a square box
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.imageContainer}
      onPress={() => navigation.navigate('ImageDetail', { image: item })}
    >
      <Image source={{ uri: item.media.m }} style={styles.image} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {!isOnline && (
        <View style={styles.offlineContainer}>
          <Text style={styles.offlineText}>No Internet Connection</Text>
        </View>
      )}

      <Text style={styles.categoryTitle}>Dogs</Text>
      <FlatList
        data={dogImages}
        renderItem={renderItem}
        keyExtractor={(item) => item.link}
        horizontal
        showsHorizontalScrollIndicator={false}
      />

      <Text style={styles.categoryTitle}>Kittens</Text>
      <FlatList
        data={kittenImages}
        renderItem={renderItem}
        keyExtractor={(item) => item.link}
        horizontal
        showsHorizontalScrollIndicator={false}
      />

      <Text style={styles.categoryTitle}>Plants</Text>
      <FlatList
        data={plantImages}
        renderItem={renderItem}
        keyExtractor={(item) => item.link}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  offlineContainer: {
    backgroundColor: '#ff4444',
    padding: 10,
    alignItems: 'center',
  },
  offlineText: {
    color: '#fff',
    fontSize: 16,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
  },
  imageContainer: {
    width: Dimensions.get('window').width * 0.3, // 30% of screen width
    height: Dimensions.get('window').width * 0.3, // Square box
    margin: 5,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 5, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },

  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

export default GalleryScreen;