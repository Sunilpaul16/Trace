# Welcome to Trace! This project is set up with Expo and can be run with a few simple commands.

## Getting Started
To set up your development environment and start running the app, follow these steps:

### 1. Install Dependencies
Ensure you have all the necessary dependencies installed. In the project directory, execute the following commands:

Install MongoDB (Optional)
For visual representation of data, download and install MongoDB Compass from here.

Backend Setup
Navigate to the server directory and install the required dependencies:
```bash
cd server/
npm install
```

Start the backend server with:
 ```bash
nodemon index.ts
```
Frontend Setup
Navigate to the app directory and install the necessary dependencies:
Navigate to  cd MyNewApp/
```bash
cd MyNewApp/
npm install
```

Start the Expo development server with:
```bash
npx expo start
```

This will open a new tab in your default web browser with the Expo DevTools. From there, you can scan the QR code with
the Expo Go app on your mobile device or use an emulator to preview the app.

### 2. Running on a Physical Device
Install the Expo Go app on your iOS or Android device.
Open the Expo Go app and scan the QR code displayed in the Expo DevTools.
### 3. Running on an Emulator
Follow these additional steps if you prefer to use an emulator:

iOS
Ensure Xcode is installed.
Open the iOS Simulator from Xcode. The running app should automatically be detected.
Android
Ensure Android Studio is installed.
Open an Android Virtual Device (AVD). The running app should automatically be detected.
Enjoy developing with Trace! If you encounter any issues, refer to the documentation or seek assistance from the community.
