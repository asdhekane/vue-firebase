import { createApp } from 'vue'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import App from './App.vue'
import router from './router'

const config = {
  apiKey: 'AIzaSyAUsmNYvjpXurfksLQiQSA5gfx3ZbSDXXA',
  authDomain: 'vue-firebase-tutorial-e734f.firebaseapp.com',
  projectId: 'vue-firebase-tutorial-e734f',
  storageBucket: 'vue-firebase-tutorial-e734f.firebasestorage.app',
  messagingSenderId: '240783095064',
  appId: '1:240783095064:web:98f16aa5dbf804e8805a6d'
}

firebase.initializeApp(config)

createApp(App).use(router).mount('#app')

firebase.auth().onAuthStateChanged(() => {
  if (!App) {
    createApp(App).use(router).mount('#app')
  }
})
