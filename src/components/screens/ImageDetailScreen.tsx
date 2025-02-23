import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Share, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Import the icon library

const ImageDetailScreen = ({ route, navigation }) => {
  const { image } = route.params;

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
      {/* Header with Share Icon */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Image Details</Text>
        <TouchableOpacity onPress={handleShare} style={styles.shareButton}>
          <Icon name="share" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Image and Metadata */}
      <Image source={{ uri: image.media.m }} style={styles.fullImage} />
      <Text style={styles.title}>{image.title}</Text>
      <Text style={styles.author}>By: {image.author}</Text>
      <Text style={styles.tags}>Tags: {image.tags}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Roboto-Regular', // Custom font
  },
  shareButton: {
    padding: 8,
  },
  fullImage: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    marginHorizontal: 16,
    fontFamily: 'Roboto-Regular', // Custom font
  },
  author: {
    fontSize: 14,
    color: '#666',
    marginTop: 8,
    marginHorizontal: 16,
    fontFamily: 'Roboto-Regular', // Custom font
  },
  tags: {
    fontSize: 14,
    color: '#333',
    marginTop: 8,
    marginHorizontal: 16,
    fontFamily: 'Roboto-Regular', // Custom font
  },
});

export default ImageDetailScreen;