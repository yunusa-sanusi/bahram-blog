// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBOO3IOajbo-bCRk659BgMRsEkesVpVBWE',
  authDomain: 'bahram-blog-18151.firebaseapp.com',
  projectId: 'bahram-blog-18151',
  storageBucket: 'bahram-blog-18151.appspot.com',
  messagingSenderId: '772794777148',
  appId: '1:772794777148:web:122a955360ebc920d1cd39',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
