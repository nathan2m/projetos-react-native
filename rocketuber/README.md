# Uber interface clone in React Native

React Native project created from [this](https://www.youtube.com/watch?v=bg-U0xZwcRk) video. Original project repository [here](https://github.com/rocketseat-content/youtube-react-native-uber).

## Used technologies:
- JavaScript ES6
- [React Native](https://reactnative.dev/)

## How to run?
- Clone this repository.
- Inside `/rocketuber` folder, run `yarn install` to install dependencies.
- Make sure you have a device (Android or iOS) connected or an emulator to run the app.
- Put your [Google Maps API key](https://developers.google.com/maps/documentation/android-sdk/get-api-key) on this files:
    - `/rocketuber/Android/app/src/main/AndroidManifest.xml`
    - `/rocketuber/src/components/Directions/index.js`
    - `/rocketuber/src/components/Map/index.js`
    - `/rocketuber/src/components/Search/index.js`
- Run `npx react-native run-android` to run the app in android device or emulator.
- Run `npx react-native run-ios` to run the app in iOS device or emulator.