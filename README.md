# Vue.js & Firebase Authentication

This project demonstrates a standard method for implementing user authentication in a Vue.js application using Google Firebase. It provides a secure way to manage user login, logout, and protect application routes, ensuring that only authenticated users can access designated content.

This project is based on the tutorial "[How to make basic authentication in Vue.js using Google Firebase](https://michaljurkowski.medium.com/how-to-make-basic-authentication-in-vue-js-using-google-firebase-e3ec7dad274)" by Michal Jurkowski.

## Features

* **Secure User Authentication:** Handles user sign-up and sign-in using various identity providers (Email/Password, Google, etc.) via Firebase.
* **Persistent Sessions:** Keeps users logged in across browser sessions for a seamless user experience.
* **Protected Routes:** Implements navigation guards to restrict access to specific pages (like a user dashboard) to logged-in users only.
* **FirebaseUI Integration:** Leverages the pre-built and customizable FirebaseUI for a fast, reliable, and user-friendly authentication flow.
* **Global State Management:** Uses Vuex to manage the user's authentication status and data across the entire application.

## Tech Stack

* **Frontend:**
    * [Vue.js](https://vuejs.org/)
    * [Vue Router](https://router.vuejs.org/)
    * [Vuex](https://vuex.vuejs.org/)
* **Backend & Authentication:**
    * [Google Firebase](https://firebase.google.com/)
* **Development & Build:**
    * [Vue CLI](https://cli.vuejs.org/)
    * [Webpack](https://webpack.js.org/)

## Prerequisites

Before you begin, ensure you have the following installed on your local development machine:
* [Node.js](https://nodejs.org/en/) (v16+ recommended)
* [npm](https://www.npmjs.com/) (comes with Node.js)
* [Vue CLI](https://cli.vuejs.org/)

## Getting Started

Follow these steps to set up and run the project locally.

### 1. Configure Firebase

1.  Navigate to the [Firebase Console](https://console.firebase.google.com/).
2.  Click **"Add project"** and follow the setup wizard.
3.  Once your project is created, click the web icon (`</>`) to register a new web application.
4.  Copy the `firebaseConfig` object provided. You will need this for your Vue project.
5.  In the Firebase Console, go to the **Authentication** section. Click the **"Sign-in method"** tab and enable the providers you wish to support (e.g., Email/Password, Google).

### 2. Clone and Install Project

1.  **Clone the repository:**
    ```sh
    git clone <your-repository-url>
    cd <repository-name>
    ```

2.  **Install project dependencies:**
    ```sh
    npm install
    ```

### 3. Set Up Environment Variables

1.  Create a `.env.local` file in the root of your project.
2.  Add your Firebase configuration details to this file, prefixing each key with `VUE_APP_`.
    ```env
    # .env.local
    VUE_APP_FIREBASE_API_KEY="YOUR_API_KEY"
    VUE_APP_FIREBASE_AUTH_DOMAIN="YOUR_AUTH_DOMAIN"
    VUE_APP_FIREBASE_PROJECT_ID="YOUR_PROJECT_ID"
    VUE_APP_FIREBASE_STORAGE_BUCKET="YOUR_STORAGE_BUCKET"
    VUE_APP_FIREBASE_MESSAGING_SENDER_ID="YOUR_MESSAGING_SENDER_ID"
    VUE_APP_FIREBASE_APP_ID="YOUR_APP_ID"
    ```

### 4. Run the Application

Start the local development server.
```sh
npm run serve
```

## How It Works

The authentication flow is orchestrated by three main parts of the application:

1.  **Firebase & FirebaseUI:** Firebase handles the backend user management. The FirebaseUI library is used to render a pre-built login/signup widget on the `/login` page, simplifying the user interface development.

2.  **Vuex State Management:** The application's central store (Vuex) holds the user's state (e.g., `isLoggedIn`, `userData`). An `onAuthStateChanged` listener from Firebase is set up when the app initializes. This listener fires whenever a user logs in or out, and it commits mutations to the Vuex store to keep the state synchronized.

3.  **Vue Router Navigation Guards:** The router uses a `beforeEach` navigation guard to protect routes. Before any navigation occurs, the guard checks if the target route requires authentication (`meta: { requiresAuth: true }`). If it does, it checks the user's login status in the Vuex store. If the user is not authenticated, they are redirected to the `/login` page.
