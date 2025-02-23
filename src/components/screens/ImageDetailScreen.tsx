import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Share,
} from 'react-native';

const ImageDetailScreen = ({route}) => {
  const {image} = route.params;

  // Function to share the image
  const handleShare = async () => {
    try {
      await Share.share({
        message: `Check out this image: ${image.media.m}`,
        url: image.media.m,
      });
    } catch (error) {
      console.error('Error sharing image:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={{uri: image.media.m}} style={styles.fullImage} />
      <Text style={styles.title}>{image.title}</Text>
      <Text style={styles.author}>By: {image.author}</Text>
      <Text style={styles.tags}>Tags: {image.tags}</Text>
      <TouchableOpacity style={styles.shareButton} onPress={handleShare}>
        <Text style={styles.shareButtonText}>Share Image</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  fullImage: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  author: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  tags: {
    fontSize: 14,
    color: '#333',
    marginTop: 5,
  },
  shareButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#007BFF',
    borderRadius: 5,
  },
  shareButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default ImageDetailScreen;
