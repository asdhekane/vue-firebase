import { createApp } from 'vue'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import App from './App.vue'
import router from './router'

const config = {
  apiKey: 'YOUR-API_KEY',
  authDomain: 'domain.firebaseapp.com',
  projectId: 'vue-firebase-tutorial-xyzw',
  storageBucket: 'bucket',
  messagingSenderId: 'msgid',
  appId: 'appid'
}

firebase.initializeApp(config)

createApp(App).use(router).mount('#app')

firebase.auth().onAuthStateChanged(() => {
  if (!App) {
    createApp(App).use(router).mount('#app')
  }
})
