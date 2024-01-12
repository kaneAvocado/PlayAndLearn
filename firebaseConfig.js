import { initializeApp } from "firebase/app";
import { 
  initializeAuth, 
  getReactNativePersistence 
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import AsyncStorage from '@react-native-async-storage/async-storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7LNQoW2dWcjE_mEsRmhkymEcXEVe7IIw",
  authDomain: "play-and-learn-ec0a1.firebaseapp.com",
  projectId: "play-and-learn-ec0a1",
  storageBucket: "play-and-learn-ec0a1.appspot.com",
  messagingSenderId: "183929506339",
  appId: "1:183929506339:web:6a1ffa1b6c1a2d1ac1bf96",
  measurementId: "G-TF0LL01J4T"
};

const app = initializeApp(firebaseConfig);

// Обновленная инициализация Auth с AsyncStorage
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});
