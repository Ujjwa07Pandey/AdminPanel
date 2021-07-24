import firebase from 'firebase/app';
import 'firebase/auth';

export const signUpWithEmailAndPassword = (data) =>
  firebase
    .auth()
    .createUserWithEmailAndPassword(data.email, data.password)
    .then((doc) => doc.user)
    .catch((error) => error.code);

export const signInWithEmailAndPassword = (email, password) =>
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((doc) => doc.user)
    .catch((error) => error.code);

export const signOut = () => firebase.auth().signOut();
