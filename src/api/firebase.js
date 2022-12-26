import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import settings from './settings';

const firebaseApp = initializeApp(settings);

export const db = getFirestore(firebaseApp);
export default firebaseApp;
