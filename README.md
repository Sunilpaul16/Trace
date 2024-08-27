# Welcome to Trace!

 Trace, a mobile app that centralizes all your virtual activities—books, games, movies—allowing
 users to keep track of everything in one convenient place

This project is set up with Expo and can be run with a few simple commands.

## Getting Started

To set up your development environment and start running the app, follow these steps:

### Prerequisites

Make sure you have the following installed on your machine:

- Git
- Node.js
- npm (Node Package Manager)

### Cloning the Repository

```
git clone git@github.com:Sunilpaul16/Trace.git
cd Trace
```

### Installation

Install the project dependencies using npm:

```
npm install
```

### Running the Project

### Expo Go

Download the Expo Go app onto your device, then use it to scan the QR code from Terminal and run.

## Detailed Setup

### 1. Install Dependencies

Ensure you have all the necessary dependencies installed. In the project directory, execute the following commands:

## Install MongoDB (Optional)

For visual representation of data, download and install MongoDB Compass from [here](https://www.mongodb.com/try/download/compass).

### Backend Setup

Navigate to the server directory and install the required dependencies:

bash

```
cd server/
npm install
```

Start the backend server with:

```
nodemon index.ts
```

### Frontend Setup

Navigate to the app directory and install the necessary dependencies:

bash

```
cd MyNewApp/ npm install
```

Start the Expo development server with:

bash

```
npx expo start
```

This will open a new tab in your default web browser with the Expo DevTools. From there, you can scan the QR code with the Expo Go app on your mobile device or use an emulator to preview the app.

### 2. Running on a Physical Device

1. Install the Expo Go app on your iOS or Android device.
2. Open the Expo Go app and scan the QR code displayed in the Expo DevTools.

### 3. Running on an Emulator

Follow these additional steps if you prefer to use an emulator:

## iOS

- Ensure Xcode is installed.
- Open the iOS Simulator from Xcode. The running app should automatically be detected.

## Android

- Ensure Android Studio is installed.
- Open an Android Virtual Device (AVD). The running app should automatically be detected.

Enjoy developing with Trace! If you encounter any issues, refer to the documentation or seek assistance from the community.
