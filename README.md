# Pet Matcher

## How to Run the App

1. **Install dependencies:**
   ```sh
   npm install
   ```
2. **Start Metro bundler:**
   ```sh
   npx react-native start
   ```
3. **Run on Android:**
   ```sh
   npx react-native run-android
   ```
4. **Run on iOS:**
   ```sh
   npx react-native run-ios
   ```

> **Note:**
>
> - For camera functionality, ensure you have granted camera permissions on your device/emulator.
> - For iOS, add the following to your `Info.plist`:
>   ```xml
>   <key>NSCameraUsageDescription</key>
>   <string>We need access to your camera to take photos of your pet.</string>
>   ```

## Platform Used

- **React Native** (cross-platform: Android & iOS)
- **Metro Bundler** for development

## Architecture & Libraries

- **Component-based architecture:**

  - Screens: `HomeScreen`, `DogImageScreen`
  - Components: `ImagePicker`, `PetForm`, `PrimaryButton`, `ToastMessage`

- **Libraries:**

  - `react-native-image-picker`: For picking images from gallery or camera
  - `axios`: For API requests
  - `react-native-toast-message`: For showing toast notifications
  - `@react-navigation/native` & `@react-navigation/native-stack`: For navigation
  - `react-native`: Core UI components

- **State Management:**

  - Uses React's `useState` and `useEffect` hooks for local state

- **Permissions:**
  - Camera permission required for Android (`AndroidManifest.xml`) and iOS (`Info.plist`)

---

Feel free to reach out for any setup issues or questions!
