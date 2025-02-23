### MyGallery

MyGallery is a **React Native** application that fetches and displays images from the **Flickr API**. The app organizes images into categories (dogs, kittens, and plants) and allows users to view image details, share images, and works offline with a no-internet indicator.

---

## Features

- **Horizontal Image Lists**: Images are displayed in horizontal lists for each category (dogs, kittens, plants).
- **Image Details**: Tap on an image to view its details, including title, author, and tags.
- **Share Images**: Share images directly from the detail screen.
- **Offline Support**: Displays a no-internet indicator when offline and prevents app crashes.
- **Custom Fonts**: Uses custom fonts for a polished UI.
- **Responsive Design**: Works seamlessly on both Android and iOS devices.

---

## Prerequisites

Before running the project, ensure you have the following installed:

- **Node.js** (v16 or later)
- **npm** or **yarn**
- **React Native CLI**
- **Android Studio** (for Android development)
- **Xcode** (for iOS development, macOS only)

---

## Installation

Follow these steps to set up the project:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/MyGallery.git
   cd MyGallery

2. **Install Dependencies:
    npm install

3.Link Assets (for custom fonts):
  npx react-native-asset

4. Install iOS Dependencies (macOS only):
    cd ios
    pod install
    cd ..

## Running the App

Android

1. Start the Metro Bundler:
    npx react-native start
   
2. Run the app on an Android device or emulator:
    npx react-native run-android
   
iOS (macOS only)

1. Start the Metro Bundler:
    npx react-native start
   
2. Run the app on an iOS simulator or device:
    npx react-native run-ios
   
## Project Structure

MyGallery/
├── android/               # Android-specific files
├── ios/                   # iOS-specific files
├── assets/                # Custom fonts and images
│   └── fonts/
│       ├── Roboto-Regular.ttf
│       └── Roboto-Bold.ttf
├── src/                   # Application source code
│   ├── screens/           # App screens
│   │   ├── GalleryScreen.tsx
│   │   └── ImageDetailScreen.tsx
│   ├── services/          # API and utility functions
│   ├── components/        # Reusable UI components
│   └── App.tsx            # Main application component
├── .gitignore             # Files and folders to ignore
├── package.json           # Project dependencies
├── react-native.config.js # React Native CLI configuration
└── README.md              # Project documentation

## Dependencies
Main Dependencies
+ React Native: Framework for building mobile apps.

+ React Navigation: Navigation library for React Native.

+ Axios: HTTP client for fetching data from the Flickr API.

+ React Native Vector Icons: Library for icons.

+ React Native NetInfo: Library for detecting internet connectivity.

## Dev Dependencies -
TypeScript: Adds static typing to JavaScript.

Jest: Testing framework for React Native.

## Configuration

Custom Fonts
  Add your font files (e.g., Roboto-Regular.ttf) to the assets/fonts folder.

Update react-native.config.js:

module.exports = {
  assets: ['./assets/fonts'],
};


Link the fonts:
  npx react-native-asset


Environment Variables

If you need to use environment variables (e.g., API keys), install react-native-config:
  npm install react-native-config



## Contributing
  Contributions are welcome! Follow these steps to contribute:

Fork the repository.

Create a new branch:
  git checkout -b feature/your-feature-name

Commit your changes:
  git commit -m "Add your feature"

Push to the branch:
  git push origin feature/your-feature-name

## Acknowledgments
Flickr API: For providing the public image feed.

React Native Community: For maintaining awesome libraries like react-navigation and react-native-vector-icons.

## Contact
For questions or feedback, feel free to reach out:

Name: Sohil
Email: sohilk1997@gmail.com

   
   

   
