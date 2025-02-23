import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import GalleryScreen from './components/screens/GalleryScreen';
import ImageDetailScreen from './components/screens/ImageDetailScreen';

const Stack = createStackNavigator();

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Gallery" component={GalleryScreen} />
        <Stack.Screen name="ImageDetail" component={ImageDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;