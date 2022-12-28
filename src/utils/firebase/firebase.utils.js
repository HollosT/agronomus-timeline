import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged} from 'firebase/auth'

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCvCwdm2tneZc981D8yqoiBlUeHPuoq4bA",
    authDomain: "agronomus-timeline-db-10a52.firebaseapp.com",
    projectId: "agronomus-timeline-db-10a52",
    storageBucket: "agronomus-timeline-db-10a52.appspot.com",
    messagingSenderId: "109600202472",
    appId: "1:109600202472:web:6798eeeaca063051d0b35d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
    if (!userAuth) return;
    const userDocRef = doc(db, 'users', userAuth.uid);


    const userSnapshot = await getDoc(userDocRef)


    if (!userSnapshot.exists()) {
        const { userName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                userName,
                email,
                createdAt,
                ...additionalInformation
            })
        } catch (error) {
            console.log('Error creating the user', error.message);
        }
    }

    // if user data does not exists
    // create / set the documetn with the data from userauth in my collection

    // if user data exists
    return userDocRef
}


export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
}


export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback)